import styled from "styled-components";

import Image from "next/image";
import amazonImg from "public/imgs/stack/etc/amazonWebservices.png";
import jenkinsImg from "public/imgs/stack/etc/jenkins.jpg";
import githubActionImg from "public/imgs/stack/etc/githubAction.png";

const Deployment = () => {
  return (
    <InnerSkills>
      <div>Deployment</div>
      <div>
        <Image src={amazonImg} alt="" />
      </div>
      <div>
        <Image src={jenkinsImg} alt="" />
        <Image src={githubActionImg} alt="" />
      </div>
    </InnerSkills>
  );
};
export default Deployment;

const InnerSkills = styled.div`
width: 30%;
height:250px;
margin: 20px 0 10px 0;
border-radius: 10px;
background-color: rgba(255, 255, 255, 1);
box-shadow: 2px 2px 2px 2px white;
@media only screen and (max-width: 768px) {
  width: 45%;
}
@media only screen and (max-width: 426px) {
  width: 80%;
}
& > div {
  width: 90%;
  margin: 0 auto;
}
& > div:first-child {
  width: 90%;
  padding: 5px 0;
  border-bottom: 1px solid black;
  color: orange;
  font-size: 1.2rem;
  font-weight: 800;
  margin: 0 auto;
}
& > div:nth-child(2){
  display: flex;
  width: 85%;
  justify-content: center;
  align-items: center;
  & > img {
    width: 100%;
    height: auto;
    padding: 20px 5px;
  }
}
& > div:nth-child(3){
  display: flex;
  width: 40%;
  justify-content: center;
  align-items: center;
  & > img {
    width: 100%;
    height: auto;
    padding: 20px 5px;
  }
}
&:hover {
  transform: translateY(-10px);
  transition: all 0.5s;
}
`