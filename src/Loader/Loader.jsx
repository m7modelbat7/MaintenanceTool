import React from 'react'
import styles from './Loader.module.css'
export default function Loader() {
    return (
        <div className="position-fixed top-0 start-0 bottom-0 end-0 d-flex justify-content-center align-items-center bg-dark bg-opacity-50">
            <span className={styles.loader}></span>
        </div>
    )
}
