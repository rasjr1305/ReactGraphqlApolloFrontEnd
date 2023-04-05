import { useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { DELETE_PRODUCT, useProduct } from "../hooks/useProducts";

import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { Typography } from "@material-ui/core";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function ProductDeletePage() {
  const { id } = useParams<{ id: string }>();
  const [isSuccess, setIsSuccess] = useState(false);
  const { error: dataError, loading: dataLoading, data } = useProduct(id);
  const history = useHistory();

  const [deleteProduct, { loading, error }] = useMutation(DELETE_PRODUCT, {
    onCompleted: () => {
      setIsSuccess(true);
    },
  });

  const deleteProductHandler = () => {
    deleteProduct({
      variables: {
        id: id,
      },
    });
  };

  if (loading) return <div>Deletando...</div>;
  if (error) return <div>Ocorreu um erro.</div>;

  if (dataLoading)
    return (
      <>
        <legend>Carregando...</legend>
      </>
    );
  if (dataError)
    return (
      <>
        <legend>Erro ao carregar dados do Produto...</legend>
      </>
    );

  if (isSuccess)
    return (
      <>
        <legend style={{ paddingTop: 50 }}>
          Produto deletado com sucesso.
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
            <legend style={{ paddingBottom: 30 }}>Deletar Produto</legend>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={4} textAlign={"right"}>
                  <Typography>Nome:</Typography>
                </Grid>
                <Grid item xs={8} textAlign={"left"}>
                  <Typography>{data.Product.name}</Typography>
                </Grid>
                <Grid item xs={4} textAlign={"right"}>
                  <Typography>Preço:</Typography>
                </Grid>
                <Grid item xs={8} textAlign={"left"}>
                  <Typography>R$ {data.Product.price}</Typography>
                </Grid>
                <Grid item xs={4} textAlign={"right"}>
                  <Typography>Categoria:</Typography>
                </Grid>
                <Grid
                  item
                  xs={8}
                  textAlign={"left"}
                  style={{ paddingBottom: 50 }}
                >
                  <Typography>{data.Product.category}</Typography>
                </Grid>
              </Grid>
            </Box>
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
            <Button
              variant="primary"
              type="button"
              onClick={deleteProductHandler}
              style={{ marginLeft: 30 }}
            >
              Deletar Produto
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProductDeletePage;
