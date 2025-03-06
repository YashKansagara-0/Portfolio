import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Database, 
  CloudLightning,
  Bot,
  BarChart,
  GitBranch,
  FileSpreadsheet
} from 'lucide-react';
import { AnimatedCard, AnimatedText } from './AnimatedCard';

const achievements = [
  {
    title: "Advanced Analytics Implementation",
    description: "Enhanced shipping accuracy through time series forecasting",
    metrics: [
      { value: "15%", label: "Increase in on-time deliveries" },
      { value: "95%", label: "Reduction in manual intervention" }
    ],
    icon: TrendingUp,
    tech: ["Python", "Time Series Analysis"]
  },
  {
    title: "Data Pipeline Architecture",
    description: "Built scalable data infrastructure using GCP",
    metrics: [
      { value: "25%", label: "Reduction in processing time" },
      { value: "75%", label: "Increase in efficiency" }
    ],
    icon: Database,
    tech: ["GCP", "SFTP"]
  },
  {
    title: "Process Automation",
    description: "Intelligent invoice processing with AI",
    metrics: [
      { value: "8hrs", label: "Weekly time saved" },
      { value: "30%", label: "Increase in efficiency" }
    ],
    icon: Bot,
    tech: ["Power Automate", "AI"]
  },
  {
    title: "Data Integration & ETL",
    description: "Engineered robust SSIS packages for analytics",
    metrics: [
      { value: "95%", label: "Manual intervention reduction" },
      { value: "75%", label: "Processing efficiency gain" }
    ],
    icon: GitBranch,
    tech: ["SSIS", "ETL"]
  }
];

export default function ImpactSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedText delay={0.1} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 
                       bg-clip-text text-transparent mb-4">
            Impact & Achievements
          </h2>
          <p className="text-xl text-gray-400">
            Driving business transformation through data-driven solutions
          </p>
        </AnimatedText>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <AnimatedCard 
              key={index}
              delay={0.2 + index * 0.1}
              className="h-full"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="p-3 rounded-lg bg-blue-500/10"
                >
                  <achievement.icon className="w-6 h-6 text-blue-400" />
                </motion.div>
                <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
              </div>

              <p className="text-gray-400 mb-6">{achievement.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {achievement.metrics.map((metric, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/5 rounded-lg p-4"
                  >
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 
                                  bg-clip-text text-transparent">
                      {metric.value}
                    </div>
                    <div className="text-sm text-gray-400">{metric.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {achievement.tech.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (index * 0.1) + (idx * 0.1) }}
                    className="px-3 py-1 rounded-full text-sm bg-blue-500/10 text-blue-400"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
