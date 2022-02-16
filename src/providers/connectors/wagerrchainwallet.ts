const ConnectToWagerrChainWallet = async () => {
  let provider = null;
  if (typeof window.providerManager !== 'undefined') {
    provider = window.providerManager;
    try {
     await provider.enable();
    } catch (error) {
      throw new Error("User Rejected");
    }
  } else {
    throw new Error("No Wagerr Mainnet Wallet found");
  }
  provider.isWagerrChainWallet = true;
  return provider;
};

export default ConnectToWagerrChainWallet;