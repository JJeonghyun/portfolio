import {useEffect, useState} from 'react';
import styled from 'styled-components';
import Category from './Category/Component';

interface HeaderComponentProps {
  moveScroll: (ref: string) => void;
  open: boolean;
  toggleFunc: () => void;
}

const HeaderComponent = ({
  moveScroll,
  open,
  toggleFunc,
}: HeaderComponentProps) => {
  const [currentScroll, setCurrentScroll] = useState(0);
  const [currentWidth, setCurrentWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  const scrollToUp = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  useEffect(() => {
    const changeScroll = () => {
      setCurrentScroll(window.scrollY || document.documentElement.scrollTop);
    };

    const changeWidth = () => {
      setCurrentWidth(window.innerWidth);
    };

    window.addEventListener('scroll', changeScroll);
    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('scroll', changeScroll);
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  const isScroll = currentScroll > 0;
  const isMobile = currentWidth <= 524;

  return (
    <>
      <HeaderContainer _isScroll={isScroll} _isMobile={isMobile}>
        <nav className="header-nav">
          <div className="logo" onClick={scrollToUp}>
            <span className="logo-text">JJH&#39;s</span>
            <span className="logo-highlight">Portfolio</span>
          </div>

          <div className="nav-content">
            <div className="desktop-menu">
              <Category moveScroll={moveScroll} currentScroll={currentScroll} />
            </div>

            <button
              className={`menu-toggle ${open ? 'active' : ''}`}
              onClick={toggleFunc}
              aria-label="Toggle menu"
            >
              <span className="hamburger-icon"></span>
            </button>
          </div>
        </nav>

        <div className={`mobile-menu ${open ? 'open' : ''}`}>
          <Category moveScroll={moveScroll} currentScroll={currentScroll} />
        </div>
      </HeaderContainer>

      {isScroll && (
        <ScrollTopButton onClick={scrollToUp}>
          <span>↑</span>
        </ScrollTopButton>
      )}
    </>
  );
};

export default HeaderComponent;

const HeaderContainer = styled.header<{
  _isScroll: boolean;
  _isMobile: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${({_isScroll}) =>
    _isScroll ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  backdrop-filter: ${({_isScroll}) => (_isScroll ? 'blur(8px)' : 'none')};
  box-shadow: ${({_isScroll}) =>
    _isScroll ? '0 4px 20px rgba(0, 0, 0, 0.08)' : 'none'};
  transition: all 0.3s ease;

  .header-nav {
    max-width: 1400px;
    margin: 0 auto;
    padding: 1rem 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    display: flex;
    gap: 0.5rem;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-2px);
    }

    .logo-text {
      font-size: 1.5rem;
      font-weight: 700;
      color: ${({_isScroll}) => (_isScroll ? '#343a40' : '#E0FFF4')};
      transition: color 0.3s ease;
    }

    .logo-highlight {
      font-size: 1.5rem;
      font-weight: 700;
      background: linear-gradient(135deg, #ffd700, #ffa500);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      transition: opacity 0.3s ease;
    }
  }

  .nav-content {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .desktop-menu {
    @media screen and (max-width: 524px) {
      display: none;
    }
  }

  .menu-toggle {
    display: none;
    background: none;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    position: relative;
    z-index: 100;

    @media screen and (max-width: 524px) {
      display: block;
    }

    .hamburger-icon {
      display: block;
      width: 24px;
      height: 2px;
      background: ${({_isScroll}) => (_isScroll ? '#343a40' : '#fff')};
      position: relative;
      transition: all 0.3s ease;

      &::before,
      &::after {
        content: '';
        position: absolute;
        width: 24px;
        height: 2px;
        background: ${({_isScroll}) => (_isScroll ? '#343a40' : '#fff')};
        transition: all 0.3s ease;
      }

      &::before {
        transform: translateY(-8px);
      }
      &::after {
        transform: translateY(8px);
      }
    }

    &.active {
      .hamburger-icon {
        background: transparent;

        &::before {
          transform: rotate(45deg);
        }

        &::after {
          transform: rotate(-45deg);
        }
      }
    }
  }

  .mobile-menu {
    display: none;

    @media screen and (max-width: 524px) {
      display: block;
      background: white;
      padding: 0;
      max-height: 0;
      overflow: hidden;
      transition: all 0.3s ease-in-out;

      &.open {
        max-height: 300px;
        padding: 1rem 0;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      }
    }
  }
`;

const ScrollTopButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #0056b3, #00a8e8);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  box-shadow: 0 4px 15px rgba(0, 86, 179, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 86, 179, 0.4);
  }

  span {
    line-height: 1;
  }
`;
