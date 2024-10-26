import React from "react";
import "../../Component/Projects/Projects.css";
import { projects_box } from "../Utils/Mock/MockData";

const Projects = () => {
  return (
    <>
      <div id="projects" className="container-fluid bg-black main_projects">
        <h1>PROJECTS</h1>
        <div className="projects_wraper">
          {projects_box.map((item, index) => (
            <div key={index} className="project_1">
              <img
                src={
                  index === 0
                    ? item.Image // 첫번째 카드는 기존 이미지
                    : index === 1
                    ? item.Image2 // 두번째 카드 이미지
                    : "third-image-url" // 세번째 카드 이미지
                }
                alt={item.id}
              />
              <a
                className="btn-2"
                href={
                  index === 0
                    ? "https://sh2068.github.io/LivePage/" // 첫번째 카드 링크
                    : index === 1
                    ? "https://second-link-url" // 두번째 카드 링크
                    : "https://third-link-url" // 세번째 카드 링크
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="btn-border"></span>
                <span className="btn-ripple">
                  <span></span>
                </span>
                <span className="btn-title">
                  <span data-text="더 보기">더 보기</span>
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
