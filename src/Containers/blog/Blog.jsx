import "./blog.css";
import { Article } from "../../Components";
import { blog01, blog02, blog03, blog04, blog05 } from "./ImageImports";

const Blog = () => {
  return (
    <div className="gpt4o__blog section__padding" id="blog">
      <div className="gpt4o__blog-heading">
        <h2 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h2>
      </div>
      <div className="gpt4o__blog-container">
        <div className="gpt4o__blog-container_groupA">
          <Article
            imageUrl={blog01}
            date="Sep 25, 2023"
            title="GPT-4o and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
        <div className="gpt4o__blog-container_groupB">
          <Article
            imageUrl={blog02}
            date="Sep 26, 2023"
            title="GPT-4o and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imageUrl={blog03}
            date="Sep 27, 2023"
            title="GPT-4o and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imageUrl={blog04}
            date="Sep 28, 2023"
            alt="GPT-4o and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imageUrl={blog05}
            date="Sep 29, 2023"
            title="GPT-4o and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
