import React, {useState} from 'react';
import {Link as ReactRouterLink} from 'react-router-dom';
import {
    Background,
    Container,
    Link, 
    ButtonLink, 
    Logo, 
    Group,
    Profile,
    Dropdown,
    Picture, 
    PlayButton,
    ButtonViewMore,
    Feature,
    FeatureTitle,
    Description,
    Search,
    SearchIcon,
    SearchInput,
} from './styles/header';


export default function Header({bg = true, children, ...restProps}) {
    return bg ? (
        <Background data-testid="header-bg" {...restProps}>
         {children}
       </Background>
    ) : (
      children
    );
}

Header.Frame = function HeaderFrame({ children, ...restProps}){
    return <Container {...restProps}>{children}</Container>;
};

Header.Group = function HeaderGroup({ children, ...restProps}){
    return <Group {...restProps}>{children}</Group>;
};

Header.Logo = function HeaderLogo({to, ...restProps}){
    return (
        <ReactRouterLink to={to}>
        <Logo {...restProps} />
        </ReactRouterLink>
    );
};

Header.Search = function HeaderSearch({searchText, setSearchText, ...restProps}) {
    const [searchActive, setSearchActive] = useState(false);
    return (
        <Search {...restProps}>
         <SearchIcon onClick={() => setSearchActive((searchActive) => !searchActive)} >
            <img src="/images/icons/search.png" alt="Search" />
         </SearchIcon>   
         <SearchInput value={searchText} 
         onChange={({target}) => setSearchText(target.value)} 
         placeholder="Procurar filmes ou séries" active={searchActive} />
        </Search>
    );
};

Header.Profile = function HeaderProfile({children, ...restProps}) {
    return <Profile{...restProps}>{children}</Profile>;
};

Header.Picture = function HeaderPicture({src, ...restProps}) {
    return <Picture{...restProps} src={`/images/users/${src}.png`} />;
};

Header.Dropdown = function HeaderDropdown({children, ...restProps}) {
    return <Dropdown{...restProps}>{children}</Dropdown>;
};

Header.TextLink = function HeaderTextLink({children, ...restProps}) {
    return <Link{...restProps}>{children}</Link>;
};

Header.Feature = function HeaderFeature({children, ...restProps}) {
    return <Feature {...restProps}>{children}</Feature>;
};

Header.FeatureTitle = function HeaderFeatureTitle({children, ...restProps}) {
    return <FeatureTitle{...restProps}>{children}</FeatureTitle>;
};

Header.Description = function HeaderDescription({children, ...restProps}) {
    return <Description{...restProps}>{children}</Description>;
};

Header.PlayButton = function HeaderPlayButton({children, ...restProps}) {
    return <PlayButton{...restProps}>{children}</PlayButton>;
};

Header.ButtonViewMore = function HeaderButtonViewMore({children, ...restProps}) {
    return <ButtonViewMore{...restProps}>{children}</ButtonViewMore>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps}){
    return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
