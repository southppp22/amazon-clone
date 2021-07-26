import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 60px;
  background-color: #0f1111;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;

export const HeaderLogo = styled.div`
  img {
    width: 100px;
    margin-left: 11px;
  }
`;

export const HeaderOptionAddress = styled.div`
  padding-left: 9px;
  display: flex;
  align-items: center;
`;

export const HeaderOption = styled.div`
  padding: 10px 9px;
`;

export const OptionLineOne = styled.div``;

export const OptionLineTwo = styled.div`
  font-weight: 700;
`;

export const HeaderSearch = styled.div`
  display: flex;
  flex-grow: 1;
  height: 40px;
  border-radius: 4px;
  overflow: hidden;
  margin-left: 4px;
  background-color: white;
  :focus-within {
    box-shadow: 0 0 0 1.5px #f90;
  }
`;

export const HeaderSearchInput = styled.input`
  flex-grow: 1;
  border: 0;
  :focus {
    outline: none;
  }
`;

export const HeaderSearchIconContainer = styled.div`
  background-color: #febd69;
  width: 45px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderNavItems = styled.div`
  display: flex;
`;

export const HeaderOptionCart = styled.div`
  display: flex;

  a {
    display: flex;
    align-items: center;
    padding-right: 9px;
    color: white;
    text-decoration: none;
  }
`;

export const HeaderOptionCartCount = styled.div`
  padding-left: 4px;
  color: #f90;
`;
