import {useParams} from "react-router-dom"
import {useEffect, useState} from "react"
import CharacterDetail from "../components/CharacterDetail";
import Character from "../components/Character"
import CharacterDetailInfo from "../components/CharacterDetailInfo";


function DetailInfo(){
    const x = useParams()
    const [info, setInfo] = useState();
    const [detailInfo, setDetailinfo] = useState()
    const [loading, setLoading] = useState(true);

    // console.log(x)

    const getDetailInfo = async() => {
        const json = await(
        await fetch(
            `https://marvel-proxy.nomadcoders.workers.dev/v1/public/${x.type}/${x.id}`
        )
        ).json();

        

        // console.log(`https://marvel-proxy.nomadcoders.workers.dev/v1/public/${x.type}/${x.id}`)
   
        setDetailinfo(json.data.results)
        setLoading(false)
    }

    useEffect(() => {
        setInfo(x.id)
        getDetailInfo();
        console.log(`[Call API] Character Detail Info`)
        console.log(`[Rendering] Detail Info ${info}`)

        // detailInfo.map(function(dt){
        //     console.log(dt.creators)
        // })
        
    }, [info])

    // title, thumbnail.path, 

    return(
        <div>
            {loading ? <div>Loading</div> : (
                <div>
                    {detailInfo.map(di => (
                <CharacterDetailInfo 
                    // title={di.title}
                    thumbnail={x.type == "stories" ? "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" : di.thumbnail.path + '.jpg'}
                    creators={di.creators.items.map(c => (
                        c.name
                    ))}
                    role={di.creators.items.map(c => (
                        c.role
                    ))}
                    characters={di.characters.items.map(c => (
                        c.name
                    ))}
                    key={di.id}
                    />
           ))}
                </div>
            )
            }
        </div>
    )
    
}

export default DetailInfo;