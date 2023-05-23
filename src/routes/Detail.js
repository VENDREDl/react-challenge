import {useParams} from "react-router-dom"
import {useEffect, useState} from "react"
import CharacterDetail from "../components/CharacterDetail";
import styles from "../css/Detail.module.css"


function Detail(){
    const x = useParams()
    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState([])
    const [data, setData] = useState([])

    const [type, setType] = useState('series')


    const onClick = (event) => {
        setType(event.target.innerText)
    }


    const getDetail = async() => {
        const json = await(
        await fetch(
            `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${x.id}`
        )
        ).json();
   
        setDetails(json.data.results)
        setLoading(false);
    }

    const getData = async() => {
        const json = await(
        await fetch(
            `https://marvel-proxy.nomadcoders.workers.dev//v1/public/characters/${x.id}/${type}`
        )
        ).json();
   
        setData(json.data.results)

    }

    useEffect(() => {
        getDetail();
        console.log(`[Call API] Character Detail`)
        console.log(`[Rendering] Detail ${x.id}`)
         
    }, [])

    useEffect(() => { 
        console.log(`[Selected] ${type}`)
        console.log(data)
    }, [type])


    return (
        <div className={styles.detail}>
         <div className={styles.buttons}>
            <button onClick={onClick} value={'Series'}>series</button>
            <button onClick={onClick} value={'Comics'}>comics</button>
            <button onClick={onClick} value={'Stories'}>stories</button>
         </div>
            {type == 'series' ? 
                <div>
                    {details.map(detail => (
                        detail.series.items.map(dt => (
                            <CharacterDetail 
                                key={dt.name} 
                                title={dt.name}
                                link={(dt.resourceURI).replace('gateway.marvel.com', 'marvel-proxy.nomadcoders.workers.dev')}
                                type={"series"}
                                />   
                                ))
                    ))}
                </div> :
                type == 'comics' ?
                <div>
                {details.map(detail => (
                    detail.comics.items.map(dt => (
                        <CharacterDetail 
                            key={dt.name} 
                            title={dt.name}
                            link={(dt.resourceURI).replace('gateway.marvel.com', 'marvel-proxy.nomadcoders.workers.dev')}
                            type={"comics"} />
                    ))
                ))}
                </div> :
                <div>
                {details.map(detail => (
                    detail.stories.items.map(dt => (
                        <CharacterDetail 
                            key={dt.name} 
                            title={dt.name}
                            link={(dt.resourceURI).replace('gateway.marvel.com', 'marvel-proxy.nomadcoders.workers.dev')} 
                            type={"stories"}/>
                    ))
                ))}
                </div>     
            }
        </div>
    )
        
}

export default Detail;

