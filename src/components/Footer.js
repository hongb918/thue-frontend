import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// import { FiGithub } from '@react-icons/fi'
function Footer() {


    return (
        <div>
            <footer>
                <Container>
                    <Row>
                        <Col className='text-center py-3'> Copyright &copy; Thue</Col>
                    </Row>
                </Container>
            </footer>
        </div>
    )
}

export default Footer