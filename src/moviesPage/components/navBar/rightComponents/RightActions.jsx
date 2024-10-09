import React from "react";
import { RightActionsWrapper } from "./RightActions.styles";
import PlusIcon from "../rightNavBar/plusIcon/PlusIcon";
import SearchIcon from "../rightNavBar/searchIcon/SearchIcon";
import LanguageSwitcher from "../rightNavBar/languageSwitcher/LanguageSwitcher";
import LoginButton from "../rightNavBar/loginButton/LoginButton";
import JoinButton from "../rightNavBar/joinButton/JoinButton";

/**
 * RightActions component that displays various action buttons such as login, join, search, and more.
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
