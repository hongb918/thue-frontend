import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link,  useParams, useNavigate, createSearchParams} from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Card, ListGroupItem, Form } from 'react-bootstrap'
import { listProductDetails } from '../actions/productActions'
import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'


function ProductPage() {
    const [qty, setQty] = useState(1)
    const productId = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const params = { qty: qty }
    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails

    // const [product, setProduct] = useState([])

    const addToCartHandler = () => {
        navigate({
            pathname: `/cart/${productId.id}`,
            search: `?${createSearchParams(params)}`
        })
    }
    
    useEffect(() => {
        dispatch(listProductDetails(productId.id))
    }, [dispatch, productId])


    return (
        <div>
            <Link to='/' className='btn btn-light my-3'> Go Back</Link>
            {loading ?
                <Loader />
                : error
                    ? <Message variant='danger'>{error}</Message>
                    : (
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
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Price:</Col>
                                                <Col>
                                                    <strong>${product.price}</strong>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Status:</Col>
                                                <Col>
                                                    {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>

                                        {product.countInStock > 0 && (
                                            <ListGroupItem>
                                                <Row>
                                                    <Col>Qty</Col>
                                                    <Col xs='auto' className='my-1'>
                                                        <Form.Control
                                                                as="select"
                                                                value={qty}
                                                                onChange={(e) => setQty(e.target.value)}
                                                            >
                                                            {

                                                                [...Array(product.countInStock).keys()].map((x) => (
                                                                    <option key={x + 1} value={x + 1}>
                                                                        {x + 1}
                                                                    </option>
                                                                ))
                                                            }

                                                        </Form.Control>
                                                    </Col>
                                                </Row>
                                        </ListGroupItem>    
                                        )}

                                        <ListGroup.Item>
                                            {/* <button onClick={addToCartHandler}>Add</button> */}
                                            <Button
                                                onClick={addToCartHandler}
                                                className='btn-block'
                                                disabled={product.countInStock === 0}
                                                type='button'>
                                                Add to Cart
                                            </Button>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </Col>
                        </Row>
                    )
            }


        </div>
    )
}

export default ProductPage