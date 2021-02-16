import './Projects.scss';
import { Project } from './Project';
import ScreenShot1 from '../images/ScreenShot.png';
import BuyThings from '../images/BuythingsScreen.png';

export const Projects = () => {
  const projectDetails = [
    {
      title: 'Buy Food, Sell Food',
      image: ScreenShot1,
      description:
        'A restaurant point of sales system with analytic information as well as production screens for making drinks and food. This was my final project for Lighthouse Labs Bootcamp. This project was all about getting more familiar with React, we used React-Router as well. I also learned a lot about scaling a React app and keeping state organized.  Use 1111 to login.',
      techStack:
        'React, React- Router, SASS, HTML, Node, Express, PostgreSQL, Node - mailer, Canvas.js',
      githubLink: 'https://github.com/CamBrown101/final-project',
      projectLink: 'https://buy-food-sell-food.netlify.app/login',
    },
    {
      title: 'Buy Things, Sell Things',
      image: BuyThings,
      description:
        'A single page App for buying and selling items. We used AJAX calls for all of the reloads within the page. The app includes a chat function using AJAX calls to the database on intervals to allow real time conversations. We did all of this without using frameworks so we could learn how these frameworks work behind the scenes.',
      techStack:
        'jQuery, EJS, SASS, Node, Express, PostgreSQL, HTML, Bootstrap',
      githubLink: 'https://github.com/CamBrown101/mid-term-project',
      projectLink: 'https://buythingssellthings.herokuapp.com/',
    },
    {
      title: 'Schedular',
      image: ScreenShot1,
      description:
        'A point of sales system for a restaurant.Including analytics, employee clock in, stripe integration, the ability to email bills, sort bills by seat and a separate screen for the kitchen and bar for items that need to be prepared.We also a sort by categories for menu items as well as a search bar that you can search by item name or category.',
      techStack:
        'React, React- Router, SASS, HTML, Node, Express, Node - mailer, Canvas.js',
      githubLink: 'https://github.com/CamBrown101/final-project',
      projectLink: 'https://buy-food-sell-food.netlify.app/login',
    },
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
        title={projectDetails[1].title}
        description={projectDetails[1].description}
        techstack={projectDetails[1].techStack}
        image={projectDetails[1].image}
        githubLink={projectDetails[1].githubLink}
        projectLink={projectDetails[1].projectLink}
      />
      <Project
        title={projectDetails[2].title}
        description={projectDetails[2].description}
        techstack={projectDetails[2].techStack}
        image={projectDetails[2].image}
        githubLink={projectDetails[2].githubLink}
        projectLink={projectDetails[2].projectLink}
      />
      <Project
        title={projectDetails[3].title}
        description={projectDetails[3].description}
        techstack={projectDetails[3].techStack}
        image={projectDetails[3].image}
        githubLink={projectDetails[3].githubLink}
        projectLink={projectDetails[3].projectLink}
      />
    </div>
  );
};
