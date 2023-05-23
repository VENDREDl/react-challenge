import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import styles from "../css/Character.module.css"

function Character({coverImg, title, id}){

    
    return(
        
        <div className={styles.character}>
            
            <img src={coverImg} className={styles.character_img}/>
            <div>
                <h2 className={styles.character_title}>
                    <Link to={`/character/${id}`}>{title}</Link>
                </h2>
            </div>
        </div>
    )
}

Character.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}

export default Character;