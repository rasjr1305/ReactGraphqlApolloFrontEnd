import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import image1 from "../imgs/1.jpg";
import image2 from "../imgs/2.jpg";
import image3 from "../imgs/3.jpg";
import image4 from "../imgs/4.jpg";

export default function CarouselHeader() {
  const images = [
    {
      id: "1",
      title: "Eleve sua experiência de visualização",
      subTitle:
        "Experimente visuais impressionantes e produtividade aprimorada com nossa linha de monitores de alta qualidade. ",
      src: image1,
    },
    {
      id: "2",
      title: "Atualize o processador do seu PC hoje",
      subTitle:
        "Aumente o desempenho do seu computador com nossos processadores de alta qualidade. Compre agora e experimente velocidades mais rápidas!",
      src: image3,
    },
    {
      id: "3",
      title: "Construa o PC dos seus sonhos",
      subTitle:
        "Atualize para uma placa-mãe de alto desempenho e libere todo o potencial do seu PC.",
      src: image2,
    },
    {
      id: "4",
      title: "Liberte o potencial gráfico do seu PC",
      subTitle:
        "Experimente visuais impressionantes e jogos envolventes com nossa seleção de placas de vídeo.",
      src: image4,
    },
  ];

  return (
    <>
      <Carousel interval={5000} keyboard={false}>
        {images.map((imgs, key) => (
          <Carousel.Item key={key} style={{ maxHeight: "350px" }}>
            <img
              style={{ paddingBottom: 300 }}
              className="d-block w-100"
              src={imgs.src}
              alt={imgs.title}
            />
            <Carousel.Caption>
              <h3>{imgs.title}</h3>
              <p>{imgs.subTitle}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}
