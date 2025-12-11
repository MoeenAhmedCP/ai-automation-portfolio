'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import BackToTop from '@/components/BackToTop';
import ScrollProgress from '@/components/ScrollProgress';
import Section from '@/components/Section';
import Card from '@/components/Card';
import AnimatedCard from '@/components/AnimatedCard';
import RevealOnScroll from '@/components/animations/RevealOnScroll';
import StaggerContainer, { staggerItemVariants } from '@/components/animations/StaggerContainer';
import FadeIn from '@/components/animations/FadeIn';

export default function Home() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <ScrollProgress />
      <BackToTop />

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center pt-20 lg:pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden"
      >
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl opacity-40"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl opacity-40"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="text-center lg:text-left">
              <FadeIn delay={0.2}>
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                  className="inline-block px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium mb-6 border border-blue-600/30"
                >
                  AI Automation Engineer · n8n Specialist
                </motion.div>
              </FadeIn>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              >
                I build AI-powered automations that{' '}
                <motion.span
                  className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent inline-block"
                  animate={{
                    backgroundPosition: ['0%', '100%', '0%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  work while you sleep
                </motion.span>
                .
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
              >
                I design and deploy custom n8n flows, AI agents, and workflow automations that
                reduce manual work, speed up operations, and let your team focus on high-value
                tasks instead of repetitive clicks.
              </motion.p>

              {/* Key Metrics */}
              <StaggerContainer className="grid grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto lg:mx-0">
                {[
                  { value: '30+', label: 'Automations shipped', color: 'blue' },
                  { value: '100+ hrs/month', label: 'Manual work eliminated', color: 'purple' },
                  { value: '5+', label: 'Core tools integrated', color: 'indigo' },
                ].map((metric, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-gray-900 rounded-lg p-4 shadow-lg border border-gray-800 cursor-default"
                  >
                    <div
                      className={`text-2xl md:text-3xl font-bold ${
                        metric.color === 'blue'
                          ? 'text-blue-400'
                          : metric.color === 'purple'
                            ? 'text-purple-400'
                            : 'text-indigo-400'
                      }`}
                    >
                      {metric.value}
                    </div>
                    <div className="text-sm text-gray-400">{metric.label}</div>
                  </motion.div>
                ))}
              </StaggerContainer>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="#contact"
                    onClick={(e) => scrollToSection(e, '#contact')}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl text-center block"
                  >
                    Book a 20-min Call
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="#automations"
                    onClick={(e) => scrollToSection(e, '#automations')}
                    className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all text-center block"
                  >
                    View My Automations
                  </Link>
                </motion.div>
              </motion.div>

              <FadeIn delay={1.2}>
                <p className="text-sm text-gray-400">
                  No fluff. We map your automations and estimate impact.
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  Prefer async? Scroll down for live demos, screenshots, and technical breakdowns.
                </p>
              </FadeIn>
            </div>

            {/* Right: Visual Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="hidden lg:block"
            >
              <motion.div
                className="relative"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl transform rotate-6 opacity-30"
                  animate={{
                    rotate: [6, 8, 6],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <div className="relative bg-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-800">
                  <div className="space-y-4">
                    <div className="h-4 bg-gray-800 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-800 rounded w-1/2"></div>
                    <motion.div
                      className="h-32 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg mt-6 flex items-center justify-center border border-blue-500/20"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      <motion.svg
                        className="w-16 h-16 text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </motion.svg>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tools Strip */}
      <RevealOnScroll>
        <Section
          id="tools-strip"
          className="bg-gray-900/50 py-8"
        >
          <div className="text-center mb-6">
            <p className="text-sm font-medium text-gray-300">
              I build with tools you already use
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60 dark:opacity-40">
            {['n8n', 'OpenAI', 'Make.com', 'Notion', 'Airtable', 'Slack', 'HubSpot', 'Pipedrive'].map(
              (tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="text-lg font-semibold text-gray-300 cursor-default"
                >
                  {tool}
                </motion.div>
              )
            )}
          </div>
        </Section>
      </RevealOnScroll>

      {/* Services Section */}
      <RevealOnScroll>
        <Section
          id="services"
          title="What I build for teams"
          subtitle="From single n8n flows to full AI-powered systems, I help you automate the right things in the right order."
        >
          <StaggerContainer className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                title: 'AI-Powered Workflows',
                description:
                  'End-to-end workflows powered by LLMs and APIs. From lead qualification and email drafting to document summarization and research pipelines.',
                bullets: [
                  'AI agents embedded directly into your processes',
                  'Trigger-based and scheduled workflows',
                  'Clear logging and failure handling',
                ],
              },
              {
                title: 'n8n Flow Design & Orchestration',
                description:
                  'Complex n8n workflows that integrate your tools, handle branching logic, and keep your data moving reliably.',
                bullets: [
                  'Multi-step, multi-tool flows',
                  'Error handling & retry strategies',
                  'Versioned, documented flows',
                ],
              },
              {
                title: 'Chatbots & AI Assistants',
                description:
                  'Custom AI assistants for support, internal knowledge, and operations, connected to your real data sources.',
                bullets: [
                  'RAG (Retrieval-Augmented Generation) setups',
                  'FAQ bots for customer support',
                  'Internal assistants for your team',
                ],
              },
              {
                title: 'Ops & Reporting Automations',
                description:
                  'Automations that clean, transform, and sync data while generating daily/weekly reports for your team.',
                bullets: [
                  'Automated KPIs and dashboards',
                  'Cross-tool sync (CRM, sheets, DBs)',
                  'Notifications in Slack/Email',
                ],
              },
            ].map((service, index) => (
              <motion.div key={index} variants={staggerItemVariants}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-gray-900 rounded-xl p-6 lg:p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-800"
                >
                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.bullets.map((bullet, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.1 }}
                        className="flex items-start text-sm text-gray-300"
                      >
                        <motion.svg
                          className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + i * 0.1 + 0.2, type: 'spring' }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </motion.svg>
                        {bullet}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </StaggerContainer>
        </Section>
      </RevealOnScroll>

      {/* Automation Gallery */}
      <RevealOnScroll>
        <Section
          id="automations"
          title="Automation Gallery"
          subtitle="A closer look at some of the n8n flows and AI automations I've built. Each example can be adapted to your stack."
          className="bg-gray-900/30"
        >
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
            {
              title: 'AI-Powered Lead Qualifier',
              tags: ['Sales', 'AI', 'n8n', 'CRM'],
              description:
                'New leads from the website are enriched, scored with an AI model, and automatically routed into the CRM with next-step suggestions for the sales team.',
              flow: [
                'Trigger: New lead submitted via form/API',
                'Enrichment: Company & contact data pulled from enrichment service',
                'AI step: OpenAI model scores lead quality and suggests follow-up angle',
                'Output: Lead created/updated in CRM with priority and AI notes',
              ],
              result: 'Saved ~2–3 hours/day of manual lead triage for the sales team.',
            },
            {
              title: 'Customer Support Email Classifier & Responder',
              tags: ['Support', 'AI', 'Email'],
              description:
                'Incoming support emails are automatically classified, routed to the right team, and draft responses are generated using AI based on knowledge base content.',
              flow: [
                'Trigger: New email in support inbox',
                'Classification: AI categorizes email by urgency and topic',
                'Routing: Email assigned to appropriate team member',
                'Draft: AI generates response draft from knowledge base',
              ],
              result: 'Reduced response time by 60% and improved consistency.',
            },
            {
              title: 'Content Repurposing Pipeline',
              tags: ['Content', 'AI', 'Marketing'],
              description:
                'Long-form content is automatically broken down into social media posts, email newsletters, and blog snippets with AI assistance.',
              flow: [
                'Trigger: New blog post published',
                'Analysis: AI extracts key points and themes',
                'Generation: Multiple formats created (Twitter, LinkedIn, Email)',
                'Distribution: Content scheduled across platforms',
              ],
              result: '10x content output from single source material.',
            },
            {
              title: 'Daily Research & Summary Agent',
              tags: ['Research', 'AI', 'Automation'],
              description:
                'Automated daily research on specified topics with AI-powered summarization and delivery to your preferred channels.',
              flow: [
                'Trigger: Scheduled daily run',
                'Research: Gathers articles from multiple sources',
                'Summarization: AI creates executive summary',
                'Delivery: Summary sent via email/Slack',
              ],
              result: 'Saves 2+ hours daily on research and reading.',
            },
            {
              title: 'Automated Invoice & Payment Reminder Flow',
              tags: ['Finance', 'Operations', 'n8n'],
              description:
                'Automated tracking of invoices, payment status, and intelligent reminder sequences to improve cash flow.',
              flow: [
                'Trigger: Invoice created or payment status changes',
                'Tracking: Monitors payment due dates',
                'Reminders: Sends automated reminders before and after due date',
                'Reporting: Updates finance dashboard',
              ],
              result: 'Improved cash flow with 40% faster payment collection.',
            },
            {
              title: 'Internal Knowledge Q&A Bot Pipeline',
              tags: ['Knowledge', 'AI', 'RAG'],
              description:
                'Internal Q&A bot that answers questions from your team using company documents, wikis, and knowledge bases.',
              flow: [
                'Trigger: Question submitted via Slack/chat',
                'Retrieval: RAG system searches knowledge base',
                'Generation: AI generates answer from relevant documents',
                'Response: Answer delivered with source citations',
              ],
              result: 'Instant answers to common questions, reducing interruptions.',
            },
            ].map((automation, index) => (
              <motion.div key={index} variants={staggerItemVariants}>
                <motion.div
                  whileHover={{ scale: 1.03, y: -8, rotateY: 2 }}
                  className="bg-gray-900 rounded-xl p-6 lg:p-8 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-800"
                >
                  <div className="flex flex-wrap gap-2 mb-3">
                    {automation.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-400 text-xs font-medium rounded"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {automation.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    {automation.description}
                  </p>
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-300 mb-2">
                      Flow Summary:
                    </p>
                    <ul className="space-y-1 text-xs text-gray-300">
                      {automation.flow.map((step, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + i * 0.05 }}
                          className="flex items-start"
                        >
                          <motion.span
                            className="text-blue-400 mr-2"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                          >
                            •
                          </motion.span>
                          {step}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  {automation.result && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      className="pt-4 border-t border-gray-800"
                    >
                      <p className="text-sm font-medium text-green-400">
                        Result: {automation.result}
                      </p>
                    </motion.div>
                  )}
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="mt-4 text-sm font-medium text-blue-400 hover:underline"
                  >
                    View Flow Details →
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </StaggerContainer>
        </Section>
      </RevealOnScroll>

      {/* Case Studies */}
      <RevealOnScroll>
        <Section
          id="case-studies"
          title="Selected Case Studies"
          subtitle="A deeper look into how I design, build, and ship automations that actually get used."
        >
          <StaggerContainer className="space-y-12">
            {[
            {
              label: 'Case Study #1',
              title: 'Automated Lead Management for B2B SaaS',
              problem:
                "The client's sales team was manually copying lead data from forms into the CRM, qualifying leads by hand, and sending follow-up emails. This took several hours per day and led to inconsistent follow-ups.",
              solution:
                'I designed a series of n8n flows that captured leads from multiple sources, enriched them via external APIs, used an AI model to score and segment leads, and triggered personalized email sequences based on priority.',
              tech: ['n8n', 'OpenAI', 'HubSpot', 'SendGrid', 'Webhooks', 'REST APIs'],
              architecture:
                'Form submission → Webhook trigger → Enrichment nodes → AI scoring node → Branching by score → CRM create/update → Email sequence trigger → Logging & alerts.',
              impact: [
                '2–3 hours/day manual work eliminated',
                'Faster lead response time (from ~24h to <1h for hot leads)',
                'More consistent follow-ups and better visibility in CRM',
              ],
            },
            {
              label: 'Case Study #2',
              title: 'Support Ticket Automation & AI Response System',
              problem:
                'Support team was overwhelmed with repetitive questions and spent too much time on ticket triage and initial responses.',
              solution:
                'Built an AI-powered support system that automatically classifies tickets, generates draft responses from knowledge base, and routes complex issues to the right specialist.',
              tech: ['n8n', 'OpenAI', 'Zendesk', 'Slack', 'Notion API'],
              architecture:
                'Email/Slack ticket → Classification AI → Knowledge base search → Response generation → Human review queue → Auto-respond or escalate.',
              impact: [
                '70% of tickets answered automatically',
                'Average response time reduced from 4h to 15min',
                'Support team can focus on complex issues',
              ],
            },
            {
              label: 'Case Study #3',
              title: 'Content Operations & Distribution Pipeline',
              problem:
                'Marketing team was manually repurposing long-form content into multiple formats and distributing across channels, taking days per piece.',
              solution:
                'Created an automated pipeline that takes published content, generates multiple formats (social posts, emails, summaries), and schedules distribution across all channels.',
              tech: ['n8n', 'OpenAI', 'Buffer API', 'Mailchimp', 'WordPress'],
              architecture:
                'Content published → Content analysis → Multi-format generation → Quality check → Schedule distribution → Analytics tracking.',
              impact: [
                '10x content output from same source material',
                'Distribution time reduced from days to minutes',
                'Consistent brand voice across all channels',
              ],
            },
            ].map((study, index) => (
              <motion.div key={index} variants={staggerItemVariants}>
                <motion.div
                  whileHover={{ scale: 1.01, y: -5 }}
                  className="bg-gray-900 rounded-xl p-6 lg:p-8 shadow-md hover:shadow-xl transition-all duration-300 max-w-4xl mx-auto border border-gray-800"
                >
                  <div className="mb-4">
                    <span className="text-sm font-semibold text-blue-400">
                      {study.label}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-2 mb-4">
                      {study.title}
                    </h3>
                  </div>
                  <div className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <h4 className="font-semibold text-white mb-2">Problem:</h4>
                      <p className="text-gray-300">{study.problem}</p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.1 }}
                    >
                      <h4 className="font-semibold text-white mb-2">Solution:</h4>
                      <p className="text-gray-300">{study.solution}</p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    >
                      <h4 className="font-semibold text-white mb-2">
                        Tech & Tools:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {study.tech.map((tool, toolIndex) => (
                          <motion.span
                            key={tool}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.2 + toolIndex * 0.05 }}
                            whileHover={{ scale: 1.1 }}
                            className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded border border-gray-700"
                          >
                            {tool}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <h4 className="font-semibold text-white mb-2">
                        Architecture Overview:
                      </h4>
                      <p className="text-sm text-gray-300 font-mono bg-gray-50 dark:bg-gray-800 p-3 rounded">
                        {study.architecture}
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                    >
                      <h4 className="font-semibold text-white mb-2">Impact:</h4>
                      <ul className="space-y-2">
                        {study.impact.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.4 + i * 0.1 }}
                            className="flex items-start text-gray-300"
                          >
                            <motion.svg
                              className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.1 + 0.4 + i * 0.1 + 0.1, type: 'spring' }}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </motion.svg>
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </StaggerContainer>
        </Section>
      </RevealOnScroll>

      {/* Process Section */}
      <RevealOnScroll>
        <Section
          id="process"
          title="How we'll work together"
          subtitle="A simple, transparent process designed to get you from idea → working automation quickly."
          className="bg-gray-900/30"
        >
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                step: '1',
                title: 'Discovery & Audit',
                description:
                  'We map out your current workflows, tools, and bottlenecks. Together, we identify the top 1–3 processes that will benefit most from automation.',
              },
              {
                step: '2',
                title: 'System Design',
                description:
                  'I propose a clear automation blueprint: triggers, data flow, tools, edge cases, and where AI fits in. You get a visual of the n8n architecture before anything is built.',
              },
              {
                step: '3',
                title: 'Build & Iterate',
                description:
                  'I build the flows in n8n, connect them to your tools, and add logging, error handling, and fail-safes. We test with real data and iterate quickly.',
              },
              {
                step: '4',
                title: 'Handover & Support',
                description:
                  'You get documentation, annotated n8n flows, and optional Loom walkthroughs. I can also stay on for ongoing maintenance or to extend the system.',
              },
            ].map((process, index) => (
              <motion.div key={index} variants={staggerItemVariants} className="relative">
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-800"
                >
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {process.step}
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {process.title}
                  </h3>
                  <p className="text-gray-300">{process.description}</p>
                </motion.div>
                {index < 3 && (
                  <motion.div
                    className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  >
                    <svg
                      className="w-8 h-8 text-gray-300 dark:text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </StaggerContainer>
        </Section>
      </RevealOnScroll>

      {/* Tech Stack */}
      <RevealOnScroll>
        <Section
          id="tech-stack"
          title="Tools & Technologies"
          subtitle="I choose tools that are reliable, well-supported, and flexible enough to grow with your business."
        >
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: 'Automation & Orchestration',
                tools: ['n8n', 'Make.com', 'Zapier'],
              },
              {
                category: 'AI & LLMs',
                tools: ['OpenAI', 'Anthropic', 'Embedding models', 'Vector DBs (Pinecone, Supabase)'],
              },
              {
                category: 'Data & Storage',
                tools: ['PostgreSQL / MySQL', 'Notion', 'Airtable', 'Google Sheets'],
              },
              {
                category: 'Communication & Ops',
                tools: ['Slack', 'Email providers', 'CRMs (HubSpot / Pipedrive / custom)'],
              },
              {
                category: 'Dev & Infra',
                tools: ['APIs', 'Webhooks', 'Serverless functions', 'GitHub'],
              },
            ].map((group, index) => (
              <motion.div key={index} variants={staggerItemVariants}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-gray-900 rounded-xl p-6 lg:p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-800"
                >
                  <h3 className="text-lg font-bold text-white mb-4">
                    {group.category}
                  </h3>
                  <ul className="space-y-2">
                    {group.tools.map((tool, toolIndex) => (
                      <motion.li
                        key={tool}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + toolIndex * 0.05 }}
                        whileHover={{ x: 5 }}
                        className="flex items-center text-gray-300"
                      >
                        <motion.svg
                          className="w-4 h-4 text-blue-400 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          whileHover={{ scale: 1.2, rotate: 90 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </motion.svg>
                        {tool}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </StaggerContainer>
        </Section>
      </RevealOnScroll>

      {/* About Section */}
      <RevealOnScroll>
        <Section
          id="about"
          title="About MOEEN"
          className="bg-gray-900/30"
        >
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.01 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 lg:p-8 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {[
                  "I'm MOEEN, an AI automation engineer and n8n specialist. I help teams replace repetitive manual tasks with reliable, transparent automations that actually match how they work – not how a generic tool thinks they should work.",
                  "My background combines software development and operations with hands-on experience building AI-assisted workflows. I've designed and shipped automations across sales, marketing, support, and internal operations.",
                  "I focus on building systems that are understandable, maintainable, and documented. That means clear n8n flows, logging and alerts, and clean handovers so your team isn't dependent on me for every change.",
                  "When I'm not wiring up flows, you'll probably find me experimenting with new AI tools, refining my personal knowledge workflows, or teaching others how to think in systems.",
                ].map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="text-gray-300 mb-4"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          </div>
        </Section>
      </RevealOnScroll>

      {/* Testimonials */}
      <RevealOnScroll>
        <Section id="testimonials" title="What clients say">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                name: 'Client Name',
                role: 'CEO, Company',
                quote:
                  "We gave MOEEN a vague description of what we wanted, and he turned it into a set of automations that our team now uses daily. The n8n flows are well-documented and easy to understand.",
              },
              {
                name: 'Client Name',
                role: 'Operations Manager, Company',
                quote:
                  'The automation system MOEEN built has saved us countless hours. The best part is how transparent everything is – we can see exactly what\'s happening at each step.',
              },
              {
                name: 'Client Name',
                role: 'Founder, Startup',
                quote:
                  'Working with MOEEN was a game-changer. He didn\'t just build what we asked for – he identified opportunities we didn\'t even see and built a system that scales with us.',
              },
            ].map((testimonial, index) => (
              <motion.div key={index} variants={staggerItemVariants}>
                <motion.div
                  whileHover={{ scale: 1.03, y: -5, rotateY: 2 }}
                  className="bg-gray-900 rounded-xl p-6 lg:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-800"
                >
                  <motion.div
                    className="mb-4"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
                  >
                    <svg
                      className="w-8 h-8 text-blue-400 mb-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10z" />
                    </svg>
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="text-gray-300 mb-4 italic"
                  >
                    "{testimonial.quote}"
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-300">{testimonial.role}</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </StaggerContainer>
        </Section>
      </RevealOnScroll>

      {/* FAQ Section */}
      <RevealOnScroll>
        <Section
          id="faq"
          title="Frequently Asked Questions"
          className="bg-gray-900/30"
        >
          <StaggerContainer className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'What kind of businesses do you work with?',
                a: 'I work with small to mid-sized teams, agencies, and solo founders who rely heavily on repeatable workflows – in sales, marketing, support, or internal operations. If you have clear processes and use modern tools, we can almost always automate something valuable.',
              },
              {
                q: 'Do I need to be technical to work with you?',
                a: 'No. I\'ll help you translate your existing processes into flows and logic. Your job is to explain how you work today; my job is to turn that into robust automations.',
              },
              {
                q: 'How do you charge?',
                a: 'For small, well-defined automations, I often work on fixed-scope projects. For larger systems or ongoing support, I work on a retainer or day rate. After our discovery call, I\'ll recommend the simplest option.',
              },
              {
                q: 'What tools do you prefer?',
                a: 'For orchestration, I prefer n8n because it\'s powerful, self-hostable, and highly flexible. I also work with tools like Make/Zapier when they make sense, plus standard AI, data, and communication tools.',
              },
              {
                q: 'Can you work with our existing stack?',
                a: 'Most likely, yes – as long as your tools have APIs, webhooks, or integrations. If they don\'t, we can often work around that with middleware or custom connectors.',
              },
            ].map((faq, index) => (
              <motion.div key={index} variants={staggerItemVariants}>
                <FAQItem question={faq.q} answer={faq.a} />
              </motion.div>
            ))}
          </StaggerContainer>
        </Section>
      </RevealOnScroll>

      {/* Contact Section */}
      <RevealOnScroll>
        <Section id="contact" title="Ready to automate something?" subtitle="Tell me about your current workflow, and I'll respond with 1–2 concrete automation ideas.">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.01 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 lg:p-8 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <ContactForm />
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-8 pt-8 border-t border-gray-800 text-center"
              >
                <p className="text-gray-300 mb-4">Prefer to book directly?</p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="#contact"
                    onClick={(e) => scrollToSection(e, '#contact')}
                    className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
                  >
                    Schedule a 20-min Call
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </Section>
      </RevealOnScroll>

      {/* Footer */}
      <footer className="bg-black text-gray-500 py-8 border-t border-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>
            © {new Date().getFullYear()} MOEEN. Built with n8n, AI, and a lot of love for clean
            automation.
          </p>
        </div>
      </footer>
    </div>
  );
}

// FAQ Accordion Component
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="bg-gray-900 rounded-lg shadow-md overflow-hidden border border-gray-800"
    >
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.02)' }}
        whileTap={{ scale: 0.98 }}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800 transition-colors"
      >
        <span className="font-semibold text-white">{question}</span>
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-5 h-5 text-gray-500 dark:text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </motion.svg>
      </motion.button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="px-6 py-4 text-gray-300 border-t border-gray-800">
          {answer}
        </div>
      </motion.div>
    </motion.div>
  );
}

// Contact Form Component
function ContactForm() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    automation: '',
    tools: '',
    budget: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! I\'ll get back to you soon.');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-white"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-white"
        />
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
          Company (optional)
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-white"
        />
      </div>
      <div>
        <label htmlFor="automation" className="block text-sm font-medium text-gray-300 mb-2">
          What do you want to automate? *
        </label>
        <textarea
          id="automation"
          name="automation"
          required
          rows={4}
          value={formData.automation}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-white"
        />
      </div>
      <div>
        <label htmlFor="tools" className="block text-sm font-medium text-gray-300 mb-2">
          What tools are you using today? *
        </label>
        <textarea
          id="tools"
          name="tools"
          required
          rows={3}
          value={formData.tools}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-white"
        />
      </div>
      <div>
        <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
          Budget range (optional)
        </label>
        <select
          id="budget"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-white"
        >
          <option value="">Select budget range</option>
          <option value="under-5k">Under $5,000</option>
          <option value="5k-10k">$5,000 - $10,000</option>
          <option value="10k-25k">$10,000 - $25,000</option>
          <option value="25k-plus">$25,000+</option>
        </select>
      </div>
      <motion.button
        type="submit"
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
      >
        Send Inquiry
      </motion.button>
    </form>
  );
}
