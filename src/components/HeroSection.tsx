import React from 'react';
import { Box, Container, Typography, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import SecurityIcon from '@mui/icons-material/Security';
import ConnectWallet from './ConnectWallet';

const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #0B0B0F 0%, #111117 100%)',
        position: 'relative',
        overflow: 'hidden',
        pt: 12,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 30% 30%, rgba(124, 58, 237, 0.15) 0%, transparent 40%), radial-gradient(circle at 70% 70%, rgba(236, 72, 153, 0.1) 0%, transparent 40%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(124, 58, 237, 0.08) 0%, transparent 50%)',
          filter: 'blur(100px)',
        }}
      />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6, alignItems: 'center', minHeight: '90vh' }}>
          <Box sx={{ flex: 1 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Chip
                label="Series A Funding Round Open"
                sx={{ 
                  mb: 3, 
                  fontWeight: 600,
                  background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.2), rgba(236, 72, 153, 0.2))',
                  border: '1px solid rgba(124, 58, 237, 0.3)',
                  backdropFilter: 'blur(10px)',
                  px: 2,
                  py: 0.5,
                }}
              />
              
              <Typography
                variant="h1"
                sx={{
                  background: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 3,
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  fontWeight: 800,
                  lineHeight: 1.1,
                }}
              >
AI Trading Bot with Core Principles & Risk Management
              </Typography>
              
              <Typography variant="h5" sx={{ mb: 4, lineHeight: 1.6, color: 'rgba(255, 255, 255, 0.7)' }}>
                Advanced AI system built on core trading principles: strict risk assessment, 
                disciplined position management, and emotion-free execution across crypto and traditional markets.
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 3, mb: 4 }}>
                <Box>
                  <Typography variant="h3" color="primary.main" fontWeight={700}>
                    95%+
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Rule Adherence
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h3" color="success.main" fontWeight={700}>
                    2%
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Max Risk Per Trade
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h3" color="secondary.main" fontWeight={700}>
                    24/7
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Automated Trading
                  </Typography>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    background: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)',
                    boxShadow: '0 10px 40px rgba(124, 58, 237, 0.3)',
                    border: 'none',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #A78BFA 0%, #F472B6 100%)',
                      boxShadow: '0 15px 50px rgba(124, 58, 237, 0.4)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                  onClick={() => document.getElementById('investor-cta')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Invest Now - $5M Target
                </Button>
                <ConnectWallet />
              </Box>
            </motion.div>
          </Box>
          
          <Box sx={{ flex: 1 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  height: '500px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    width: '400px',
                    height: '400px',
                    background: 'radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 70%)',
                    animation: 'pulse 4s ease-in-out infinite',
                    filter: 'blur(80px)',
                  }}
                />
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, position: 'relative', maxWidth: '400px', width: '100%' }}>
                  <Box
                    sx={{
                      p: 3,
                      background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.1), rgba(236, 72, 153, 0.05))',
                      backdropFilter: 'blur(20px)',
                      borderRadius: '16px',
                      border: '1px solid rgba(124, 58, 237, 0.2)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                    }}
                  >
                    <TrendingUpIcon sx={{ fontSize: 40, color: '#A78BFA', mb: 2 }} />
                    <Typography variant="h6" gutterBottom>
                      Multi-Exchange Trading
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      KuCoin, MEXC, Poloniex, Binance, Uniswap V3
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Box
                      sx={{
                        p: 3,
                        flex: 1,
                        background: 'rgba(17, 17, 23, 0.6)',
                        backdropFilter: 'blur(20px)',
                        borderRadius: '12px',
                        border: '1px solid rgba(236, 72, 153, 0.2)',
                        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.3)',
                      }}
                    >
                      <AutoGraphIcon sx={{ fontSize: 40, color: '#F472B6', mb: 2 }} />
                      <Typography variant="h6" gutterBottom>
                        AI Strategy
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Neural networks optimize trading
                      </Typography>
                    </Box>
                    
                    <Box
                      sx={{
                        p: 3,
                        flex: 1,
                        background: 'rgba(17, 17, 23, 0.6)',
                        backdropFilter: 'blur(20px)',
                        borderRadius: '12px',
                        border: '1px solid rgba(16, 185, 129, 0.2)',
                        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.3)',
                      }}
                    >
                      <SecurityIcon sx={{ fontSize: 40, color: '#10B981', mb: 2 }} />
                      <Typography variant="h6" gutterBottom>
                        Risk Control
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        1-2% max risk per trade
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Container>
      
      <style>
        {`
          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
              opacity: 0.5;
            }
            50% {
              transform: scale(1.2);
              opacity: 0.8;
            }
          }
        `}
      </style>
    </Box>
  );
};

export default HeroSection;