import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useRef, useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_PRODUCT } from "../hooks/useProducts";
import { useHistory } from "react-router-dom";

const ProductAddPage = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const name = useRef<HTMLInputElement>(null);
  const category = useRef<HTMLInputElement>(null);
  const price = useRef<HTMLInputElement>(null);

  const [createProduct, { loading, error }] = useMutation(CREATE_PRODUCT, {
    onCompleted: () => {
      setIsSuccess(true);
    },
  });

  const createProductHandler = () => {
    createProduct({
      variables: {
        name: name?.current?.value,
        price: parseFloat(price?.current?.value!),
        category: category?.current?.value,
      },
    });
  };

  const history = useHistory();

  if (loading)
    return (
      <>
        <legend>Enviando...</legend>
      </>
    );

  if (isSuccess)
    return (
      <>
        <legend style={{ paddingTop: 50 }}>
          Produto adicionado com sucesso.
        </legend>
        <Container className="mt-2">
          <Row style={{ padding: 50 }}>
            <Col className="col-md-8 offset-md-2">
              <Button
                variant="primary"
                type="button"
                onClick={() => {
                  window.location.href = "/";
                }}
              >
                Voltar
              </Button>
            </Col>
          </Row>
        </Container>
      </>
    );

  if (error)
    return (
      <>
        <legend style={{ paddingTop: 50 }}>Ocorreu um erro</legend>
        <Container className="mt-2" style={{ padding: 50 }}>
          <Row style={{ padding: 50 }}>
            <Col className="col-md-8 offset-md-2">
              <Button
                variant="primary"
                type="button"
                onClick={() => {
                  history.push("/");
                }}
              >
                Voltar
              </Button>
            </Col>
          </Row>
        </Container>
      </>
    );

  return (
    <>
      <Container className="mt-2" style={{ padding: 50 }}>
        <Row>
          <Col className="col-md-8 offset-md-2">
            <legend>Adicione um produto</legend>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label style={{ alignItems: "flex-start", display: "flex" }}>
                Nome
              </Form.Label>
              <Form.Control type="text" ref={name} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPrice">
              <Form.Label style={{ alignItems: "flex-start", display: "flex" }}>
                Preço
              </Form.Label>
              <Form.Control type="text" ref={price} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formImageUrl">
              <Form.Label style={{ alignItems: "flex-start", display: "flex" }}>
                Categoria
              </Form.Label>
              <Form.Control type="text" ref={category} />
            </Form.Group>
            <Button
              variant="primary"
              type="button"
              onClick={createProductHandler}
            >
              Adicionar
            </Button>
            <Button
              variant="primary"
              type="button"
              onClick={() => {
                history.push("/");
              }}
              style={{ marginLeft: 30 }}
            >
              Voltar
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ProductAddPage;
