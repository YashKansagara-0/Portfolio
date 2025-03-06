import { useState, useEffect } from 'react';
import SpaceBackground from '@/components/SpaceBackground';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ChevronDown,
  Brain,
  Target,
  TrendingUp,
  Users,
  Rocket
} from 'lucide-react';
import { AnimatedCard, AnimatedText } from '@/components/AnimatedCard';
import ProjectShowcase from '@/components/ProjectShowcase';
import ImpactSection from '@/components/ImpactSection';

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const leadershipTraits = [
    {
      statement: "I Innovate",
      detail: "Transforming business challenges into strategic solutions",
      icon: Brain,
      color: "from-blue-500 to-cyan-500"
    },
    {
      statement: "I Design",
      detail: "Creating intuitive experiences that drive adoption",
      icon: Target,
      color: "from-indigo-500 to-purple-500"
    },
    {
      statement: "I Develop",
      detail: "Building scalable solutions for enterprise needs",
      icon: TrendingUp,
      color: "from-purple-500 to-pink-500"
    },
    {
      statement: "I Lead",
      detail: "Driving teams towards measurable business outcomes",
      icon: Users,
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <SpaceBackground />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 w-full h-0.5 z-50 bg-white/10"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"
          style={{ width: `${scrollProgress}%` }}
          transition={{ ease: "easeOut" }}
        />
      </motion.div>

      <main className="relative">
        <div className="max-w-7xl mx-auto px-4">
          {/* Hero Section */}
          <div className="min-h-screen flex flex-col justify-center items-center text-center">
            <motion.div
              style={{ opacity, scale }}
              className="relative space-y-12"
            >
              {/* Name and Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20 blur-3xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.3, 0.2]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6
                             bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400
                             bg-clip-text text-transparent">
                  Yash Kansagara
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                  Strategic Product Leader transforming business visions into measurable outcomes
                </p>
              </motion.div>

              {/* Leadership Traits */}
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {leadershipTraits.map((trait, index) => (
                  <AnimatedCard
                    key={index}
                    delay={0.2 + index * 0.1}
                    className="text-left p-6"
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${trait.color} bg-opacity-10`}>
                        <trait.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className={`text-2xl font-bold bg-gradient-to-r ${trait.color} bg-clip-text text-transparent`}>
                          {trait.statement}
                        </h3>
                        <p className="text-gray-400 mt-1">{trait.detail}</p>
                      </div>
                    </motion.div>
                  </AnimatedCard>
                ))}
              </div>

              {/* Value Proposition */}
              <AnimatedCard delay={0.8} className="max-w-3xl mx-auto">
                <div className="space-y-4 text-left">
                  <h3 className="text-xl text-gray-300 font-medium">Delivering Enterprise Value Through:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <Rocket className="w-5 h-5 text-blue-400" />
                      <span>Strategic product leadership driving measurable business outcomes</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Target className="w-5 h-5 text-indigo-400" />
                      <span>Data-driven decision making optimizing operational efficiency</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <TrendingUp className="w-5 h-5 text-purple-400" />
                      <span>Innovation mindset transforming business challenges into opportunities</span>
                    </li>
                  </ul>
                </div>
              </AnimatedCard>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ChevronDown className="w-8 h-8 text-white/40" />
              </motion.div>
            </motion.div>
          </div>

          {/* Featured Projects Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="py-20"
          >
            <ProjectShowcase />
          </motion.section>

          {/* Impact Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="py-20"
          >
            <ImpactSection />
          </motion.section>
        </div>
      </main>
    </div>
  );
}