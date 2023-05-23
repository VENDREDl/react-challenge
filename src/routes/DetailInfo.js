import {useParams} from "react-router-dom"
import {useEffect, useState} from "react"
import CharacterDetailInfo from "../components/CharacterDetailInfo";

function DetailInfo(){
    const x = useParams()
    const [info, setInfo] = useState();
    const [detailInfo, setDetailinfo] = useState()
    const [loading, setLoading] = useState(true);

    const getDetailInfo = async() => {
        const json = await(
        await fetch(
            `https://marvel-proxy.nomadcoders.workers.dev/v1/public/${x.type}/${x.id}`
        )
        ).json();
   
        setDetailinfo(json.data.results)
        setLoading(false)
    }

    useEffect(() => {
        setInfo(x.id)
        getDetailInfo();
        console.log(`[Call API] Character Detail Info`)
        console.log(`[Rendering] Detail Info ${info}`)
        
    }, [info])

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