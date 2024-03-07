import React from "react";

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>
        🎲 MASTER.ASD.Yob 🎲 <br />  Copyright © {year}
      </p>
    </footer>
  );
}

export default Footer;
