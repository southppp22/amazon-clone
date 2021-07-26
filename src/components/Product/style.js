import styled from "styled-components";

export const ProductContainer = styled.div`
  background-color: white;
  z-index: 100;
  padding: 20px;
  margin: 10px;
  flex: 1;
  max-height: 400px;
  display: flex;
  flex-direction: column;
`;

export const ProductTitle = styled.span``;

export const ProductPrice = styled.span`
  font-weight: 500;
  margin-top: 3px;
`;

export const ProductRating = styled.div``;

export const ProductImg = styled.img`
  min-height: 200px;
  object-fit: contain;
`;

export const ButtonWrapper = styled.div`
  margin-top: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AddToCartButton = styled.button`
  width: 100px;
  height: 30px;
  color: #007185;
  border: 2px solid #007185;
  background-color: white;
  border-radius: 4px;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;
