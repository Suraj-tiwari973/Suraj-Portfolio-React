import React from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import projectsData from "../components/projectData";

export default function Projects() {
  // this is project card..
  const ProjectCard = ({ image, link, text }) => (
    <div className="col-md-6 d-flex align-items-center justify-content-center">
      <div className="my-4 p-3 bg-light rounded">
        <Cards image={image} link={link} text={text} />
      </div>
    </div>
  );

  return (
    <>
      <Navbar />
      <div>
        <div className="heading my-3">
          <h2 className="text-center font-weight-bold text-primary text-decoration-underline">
            Projects
          </h2>
        </div>
        <div className="project--card--container">
          <div class="row ">
            {
              // here i have used the map function with rest opearator to pass all the data as an argument in pojectCard component.
              projectsData.map((item, index) => {
                return <ProjectCard key={index} {...item} />;
              })
            }
          </div>
        </div>
      </div>
    </>
  );
}
