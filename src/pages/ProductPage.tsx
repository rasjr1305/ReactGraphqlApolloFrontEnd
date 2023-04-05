import { Col, Container, Row, Button } from "react-bootstrap";

import { useProduct } from "../hooks/useProducts";

import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { Typography } from "@material-ui/core";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const { error, loading, data } = useProduct(id);
  const history = useHistory();

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Ocorreu um erro.</div>;

  return (
    <>
      <Container className="mt-2" style={{ padding: 50 }}>
        <Row>
          <Col className="col-md-8 offset-md-2">
            <legend style={{ paddingBottom: 30 }}>Visualizar Produto</legend>
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
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProductPage;
