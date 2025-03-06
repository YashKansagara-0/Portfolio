import { motion } from 'framer-motion';
import { Code, Briefcase, GitBranch } from 'lucide-react';

const skillCategories = [
  {
    name: 'Frontend',
    icon: Code,
    skills: [
      { name: 'React', level: 95, color: '#61DAFB' },
      { name: 'Next.js', level: 90, color: '#000000' },
      { name: 'Tailwind CSS', level: 85, color: '#38BDF8' }
    ]
  },
  {
    name: 'Backend',
    icon: Briefcase,
    skills: [
      { name: 'Node.js', level: 88, color: '#339933' },
      { name: 'Python', level: 82, color: '#3776AB' },
      { name: 'PostgreSQL', level: 75, color: '#336791' }
    ]
  },
  {
    name: 'DevOps',
    icon: GitBranch,
    skills: [
      { name: 'Docker', level: 80, color: '#2496ED' },
      { name: 'AWS', level: 70, color: '#FF9900' },
      { name: 'CI/CD', level: 85, color: '#4CAF50' }
    ]
  }
];

export default function MissionControl() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid md:grid-cols-3 gap-6"
      >
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: categoryIndex * 0.2 }}
            className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10
                     transform transition-all hover:scale-105 hover:border-blue-500
                     hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
          >
            <div className="flex items-center gap-3 mb-6">
              <category.icon className="w-6 h-6 text-blue-400" />
              <h3 className="text-2xl font-bold text-blue-300">
                {category.name}
              </h3>
            </div>

            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                >
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      className="h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                      style={{ backgroundColor: skill.color }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
