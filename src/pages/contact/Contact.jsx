import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="page__container container">
      <h1 className="center title">Contactez-Nous</h1>
      <p className="center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a nisl non
        orci cursus scelerisque. Etiam non tortor vel nulla pulvinar accumsan
        nec et est.
      </p>
      <div className="triple_flex">
        <div className="icon_section">
          <div className="contact_icon">
            <i class="uil uil-map-marker"></i>
          </div>
          <div>Adresse</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a nisl
            non orci cursus scelerisque.
          </p>
        </div>
        <div className="icon_section">
          <div className="contact_icon">
            <i class="uil uil-envelope-edit"></i>
          </div>
          <div className="subtitle">Mail</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a nisl
            non orci cursus scelerisque.
          </p>
        </div>
        <div className="icon_section">
          <div className="contact_icon">
            <i class="uil uil-facebook-f"></i>
          </div>
          <div>Facebook</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a nisl
            non orci cursus scelerisque.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
