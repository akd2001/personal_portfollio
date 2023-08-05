import DisplayProject from "@/components/DisplayProject";
import HostedCard from "@/components/HostedCard";
import NonHostedCard from "@/components/NonHostedCard";
import {
  hostedProjectList,
  instituteProjectList,
  nonHostedProjectList,
} from "@/data/projectData";
import { StyledHr } from "@/styles/Main.styled";
import { ProjectWrapper } from "@/styles/Project.styled";
import React from "react";

const HostedItems = () => {
  return (
    <>
      {hostedProjectList.map((e, i) => (
        <HostedCard
          key={i}
          title={e.title}
          description={e.description}
          logo={e.logo}
          technologies={e.technologies}
          url={e.url}
        />
      ))}
    </>
  );
};

const NonHostedItems = () => {
  return (
    <>
      {nonHostedProjectList.map((e, i) => (
        <NonHostedCard
          key={i}
          title={e.title}
          description={e.description}
          images={e.images}
          technologies={e.technologies}
        />
      ))}
    </>
  );
};

const InstituteItems = () => {
  return (
    <>
      {instituteProjectList.map((e, i) => (
        <NonHostedCard
          key={i}
          title={e.title}
          description={e.description}
          images={e.images}
          technologies={e.technologies}
        />
      ))}
    </>
  );
};

const Project = () => {
  return (
    <>
      <ProjectWrapper id="projects">
        <StyledHr />
        <DisplayProject children={<HostedItems />} title="Hosted projects" />
        <DisplayProject
          children={<NonHostedItems />}
          title="Non Hosted projects"
        />
        <DisplayProject
          children={<InstituteItems />}
          title="Institute(RKMSCC) projects"
        />
      </ProjectWrapper>
    </>
  );
};

export default Project;
