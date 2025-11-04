import styled from 'styled-components';

const CATEGORY = ['About me', 'Skills', 'Link', 'Projects', 'Career'];

interface CategoryProps {
  moveScroll: (ref: string) => void;
  currentScroll: number;
}

const Category = ({moveScroll, currentScroll}: CategoryProps) => {
  return (
    <CategoryContainer isScroll={currentScroll > 0}>
      {CATEGORY.map((item) => (
        <CategoryItem
          key={item}
          onClick={() => moveScroll(item)}
          isScroll={currentScroll > 0}
        >
          {item}
        </CategoryItem>
      ))}
    </CategoryContainer>
  );
};

export default Category;

const CategoryContainer = styled.div<{isScroll: boolean}>`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media screen and (max-width: 524px) {
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem 2rem;
  }
`;

const CategoryItem = styled.button<{isScroll: boolean}>`
  background: none;
  border: none;
  font-size: 1.1rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  cursor: pointer;
  color: ${({isScroll}) => (isScroll ? '#343a40' : '#FFF8E7')};
  position: relative;
  transition: all 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: linear-gradient(135deg, #ffd700, #ffa500);
    transition: width 0.3s ease;
  }

  &:hover {
    color: #ffd700;

    &::after {
      width: 80%;
    }
  }

  @media screen and (max-width: 524px) {
    width: 100%;
    padding: 1rem;
    text-align: center;
    font-size: 1rem;
    color: #343a40;
    border-radius: 8px;

    &:hover {
      background: #f8f9fa;

      &::after {
        width: 0;
      }
    }
  }
`;
