import React from "react";

const whatsapp = ({ about }) => {
  return (
    <div className="whatsapp-container">
      <a
        href={`https://wa.me/${about[0].phone[0] || about[0].phone[1]}`}
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp whatsapp-icon"></i>
      </a>
    </div>
  );
};

export default whatsapp;
