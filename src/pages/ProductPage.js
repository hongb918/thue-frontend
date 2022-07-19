import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Card, ListGroupItem } from 'react-bootstrap'
import Rating from '../components/Rating'
import Products from '../Products';

function ProductPage() {
    const { id } = useParams();
    const product = Products.find((p) => p._id === id)
    return (
        <div>
            <Link to='/' className='btn btn-light my-3'> Go Back</Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup className='list-group-flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Price: <strong>${product.price}</strong>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Description: {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>

                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroupItem>
                                <Row>
                                    <Col>Status: </Col>
                                    <Col>
                                        <strong>
                                            {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                        </strong>
                                    </Col>
                                </Row>
                            </ListGroupItem>

                            <ListGroupItem>
                                <Button className='btn-primary' disabled={product.countInStock === 0 } type='button'>Add to Cart</Button>
                            </ListGroupItem>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default ProductPage