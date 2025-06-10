"use client"
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TeamTrackrHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

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
        delayChildren: 0.2
      }
    }
  };

  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
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
    hidden: { opacity: 0, y: 100, rotateX: 15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const features = [
    {
      title: "Project Orchestration",
      description: "Intelligent project management with AI-powered insights and predictive analytics",
      icon: "🎯",
      gradient: "from-violet-600 to-indigo-600",
      delay: 0.1,
      href: "https://project-managementt-tool.netlify.app/"
    },
    {
      title: "Neural Chat",
      description: "Next-generation team communication with smart threading and context awareness",
      icon: "🧠",
      gradient: "from-blue-600 to-cyan-600",
      delay: 0.2,
      href: "https://chatsphere-sg.netlify.app/"
    },
    {
      title: "Immersive Share",
      description: "Ultra-high definition screen sharing with collaborative AR annotations",
      icon: "🌐",
      gradient: "from-emerald-600 to-teal-600",
      delay: 0.3,
      href: "https://team-trackr-sharing.vercel.app/"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-100/40 via-blue-100/40 to-emerald-100/40" />
        
        {/* Animated Grid */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute inset-0 opacity-20"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </motion.div>

        {/* Floating Orbs */}
        <motion.div
          style={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-violet-300/40 to-purple-300/40 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          style={{
            x: mousePosition.x * -0.03,
            y: mousePosition.y * -0.03,
          }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-300/40 to-cyan-300/40 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        <motion.div
          style={{
            x: mousePosition.x * 0.015,
            y: mousePosition.y * 0.015,
          }}
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-emerald-300/30 to-teal-300/30 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 px-6 py-12"
      >
        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex justify-center items-center max-w-7xl mx-auto mb-20"
        >
          <div className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            TeamTrackr
          </div>
        </motion.nav>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={heroVariants}
            className="text-center mb-32"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm border border-slate-200/50 rounded-full mb-8"
            >
              <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse" />
              <span className="text-sm text-slate-600">Now with AI-powered insights</span>
            </motion.div>

            <motion.h1
              variants={heroVariants}
              className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-none"
            >
              <span className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-clip-text text-transparent">
                The Future of
              </span>
              <br />
              <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Collaboration
              </span>
            </motion.h1>

            <motion.p
              variants={heroVariants}
              className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              Experience the next evolution of teamwork with our intelligent suite of tools 
              that adapt to your workflow and amplify your team's potential.
            </motion.p>

            {/* <motion.div
              variants={heroVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-full shadow-2xl transition-all duration-300"
              >
                Start Your Journey
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.8)", borderColor: "rgba(148, 163, 184, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-slate-200 text-slate-700 font-semibold rounded-full backdrop-blur-sm transition-all duration-300 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Watch Demo
              </motion.button>
            </motion.div> */}
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.a
                key={index}
                href={feature.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={cardVariants}
                whileHover={{
                  y: -20,
                  rotateX: 5,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                style={{ y: y2 }}
                className="group relative p-8 bg-white/70 backdrop-blur-xl border border-white/30 rounded-3xl hover:border-white/50 hover:shadow-2xl transition-all duration-500 cursor-pointer perspective-1000"
              >
                {/* Card Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-3xl blur-xl transition-all duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                    className="text-6xl mb-6 filter drop-shadow-lg"
                  >
                    {feature.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 group-hover:bg-gradient-to-r group-hover:from-slate-800 group-hover:to-slate-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 group-hover:text-slate-700 leading-relaxed transition-all duration-300 text-lg">
                    {feature.description}
                  </p>

                  {/* Arrow */}
                  <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                    className="absolute top-8 right-8 text-slate-400 group-hover:text-slate-600 transition-all duration-300"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </motion.div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Stats Section */}
          {/* <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-32 text-center"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { value: "50K+", label: "Active Teams" },
                { value: "99.9%", label: "Uptime" },
                { value: "150+", label: "Countries" },
                { value: "24/7", label: "Support" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.7 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-500 text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div> */}
        </div>
      </motion.div>
    </div>
  );
};

export default TeamTrackrHero;