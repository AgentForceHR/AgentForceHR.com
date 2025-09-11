import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Coins, 
  ExternalLink, 
  Wallet, 
  ArrowRight, 
  Info,
  Copy
} from 'lucide-react';

export const TokenPurchaseWidget = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [purchaseAmount, setPurchaseAmount] = useState('');

  const tokenContractAddress = '0x742d35Cc6634C0532925a3b8D4C9db96DfbF3b6C';
  const bscMainnetRPC = 'https://bsc-dataseed1.binance.org';
  const chainId = '56'; // BSC mainnet chain ID

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const addToMetaMask = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        // Add BSC mainnet to MetaMask
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [{
            chainId: `0x${parseInt(chainId).toString(16)}`,
            chainName: 'Binance Smart Chain',
            nativeCurrency: {
              name: 'BNB',
              symbol: 'BNB',
              decimals: 18
            },
            rpcUrls: [bscMainnetRPC],
            blockExplorerUrls: ['https://bscscan.com/']
          }]
        });

        // Add HR token to MetaMask
        await window.ethereum.request({
          method: 'wallet_watchAsset',
          params: {
            type: 'ERC20',
            options: {
              address: tokenContractAddress,
              symbol: 'HRT',
              decimals: 18,
              image: ''
            }
          }
        });
      } catch (error) {
        console.error('Failed to add to MetaMask:', error);
      }
    }
  };

  const openDEX = () => {
    // Open DEX with HR token contract pre-filled
    const dexUrl = `https://pancakeswap.finance/swap?outputCurrency=${tokenContractAddress}`;
    window.open(dexUrl, '_blank');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Coins className="w-5 h-5" />
          Purchase HR Tokens
        </CardTitle>
        <CardDescription>
          Buy HR tokens on Sonic testnet to create and manage AI agents
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Token Contract Info */}
        <div className="space-y-3">
          <div>
            <Label className="text-sm font-medium">HR Token Contract</Label>
            <div className="flex items-center gap-2 mt-1">
              <code className="text-sm bg-muted px-2 py-1 rounded flex-1">
                {tokenContractAddress}
              </code>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => copyToClipboard(tokenContractAddress)}
              >
                <Copy className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div>
            <Label className="text-sm font-medium">Network</Label>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant="secondary">Binance Smart Chain</Badge>
              <Badge variant="outline">Chain ID: {chainId}</Badge>
            </div>
          </div>
        </div>

        {/* Purchase Options */}
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Button 
              onClick={openDEX}
              className="h-20 flex-col"
              variant="default"
            >
              <ExternalLink className="w-6 h-6 mb-2" />
              <span className="text-sm">Buy on PancakeSwap</span>
            </Button>
            <Button 
              onClick={addToMetaMask}
              className="h-20 flex-col"
              variant="outline"
            >
              <Wallet className="w-6 h-6 mb-2" />
              <span className="text-sm">Add to MetaMask</span>
            </Button>
          </div>
        </div>

        {/* Purchase Calculator */}
        <div className="space-y-4 p-4 bg-muted/30 rounded-lg">
          <h4 className="font-medium">Token Usage Calculator</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="agents">Number of Agents to Create</Label>
              <Input
                id="agents"
                type="number"
                min="1"
                placeholder="5"
                value={purchaseAmount}
                onChange={(e) => setPurchaseAmount(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Estimated Tokens Needed</Label>
              <div className="h-10 flex items-center">
                <span className="text-lg font-semibold text-primary">
                  {purchaseAmount ? (parseInt(purchaseAmount) * 100).toLocaleString() : '0'} HRT
                </span>
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            * Estimated at 100 HRT per agent creation. Actual costs may vary.
          </p>
        </div>

        {/* Instructions */}
        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>How to purchase:</strong>
            <ol className="list-decimal list-inside mt-2 space-y-1 text-sm">
              <li>Connect your wallet to Binance Smart Chain</li>
              <li>Get BNB from any major exchange</li>
              <li>Use PancakeSwap to swap BNB for HR tokens</li>
              <li>Your tokens will appear in your admin dashboard</li>
            </ol>
          </AlertDescription>
        </Alert>

        {/* Quick Links */}
        <div className="flex flex-wrap gap-2">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => window.open('https://bscscan.com/', '_blank')}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            BSCScan Explorer
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => window.open('https://www.binance.com/en/buy-BNB', '_blank')}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Buy BNB
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};