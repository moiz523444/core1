import React from 'react';
import { Smartphone, Globe, Layers, Settings, Shield, Code, Server, Cpu, Search, ShoppingBag, Box, Cloud } from 'lucide-react';

export const SERVICES_DATA = [
  {
    id: 'mobile-dev',
    shortId: '01',
    title: 'Mobile App Development',
    icon: <Smartphone />,
    desc: 'Engage your users on the go with fast, intuitive iOS and Android apps designed to increase retention.',
    fullDesc: 'We specialize in crafting native and cross-platform mobile applications that provide an intuitive experience for your users. From concept to launch, we build products that ensure seamless functionality and engaging interfaces.',
    features: ['Native iOS & Android', 'Cross-Platform Solutions', 'User-Centric UI/UX', 'Secure Authentication', 'App Store Optimization'],
    process: 'Our approach starts with understanding your business goals, followed by agile development and rigorous testing to deliver a flawless mobile experience.'
  },
  {
    id: 'web-apps',
    shortId: '02',
    title: 'Web App Development',
    icon: <Globe />,
    desc: 'Automate your workflows and scale your business with custom, high-performance web applications.',
    fullDesc: 'Modern businesses require scalable, secure, and fast web solutions. We build enterprise-grade web apps using React, Next.js, and reliable server-side architectures to help you manage and grow your operations.',
    features: ['Custom Web Applications', 'API Integrations', 'Progressive Web Apps (PWA)', 'SEO-Friendly Structure', 'Cloud Deployment'],
    process: 'We focus on building a strong technical foundation that can handle high traffic while maintaining fast load times.'
  },
  {
    id: 'seo-services',
    shortId: '03',
    title: 'SEO Services',
    icon: <Search />,
    desc: 'Stop hiding on page 2. Get found by high-intent customers actively searching for your services.',
    fullDesc: 'Being visible on search engines is essential for business growth. We employ proven SEO strategies, from technical audits to on-page optimization, ensuring your target audience can easily find you.',
    features: ['Technical SEO Audits', 'Keyword Research', 'Content Strategy', 'Link Building', 'Analytics & Reporting'],
    process: 'We analyze search trends and optimize your website to build a sustainable source of organic traffic and leads.'
  },
  {
    id: 'cms-dev',
    shortId: '04',
    title: 'CMS Web Development',
    icon: <Settings />,
    desc: 'Take control of your content with easy-to-use admin panels. No coding skills required.',
    fullDesc: 'Take control of your content without needing technical skills. We build bespoke CMS solutions that are secure, fast, and intuitive, tailored exactly to your business workflows.',
    features: ['Custom Admin Panels', 'API-First Approach', 'Role-Based Permissions', 'Automated Content Pipelines'],
    process: 'We build the backend to be as user-friendly as the frontend, ensuring your marketing team can publish content effortlessly.'
  },
  {
    id: 'ecommerce-solutions',
    shortId: '05',
    title: 'eCommerce Solutions',
    icon: <ShoppingBag />,
    desc: 'Turn clicks into customers. We build lightning-fast online stores with frictionless checkouts.',
    fullDesc: 'Turn website visitors into loyal customers. We build high-performance eCommerce platforms that combine beautiful design with the technical reliability needed for smooth online shopping.',
    features: ['Custom Storefronts', 'Multi-Currency & Language', 'Secure Payment Gateways', 'Inventory Management', 'Advanced Product Filtering'],
    process: 'We focus on optimizing the user journey and transaction speed to maximize your sales and reduce cart abandonment.'
  },
  {
    id: 'cyber-security',
    shortId: '06',
    title: 'Cyber Security',
    icon: <Shield />,
    desc: 'Protect your valuable data and user trust with robust, enterprise-grade security protocols.',
    fullDesc: 'Security is not an afterthought; it is a necessity. We provide comprehensive cyber security services, protecting your sensitive data and digital assets through advanced encryption and regular audits.',
    features: ['Vulnerability Assessments', 'Data Encryption', 'Penetration Testing', 'Security Compliance', 'Incident Response'],
    process: 'We implement modern security protocols to ensure your technical foundation remains safe from external threats and breaches.'
  },
  {
    id: 'saas-solutions',
    shortId: '07',
    title: 'SaaS Solutions',
    icon: <Box />,
    desc: 'Launch your subscription platform faster. Scalable architecture built for recurring revenue.',
    fullDesc: 'Bring your software product to the market faster. We architect and engineer SaaS platforms that are scalable, secure, and ready for high user acquisition and reliable service delivery.',
    features: ['Multi-Tenant Architecture', 'Subscription Management', 'Automated Scaling', 'API Development', 'Analytics Dashboards'],
    process: 'Our SaaS engineering focuses on modularity and speed, allowing you to iterate quickly based on user feedback and business needs.'
  },
  {
    id: 'cloud-it-services',
    shortId: '08',
    title: 'Cloud & IT Services',
    icon: <Cloud />,
    desc: 'Ensure 99.9% uptime. We handle your infrastructure so you can handle your business.',
    fullDesc: 'Ensure your business is always online and performing at its best. We provide professional cloud and IT services, focusing on automated deployment, regular backups, and technical reliability.',
    features: ['AWS / Azure / GCP Hosting', 'Infrastructure Management', 'DevOps & CI/CD', '24/7 Monitoring', 'Disaster Recovery'],
    process: 'We prioritize uptime and scalability, ensuring your digital infrastructure can handle your business demands without interruption.'
  }
];
