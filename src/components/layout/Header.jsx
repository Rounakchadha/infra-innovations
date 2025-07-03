import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Partners', to: '/partners' },
    { name: 'Projects', to: '/projects' },
    { name: 'Contact', to: '/contact' },
  ];

  // Glass morphism background style
  const getGlassBackground = () => {
    if (isScrolled) {
      return {
        background: 'rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
      };
    }
    return {};
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 text-white ${
        isScrolled ? 'border-b border-white/20' : 'bg-transparent'
      }`}
      style={getGlassBackground()}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo and Tagline */}
        <div>
          <Link to="/" className="text-2xl font-bold block text-white hover:text-blue-400 transition-colors">
            Infra Innovations
          </Link>
          <p className="text-sm text-gray-200">
            Lighting Solutions
          </p>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className={`font-medium transition-colors duration-200 text-white hover:text-blue-400 ${
                location.pathname === item.to ? 'text-blue-400' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white hover:text-blue-400 transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            className="absolute top-16 left-0 w-full lg:hidden border border-white/20 rounded-b-lg"
            style={{
              background: 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
            }}
          >
            <div className="flex flex-col space-y-4 p-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-white hover:text-blue-400 font-medium transition-colors duration-200 ${
                    location.pathname === item.to ? 'text-blue-400' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
