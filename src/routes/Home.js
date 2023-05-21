import {useEffect, useState} from "react"
import Character from "../components/Character"

import styles from "../css/Home.module.css"

function Home() {
    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState([])
    const getCharacters = async() => {
        const json = await(
        await fetch(
            `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023`
        )
        ).json();

        setCharacters(json.data.results);
        setLoading(false);

    }

    useEffect(() => {
        getCharacters();
        console.log(`[Call API] Character`)
        console.log(`[Rendering] Home`)
        
    }, [])


    return (
        <div>
            <div className={styles.container}>
            {loading ? (
                <div className={styles.loader}>
                    <span>Loading...</span>
                </div>
            ) : (
                <div className={styles.characters}>
                    {characters.map(character => (
                    <Character 
                    key={character.id}
                    id={character.id}
                    coverImg={character.thumbnail.path + ".jpg"} 
                    title={character.name} />
                    ))}
                    </div>
                )}
            </div>
            
        </div>
          );
        }

export default Home;