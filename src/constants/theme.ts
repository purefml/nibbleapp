import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {

    primary: "#001E36", //Text color
    backgroundColor: "#f7fcff",
    headerColor: "#001E36",
    danger: "#FF2C2C",
    yellow: "#FFC369",


    white: "#fff", //White color
    black: "#020202",
    lightBlack: "#0e1111",
    softBlack : "#191919",

    blue: "#4096FE", // Just blue 😛
    lightBlue: "#31A8FF", // For Links
    fadedBlue: "#31A8FF30",
    
    mutedGray: "#97A6B3", // For Disabled or muted
    gray: "#777777",
    gray2: '#F8F8F8',
    lightGray: "#F5F6FB",
    lightGray2: '#757575',

    transparentBlack1: 'rgba(2, 2, 2, 0.1)',
    transparentBlack3: 'rgba(2, 2, 2, 0.3)',
    transparentBlack5: 'rgba(2, 2, 2, 0.5)',
    transparentBlack7: 'rgba(2, 2, 2, 0.7)',
    transparentBlack9: 'rgba(2, 2, 2, 0.9)',

    transparentGray: 'rgba(77,77,77, 0.8)',
    transparentDarkGray: 'rgba(20,20,20, 0.9)',

    transparent: 'transparent',
};
export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes
    largeTitle: 40,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};

export const FONTS = {
    black: "Poppins-Black",
    regular: "Poppins-Regular",
    bold: "Poppins-Bold",
    semiBold: "Poppins-SemiBold",
    lightItalic: "Poppins-LightItalic",
    italic: "Poppins-Italic",
    boldItalic: "Poppins-MediumItalic",
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
