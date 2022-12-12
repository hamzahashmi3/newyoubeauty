import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function SearchBox() {
    const [keyword, setKeyword] = useState('')

    const history = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword) {
            history.push(`/?keyword=${keyword}&page=1`)
        } else {
            history.push(history.push(history.location.pathname))
        }
    }
    return (
        <form onSubmit={submitHandler} className="header_search_form">
            <input type="search" onChange={(e) => setKeyword(e.target.value)} className="search_input" name='q' placeholder="Search" required="required" />
            <button type="submit" className="header_search_button d-flex flex-column align-items-center justify-content-center">
                <i className="fa fa-search" aria-hidden="true"></i>
            </button>
        </form>
    )
}

export default SearchBox
