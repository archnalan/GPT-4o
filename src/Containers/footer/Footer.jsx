import "./footer.css";
import gpt4oLogo from "../../assets/GPT-4o.svg";

const Footer = () => {
  const CurrentYear = new Date().getFullYear();
  return (
    <div className="gpt4o__footer section__padding">
      <div className="gpt4o__footer-heading">
        <h2 className="gradient__text">
          Do you want to step in to the future before others
        </h2>
      </div>
      <div className="gpt4o__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt4o__footer-links">
        <div className="gpt4o__footer-links_logo">
          <img src={gpt4oLogo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="gpt4o__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt4o__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>

        <div className="gpt4o__footer-links_div">
          <h4>Get in touch</h4>
          <p>Terms & Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className="gpt4o__footer-copyright">
        <p>© {CurrentYear} GPT-4o. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
