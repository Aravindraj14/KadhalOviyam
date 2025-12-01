module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#B8860B", // darkgoldenrod - Sacred gold
          50: "#FEFCF0", // Very light golden tint
          100: "#FDF8D7", // Light golden tint
          200: "#FAF0AF", // Medium light golden
          300: "#F7E887", // Medium golden
          400: "#F4E05F", // Bright golden
          500: "#B8860B", // Base sacred gold
          600: "#A67A0A", // Darker golden
          700: "#946E09", // Deep golden
          800: "#826208", // Very deep golden
          900: "#705607", // Darkest golden
        },
        secondary: {
          DEFAULT: "#8B4513", // saddlebrown - Rich earth tone
          50: "#F7F2ED", // Very light brown tint
          100: "#EFE5DB", // Light brown tint
          200: "#DFCBB7", // Medium light brown
          300: "#CFB193", // Medium brown
          400: "#BF976F", // Bright brown
          500: "#8B4513", // Base rich earth
          600: "#7D3E11", // Darker brown
          700: "#6F370F", // Deep brown
          800: "#61300D", // Very deep brown
          900: "#53290B", // Darkest brown
        },
        accent: {
          DEFAULT: "#DC143C", // crimson - Ceremonial red
          50: "#FDF2F4", // Very light red tint
          100: "#FBE5E9", // Light red tint
          200: "#F7CBD3", // Medium light red
          300: "#F3B1BD", // Medium red
          400: "#EF97A7", // Bright red
          500: "#DC143C", // Base ceremonial red
          600: "#C61236", // Darker red
          700: "#B01030", // Deep red
          800: "#9A0E2A", // Very deep red
          900: "#840C24", // Darkest red
        },
        background: "#FEFDF8", // Warm ivory canvas
        surface: "#F5F5DC", // beige - Subtle beige for cards
        text: {
          primary: "#2F2F2F", // Soft black for comfortable reading
          secondary: "#6B6B6B", // Muted gray for hierarchy
        },
        success: {
          DEFAULT: "#228B22", // forestgreen - Natural green
          50: "#F0F8F0", // Very light green tint
          100: "#E1F1E1", // Light green tint
          200: "#C3E3C3", // Medium light green
          300: "#A5D5A5", // Medium green
          400: "#87C787", // Bright green
          500: "#228B22", // Base natural green
          600: "#1F7D1F", // Darker green
          700: "#1C6F1C", // Deep green
          800: "#196119", // Very deep green
          900: "#165316", // Darkest green
        },
        warning: {
          DEFAULT: "#FF8C00", // darkorange - Gentle amber
          50: "#FFF7F0", // Very light orange tint
          100: "#FFEFE1", // Light orange tint
          200: "#FFDFC3", // Medium light orange
          300: "#FFCFA5", // Medium orange
          400: "#FFBF87", // Bright orange
          500: "#FF8C00", // Base gentle amber
          600: "#E67E00", // Darker orange
          700: "#CC7000", // Deep orange
          800: "#B36200", // Very deep orange
          900: "#995400", // Darkest orange
        },
        error: {
          DEFAULT: "#CD5C5C", // indianred - Compassionate coral
          50: "#FBF4F4", // Very light red tint
          100: "#F7E9E9", // Light red tint
          200: "#EFD3D3", // Medium light red
          300: "#E7BDBD", // Medium red
          400: "#DFA7A7", // Bright red
          500: "#CD5C5C", // Base compassionate coral
          600: "#B95353", // Darker red
          700: "#A54A4A", // Deep red
          800: "#914141", // Very deep red
          900: "#7D3838", // Darkest red
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        script: ['Dancing Script', 'cursive'],
        cta: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      boxShadow: {
        'subtle': '0 4px 12px rgba(0, 0, 0, 0.1)',
        'card': '0 8px 24px rgba(0, 0, 0, 0.12)',
      },
      transitionDuration: {
        'gentle': '300ms',
        'reveal': '400ms',
      },
      transitionTimingFunction: {
        'gentle': 'ease-out',
        'reveal': 'ease-out',
      },
      borderWidth: {
        '1': '1px',
        '2': '2px',
      },
      animation: {
        'parallax': 'parallax 1s ease-out',
      },
      keyframes: {
        parallax: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-50px)' },
        },
      },
    },
  },
  plugins: [],
}