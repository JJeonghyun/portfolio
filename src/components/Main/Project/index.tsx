import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

import {PROJECT_LIST} from '../../../utils/contants/project';

const Project = ({
  projectRef,
}: {
  projectRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <ProjectContainer>
      <div className="project-wrapper">
        <div className="title" ref={projectRef}>
          Project
        </div>
        <div className="projects-list">
          {PROJECT_LIST.map((project, index) => (
            <div key={`project-${index}`} className="project-card">
              <h2 className="project-title">{project.title}</h2>
              <div className="project-period">{project.peroid}</div>

              <div className="project-content">
                <div className="image-section">
                  <div className="image-slider">
                    {project.imgs.map((img, imgIndex) => (
                      <Image
                        key={`img-${imgIndex}`}
                        src={img}
                        alt={`${project.title} screenshot ${imgIndex + 1}`}
                        width={800}
                        height={450}
                      />
                    ))}
                  </div>
                </div>

                <div className="details-section">
                  <ul className="description-list">
                    {project.description.map((desc, descIndex) => (
                      <li key={`description-${descIndex}`}>{desc}</li>
                    ))}
                  </ul>

                  <div className="main-functions">
                    <div className="section-title">주요기능</div>
                    <div className="function-tags">
                      {project.mainFunction.map((func, funcIndex) => (
                        <div
                          key={`function-${funcIndex}`}
                          className="function-tag"
                        >
                          {func}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="project-links">
                    <div className="section-title">Link</div>
                    <div className="link-wrapper">
                      <Link href={project.link.url} passHref>
                        <div className="project-link">
                          <div>{project.link.title}</div>
                        </div>
                      </Link>
                    </div>
                  </div>

                  {project.stack.map((stack, stackIndex) => (
                    <div key={`stack-${stackIndex}`} className="tech-stack">
                      <div className="stack-category">{stack.name}</div>
                      <div className="stack-items">
                        {stack.list.split(', ').map((tech, techIndex) => (
                          <span key={`tech-${techIndex}`} className="stack-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ProjectContainer>
  );
};

export default Project;

const ProjectContainer = styled.div`
  width: 100%;
  background-color: #f8f9fa;

  .project-wrapper {
    padding: 50px 0;
    width: 90%;
    margin: 0 auto;
    max-width: 1400px;
  }

  .title {
    width: fit-content;
    margin: 0 auto 50px;
    font-size: 2.8rem;
    font-weight: 850;
    color: #343a40;
    border-bottom: 3px solid #343a40;
    padding-bottom: 10px;
  }

  .projects-list {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .project-card {
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease;
    padding: 30px;

    &:hover {
      transform: translateY(-5px);
    }
  }

  .project-title {
    font-size: 2rem;
    font-weight: 700;
    color: #343a40;
    margin: 0 0 15px 0;
  }

  .project-period {
    display: inline-block;
    font-size: 1rem;
    color: #6c757d;
    background-color: #f1f3f5;
    padding: 8px 16px;
    border-radius: 20px;
    margin-bottom: 25px;
  }

  .project-content {
    display: flex;
    gap: 30px;

    @media screen and (max-width: 1024px) {
      flex-direction: column;
    }
  }

  .image-section {
    width: 50%;
    @media screen and (max-width: 1024px) {
      width: 95%;
      margin: 0 auto;
    }
    .image-slider {
      position: relative;
      width: 100%;
      border-radius: 15px;
      overflow: hidden;
      display: flex;
      gap: 20px;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      -webkit-overflow-scrolling: touch;

      &::-webkit-scrollbar {
        height: 8px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: #dee2e6;
        border-radius: 4px;
      }

      img {
        scroll-snap-align: start;
        width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 12px;
      }
    }
  }

  .details-section {
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 50%;

    @media screen and (max-width: 1024px) {
      width: 95%;
      margin: 0 auto;
    }
  }

  .description-list {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      position: relative;
      padding-left: 20px;
      margin-bottom: 12px;
      line-height: 1.6;
      color: #495057;

      &::before {
        content: '•';
        position: absolute;
        left: 0;
        color: #343a40;
      }
    }
  }

  .main-functions {
    .section-title {
      font-size: 1.2rem;
      font-weight: 600;
      color: #343a40;
      margin-bottom: 15px;
    }

    .function-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;

      .function-tag {
        background-color: #e9ecef;
        padding: 6px 12px;
        border-radius: 15px;
        font-size: 0.9rem;
        color: #495057;
      }
    }
  }

  .project-links {
    .section-title {
      font-size: 1.2rem;
      font-weight: 600;
      color: #343a40;
      margin-bottom: 15px;
    }

    .project-link {
      text-decoration: none;

      div {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 10px 20px;
        background-color: #343a40;
        color: white;
        border-radius: 25px;
        font-weight: 500;
        transition: all 0.2s ease;

        &:hover {
          background-color: #495057;
          transform: translateY(-2px);
        }
      }
    }
  }

  .tech-stack {
    padding-top: 25px;
    border-top: 1px solid #dee2e6;

    .stack-category {
      font-weight: 600;
      color: #343a40;
      margin-bottom: 12px;
    }

    .stack-items {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;

      .stack-tag {
        background-color: #f8f9fa;
        padding: 4px 10px;
        border-radius: 12px;
        font-size: 0.85rem;
        color: #495057;
      }
    }
  }
`;
