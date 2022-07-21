import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function ErrorPage() {
    return (
        <div>Error
            <br /> Come back here 
            <Button><Link to='/'>Home</Link></Button>
        </div>
    )
}

export default ErrorPage