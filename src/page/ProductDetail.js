import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  let { id } = useParams();

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/thgusKim/hnm-prac/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
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
