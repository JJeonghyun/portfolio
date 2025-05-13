const CATEGORY = ['About me', 'Skills', 'Link', 'Projects', 'Career'];

const Category = ({
  moveScroll,
  currentScroll,
}: {
  moveScroll: (ref: string) => void;
  currentScroll: number;
}) => {
  return (
    <div className={currentScroll > 0 ? 'changeScroll' : ''}>
      {CATEGORY.map((item) => (
        <div
          key={item}
          onClick={() => {
            moveScroll(item);
          }}
          className={currentScroll > 0 ? 'changeScroll' : ''}
        >
          {item}
        </div>
      ))}
    </div>
  );
};
export default Category;
