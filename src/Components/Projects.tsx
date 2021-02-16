import './Projects.scss';
import { Project } from './Project';
import ScreenShot1 from '../images/ScreenShot.png';

export const Projects = () => {
  const projectDetails = [
    {
      title: 'Buy Food, Sell Food',
      image: ScreenShot1,
      description:
        'A point of sales system for a restaurant.Including analytics, employee clock in, stripe integration, the ability to email bills, sort bills by seat and a separate screen for the kitchen and bar for items that need to be prepared.We also a sort by categories for menu items as well as a search bar that you can search by item name or category.',
      techStack:
        'React, React- Router, SASS, HTML, Node, Express, Node - mailer, Canvas.js',
      githubLink: 'https://github.com/CamBrown101/final-project',
      projectLink: 'https://buy-food-sell-food.netlify.app/login',
    },
  ];
  return (
    <div className="projects-container">
      <Project
        title={projectDetails[0].title}
        description={projectDetails[0].description}
        techstack={projectDetails[0].techStack}
        image={projectDetails[0].image}
        githubLink={projectDetails[0].githubLink}
        projectLink={projectDetails[0].projectLink}
      />
      <Project
        title={projectDetails[0].title}
        description={projectDetails[0].description}
        techstack={projectDetails[0].techStack}
        image={projectDetails[0].image}
        githubLink={projectDetails[0].githubLink}
        projectLink={projectDetails[0].projectLink}
      />
      <Project
        title={projectDetails[0].title}
        description={projectDetails[0].description}
        techstack={projectDetails[0].techStack}
        image={projectDetails[0].image}
        githubLink={projectDetails[0].githubLink}
        projectLink={projectDetails[0].projectLink}
      />
      <Project
        title={projectDetails[0].title}
        description={projectDetails[0].description}
        techstack={projectDetails[0].techStack}
        image={projectDetails[0].image}
        githubLink={projectDetails[0].githubLink}
        projectLink={projectDetails[0].projectLink}
      />
    </div>
  );
};
