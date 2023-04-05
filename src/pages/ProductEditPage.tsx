import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import { useMutation } from "@apollo/client";
import { EDIT_PRODUCT, useProduct } from "../hooks/useProducts";
import { useHistory, useParams } from "react-router-dom";

const ProductAddPage = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const name = useRef<HTMLInputElement>(null);
  const category = useRef<HTMLInputElement>(null);
  const price = useRef<HTMLInputElement>(null);

  const { id } = useParams<{ id: string }>();
  const { loading: dataLoading, data } = useProduct(id);

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("");

  //After loading of data, setting the states with loaded data
  useEffect(() => {
    if (data) {
      setProductName(data?.Product?.name);
      setProductPrice(data?.Product?.price);
      setProductCategory(data?.Product?.category);
    }
  }, [data]);

  function handleChange() {
    setProductName(name?.current?.value!);
    setProductPrice(price?.current?.value!);
    setProductCategory(category?.current?.value!);
  }

  // imports the mutation EDIT_PRODUCT and sets a OnCompleted property
  const [editProduct, { loading, error }] = useMutation(EDIT_PRODUCT, {
    onCompleted: () => {
      setIsSuccess(true);
    },
  });

  const editProductHandler = () => {
    editProduct({
      variables: {
        id: id,
        name: productName,
        price: parseFloat(productPrice),
        category: productCategory,
      },
    });
  };

  const history = useHistory();

  if (dataLoading)
    return (
      <>
        <legend>Carregando...</legend>
      </>
    );

  if (loading)
    return (
      <>
        <legend>Enviando...</legend>
      </>
    );

  if (isSuccess)
    return (
      <>
        <legend style={{ paddingTop: 50 }}>Produto editado com sucesso.</legend>
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
            <legend>Editar um produto</legend>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label style={{ alignItems: "flex-start", display: "flex" }}>
                Nome
              </Form.Label>
              <Form.Control
                type="text"
                ref={name}
                defaultValue={data?.Product?.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPrice">
              <Form.Label style={{ alignItems: "flex-start", display: "flex" }}>
                Preço
              </Form.Label>
              <Form.Control
                type="text"
                ref={price}
                defaultValue={data?.Product?.price}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formImageUrl">
              <Form.Label style={{ alignItems: "flex-start", display: "flex" }}>
                Categoria
              </Form.Label>
              <Form.Control
                type="text"
                ref={category}
                defaultValue={data?.Product?.category}
                onChange={handleChange}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="button"
              onClick={editProductHandler}
            >
              Editar
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
