import { motion } from 'framer-motion';
import { 
  BarChart2, 
  ArrowUpRight, 
  Users, 
  Clock, 
  Target,
  TrendingUp
} from 'lucide-react';

const metrics = [
  {
    title: 'User Engagement',
    value: '87%',
    change: '+12%',
    icon: Users,
    description: 'Average daily active users',
    color: 'bg-blue-500'
  },
  {
    title: 'Time to Market',
    value: '28 days',
    change: '-15%',
    icon: Clock,
    description: 'Average feature deployment time',
    color: 'bg-purple-500'
  },
  {
    title: 'Success Rate',
    value: '94%',
    change: '+8%',
    icon: Target,
    description: 'Feature adoption rate',
    color: 'bg-green-500'
  },
  {
    title: 'Growth Rate',
    value: '156%',
    change: '+23%',
    icon: TrendingUp,
    description: 'Year over year product growth',
    color: 'bg-pink-500'
  }
];

export default function MetricsHub() {
  return (
    <div className="space-y-8">
      {/* Metrics Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10
                     hover:border-blue-500/50 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 rounded-lg ${metric.color}`}>
                <metric.icon className="w-6 h-6 text-white" />
              </div>
              <span className={`
                flex items-center text-sm
                ${metric.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}
              `}>
                {metric.change}
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </span>
            </div>

            <h3 className="text-3xl font-bold text-white mb-1">
              {metric.value}
            </h3>
            <p className="text-sm text-gray-400">{metric.title}</p>
            
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-xs text-gray-500">{metric.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive Chart Preview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <BarChart2 className="w-6 h-6" />
            Performance Analytics
          </h3>
        </div>

        {/* Placeholder for interactive chart */}
        <div className="h-64 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 
                      rounded-lg flex items-center justify-center">
          <p className="text-gray-400">Interactive Analytics Dashboard Coming Soon</p>
        </div>
      </motion.div>
    </div>
  );
}
