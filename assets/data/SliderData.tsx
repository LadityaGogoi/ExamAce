import { Images } from "@/constants";
import { ImageSourcePropType } from "react-native"

export type ImageSliderType = {
    title: string;
    image: ImageSourcePropType;
    description: string;
};

export const ImageSlider = [
    {
        title: 'Physics',
        image: Images.physicsBG,
        description: 'ok ok'
    },
    {
        title: 'Chemistry',
        image: Images.chemistryBG,
        description: 'ok ok'
    },
    {
        title: 'math',
        image: Images.mathBG,
        description: 'ok ok'
    },
]