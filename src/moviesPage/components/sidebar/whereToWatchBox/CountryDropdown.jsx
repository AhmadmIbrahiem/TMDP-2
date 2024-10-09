import React, { useState } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

const customStyles = {
  option: (provided) => ({
    ...provided,
    display: "flex",
    alignItems: "center",
    padding: "10px",
  }),
  singleValue: (provided) => ({
    ...provided,
    display: "flex",
    alignItems: "center",
  }),
};

const CountryOption = ({ label, value }) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <img
      src={`https://flagcdn.com/w20/${value.toLowerCase()}.png`}
      alt={label}
      style={{ width: "20px", marginRight: "10px" }}
    />
    {label}
  </div>
);

const CountryDropdown = ({ selectedCountry, onSelectCountry }) => {
  const options = countryList().getData(); // Get all country options

  const defaultCountry = options.find((option) => option.label === "Jordan");

  const [value, setValue] = useState(
    options.find((option) => option.value === selectedCountry) || defaultCountry
  );

  const handleChange = (selectedOption) => {
    setValue(selectedOption);
    onSelectCountry(selectedOption.value); // Pass the country code to parent
  };

  return (
    <Select
      options={options}
      value={value}
      onChange={handleChange}
      placeholder="Select a country"
      getOptionLabel={(e) => <CountryOption {...e} />}
      getOptionValue={(e) => e.value}
      styles={customStyles}
      isSearchable
    />
  );
};

export default CountryDropdown;
