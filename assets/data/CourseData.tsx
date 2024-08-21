import { Images } from "@/constants"
import { ImageSourcePropType } from "react-native"

export type CourseChapterType = {
    subject: string;
    route: string;
    chapters: number;
    questions: number;
    mockTests: number;
    enrollments: number;
    image: ImageSourcePropType
}

export const SubjectsDetails: CourseChapterType[] = [
    {
        subject: "Chemistry",
        route: 'chemistry',
        chapters: 22,
        questions: 1500,
        mockTests: 100,
        enrollments: 1200,
        image: Images.chemistryBG
    },
    {
        subject: "Physics",
        route: 'physics',
        chapters: 20,
        questions: 1400,
        mockTests: 80,
        enrollments: 1100,
        image: Images.physicsBG
    },
    {
        subject: "Math",
        route: 'math',
        chapters: 25,
        questions: 1600,
        mockTests: 120,
        enrollments: 1300,
        image: Images.mathBG
    }
];