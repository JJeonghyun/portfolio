import styled from 'styled-components';
import TypeWriter, {Options} from 'typewriter-effect';

import {title} from '../../../utils/contants/info';

const IntroComponent = ({moveScroll}: {moveScroll: (ref: string) => void}) => {
  const options: Options = {
    strings: title,
    autoStart: true,
    loop: true,
    delay: 75,
    deleteSpeed: 50,
  };

  return (
    <IntroContainer>
      <div className="intro-content">
        <div className="title-section">
          <div className="typewriter">
            <TypeWriter options={options} />
          </div>
          <h1 className="name">장정현</h1>
        </div>

        <div className="description">
          <p className="greeting">안녕하세요! 👋</p>
          <p className="main-text">
            혁신적인 웹 솔루션을 만드는 개발자입니다.
            <br />
            새로운 기술에 대한 열정과 끊임없는 성장을 추구합니다.
          </p>
        </div>

        <button
          className="learn-more"
          onClick={() => moveScroll('About me')}
          aria-label="Learn more about me"
        >
          더 알아보기
          <span className="arrow">▼</span>
        </button>
      </div>
    </IntroContainer>
  );
};

export default IntroComponent;

const IntroContainer = styled.div`
  position: relative;
  height: 85vh;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)),
    url('./imgs/bg.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;

  .intro-content {
    width: 90%;
    max-width: 1200px;
    padding: 2rem;
    text-align: center;
  }

  .title-section {
    margin-bottom: 2.5rem;

    .typewriter {
      font-size: 2.5rem;
      font-weight: 700;
      color: #4caf50;
      margin-bottom: 1rem;
      height: 3.5rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .Typewriter {
        .Typewriter__wrapper {
          color: #4caf50;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .Typewriter__cursor {
          color: #4caf50;
        }
      }
    }

    .name {
      font-size: 3.5rem;
      font-weight: 900;
      color: white;
      margin: 0;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
      background: linear-gradient(120deg, #4caf50, #8bc34a);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .description {
    margin-bottom: 2.5rem;

    .greeting {
      font-size: 2rem;
      font-weight: 600;
      color: white;
      margin-bottom: 1.5rem;
      animation: slideUp 1s ease-out;
    }

    .main-text {
      font-size: 1.3rem;
      line-height: 1.8;
      color: #e0e0e0;
      margin: 0;
    }
  }

  .learn-more {
    background: linear-gradient(135deg, #4caf50, #8bc34a);
    color: white;
    border: none;
    padding: 1rem 2.5rem;
    border-radius: 50px;
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);

    .arrow {
      transition: transform 0.3s ease;
    }

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(76, 175, 80, 0.4);

      .arrow {
        transform: translateY(3px);
      }
    }
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media screen and (max-width: 768px) {
    height: 80vh;

    .intro-content {
      padding: 1.5rem;
      margin-top: -2vh;
    }

    .title-section {
      .typewriter {
        font-size: 2rem;
        height: 3rem;
      }

      .name {
        font-size: 3rem;
      }
    }

    .description {
      .greeting {
        font-size: 1.8rem;
      }

      .main-text {
        font-size: 1.1rem;
        br {
          display: none;
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    height: 75vh;

    .intro-content {
      padding: 1rem;
      margin-top: 0;
    }

    .title-section {
      margin-bottom: 2rem;

      .typewriter {
        font-size: 1.5rem;
        height: 2.5rem;
      }

      .name {
        font-size: 2.5rem;
      }
    }

    .description {
      margin-bottom: 2rem;

      .greeting {
        font-size: 1.5rem;
        margin-bottom: 1rem;
      }

      .main-text {
        font-size: 1rem;
        line-height: 1.6;
      }
    }

    .learn-more {
      padding: 0.8rem 2rem;
      font-size: 1.1rem;
    }
  }
`;
