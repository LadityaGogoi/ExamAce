import { Images } from "@/constants";
import { ImageSourcePropType } from "react-native";

export type TrendingTopicType = {
    name: string;
    image: ImageSourcePropType;
    enrollment: number;
    topicId: number;
}

export const trendingTopics: TrendingTopicType[] = [
    {
        name: "Thermodynamics",
        image: Images.physicsBG,
        enrollment: 10234,
        topicId: 1
    },
    {
        name: "Organic Chemistry",
        image: Images.chemistryBG,
        enrollment: 9876,
        topicId: 2
    },
    {
        name: "Electrostatics",
        image: Images.physicsBG,
        enrollment: 9345,
        topicId: 3
    },
    {
        name: "Coordinate Geometry",
        image: Images.mathBG,
        enrollment: 8756,
        topicId: 4
    },
    {
        name: "Trigonometry",
        image: Images.mathBG,
        enrollment: 8123,
        topicId: 5
    },
    {
        name: "Differential Calculus",
        image: Images.mathBG,
        enrollment: 7890,
        topicId: 6
    },
    {
        name: "Modern Physics",
        image: Images.physicsBG,
        enrollment: 7456,
        topicId: 7
    },
    {
        name: "Probability",
        image: Images.mathBG,
        enrollment: 7234,
        topicId: 8
    }
];
