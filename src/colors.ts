export const colors = {
    // Primary colors
    primary: {
        50: "#e3f2fd",
        100: "#bbdefb",
        200: "#90caf9",
        300: "#64b5f6",
        400: "#42a5f5",
        500: "#2196f3", // Main primary color
        600: "#1e88e5",
        700: "#1976d2",
        800: "#1565c0",
        900: "#0d47a1",
    },

    // Secondary colors
    secondary: {
        50: "#fce4ec",
        100: "#f8bbd9",
        200: "#f48fb1",
        300: "#f06292",
        400: "#ec407a",
        500: "#e91e63", // Main secondary color
        600: "#d81b60",
        700: "#c2185b",
        800: "#ad1457",
        900: "#880e4f",
    },

    // Neutral colors
    neutral: {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#eeeeee",
        300: "#e0e0e0",
        400: "#bdbdbd",
        500: "#9e9e9e",
        600: "#757575",
        700: "#616161",
        800: "#424242",
        900: "#212121",
    },

    // Success colors
    success: {
        50: "#e8f5e8",
        100: "#c8e6c9",
        200: "#a5d6a7",
        300: "#81c784",
        400: "#66bb6a",
        500: "#4caf50", // Main success color
        600: "#43a047",
        700: "#388e3c",
        800: "#2e7d32",
        900: "#1b5e20",
    },

    // Warning colors
    warning: {
        50: "#fff8e1",
        100: "#ffecb3",
        200: "#ffe082",
        300: "#ffd54f",
        400: "#ffca28",
        500: "#ffc107", // Main warning color
        600: "#ffb300",
        700: "#ffa000",
        800: "#ff8f00",
        900: "#ff6f00",
    },

    // Error colors
    error: {
        50: "#ffebee",
        100: "#ffcdd2",
        200: "#ef9a9a",
        300: "#e57373",
        400: "#ef5350",
        500: "#f44336", // Main error color
        600: "#e53935",
        700: "#d32f2f",
        800: "#c62828",
        900: "#b71c1c",
    },

    // Info colors
    info: {
        50: "#e1f5fe",
        100: "#b3e5fc",
        200: "#81d4fa",
        300: "#4fc3f7",
        400: "#29b6f6",
        500: "#03a9f4", // Main info color
        600: "#039be5",
        700: "#0288d1",
        800: "#0277bd",
        900: "#01579b",
    },

    // Dark theme colors
    dark: {
        background: {
            default: "#121212",
            paper: "#1e1e1e",
            elevated: "#2d2d2d",
        },
        text: {
            primary: "#ffffff",
            secondary: "#b3b3b3",
            disabled: "#666666",
        },
    },

    // Light theme colors
    light: {
        background: {
            default: "#ffffff",
            paper: "#fafafa",
            elevated: "#ffffff",
        },
        text: {
            primary: "#212121",
            secondary: "#757575",
            disabled: "#bdbdbd",
        },
    },

    // Common colors
    common: {
        white: "#ffffff",
        black: "#000000",
        transparent: "transparent",
    },

    // Gradient colors
    gradients: {
        primary: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        secondary: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        success: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        warning: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
        error: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    },
} as const;

export type ColorPalette = typeof colors;
export type ColorShade =
    | 50
    | 100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 800
    | 900;
export type ColorName = keyof Omit<
    ColorPalette,
    "dark" | "light" | "common" | "gradients"
>;

export const getColor = (
    colorName: ColorName,
    shade: ColorShade = 500
): string => {
    return colors[colorName][shade];
};

export const getGradient = (
    gradientName: keyof typeof colors.gradients
): string => {
    return colors.gradients[gradientName];
};

/// Background colors
export const backgroundInfoAlert = '#60a5fa';
export const backgroundPrimaryDark = '#001A33';
export const backgroundPrimaryLight = '#E6F3FF';

export const {
    primary,
    secondary,
    neutral,
    success,
    warning,
    error,
    info,
    dark,
    light,
    common,
    gradients,
} = colors;
