import { RootStateOrAny, useSelector } from "react-redux";
import styled from "styled-components";
import useActionCreators from "../hooks/useActionCreators";

const List = styled.div`
  position: absolute;
  top: 2rem;
  left: 0;
  width: 13.5rem;
  background-color: #f5f5f5;
  z-index: 10;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Item = styled.div`
  background: none;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & + & {
    border-top: 1px solid #ddd;
  }

  &:hover {
    background-color: #fff;
    color: dodgerblue;
  }
`;

const AutoComplete = () => {
  const autoCompleteList = useSelector(
    (state: RootStateOrAny) => state.cat.autoComplete
  );
  const { setCatList, setAutoComplete } = useActionCreators();

  const onItemClick = (item: any) => {
    setCatList(item.name);
    setAutoComplete("");
  };

  return (
    <>
      {autoCompleteList.length > 0 && (
        <List>
          {autoCompleteList.map((item: any) => (
            <Item key={item.id} onClick={() => onItemClick(item)}>
              {item.name}
            </Item>
          ))}
        </List>
      )}
    </>
  );
};

export default AutoComplete;
