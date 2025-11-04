import styled from 'styled-components';
import Image from 'next/image';
import {STACK_LIST} from '../../../utils/contants/stack';

const SkillsComponent = ({
  skillRef,
}: {
  skillRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <SkillsContainer>
      <div className="skills-wrapper">
        <div className="title" ref={skillRef}>
          SKILLS
        </div>
        <div className="skills-list">
          {STACK_LIST.map((category, i) => (
            <div key={`skill-category-${i}`} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-items">
                {category.imgList.map((img, j) => (
                  <div key={`skill-${j}`} className="skill-item">
                    <Image
                      src={img.src}
                      alt={`${category.title} skill ${j + 1}`}
                      width={120}
                      height={50}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SkillsContainer>
  );
};

export default SkillsComponent;

const SkillsContainer = styled.div`
  width: 100%;
  background: linear-gradient(to bottom, #f8f9fa, #e9ecef);
  padding: 60px 0;

  .skills-wrapper {
    width: 85%;
    max-width: 1400px;
    margin: 0 auto;
  }

  .title {
    width: fit-content;
    margin: 0 auto 50px;
    font-size: 2.8rem;
    font-weight: 850;
    color: #343a40;
    border-bottom: 3px solid #343a40;
    padding-bottom: 10px;
    text-align: center;
  }

  .skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
  }

  .skill-category {
    flex: 0 1 250px;
    min-width: 200px;
    background: white;
    border-radius: 20px;
    padding: 25px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
    }

    @media screen and (max-width: 768px) {
      flex: 1 1 200px;
    }
  }

  .category-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #343a40;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 2px solid #e9ecef;
    text-align: center;
  }

  .skills-items {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
    align-items: center;
  }

  .skill-item {
    flex: 0 1 120px;
    background: #f8f9fa;
    border-radius: 12px;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.05);
      background: #fff;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }

    img {
      max-width: 100%;
      height: auto;
      object-fit: contain;
    }
  }

  @media screen and (max-width: 480px) {
    .skills-wrapper {
      width: 90%;
    }

    .title {
      font-size: 2.3rem;
    }

    .category-title {
      font-size: 1.3rem;
    }

    .skill-item {
      padding: 10px;
    }
  }
`;
