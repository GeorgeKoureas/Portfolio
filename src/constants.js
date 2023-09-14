import Beehive from './assets/BeehivePresentationImage.jpg';
import Minerva from './assets/MinervaPresentationImage.jpg';
import Tracker from './assets/CovidPresentationImage.jpg';
import Portfolio from './assets/PortfolioPresentationImage.jpg';
import BeehiveMin from './assets/BeehivePresentationImage-min.png';
import MinervaMin from './assets/MinervaPresentationImage-min.png';
import TrackerMin from './assets/CovidPresentationImage-min.png';
import PortfolioMin from './assets/PortfolioPresentationImage-min.png';
import UIUX from './assets/UI_UXPresentationImage.jpg';



export const projectInfo = [
    {
        id: 0,
        title: "Beehive",
        image: Beehive,
        imagemin: BeehiveMin,
        description: "Beehive is a challenge hosting platform and my first full-stack project.",
        description_large: "Beehive is my first full-stack project. Initially created with Django, it allows the users to browse or host entepreneurial challenges. Beehive enables hosts to monitor and grade the applications of the contestants, while it allows contestants to team-up and submit answers for the entepreneurial challenges they participate in. Finally, a third persona, ensures the smooth operation of each contest, reviewing the descriptions, helping players team up, and more.", 
        stack: ["Django", "Bootstrap", "React(Soon)"],
        links: {Github: "https://github.com/GeorgeKoureas/The-Beehive", Mindspace: "https://www.mindspace.gr/"},
        color: '#F25F4C',
    },
    {
        id: 1,
        title: "Minerva",
        image: Minerva,
        imagemin: MinervaMin,
        description: "Minerva is a LinkedIn automation tool that I created to automate part of my day to day activities at Dialectica",
        description_large: "Due to the pandemic, my starting date at Dialectica was pushed back for 2 months. During that time (March-April) I used my knowledge for the company from the interview process, in order to create a tool that could automate part of the day-to-day workflow in the company. This simple bot which I coded in Python, creates an excel file with promising LinkedIn profiles which are filtered based on user preferences.",
        stack: ["Python", "Selenium"],
        links: {Github: "https://github.com/GeorgeKoureas/The-Beehive", Dialectica: "https://dialecticanet.com/"},
        color: "#5395E4",
    },
        {
        id: 2,
        title: "Covid Tracker",
        image: Tracker,
        imagemin: TrackerMin,
        description: "A simple Covid-19 tracker, and my first React project",
        description_large: "This is a simple COVID-19 tracker that I created in order to familiarize myself with React. It is a combination of 3 components -Graph, Choice Menu, Cards- and I created it following a tutorial. The data is updated realtime and I call upon the relevant API to display it.",
        stack: ["React"],
        links: {Github: "https://github.com/GeorgeKoureas/The-Beehive"},
        color: '#A375FF',
    },
        {
        id: 3,
        title: "Portfolio",
        image: Portfolio,
        imagemin: PortfolioMin,
        description: "I heard you like 'Inception', so I decided to display my portfolio on my portfolio. Click here to find the source",
        description_large: "The Portfolio you are currently browsing was used as a training ground for React. I played around with MaterialUI and managed to also implement both a Dark and a Light Theme. I used the floating action button of MaterialUI as my contact details' index and customize the site colors based on the projects you are viewing.",
        stack: ["React", "Netlify"],
        links: {Github: "https://github.com/GeorgeKoureas/The-Beehive"},
        color: '#387D5F',
    },
]
