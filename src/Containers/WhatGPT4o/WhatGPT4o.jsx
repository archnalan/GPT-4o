import "./whatGPT4o.css";
import Feature from "../../Components/feature/Feature";

const WhatGPT4o = () => {
  return (
    <div className="gpt4o__whatgpt4o section__margin" id="wgpt4o">
      <div className="gpt4o__whatgpt4o-feature">
        <Feature
          title="What is GPT-4o"
          text="We so opinion friends me message as delight.Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </div>
      <div className="gpt4o__whatgpt4o-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt4o__whatgpt4o-container">
        <Feature
          title="Chatbots"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
        />
        <Feature
          title="Knowledgebase"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
        <Feature
          title="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
      </div>
    </div>
  );
};

export default WhatGPT4o;
