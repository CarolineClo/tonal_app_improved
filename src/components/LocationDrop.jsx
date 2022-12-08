import React, { useState, useEffect } from "react";

function Icon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down" viewBox="0 0 16 16">
      <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
    </svg>
  );
}

function LocationDrop({ placeholder, options }) {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  useEffect(() => {
    const handler = () => setShowMenu(false);

    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  });

  const handleInputClick = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  const getDisplay = () => {
    if (selectedValue) {
      return selectedValue.label;
    }
    return placeholder;
  };

  function onItemClick(option) {
    setSelectedValue(option);
  }

  function isSelected(option) {
    if (!selectedValue) {
      return false;
    }

    return selectedValue.value === option.value;
  }

  return (
    <div className="locationDrop">
      <div onClick={handleInputClick} className="locationInput">
        {showMenu && (
          <div className="locationMenu">
            {options.map((option) => (
              <div onClick={() => onItemClick(option)} key={options.value} className={`locationItem ${isSelected(option) && "selected"}`}>
                {option.label}
              </div>
            ))}
          </div>
        )}

        <div className="locationSelectedValue">{getDisplay()}</div>
        <div className="locationTools">
          <div className="locationTool">
            <Icon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationDrop;
