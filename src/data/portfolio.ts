export interface ImageAsset { path: string; alt: string }
export interface Profile {
  name: string
  initials: string
  role: string
  institution: string
  location: string
  headline: string
  introduction: string
  about: string[]
  facts: { label: string; value: string }[]
  email: string
  linkedin: string
  github?: string
  scholar?: string
  cv?: string
  portrait?: ImageAsset
  contact: string
}
export interface ResearchArea { title: string; description: string }
export interface Project {
  title: string; domain: string; description: string; tags: string[]
  status?: string; image?: ImageAsset; repository?: string; details?: string; results?: string
}
export interface TimelineEntry {
  logo?: ImageAsset
  title: string; organization: string; period: string; description: string; domain?: string
}
export interface SkillGroup { title: string; skills: string[] }
export interface Achievement { title: string; description: string }

const institution = 'Euromed University of Fez'
const degreeSchool = institution + ' — School of Digital Engineering and Artificial Intelligence'

export const profile: Profile = {
  name: 'Hiba Habiballah',
  initials: 'HH',
  portrait: { path: 'images/hiba-cutout-dark-hair.png', alt: 'Portrait of Hiba Habiballah' },
  role: 'PhD Researcher in Artificial Intelligence & Computer Vision',
  institution,
  location: 'Fez, Morocco',
  headline: 'Advancing label-efficient learning and robust computer vision for real-world applications.',
  introduction: 'I am a PhD researcher at Euromed University of Fez, specializing in Artificial Intelligence, Computer Vision, and label-efficient learning. My research focuses on developing self-supervised and semi-supervised learning approaches for robust plant disease detection under limited annotations and challenging real-world conditions.',
  about: [
    'I am an Artificial Intelligence researcher and Big Data Analytics engineer with a strong interest in developing reliable and data-efficient machine learning systems.',
    'My doctoral research investigates self-supervised and semi-supervised learning for computer vision, particularly in settings characterized by limited labeled data, distribution shifts, and challenging acquisition conditions.',
    'My academic and professional experience spans deep learning, computer vision, predictive analytics, data engineering, and business intelligence.',
    'I am especially interested in bridging methodological AI research with practical applications and real-world challenges.',
  ],
  facts: [
    { label: 'Current position', value: 'PhD Researcher' },
    { label: 'Institution', value: institution },
    { label: 'Engineering specialization', value: 'Big Data Analytics' },
    { label: 'Main research field', value: 'Artificial Intelligence & Computer Vision' },
  ],
  email: 'h.habiballah@ueuromed.org',
  linkedin: 'https://www.linkedin.com/in/hiba-habiballah-98a054230/',
  contact: 'I am open to research collaborations, academic opportunities, and meaningful discussions around Artificial Intelligence, Computer Vision, and label-efficient machine learning.',
}

export const research: ResearchArea[] = [
  { title: 'Self-Supervised Learning', description: 'Representation learning from unlabeled data to improve feature quality and reduce annotation requirements.' },
  { title: 'Semi-Supervised Learning', description: 'Combining labeled and unlabeled examples to improve learning efficiency and generalization.' },
  { title: 'Computer Vision', description: 'Developing visual recognition systems using deep neural networks and modern vision architectures.' },
  { title: 'Domain Adaptation & Robustness', description: 'Investigating reliable visual recognition under distribution shifts and variable field conditions.' },
  { title: 'Precision Agriculture', description: 'Applying advanced machine learning methods to plant disease recognition and agricultural intelligence.' },
  { title: 'Label-Efficient Learning', description: 'Investigating approaches that reduce annotation costs while maintaining predictive reliability.' },
]

export const keywords = ['Self-Supervised Learning', 'Semi-Supervised Learning', 'Deep Learning', 'Computer Vision', 'Vision Transformers', 'Domain Adaptation', 'Plant Disease Detection', 'Precision Agriculture']

export const projects: Project[] = [
  {
    title: 'Plant Disease Detection Research', domain: 'Precision Agriculture',
    description: 'Research on robust plant disease recognition using self-supervised and semi-supervised learning under limited annotations and variable field conditions.',
    tags: ['Computer Vision', 'Deep Learning', 'SSL', 'Semi-Supervised Learning', 'Precision Agriculture'], status: 'Ongoing research',
  },
  {
    title: 'Climate Prediction Using Meteorological Data', domain: 'Spatiotemporal Forecasting',
    description: 'Applied machine learning and deep learning models to spatiotemporal weather forecasting.',
    tags: ['Machine Learning', 'Deep Learning', 'Predictive Analytics', 'Time Series'],
  },
  {
    title: 'Facial Recognition and Emotion Classification', domain: 'Computer Vision',
    description: 'Explored facial recognition and emotion classification using Convolutional Neural Networks and Vision Transformers.',
    tags: ['Computer Vision', 'CNN', 'Vision Transformers', 'Image Classification'],
  },
  {
    title: 'Startup Outcome Prediction', domain: 'Predictive Analytics',
    description: 'Developed supervised machine learning models to classify startup outcomes based on historical company data.',
    tags: ['Machine Learning', 'Predictive Analytics', 'Classification'],
  },
  {
    title: 'Movie Recommendation System', domain: 'Recommender Systems',
    description: 'Developed a recommendation engine using collaborative filtering and neural networks in Python.',
    tags: ['Python', 'Recommendation Systems', 'Neural Networks'],
  },
  {
    title: 'Inventory Management Web Application', domain: 'Full-Stack Engineering',
    description: 'Built a full-stack inventory management application incorporating data visualization and real-time monitoring.',
    tags: ['Web Development', 'Data Visualization', 'Inventory Management'],
  },
]

export const experience: TimelineEntry[] = [
  {
    logo: { path: 'images/companies/totalenergies.svg', alt: 'TotalEnergies Marketing Maroc logo' },
    organization: 'TotalEnergies Marketing Maroc', title: 'Data Analyst Intern — Final-Year Engineering Internship',
    period: 'February 2025 – August 2025', domain: 'Business Intelligence · Multimodal Analytics',
    description: 'Designed Power BI dashboards for monitoring commercial KPIs and developed an intelligent brand-scoring approach based on multimodal data to support product assortment optimization, visibility analysis, and marketing decisions.',
  },
  {
    logo: { path: 'images/companies/enosis.png', alt: 'Enosis Group logo' },
    organization: 'Enosis Group', title: 'Data Engineering Intern', period: 'June 2024 – August 2024',
    domain: 'Data Engineering · Business Intelligence',
    description: 'Performed data-driven analyses of product performance in a manufacturing environment using Business Intelligence tools, producing visualizations and reports to support strategic decision-making.',
  },
  {
    logo: { path: 'images/companies/technocolabs.svg', alt: 'TechnoCollabs Software logo' },
    organization: 'TechnoCollabs Software', title: 'Machine Learning Engineering Intern',
    period: 'February 2024 – April 2024', domain: 'Supervised Learning · Classification',
    description: 'Developed supervised machine learning models to predict startup outcomes using historical business data.',
  },
]

export const education: TimelineEntry[] = [
  {
    organization: degreeSchool, title: 'PhD Program in Artificial Intelligence', period: 'November 2025 – 2028 (expected)',
    description: 'Self-supervised and semi-supervised learning for robust plant disease detection under limited annotations and variable field conditions.',
  },
  {
    organization: degreeSchool, title: 'Engineering Degree in Big Data Analytics', period: 'September 2022 – June 2025',
    description: 'Relevant coursework includes Deep Learning, Computer Vision, Advanced Statistics, Database Engineering, Business Intelligence, and Predictive Analytics.',
  },
  {
    organization: degreeSchool, title: 'Integrated Preparatory Program', period: 'October 2020 – June 2022',
    description: 'Relevant topics include Algorithms, Python, Java, Data Structures, Web Technologies, Machine Learning, Computer Networks, and Object-Oriented Programming.',
  },
]

export const skillGroups: SkillGroup[] = [
  { title: 'Artificial Intelligence & Machine Learning', skills: ['Machine Learning', 'Deep Learning', 'Supervised Learning', 'Semi-Supervised Learning', 'Predictive Analytics'] },
  { title: 'Computer Vision', skills: ['Image Classification', 'Object Detection', 'CNNs', 'Vision Transformers', 'Domain Adaptation', 'Few-Shot Learning'] },
  { title: 'Programming', skills: ['Python', 'R', 'Java', 'C/C++', 'SQL'] },
  { title: 'Databases & Data Analytics', skills: ['MySQL', 'Data Analysis', 'Business Intelligence', 'Power BI', 'Data Visualization'] },
]

export const achievements: Achievement[] = [
  { title: 'First Place — Royal Air Maroc Hackathon', description: 'Won first place in the Royal Air Maroc Hackathon.' },
  { title: 'AI Rally — Mentor and Jury Member', description: 'Participated in mentorship and evaluation as a mentor and jury member.' },
]
