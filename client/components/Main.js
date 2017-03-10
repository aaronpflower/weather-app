import React from 'react'
import { Link } from 'react-router'
const styles = require('./Main.less');

console.log(styles)
const Main = (props) => (
    <div> 
        <Link to='/signup'>
            <button className={styles.b} type='button'>Signup</button>
        </Link>
        <Link to='/login'>
            <button type='button'>Login</button>
        </Link>
        <Link to='/'>
            <button type='button'>Home</button>
        </Link>
        {props.children}
    </div>
)

export default Main