import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import '../splash.scss'

function SplashPage() {
    return (

        <div class="main-content">
            <div class="concept concept-two">
                <div class="hover">
                    <LinkContainer to='/thue'>
                        <h1 className='h1-s'>T</h1>
                    </LinkContainer>
                </div>
                <div class="hover">
                    <LinkContainer to='/thue'>
                        <h1 className='h1-s'>H</h1>
                    </LinkContainer>
                </div>
                <div class="hover">
                    <LinkContainer to='/thue'>
                        <h1 className='h1-s'>U</h1>
                    </LinkContainer>
                </div>
                <div class="hover">
                    <LinkContainer to='/thue'>
                        <h1 className='h1-s'>E</h1>
                    </LinkContainer>
                </div>
            </div>
        </div>
    )
}

export default SplashPage