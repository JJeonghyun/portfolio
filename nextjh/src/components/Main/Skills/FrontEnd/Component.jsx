import styled from "styled-components";

const FrontEnd = () => {
  return (
    <Container>
      <div>FrontEnd</div>
      <div>
        <img src="/imgs/HTML icon.png" alt="" />
        <img src="/imgs/CSS icon.png" alt="" />
        <img src="/imgs/JS icon.png" alt="" />
      </div>
      <div>
        <img src="/imgs/bootstrap icon.png" alt="" />
      </div>
    </Container>
  );
};
export default FrontEnd;

const Container = styled.div`
  width: 30%;
  & > div:first-child {
    width: 90%;
    padding: 5px 0;
    border-bottom: 1px solid black;
    color: orange;
    font-size: 1.2rem;
    font-weight: 800;
  }
  img {
    width: 30%;
    padding: 20px 0;
  }
`;
