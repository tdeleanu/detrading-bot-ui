import React from 'react';
import { Box, Container, Typography, Paper, Chip } from '@mui/material';
import { Grid } from '@mui/material';
import { motion } from 'framer-motion';

const techStack = {
  frontend: {
    title: 'Frontend',
    technologies: [
      'React with TypeScript',
      'Material-UI',
      'Redux Toolkit',
      'Socket.io-client',
      'TradingView Charts',
      'Framer Motion',
    ],
  },
  backend: {
    title: 'Backend & Core',
    technologies: [
      'Go (High Performance)',
      'Python (AI/ML)',
      'Apache Kafka',
      'Redis Cache',
      'PostgreSQL + TimescaleDB',
      'WebSocket Managers',
    ],
  },
  ai: {
    title: 'AI Infrastructure',
    technologies: [
      'TensorFlow',
      'PyTorch',
      'scikit-learn',
      'AWS SageMaker',
      'MLflow',
      'GPU Training',
    ],
  },
  integrations: {
    title: 'Trading Engines',
    technologies: [
      'WolfBot',
      'Freqtrade',
      'Hummingbot',
      'OpenTrader',
      'gocryptotrader',
      'UniV3 Flash Swaps',
    ],
  },
};

const TechnologySection: React.FC = () => {
  return (
    <Box
      sx={{
        py: 12,
        background: 'linear-gradient(180deg, #1A1F3A 0%, #0A0E27 100%)',
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
            Enterprise Technology Stack
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            sx={{ mb: 8, maxWidth: '800px', mx: 'auto' }}
          >
            Built with proven technologies used by leading trading firms and hedge funds
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {Object.entries(techStack).map(([key, section], index) => (
            <Grid size={{ xs: 12, md: 6 }} key={key}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Paper
                  sx={{
                    p: 4,
                    height: '100%',
                    background: 'rgba(26, 31, 58, 0.6)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(0, 212, 255, 0.2)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: 'primary.main',
                      transform: 'translateY(-5px)',
                    },
                  }}
                >
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                      color: 'primary.main',
                      fontWeight: 600,
                      mb: 3,
                    }}
                  >
                    {section.title}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                    {section.technologies.map((tech, techIndex) => (
                      <Chip
                        key={techIndex}
                        label={tech}
                        sx={{
                          background: 'rgba(0, 212, 255, 0.1)',
                          borderColor: 'rgba(0, 212, 255, 0.3)',
                          color: 'text.primary',
                          '&:hover': {
                            background: 'rgba(0, 212, 255, 0.2)',
                            borderColor: 'primary.main',
                          },
                        }}
                        variant="outlined"
                      />
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              mt: 8,
              p: 4,
              background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(255, 107, 53, 0.1) 100%)',
              borderRadius: 3,
              border: '1px solid rgba(0, 212, 255, 0.3)',
            }}
          >
            <Grid container spacing={4} alignItems="center">
              <Grid size={{ xs: 12, md: 8 }}>
                <Typography variant="h4" gutterBottom fontWeight={600}>
                  Microservices Architecture
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Our system uses a highly scalable microservices architecture with message queuing, 
                  ensuring 99.99% uptime and millisecond-level execution speeds across all integrated exchanges.
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h2" color="primary.main" fontWeight={700}>
                    &lt;10ms
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Average Trade Execution
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default TechnologySection;