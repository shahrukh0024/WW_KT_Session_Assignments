import Carousel from "react-bootstrap/Carousel";

import { useNavigate } from "react-router-dom";

function CarouselDarkVariant({ prods }) {
  const navigate = useNavigate();
  const carouselItemHandler = (id) => {
    // console.log(id);
    navigate(`/product/${id}`);
  };
  return (
    <Carousel variant="dark" interval={1500}>
      {prods.map((prod) => (
        <Carousel.Item onClick={() => carouselItemHandler(prod.id)}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <img className="d-block  " src={prod.image} alt="First slide" />
          </div>
          <Carousel.Caption>
            <h5>{prod.title}</h5>
            <p>{prod.description.substring(0, 120)}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselDarkVariant;
