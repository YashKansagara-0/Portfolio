import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Target, Satellite } from 'lucide-react';

interface MobileNavigationProps {
  isOpen: boolean;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navigationItems = [
  { name: 'mission-control', icon: Globe, label: 'Mission Control' },
  { name: 'missions', icon: Target, label: 'Professional Missions' },
  { name: 'contact', icon: Satellite, label: 'Contact' }
];

export default function MobileNavigation({
  isOpen,
  activeSection,
  onSectionChange
}: MobileNavigationProps) {
  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="md:hidden fixed top-[72px] left-0 right-0 bg-black/90 backdrop-blur-lg
                   border-b border-white/10 z-50"
        >
          <div className="py-4">
            {navigationItems.map((item) => (
              <motion.button
                key={item.name}
                variants={itemVariants}
                onClick={() => onSectionChange(item.name)}
                className={`flex items-center gap-3 w-full px-6 py-3 transition-colors
                  ${activeSection === item.name
                    ? 'text-blue-400 bg-blue-500/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
