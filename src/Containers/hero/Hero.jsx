import "./hero.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Hero = () => {
  return (
    <div className="gpt4o__hero section__padding" id="home">
      <div className="gpt4o__hero-content">
        <h1 className="gradient__text">
          Let’s Build Something awesome with GPT-4o OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="gpt4o__hero-content__input">
          <input type="text" placeholder="Your Email Address" />
          <button type="button" className="">
            Get Started
          </button>
        </div>
        <div className="gpt4o__hero-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt4o__hero-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Hero;
