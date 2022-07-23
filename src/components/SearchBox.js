import React, { useState } from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {searchProducts} from '../actions/productActions'
function SearchBox() {


    const [keyword, setKeyword] = useState('')

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const submitHanldler = (e) => {
        e.preventDefault()
        if (keyword) {
            navigate(`/thue/?keyword=${keyword}`)
            // dispatch(searchProducts(keyword))
            // console.log(keyword)
        } else {
            console.log('Please enter a keyword')
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