import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import styles from "../css/CharacterDetail.module.css"

function CharacterDetail({title, link, type}){

    const regexLink = link.replace(/[^0-9]/g, "");
    const dt = regexLink.substr(1);

    return(
        <div className={styles.main}>
            
            {title != "" ?
                <h3 className={styles.title}>
                    <Link to={`/info/${dt}/${type}`}>{title}</Link>
                </h3> : "" }

            <iframe src={`http://apresmidi.cloud:5000/info/${dt}/${type}`}></iframe>


        </div>
    )
}

CharacterDetail.propTypes = {
    // title: PropTypes.string.isRequired,
}

export default CharacterDetail;
