import styled from "styled-components";
import { motion } from "framer-motion";
export const DashBoardContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: DodgerBlue;
`;

export const Header = styled.div`
  width: 100%;
  height: 10vh;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px;
`;
export const SearchContainer = styled.div`
  width: 100%;
  height: 5vh;
  background-color: LightGray;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0px;
`;

export const AddItemContainer = styled.div`
  width: 100%;
  height: 20vh;
  background-color: SlateBlue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const EachCard = styled.div`
  background-color: rgb(26, 32, 39);
  height: 10vh;
  width: 20vw;
  margin: 10px;
  font-size: 10px;
  color: white;
  text-align: center;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 2px 1px 5px gray;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: yellow;
  height: 55vh;
`;
export const Error = styled.span`
  color: red;
  font-size: 10px;
`;
export const Button = styled.button`
font-size:10px;
  border-radius: 10px;
  border:none;
   outline: none;
  transition-duration: 0.4s;
  box-shadow: 0px 1px 2px gray;
  margin:2px 5px;
}
`;
