import { Dimensions } from "react-native";

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

export const rem = size => {
    const remFactor = windowWidth / 380;
    return Math.round(remFactor * size);
}