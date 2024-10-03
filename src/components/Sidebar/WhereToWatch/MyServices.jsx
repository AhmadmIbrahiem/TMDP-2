import React from "react";
import styled from "styled-components";
import { FaRegEdit } from "react-icons/fa";

const MyServicesWrapper = styled.div`
  margin-bottom: 10px;
`;

const MyServicesLabel = styled.label`
  align-items: center;
  display: flex;
  font-weight: var(--font-weight);
  gap: 5px;
  margin-bottom: 10px;
`;

const CheckboxWrapper = styled.div`
  align-items: start;
  display: flex;
  gap: 10px;
`;

const MyServices = () => {
  return (
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
  );
};

export default MyServices;
