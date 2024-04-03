import React, { useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productAction } from "../redux/actions/productAction";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.selectedItem);
  // const [product, setProduct] = useState(null);
  let { id } = useParams();

  const getProductDetail = () => {
    // let url = `https://my-json-server.typicode.com/thgusKim/hnm-prac/products/${id}`;
    // let response = await fetch(url);
    // let data = await response.json();
    // setProduct(data);
    dispatch(productAction.getProductDetail(id));
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} alt="" />
        </Col>
        <Col>
          <div>{product?.choice ? "Conscious choice" : ""}</div>
          <div>{product?.title}</div>
          <div>₩{product?.price}</div>
          <div>{product?.new ? "신제품" : ""}</div>
          <div>
            <Form.Select>
              <option>사이즈 선택</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
            </Form.Select>
          </div>
          <div>
            <Button variant="dark">추가</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
