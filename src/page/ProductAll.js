import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../component/ProductCard";
import { fetchProducts } from "../redux/reducers/productReducer";

const ProductAll = () => {
  const productList = useSelector((state) => state.product.productList);
  const dispatch = useDispatch();
  // const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = () => {
    let searchQuery = query.get("q") || "";
    // dispatch(productAction.getProducts(searchQuery));
    dispatch(fetchProducts(searchQuery));
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div>
      <Container>
        <Row>
          {productList.map((item) => (
            <Col lg={3}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
