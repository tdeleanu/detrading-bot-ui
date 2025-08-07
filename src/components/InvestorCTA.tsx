import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Paper, Chip } from '@mui/material';
import { Grid } from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const InvestorCTA: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    investmentAmount: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Investment inquiry:', formData);
    alert('Thank you for your interest! We will contact you within 24 hours.');
  };

  const benefits = [
    'Early investor advantages - 20% equity stake',
    'Board seat opportunity for lead investors',
    'Quarterly investor updates and transparency',
    'Access to proprietary trading strategies',
    'First rights to Series B round',
    'Exit strategy: IPO planned for 2028',
  ];

  return (
    <Box
      id="investor-cta"
      sx={{
        py: 12,
        background: 'linear-gradient(180deg, #0A0E27 0%, #1A1F3A 100%)',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 107, 53, 0.1) 0%, transparent 50%)',
        }}
      />
      
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
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
              background: 'linear-gradient(135deg, #FF6B35 0%, #00D4FF 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Join the AI Trading Revolution
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            sx={{ mb: 8, maxWidth: '800px', mx: 'auto' }}
          >
            Series A funding round now open - Limited spots available
          </Typography>
        </motion.div>

        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Paper
                sx={{
                  p: 4,
                  background: 'rgba(26, 31, 58, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 107, 53, 0.3)',
                }}
              >
                <Typography variant="h4" gutterBottom fontWeight={600}>
                  Investment Opportunity
                </Typography>
                
                <Box sx={{ mb: 4 }}>
                  <Chip
                    label="LIMITED TIME - 30% Early Bird Bonus"
                    color="secondary"
                    sx={{ mb: 3, fontWeight: 600 }}
                  />
                  
                  {benefits.map((benefit, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <CheckCircleIcon sx={{ color: 'success.main', mr: 2 }} />
                      <Typography variant="body1">{benefit}</Typography>
                    </Box>
                  ))}
                </Box>

                <Box
                  sx={{
                    p: 3,
                    background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(0, 212, 255, 0.1) 100%)',
                    borderRadius: 2,
                    mb: 3,
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid size={6}>
                      <Typography variant="h5" fontWeight={700} color="success.main">
                        $5M
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Target Raise
                      </Typography>
                    </Grid>
                    <Grid size={6}>
                      <Typography variant="h5" fontWeight={700} color="primary.main">
                        $3.2M
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Already Committed
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>

                <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <EmailIcon sx={{ mr: 2, color: 'primary.main' }} />
                    <Typography>invest@aitradingbot.io</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <PhoneIcon sx={{ mr: 2, color: 'primary.main' }} />
                    <Typography>+1 (888) 555-TRADE</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <CalendarMonthIcon sx={{ mr: 2, color: 'primary.main' }} />
                    <Typography>Schedule a pitch meeting</Typography>
                  </Box>
                </Box>
              </Paper>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Paper
                sx={{
                  p: 4,
                  background: 'rgba(26, 31, 58, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(0, 212, 255, 0.3)',
                }}
              >
                <Typography variant="h4" gutterBottom fontWeight={600}>
                  Express Your Interest
                </Typography>
                
                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    sx={{ mb: 3 }}
                    variant="outlined"
                  />
                  
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    sx={{ mb: 3 }}
                    variant="outlined"
                  />
                  
                  <TextField
                    fullWidth
                    label="Company / Fund"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    sx={{ mb: 3 }}
                    variant="outlined"
                  />
                  
                  <TextField
                    fullWidth
                    label="Investment Amount (USD)"
                    name="investmentAmount"
                    value={formData.investmentAmount}
                    onChange={handleChange}
                    required
                    sx={{ mb: 3 }}
                    variant="outlined"
                    placeholder="Minimum $100,000"
                  />
                  
                  <TextField
                    fullWidth
                    label="Message (Optional)"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    sx={{ mb: 4 }}
                    variant="outlined"
                  />
                  
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    sx={{
                      py: 2,
                      fontSize: '1.1rem',
                      background: 'linear-gradient(135deg, #FF6B35 0%, #00D4FF 100%)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #FF9568 0%, #5DEFF5 100%)',
                      },
                    }}
                  >
                    Request Investment Package
                  </Button>
                  
                  <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block', textAlign: 'center' }}>
                    By submitting, you agree to our terms and will receive our investor deck
                  </Typography>
                </form>
              </Paper>
            </motion.div>
          </Grid>
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
              background: 'rgba(255, 107, 53, 0.1)',
              borderRadius: 3,
              border: '1px solid rgba(255, 107, 53, 0.3)',
              textAlign: 'center',
            }}
          >
            <Typography variant="h4" gutterBottom fontWeight={600}>
              Why Invest Now?
            </Typography>
            <Grid container spacing={3} sx={{ mt: 2 }}>
              <Grid size={{ xs: 12, md: 3 }}>
                <Typography variant="h3" color="secondary.main" fontWeight={700}>
                  892B
                </Typography>
                <Typography variant="body1">TAM Market Size</Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 3 }}>
                <Typography variant="h3" color="secondary.main" fontWeight={700}>
                  3.2M
                </Typography>
                <Typography variant="body1">Already Raised</Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 3 }}>
                <Typography variant="h3" color="secondary.main" fontWeight={700}>
                  45x
                </Typography>
                <Typography variant="body1">Projected Returns</Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 3 }}>
                <Typography variant="h3" color="secondary.main" fontWeight={700}>
                  2028
                </Typography>
                <Typography variant="body1">IPO Target</Typography>
              </Grid>
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default InvestorCTA;