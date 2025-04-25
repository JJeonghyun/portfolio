import Image, {StaticImageData} from 'next/image';
import Link from 'next/link';

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
  link: {url: string; title: string};
  stack: {name: string; list: string}[];
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
            <div>
              <div>주요기능</div>
              <div>
                {mainFunction.map((item, index) => (
                  <div key={`mainFunc-index-${index}`}>{item}</div>
                ))}
              </div>
            </div>
            <div>
              <div>Link</div>
              <div>
                <Link href={link.url} passHref>
                  <div>{link.title}</div>
                </Link>
              </div>
            </div>
            {stack.map((item, index) => (
              <div key={`stack-outer-div-${index}`}>
                <div key={`stack-inner-name-${index}`}>{item.name}</div>
                <div key={`stack-inner-list-${index}`}>{item.list}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Frame;
