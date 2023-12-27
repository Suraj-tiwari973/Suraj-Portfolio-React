import React from "react";
import Navbar from "../components/Navbar";
import SkillStatusBar from "../components/SkillsStatusBar";

export default function Skills() {
  return (
    <>
      <Navbar />
      <div>
        <h3 className="text-center my-3 text-primary text-decoration-underline">
          My Skills
        </h3>

        <div className="status--container">
          <div class="row ">
            <div class="col-md-6 d-flex justify-content-center">
              <div class="my-4 p-3 rounded w-100">
                <SkillStatusBar skill="React" proficiency={95} />
              </div>
            </div>

            <div class="col-md-6 d-flex justify-content-center">
              <div class="my-4 p-3 rounded w-100">
                <SkillStatusBar skill="JavaScript" proficiency={90} />
              </div>
            </div>
          </div>

          <div class="row ">
            <div class="col-md-6 d-flex justify-content-center">
              <div class="my-4 p-3 rounded w-100">
                <SkillStatusBar skill="React Native" proficiency={80} />
              </div>
            </div>

            <div class="col-md-6 d-flex justify-content-center">
              <div class="my-4 p-3 rounded w-100">
                <SkillStatusBar skill="MongoDB" proficiency={70} />
              </div>
            </div>
          </div>

          <div class="row ">
            <div class="col-md-6 d-flex justify-content-center">
              <div class="my-4 p-3 rounded w-100">
                <SkillStatusBar skill="SQL" proficiency={80} />
              </div>
            </div>

            <div class="col-md-6 d-flex justify-content-center">
              <div class="my-4 p-3 rounded w-100">
                <SkillStatusBar skill="Node JS" proficiency={75} />
              </div>
            </div>
          </div>

          <div class="row ">
            <div class="col-md-6 d-flex justify-content-center">
              <div class="my-4 p-3 rounded w-100">
                <SkillStatusBar skill="Java" proficiency={90} />
              </div>
            </div>

            <div class="col-md-6 d-flex justify-content-center">
              <div class="my-4 p-3 rounded w-100">
                <SkillStatusBar skill="HTML" proficiency={95} />
              </div>
            </div>
          </div>

          <div class="row ">
            <div class="col-md-6 d-flex justify-content-center">
              <div class="my-4 p-3 rounded w-100">
                <SkillStatusBar skill="CSS" proficiency={75} />
              </div>
            </div>

            <div class="col-md-6 d-flex justify-content-center">
              <div class="my-4 p-3 rounded w-100">
                <SkillStatusBar skill="BootStrap" proficiency={70} />
              </div>
            </div>
          </div>

          <div class="row ">
            <div class="col-md-6 d-flex justify-content-center">
              <div class="my-4 p-3 rounded w-100">
                <SkillStatusBar skill="Figma" proficiency={60} />
              </div>
            </div>

            <div class="col-md-6 d-flex justify-content-center">
              <div class="my-4 p-3 rounded w-100">
                <SkillStatusBar skill="VS Code" proficiency={85} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
