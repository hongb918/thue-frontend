import React, { useEffect } from 'react'
import Product from '../components/Product'
import { Row, Col } from 'react-bootstrap'
// import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

function HomePage() {
    // const [products, setProducts] = useState([])

    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)

    const { error, loading, products } = productList

    useEffect(() => {
        // async function fetchProducts() {
        //     const { data } = await axios.get('http://localhost:8000/api/products/')
        //     setProducts(data)
        // }

        // fetchProducts()
        dispatch(listProducts())

    }, [dispatch])

    return (
        <div>
            <h1> Shop the Look </h1>
            {loading ? <Loader />
                : error ? <Message variant='danger'>{error}</Message>   
                    :
                    <Row>
                        {products.map(product => (
                            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                <Product product={product} />
                            </Col>
                        ))}
                    </Row>
            }
        </div>
    )
}

export default HomePage