import React from 'react';
import { Box, Container, Typography, Card, CardContent, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SpeedIcon from '@mui/icons-material/Speed';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import SecurityUpdateIcon from '@mui/icons-material/SecurityUpdate';
import InsightsIcon from '@mui/icons-material/Insights';

const features = [
  {
    icon: <PsychologyIcon sx={{ fontSize: 48 }} />,
    title: 'Core Trading Principles',
    description: 'Neural networks implement proven trading principles with systematic risk assessment and position sizing',
    highlights: ['Strategy Framework', 'Risk Assessment', 'Position Management'],
    color: '#A78BFA',
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 48 }} />,
    title: 'Trading Discipline',
    description: 'Enforces strict trading discipline by preventing emotional decisions and maintaining systematic execution',
    highlights: ['Rule-Based Trading', 'Discipline Enforcement', 'Systematic Execution'],
    color: '#F472B6',
  },
  {
    icon: <AccountBalanceIcon sx={{ fontSize: 48 }} />,
    title: 'Multi-Exchange Integration',
    description: 'Seamless trading across KuCoin, MEXC, Poloniex, Binance, Uniswap V3, and more',
    highlights: ['Cross-Exchange Arbitrage', 'Liquidity Aggregation', 'DeFi Support'],
    color: '#10B981',
  },
  {
    icon: <ShowChartIcon sx={{ fontSize: 48 }} />,
    title: 'TradingView Integration',
    description: 'Advanced technical indicators including Buffett Indicator for market valuation',
    highlights: ['200+ Indicators', 'Pattern Recognition', 'Custom PineScript'],
    color: '#7C3AED',
  },
  {
    icon: <SecurityUpdateIcon sx={{ fontSize: 48 }} />,
    title: 'Risk Management',
    description: '1-2% max risk per trade with portfolio-level protection and emergency protocols',
    highlights: ['Position Sizing', 'Drawdown Protection', 'Correlation Analysis'],
    color: '#EC4899',
  },
  {
    icon: <InsightsIcon sx={{ fontSize: 48 }} />,
    title: 'Performance Analytics',
    description: 'Real-time backtesting, strategy optimization, and AI-powered insights',
    highlights: ['Monte Carlo Simulation', 'Sharpe Ratio Optimization', 'ML Predictions'],
    color: '#06B6D4',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <Box
      id="features"
      sx={{
        py: 12,
        background: '#0B0B0F',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.05) 0%, transparent 70%)',
          filter: 'blur(100px)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 2,
              background: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 700,
            }}
          >
            Revolutionary AI Features
          </Typography>
          <Typography
            variant="h5"
            align="center"
            sx={{ mb: 8, maxWidth: '800px', mx: 'auto', color: 'rgba(255, 255, 255, 0.6)' }}
          >
            Built on core trading principles with advanced AI-powered risk assessment
          </Typography>
        </motion.div>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
          {features.map((feature, index) => (
            <Box key={index} sx={{ width: { xs: '100%', md: 'calc(50% - 16px)', lg: 'calc(33.33% - 22px)' } }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ height: '100%' }}
              >
                <Card
                  sx={{
                    height: '100%',
                    background: 'rgba(17, 17, 23, 0.5)',
                    backdropFilter: 'blur(20px)',
                    border: `1px solid rgba(124, 58, 237, 0.15)`,
                    borderRadius: '16px',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      background: 'rgba(17, 17, 23, 0.7)',
                      borderColor: `${feature.color}66`,
                      boxShadow: `0 20px 60px ${feature.color}15`,
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{
                        display: 'inline-flex',
                        p: 2,
                        borderRadius: '12px',
                        background: `linear-gradient(135deg, ${feature.color}15 0%, transparent 100%)`,
                        border: `1px solid ${feature.color}20`,
                        mb: 3,
                      }}
                    >
                      <Box sx={{ color: feature.color }}>
                        {feature.icon}
                      </Box>
                    </Box>
                    
                    <Typography variant="h5" gutterBottom fontWeight={600}>
                      {feature.title}
                    </Typography>
                    
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                      {feature.description}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {feature.highlights.map((highlight, idx) => (
                        <Chip
                          key={idx}
                          label={highlight}
                          size="small"
                          sx={{
                            background: `${feature.color}10`,
                            border: `1px solid ${feature.color}30`,
                            color: feature.color,
                            fontWeight: 500,
                            backdropFilter: 'blur(10px)',
                          }}
                          variant="outlined"
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturesSection;