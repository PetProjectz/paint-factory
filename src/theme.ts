"use client";

import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";

import { getColor, backgroundInfoAlert } from "./colors";

const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
});

const theme = createTheme({
    colorSchemes: { light: true, dark: true },
    cssVariables: {
        colorSchemeSelector: "class",
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
    components: {
        MuiAlert: {
            styleOverrides: {
                root: {
                    variants: [
                        {
                            props: { severity: "info" },
                            style: {
                                backgroundColor: backgroundInfoAlert,
                            },
                        },
                    ],
                },
            },
        },
    },
    // palette: {
    //   primary: {
    //     main: getColor('primary', 500),      // Base color
    //     light: getColor('primary', 300),     // Lighter shade
    //     dark: getColor('primary', 700),      // Darker shade
    //     contrastText: getColor('neutral', 900), // Text color for contrast
    //   },
    //   secondary: {
    //     main: getColor('secondary', 500),      // Base color
    //     light: getColor('secondary', 300),     // Lighter shade
    //     dark: getColor('secondary', 700),      // Darker shade
    //     contrastText: getColor('neutral', 900), // Text color for contrast
    //   }
    // },
});

export default theme;
