import React from 'react';
import { Box, Container, Typography, Card, CardContent, Avatar, Chip } from '@mui/material';
import { Grid } from '@mui/material';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const teamMembers = [
  {
    name: 'Michael Thompson',
    role: 'Chief Strategy Officer',
    bio: 'Quantitative trading expert with 25+ years experience in systematic trading and risk management.',
    expertise: ['Risk Assessment', 'Trading Discipline', 'Strategy Framework'],
    avatar: 'MT',
    color: '#00D4FF',
  },
  {
    name: 'Alex Chen',
    role: 'CEO & Co-Founder',
    bio: 'Former Goldman Sachs quant trader. 15 years in algorithmic trading and financial technology.',
    expertise: ['Quantitative Trading', 'Business Strategy', 'Capital Markets'],
    avatar: 'AC',
    color: '#FF6B35',
  },
  {
    name: 'Sarah Mitchell',
    role: 'CTO & Co-Founder',
    bio: 'Ex-Google AI researcher. PhD in Machine Learning from MIT. Expert in neural networks.',
    expertise: ['Machine Learning', 'System Architecture', 'AI/ML'],
    avatar: 'SM',
    color: '#4CAF50',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Head of Trading',
    bio: 'Former Citadel portfolio manager. Specialized in crypto and DeFi strategies.',
    expertise: ['DeFi', 'Market Making', 'Portfolio Management'],
    avatar: 'MR',
    color: '#9C27B0',
  },
];

const advisors = [
  { name: 'John Smith', role: 'Former CEO, Interactive Brokers' },
  { name: 'Lisa Wang', role: 'Partner, Andreessen Horowitz' },
  { name: 'Michael Brown', role: 'Former CTO, Coinbase' },
  { name: 'Emma Davis', role: 'Head of AI Research, DeepMind' },
];

const TeamSection: React.FC = () => {
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
            World-Class Team
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            sx={{ mb: 8, maxWidth: '800px', mx: 'auto' }}
          >
            Industry veterans from top trading firms and tech companies
          </Typography>
        </motion.div>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {teamMembers.map((member, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 3 }} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: '100%',
                    background: 'rgba(26, 31, 58, 0.6)',
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${member.color}33`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      borderColor: member.color,
                    },
                  }}
                >
                  <CardContent sx={{ p: 3, textAlign: 'center' }}>
                    <Avatar
                      sx={{
                        width: 80,
                        height: 80,
                        mx: 'auto',
                        mb: 2,
                        background: `linear-gradient(135deg, ${member.color} 0%, ${member.color}99 100%)`,
                        fontSize: '1.5rem',
                        fontWeight: 700,
                      }}
                    >
                      {member.avatar}
                    </Avatar>
                    
                    <Typography variant="h6" gutterBottom fontWeight={600}>
                      {member.name}
                    </Typography>
                    
                    <Typography
                      variant="body2"
                      color="primary.main"
                      gutterBottom
                      sx={{ mb: 2 }}
                    >
                      {member.role}
                    </Typography>
                    
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 3, minHeight: '60px' }}
                    >
                      {member.bio}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, justifyContent: 'center' }}>
                      {member.expertise.map((skill, idx) => (
                        <Chip
                          key={idx}
                          label={skill}
                          size="small"
                          sx={{
                            fontSize: '0.7rem',
                            background: `${member.color}22`,
                            borderColor: `${member.color}44`,
                            color: member.color,
                          }}
                          variant="outlined"
                        />
                      ))}
                    </Box>
                    
                    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 1 }}>
                      <LinkedInIcon sx={{ color: 'text.secondary', fontSize: 20, cursor: 'pointer' }} />
                      <GitHubIcon sx={{ color: 'text.secondary', fontSize: 20, cursor: 'pointer' }} />
                    </Box>
                  </CardContent>
                </Card>
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
              p: 4,
              background: 'rgba(26, 31, 58, 0.4)',
              borderRadius: 3,
              border: '1px solid rgba(0, 212, 255, 0.2)',
            }}
          >
            <Typography variant="h4" gutterBottom fontWeight={600} align="center" sx={{ mb: 4 }}>
              Advisory Board
            </Typography>
            
            <Grid container spacing={3}>
              {advisors.map((advisor, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" gutterBottom>
                      {advisor.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {advisor.role}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default TeamSection;