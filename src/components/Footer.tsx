import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Um pouco sobre nossa empresa:</span>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Radix Nexus
              </h6>
              <p>
                Uma plataforma interna que visa aprimorar a developer experience
                e suportar as atividades dos times de desenvolvimento nos
                projetos para os clientes.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Produtos</h6>
              <p>
                <a href="/" className="text-reset">
                  Processadores
                </a>
              </p>
              <p>
                <a href="/" className="text-reset">
                  Placas Mãe
                </a>
              </p>
              <p>
                <a href="/" className="text-reset">
                  Monitores
                </a>
              </p>
              <p>
                <a href="/" className="text-reset">
                  Placas de Video
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contato</h6>
              <p>
                <MDBIcon icon="home" className="me-3" />
                820 Gessner, Houston, Texas, 77024
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                radix@radixengenharia.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 55 35 2345 6788
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 55 35 2345 6789
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 Copyright:
        <a className="text-reset fw-bold" href="/">
          Nexus
        </a>
      </div>
    </MDBFooter>
  );
}
