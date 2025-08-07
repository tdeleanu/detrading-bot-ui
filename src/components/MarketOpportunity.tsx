import React from 'react';
import { Box, Container, Typography, Card, CardContent, LinearProgress } from '@mui/material';
import { Grid } from '@mui/material';
import { motion } from 'framer-motion';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupIcon from '@mui/icons-material/Group';
import TimelineIcon from '@mui/icons-material/Timeline';

const marketData = [
  {
    label: 'Global Crypto Market Cap',
    value: '$3.2T',
    growth: '+124% YoY',
    color: '#00D4FF',
  },
  {
    label: 'Algorithmic Trading Volume',
    value: '$892B',
    growth: '+87% YoY',
    color: '#FF6B35',
  },
  {
    label: 'DeFi Total Value Locked',
    value: '$178B',
    growth: '+156% YoY',
    color: '#4CAF50',
  },
  {
    label: 'Retail Traders Using Bots',
    value: '47%',
    growth: '+22% YoY',
    color: '#9C27B0',
  },
];

const projections = [
  { year: 'Year 1', revenue: 2.5, users: 5000, description: 'Launch & Early Adoption' },
  { year: 'Year 2', revenue: 12, users: 25000, description: 'Market Expansion' },
  { year: 'Year 3', revenue: 45, users: 100000, description: 'Stock Market Entry' },
  { year: 'Year 4', revenue: 120, users: 350000, description: 'Institutional Adoption' },
  { year: 'Year 5', revenue: 280, users: 1000000, description: 'Global Leader' },
];

const MarketOpportunity: React.FC = () => {
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
            $892B Market Opportunity
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            sx={{ mb: 8, maxWidth: '800px', mx: 'auto' }}
          >
            The algorithmic trading market is growing exponentially with retail adoption accelerating
          </Typography>
        </motion.div>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {marketData.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
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
                    border: `1px solid ${item.color}33`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      borderColor: item.color,
                    },
                  }}
                >
                  <CardContent sx={{ textAlign: 'center', p: 3 }}>
                    <Typography
                      variant="h3"
                      sx={{ color: item.color, fontWeight: 700, mb: 1 }}
                    >
                      {item.value}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      {item.label}
                    </Typography>
                    <Typography variant="body2" color="success.main">
                      {item.growth}
                    </Typography>
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
          <Typography
            variant="h3"
            align="center"
            sx={{ mb: 6, fontWeight: 600 }}
          >
            5-Year Financial Projections
          </Typography>

          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Box
                sx={{
                  p: 4,
                  background: 'rgba(26, 31, 58, 0.6)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 3,
                  border: '1px solid rgba(0, 212, 255, 0.2)',
                }}
              >
                {projections.map((proj, index) => (
                  <Box key={index} sx={{ mb: 4 }}>
                    <Grid container alignItems="center" spacing={2}>
                      <Grid size={2}>
                        <Typography variant="h6" color="primary.main">
                          {proj.year}
                        </Typography>
                      </Grid>
                      <Grid size={5}>
                        <Box>
                          <Typography variant="body2" color="text.secondary" gutterBottom>
                            Revenue
                          </Typography>
                          <Typography variant="h5" fontWeight={600}>
                            ${proj.revenue}M
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid size={5}>
                        <Box>
                          <Typography variant="body2" color="text.secondary" gutterBottom>
                            Active Users
                          </Typography>
                          <Typography variant="h5" fontWeight={600}>
                            {proj.users.toLocaleString()}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid size={12}>
                        <LinearProgress
                          variant="determinate"
                          value={(proj.revenue / 280) * 100}
                          sx={{
                            height: 8,
                            borderRadius: 1,
                            background: 'rgba(0, 212, 255, 0.1)',
                            '& .MuiLinearProgress-bar': {
                              background: 'linear-gradient(90deg, #00D4FF 0%, #FF6B35 100%)',
                            },
                          }}
                        />
                        <Typography variant="caption" color="text.secondary" sx={{ mt: 1 }}>
                          {proj.description}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                ))}
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  p: 4,
                  height: '100%',
                  background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(0, 212, 255, 0.1) 100%)',
                  borderRadius: 3,
                  border: '1px solid rgba(255, 107, 53, 0.3)',
                }}
              >
                <Typography variant="h4" gutterBottom fontWeight={600} color="secondary.main">
                  Investment Terms
                </Typography>
                
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h3" fontWeight={700}>
                    $5M
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Series A Target
                  </Typography>
                </Box>

                <Box sx={{ mb: 3 }}>
                  <Typography variant="h4" fontWeight={600}>
                    20%
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Equity Offered
                  </Typography>
                </Box>

                <Box sx={{ mb: 3 }}>
                  <Typography variant="h4" fontWeight={600}>
                    $25M
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Post-Money Valuation
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="h4" fontWeight={600} color="success.main">
                    45x
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Projected 5Y Return
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              mt: 8,
              p: 4,
              background: 'rgba(76, 175, 80, 0.1)',
              borderRadius: 3,
              border: '1px solid rgba(76, 175, 80, 0.3)',
              textAlign: 'center',
            }}
          >
            <Typography variant="h4" gutterBottom fontWeight={600}>
              Revenue Model
            </Typography>
            <Grid container spacing={3} sx={{ mt: 2 }}>
              <Grid size={{ xs: 12, md: 3 }}>
                <Typography variant="h5" color="success.main" fontWeight={700}>
                  2.5%
                </Typography>
                <Typography variant="body1">Performance Fee</Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 3 }}>
                <Typography variant="h5" color="success.main" fontWeight={700}>
                  $99-999
                </Typography>
                <Typography variant="body1">Monthly Subscriptions</Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 3 }}>
                <Typography variant="h5" color="success.main" fontWeight={700}>
                  0.1%
                </Typography>
                <Typography variant="body1">Transaction Fees</Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 3 }}>
                <Typography variant="h5" color="success.main" fontWeight={700}>
                  Enterprise
                </Typography>
                <Typography variant="body1">White Label Solutions</Typography>
              </Grid>
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default MarketOpportunity;