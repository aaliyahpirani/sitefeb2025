import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import flutter from './flutter.png'
import python from './python.png'
import solidworks from './solidwork.png'
import scipy from './scipystats.png'
import numpy from './numpy.png'
import arduino from './arduino.png'
import react from './react.png'
import openai from './openai.png'
import memorylane from './memorylane.png'


export const assets = {
    arduino,
    numpy,
    scipy,
    solidworks,
    python,
    flutter,
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    react,
    openai,
    memorylane
};

export const workData = [
    {
        title: 'CGEN Aqualens Project',
        description: 'Fullstack web design for water quality testing app',
        modalDescription: 'Working alongside the University of Toronto Engineers without Borders chapter, I helped to develop a water quality testing app for use in underdeveloped countries. I aided in full stack development, creating key components of the app including the user login page. By creating this app, clean water become more accessible and reliable for those in underdeveloped areas of the world.',
        bgImage: '/cgen.png',
        images: [assets.flutter, assets.python]
    },
    {
        title: 'CSCS Analysis',
        description: 'Statistical analysis of CSCS data set',
        modalDescription: 'As a final project for my STA130 class, I performed an analysis of the Canadian Social Connection Survey Data, analyzing whether screentime usage during COVID-19 had a direct correlation with life satisfaction, and how this changed after the pandemic. This project was driven by my own experiences during COVID-19 when most activities were shifted online, and my curiosity about how this changed as activities resumed back to normal. In this project, I used python libraries like scikit-learn, numpy and scipy.stats to perfrom statistical analyses. ',
        bgImage: '/stats.webp',
        images: [assets.scipy, assets.numpy]
    },
    {
        title: 'SUMO Robot',
        description: 'Built and designed a SUMO Robot for competition',
        modalDescription: 'In this project, I designed a SUMO robot from scratch, using SOLIDWORKS to develop the design under the given constraints. This was 3D printed, and after assembly I used arduino programming to code the functions of the robot. It is set for an intramural competition at UofT in February 2025.',
        bgImage: '/sumo.png',
        images: [assets.solidworks, assets.arduino]
    },
    {
        title: 'Memory Lane',
        description: 'A website to help administer reminiscence therapy',
        modalDescription: 'As part of a hackathon, my team and I designed a website that delivers reminiscence therapy to dementia patients. In practice, reminiscence therapy is normally done with healthcare professionals and as a result, can be costly and difficult to administer consistently. Our project utilizes OpenAI\'s text to speech feature and its intelligence to simulate a conversation with a reminiscence therapist. Furthermore, it generates photos and summarizes the conversation to provide the patient with something to remember their memories by.',
        bgImage: '/memorylane1.png',
        images: [assets.react, assets.openai]
    }
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Air Cadet League', date: 'Sept 2018 - Aug 2024', description: 'As a WO2 at my squadron, I oversaw 200+ cadets, leading parades, teaching, and guiding junior cadets in leadership. I won Silver in the Calgary biathlon regional championship and participated in the drill and marksmanship teams. I was also awarded both the Glider and Power pilot scholarships through the air cadet program, earning my wings!', 
        modalDescription: 'As a WO2 at my squadron, I regularly oversaw more than 200 cadets, calling commands on parade, teaching lessons, and providing guidance to allow junior cadets to grow in their leadership capabilities throughout the program. I was a regular participant in all the programs air cadets offered, winning Silver in the Calgary biathlon regional championship, and participating in the drill team and marksmanship team. I was also awarded both the Glider pilot and Power pilot scholarships through the air cadet program, earning my wings!', link: '' },
    { icon: assets.mobile_icon, title: 'STEMinmotion', date: 'Dec 2021 - June 2024', description: 'In 2021, I co-founded STEMinmotion, a non-profit that aims to help provide equity in STEM education. What began with online tutoring has expanded globally from Calgary to Edmonton, Vancouver, and Toronto, reaching over a thousand students through in-person events and partnerships, including with the Telus Spark science museum in Calgary.', 
        modalDescription: 'In 2021, I co-founded STEMinmotion, a non-profit dedicated to providing equal opportunities for STEM education, regardless of financial background. What started with online tutoring and information sharing has grown into a global initiative, expanding to Edmonton, Vancouver, and Toronto. With over a thousand students reached, we create direct impact through in-person events and partnerships, including with Telus Spark. Seeing the positive effects on students and communities keeps me motivated to continue making STEM education accessible.', link: '' },
    { icon: assets.graphics_icon, title: 'Research Associate', date: 'May 2023 - Apr 2024', description: 'At the University of Calgary, I worked with Dr. Julio Garcia Flores on research into hemodynamic forces as a biomarker for heart disease in rTOF patients. I used MATLAB and excel to extract and organize the data. The research was accepted into the ISMRM 2024 conference in Singapore and highlighted the potential of intracardiac forces for early heart disease detection.', 
        modalDescripton: 'At the University of Calgary, I worked with Dr. Julio Garcia Flores on an investigation into hemodynamic forces as a biomarker for heart disease in rTOF patients with regards to age and sex. We compared the cohort to healthy controls, concluding that there were significant differences in all three axes of the heart. My research was accepted into ISMRM conference 2024 in Signapore, and demonstrated the viability of intracardiac forces for early detection of heart disease in the future. ',link: '' },
    { icon: assets.ui_icon, title: 'Math Tutor', date: 'Feb 2021 - Present', description: 'I’ve tutored over 15 students in the Alberta and IB curricula, tailoring my approach to each student’s needs. I focus on providing personalized lessons at affordable rates to help students master concepts and build confidence in achieving their academic goals.',
        modalDescription: 'I have tutored over 15 students in both the Alberta and IB curricula, adapting my teaching approach to suit each student’s individual needs. Whether they needed help mastering complex concepts or gaining confidence in their skills, I focused on providing personalized lessons at affordable rates, ensuring that everyone has the opportunity to achieve their academic goals with the support they need.', link: '' }
    ,
]

export const infoList = [
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: [
        { text: 'Sept 2024 - Apr 2028,  cGPA: 4.0', bold: true },
        { text: 'Honours BSc. in Computer Science at the University of Toronto', bold: false },
      ] },
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Awards', description: [
        { text: 'TD Scholarship for Community Leadership', bold: true },
        { text: '$70,000 scholarship awarded to 20 Canadian students in recognition of outstanding community leadership', bold: false },
        {text: 'Howard Ferguson Admission Scholarship', bold: true},
        { text: 'Cumulative scholarship of $12,000 awarded by the University College to outstanding students from outside Ontario', bold: false}

      ]},
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Activities', description: [
        { text: 'Computer Science Student Union', bold: true },
        { text: 'General Council, External Relations Team', bold: false },
        {text: 'Youreka Canada, Toronto Chapter ', bold: true},
        {text: 'Undergraduate Research Lead', bold: false }
      ]}
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];
