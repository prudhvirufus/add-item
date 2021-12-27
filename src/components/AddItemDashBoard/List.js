import { BsFillTrashFill, BsSearch } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EachCard, ListContainer } from "./styledComponents";
import { EachItem } from "./EachItem";
export const List = ({ list, currentPage, limitPerPage, onDelete }) => {
  

  const getList = (currentPageList) => {
    return (
      <ListContainer>
        {currentPageList.length
          ? currentPageList.map((item) => (
              <EachItem key={item.id} onDelete={onDelete} item ={item}/>
            ))
          : "No items found"}
        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </ListContainer>
    );
  };

  const renderList = () => {
    const currentPageList = list?.slice(
      (currentPage - 1) * limitPerPage,
      currentPage * limitPerPage
    );
    return getList(currentPageList);
  };

  return renderList();
};
