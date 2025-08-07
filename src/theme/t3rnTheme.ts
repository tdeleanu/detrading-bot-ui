import { createTheme } from '@mui/material/styles';

const t3rnTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#7C3AED', // Purple
      light: '#A78BFA',
      dark: '#5B21B6',
    },
    secondary: {
      main: '#EC4899', // Pink
      light: '#F472B6',
      dark: '#DB2777',
    },
    background: {
      default: '#0B0B0F', // Very dark background
      paper: 'rgba(17, 17, 23, 0.8)', // Slightly lighter with transparency
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.6)',
    },
    success: {
      main: '#10B981',
    },
    error: {
      main: '#EF4444',
    },
  },
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: {
      fontSize: '4rem',
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: '8px',
          padding: '12px 24px',
          transition: 'all 0.3s ease',
        },
        contained: {
          background: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)',
          boxShadow: '0 4px 20px rgba(124, 58, 237, 0.3)',
          '&:hover': {
            background: 'linear-gradient(135deg, #A78BFA 0%, #F472B6 100%)',
            boxShadow: '0 6px 30px rgba(124, 58, 237, 0.4)',
            transform: 'translateY(-2px)',
          },
        },
        outlined: {
          borderWidth: '2px',
          borderImage: 'linear-gradient(135deg, #7C3AED, #EC4899) 1',
          borderImageSlice: 1,
          '&:hover': {
            borderWidth: '2px',
            background: 'rgba(124, 58, 237, 0.1)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: 'rgba(17, 17, 23, 0.8)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(124, 58, 237, 0.2)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          background: 'rgba(124, 58, 237, 0.2)',
          border: '1px solid rgba(124, 58, 237, 0.3)',
          backdropFilter: 'blur(10px)',
        },
      },
    },
  },
});

export default t3rnTheme;