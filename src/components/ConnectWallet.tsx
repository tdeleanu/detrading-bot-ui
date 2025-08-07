import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Box } from '@mui/material';

const ConnectWallet: React.FC = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus ||
            authenticationStatus === 'authenticated');

        return (
          <Box
            {...(!ready && {
              'aria-hidden': true,
              sx: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Box
                    component="button"
                    onClick={openConnectModal}
                    sx={{
                      px: 4,
                      py: 1.5,
                      background: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)',
                      border: 'none',
                      borderRadius: '8px',
                      color: '#FFFFFF',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      fontFamily: 'Inter, sans-serif',
                      cursor: 'pointer',
                      boxShadow: '0 4px 20px rgba(124, 58, 237, 0.3)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #A78BFA 0%, #F472B6 100%)',
                        boxShadow: '0 6px 30px rgba(124, 58, 237, 0.4)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    Connect Wallet
                  </Box>
                );
              }

              if (chain.unsupported) {
                return (
                  <Box
                    component="button"
                    onClick={openChainModal}
                    sx={{
                      px: 4,
                      py: 1.5,
                      background: 'rgba(239, 68, 68, 0.2)',
                      border: '2px solid #EF4444',
                      borderRadius: '8px',
                      color: '#EF4444',
                      fontSize: '1rem',
                      fontWeight: 600,
                      fontFamily: 'Inter, sans-serif',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: 'rgba(239, 68, 68, 0.3)',
                      },
                    }}
                  >
                    Wrong network
                  </Box>
                );
              }

              return (
                <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                  <Box
                    component="button"
                    onClick={openChainModal}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      px: 2,
                      py: 1,
                      background: 'rgba(124, 58, 237, 0.1)',
                      border: '1px solid rgba(124, 58, 237, 0.3)',
                      borderRadius: '8px',
                      color: '#FFFFFF',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      fontFamily: 'Inter, sans-serif',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: 'rgba(124, 58, 237, 0.2)',
                        borderColor: '#7C3AED',
                      },
                    }}
                  >
                    {chain.hasIcon && (
                      <Box
                        sx={{
                          background: chain.iconBackground,
                          width: 20,
                          height: 20,
                          borderRadius: '50%',
                          overflow: 'hidden',
                          mr: 1,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            style={{ width: 20, height: 20 }}
                          />
                        )}
                      </Box>
                    )}
                    {chain.name}
                  </Box>

                  <Box
                    component="button"
                    onClick={openAccountModal}
                    sx={{
                      px: 3,
                      py: 1,
                      background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.2), rgba(236, 72, 153, 0.1))',
                      border: '1px solid rgba(124, 58, 237, 0.3)',
                      borderRadius: '8px',
                      color: '#FFFFFF',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      fontFamily: 'Inter, sans-serif',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.3), rgba(236, 72, 153, 0.2))',
                        borderColor: '#7C3AED',
                      },
                    }}
                  >
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ''}
                  </Box>
                </Box>
              );
            })()}
          </Box>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default ConnectWallet;