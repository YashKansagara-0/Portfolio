import { motion } from 'framer-motion';
import { 
  Database, 
  Truck, 
  BarChart, 
  Users, 
  Clock, 
  Gift,
  Search,
  LineChart,
  ArrowRight,
  CheckCircle,
  Brain,
  Flag,
  Target,
  Lightbulb
} from 'lucide-react';
import { AnimatedCard, AnimatedText, AnimatedIcon } from './AnimatedCard';

const projects = [
  {
    title: "MSTR Business Intelligence Platform",
    role: "Product & Project Lead",
    description: "Pioneered and led the development of a no-code data management solution that revolutionized how business teams interact with data",
    icon: Brain,
    leadership: [
      "End-to-end project ownership from conception to enterprise-wide deployment",
      "Led cross-functional teams through strategic implementation phases",
      "Established data governance frameworks and best practices"
    ],
    innovations: [
      "Invented automated SQL query generation system",
      "Designed intuitive drag-and-drop interface for complex data operations",
      "Implemented real-time collaboration features"
    ],
    impact: [
      {
        metric: "100%",
        label: "SQL Query Automation",
        icon: Database,
        description: "Eliminated manual SQL writing"
      },
      {
        metric: "4x",
        label: "Faster Analysis",
        icon: Clock,
        description: "Accelerated insight generation"
      },
      {
        metric: "30+",
        label: "Teams Enabled",
        icon: Users,
        description: "Cross-departmental adoption"
      }
    ],
    tags: ["Project Leadership", "Process Innovation", "Change Management", "Data Strategy"]
  },
  {
    title: "Real-time Shipment Intelligence Hub",
    role: "Product Strategy Lead",
    description: "Conceptualized and delivered an integrated tracking system that transformed logistics visibility across the organization",
    icon: Truck,
    leadership: [
      "Spearheaded API integration strategy with multiple courier services",
      "Managed stakeholder relationships across departments",
      "Led agile development sprints and feature prioritization"
    ],
    innovations: [
      "Designed scalable NoSQL data architecture",
      "Created unified tracking algorithm across carriers",
      "Developed smart search functionality across multiple parameters"
    ],
    impact: [
      {
        metric: "Real-time",
        label: "Tracking Updates",
        icon: Clock,
        description: "Live shipment visibility"
      },
      {
        metric: "100%",
        label: "Order Visibility",
        icon: Search,
        description: "Complete tracking coverage"
      },
      {
        metric: "5min",
        label: "Query Time",
        icon: LineChart,
        description: "Reduced from 30 minutes"
      }
    ],
    tags: ["Strategic Planning", "Systems Integration", "UX Innovation", "Technical Leadership"]
  }
];

export default function ProjectShowcase() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedText delay={0.1} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 
                       bg-clip-text text-transparent mb-4">
            Strategic Projects & Innovations
          </h2>
          <p className="text-xl text-gray-400">
            Driving organizational transformation through innovative product leadership
          </p>
        </AnimatedText>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <AnimatedCard 
              key={index} 
              delay={0.2 + index * 0.1}
              className="group cursor-pointer"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="p-3 rounded-lg bg-blue-500/10"
                    >
                      <project.icon className="w-6 h-6 text-blue-400" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                      <p className="text-blue-400 font-medium">{project.role}</p>
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-blue-400"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>

                <p className="text-lg text-gray-300">{project.description}</p>

                <div className="grid md:grid-cols-3 gap-6">
                  {project.impact.map((stat, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/5 rounded-lg p-4"
                    >
                      <stat.icon className="w-6 h-6 text-blue-400 mb-2" />
                      <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 
                                  bg-clip-text text-transparent">
                        {stat.metric}
                      </div>
                      <div className="text-gray-300 font-medium">{stat.label}</div>
                      <div className="text-sm text-gray-500">{stat.description}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Flag className="w-5 h-5 text-purple-400" />
                      <h4 className="text-lg font-semibold text-purple-400">Leadership & Management</h4>
                    </div>
                    <ul className="space-y-2">
                      {project.leadership.map((item, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + idx * 0.1 }}
                          className="flex items-center gap-2 text-gray-300"
                        >
                          <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-green-400" />
                      <h4 className="text-lg font-semibold text-green-400">Innovation & Strategy</h4>
                    </div>
                    <ul className="space-y-2">
                      {project.innovations.map((item, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + idx * 0.1 }}
                          className="flex items-center gap-2 text-gray-300"
                        >
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {project.tags.map((tag, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: (index * 0.1) + (idx * 0.1) }}
                      className="px-3 py-1 rounded-full text-sm bg-blue-500/10 text-blue-400"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}