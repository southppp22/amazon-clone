import React from "react";
import * as S from "./style";
import { Product } from "components";

function Home() {
  return (
    <S.HomeContainer>
      <S.HomeBanner></S.HomeBanner>
      <S.HomeContent>
        <Product></Product>
        <Product></Product>
      </S.HomeContent>
    </S.HomeContainer>
  );
}

export default Home;
