import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { Button } from './Button';
import logo from '../media/logo.jpg';
import departmentPlus from '../media/departmentsplus.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeftRotate } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


function Navbar({ cartCount }) {
  // departments search state
  const [departmentsSearchDropdownVisible, setDepartmentsSearchDropdownVisible] = useState(false);
  const [departmentsSearchSelectedDepartments, setDepartmentsSearchSelectedDepartments] = useState([]);
  const departmentsSearchDepartments = [
    {
      name: 'Computers & Tablets',
      items: ['Laptops', 'Desktop PCs', 'Tablets']
    },
    {
      name: 'PC Peripherals',
      items: ['Monitors', 'Keyboards', 'Cables']
    },
    {
      name: 'PC Parts',
      items: ['Internal Storage', 'Graphic Cards', 'CPU/Processors']
    },
    {
      name: 'Phones & Accessories',
      items: ['Mobile Phones', 'Mobile Phone Cases', 'Power Banks']
    },
    {
      name: 'Audio',
      items: ['Headphones & Earphones', 'Speakers', 'Pro Audio Equipment']
    },
    {
      name: 'Cameras & Drones',
      items: ['DSLR', 'Drones', 'Bags & Cases']
    }
  ];

  // search bar state
  const [searchBarInputValue, setSearchBarInputValue] = useState('');
  const [inputFocused, setInputFocused] = useState(false);
  const [searchBarDropdownVisible, setSearchDropdownVisible] = useState(false);
  const [searchBarOptions, setSearchBarOptions] = useState([
    "Common Searches",
    "Business Laptops",
    "Laptops for Work",
    "PC Peripherals",
    "Graphics Card",
    "Headphones"
  ]);

  // toggle menu state
  const [toggleMenuInputValue, setToggleMenuInputValue] = useState('');
  const [toggleMenuFocused, setToggleMenuFocused] = useState(false);
  const [toggleMenuVisible, setToggleMenuVisible] = useState(false);
  const [toggleMenuOptions, setToggleMenuOptions] = useState([
    "Shop by Department",
    " Computers & Tablets",
    " PC Parts",
    "Printing, Scanning & Office",
    "Gaming & VR",
    "Phones & Accessories",
    "PC Peripherals",
    "Cameras & Drones",
    "+ More Departments"
  ]);

  //toggle search state
  const [toggleSearchBarVisible, setToggleSearchBarVisible] = useState(false);
  const [dropdownClosed, setDropdownClosed] = useState(false);
  
  // departments search functions
  const departmentsSearchToggleDropdown = () => {
    if (!departmentsSearchDropdownVisible) {
      setDepartmentsSearchSelectedDepartments([]);
    }
    setDepartmentsSearchDropdownVisible(!departmentsSearchDropdownVisible);
  };

  const departmentsSearchHandleCheckboxChange = (event) => {
    const department = event.target.value;
    if (event.target.checked) {
      setDepartmentsSearchSelectedDepartments(prevDepartments => [...prevDepartments, department]);
    } else {
      setDepartmentsSearchSelectedDepartments(prevDepartments => prevDepartments.filter(d => d !== department));
    }
  };

  const dropdownRef = useRef(null);
  const searchBarRef = useRef();
  const [wasDropdownVisible, setWasDropdownVisible] = useState(false); // Add this line
  
  useEffect(() => {
    if (departmentsSearchDropdownVisible) {
      setSearchBarInputValue(departmentsSearchSelectedDepartments.join(', '));
      setWasDropdownVisible(true); // Add this line
    } else if (!toggleSearchBarVisible) {
      setWasDropdownVisible(false); // Add this line
    }
  }, [departmentsSearchSelectedDepartments, departmentsSearchDropdownVisible, toggleSearchBarVisible]);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        if (departmentsSearchDropdownVisible) {
          setDepartmentsSearchDropdownVisible(false);
        }
      }
      if (searchBarRef.current && !searchBarRef.current.contains(event.target) && wasDropdownVisible) { // Modify this line
        setToggleSearchBarVisible(false);
      }
    };
  
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [departmentsSearchDropdownVisible, wasDropdownVisible]);
  

  // search bar functions
  const resetDepartmentsCounter = () => {
    setDepartmentsSearchSelectedDepartments([]);
  };

  const searchBarHandleOptionClick = (option) => {
    setSearchBarInputValue(option);
    setSearchDropdownVisible(false);
    resetDepartmentsCounter();
  }

  const searchBarHandleInputChange = (e) => {
    setSearchBarInputValue(e.target.value);
   }

  const searchBarHandleInputFocus = () => {
    setInputFocused(true);
    setSearchDropdownVisible(true);
  }

  const searchBarHandleInputBlur = () => {
    setInputFocused(false);
    setTimeout(() => {
      setSearchDropdownVisible(false);
    }, 200);
  }

  // toggle menu functions
  const toggleMenuHandleOptionClick = (option) => {
    setToggleMenuInputValue(option);
    setToggleMenuVisible(false);
  }

  const toggleMenuHandleInputFocus = () => {
    setToggleMenuFocused(true);
    setToggleMenuVisible(true);
  }
  
  const toggleMenuHandleInputBlur = () => {
    setToggleMenuFocused(false);
    setTimeout(() => {
      setToggleMenuVisible(false);
    }, 200);
  }

  const toggleMenuHandleClick = () => {
    setToggleMenuVisible(!toggleMenuVisible);
  }

  const handleToggleSearchIconClick = () => {
    setToggleSearchBarVisible(!toggleSearchBarVisible);
  };

  return (
    <div className="navbar">
      <div className="navbar-top">
      <button className="navbar-top-item">PB Tech</button>
      <button className="navbar-top-item">Harwired</button>
      <button className="navbar-top-item">PB Business</button>
      <button className="navbar-top-item">PB Education</button>
      <button className="navbar-top-item">PB Wholesale</button>
      <button className="navbar-top-item">PB Government</button>
      <button className="navbar-top-item">PB Health</button>
      <button className="navbar-top-item">PB IoT</button> 
     
      <div className="navbar-top-left-item">
      <button className="navbar-top-item"><FontAwesomeIcon icon={faMobileAlt} style={{color: "#ffffff", marginRight: '5px'}} /> Get the PB Tech App</button>
      </div>
      </div>




      <div className="navbar-middle">
        <div className="logo"><img src={logo} alt="Logo" /></div>
        <div className="search">
        <div className="search-options">
      <button className="search-by-department" onClick={departmentsSearchToggleDropdown}>
        Search by Department<img src={departmentPlus} alt="Department Plus" />
      </button>
      <span className="selected-departments"> • {departmentsSearchSelectedDepartments.length} Departments Selected</span>
      {departmentsSearchDropdownVisible && (
      <div className="department-dropdown" ref={dropdownRef}>
{departmentsSearchDepartments.map((department, index) => (
  <div key={index} className="department-row">
    <div className="department-header">
      <h2 className="department-name">{department.name}</h2>
      <input type="checkbox" value={department.name} onChange={departmentsSearchHandleCheckboxChange} />
    </div>
    {department.items.map((item, itemIndex) => (
      <div key={itemIndex} className="department-item">{item}</div>
    ))}
  </div>
))}
      </div>
    )}
    </div>
  <div className="search-bar">
  <div className="input-button-wrapper">
  <div className="search-input-container">
  <input type="text" placeholder="Type your search" value={searchBarInputValue} onChange={searchBarHandleInputChange} onFocus={searchBarHandleInputFocus} onBlur={searchBarHandleInputBlur} />
  <div className={searchBarDropdownVisible ? 'search-dropdown-visible' : 'search-dropdown-hidden'}>
  {searchBarOptions.map((option, index) => (
    <div key={index} onClick={() => searchBarHandleOptionClick(option)}>
      {option}
    </div>
  ))}
</div>
  <Button className={`btn btn-blue${searchBarInputValue ? '' : ':invalid'} btn-small`}><span className="button-text">Search Store</span></Button>
</div>
</div>
  </div>
</div>
        <div className="client-buttons">
        <Button className='btn btn-blue btn-small-navbar btn-no-hover'><FontAwesomeIcon icon={faUser}  style={{color: "#ffffff"}} /> <span className="button-text-navbar"> Log In</span></Button>
        <div className="button-with-counter">
  <Button className='btn btn-orange btn-small-navbar btn-no-hover'>
    <FontAwesomeIcon className="white-icon" icon={faShoppingCart} />
    <span className="button-text-navbar"> Your Cart</span>
  </Button>
  <div className="cart-counter">{cartCount}</div>
</div>
    </div>
      </div>

      <div className="navbar-bottom">
        <button className="navbar-bottom-item">Departments &#8744;</button>
        <button className="navbar-bottom-item">Brands &#8744;</button>
        <button className="navbar-bottom-item">Services &#8744;</button>
        <button className="navbar-bottom-item">Promotions &#8744;</button>
      </div>



{/* navbar structure for responsiveness */}

            <div className="navbar-middle-hiden">
              <div className="toggle-search-container">
            <div className="toggle-search-bar-container">
              <div>
  <div ref={searchBarRef} className={`toggle-search-bar ${toggleSearchBarVisible ? 'open' : ''}`}>
    <input 
      type="text" 
      placeholder="Search here" 
      value={searchBarInputValue} 
      onChange={searchBarHandleInputChange} 
      onFocus={searchBarHandleInputFocus} 
      onBlur={searchBarHandleInputBlur} 
    />
      <FontAwesomeIcon 
    icon={faSearch} 
    size="1x" 
    style={{color: "#747272"}} 
    onClick={searchBarHandleInputChange} 
  />
  </div>
  <div className={`search-dropdown-visible ${searchBarDropdownVisible ? 'open' : ''}`}>
      {searchBarOptions.map((option, index) => (
        <div key={index} onClick={() => searchBarHandleOptionClick(option)}>
          {option}
        </div>
      ))}
    </div>
    </div>
  </div>
        <div className="menu-search">
        <div className="toggle-menu-container">
        <div className={toggleMenuVisible ? 'toggle-menu-visible' : 'toggle-menu-hidden'}>
      {toggleMenuOptions.map((option, index) => (
        <div key={index} onClick={() => toggleMenuHandleOptionClick(option)}>
          {option}
        </div>
      ))}
    </div>
    </div>
        <FontAwesomeIcon 
  icon={faBars} 
  size="1x" 
  style={{color: "#ffffff"}} 
  onClick={toggleMenuHandleClick}
/>

<div className="toggle-search-container">
  <FontAwesomeIcon 
    icon={faSearch} 
    size="1x" 
    style={{color: "#ffffff"}} 
    onClick={handleToggleSearchIconClick} 
  />
</div>
</div>

  <div className="hidden-logo"><img src={logo} alt="Logo" /></div>
  </div>
  <div className="client-buttons">
        <Button className='btn btn-blue btn-small-navbar btn-no-hover'><FontAwesomeIcon icon={faUser} size="1x" style={{color: "#ffffff"}} /> <span className="button-text-navbar">Log In</span></Button>
           <div className="button-with-counter">
  <Button className='btn btn-orange btn-small-navbar btn-no-hover'>
    <FontAwesomeIcon className="white-icon" icon={faShoppingCart} />
    <span className="button-text-navbar"> Your Cart</span>
  </Button>
  <div className="cart-counter">{cartCount}</div>
</div>    
    </div>
</div>
    </div>

  
  );
}

export default Navbar;