import React, {useState} from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import { useNavigate, useLocation } from 'react-router-dom'

function SearchBox() {

    const navigate = useNavigate()
    const location = useLocation()
    const [keyword, setKeyword] = useState('')

    const submitHanldler = (e) => {
        e.preventDefault()
        if (keyword) {
            navigate(`/?keyword=${keyword}`)
        } else {
            navigate(navigate(location.pathname))
        }
    }



    return (
        <Form onSubmit={submitHanldler} className="d-flex" >
            <FormControl
                type='text'
                name='q'
                value={keyword}
                placeholder="Search"
                onChange={(e) => setKeyword(e.target.value)}
                className='form-control me-sm-2'
            ></FormControl>
            <Button
                type='submit'
                className='btn btn-secondary my-2 my-sm-0'
            >
                Search
            </Button>
        </Form>
    )
}

export default SearchBox