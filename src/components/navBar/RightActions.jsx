import React from "react";
import styled from "@emotion/styled";
import PlusIcon from "./RightNavBar/PlusIcon";
import SearchIcon from "./RightNavBar/SearchIcon";
import LanguageSwitcher from "./RightNavBar/LanguageSwitcher";
import LoginButton from "./RightNavBar/LoginButton";
import JoinButton from "./RightNavBar/JoinButton";

/**
 * Wrapper for the right-side action buttons.
 */
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

/**
 * RightActions component that displays various action buttons such as login, join, search, and more.
 *
 * @component
 * @returns {JSX.Element} The right-side action buttons of the navigation bar.
 */
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
