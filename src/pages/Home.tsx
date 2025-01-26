import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const addToCartHandler = () => {};

  return (
    <div className="home">
      <section></section>
      <h1>
        Latest Products{" "}
        <Link to="/search" className="findMore">
          More
        </Link>{" "}
      </h1>
      <main>
          {/* 1:13:11 */}
        <ProductCard
          productId="adsasda"
          name="Macbook"
          price={149999}
          stock={50}
          handler={addToCartHandler}
          photo="https://igotoffer.com/apple/wp-content/uploads/2017/05/macbook-12-inch-early-2016.jpg"
        />
      </main>
    </div>
  );
};

export default Home;
