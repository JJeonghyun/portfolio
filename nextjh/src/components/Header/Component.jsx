import styled from "styled-components";
const HeaderComponent = () => {
  return (
    <HeaderContainer>
      <div>JJH</div>
      <div>
        <div>about me</div>
        <div>Skills</div>
        <div>Link</div>
        <div>projects</div>
        <div>career</div>
      </div>
    </HeaderContainer>
  );
};

export default HeaderComponent;

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin: 0 15%;
  padding: 15px 0;
  font-size: 1.5rem;
  & > div:first-child {
    width: 50%;
  }
  & > div:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    & > div {
      border: 1px solid black;
      padding: 0 10px;
      margin: 0 5px;
    }
  }
`;
