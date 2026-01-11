"use client";

import { alpha, createTheme, PaletteColor } from "@mui/material/styles";
import { Roboto } from "next/font/google";

const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
});

declare module "@mui/material/styles" {
    interface Theme {
        getAlphaColor: (
            colorKey: keyof Theme["palette"],
            opacity: number,
            shade?: "light" | "main" | "dark"
        ) => string;
    }
    interface ThemeOptions {
        getAlphaColor?: (
            colorKey: keyof Theme["palette"],
            opacity: number,
            shade?: "light" | "main" | "dark"
        ) => string;
    }
}

const theme = createTheme({
    colorSchemes: { dark: true },
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
                                backgroundColor: "#60a5fa",
                            },
                        },
                    ],
                },
            },
        },
    },
    palette: {
        mode: "dark",
        primary: {
            main: "#FFE44D",
            light: "#42a5f5",
            dark: "#FFE44D",
        },
        secondary: {
            main: "#9e9e9e",
            dark: "#616161",
            light: "#e0e0e0",
        },
    },
});

theme.getAlphaColor = (colorKey, opacity, shade = "main") => {
    const color = theme.palette[colorKey] as PaletteColor;
    return color ? alpha(color[shade], opacity) : "";
};

export default theme;
