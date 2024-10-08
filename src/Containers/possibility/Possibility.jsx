import "./possibility.css";
import PossibilityImage from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="gpt4o__possibility section__padding">
      <div className="gpt4o__possibility-image">
        <img src={PossibilityImage} alt="Possibility" />
      </div>
      <div className="gpt4o__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h2 className="gradient__text">
          The possibilities are beyond your imagination
        </h2>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
