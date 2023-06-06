const Category = ({
  moveAboutScroll,
  moveSkillScroll,
  moveLinkScroll,
  moveProjectScroll,
  moveCareerScroll,
}: {
  moveAboutScroll: any;
  moveSkillScroll: any;
  moveLinkScroll: any;
  moveProjectScroll: any;
  moveCareerScroll: any;
}) => {
  return (
    <div>
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
