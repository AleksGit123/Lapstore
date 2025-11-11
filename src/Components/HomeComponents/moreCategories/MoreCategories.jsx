import React from "react";
import "./moreCategories.css";
// import articleLaptop from "../../../media/article-laptop.png"
const MoreCategories = () => {
  return (
    <section className="more__categories__section">
      <h1 className="category__section__h1 merriweather">
        Find Out More!
      </h1>
      <div className="category__article__div">
        <article className="category__article">
            <h2 className="category__article__h2 quicksand">
                Best Choise For Students
            </h2>
        </article>

        <article className="category__article">
            <h2 className="category__article__h2 quicksand">
                Best Choise For Students
            </h2>
        </article>

        <article className="category__article">
            <h2 className="category__article__h2 quicksand">
                Best Choise For Students
            </h2>
        </article>
      </div>
    </section>
  );
};

export default MoreCategories;
