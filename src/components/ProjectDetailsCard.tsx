import { ProjectDetails, VisitButton } from "@/styles/Project.styled";
import React from "react";

interface props {
  isHosted: boolean;
  title: string;
  description: string;
  techs: Array<string>;
  url?: string;
}

const ProjectDetailsCard = ({
  isHosted,
  description,
  techs,
  title,
  url,
}: props) => {
  return (
    <>
      <ProjectDetails>
        <p className="project-title">{title}</p>
        <p>{description}</p>
        <p className="dev-text">Developed with :-</p>
        <div className="lang-grp">
          {techs?.map((e, i) => (
            <div key={i} className="lang-markers">
              {e}
            </div>
          ))}
        </div>
        {isHosted && (
          <VisitButton href={url} target="_blank">
            Visit
          </VisitButton>
        )}
      </ProjectDetails>
    </>
  );
};

export default ProjectDetailsCard;
