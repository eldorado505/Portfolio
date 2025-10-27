module.exports = {
    darkMode: ["class"],
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          border: "hsl(0, 0%, 85%)",
          input: "hsl(0, 0%, 85%)",
          ring: "hsl(270, 85%, 60%)",
          background: "hsl(0, 0%, 10%)",
          foreground: "hsl(0, 0%, 98%)",
          primary: {
            DEFAULT: "hsl(270, 85%, 60%)",
            foreground: "hsl(0, 0%, 100%)",
          },
          secondary: {
            DEFAULT: "hsl(270, 65%, 50%)",
            foreground: "hsl(0, 0%, 100%)",
          },
          tertiary: {
            DEFAULT: "hsl(0, 0%, 10%)",
            foreground: "hsl(0, 0%, 98%)",
          },
          neutral: {
            DEFAULT: "hsl(0, 0%, 98%)",
            foreground: "hsl(0, 0%, 10%)",
          },
          success: {
            DEFAULT: "hsl(160, 65%, 45%)",
            foreground: "hsl(0, 0%, 100%)",
          },
          warning: {
            DEFAULT: "hsl(35, 90%, 55%)",
            foreground: "hsl(0, 0%, 10%)",
          },
          destructive: {
            DEFAULT: "hsl(0, 84%, 60%)",
            foreground: "hsl(0, 0%, 100%)",
          },
          muted: {
            DEFAULT: "hsl(0, 0%, 20%)",
            foreground: "hsl(0, 0%, 75%)",
          },
          accent: {
            DEFAULT: "hsl(270, 85%, 60%)",
            foreground: "hsl(0, 0%, 100%)",
          },
          popover: {
            DEFAULT: "hsl(0, 0%, 10%)",
            foreground: "hsl(0, 0%, 98%)",
          },
          card: {
            DEFAULT: "hsl(0, 0%, 15%)",
            foreground: "hsl(0, 0%, 98%)",
          },
          gray: {
            50: "hsl(0, 0%, 98%)",
            100: "hsl(0, 0%, 94%)",
            200: "hsl(0, 0%, 85%)",
            300: "hsl(0, 0%, 75%)",
            400: "hsl(0, 0%, 65%)",
            500: "hsl(0, 0%, 55%)",
            600: "hsl(0, 0%, 45%)",
            700: "hsl(0, 0%, 35%)",
            800: "hsl(0, 0%, 20%)",
            900: "hsl(0, 0%, 10%)",
          },
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"],
          display: ['"Space Grotesk"', "sans-serif"],
        },
        borderRadius: {
          lg: "8px",
          md: "6px",
          sm: "4px",
        },
        spacing: {
          '4': '1rem',
          '8': '2rem',
          '12': '3rem',
          '16': '4rem',
          '20': '5rem',
          '24': '6rem',
          '32': '8rem',
          '48': '12rem',
          '64': '16rem',
        },
        backgroundImage: {
          'gradient-1': 'linear-gradient(135deg, hsl(270, 95%, 60%) 0%, hsl(270, 80%, 50%) 100%)',
          'gradient-2': 'linear-gradient(135deg, hsl(0, 0%, 10%) 0%, hsl(270, 10%, 20%) 100%)',
          'button-border-gradient': 'linear-gradient(90deg, hsl(270, 85%, 60%), hsl(270, 65%, 50%))',
        },
      },
    },
    plugins: [require("tailwindcss-animate")],
  }
  