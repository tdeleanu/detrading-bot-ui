import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import ConnectWallet from './ConnectWallet';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <Box
      component={motion.header}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'rgba(11, 11, 15, 0.8)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(124, 58, 237, 0.2)',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            py: 2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 20px rgba(124, 58, 237, 0.3)',
              }}
            >
              <Typography
                sx={{
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  color: '#FFFFFF',
                }}
              >
                AI
              </Typography>
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                background: 'linear-gradient(135deg, #FFFFFF 0%, #A78BFA 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              TradingBot
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
              <Typography
                component="a"
                href="#features"
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  fontWeight: 500,
                  transition: 'color 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    color: '#A78BFA',
                  },
                }}
              >
                Features
              </Typography>
              <Typography
                component="a"
                href="#performance"
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  fontWeight: 500,
                  transition: 'color 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    color: '#A78BFA',
                  },
                }}
              >
                Performance
              </Typography>
              <Typography
                component="a"
                href="#roadmap"
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  fontWeight: 500,
                  transition: 'color 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    color: '#A78BFA',
                  },
                }}
              >
                Roadmap
              </Typography>
            </Box>
            <ConnectWallet />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;