import React from "react";
import styled from "styled-components";

const ProvidersGridWrapper = styled.ul`
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(4, 1fr);
  list-style-type: none;
  padding: 0;
`;

const ProviderItem = styled.li`
  position: relative;
  text-align: center;

  &:hover .checkmark {
    opacity: ${({ isSelected }) => (isSelected ? "1" : "0.5")};
  }
`;

const ProviderIcon = styled.img`
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 50px;
  object-fit: cover;
  transition: transform 0.3s ease;
  width: 50px;

  &:hover {
    transform: scale(1.05);
  }
`;

const CheckmarkOverlay = styled.div`
  align-items: center;
  background-color: var(--accent-color);
  border-radius: 5px;
  bottom: 0;
  color: var(--text-color);
  display: flex;
  font-weight: bold;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  opacity: ${({ isSelected }) =>
    isSelected ? "1" : "0"}; /* Persistent if selected */
  transition: opacity 0.3s ease;
`;

const Tooltip = styled.div`
  background-color: var(--bg-color);
  border-radius: 3px;
  color: var(--text-color);
  font-size: var(--footer-font-size);
  left: 50%;
  opacity: 0;
  padding: 5px 10px;
  position: absolute;
  top: -35px;
  transform: translateX(-50%);
  transition: opacity 0.3s ease, visibility 0.3s ease;
  visibility: hidden;
  white-space: nowrap;

  &:after {
    border-color: #073b63 transparent transparent transparent;
    border-style: solid;
    border-width: 6px;
    bottom: -6px;
    content: "";
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
  }

  ${ProviderItem}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

const ProvidersGrid = ({ providers, selectedProviders, onProviderSelect }) => {
  return (
    <ProvidersGridWrapper>
      {providers.length > 0 ? (
        providers.map((provider) => {
          const isSelected = selectedProviders.includes(provider.provider_id);

          return (
            <ProviderItem
              key={provider.provider_id}
              isSelected={isSelected}
              onClick={(e) => {
                e.preventDefault(); // Prevent the default anchor link behavior
                onProviderSelect(provider.provider_id);
              }}
            >
              <a title={provider.provider_name}>
                {provider.logo_path ? (
                  <>
                    <ProviderIcon
                      src={`https://image.tmdb.org/t/p/w92${provider.logo_path}`}
                      alt={provider.provider_name}
                    />
                    <CheckmarkOverlay isSelected={isSelected}>
                      ✔
                    </CheckmarkOverlay>

                    <Tooltip>{provider.provider_name}</Tooltip>
                  </>
                ) : (
                  <span>No logo</span>
                )}
              </a>
            </ProviderItem>
          );
        })
      ) : (
        <p>No providers available for the selected country.</p>
      )}
    </ProvidersGridWrapper>
  );
};

export default ProvidersGrid;
