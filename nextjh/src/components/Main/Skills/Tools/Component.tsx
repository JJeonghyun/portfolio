import styled from "styled-components";

import Image from "next/image";
import gitImg from "public/imgs/stack/etc/git.png";
import postmanImg from "public/imgs/stack/etc/postman.png";
import githubSignImg from "public/imgs/stack/etc/github.png";
import filezillaImg from "public/imgs/stack/etc/filezilla.jpeg";

const imgList = [gitImg,postmanImg,githubSignImg,filezillaImg];

const Tools = () => {
  return (
    <InnerSkills>
      <div>Tools</div>
      {imgList.map((item,i)=>(
          <div key={`index-i-${i}`}>
             <Image src={item} alt="" key={`index-i-innerImg-${i}`} />
         </div>
      ))}
    </InnerSkills>
  );
};
export default Tools;

const InnerSkills = styled.div`
width: 70%;
margin: 20px 0 10px 0;
border-radius: 10px;
background-color: rgba(255, 255, 255, 1);
box-shadow: 2px 2px 2px 2px white;
grid-area:tool;
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
& > div:nth-child(n+1){
  display: flex;
  width: 70%;
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