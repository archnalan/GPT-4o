import "./navbar.css";
import { RiMenuAddLine, RiMenuFill } from "react-icons/ri";
import logo from "../../assets/GPT-4o.svg";
import { useState } from "react";

const Menu = () => (
  <p>
    <a href="#home">Home</a>
    <a href="#wgpt4o">What is GTP-4o?</a>
    <a href="#possibility">OpenAI</a>
    <a href="#features">Case Studies</a>
    <a href="#blog">Library</a>
  </p>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt4o__navbar">
      <div className="gpt4o__navbar-link">
        <div className="gpt4o__navbar-link_logo">
          <img src={logo} alt="GPT-4o" />
        </div>
        <div className="gpt4o__navbar-links_container">
          <Menu />
        </div>
        <div className="gpt4o__navbar-links-end">
          <div className="gpt4o__navbar-sign">
            <p>
              <a href="#signIn">Sign In</a>
            </p>
            <button className="button">Sign Up</button>
          </div>
          <div className="gpt4o__navbar-menu">
            {toggleMenu ? (
              <RiMenuFill
                color="white"
                size={27}
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <RiMenuAddLine
                color="white"
                size={27}
                onClick={() => setToggleMenu(true)}
              />
            )}
            {toggleMenu && (
              <div className="gpt4o__navbar-menu_container scale-up-center">
                <div className="gpt4o__navbar-menu_container-links">
                  <Menu />
                </div>
                <div className="gpt4o__navbar-menu_container-links-sign">
                  <p>
                    <a href="#signIn">Sign In</a>
                  </p>
                  <button className="button">Sign Up</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
