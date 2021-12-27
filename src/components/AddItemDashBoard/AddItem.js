import {
  AddItemContainer,
  Error,
} from "./styledComponents";
import { MdAdd } from "react-icons/md";
export const AddItem = ({ name, onChange, onAdd, price, error }) => (
  <AddItemContainer>
    <Error>{error}</Error>
    <input
      type="text"
      value={name}
      onChange={onChange}
      placeholder="Item name"
    />
    <input
      type="number"
      value={price}
      onChange={onChange}
      placeholder="price"
    />
    <button type="button" onClick={onAdd}>
      Add Item
      <MdAdd />
    </button>
  </AddItemContainer>
);
