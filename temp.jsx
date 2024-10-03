import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaChevronDown, FaChevronRight, FaRegEdit } from "react-icons/fa";
import CountryDropdown from "./CountryDropdown"; // Assuming you have the CountryDropdown component

const BoxWrapper = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
  margin-bottom: 20px;
  cursor: pointer;
`;

const Heading = styled.h3`
  margin-top: 20px;
  font-size: 1.1rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DropdownContent = styled.div`
  margin-top: 10px;
`;

const MyServicesWrapper = styled.div`
  margin-bottom: 10px;
`;

const MyServicesLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 10px; /* Add margin to create space between label and checkbox */
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: start; /* Aligns the checkbox with the first line of the text */
  gap: 10px;
`;

const ProvidersGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  list-style-type: none;
  padding: 0;
`;

const ProviderItem = styled.li`
  text-align: center;
  position: relative; /* Needed for hover overlay and tooltip */

  &:hover .checkmark {
    opacity: 1;
  }
`;

const ProviderIcon = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

// Checkmark overlay for hover
const CheckmarkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Transparent overlay */
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 5px;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none; /* Prevents interference with hover */
`;

// Tooltip for provider name with a "speech bubble" shape
const Tooltip = styled.div`
  position: absolute;
  top: -35px; /* Adjust this to position the tooltip above the icon */
  left: 50%;
  transform: translateX(-50%);
  background-color: #073b63; /* Dark blue background */
  color: white; /* White text */
  padding: 5px 10px;
  border-radius: 3px;
  font-size: 0.8rem;
  white-space: nowrap;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s ease, visibility 0.3s ease;

  /* Add the small arrow at the bottom */
  &:after {
    content: "";
    position: absolute;
    bottom: -6px; /* Adjust to place it just below the tooltip */
    left: 50%;
    transform: translateX(-50%);
    border-width: 6px;
    border-style: solid;
    border-color: #073b63 transparent transparent transparent; /* Arrow color matches the background */
  }

  ${ProviderItem}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

const WhereToWatchBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [country, setCountry] = useState("JO"); // Default country is Jordan
  const [providers, setProviders] = useState([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Fetch providers based on the selected country
  useEffect(() => {
    const fetchProvidersByCountry = async () => {
      const apiKey = "a2e43792610eabefa63e1e91cde700d8"; // Replace with your own API key
      const url = `https://api.themoviedb.org/3/watch/providers/movie?api_key=${apiKey}&language=en-US&watch_region=${country}`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        console.log("API Response for", country, ":", data);

        if (data.results && data.results.length > 0) {
          setProviders(data.results);
        } else {
          setProviders([]);
        }
      } catch (error) {
        console.error("Error fetching providers:", error);
      }
    };

    fetchProvidersByCountry();
  }, [country]);

  return (
    <BoxWrapper>
      <Heading onClick={toggleDropdown}>
        Where To Watch
        <span>{isOpen ? <FaChevronDown /> : <FaChevronRight />}</span>
      </Heading>

      {isOpen && (
        <DropdownContent>
          <MyServicesWrapper>
            <MyServicesLabel htmlFor="my_services">
              My Services <FaRegEdit />
            </MyServicesLabel>

            <CheckboxWrapper>
              <input
                id="my_services"
                className="k-checkbox"
                type="checkbox"
                name="my_services"
                value="true"
              />
              <label htmlFor="my_services" className="k-checkbox-label">
                Restrict searches to my subscribed services?
              </label>
            </CheckboxWrapper>
          </MyServicesWrapper>

          <Heading>Country</Heading>

          {/* Country Dropdown component */}
          <CountryDropdown
            selectedCountry={country}
            onSelectCountry={setCountry} // Update the selected country on change
          />

          <ProvidersGrid>
            {providers.length > 0 ? (
              providers.map((provider) => (
                <ProviderItem key={provider.provider_id}>
                  <a href="#" title={provider.provider_name}>
                    {provider.logo_path ? (
                      <>
                        <ProviderIcon
                          src={`https://image.tmdb.org/t/p/w92${provider.logo_path}`}
                          alt={provider.provider_name}
                        />
                        {/* Checkmark overlay on hover */}
                        <CheckmarkOverlay className="checkmark">
                          ✔
                        </CheckmarkOverlay>
                        {/* Tooltip showing the provider name */}
                        <Tooltip>{provider.provider_name}</Tooltip>
                      </>
                    ) : (
                      <span>No logo</span>
                    )}
                  </a>
                </ProviderItem>
              ))
            ) : (
              <p>No providers available for {country}</p>
            )}
          </ProvidersGrid>
        </DropdownContent>
      )}
    </BoxWrapper>
  );
};

export default WhereToWatchBox;
