import React from 'react';
import './DropdownCard.css';

const DropdownCard = ({ specs }) => (
  
  <div className="dropdown-card">
      <div className="dropdown-specs">
  <p className="dropdown-property">Screen Type:</p>
  <p className="dropdown-value">{specs.screenType}</p>
  <p className="dropdown-property">Screen Res.:</p>
  <p className="dropdown-value">{specs.screenRes}</p>
  <p className="dropdown-property">GPU Model:</p>
  <p className="dropdown-value">{specs.gpuModel}</p>
  <p className="dropdown-property">OS:</p>
  <p className="dropdown-value">{specs.os}</p>
  <p className="dropdown-property">WiFi:</p>
  <p className="dropdown-value">{specs.wifi}</p>
  <p className="dropdown-property">Bluetooth:</p>
  <p className="dropdown-value">{specs.bluetooth}</p>
</div>
</div>
);

export default DropdownCard;