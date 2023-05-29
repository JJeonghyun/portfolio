import styled from "styled-components";

const Database = () => {
  return (
    <Container>
      <div>Database</div>
      <div>
        <img src="/imgs/mysql icon.jpeg" alt="" />
        <img src="/imgs/Database icon.jpg" alt="" />
      </div>
    </Container>
  );
};
export default Database;

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
