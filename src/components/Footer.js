import React from "react";

import "./Footer.css";

function Footer(props) {
  return <footer>{
    <span className="footerSpan">
      <form className = "footerForm">
        <input type="text" className="messageInput">
        </input>
      </form>
    </span>
    }</footer>;
}

export default Footer;
