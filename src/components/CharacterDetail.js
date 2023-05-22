import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import Detail from "../routes/Detail"
import styles from "../css/CharacterDetail.module.css"
import CharacterDetailInfo from "../components/CharacterDetailInfo"

function CharacterDetail({title, link, type}){

    // console.log(link)

    const regexLink = link.replace(/[^0-9]/g, "");
    const dt = regexLink.substr(1);
    // console.log(dt)

    return(
        <div className={styles.main}>
            
            {title != "" ?
                <h3 className={styles.title}>
                    <Link to={`/info/${dt}/${type}`}>{title}</Link>
                </h3> : "" }

            {/* <CharacterDetailInfo /> */}

            <iframe src={`http://221.162.218.180:3000/info/${dt}/${type}`}></iframe>


        </div>
    )
}

CharacterDetail.propTypes = {
    // title: PropTypes.string.isRequired,
}

export default CharacterDetail;
