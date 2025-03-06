import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const WishlistContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background: #fff5f8;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const WishlistItemCard = styled.div`
  display: flex;
  align-items: center;
  background: white;
  padding: 10px;
  margin: 10px 0;
  border-radius: 8px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
`;

export const WishlistImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
  margin-right: 15px;
`;

export const WishlistDetails = styled.div`
  flex: 1;
`;

export const RemoveButton = styled(Button)`
  margin-top: 10px;
  background-color: crimson;
  color: white;
  &:hover {
    background-color: darkred;
  }
`;
