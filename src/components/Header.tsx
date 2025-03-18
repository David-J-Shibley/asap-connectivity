
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X, LogIn, UserPlus } from 'lucide-react';

const NavItem = ({ to, children }: { to: string, children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <li>
      <Link 
        to={to} 
        className={`py-2 px-3 rounded-md transition-colors hover:bg-primary/10 ${
          isActive ? 'font-semibold text-primary' : 'text-foreground/80'
        }`}
      >
        {children}
      </Link>
    </li>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-asap-blue">ASAP</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-1">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/services">Services</NavItem>
            <NavItem to="/insurance">Insurance</NavItem>
            <NavItem to="/staff">Staff</NavItem>
            <NavItem to="/contact">Contact</NavItem>
            <NavItem to="/gallery">Gallery</NavItem>
            <NavItem to="/training">Training/Cues</NavItem>
            <NavItem to="/forensics">Forensics</NavItem>
            <NavItem to="/resources">Resources</NavItem>
            <NavItem to="/news">ASAP News</NavItem>
          </ul>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/login" className="flex items-center gap-1">
              <LogIn className="h-4 w-4" />
              Login
            </Link>
          </Button>
          <Button asChild>
            <Link to="/register" className="flex items-center gap-1">
              <UserPlus className="h-4 w-4" />
              Register
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-primary" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 bg-background border-b">
          <nav>
            <ul className="space-y-2">
              <NavItem to="/">Home</NavItem>
              <NavItem to="/services">Services</NavItem>
              <NavItem to="/insurance">Insurance</NavItem>
              <NavItem to="/staff">Staff</NavItem>
              <NavItem to="/contact">Contact</NavItem>
              <NavItem to="/gallery">Gallery</NavItem>
              <NavItem to="/training">Training/Cues</NavItem>
              <NavItem to="/forensics">Forensics</NavItem>
              <NavItem to="/resources">Resources</NavItem>
              <NavItem to="/news">ASAP News</NavItem>
              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" asChild className="flex-1">
                  <Link to="/login" className="flex items-center justify-center gap-1">
                    <LogIn className="h-4 w-4" />
                    Login
                  </Link>
                </Button>
                <Button size="sm" asChild className="flex-1">
                  <Link to="/register" className="flex items-center justify-center gap-1">
                    <UserPlus className="h-4 w-4" />
                    Register
                  </Link>
                </Button>
              </div>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
