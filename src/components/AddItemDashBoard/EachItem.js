import { ToastContainer, toast } from "react-toastify";
import { BsFillTrashFill, BsSearch } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import { EachCard, Button } from "./styledComponents";
export const EachItem = ({ item, onDelete }) => {
  const history = useHistory();
  const onClickDelete = (id) => {
    onDelete(id);
    toast.warn("Item deleted", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const onHandle = (e) => {
    const id = e.target.id;
    console.log(history);
    history.push({
      pathname: "/item-details",
      state: { detail: item },
    });
  };

  return (
    <EachCard id={item.id}>
      <p>{item.name}</p>
      <span>Price: {item.price} ₹/-</span>
      <div>
        <Button id={item.id} onClick={() => onClickDelete(item.id)}>
          del
          <BsFillTrashFill />
        </Button>
        <Button onClick={onHandle}>Details</Button>
      </div>
    </EachCard>
  );
};
