import styled from "styled-components";
import background from "../../statics/react.png";
export const DashBoardContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: DodgerBlue;
  background-image: url(${background});
  background-size: cover;
`;
export const Input = styled.input`
  border-radius: 5px;
  border: none;
  outline: none;
  margin: 2px;
  padding: 5px;
  &:focus {
    outline: none;
    border: 2px solid #00d4d4;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px;
  color: white;
  border-style: solid;
  border-radius: 10px;

  background-color: #1c1e5c;
`;
export const SearchContainer = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0px;
  border-style: solid;
  color: white;
  border-radius: 5px;
`;

export const AddItemContainer = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-style: outset;
  border-color: skyblue;
  border-radius: 20px;
`;

export const EachCard = styled.div`
  background-color: rgb(26, 32, 39);
  height: 10vh;
  width: 20vw;
  margin: 10px;
  padding: 15px;
  font-size: 10px;
  color: white;
  text-align: center;
  border-radius: 10px;
  box-shadow: 2px 1px 5px gray;
  &:hover {
    outline: none;
    border: 2px solid #00d4d4;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 55vh;
  opacity: 0.9;
  background-color: #1c1e5c;
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

export const AddButton = styled.button`
  border-radius: 7px;
  border:none;
  padding:5px;
  outline:none;
  transition-duration: 0.4s;
  box-shadow: 2px 2px 2px  #1c1e5c;
  margin:2px 5px;
}
`;

export const Footer = styled.div`
   {
    border-style: solid;
    border-color: gray;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0.8;
    color: black;
    background-color: gray;
  }
`;
