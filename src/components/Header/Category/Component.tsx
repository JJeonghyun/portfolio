const Category = ({
  moveScroll,
  currentScroll,
}: {
  moveScroll: (ref: string) => void;
  currentScroll: number;
}) => {
  return (
    <div className={currentScroll > 0 ? 'changeScroll' : ''}>
      <div
        onClick={() => {
          moveScroll('about');
        }}
      >
        About me
      </div>
      <div
        onClick={() => {
          moveScroll('skill');
        }}
      >
        Skills
      </div>
      <div
        onClick={() => {
          moveScroll('link');
        }}
      >
        Link
      </div>
      <div
        onClick={() => {
          moveScroll('project');
        }}
      >
        Projects
      </div>
      <div
        onClick={() => {
          moveScroll('career');
        }}
      >
        Career
      </div>
    </div>
  );
};
export default Category;
