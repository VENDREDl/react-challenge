import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import Detail from "../routes/Detail"
import DetailInfo from "../routes/DetailInfo"
import styles from "../css/DetailInfo.module.css"

function CharacterDetailInfo({thumbnail, creators, role, characters}){

    // console.log(creators)
    // console.log(role)
    console.log(characters)

    const rendering = () => {
        const result = [];

        for(let i = 0; i < creators.length; i++){
            // if(creators.length == 0){
            //     result.push(<div>{"None"}</div>)
            // }

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
            {/* <h3>{role}</h3> */}
        </div>
    )
}



export default CharacterDetailInfo;
