import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Eye, EyeOff, Info } from 'lucide-react';

export const DemoModeToggle = () => {
  const [isDemoMode, setIsDemoMode] = useState(false);

  useEffect(() => {
    const demoMode = localStorage.getItem('demo_mode') === 'true';
    setIsDemoMode(demoMode);
  }, []);

  const toggleDemoMode = () => {
    const newDemoMode = !isDemoMode;
    setIsDemoMode(newDemoMode);
    localStorage.setItem('demo_mode', newDemoMode.toString());
    
    // Force a page refresh to ensure demo mode takes effect immediately
    window.location.reload();
  };

  return (
    <div className="flex items-center gap-2">
      {isDemoMode && (
        <Badge variant="secondary" className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300">
          <Eye className="w-3 h-3 mr-1" />
          Demo Active
        </Badge>
      )}
      <Button
        variant={isDemoMode ? "default" : "outline"}
        size="sm"
        onClick={toggleDemoMode}
        className="flex items-center gap-2"
      >
        {isDemoMode ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        {isDemoMode ? 'Exit Demo' : 'Demo Mode'}
      </Button>
    </div>
  );
};

export const DemoModeAlert = () => {
  const [isDemoMode, setIsDemoMode] = useState(false);

  useEffect(() => {
    const demoMode = localStorage.getItem('demo_mode') === 'true';
    setIsDemoMode(demoMode);
  }, []);

  if (!isDemoMode) return null;

  return (
    <Alert className="mb-6 border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950/20">
      <Info className="h-4 w-4 text-orange-600" />
      <AlertDescription className="text-orange-800 dark:text-orange-200">
        <strong>Demo Mode Active:</strong> You're viewing a demonstration of the platform with simulated data. 
        This allows investors and partners to explore all features without authentication. Real functionality requires proper login credentials.
      </AlertDescription>
    </Alert>
  );
};

export const isDemoMode = () => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('demo_mode') === 'true';
};