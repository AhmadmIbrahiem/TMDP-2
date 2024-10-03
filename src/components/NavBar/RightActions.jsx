import React from "react";
import styled from "styled-components";
import PlusIcon from "./RightComponents/PlusIcon";
import SearchIcon from "./RightComponents/SearchIcon";
import LanguageSwitcher from "./RightComponents/LanguageSwitcher";
import LoginButton from "./RightComponents/LoginButton";
import JoinButton from "./RightComponents/JoinButton";

const RightActionsWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 30px;
  margin-right: 50px;

  @media (max-width: 770px) {
    flex-direction: column;
    margin-right: 0;
    gap: 15px;
  }
`;

const RightActions = () => {
  return (
    <RightActionsWrapper>
      <PlusIcon />
      <LanguageSwitcher />
      <LoginButton />
      <JoinButton />
      <SearchIcon />
    </RightActionsWrapper>
  );
};

export default RightActions;
