"use client"
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TeamTrackrHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const heroVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const features = [
    {
      title: "Project Management",
      description: "AI-powered project orchestration with predictive analytics and smart resource allocation",
      icon: "🎯",
      gradient: "from-violet-500 via-purple-500 to-violet-600",
      href: "https://project-managementt-tool.netlify.app/",
      accent: "violet"
    },
    {
      title: "Neural Chat",
      description: "Next-generation team communication with intelligent threading and context awareness",
      icon: "💬",
      gradient: "from-blue-500 via-cyan-500 to-blue-600",
      href: "https://chatsphere-sg.netlify.app/",
      accent: "blue"
    },
    {
      title: "Smart Browser",
      description: "Collaborative browsing with shared workspaces and synchronized navigation",
      icon: "🌐",
      gradient: "from-emerald-500 via-teal-500 to-emerald-600",
      href: "https://browser-team-trackr.vercel.app/",
      accent: "emerald"
    },
    {
      title: "Screen Share",
      description: "Ultra-HD sharing with AR collaborative annotations and real-time markup tools",
      icon: "📱",
      gradient: "from-orange-500 via-red-500 to-orange-600",
      href: "https://team-trackr-sharing.vercel.app/",
      accent: "orange"
    },
    {
      title: "Video Connect",
      description: "Crystal-clear conferencing with AI transcription and smart meeting insights",
      icon: "📹",
      gradient: "from-pink-500 via-rose-500 to-pink-600",
      href: "https://team-trackr-video.vercel.app/",
      accent: "pink"
    }
  ];

  const getAccentClasses = (accent) => {
    const colors = {
      violet: 'hover:border-violet-400/50 group-hover:shadow-violet-500/20',
      blue: 'hover:border-blue-400/50 group-hover:shadow-blue-500/20',
      emerald: 'hover:border-emerald-400/50 group-hover:shadow-emerald-500/20',
      orange: 'hover:border-orange-400/50 group-hover:shadow-orange-500/20',
      pink: 'hover:border-pink-400/50 group-hover:shadow-pink-500/20'
    };
    return colors[accent] || colors.violet;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Primary Gradient Mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_800px_600px_at_50%_200px,rgba(120,119,198,0.05),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_600px_400px_at_80%_400px,rgba(59,130,246,0.04),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_400px_300px_at_20%_600px,rgba(16,185,129,0.03),transparent)]" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-gradient-to-r from-slate-300 to-slate-400 rounded-full"
              style={{
                left: `${10 + (Math.random() * 80)}%`,
                top: `${10 + (Math.random() * 80)}%`,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Interactive Orbs */}
        <motion.div
          style={{
            x: mousePosition.x * 0.01,
            y: mousePosition.y * 0.01,
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-violet-200/20 to-purple-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          style={{
            x: mousePosition.x * -0.008,
            y: mousePosition.y * -0.008,
          }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 min-h-screen"
      >
        {/* Hero Section */}
        <div className="pt-16 pb-24 px-6">
          <motion.div
            variants={heroVariants}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Brand Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="mb-12"
            >
              <h1 className="text-7xl lg:text-9xl font-black mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-clip-text text-transparent drop-shadow-sm">
                  TeamTrackr
                </span>
              </h1>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "8rem" }}
                transition={{ duration: 1, delay: 1 }}
                className="h-1.5 bg-gradient-to-r from-violet-500 via-purple-500 to-violet-600 mx-auto rounded-full shadow-lg"
              />
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mb-16 space-y-6"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-8 leading-tight">
                Where Innovation Meets
                <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent"> Collaboration</span>
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
                Experience the future of teamwork with our intelligent suite of tools 
                that evolve with your workflow and unleash your team's true potential through cutting-edge technology.
              </p>
            </motion.div>

            {/* Status Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-wrap justify-center gap-6 mb-20"
            >
              {[
                { label: "AI-Powered", color: "emerald" },
                { label: "Real-time Sync", color: "blue" },
                { label: "Enterprise Security", color: "violet" },
                { label: "Cloud Native", color: "orange" }
              ].map((badge, i) => (
                <div key={i} className="flex items-center px-6 py-3 bg-white/60 backdrop-blur-xl border border-slate-200/50 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className={`w-2.5 h-2.5 bg-${badge.color}-500 rounded-full mr-3 animate-pulse`} />
                  <span className="text-slate-700 font-medium text-sm">{badge.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="px-6 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Complete Productivity Ecosystem
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Five powerful applications working in perfect harmony to transform how your team collaborates
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <motion.a
                key={index}
                href={feature.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={cardVariants}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className={`group block ${index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className={`relative h-full bg-white/70 backdrop-blur-xl border border-slate-200/60 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 ${getAccentClasses(feature.accent)}`}>
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-all duration-500`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ 
                        scale: 1.15,
                        rotateY: 15,
                        transition: { duration: 0.3 }
                      }}
                      className="text-6xl mb-6 filter drop-shadow-lg"
                    >
                      {feature.icon}
                    </motion.div>

                    {/* Title */}
                    <h4 className="text-2xl font-bold text-slate-800 mb-4 group-hover:bg-gradient-to-r group-hover:from-slate-800 group-hover:to-slate-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {feature.title}
                    </h4>

                    {/* Description */}
                    <p className="text-slate-600 text-base leading-relaxed mb-8 line-height-loose">
                      {feature.description}
                    </p>

                    {/* Launch CTA */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-slate-500 group-hover:text-slate-700 transition-all duration-300">
                        <span className="font-semibold mr-3">Launch App</span>
                        <motion.div
                          whileHover={{ x: 4, scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                          className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-slate-200 flex items-center justify-center transition-all duration-300"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                          </svg>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="text-center pb-16"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TeamTrackrHero;