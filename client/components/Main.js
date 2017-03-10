import React from 'react'
const styles = require('./Main.less');

const Main = (props) => (
    <div className={styles.container}>
        {props.children}
    </div>
)

export default Main