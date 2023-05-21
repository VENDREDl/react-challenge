import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import Detail from "../routes/Detail"
import DetailInfo from "../routes/DetailInfo"
import styles from "../css/DetailInfo.module.css"

function CharacterDetailInfo({title, thumbnail}){

    console.log(thumbnail)

    return(
        <div className={styles.detailInfo}>
            <img src={thumbnail} className={styles.img}/>
            {/* <h2 className={styles.title}>
                {title}
            </h2> */}
        </div>
    )
}



export default CharacterDetailInfo;
