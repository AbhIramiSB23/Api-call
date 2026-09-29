
import React, { useEffect, useState } from "react";
import "./home.css";

const Home = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getProductData();
  }, []);

  const getProductData = async () => {
    try {
      let apiResponse = await fetch("https://dummyjson.com/products");
      apiResponse = await apiResponse.json();
      setProductData(apiResponse.products);
    } catch (error) {
      console.log(error);
      alert("API is wrong");
    }
  };

  return (
    <div className="home">

      <nav className="navbar">
        <h2><span>●</span> NUVORA</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <button>Shop Now</button>
      </nav>


      <section className="hero" id="home">

        <div className="hero-text">
          <small>DISCOVER SOMETHING DIFFERENT</small>

          <h1>
            Products
            <br />
            <span>With Personality.</span>
          </h1>

          <p>
            Explore a carefully selected collection of products
            created to add comfort, style and personality to your
            everyday life.
          </p>

          <a href="#products">
            <button>Explore Collection →</button>
          </a>
        </div>

        <div className="hero-art">
          <div className="round">
            <div className="mini-card">
              <small>FEATURED</small>
              <h2>Fresh<br />Finds</h2>
              <p>2026 Collection</p>
            </div>
          </div>

          <div className="dot one"></div>
          <div className="dot two"></div>
        </div>

      </section>


      <section className="products" id="products">

        <div className="heading">
          <div>
            <small>CURATED FOR YOU</small>
            <h1>Our Products</h1>
          </div>

          <p>
            Explore our latest collection and
            find your next favourite.
          </p>
        </div>

        <div className="product-container">

          {productData.map((eachProduct) => (

            <div className="card" key={eachProduct.id}>

              <div className="image-box">

                <label>NEW</label>

                <img
                  src={eachProduct.thumbnail}
                  alt={eachProduct.title}
                />

              </div>

              <div className="card-content">

                <small>{eachProduct.category}</small>

                <h2>{eachProduct.title}</h2>

                <p>{eachProduct.description}</p>

                <div className="bottom">

                  <strong>${eachProduct.price}</strong>

                  <button>View →</button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>


      <section className="about" id="about">

        <div className="about-text">

          <small>THE NUVORA IDEA</small>

          <h1>
            Less ordinary.
            <br />
            <span>More you.</span>
          </h1>

          <p>
            We believe products should be more than just useful.
            They should feel personal, beautiful and worth keeping.
          </p>

          <button>Our Story →</button>

        </div>

        <div className="about-box">
          <div>
            <span>01</span>
            <h3>Quality</h3>
            <p>Products selected with care.</p>
          </div>

          <div>
            <span>02</span>
            <h3>Style</h3>
            <p>Designed for modern living.</p>
          </div>

          <div>
            <span>03</span>
            <h3>Choice</h3>
            <p>Something for everyone.</p>
          </div>
        </div>

      </section>


      <section className="contact" id="contact">

        <small>YOUR NEXT FIND IS HERE</small>

        <h1>
          Ready to find
          <br />
          something special?
        </h1>

        <a href="#products">
          <button>Start Exploring →</button>
        </a>

      </section>


      <footer>
        <h2><span>●</span> NUVORA</h2>
        <p>© 2026 Nuvora. Crafted with purpose.</p>
      </footer>

    </div>
  );
};

export default Home;

