import React from "react";
import { RightActionsWrapper } from "./RightActions.styles";
import PlusIcon from "./RightNavBar/PlusIcon";
import SearchIcon from "./RightNavBar/SearchIcon";
import LanguageSwitcher from "./RightNavBar/LanguageSwitcher";
import LoginButton from "./RightNavBar/LoginButton";
import JoinButton from "./RightNavBar/JoinButton";

/**
 * RightActions component that displays various action buttons such as login, join, search, and more.
 *
 *
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
