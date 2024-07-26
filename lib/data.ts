import React from "react";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import goodWorkImage from "@/public/goodworksu.png";
import projectImage from "@/public/Busniess-Web-Banner-11.jpg"

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;


export const headerLanguageMap = {
    Home: 'Домой',
    About: 'Обо мне',
    Projects: 'Проекты',
    Skills: 'Умения',
    Experience: 'Опыт',
    Contact: 'Связаться',
}

export const experiencesData = [
    {
        title: "Title of my experience",
        location: "Location, where it happened.",
        description:
            "Short desctription what i was doing",
        icon: React.createElement(LuGraduationCap),
        date: "Dates in a format of (Year Month - Year Month)",
    },
    {
        title: "Title of my experience",
        location: React.createElement("span", {},
            React.createElement("a", {
                href: "https://test.com",
                style: { textDecoration: 'underline' },
                target: "_blank"
            }, "Nameoflink"),
            " City, Country"
        ),
        description:
            "Short desctription what I was doing.",
        icon: React.createElement(FaVuejs),
        date: "Dates in a format of (Year Month - Year Month)",
    },
    {
        title: "Title of my experience",
        location: "Location, where it happened.",
        description:
            "Short desctription what I was doing.",
        icon: React.createElement(FaReact),
        date: "Dates in format of (Year Month - Year Month)",
    },
    {
        title: "Title of my experience",
        location: "Location, where it happened.",
        description:
            "Short desctription what I was doing.",
        icon: React.createElement(LuGraduationCap),
        date: "Dates in a format of (Year Month - Year Month)",
    },

]

export const experiencesDataRu = [
    {
        "title": "Название опыта",
        "location": "Место, где это произошло",
        "description": "Краткое описание что я делал.",
        icon: React.createElement(LuGraduationCap),
        "date": "Даты в формате (Год Месяц - Год Месяц)"
    },
    {
        "title": "Название опыта",
        "location": "Место, где это произошло",
        "description": "Краткое описание что я делал.",
        "icon": React.createElement(FaVuejs),
        "date": "Даты в формате (Год Месяц - Год Месяц)"
    },
    {
        "title": "Название опыта",
        "location": "Место, где это произошло",
        "description": "Краткое описание что я делал.",
        "icon": React.createElement(FaReact),
        "date": "Даты в формате (Год Месяц - Год Месяц)"
    },
    {
        "title": "Название опыта",
        "location": "Место, где это произошло",
        "description": "Краткое описание что я делал.",
        "icon": React.createElement(LuGraduationCap),
        "date": "Даты в формате (Год Месяц - Год Месяц)"
    }
]


export type ProjectTags = typeof projectsData[number]["tags"];

export const projectsData = [
    {
        title: "Good Work Loaders",
        title_ru: "Good Work Loaders",
        description:
            "Short description of my project. What it is and what it does.",
        desc_ru: "Современный и функциональный веб-сайта для компании, специализирующейся на ввозе и продаже фронтальных погрузчиков и спецтехники из Китая.",
        tags: ["HTML", "SCSS", "JavaScript", 'Alpine.js', 'Python', 'Django', 'Wagtail CMS'],
        imageUrl: goodWorkImage,
        projectUrl: 'https://goodwork.su/',
        demoUrl: 'https://demo.page/',
    },
    {
        title: "Project title",
        title_ru: "Название проекта",
        description:
            "Short description of my project. What it is and what it does.",
        desc_ru: "Краткое описание своего проекта, что он из себя представляет и как работает.",
        tags: ["React", "TypeScript", "Next.js"],
        imageUrl: projectImage,
        projectUrl: 'https://github.com/',
        demoUrl: 'https://demo.page/',


    },
    {
        title: "Project title",
        title_ru: "Название проекта",
        description:
            "Short description of my project. What it is and what it does.",
        desc_ru: "Краткое описание своего проекта, что он из себя представляет и как работает.",
        tags: ["JavaScript", "HTML", "CSS3"],
        imageUrl: projectImage,
        projectUrl: 'https://github.com/',
        demoUrl: 'https://demo.page/',
    },


]

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Alpine.js",
    "Vue",
    "React",
    "Next.js",
    "Django",
    "Git",
    "TailwindCSS",
    "Boostrap",
    "Framer Motion"
] 
