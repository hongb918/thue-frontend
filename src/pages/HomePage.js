import React, { useEffect } from 'react'
import Product from '../components/Product'
import { Row, Col } from 'react-bootstrap'
// import axios from 'axios'
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts, searchProducts } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import ProductCarousel from '../components/ProductCarousel'

function HomePage() {
    // const [products, setProducts] = useState([])
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()
    const keyword = location.search
    console.log(keyword)

    const productList = useSelector(state => state.productList)

    const { error, loading, products } = productList

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch, keyword])
    return (
        <div>
            {/* {!keyword && <ProductCarousel />} */}
            <h1> Top Rated </h1>
            <ProductCarousel />
            <h1> Shop All Furniture </h1>
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