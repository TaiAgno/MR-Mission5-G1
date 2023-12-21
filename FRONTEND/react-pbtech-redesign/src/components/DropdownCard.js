import React from "react";
import "./DropdownCard.css";

const DropdownCard = ({ specs }) => (
  <div className="dropdown-card">
    <div className="dropdown-specs">
      <p className="dropdown-property">Screen Type:</p>
      <p className="dropdown-value">{specs.screen_type}</p>
      <p className="dropdown-property">Screen Res.:</p>
      <p className="dropdown-value">{specs.screen_resolution}</p>
      <p className="dropdown-property">GPU Model:</p>
      <p className="dropdown-value">{specs.gpu_model}</p>
      <p className="dropdown-property">OS:</p>
      <p className="dropdown-value">{specs.operating_system}</p>
      <p className="dropdown-property">WiFi:</p>
      <p className="dropdown-value">{specs.wifi}</p>
      <p className="dropdown-property">Bluetooth:</p>
      <p className="dropdown-value">{specs.bt}</p>
    </div>
  </div>
);

export default DropdownCard;
