const Category = ({
  moveAboutScroll,
  moveSkillScroll,
  moveLinkScroll,
  moveProjectScroll,
  moveCareerScroll,
  currentScroll
}: {
  moveAboutScroll: any;
  moveSkillScroll: any;
  moveLinkScroll: any;
  moveProjectScroll: any;
  moveCareerScroll: any;
  currentScroll?:any;
}) => {
  return (
    <div className={
      currentScroll > 0 ? "changeScroll" : ""
    }>
      <div
        onClick={() => {
          moveAboutScroll();
        }}
      >
        About me
      </div>
      <div
        onClick={() => {
          moveSkillScroll();
        }}
      >
        Skills
      </div>
      <div
        onClick={() => {
          moveLinkScroll();
        }}
      >
        Link
      </div>
      <div
        onClick={() => {
          moveProjectScroll();
        }}
      >
        Projects
      </div>
      <div
        onClick={() => {
          moveCareerScroll();
        }}
      >
        Career
      </div>
    </div>
  );
};
export default Category;
