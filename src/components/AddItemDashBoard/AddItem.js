import { AddItemContainer, Error, Input, AddButton } from "./styledComponents";
import { MdAdd } from "react-icons/md";
export const AddItem = ({ name, onChange, onAdd, price, error }) => (
  <AddItemContainer>
    <Error>{error}</Error>
    <Input
      type="text"
      value={name}
      onChange={onChange}
      placeholder="Item name"
    />
    <Input
      type="number"
      value={price}
      onChange={onChange}
      placeholder="price"
    />
    <AddButton type="button" onClick={onAdd}>
      Add Item
      <MdAdd />
    </AddButton>
  </AddItemContainer>
);
