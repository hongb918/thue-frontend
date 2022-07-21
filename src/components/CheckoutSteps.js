import React from 'react'
import { Nav } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'


function CheckoutSteps({ step1, step2, step3, step4 }) {

    return (
        //condition to check the progress, checking through each step
        <Nav className='justify-content-center mb-4'>
            <Nav.Item>
                {step1 ? (
                    //if user is not logged in, need to be logged in and proceeed...repeat for the remaining steps
                    <LinkContainer to='/login'>
                        <Nav.Link>Login</Nav.Link>
                    </LinkContainer>
                ) : (
                        //disabling so user can see but can't click until they are logged in or completed with step 1
                    <Nav.Link disabled>Login</Nav.Link>
                )}
            </Nav.Item>

            <Nav.Item>
                {step2 ? (
                    <LinkContainer to='/shipping'>
                        <Nav.Link>Shipping</Nav.Link>
                    </LinkContainer>
                ) : (
                    <Nav.Link disabled>Shipping</Nav.Link>
                )}
            </Nav.Item>

            <Nav.Item>
                {step3 ? (
                    <LinkContainer to='/payment'>
                        <Nav.Link>Payment</Nav.Link>
                    </LinkContainer>
                ) : (
                    <Nav.Link disabled>Payment</Nav.Link>
                )}
            </Nav.Item>

            <Nav.Item>
                {step4 ? (
                    <LinkContainer to='/placeorder'>
                        <Nav.Link>Place Order</Nav.Link>
                    </LinkContainer>
                ) : (
                    <Nav.Link disabled>Place Order</Nav.Link>
                )}
            </Nav.Item>
        </Nav>
    )
}

export default CheckoutSteps