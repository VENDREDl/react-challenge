import styles from "../css/DetailInfo.module.css"

function CharacterDetailInfo({thumbnail, creators, role, characters}){

    const rendering = () => {
        const result = [];

        for(let i = 0; i < creators.length; i++){

            if(i < 14){
                result.push(<div>{creators[i] + " - " + role[i]}</div>)
            }
        }

        return result
    }

    const renderCharacters = () => {
        const character = [];

        for(let i = 0; i < characters.length; i++){
            if(i < 14){
                character.push(<div>{characters[i]}</div>)
            }
        }

        return character
    }

    return(
        <div className={styles.detailInfo}>
            <img src={thumbnail} className={styles.img}/>    

            <div className={styles.creators}>
                <h1 className={styles.t}>Creators</h1>
                {creators.length != 0 ? rendering() : "Nothing..."}
            </div>
            <div className={styles.characters}>
                <h1 className={styles.t}>Characters</h1>
                {renderCharacters()}
            </div>
        </div>
    )
}



export default CharacterDetailInfo;
