import React from 'react'
import { Link } from 'react-router'

const Main = (props) => (
    <div> 
        <Link to='/signup'>
            <button type='button'>Signup</button>
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