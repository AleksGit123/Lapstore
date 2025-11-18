import React from "react";
import "./products.css";
import articles from "../../../constants/productArticle";
import product1 from "../../../media/product.png";

const ProductSect = () => {
  

  return (

    <section className="product__section">
      {articles.map((article) => {
        return (
          <article className="product__article" key={article.id} >
            <div className="product__img__div">
              <img src={product1} alt="product" className="product__image" />
            </div>
            <div className="text__div">
              <h2 className="product__article__h2 merriweather">
                {article.title}
              </h2>
              <p className="product__article__p merriweather">{article.description}</p>
            </div>
          
            <div className="button__div">
              <button className="add__to__cart merriweather">
                Add To Cart
              </button>
              <button className="details merriweather">View Details</button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default ProductSect;
