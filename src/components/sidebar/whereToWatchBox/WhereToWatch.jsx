import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import CountryDropdown from "./CountryDropdown";
import MyServices from "./MyServices";
import ProvidersGrid from "./ProvidersGrid";
import BoxWrapper from "../BoxWrapper";

const Heading = styled.h3`
  align-items: center;
  display: flex;
  font-size: var(--font-size);
  font-weight: (--font-weight);
  justify-content: space-between;
  margin-top: 20px;
`;

const DropdownContent = styled.div`
  margin-top: 10px;
`;

const WhereToWatchBox = ({ setIsSearchClickable }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [country, setCountry] = useState("JO");
  const [providers, setProviders] = useState([]);
  const [selectedProviders, setSelectedProviders] = useState([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const fetchProvidersByCountry = async () => {
      const apiKey = "a2e43792610eabefa63e1e91cde700d8";
      const url = `https://api.themoviedb.org/3/watch/providers/movie?api_key=${apiKey}&language=en-US&watch_region=${country}`;

      try {
        const response = await fetch(url);
        const data = await response.json();

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

  const handleProviderSelect = (providerId) => {
    setSelectedProviders((prevSelected) =>
      prevSelected.includes(providerId)
        ? prevSelected.filter((id) => id !== providerId)
        : [...prevSelected, providerId]
    );
    /* 
    When I press the where to watch I get this kind of erros  */

    setIsSearchClickable(
      selectedProviders.length > 0 || !selectedProviders.includes(providerId)
    );
  };

  return (
    <BoxWrapper isOpen={isOpen}>
      <Heading onClick={toggleDropdown}>
        Where To Watch
        <span>{isOpen ? <FaChevronDown /> : <FaChevronRight />}</span>
      </Heading>

      {isOpen && (
        <DropdownContent>
          <MyServices />
          <Heading>Country</Heading>
          <CountryDropdown
            selectedCountry={country}
            onSelectCountry={setCountry}
          />
          <ProvidersGrid
            providers={providers}
            selectedProviders={selectedProviders}
            onProviderSelect={handleProviderSelect}
          />
        </DropdownContent>
      )}
    </BoxWrapper>
  );
};

export default WhereToWatchBox;
