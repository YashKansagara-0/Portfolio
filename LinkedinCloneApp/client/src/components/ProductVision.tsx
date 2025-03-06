import { motion } from 'framer-motion';
import { 
  Rocket, 
  Target, 
  Users, 
  Lightbulb, 
  TrendingUp,
  Zap
} from 'lucide-react';

const visionCards = [
  {
    icon: Target,
    title: 'Strategic Direction',
    description: 'Setting clear product goals and KPIs aligned with business objectives',
    color: 'from-blue-500 to-blue-700'
  },
  {
    icon: Users,
    title: 'User-Centric Approach',
    description: 'Deep understanding of user needs through research and analytics',
    color: 'from-purple-500 to-purple-700'
  },
  {
    icon: Lightbulb,
    title: 'Innovation Pipeline',
    description: 'Continuous ideation and validation of new product features',
    color: 'from-pink-500 to-pink-700'
  },
  {
    icon: TrendingUp,
    title: 'Growth Focus',
    description: 'Data-driven strategies for sustainable product growth',
    color: 'from-green-500 to-green-700'
  },
  {
    icon: Zap,
    title: 'Rapid Execution',
    description: 'Agile implementation of validated product initiatives',
    color: 'from-yellow-500 to-yellow-700'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function ProductVision() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {visionCards.map((card, index) => (
        <motion.div
          key={card.title}
          variants={item}
          whileHover={{ scale: 1.05 }}
          className={`
            p-6 rounded-xl bg-gradient-to-br ${card.color}
            transform transition-all duration-300
            hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]
            backdrop-blur-lg
          `}
        >
          <card.icon className="w-12 h-12 mb-4 text-white" />
          <h3 className="text-xl font-bold text-white mb-2">
            {card.title}
          </h3>
          <p className="text-white/80">
            {card.description}
          </p>

          {/* Interactive Elements */}
          <motion.div 
            className="mt-4 pt-4 border-t border-white/20"
            initial="hidden"
            whileHover="show"
          >
            <motion.button
              className="text-white/90 hover:text-white flex items-center gap-2"
              whileHover={{ x: 10 }}
            >
              Learn More
              <Rocket className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
