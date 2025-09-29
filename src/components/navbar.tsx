import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Badge } from "@/components/ui/badge";
import { Shield, Menu, X } from "lucide-react";
import { DemoModeToggle } from '@/components/DemoModeToggle';
import { useState } from 'react';

export function Navbar() {
  const { user, isAuthenticated, logout, isAdmin } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-xs">HR</span>
              </div>
              <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                AgentForceHR
              </span>
              <Badge variant="outline" className="text-xs ml-2 border-primary/30 text-primary">
                Privacy-First
              </Badge>
            </div>
          </Link>
          <nav className="hidden lg:flex gap-6">
            <Link to="/features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </Link>
            <Link to="/hr-token" className="text-sm font-medium hover:text-primary transition-colors">
              HR Token
            </Link>
            <Link to="/one-pager" className="text-sm font-medium hover:text-primary transition-colors">
              One-Pager
            </Link>
            <Link to="/whitepaper" className="text-sm font-medium hover:text-primary transition-colors">
              Whitepaper
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <a href="mailto:contact@agentforcehr.com" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </a>
            <Link to="/investor-demo" className="text-sm font-medium hover:text-primary transition-colors">
              Investor Demo
            </Link>
          </nav>
        </div>
        
        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <DemoModeToggle />
          <ThemeToggle />
          {isAuthenticated ? (
            <>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  Welcome, {user?.firstName}
                </span>
                {isAdmin && (
                  <Badge variant="default" className="bg-primary/10 text-primary border-primary/20">
                    <Shield className="w-3 h-3 mr-1" />
                    Admin
                  </Badge>
                )}
              </div>
              {user?.role === 'admin' || user?.role === 'hr' ? (
                <Button variant="default" size="sm" asChild className="bg-primary hover:bg-primary/80">
                  <Link to="/admin">Dashboard</Link>
                </Button>
              ) : (
                <Button variant="default" size="sm" asChild>
                  <Link to="/employee">My Portal</Link>
                </Button>
              )}
              <Button variant="ghost" size="sm" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/login">Log in</Link>
              </Button>
              <Button variant="default" size="sm" asChild className="bg-primary hover:bg-primary/80">
                <Link to="/login">Get Started</Link>
              </Button>
            </>
          )}
        </div>
        
        {/* Mobile Menu */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="h-9 w-9 px-0">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetHeader>
                <SheetTitle className="text-left">
                  <Link to="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <span className="text-white font-bold text-xs">HR</span>
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                      AgentForceHR
                    </span>
                    <Badge variant="outline" className="text-xs ml-2 border-primary/30 text-primary">
                      Privacy-First
                    </Badge>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              
              <div className="flex flex-col gap-6 mt-8">
                {/* Demo Mode Toggle */}
                <div className="flex justify-center">
                  <DemoModeToggle />
                </div>
                
                {/* Navigation Links */}
                <nav className="flex flex-col gap-4">
                  <Link 
                    to="/features" 
                    className="text-lg font-medium hover:text-primary transition-colors py-2 border-b border-border"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Features
                  </Link>
                  <Link 
                    to="/hr-token" 
                    className="text-lg font-medium hover:text-primary transition-colors py-2 border-b border-border"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    HR Token
                  </Link>
                  <Link 
                    to="/one-pager" 
                    className="text-lg font-medium hover:text-primary transition-colors py-2 border-b border-border"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    One-Pager
                  </Link>
                  <Link 
                    to="/whitepaper" 
                    className="text-lg font-medium hover:text-primary transition-colors py-2 border-b border-border"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Whitepaper
                  </Link>
                  <Link 
                    to="/about" 
                    className="text-lg font-medium hover:text-primary transition-colors py-2 border-b border-border"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  <a 
                    href="mailto:contact@agentforcehr.com" 
                    className="text-lg font-medium hover:text-primary transition-colors py-2 border-b border-border"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </a>
                  <Link 
                    to="/investor-demo" 
                    className="text-lg font-medium hover:text-primary transition-colors py-2 border-b border-border"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Investor Demo
                  </Link>
                </nav>
                
                {/* User Actions */}
                <div className="flex flex-col gap-3 mt-4">
                  {isAuthenticated ? (
                    <>
                      <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                        <span className="text-sm text-muted-foreground">
                          Welcome, {user?.firstName}
                        </span>
                        {isAdmin && (
                          <Badge variant="default" className="bg-primary/10 text-primary border-primary/20">
                            <Shield className="w-3 h-3 mr-1" />
                            Admin
                          </Badge>
                        )}
                      </div>
                      {user?.role === 'admin' || user?.role === 'hr' ? (
                        <Button 
                          variant="default" 
                          className="w-full bg-primary hover:bg-primary/80" 
                          asChild
                        >
                          <Link to="/admin" onClick={() => setMobileMenuOpen(false)}>
                            Dashboard
                          </Link>
                        </Button>
                      ) : (
                        <Button 
                          variant="default" 
                          className="w-full" 
                          asChild
                        >
                          <Link to="/employee" onClick={() => setMobileMenuOpen(false)}>
                            My Portal
                          </Link>
                        </Button>
                      )}
                      <Button 
                        variant="outline" 
                        className="w-full" 
                        onClick={() => {
                          logout();
                          setMobileMenuOpen(false);
                        }}
                      >
                        Logout
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button 
                        variant="outline" 
                        className="w-full" 
                        asChild
                      >
                        <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                          Log in
                        </Link>
                      </Button>
                      <Button 
                        variant="default" 
                        className="w-full bg-primary hover:bg-primary/80" 
                        asChild
                      >
                        <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                          Get Started
                        </Link>
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}