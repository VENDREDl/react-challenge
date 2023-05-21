import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import {useEffect, useState} from "react"

import styles from "../css/Header.module.css"

function Header(){

    return (
        <div>
            <div className={styles.header}>
                <div className={styles.header_left}>
                    <div className={styles.left_name}>
                        <a>hangyu</a>  
                    </div>
                    <div>
                        <Link to={`/`}>HOME</Link>
                    </div>
                </div>
                <div className={styles.header_right}></div>
            </div>

        </div>

    )
}

export default Header;