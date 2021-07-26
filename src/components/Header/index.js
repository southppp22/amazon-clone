import React from "react";
import * as S from "./style";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <S.HeaderContainer>
        <S.HeaderLogo>
          <Link to="/">
            <img src={"https://i.imgur.com/7I9Was5.png"} alt="" />
          </Link>
        </S.HeaderLogo>

        <S.HeaderOptionAddress>
          <LocationOnIcon />
          <S.HeaderOption>
            <S.OptionLineOne>Hello</S.OptionLineOne>
            <S.OptionLineTwo>Select your address</S.OptionLineTwo>
          </S.HeaderOption>
        </S.HeaderOptionAddress>

        <S.HeaderSearch>
          <S.HeaderSearchInput type="text" />

          <S.HeaderSearchIconContainer>
            <SearchIcon />
          </S.HeaderSearchIconContainer>
        </S.HeaderSearch>

        <S.HeaderNavItems>
          <S.HeaderOption>
            <S.OptionLineOne>Hello, Nazariy</S.OptionLineOne>
            <S.OptionLineTwo>Account & Lists</S.OptionLineTwo>
          </S.HeaderOption>

          <S.HeaderOption>
            <S.OptionLineOne>Returns</S.OptionLineOne>
            <S.OptionLineTwo>& Orders</S.OptionLineTwo>
          </S.HeaderOption>

          <S.HeaderOptionCart>
            <Link to="/cart">
              <ShoppingBasketIcon />
              <S.HeaderOptionCartCount>4</S.HeaderOptionCartCount>
            </Link>
          </S.HeaderOptionCart>
        </S.HeaderNavItems>
      </S.HeaderContainer>
    </div>
  );
}

export default Header;
