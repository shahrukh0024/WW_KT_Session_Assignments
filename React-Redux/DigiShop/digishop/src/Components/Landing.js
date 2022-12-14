import { useSelector } from "react-redux";
import {
  Recently_Viewed_By_You,
  Welcome_Title,
} from "../Constants/LandingStatic";
import CarouselDarkVariant from "./Utilities/Carousal/Carousel";

export default function Landing() {
  const recentProd = useSelector((state) => {
    return(state.products.recentlyViewedProducts);
    
  });
  console.log(recentProd);
  return (
    <>
      <div>
        <h1>{Welcome_Title}</h1>
      </div>
      {recentProd.length ? (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              margin: "0.12rem",
              padding: "0.12rem",
            }}
          >
            <h2>{Recently_Viewed_By_You}</h2>
          </div>
          <CarouselDarkVariant prods={recentProd} />
        </>
      ) : null}
    </>
  );
}
