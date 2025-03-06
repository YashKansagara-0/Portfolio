import { motion } from 'framer-motion';
import { Award, Clock, Target, Zap } from 'lucide-react';

const professionalMissions = [
  {
    title: 'E-Commerce Logistics Optimization',
    company: 'Canadian Tire Corporation',
    duration: '2021 - Present',
    impact: '10% Efficiency Gain',
    icon: Target,
    technologies: ['MLOps', 'Cloud Architecture', 'Product Analytics'],
    description: 'Engineered a data-driven logistics platform leveraging predictive modeling and advanced A/B testing frameworks.',
    keyAchievements: [
      'Reduced operational costs through intelligent routing',
      'Implemented machine learning predictive maintenance',
      'Enhanced real-time inventory tracking'
    ]
  },
  {
    title: 'User Experience Revolution',
    company: 'Joe Johnson Equipment',
    duration: '2019 - 2021',
    impact: '15% User Engagement',
    icon: Zap,
    technologies: ['Data Science', 'UX Design', 'Product Strategy'],
    description: 'Transformed product features through comprehensive data analytics and innovative user research methodologies.',
    keyAchievements: [
      'Developed intuitive user interfaces',
      'Implemented personalization algorithms',
      'Created data-driven product roadmap'
    ]
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

export default function ProfessionalMissions() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-6"
      >
        {professionalMissions.map((mission, index) => (
          <motion.div
            key={index}
            variants={item}
            className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10
                     transform transition-all hover:scale-[1.02] hover:border-blue-500
                     hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div className="flex items-center gap-3">
                <mission.icon className="w-8 h-8 text-blue-400" />
                <div>
                  <h3 className="text-2xl font-semibold text-blue-300">
                    {mission.title}
                  </h3>
                  <p className="text-gray-400">{mission.company}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-2 md:mt-0">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-400">{mission.duration}</span>
                </div>
                <span className="bg-purple-600/30 text-purple-200 px-3 py-1 rounded-full text-sm">
                  {mission.impact}
                </span>
              </div>
            </div>

            <p className="text-gray-300 mb-4">{mission.description}</p>

            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-5 h-5 text-blue-400" />
                <h4 className="text-lg font-semibold text-blue-400">
                  Key Achievements
                </h4>
              </div>
              <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                {mission.keyAchievements.map((achievement, achIndex) => (
                  <motion.li
                    key={achIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * achIndex }}
                  >
                    {achievement}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              {mission.technologies.map((tech, techIndex) => (
                <motion.span
                  key={techIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * techIndex }}
                  className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
