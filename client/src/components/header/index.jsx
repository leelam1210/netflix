import React, { useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
    Background,
    ButtonLink,
    Container,
    Dropdown,
    Feature,
    FeatureCallOut,
    Group,
    Link,
    Logo,
    Picture,
    PlayButton,
    Profile,
    Search,
    SearchIcon,
    SearchInput,
    Text,
} from "./styles/header";

const Header = ({ bg = true, children, ...restProps }) => {
    return bg ? (
        <Background data-testid="header-bg" {...restProps}>
            {children}
        </Background>
    ) : children;
};

export default Header;

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps} />
        </ReactRouterLink>
    );
};
Header.Profile = function HeaderProfile({ children, ...restProps }) {
    return <Profile {...restProps}>{children}</Profile>;
};

Header.Feature = function HeaderFeature({ children, ...restProps }) {
    return <Feature>{children}</Feature>;
};

Header.Picture = function HeaderPicture({ src, ...restProps }) {
    return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {
    const [searchActive, setSearchActive] = useState(false);
    return (
        <Search {...restProps}>
            <SearchIcon onClick={() => setSearchActive((searchActive) => !searchActive)} data-testid="search-click">
                <img src="/images/icons/search.png" alt="Search" />
            </SearchIcon>
            <SearchInput
                value={searchTerm}
                onChange={({ target }) => setSearchTerm(target.value)}
                placeholder="Search films and series"
                active={searchActive}
                data-testid="search-input"
            // onMouseEnter={() => setSearchActive(true)}
            // onMouseLeave={() => setSearchActive(false)}
            />
        </Search>
    );
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
    return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
};

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
    return <PlayButton {...restProps}>{children}</PlayButton>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }) {
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

Header.Text = function HeaderText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
