import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Skeleton } from '@/components/ui/skeleton';
import { AdminSetup } from '@/components/AdminSetup';

interface ProtectedRouteProps {
  children: ReactNode;
  requiredRoles?: string | string[];
  redirectTo?: string;
  allowAdminSetup?: boolean;
}

// Check if demo mode is enabled
const isDemoMode = () => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('demo_mode') === 'true';
};

export const ProtectedRoute = ({ 
  children, 
  requiredRoles, 
  redirectTo = '/login',
  allowAdminSetup = false
}: ProtectedRouteProps) => {
  const { user, loading, isAuthenticated, hasRole } = useAuth();
  const location = useLocation();

  // CRITICAL: Check demo mode FIRST before any other logic
  if (isDemoMode()) {
    console.log('Demo mode enabled - bypassing all authentication');
    return <>{children}</>;
  }

  // Show loading skeleton while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen bg-background p-8">
        <div className="container mx-auto space-y-6">
          <Skeleton className="h-8 w-64" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Skeleton className="h-32" />
            <Skeleton className="h-32" />
            <Skeleton className="h-32" />
          </div>
          <Skeleton className="h-64" />
        </div>
      </div>
    );
  }

  // Special case: Admin setup for initial admin creation
  if (allowAdminSetup && !isAuthenticated) {
    return <AdminSetup />;
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to={redirectTo} state={{ from: location }} replace />;
  }

  // Check role requirements
  if (requiredRoles && !hasRole(requiredRoles)) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-destructive mb-4">Access Denied</h1>
          <p className="text-muted-foreground mb-6">
            You don't have permission to access this page.
          </p>
          <Navigate to="/" replace />
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

// Convenience components for specific roles
export const AdminRoute = ({ children }: { children: ReactNode }) => {
  // Check demo mode first
  if (isDemoMode()) {
    return <>{children}</>;
  }
  return <ProtectedRoute requiredRoles="admin" allowAdminSetup={true}>{children}</ProtectedRoute>;
};

export const HRRoute = ({ children }: { children: ReactNode }) => {
  // Check demo mode first
  if (isDemoMode()) {
    return <>{children}</>;
  }
  return <ProtectedRoute requiredRoles={['admin', 'hr']}>{children}</ProtectedRoute>;
};

export const EmployeeRoute = ({ children }: { children: ReactNode }) => {
  // Check demo mode first
  if (isDemoMode()) {
    return <>{children}</>;
  }
  return <ProtectedRoute requiredRoles="employee">{children}</ProtectedRoute>;
};

// Export the demo mode check function
export { isDemoMode };