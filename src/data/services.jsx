import React from 'react';
import { Smartphone, Globe, Layers, Settings, Share2, Code, Server, Cpu, Search, ShoppingBag, Box, Palette } from 'lucide-react';

export const SERVICES_DATA = [
  {
    id: 'cms-dev',
    shortId: '04',
    title: 'Web Development',
    icon: <Settings />,
    desc: 'Empower your team with flexible, secure, and lightning-fast web solutions tailored to your unique workflows.',
    fullDesc: 'We build bespoke web platforms and CMS solutions that give you complete control without sacrificing performance. From headless architectures to custom admin panels, we ensure your digital presence is both powerful and easy to manage.',
    features: ['Headless CMS Integration', 'Custom Web Platforms', 'High-Performance Architecture', 'Dynamic Content Delivery'],
    process: 'We start by understanding your content strategy, then build a scalable architecture that makes publishing effortless and fast.'
  },
  {
    id: 'mobile-dev',
    shortId: '01',
    title: 'Mobile App Development',
    icon: <Smartphone />,
    desc: 'Create captivating mobile experiences that keep users coming back. Fast, native, and beautifully designed.',
    fullDesc: 'We engineer high-performance mobile applications for iOS and Android that dominate the app stores. Our cross-platform and native solutions are designed for speed, security, and an unforgettable user journey.',
    features: ['Native & Cross-Platform (React Native)', 'Intuitive UX/UI', 'Offline Support', 'Secure API Integration'],
    process: 'From wireframes to app store deployment, we use agile methodologies to iterate quickly and deliver a flawless mobile product.'
  },
  {
    id: 'web-apps',
    shortId: '02',
    title: 'Custom Web Applications',
    icon: <Globe />,
    desc: 'Transform complex business logic into sleek, intuitive web applications that scale effortlessly.',
    fullDesc: 'We specialize in building complex, data-driven web applications that streamline your business operations. Using modern stacks like React and Node.js, we deliver enterprise-grade performance and security.',
    features: ['Enterprise-Grade Security', 'Real-Time Data Processing', 'Scalable Cloud Architecture', 'Automated Workflows'],
    process: 'We map out your business logic and architect a robust solution that performs flawlessly under heavy load.'
  },
  {
    id: 'seo-services',
    shortId: '03',
    title: 'SEO & Growth',
    icon: <Search />,
    desc: 'Dominate search rankings and drive high-intent traffic directly to your digital doorstep.',
    fullDesc: 'Visibility is everything. Our data-backed SEO strategies go beyond keywords, focusing on technical optimization, content authority, and user experience to ensure you outrank the competition.',
    features: ['Technical SEO & Core Web Vitals', 'High-Converting Content Strategy', 'Authoritative Link Building', 'Local & Global Optimization'],
    process: 'We conduct deep technical audits, optimize your site architecture, and execute content strategies that guarantee long-term organic growth.'
  },
  {
    id: 'ecommerce-solutions',
    shortId: '05',
    title: 'eCommerce Solutions',
    icon: <ShoppingBag />,
    desc: 'Convert browsers into buyers with lightning-fast, high-converting digital storefronts.',
    fullDesc: 'We build immersive eCommerce experiences that minimize friction and maximize sales. From custom Shopify builds to bespoke headless commerce platforms, we engineer for maximum conversion rates.',
    features: ['Headless Commerce', 'Frictionless Checkout Flows', 'Advanced Inventory Management', 'Multi-Channel Integration'],
    process: 'We analyze the buyer journey, eliminate drop-off points, and engineer a storefront optimized for speed and revenue.'
  },
  {
    id: 'social-media-marketing',
    shortId: '06',
    title: 'Social Media Marketing',
    icon: <Share2 />,
    desc: "Ignite your brand's reach and build a loyal community across all major social platforms.",
    fullDesc: "We don't just post; we create movements. Our social media strategies are designed to amplify your brand voice, drive viral engagement, and convert followers into brand advocates.",
    features: ['Viral Content Creation', 'Data-Driven Ad Campaigns', 'Influencer Partnerships', 'Community Building'],
    process: 'We identify where your audience lives, craft compelling narratives, and optimize ad spend for maximum ROI.'
  },
  {
    id: 'ui-ux-designing',
    shortId: '08',
    title: 'UI/UX Design',
    icon: <Palette />,
    desc: 'Craft stunning, intuitive interfaces that turn complex processes into delightful user experiences.',
    fullDesc: 'Design is how it works. We blend aesthetic brilliance with deep user psychology to create interfaces that are not only visually breathtaking but fundamentally easy to use.',
    features: ['Data-Driven User Research', 'Interactive Prototyping', 'Design Systems', 'Micro-Interactions & Animation'],
    process: 'We start with empathy, wireframe the optimal user flow, and apply striking visual designs that elevate your brand.'
  },
  {
    id: 'saas-solutions',
    shortId: '07',
    title: 'SaaS Engineering',
    icon: <Box />,
    desc: 'Launch your subscription product with a scalable, secure, and hyper-fast architecture.',
    fullDesc: 'We bring SaaS ideas to life. From MVP to enterprise scale, we architect multi-tenant platforms that are built for rapid user acquisition, reliable uptime, and recurring revenue.',
    features: ['Multi-Tenant Architecture', 'Subscription & Billing Integration', 'Scalable Microservices', 'Real-Time Analytics'],
    process: 'We focus on building a robust MVP quickly, allowing you to validate your market and scale operations smoothly.'
  }
];
