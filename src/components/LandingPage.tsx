import React from 'react';
import { Box } from '@mui/material';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import PerformanceChart from './PerformanceChart';
import TechnologySection from './TechnologySection';
import MarketOpportunity from './MarketOpportunity';
import RoadmapSection from './RoadmapSection';
import TeamSection from './TeamSection';
import InvestorCTA from './InvestorCTA';

const LandingPage: React.FC = () => {
  return (
    <Box sx={{ 
      overflow: 'hidden',
      background: '#0B0B0F',
      minHeight: '100vh',
    }}>
      <HeroSection />
      <FeaturesSection />
      <PerformanceChart />
      <TechnologySection />
      <MarketOpportunity />
      <RoadmapSection />
      <TeamSection />
      <InvestorCTA />
    </Box>
  );
};

export default LandingPage;