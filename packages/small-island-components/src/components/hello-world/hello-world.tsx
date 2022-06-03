import styled from "@emotion/styled";

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

export const ButtonComponent = () => (
  <>
    <span>{"This is a span element"}</span>
    <Button>{"This is a button to click"}</Button>
  </>
);
