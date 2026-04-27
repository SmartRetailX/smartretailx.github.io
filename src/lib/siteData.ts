export type FileResource = {
  title: string;
  description: string;
  href: string;
  expectedPath: string;
  type: string;
  stage: 'Produced' | 'Pending' | 'Future';
};

export type Milestone = {
  title: string;
  date: string;
  marks: string;
  status: 'Completed' | 'Upcoming' | 'Pending';
  summary: string;
  deliverables: string[];
};

export type TeamMember = {
  studentId: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  linkedinUrl: string;
  githubUrl: string;
  focus: string;
  initials: string;
  photoSrc: string;
};

const publicFile = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const projectSummary = {
  name: 'SmartRetailX',
  tagline: 'Personalized Retail Platform',
  institution: 'Sri Lankan Retail Innovation',
  abstract:
    'SmartRetailX is an integrated e-commerce research platform that connects Sinhala voice interaction, behavior-driven customer segmentation, predictive business intelligence, and personalized promotion delivery. The system turns retail data into inclusive, explainable, and measurable customer experiences.',
};

export const systemModules = [
  {
    title: 'Sinhala Voice Assistant',
    summary:
      'Localized ASR and intent detection for Sinhala-speaking shoppers, optimized for retail vocabulary and accessible conversational commerce.',
    metric: '13.5% WER',
  },
  {
    title: 'Customer Segmentation',
    summary:
      'RFM analysis, K-Means clustering, and loyalty tiering to identify customer lifecycle states and reward value-driving behavior.',
    metric: '4 loyalty tiers',
  },
  {
    title: 'BI Dashboard ML Service',
    summary:
      'Demand forecasting with Prophet, XGBoost, ensemble evaluation, SHAP explainability, and proactive stockout alerts.',
    metric: '92.9% 30-day accuracy',
  },
  {
    title: 'Promotion Engine',
    summary:
      'Uplift modeling, collaborative filtering, association rules, and business constraints to recommend high-ROI treatments.',
    metric: '566.7% ROI',
  },
];

export const domainSections = [
  {
    title: 'Literature Survey',
    body:
      'Modern retail platforms increasingly combine speech interfaces, recommendation systems, time-series forecasting, and loyalty analytics. Existing research shows that personalization can raise engagement, while explainable models help managers trust automated decisions.',
  },
  {
    title: 'Research Gap',
    body:
      'Many e-commerce solutions under-serve Sinhala-speaking users, treat segmentation as a static dashboard activity, and rely on broad discount campaigns that do not estimate incremental uplift. Forecasting outputs are also often disconnected from operational inventory decisions.',
  },
  {
    title: 'Research Problem',
    body:
      'Retailers need a unified, locally relevant intelligence layer that can understand customers, predict demand, explain recommendations, and deliver personalized interventions without excluding Sinhala-speaking shoppers.',
  },
  {
    title: 'Research Objectives',
    body:
      'Build an end-to-end SmartRetailX prototype; evaluate Sinhala voice accuracy; identify actionable customer segments; forecast demand with explainable models; and generate promotion treatments that improve conversion and marketing ROI.',
  },
  {
    title: 'Methodology',
    body:
      'The project follows a modular microservice approach. Transaction data is prepared for RFM analysis, forecasting, and promotion modeling, while voice input is processed through ASR and intent layers. Results are presented through a web interface designed for clear navigation and accessible file review.',
  },
  {
    title: 'Technologies Used',
    body:
      'React, TypeScript, Tailwind CSS, FastAPI, Flask, NestJS, PostgreSQL, Docker, Kubernetes, Prophet, XGBoost, SHAP, Scikit-learn, PyTorch, TensorFlow, and collaborative filtering libraries.',
  },
];

export const milestones: Milestone[] = [
  {
    title: 'Project Proposal',
    date: 'Completed (2025 - date finalized by panel)',
    marks: '12%',
    status: 'Completed',
    summary:
      'Combined proposal evaluation including both the initial presentation and proposal report submission for the research problem, objectives, methodology, and project direction.',
    deliverables: [
      'Proposal presentation slides',
      'Proposal report document',
      'Problem statement, objectives, and methodology justification',
    ],
  },
  {
    title: 'Progress Presentation-1',
    date: 'Completed (2025 - date finalized by panel)',
    marks: '15%',
    status: 'Completed',
    summary:
      'Mid-phase progress review covering completed modules, initial model outputs, implementation evidence, and risk mitigation updates.',
    deliverables: ['Progress presentation-1 slides', 'Prototype demonstration evidence', 'Updated implementation plan'],
  },
  {
    title: 'Progress Presentation-2',
    date: 'Completed (2026 - date finalized by panel)',
    marks: '18%',
    status: 'Completed',
    summary:
      'Advanced progress evaluation with near-complete integration, model performance review, and readiness status before final assessment.',
    deliverables: ['Progress presentation-2 slides', 'Integration and evaluation evidence', 'Final phase execution plan'],
  },
  {
    title: 'Final Report',
    date: '13th May 2026',
    marks: '19%',
    status: 'Upcoming',
    summary:
      'Combined final report assessment including main thesis submission and group report components covering implementation, evaluation, and team integration outcomes.',
    deliverables: ['Final thesis (main report)', 'Group report component', 'Evaluation and integration evidence'],
  },
  {
    title: 'Final Assessment',
    date: '27th April to 06th May 2026',
    marks: '10%',
    status: 'Upcoming',
    summary:
      'Final presentation and live demonstration of the complete SmartRetailX system, research outcomes, and project impact.',
    deliverables: ['Final presentation slides', 'Live demonstration', 'System walkthrough and Q&A preparation'],
  },
  {
    title: 'Viva',
    date: '27th April to 06th May 2026',
    marks: '10%',
    status: 'Upcoming',
    summary:
      'Panel interview evaluating individual technical knowledge, project decisions, implementation depth, and future improvements.',
    deliverables: ['Individual viva preparation notes', 'Technical defense talking points', 'Repository and artifact readiness'],
  },
  {
    title: 'Website Submission',
    date: '26th April 2026',
    marks: '2%',
    status: 'Upcoming',
    summary:
      'Submission of the project website including navigation, module pages, resource links, and deployment accessibility checks.',
    deliverables: ['Hosted website link', 'Verified page content', 'Deployment and access evidence'],
  },
  {
    title: 'Research Paper',
    date: '08th May 2026',
    marks: '10%',
    status: 'Upcoming',
    summary:
      'Research paper submission summarizing the problem, methodology, experiments, findings, and scientific contribution.',
    deliverables: ['Research paper manuscript', 'Formatting and citation compliance', 'Submission confirmation'],
  },
  {
    title: 'Checklist Documents',
    date: '30th April 2026',
    marks: '2%',
    status: 'Upcoming',
    summary:
      'Submission of required assessment checklists and mandatory administrative academic documents.',
    deliverables: ['Completed checklist forms', 'Signed submissions', 'Administrative compliance evidence'],
  },
  {
    title: 'Logbook',
    date: '27th April to 06th May 2026',
    marks: '2%',
    status: 'Upcoming',
    summary:
      'Submission of the development logbook documenting weekly progress, decisions, blockers, and task completion records.',
    deliverables: ['Updated logbook', 'Task and timeline evidence', 'Supervisor review notes'],
  },
];

export const documents: FileResource[] = [
  {
    title: 'Project Charter',
    description: 'The initial project charter describing scope, team responsibilities, and approval details.',
    href: publicFile('files/documents/project-charter.pdf'),
    expectedPath: 'public/files/documents/project-charter.pdf',
    type: 'PDF',
    stage: 'Produced',
  },
  {
    title: 'Proposal Document',
    description: 'The complete proposal document covering the research problem, objectives, and planned methodology.',
    href: publicFile('files/documents/proposal-document.pdf'),
    expectedPath: 'public/files/documents/proposal-document.pdf',
    type: 'PDF',
    stage: 'Produced',
  },
  {
    title: 'Checklist 1',
    description: 'First checklist submission and supporting administrative documents.',
    href: publicFile('files/documents/checklist-1.pdf'),
    expectedPath: 'public/files/documents/checklist-1.pdf',
    type: 'PDF',
    stage: 'Produced',
  },
  {
    title: 'Checklist 2',
    description: 'Second checklist submission planned for a future milestone.',
    href: publicFile('files/documents/checklist-2.pdf'),
    expectedPath: 'public/files/documents/checklist-2.pdf',
    type: 'PDF',
    stage: 'Future',
  },
  {
    title: 'Final Report - Main',
    description: 'The main final project report for the SmartRetailX research implementation.',
    href: publicFile('files/documents/final-report-main.pdf'),
    expectedPath: 'public/files/documents/final-report-main.pdf',
    type: 'PDF',
    stage: 'Pending',
  },
  {
    title: 'Final Report - Member 01',
    description: 'Individual final report contribution for team member 01.',
    href: publicFile('files/documents/final-report-member-01.pdf'),
    expectedPath: 'public/files/documents/final-report-member-01.pdf',
    type: 'PDF',
    stage: 'Pending',
  },
  {
    title: 'Final Report - Member 02',
    description: 'Individual final report contribution for team member 02.',
    href: publicFile('files/documents/final-report-member-02.pdf'),
    expectedPath: 'public/files/documents/final-report-member-02.pdf',
    type: 'PDF',
    stage: 'Pending',
  },
  {
    title: 'Final Report - Member 03',
    description: 'Individual final report contribution for team member 03.',
    href: publicFile('files/documents/final-report-member-03.pdf'),
    expectedPath: 'public/files/documents/final-report-member-03.pdf',
    type: 'PDF',
    stage: 'Pending',
  },
  {
    title: 'Final Report - Member 04',
    description: 'Individual final report contribution for team member 04.',
    href: publicFile('files/documents/final-report-member-04.pdf'),
    expectedPath: 'public/files/documents/final-report-member-04.pdf',
    type: 'PDF',
    stage: 'Pending',
  },
];

export const presentations: FileResource[] = [
  {
    title: 'Proposal Presentation',
    description: 'Slides used for the proposal presentation.',
    href: publicFile('files/slides/proposal-presentation.pdf'),
    expectedPath: 'public/files/slides/proposal-presentation.pdf',
    type: 'PDF',
    stage: 'Produced',
  },
  {
    title: 'Progress Presentation 1',
    description: 'Slides used for the first progress presentation.',
    href: publicFile('files/slides/progress-presentation-1.pdf'),
    expectedPath: 'public/files/slides/progress-presentation-1.pdf',
    type: 'PDF',
    stage: 'Produced',
  },
  {
    title: 'Progress Presentation 2',
    description: 'Slides used for the second progress presentation.',
    href: publicFile('files/slides/progress-presentation-2.pdf'),
    expectedPath: 'public/files/slides/progress-presentation-2.pdf',
    type: 'PDF',
    stage: 'Produced',
  },
  {
    title: 'Final Presentation',
    description: 'Slides reserved for the final assessment presentation.',
    href: publicFile('files/slides/final-presentation.pdf'),
    expectedPath: 'public/files/slides/final-presentation.pdf',
    type: 'PDF',
    stage: 'Pending',
  },
];

export const teamMembers: TeamMember[] = [
 {
    studentId: 'IT22588814',
    name: 'Pramuditha W. G. S.',
    role: 'Group Leader',
    email: 'it22588814@my.sliit.lk',
    phone: '+94 77 123 0577',
    linkedinUrl: 'https://lk.linkedin.com/in/shanelkapramuditha',
    githubUrl: 'https://github.com/ShanelkaPramuditha',
    focus: 'Sinhala Voice Assistant',
    initials: 'PW',
    photoSrc: publicFile('images/members/shanelka.jpg'),
  },
  {
    studentId: 'IT22367044',
    name: 'Nayanapriya H. T. E.',
    role: 'Group Member',
    email: 'it22367044@my.sliit.lk',
    phone: '+94 71 776 4945',
    linkedinUrl: 'www.linkedin.com/in/eshan-nayanapriya-5940b72b0',
    githubUrl: 'https://github.com/Eshan-Nayanapriya',
    focus: 'Personalized Promotion Engine',
    initials: 'HN',
    photoSrc: publicFile('images/members/eshan.jpg'),
  },
  {
    studentId: 'IT22326072',
    name: 'Nimsara S. P. N.',
    role: 'Group Member',
    email: 'it22326072@my.sliit.lk',
    phone: '+94 76 527 7815',
    linkedinUrl: 'www.linkedin.com/in/nadeesh-n',
    githubUrl: 'https://github.com/ItzNadeesH',
    focus: 'Customer Segmentation',
    initials: 'NN',
    photoSrc: publicFile('images/members/nadeesh.jpg'),
  },
  {
    studentId: 'IT22306968',
    name: 'Dinuwan W. T.',
    role: 'Group Member',
    email: 'it22306968@my.sliit.lk',
    phone: '+94 70 415 1942',
    linkedinUrl: 'https://lk.linkedin.com/in/thathsaradinuwan',
    githubUrl: 'https://github.com/thathsaraDinu',
    focus: 'BI Dashboard ML Service',
    initials: 'DW',
    photoSrc: publicFile('images/members/thathsara.jpg'),
  },
];
