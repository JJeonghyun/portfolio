import Image from 'next/image';
import styled from 'styled-components';

import {CAREER_DATA} from '../../../utils/contants/career';

const Career = ({careerRef}: {careerRef: React.RefObject<HTMLDivElement>}) => {
  return (
    <CareerContainer>
      <div className="career-wrapper">
        <div className="career-title" ref={careerRef}>
          Career
        </div>
        <div className="career-list">
          {CAREER_DATA.map((career, index) => (
            <div key={`career-${index}`} className="career-item">
              <div className="career-content">
                <div className="image-section">
                  <Image
                    src={career.img}
                    alt={career.alt || ''}
                    width={career.width}
                  />
                </div>
                <div className="detail-section">
                  <div className="company-name">{career.company}</div>
                  <div className="period">{career.period}</div>
                  <div className="description">{career.description}</div>
                  <div className="job-info">
                    <div className="position">{career.position}</div>
                    <div className="job-title">{career.job}</div>
                    {career.jobList && (
                      <div className="job-list">
                        {career.jobList.map((job, idx) => (
                          <div key={`job-${idx}`} className="job-item">
                            {job}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CareerContainer>
  );
};

export default Career;

const CareerContainer = styled.div`
  width: 100%;
  background-color: #f8f9fa;
  padding: 60px 0;

  .career-wrapper {
    width: 80%;
    max-width: 1400px;
    margin: 0 auto;
  }

  .career-title {
    width: fit-content;
    margin: 0 auto 50px;
    font-size: 2.8rem;
    font-weight: 850;
    color: #343a40;
    border-bottom: 3px solid #343a40;
    padding-bottom: 10px;
    text-align: center;
  }

  .career-list {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .career-item {
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }
  }

  .career-content {
    display: grid;
    grid-template-columns: 1.5fr 2fr;
    gap: 30px;
    padding: 30px;

    @media screen and (max-width: 1024px) {
      grid-template-columns: 1fr;
    }
  }

  .image-section {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 15px;

    img {
      max-width: 100%;
      height: auto;
      object-fit: contain;
      border-radius: 12px;
    }
  }

  .detail-section {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
  }

  .company-name {
    font-size: 2rem;
    font-weight: 700;
    color: #343a40;
  }

  .period {
    font-size: 1.1rem;
    color: #6c757d;
    padding: 8px 16px;
    background-color: #f1f3f5;
    border-radius: 20px;
    display: inline-block;
    width: fit-content;
  }

  .description {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #495057;
  }

  .job-info {
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid #dee2e6;

    .position {
      font-size: 1.3rem;
      font-weight: 600;
      color: #0056b3;
      margin-bottom: 10px;
    }

    .job-title {
      font-size: 1.1rem;
      color: #495057;
      margin-bottom: 15px;
    }

    .job-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding-left: 20px;

      .job-item {
        position: relative;
        padding-left: 20px;
        font-size: 1rem;
        color: #495057;
        line-height: 1.5;
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding: 40px 0;

    .career-wrapper {
      width: 90%;
    }

    .career-title {
      font-size: 2.3rem;
    }

    .career-content {
      padding: 20px;
    }

    .company-name {
      font-size: 1.7rem;
    }

    .period {
      font-size: 1rem;
    }

    .description {
      font-size: 1rem;
    }

    .job-info {
      .position {
        font-size: 1.2rem;
      }

      .job-title {
        font-size: 1rem;
      }

      .job-list {
        .job-item {
          font-size: 0.95rem;
        }
      }
    }
  }
`;
