import styled from "styled-components";

export const HomeContainer = styled.div`
  max-width: 1500px;
  margin: 0 auto;
`;

export const HomeBanner = styled.div`
  background-image: url("https://i.imgur.com/SYHeuYM.jpg");
  min-height: 600px;
  background-position: center;
  background-size: cover;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

export const HomeContent = styled.div`
  background: white;
  padding: 0 10px;
  margin-top: -350px;
  display: flex;
`;
