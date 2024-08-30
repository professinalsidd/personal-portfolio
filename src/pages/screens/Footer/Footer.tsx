import React from "react";

const FooterSection = () => {
  return (
    <footer
      style={{
        backgroundColor: "#f2f2f2",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <p>Copyright © Siddharth Jain {new Date().getFullYear()}</p>
    </footer>
  );
};

export default FooterSection;
