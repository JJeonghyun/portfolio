import Link from "next/link";

const FuncTemplate = ({
  mainFunction,
  link,
  stack,
}: {
  mainFunction: string[];
  link: { url: string; title: string };
  stack: { name: string; list: string }[];
}) => {
  return (
    <>
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
    </>
  );
};

export default FuncTemplate;
