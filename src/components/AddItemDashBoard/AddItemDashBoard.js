import React, { useState } from "react";
import Pagination from "../Pagination/index";
import { initialList } from "../../fixturesData";
import { FaBeer } from "react-icons/fa";
import { BsFillTrashFill, BsSearch } from "react-icons/bs";
import {
  DashBoardContainer,
  Header,
  SearchContainer,
  Footer,
} from "./styledComponents";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AddItem } from "./AddItem";
import { List } from "./List";

const AddItemDashBoard = () => {
  console.log("dahshboard");
  const [listData, setListData] = React.useState(initialList);
  const [listDefaultData, setDefaultListData] = useState(initialList);
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [sortStatus, setSortStatus] = React.useState(true);
  const [sortNameStatus, setSortNameStatus] = React.useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const limitPerPage = 7;

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const goToPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  function handleChange(event) {
    if (event.target.type == "text") {
      setName(event.target.value);
    } else {
      setPrice(event.target.value);
    }
  }

  function handleAdd() {
    if (name != "" && price !== "") {
      toast.success("Item Added", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      let newList = [
        { name: name, id: new Date().valueOf().toString(), price: price },
        ...listData,
      ];
      setListData(newList);
      setDefaultListData(newList);
      setName("");
      setPrice("");
      setError("");
    } else {
      setError("please enter valid inputs");
    }
  }
  const handleSearch = (e) => {
    let input = e.target.value;
    const filtered = listData.filter((each) => {
      return each.name.toLowerCase().includes(input.toLowerCase());
    });
    input.length ? setListData(filtered) : setListData(listDefaultData);
  };

  const onDelete = (id) => {
    const newList = listData.filter((each) => each.id != id);
    setListData(newList);
    setDefaultListData(newList);
  };

  const sortItems = () => {
    let sortedList = [...listData];
    if (sortNameStatus) {
      sortedList.sort((a, b) => a.name.localeCompare(b.name));
      setSortNameStatus(false);
    } else {
      sortedList.sort((a, b) => b.name.localeCompare(a.name));
      setSortNameStatus(true);
    }

    setListData(sortedList);
  };
  const onPricesortItems = () => {
    let sortedList = [...listData];
    if (sortStatus) {
      sortedList.sort((a, b) => Number(a.price) - Number(b.price));
      setSortStatus(false);
    } else {
      sortedList.sort((a, b) => Number(b.price) - Number(a.price));
      setSortStatus(true);
    }
    setListData(sortedList);
  };
  const lastPage = Math.ceil(listData.length / limitPerPage);

  return (
    <DashBoardContainer>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header>
        <div>NAVBAR</div>
      </Header>
      <SearchContainer>
        <div onClick={sortItems}>
          <span>Name:</span>
          <button>{sortNameStatus ? "A to Z" : "Z to A"}</button>
        </div>

        <div>
          <input placeholder="search" onChange={handleSearch} />
          <BsSearch></BsSearch>
        </div>

        <div onClick={onPricesortItems}>
          <span>Price: </span>
          <button>{sortStatus ? "Low to High" : "High to low"}</button>
        </div>
      </SearchContainer>
      <AddItem
        name={name}
        onChange={handleChange}
        onAdd={handleAdd}
        price={price}
        error={error}
      />
      <List
        list={listData}
        limitPerPage={limitPerPage}
        currentPage={currentPage}
        onDelete={onDelete}
      />
      <Footer>
        <Pagination
          lastPage={lastPage}
          currentPage={currentPage}
          goToNextPage={goToNextPage}
          goToPreviousPage={goToPreviousPage}
        />
      </Footer>
    </DashBoardContainer>
  );
};

export default AddItemDashBoard;
