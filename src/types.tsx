import { MouseEventHandler } from "react";

export type University = {
    university: string;
    year: string;
    course: string;
    cgpa: string;
    hyperlink: string;
    achievements: Achievements[],
}
export type Achievements = {
    title: string;
    duration: string;
}

export type Projects = {
    title: string;
    type: string;
    course: string;
    year: string;
    summary: string;
    lang: string[];
    objectives: string[];
    image: string;
}

export type Skill = {
    type: string;
    languages: string[];
}

export type Experience = {
    title: string;
    company: string;
    duration: string;
}


// Props Type

export type ChatProps = {
    setNext: React.Dispatch<React.SetStateAction<boolean>>;
}

export type HeaderProps = {
    onClick: MouseEventHandler<HTMLDivElement>
}

export type IconProps = {
    IconName: string
}

export type ProjectProps = {
    project: Projects
}


export type MessageProps = {
    message: string
}

export type ResumeHeaderProps = {
    currentIndex: number,
    navigatePage: React.Dispatch<React.SetStateAction<number>>;
}

export type RowButtonProps = {
    onClick: MouseEventHandler<HTMLDivElement>,
    active?: boolean,
    title: string
}

export type SocialMediaButtonProps = {
    top?: boolean,
    firstBtn: string,
    secondBtn: string
}