'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import BackToTop from '@/components/BackToTop';
import Section from '@/components/Section';
import Card from '@/components/Card';

export default function Home() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <BackToTop />

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center pt-20 lg:pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"
      >
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="text-center lg:text-left">
              <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
                AI Automation Engineer · n8n Specialist
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                I build AI-powered automations that{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  work while you sleep
                </span>
                .
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
                I design and deploy custom n8n flows, AI agents, and workflow automations that
                reduce manual work, speed up operations, and let your team focus on high-value
                tasks instead of repetitive clicks.
              </p>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto lg:mx-0">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">
                    30+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Automations shipped
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                  <div className="text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400">
                    100+ hrs/month
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Manual work eliminated
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                  <div className="text-2xl md:text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                    5+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Core tools integrated
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
                <Link
                  href="#contact"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl text-center"
                >
                  Book a 20-min Call
                </Link>
                <Link
                  href="#automations"
                  onClick={(e) => scrollToSection(e, '#automations')}
                  className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all text-center"
                >
                  View My Automations
                </Link>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                No fluff. We map your automations and estimate impact.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                Prefer async? Scroll down for live demos, screenshots, and technical breakdowns.
              </p>
            </div>

            {/* Right: Visual Placeholder */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl transform rotate-6 opacity-20"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl">
                  <div className="space-y-4">
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                    <div className="h-32 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg mt-6 flex items-center justify-center">
                      <svg
                        className="w-16 h-16 text-blue-600 dark:text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Strip */}
      <Section
        id="tools-strip"
        className="bg-gray-50 dark:bg-gray-800/50 py-8"
      >
        <div className="text-center mb-6">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
            I build with tools you already use
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60 dark:opacity-40">
          {['n8n', 'OpenAI', 'Make.com', 'Notion', 'Airtable', 'Slack', 'HubSpot', 'Pipedrive'].map(
            (tool) => (
              <div
                key={tool}
                className="text-lg font-semibold text-gray-700 dark:text-gray-300"
              >
                {tool}
              </div>
            )
          )}
        </div>
      </Section>

      {/* Services Section */}
      <Section
        id="services"
        title="What I build for teams"
        subtitle="From single n8n flows to full AI-powered systems, I help you automate the right things in the right order."
      >
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
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
            <Card key={index} hover>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                    <svg
                      className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {bullet}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* Automation Gallery */}
      <Section
        id="automations"
        title="Automation Gallery"
        subtitle="A closer look at some of the n8n flows and AI automations I've built. Each example can be adapted to your stack."
        className="bg-gray-50 dark:bg-gray-800/30"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
            <Card key={index} hover>
              <div className="flex flex-wrap gap-2 mb-3">
                {automation.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-medium rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {automation.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                {automation.description}
              </p>
              <div className="mb-4">
                <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Flow Summary:
                </p>
                <ul className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                  {automation.flow.map((step, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
              {automation.result && (
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm font-medium text-green-700 dark:text-green-400">
                    Result: {automation.result}
                  </p>
                </div>
              )}
              <button className="mt-4 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
                View Flow Details →
              </button>
            </Card>
          ))}
        </div>
      </Section>

      {/* Case Studies */}
      <Section
        id="case-studies"
        title="Selected Case Studies"
        subtitle="A deeper look into how I design, build, and ship automations that actually get used."
      >
        <div className="space-y-12">
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
            <Card key={index} className="max-w-4xl mx-auto">
              <div className="mb-4">
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  {study.label}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
                  {study.title}
                </h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Problem:</h4>
                  <p className="text-gray-600 dark:text-gray-400">{study.problem}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Solution:</h4>
                  <p className="text-gray-600 dark:text-gray-400">{study.solution}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Tech & Tools:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {study.tech.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Architecture Overview:
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-mono bg-gray-50 dark:bg-gray-800 p-3 rounded">
                    {study.architecture}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Impact:</h4>
                  <ul className="space-y-2">
                    {study.impact.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-600 dark:text-gray-400">
                        <svg
                          className="w-5 h-5 text-green-600 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Process Section */}
      <Section
        id="process"
        title="How we'll work together"
        subtitle="A simple, transparent process designed to get you from idea → working automation quickly."
        className="bg-gray-50 dark:bg-gray-800/30"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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
            <div key={index} className="relative">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{process.description}</p>
              </div>
              {index < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
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
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Tech Stack */}
      <Section
        id="tech-stack"
        title="Tools & Technologies"
        subtitle="I choose tools that are reliable, well-supported, and flexible enough to grow with your business."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <Card key={index}>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.tools.map((tool) => (
                  <li
                    key={tool}
                    className="flex items-center text-gray-600 dark:text-gray-400"
                  >
                    <svg
                      className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2"
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
                    {tool}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* About Section */}
      <Section
        id="about"
        title="About MOEEN"
        className="bg-gray-50 dark:bg-gray-800/30"
      >
        <div className="max-w-3xl mx-auto">
          <Card>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                I'm MOEEN, an AI automation engineer and n8n specialist. I help teams replace
                repetitive manual tasks with reliable, transparent automations that actually match
                how they work – not how a generic tool thinks they should work.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                My background combines software development and operations with hands-on experience
                building AI-assisted workflows. I've designed and shipped automations across sales,
                marketing, support, and internal operations.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                I focus on building systems that are understandable, maintainable, and documented.
                That means clear n8n flows, logging and alerts, and clean handovers so your team
                isn't dependent on me for every change.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                When I'm not wiring up flows, you'll probably find me experimenting with new AI
                tools, refining my personal knowledge workflows, or teaching others how to think in
                systems.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Testimonials */}
      <Section id="testimonials" title="What clients say">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
            <Card key={index}>
              <div className="mb-4">
                <svg
                  className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10z" />
                </svg>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section
        id="faq"
        title="Frequently Asked Questions"
        className="bg-gray-50 dark:bg-gray-800/30"
      >
        <div className="max-w-3xl mx-auto space-y-4">
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
            <FAQItem key={index} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Ready to automate something?" subtitle="Tell me about your current workflow, and I'llrespond with 1–2 concrete automation ideas.">
        <div className="max-w-2xl mx-auto">
          <Card>
            <ContactForm />
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
              <p className="text-gray-600 dark:text-gray-400 mb-4">Prefer to book directly?</p>
              <Link
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
              >
                Schedule a 20-min Call
              </Link>
            </div>
          </Card>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-gray-400 py-8">
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
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
      >
        <span className="font-semibold text-gray-900 dark:text-white">{question}</span>
        <svg
          className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`}
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
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 py-4 text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
          {answer}
        </div>
      )}
    </div>
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
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        />
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Company (optional)
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        />
      </div>
      <div>
        <label htmlFor="automation" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          What do you want to automate? *
        </label>
        <textarea
          id="automation"
          name="automation"
          required
          rows={4}
          value={formData.automation}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        />
      </div>
      <div>
        <label htmlFor="tools" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          What tools are you using today? *
        </label>
        <textarea
          id="tools"
          name="tools"
          required
          rows={3}
          value={formData.tools}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        />
      </div>
      <div>
        <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Budget range (optional)
        </label>
        <select
          id="budget"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        >
          <option value="">Select budget range</option>
          <option value="under-5k">Under $5,000</option>
          <option value="5k-10k">$5,000 - $10,000</option>
          <option value="10k-25k">$10,000 - $25,000</option>
          <option value="25k-plus">$25,000+</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
      >
        Send Inquiry
      </button>
    </form>
  );
}
