import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { useHRToken } from '@/hooks/useHRToken';
import { Coins, Send, Wallet, Info, CheckCircle, AlertCircle, Copy, ExternalLink, RefreshCw as Refresh } from 'lucide-react';

export const HRTokenManager = () => {
  const { tokenInfo, status, loading, getTokenBalance, transferTokens, refetch } = useHRToken();
  const [transferForm, setTransferForm] = useState({
    toAddress: '',
    amount: '',
    purpose: ''
  });
  const [balanceCheck, setBalanceCheck] = useState({
    address: '',
    balance: null as string | null,
    checking: false
  });
  const [transferring, setTransferring] = useState(false);

  const handleTransfer = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!transferForm.toAddress || !transferForm.amount) {
      return;
    }

    try {
      setTransferring(true);
      await transferTokens(transferForm.toAddress, transferForm.amount, transferForm.purpose);
      
      // Reset form
      setTransferForm({
        toAddress: '',
        amount: '',
        purpose: ''
      });
    } catch (error) {
      // Error handling is done in the hook
    } finally {
      setTransferring(false);
    }
  };

  const handleBalanceCheck = async () => {
    if (!balanceCheck.address) return;
    
    try {
      setBalanceCheck(prev => ({ ...prev, checking: true }));
      const result = await getTokenBalance(balanceCheck.address);
      setBalanceCheck(prev => ({ 
        ...prev, 
        balance: result?.balance || null,
        checking: false
      }));
    } catch (error) {
      setBalanceCheck(prev => ({ ...prev, checking: false, balance: null }));
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const getStatusColor = (connected: boolean) => {
    return connected ? 'text-green-600' : 'text-red-600';
  };

  const getStatusIcon = (connected: boolean) => {
    return connected ? <CheckCircle className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />;
  };

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Coins className="w-5 h-5" />
            HR Token Management
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
            <p className="text-muted-foreground mt-4">Loading HR token information...</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Token Information */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Coins className="w-5 h-5" />
              <CardTitle>HR Token Information</CardTitle>
            </div>
            <Button variant="outline" size="sm" onClick={refetch}>
              <Refresh className="w-4 h-4" />
            </Button>
          </div>
          <CardDescription>
            Sonic testnet HR token contract details and status
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {tokenInfo ? (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div>
                  <Label className="text-sm font-medium">Token Name</Label>
                  <p className="text-lg font-semibold">{tokenInfo.name}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Symbol</Label>
                  <p className="text-lg font-semibold">{tokenInfo.symbol}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Decimals</Label>
                  <p className="text-lg font-semibold">{tokenInfo.decimals}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Total Supply</Label>
                  <p className="text-lg font-semibold">{tokenInfo.totalSupply} {tokenInfo.symbol}</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <Label className="text-sm font-medium">Network</Label>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{tokenInfo.network}</Badge>
                  </div>
                </div>
                <div>
                  <Label className="text-sm font-medium">Contract Address</Label>
                  <div className="flex items-center gap-2">
                    <code className="text-sm bg-muted px-2 py-1 rounded">
                      {tokenInfo.contractAddress}
                    </code>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => copyToClipboard(tokenInfo.contractAddress)}
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div>
                  <Label className="text-sm font-medium">Connection Status</Label>
                  <div className={`flex items-center gap-2 ${getStatusColor(status?.connected)}`}>
                    {getStatusIcon(status?.connected)}
                    <span className="font-medium">
                      {status?.connected ? 'Connected' : 'Disconnected'}
                    </span>
                  </div>
                </div>
                {status?.connected && status?.balance && (
                  <div>
                    <Label className="text-sm font-medium">Admin Wallet Balance</Label>
                    <p className="text-lg font-semibold text-primary">
                      {status.balance} {tokenInfo.symbol}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                Unable to connect to HR token contract. Please check blockchain configuration.
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>

      {/* Balance Checker */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wallet className="w-5 h-5" />
            Check Token Balance
          </CardTitle>
          <CardDescription>
            Check HR token balance for any wallet address
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="Enter wallet address (0x...)"
              value={balanceCheck.address}
              onChange={(e) => setBalanceCheck(prev => ({ 
                ...prev, 
                address: e.target.value,
                balance: null 
              }))}
              className="flex-1"
            />
            <Button 
              onClick={handleBalanceCheck}
              disabled={!balanceCheck.address || balanceCheck.checking}
            >
              {balanceCheck.checking ? 'Checking...' : 'Check Balance'}
            </Button>
          </div>
          
          {balanceCheck.balance !== null && (
            <Alert>
              <Wallet className="h-4 w-4" />
              <AlertDescription>
                <strong>Balance:</strong> {balanceCheck.balance} {tokenInfo?.symbol || 'HRT'}
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>

      {/* Token Transfer (Admin Only) */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Send className="w-5 h-5" />
            Transfer HR Tokens
          </CardTitle>
          <CardDescription>
            Transfer HR tokens to wallet addresses (Admin only)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleTransfer} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="toAddress">Recipient Address *</Label>
              <Input
                id="toAddress"
                placeholder="0x..."
                value={transferForm.toAddress}
                onChange={(e) => setTransferForm(prev => ({ 
                  ...prev, 
                  toAddress: e.target.value 
                }))}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="amount">Amount *</Label>
              <Input
                id="amount"
                type="number"
                step="0.000001"
                min="0"
                placeholder="0.0"
                value={transferForm.amount}
                onChange={(e) => setTransferForm(prev => ({ 
                  ...prev, 
                  amount: e.target.value 
                }))}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="purpose">Purpose (Optional)</Label>
              <Textarea
                id="purpose"
                placeholder="Reason for transfer (e.g., Agent creation payment, Staff allocation)"
                value={transferForm.purpose}
                onChange={(e) => setTransferForm(prev => ({ 
                  ...prev, 
                  purpose: e.target.value 
                }))}
                rows={3}
              />
            </div>
            
            <Separator />
            
            <div className="flex justify-between items-center">
              <div className="text-sm text-muted-foreground">
                Available Balance: {status?.balance || '0'} {tokenInfo?.symbol || 'HRT'}
              </div>
              <Button 
                type="submit" 
                disabled={!transferForm.toAddress || !transferForm.amount || transferring}
              >
                {transferring ? 'Transferring...' : 'Transfer Tokens'}
              </Button>
            </div>
          </form>
          
          <Alert className="mt-4">
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>Token Cost:</strong> Creating this agent will cost 100 HR tokens. 
              Double-check the recipient address before confirming.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <Button 
              variant="outline" 
              className="h-20 flex-col"
              onClick={() => window.open(`https://testnet.sonicscan.org/token/${tokenInfo?.contractAddress}`, '_blank')}
              disabled={!tokenInfo?.contractAddress}
            >
              <ExternalLink className="w-6 h-6 mb-2" />
              <span className="text-sm">View on Sonic Explorer</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-20 flex-col"
              onClick={() => copyToClipboard(tokenInfo?.contractAddress || '')}
              disabled={!tokenInfo?.contractAddress}
            >
              <Copy className="w-6 h-6 mb-2" />
              <span className="text-sm">Copy Contract Address</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};