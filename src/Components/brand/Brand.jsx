import "./brand.css";
import { google, slack, dropbox, atlassian, shopify } from "./ImageImports";
const Brand = () => {
  return (
    <div className="gpt4o__ourClients section__padding">
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={slack} alt="google" />
      </div>
      <div>
        <img src={dropbox} alt="google" />
      </div>
      <div>
        <img src={atlassian} alt="google" />
      </div>
      <div>
        <img src={shopify} alt="google" />
      </div>
    </div>
  );
};

export default Brand;
