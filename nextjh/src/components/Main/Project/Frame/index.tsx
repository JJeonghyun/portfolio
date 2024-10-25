import Image, { StaticImageData } from "next/image";

import MainFuncFrame from "../MainFuncFrame";

const Frame = ({
  title,
  period,
  imgs,
  description,
  mainFunction,
  link,
  stack,
}: {
  title: string;
  period: string;
  imgs: StaticImageData[];
  description: string[];
  mainFunction: string[];
  link: { url: string; title: string };
  stack: { name: string; list: string }[];
}) => {
  return (
    <>
      <div>
        <div>{title}</div>
        <div>{period}</div>
        <div>
          <div>
            <div>
              {imgs.map((item, index) => (
                <Image key={`project-img-index-${index}`} {...item} alt="" />
              ))}
            </div>
          </div>
          <div>
            <ul>
              {description.map((item, index) => (
                <li key={`project-descrption-index-${index}`}>{item}</li>
              ))}
            </ul>
            <MainFuncFrame
              mainFunction={mainFunction}
              link={link}
              stack={stack}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Frame;
