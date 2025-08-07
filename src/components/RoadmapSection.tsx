import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { motion } from 'framer-motion';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PublicIcon from '@mui/icons-material/Public';
import BusinessIcon from '@mui/icons-material/Business';

const roadmapData = [
  {
    phase: 'Phase 1: Core Foundation',
    timeline: 'Q1-Q2 2024',
    icon: <RocketLaunchIcon />,
    color: '#00D4FF',
    status: 'completed',
    items: [
      'Integrate base trading engines (WolfBot, Freqtrade, Hummingbot)',
      'Implement core trading principles and discipline framework',
      'Basic risk management (1-2% rule)',
      'KuCoin, MEXC, Poloniex integration',
    ],
  },
  {
    phase: 'Phase 2: AI Integration',
    timeline: 'Q3-Q4 2024',
    icon: <AutoAwesomeIcon />,
    color: '#FF6B35',
    status: 'in-progress',
    items: [
      'AI strategy generator based on systematic trading principles',
      'Emotion detection and prevention system',
      'TradingView indicator integration',
      'Enhanced backtesting with AI insights',
    ],
  },
  {
    phase: 'Phase 3: Advanced Features',
    timeline: 'Q1-Q2 2025',
    icon: <PublicIcon />,
    color: '#4CAF50',
    status: 'upcoming',
    items: [
      'Cross-exchange arbitrage and orchestration',
      'Uniswap V3 and DeFi integration',
      'Advanced AI coaching and education',
      'Portfolio-level risk management',
    ],
  },
  {
    phase: 'Phase 4: Market Expansion',
    timeline: 'Q3-Q4 2025',
    icon: <BusinessIcon />,
    color: '#9C27B0',
    status: 'upcoming',
    items: [
      'Binance, Coinbase, Kraken integration',
      'Stock market preparation (APIs, regulations)',
      'Institutional features',
      'Community strategy marketplace',
    ],
  },
];

const RoadmapSection: React.FC = () => {
  return (
    <Box
      sx={{
        py: 12,
        background: 'linear-gradient(180deg, #0A0E27 0%, #1A1F3A 100%)',
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
              background: 'linear-gradient(135deg, #00D4FF 0%, #FF6B35 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Product Roadmap
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            sx={{ mb: 8, maxWidth: '800px', mx: 'auto' }}
          >
            Aggressive development timeline with clear milestones
          </Typography>
        </motion.div>

        <Timeline position="alternate">
          {roadmapData.map((phase, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <TimelineDot
                    sx={{
                      background: phase.color,
                      boxShadow: `0 0 20px ${phase.color}66`,
                      p: 2,
                    }}
                  >
                    {phase.icon}
                  </TimelineDot>
                </motion.div>
                {index < roadmapData.length - 1 && (
                  <TimelineConnector sx={{ background: `linear-gradient(180deg, ${phase.color} 0%, ${roadmapData[index + 1].color} 100%)` }} />
                )}
              </TimelineSeparator>
              <TimelineContent>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    sx={{
                      p: 3,
                      background: 'rgba(26, 31, 58, 0.6)',
                      backdropFilter: 'blur(10px)',
                      border: `1px solid ${phase.color}33`,
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    {phase.status === 'completed' && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 10,
                          right: 10,
                          px: 2,
                          py: 0.5,
                          background: 'rgba(76, 175, 80, 0.2)',
                          borderRadius: 1,
                          border: '1px solid rgba(76, 175, 80, 0.5)',
                        }}
                      >
                        <Typography variant="caption" color="success.main">
                          COMPLETED
                        </Typography>
                      </Box>
                    )}
                    {phase.status === 'in-progress' && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 10,
                          right: 10,
                          px: 2,
                          py: 0.5,
                          background: 'rgba(255, 107, 53, 0.2)',
                          borderRadius: 1,
                          border: '1px solid rgba(255, 107, 53, 0.5)',
                        }}
                      >
                        <Typography variant="caption" color="secondary.main">
                          IN PROGRESS
                        </Typography>
                      </Box>
                    )}
                    
                    <Typography variant="h5" gutterBottom fontWeight={600}>
                      {phase.phase}
                    </Typography>
                    <Typography variant="body2" color="primary.main" gutterBottom>
                      {phase.timeline}
                    </Typography>
                    
                    <Box sx={{ mt: 2 }}>
                      {phase.items.map((item, idx) => (
                        <Typography
                          key={idx}
                          variant="body2"
                          color="text.secondary"
                          sx={{ mb: 1, pl: 2, position: 'relative' }}
                        >
                          <Box
                            component="span"
                            sx={{
                              position: 'absolute',
                              left: 0,
                              top: '50%',
                              transform: 'translateY(-50%)',
                              width: 4,
                              height: 4,
                              borderRadius: '50%',
                              background: phase.color,
                            }}
                          />
                          {item}
                        </Typography>
                      ))}
                    </Box>
                  </Paper>
                </motion.div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
};

export default RoadmapSection;