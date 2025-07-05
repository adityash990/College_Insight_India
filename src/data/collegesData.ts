export interface College {
  id: string;
  name: string;
  location: string;
  ranking: number;
  established: number;
  type: 'Government' | 'Private' | 'Deemed';
  nirf_ranking: number;
  courses: Course[];
  placement_stats: PlacementStats;
  facilities: string[];
  image: string;
  accreditation: string[];
  campus_size: string;
  student_strength: number;
  faculty_ratio: string;
  research_output: number;
  international_collaborations: number;
}

export interface Course {
  id: string;
  name: string;
  department: string;
  duration: string;
  fees: number;
  seats: number;
  placement_rate: number;
  avg_package: number;
  highest_package: number;
  top_recruiters: string[];
  specializations: string[];
  industry_partnerships: string[];
}

export interface PlacementStats {
  overall_placement_rate: number;
  avg_package: number;
  highest_package: number;
  median_package: number;
  total_offers: number;
  top_recruiters: string[];
  placement_trends: { year: number; rate: number; avg_package: number }[];
  sector_wise_placement: { sector: string; percentage: number; avg_package: number }[];
  company_tier_distribution: { tier: string; percentage: number }[];
}

export const collegesData: College[] = [
  {
    id: 'iit-bombay',
    name: 'Indian Institute of Technology Bombay',
    location: 'Mumbai, Maharashtra',
    ranking: 1,
    established: 1958,
    type: 'Government',
    nirf_ranking: 3,
    image: 'https://i.ibb.co/SXBDXHy3/Screenshot-2025-07-05-114153.png',
    accreditation: ['NAAC A++', 'NBA', 'ABET'],
    campus_size: '550 acres',
    student_strength: 11000,
    faculty_ratio: '1:8',
    research_output: 2500,
    international_collaborations: 150,
    courses: [
      {
        id: 'cse-iitb',
        name: 'Computer Science and Engineering',
        department: 'Computer Science',
        duration: '4 years',
        fees: 200000,
        seats: 120,
        placement_rate: 100,
        avg_package: 2800000,
        highest_package: 15000000,
        top_recruiters: ['Google', 'Microsoft', 'Goldman Sachs', 'Morgan Stanley'],
        specializations: ['AI/ML', 'Data Science', 'Cybersecurity', 'Software Engineering'],
        industry_partnerships: ['Google', 'Microsoft', 'IBM', 'Intel']
      },
      {
        id: 'ece-iitb',
        name: 'Electronics and Communication Engineering',
        department: 'Electronics',
        duration: '4 years',
        fees: 200000,
        seats: 90,
        placement_rate: 98,
        avg_package: 2200000,
        highest_package: 12000000,
        top_recruiters: ['Intel', 'Qualcomm', 'Samsung', 'Broadcom'],
        specializations: ['VLSI Design', 'Signal Processing', 'Communication Systems', 'Embedded Systems'],
        industry_partnerships: ['Intel', 'Qualcomm', 'Samsung', 'Texas Instruments']
      }
    ],
    placement_stats: {
      overall_placement_rate: 97.5,
      avg_package: 2300000,
      highest_package: 15000000,
      median_package: 2000000,
      total_offers: 1250,
      top_recruiters: ['Google', 'Microsoft', 'Goldman Sachs', 'Morgan Stanley', 'Intel'],
      placement_trends: [
        { year: 2020, rate: 94, avg_package: 1800000 },
        { year: 2021, rate: 96, avg_package: 2000000 },
        { year: 2022, rate: 97, avg_package: 2200000 },
        { year: 2023, rate: 98, avg_package: 2300000 }
      ],
      sector_wise_placement: [
        { sector: 'Technology', percentage: 45, avg_package: 2800000 },
        { sector: 'Finance', percentage: 25, avg_package: 3200000 },
        { sector: 'Consulting', percentage: 15, avg_package: 2500000 },
        { sector: 'Core Engineering', percentage: 15, avg_package: 1800000 }
      ],
      company_tier_distribution: [
        { tier: 'Tier 1', percentage: 60 },
        { tier: 'Tier 2', percentage: 30 },
        { tier: 'Tier 3', percentage: 10 }
      ]
    },
    facilities: ['Wi-Fi Campus', 'Library', 'Sports Complex', 'Hostels', 'Medical Center', 'Innovation Labs']
  },
  {
    id: 'iit-delhi',
    name: 'Indian Institute of Technology Delhi',
    location: 'New Delhi, Delhi',
    ranking: 2,
    established: 1961,
    type: 'Government',
    nirf_ranking: 2,
    image: 'https://i.ibb.co/vCnZjWDz/Screenshot-2025-07-05-114216.png',
    accreditation: ['NAAC A++', 'NBA', 'ABET'],
    campus_size: '325 acres',
    student_strength: 9500,
    faculty_ratio: '1:9',
    research_output: 2200,
    international_collaborations: 140,
    courses: [
      {
        id: 'cse-iitd',
        name: 'Computer Science and Engineering',
        department: 'Computer Science',
        duration: '4 years',
        fees: 200000,
        seats: 110,
        placement_rate: 100,
        avg_package: 2700000,
        highest_package: 14500000,
        top_recruiters: ['Google', 'Microsoft', 'Amazon', 'Facebook', 'Goldman Sachs'],
        specializations: ['AI/ML', 'Data Science', 'Cybersecurity', 'Software Engineering'],
        industry_partnerships: ['Google', 'Microsoft', 'Amazon', 'Intel']
      },
      {
        id: 'mech-iitd',
        name: 'Mechanical Engineering',
        department: 'Mechanical',
        duration: '4 years',
        fees: 200000,
        seats: 85,
        placement_rate: 96,
        avg_package: 1800000,
        highest_package: 8500000,
        top_recruiters: ['Tata Motors', 'Mahindra', 'L&T', 'Bajaj Auto'],
        specializations: ['Automotive', 'Manufacturing', 'Thermal Engineering', 'Design'],
        industry_partnerships: ['Tata Motors', 'Mahindra', 'L&T', 'BHEL']
      }
    ],
    placement_stats: {
      overall_placement_rate: 96.8,
      avg_package: 2200000,
      highest_package: 14500000,
      median_package: 1900000,
      total_offers: 1180,
      top_recruiters: ['Google', 'Microsoft', 'Amazon', 'Facebook', 'Goldman Sachs'],
      placement_trends: [
        { year: 2020, rate: 93, avg_package: 1700000 },
        { year: 2021, rate: 95, avg_package: 1900000 },
        { year: 2022, rate: 96, avg_package: 2100000 },
        { year: 2023, rate: 97, avg_package: 2200000 }
      ],
      sector_wise_placement: [
        { sector: 'Technology', percentage: 50, avg_package: 2700000 },
        { sector: 'Finance', percentage: 22, avg_package: 3000000 },
        { sector: 'Consulting', percentage: 18, avg_package: 2400000 },
        { sector: 'Core Engineering', percentage: 10, avg_package: 1600000 }
      ],
      company_tier_distribution: [
        { tier: 'Tier 1', percentage: 58 },
        { tier: 'Tier 2', percentage: 32 },
        { tier: 'Tier 3', percentage: 10 }
      ]
    },
    facilities: ['Wi-Fi Campus', 'Library', 'Sports Complex', 'Hostels', 'Medical Center', 'Innovation Labs', 'Research Centers']
  },
  {
    id: 'iit-kanpur',
    name: 'Indian Institute of Technology Kanpur',
    location: 'Kanpur, Uttar Pradesh',
    ranking: 3,
    established: 1959,
    type: 'Government',
    nirf_ranking: 4,
    image: 'https://i.ibb.co/BMW9dyX/Screenshot-2025-07-05-114254.png',
    accreditation: ['NAAC A++', 'NBA', 'ABET'],
    campus_size: '1055 acres',
    student_strength: 8800,
    faculty_ratio: '1:8',
    research_output: 2100,
    international_collaborations: 120,
    courses: [
      {
        id: 'cse-iitk',
        name: 'Computer Science and Engineering',
        department: 'Computer Science',
        duration: '4 years',
        fees: 200000,
        seats: 105,
        placement_rate: 99,
        avg_package: 2600000,
        highest_package: 13800000,
        top_recruiters: ['Microsoft', 'Google', 'Amazon', 'Adobe', 'Goldman Sachs'],
        specializations: ['AI/ML', 'Data Science', 'Cybersecurity', 'Software Engineering'],
        industry_partnerships: ['Microsoft', 'Google', 'Amazon', 'Adobe']
      },
      {
        id: 'aero-iitk',
        name: 'Aerospace Engineering',
        department: 'Aerospace',
        duration: '4 years',
        fees: 200000,
        seats: 60,
        placement_rate: 94,
        avg_package: 1900000,
        highest_package: 9200000,
        top_recruiters: ['ISRO', 'DRDO', 'HAL', 'Boeing'],
        specializations: ['Aerodynamics', 'Propulsion', 'Structures', 'Avionics'],
        industry_partnerships: ['ISRO', 'DRDO', 'HAL', 'Boeing']
      }
    ],
    placement_stats: {
      overall_placement_rate: 95.5,
      avg_package: 2100000,
      highest_package: 13800000,
      median_package: 1800000,
      total_offers: 1050,
      top_recruiters: ['Microsoft', 'Google', 'Amazon', 'Adobe', 'Goldman Sachs'],
      placement_trends: [
        { year: 2020, rate: 91, avg_package: 1600000 },
        { year: 2021, rate: 93, avg_package: 1800000 },
        { year: 2022, rate: 95, avg_package: 2000000 },
        { year: 2023, rate: 96, avg_package: 2100000 }
      ],
      sector_wise_placement: [
        { sector: 'Technology', percentage: 48, avg_package: 2600000 },
        { sector: 'Finance', percentage: 20, avg_package: 2900000 },
        { sector: 'Consulting', percentage: 17, avg_package: 2300000 },
        { sector: 'Core Engineering', percentage: 15, avg_package: 1500000 }
      ],
      company_tier_distribution: [
        { tier: 'Tier 1', percentage: 55 },
        { tier: 'Tier 2', percentage: 35 },
        { tier: 'Tier 3', percentage: 10 }
      ]
    },
    facilities: ['Wi-Fi Campus', 'Library', 'Sports Complex', 'Hostels', 'Medical Center', 'Innovation Labs', 'Flight Lab']
  },
  {
    id: 'thapar-university',
    name: 'Thapar Institute of Engineering and Technology',
    location: 'Patiala, Punjab',
    ranking: 25,
    established: 1956,
    type: 'Deemed',
    nirf_ranking: 29,
    image: 'https://i.ibb.co/KjZz8CTh/Screenshot-2025-07-05-114924.png',
    accreditation: ['NAAC A+', 'NBA', 'AICTE'],
    campus_size: '250 acres',
    student_strength: 13000,
    faculty_ratio: '1:12',
    research_output: 1200,
    international_collaborations: 85,
    courses: [
      {
        id: 'cse-thapar',
        name: 'Computer Science and Engineering',
        department: 'Computer Science',
        duration: '4 years',
        fees: 1600000,
        seats: 240,
        placement_rate: 92,
        avg_package: 1200000,
        highest_package: 6500000,
        top_recruiters: ['Microsoft', 'Amazon', 'Google', 'Adobe', 'Flipkart'],
        specializations: ['AI/ML', 'Data Science', 'Cloud Computing', 'Cybersecurity'],
        industry_partnerships: ['Microsoft', 'Amazon', 'Google', 'Adobe']
      },
      {
        id: 'mech-thapar',
        name: 'Mechanical Engineering',
        department: 'Mechanical',
        duration: '4 years',
        fees: 1500000,
        seats: 180,
        placement_rate: 88,
        avg_package: 950000,
        highest_package: 4200000,
        top_recruiters: ['Tata Motors', 'Mahindra', 'L&T', 'Hero MotoCorp'],
        specializations: ['Automotive', 'Manufacturing', 'Thermal Engineering', 'Robotics'],
        industry_partnerships: ['Tata Motors', 'Mahindra', 'L&T', 'Hero MotoCorp']
      }
    ],
    placement_stats: {
      overall_placement_rate: 90.5,
      avg_package: 1075000,
      highest_package: 6500000,
      median_package: 950000,
      total_offers: 1180,
      top_recruiters: ['Microsoft', 'Amazon', 'Google', 'Adobe', 'Flipkart'],
      placement_trends: [
        { year: 2020, rate: 85, avg_package: 850000 },
        { year: 2021, rate: 88, avg_package: 950000 },
        { year: 2022, rate: 90, avg_package: 1000000 },
        { year: 2023, rate: 91, avg_package: 1075000 }
      ],
      sector_wise_placement: [
        { sector: 'Technology', percentage: 55, avg_package: 1300000 },
        { sector: 'Manufacturing', percentage: 20, avg_package: 950000 },
        { sector: 'Finance', percentage: 15, avg_package: 1100000 },
        { sector: 'Consulting', percentage: 10, avg_package: 1000000 }
      ],
      company_tier_distribution: [
        { tier: 'Tier 1', percentage: 35 },
        { tier: 'Tier 2', percentage: 45 },
        { tier: 'Tier 3', percentage: 20 }
      ]
    },
    facilities: ['Wi-Fi Campus', 'Library', 'Sports Complex', 'Hostels', 'Medical Center', 'Innovation Labs', 'Incubation Center']
  },
  {
    id: 'vit-vellore',
    name: 'Vellore Institute of Technology',
    location: 'Vellore, Tamil Nadu',
    ranking: 16,
    established: 1984,
    type: 'Private',
    nirf_ranking: 15,
    image: 'https://i.ibb.co/d4Fbmj5W/Screenshot-2025-07-05-114511.png',
    accreditation: ['NAAC A++', 'NBA', 'AICTE'],
    campus_size: '350 acres',
    student_strength: 35000,
    faculty_ratio: '1:15',
    research_output: 1800,
    international_collaborations: 200,
    courses: [
      {
        id: 'cse-vit',
        name: 'Computer Science and Engineering',
        department: 'Computer Science',
        duration: '4 years',
        fees: 1980000,
        seats: 600,
        placement_rate: 95,
        avg_package: 1400000,
        highest_package: 7500000,
        top_recruiters: ['TCS', 'Infosys', 'Wipro', 'Cognizant', 'Amazon'],
        specializations: ['AI/ML', 'Data Science', 'IoT', 'Blockchain'],
        industry_partnerships: ['TCS', 'Infosys', 'Wipro', 'Amazon']
      },
      {
        id: 'ece-vit',
        name: 'Electronics and Communication Engineering',
        department: 'Electronics',
        duration: '4 years',
        fees: 1880000,
        seats: 480,
        placement_rate: 91,
        avg_package: 1100000,
        highest_package: 5200000,
        top_recruiters: ['Samsung', 'Intel', 'Qualcomm', 'Texas Instruments'],
        specializations: ['VLSI Design', 'Embedded Systems', 'Communication Systems', 'Signal Processing'],
        industry_partnerships: ['Samsung', 'Intel', 'Qualcomm', 'Broadcom']
      }
    ],
    placement_stats: {
      overall_placement_rate: 93.2,
      avg_package: 1250000,
      highest_package: 7500000,
      median_package: 1100000,
      total_offers: 3200,
      top_recruiters: ['TCS', 'Infosys', 'Wipro', 'Cognizant', 'Amazon'],
      placement_trends: [
        { year: 2020, rate: 88, avg_package: 950000 },
        { year: 2021, rate: 91, avg_package: 1100000 },
        { year: 2022, rate: 92, avg_package: 1200000 },
        { year: 2023, rate: 93, avg_package: 1250000 }
      ],
      sector_wise_placement: [
        { sector: 'Technology', percentage: 60, avg_package: 1400000 },
        { sector: 'Finance', percentage: 18, avg_package: 1300000 },
        { sector: 'Consulting', percentage: 12, avg_package: 1200000 },
        { sector: 'Manufacturing', percentage: 10, avg_package: 1000000 }
      ],
      company_tier_distribution: [
        { tier: 'Tier 1', percentage: 25 },
        { tier: 'Tier 2', percentage: 50 },
        { tier: 'Tier 3', percentage: 25 }
      ]
    },
    facilities: ['Wi-Fi Campus', 'Library', 'Sports Complex', 'Hostels', 'Medical Center', 'Innovation Labs', 'International Campus']
  },
  {
    id: 'srm-university',
    name: 'SRM Institute of Science and Technology',
    location: 'Chennai, Tamil Nadu',
    ranking: 35,
    established: 1985,
    type: 'Private',
    nirf_ranking: 41,
    image: 'https://i.ibb.co/1ffZKL9M/Screenshot-2025-07-05-114542.png',
    accreditation: ['NAAC A++', 'NBA', 'AICTE'],
    campus_size: '250 acres',
    student_strength: 38000,
    faculty_ratio: '1:16',
    research_output: 1400,
    international_collaborations: 150,
    courses: [
      {
        id: 'cse-srm',
        name: 'Computer Science and Engineering',
        department: 'Computer Science',
        duration: '4 years',
        fees: 1750000,
        seats: 720,
        placement_rate: 89,
        avg_package: 950000,
        highest_package: 5800000,
        top_recruiters: ['TCS', 'Infosys', 'Wipro', 'HCL', 'Tech Mahindra'],
        specializations: ['AI/ML', 'Data Science', 'Software Engineering', 'Web Development'],
        industry_partnerships: ['TCS', 'Infosys', 'Wipro', 'HCL']
      },
      {
        id: 'mech-srm',
        name: 'Mechanical Engineering',
        department: 'Mechanical',
        duration: '4 years',
        fees: 1650000,
        seats: 480,
        placement_rate: 84,
        avg_package: 750000,
        highest_package: 3500000,
        top_recruiters: ['Ashok Leyland', 'TVS Motors', 'Mahindra', 'L&T'],
        specializations: ['Automotive', 'Manufacturing', 'Thermal Engineering', 'Design'],
        industry_partnerships: ['Ashok Leyland', 'TVS Motors', 'Mahindra']
      }
    ],
    placement_stats: {
      overall_placement_rate: 86.8,
      avg_package: 850000,
      highest_package: 5800000,
      median_package: 750000,
      total_offers: 3300,
      top_recruiters: ['TCS', 'Infosys', 'Wipro', 'HCL', 'Tech Mahindra'],
      placement_trends: [
        { year: 2020, rate: 82, avg_package: 650000 },
        { year: 2021, rate: 84, avg_package: 750000 },
        { year: 2022, rate: 86, avg_package: 800000 },
        { year: 2023, rate: 87, avg_package: 850000 }
      ],
      sector_wise_placement: [
        { sector: 'Technology', percentage: 55, avg_package: 950000 },
        { sector: 'Manufacturing', percentage: 25, avg_package: 750000 },
        { sector: 'Finance', percentage: 12, avg_package: 900000 },
        { sector: 'Others', percentage: 8, avg_package: 650000 }
      ],
      company_tier_distribution: [
        { tier: 'Tier 1', percentage: 20 },
        { tier: 'Tier 2', percentage: 45 },
        { tier: 'Tier 3', percentage: 35 }
      ]
    },
    facilities: ['Wi-Fi Campus', 'Library', 'Sports Complex', 'Hostels', 'Medical Center', 'Research Centers', 'International Programs']
  },
  {
    id: 'op-jindal',
    name: 'O.P. Jindal Global University',
    location: 'Sonipat, Haryana',
    ranking: 28,
    established: 2009,
    type: 'Private',
    nirf_ranking: 47,
    image: 'https://i.ibb.co/201z43vT/Screenshot-2025-07-05-114624.png',
    accreditation: ['NAAC A++', 'UGC', 'BCI'],
    campus_size: '60 acres',
    student_strength: 11000,
    faculty_ratio: '1:10',
    research_output: 950,
    international_collaborations: 300,
    courses: [
      {
        id: 'law-jindal',
        name: 'Bachelor of Laws (LLB)',
        department: 'Law',
        duration: '5 years',
        fees: 2500000,
        seats: 240,
        placement_rate: 94,
        avg_package: 1800000,
        highest_package: 8500000,
        top_recruiters: ['Khaitan & Co', 'AZB & Partners', 'Cyril Amarchand Mangaldas', 'JSA'],
        specializations: ['Corporate Law', 'International Law', 'Constitutional Law', 'Criminal Law'],
        industry_partnerships: ['Khaitan & Co', 'AZB & Partners', 'Cyril Amarchand Mangaldas']
      },
      {
        id: 'mba-jindal',
        name: 'Master of Business Administration',
        department: 'Management',
        duration: '2 years',
        fees: 2200000,
        seats: 180,
        placement_rate: 91,
        avg_package: 1650000,
        highest_package: 6800000,
        top_recruiters: ['McKinsey & Company', 'BCG', 'Deloitte', 'EY'],
        specializations: ['Finance', 'Marketing', 'Strategy', 'International Business'],
        industry_partnerships: ['McKinsey & Company', 'BCG', 'Deloitte']
      }
    ],
    placement_stats: {
      overall_placement_rate: 92.5,
      avg_package: 1725000,
      highest_package: 8500000,
      median_package: 1500000,
      total_offers: 1020,
      top_recruiters: ['Khaitan & Co', 'AZB & Partners', 'McKinsey & Company', 'BCG', 'Deloitte'],
      placement_trends: [
        { year: 2020, rate: 88, avg_package: 1400000 },
        { year: 2021, rate: 90, avg_package: 1550000 },
        { year: 2022, rate: 92, avg_package: 1650000 },
        { year: 2023, rate: 93, avg_package: 1725000 }
      ],
      sector_wise_placement: [
        { sector: 'Legal Services', percentage: 40, avg_package: 2000000 },
        { sector: 'Consulting', percentage: 25, avg_package: 1800000 },
        { sector: 'Finance', percentage: 20, avg_package: 1600000 },
        { sector: 'Corporate', percentage: 15, avg_package: 1400000 }
      ],
      company_tier_distribution: [
        { tier: 'Tier 1', percentage: 45 },
        { tier: 'Tier 2', percentage: 40 },
        { tier: 'Tier 3', percentage: 15 }
      ]
    },
    facilities: ['Wi-Fi Campus', 'Library', 'Sports Complex', 'Hostels', 'Medical Center', 'Moot Court', 'International Center']
  },
  {
    id: 'symbiosis-pune',
    name: 'Symbiosis International University',
    location: 'Pune, Maharashtra',
    ranking: 32,
    established: 1971,
    type: 'Deemed',
    nirf_ranking: 45,
    image: 'https://i.ibb.co/sdmSR9Kf/Screenshot-2025-07-05-114942.png',
    accreditation: ['NAAC A++', 'UGC', 'AICTE'],
    campus_size: '300 acres',
    student_strength: 15000,
    faculty_ratio: '1:11',
    research_output: 1100,
    international_collaborations: 180,
    courses: [
      {
        id: 'mba-symbiosis',
        name: 'Master of Business Administration',
        department: 'Management',
        duration: '2 years',
        fees: 2000000,
        seats: 300,
        placement_rate: 96,
        avg_package: 1850000,
        highest_package: 7200000,
        top_recruiters: ['Accenture', 'Deloitte', 'KPMG', 'PwC', 'EY'],
        specializations: ['Finance', 'Marketing', 'Operations', 'HR', 'International Business'],
        industry_partnerships: ['Accenture', 'Deloitte', 'KPMG', 'PwC']
      },
      {
        id: 'bba-symbiosis',
        name: 'Bachelor of Business Administration',
        department: 'Management',
        duration: '3 years',
        fees: 1500000,
        seats: 240,
        placement_rate: 92,
        avg_package: 1200000,
        highest_package: 4500000,
        top_recruiters: ['HDFC Bank', 'ICICI Bank', 'Wipro', 'TCS'],
        specializations: ['Finance', 'Marketing', 'HR', 'International Business'],
        industry_partnerships: ['HDFC Bank', 'ICICI Bank', 'Wipro']
      }
    ],
    placement_stats: {
      overall_placement_rate: 94.2,
      avg_package: 1525000,
      highest_package: 7200000,
      median_package: 1350000,
      total_offers: 1410,
      top_recruiters: ['Accenture', 'Deloitte', 'KPMG', 'PwC', 'EY'],
      placement_trends: [
        { year: 2020, rate: 90, avg_package: 1200000 },
        { year: 2021, rate: 92, avg_package: 1350000 },
        { year: 2022, rate: 94, avg_package: 1450000 },
        { year: 2023, rate: 94, avg_package: 1525000 }
      ],
      sector_wise_placement: [
        { sector: 'Consulting', percentage: 35, avg_package: 1800000 },
        { sector: 'Finance', percentage: 30, avg_package: 1600000 },
        { sector: 'Technology', percentage: 20, avg_package: 1400000 },
        { sector: 'Manufacturing', percentage: 15, avg_package: 1200000 }
      ],
      company_tier_distribution: [
        { tier: 'Tier 1', percentage: 40 },
        { tier: 'Tier 2', percentage: 45 },
        { tier: 'Tier 3', percentage: 15 }
      ]
    },
    facilities: ['Wi-Fi Campus', 'Library', 'Sports Complex', 'Hostels', 'Medical Center', 'Innovation Labs', 'Cultural Center']
  },
  {
    id: 'manipal-university',
    name: 'Manipal Academy of Higher Education',
    location: 'Manipal, Karnataka',
    ranking: 22,
    established: 1953,
    type: 'Deemed',
    nirf_ranking: 16,
    image: 'https://i.ibb.co/XZ0dpHDc/Screenshot-2025-07-05-115011.png',
    accreditation: ['NAAC A++', 'NBA', 'AICTE'],
    campus_size: '600 acres',
    student_strength: 28000,
    faculty_ratio: '1:13',
    research_output: 1600,
    international_collaborations: 250,
    courses: [
      {
        id: 'cse-manipal',
        name: 'Computer Science and Engineering',
        department: 'Computer Science',
        duration: '4 years',
        fees: 1800000,
        seats: 360,
        placement_rate: 94,
        avg_package: 1350000,
        highest_package: 6800000,
        top_recruiters: ['Microsoft', 'Amazon', 'Google', 'Flipkart', 'Paytm'],
        specializations: ['AI/ML', 'Data Science', 'Cloud Computing', 'Software Engineering'],
        industry_partnerships: ['Microsoft', 'Amazon', 'Google', 'IBM']
      },
      {
        id: 'mbbs-manipal',
        name: 'Bachelor of Medicine and Bachelor of Surgery',
        department: 'Medicine',
        duration: '5.5 years',
        fees: 6500000,
        seats: 150,
        placement_rate: 98,
        avg_package: 1800000,
        highest_package: 4500000,
        top_recruiters: ['Apollo Hospitals', 'Fortis Healthcare', 'Max Healthcare', 'Manipal Hospitals'],
        specializations: ['General Medicine', 'Surgery', 'Pediatrics', 'Cardiology'],
        industry_partnerships: ['Apollo Hospitals', 'Fortis Healthcare', 'Max Healthcare']
      }
    ],
    placement_stats: {
      overall_placement_rate: 96.1,
      avg_package: 1575000,
      highest_package: 6800000,
      median_package: 1400000,
      total_offers: 2690,
      top_recruiters: ['Microsoft', 'Amazon', 'Google', 'Apollo Hospitals', 'Flipkart'],
      placement_trends: [
        { year: 2020, rate: 92, avg_package: 1250000 },
        { year: 2021, rate: 94, avg_package: 1400000 },
        { year: 2022, rate: 95, avg_package: 1500000 },
        { year: 2023, rate: 96, avg_package: 1575000 }
      ],
      sector_wise_placement: [
        { sector: 'Technology', percentage: 45, avg_package: 1450000 },
        { sector: 'Healthcare', percentage: 25, avg_package: 1800000 },
        { sector: 'Finance', percentage: 15, avg_package: 1500000 },
        { sector: 'Consulting', percentage: 15, avg_package: 1400000 }
      ],
      company_tier_distribution: [
        { tier: 'Tier 1', percentage: 30 },
        { tier: 'Tier 2', percentage: 50 },
        { tier: 'Tier 3', percentage: 20 }
      ]
    },
    facilities: ['Wi-Fi Campus', 'Library', 'Sports Complex', 'Hostels', 'Medical Center', 'Hospital', 'Research Centers']
  },
  {
    id: 'dtu',
    name: 'Delhi Technological University',
    location: 'New Delhi, Delhi',
    ranking: 15,
    established: 1941,
    type: 'Government',
    nirf_ranking: 36,
    image: 'https://i.ibb.co/dNz3Pdq/Screenshot-2025-07-05-114331.png',
    accreditation: ['NAAC A+', 'NBA', 'AICTE'],
    campus_size: '164 acres',
    student_strength: 12500,
    faculty_ratio: '1:12',
    research_output: 850,
    international_collaborations: 45,
    courses: [
      {
        id: 'cse-dtu',
        name: 'Computer Science and Engineering',
        department: 'Computer Science',
        duration: '4 years',
        fees: 150000,
        seats: 180,
        placement_rate: 95,
        avg_package: 1800000,
        highest_package: 8500000,
        top_recruiters: ['Microsoft', 'Amazon', 'Google', 'Samsung', 'Adobe'],
        specializations: ['AI/ML', 'Data Science', 'Software Engineering', 'Cybersecurity'],
        industry_partnerships: ['Microsoft', 'Amazon', 'Google', 'Samsung']
      },
      {
        id: 'ece-dtu',
        name: 'Electronics and Communication Engineering',
        department: 'Electronics',
        duration: '4 years',
        fees: 150000,
        seats: 140,
        placement_rate: 92,
        avg_package: 1500000,
        highest_package: 6800000,
        top_recruiters: ['Samsung', 'Intel', 'Qualcomm', 'Texas Instruments'],
        specializations: ['VLSI Design', 'Embedded Systems', 'Communication Systems', 'IoT'],
        industry_partnerships: ['Samsung', 'Intel', 'Qualcomm', 'Broadcom']
      }
    ],
    placement_stats: {
      overall_placement_rate: 93.2,
      avg_package: 1650000,
      highest_package: 8500000,
      median_package: 1400000,
      total_offers: 1200,
      top_recruiters: ['Microsoft', 'Amazon', 'Google', 'Samsung', 'Adobe'],
      placement_trends: [
        { year: 2020, rate: 88, avg_package: 1200000 },
        { year: 2021, rate: 90, avg_package: 1400000 },
        { year: 2022, rate: 92, avg_package: 1550000 },
        { year: 2023, rate: 93, avg_package: 1650000 }
      ],
      sector_wise_placement: [
        { sector: 'Technology', percentage: 65, avg_package: 1800000 },
        { sector: 'Finance', percentage: 15, avg_package: 2000000 },
        { sector: 'Consulting', percentage: 12, avg_package: 1600000 },
        { sector: 'Core Engineering', percentage: 8, avg_package: 1200000 }
      ],
      company_tier_distribution: [
        { tier: 'Tier 1', percentage: 40 },
        { tier: 'Tier 2', percentage: 45 },
        { tier: 'Tier 3', percentage: 15 }
      ]
    },
    facilities: ['Wi-Fi Campus', 'Library', 'Sports Complex', 'Hostels', 'Medical Center', 'Innovation Labs', 'Incubation Center']
  },
  {
    id: 'nsut',
    name: 'Netaji Subhas University of Technology',
    location: 'New Delhi, Delhi',
    ranking: 18,
    established: 1983,
    type: 'Government',
    nirf_ranking: 42,
    image: 'https://i.ibb.co/LBtZQF8/Screenshot-2025-07-05-114417.png',
    accreditation: ['NAAC A', 'NBA', 'AICTE'],
    campus_size: '145 acres',
    student_strength: 8500,
    faculty_ratio: '1:13',
    research_output: 620,
    international_collaborations: 35,
    courses: [
      {
        id: 'cse-nsut',
        name: 'Computer Science and Engineering',
        department: 'Computer Science',
        duration: '4 years',
        fees: 140000,
        seats: 150,
        placement_rate: 93,
        avg_package: 1600000,
        highest_package: 7200000,
        top_recruiters: ['Amazon', 'Microsoft', 'Google', 'Flipkart', 'Paytm'],
        specializations: ['AI/ML', 'Data Science', 'Software Engineering', 'Web Development'],
        industry_partnerships: ['Amazon', 'Microsoft', 'Google', 'Flipkart']
      },
      {
        id: 'it-nsut',
        name: 'Information Technology',
        department: 'Information Technology',
        duration: '4 years',
        fees: 140000,
        seats: 120,
        placement_rate: 91,
        avg_package: 1450000,
        highest_package: 6500000,
        top_recruiters: ['TCS', 'Infosys', 'Wipro', 'Cognizant', 'HCL'],
        specializations: ['Software Development', 'Database Management', 'Network Security', 'Cloud Computing'],
        industry_partnerships: ['TCS', 'Infosys', 'Wipro', 'Cognizant']
      }
    ],
    placement_stats: {
      overall_placement_rate: 91.8,
      avg_package: 1520000,
      highest_package: 7200000,
      median_package: 1300000,
      total_offers: 950,
      top_recruiters: ['Amazon', 'Microsoft', 'Google', 'Flipkart', 'Paytm'],
      placement_trends: [
        { year: 2020, rate: 86, avg_package: 1100000 },
        { year: 2021, rate: 88, avg_package: 1300000 },
        { year: 2022, rate: 90, avg_package: 1450000 },
        { year: 2023, rate: 92, avg_package: 1520000 }
      ],
      sector_wise_placement: [
        { sector: 'Technology', percentage: 70, avg_package: 1650000 },
        { sector: 'Finance', percentage: 12, avg_package: 1800000 },
        { sector: 'Consulting', percentage: 10, avg_package: 1500000 },
        { sector: 'Others', percentage: 8, avg_package: 1200000 }
      ],
      company_tier_distribution: [
        { tier: 'Tier 1', percentage: 35 },
        { tier: 'Tier 2', percentage: 50 },
        { tier: 'Tier 3', percentage: 15 }
      ]
    },
    facilities: ['Wi-Fi Campus', 'Library', 'Sports Complex', 'Hostels', 'Medical Center', 'Computer Labs', 'Auditorium']
  },
  {
    id: 'bennett-university',
    name: 'Bennett University',
    location: 'Greater Noida, Uttar Pradesh',
    ranking: 45,
    established: 2016,
    type: 'Private',
    nirf_ranking: 68,
    image: 'https://i.ibb.co/1Gg39wXk/Screenshot-2025-07-05-114645.png',
    accreditation: ['NAAC A', 'NBA'],
    campus_size: '68 acres',
    student_strength: 8500,
    faculty_ratio: '1:12',
    research_output: 450,
    international_collaborations: 45,
    courses: [
      {
        id: 'cse-bennett',
        name: 'Computer Science and Engineering',
        department: 'Computer Science',
        duration: '4 years',
        fees: 1200000,
        seats: 240,
        placement_rate: 92,
        avg_package: 850000,
        highest_package: 4200000,
        top_recruiters: ['TCS', 'Infosys', 'Wipro', 'Cognizant', 'Amazon'],
        specializations: ['AI/ML', 'Data Science', 'Cloud Computing', 'Mobile Development'],
        industry_partnerships: ['Microsoft', 'AWS', 'Google Cloud', 'IBM']
      },
      {
        id: 'mba-bennett',
        name: 'Master of Business Administration',
        department: 'Management',
        duration: '2 years',
        fees: 1800000,
        seats: 120,
        placement_rate: 88,
        avg_package: 950000,
        highest_package: 3500000,
        top_recruiters: ['Deloitte', 'EY', 'KPMG', 'Accenture'],
        specializations: ['Finance', 'Marketing', 'Operations', 'HR'],
        industry_partnerships: ['Deloitte', 'PwC', 'EY', 'KPMG']
      }
    ],
    placement_stats: {
      overall_placement_rate: 90.2,
      avg_package: 900000,
      highest_package: 4200000,
      median_package: 750000,
      total_offers: 850,
      top_recruiters: ['TCS', 'Infosys', 'Wipro', 'Cognizant', 'Amazon'],
      placement_trends: [
        { year: 2020, rate: 85, avg_package: 650000 },
        { year: 2021, rate: 87, avg_package: 750000 },
        { year: 2022, rate: 89, avg_package: 850000 },
        { year: 2023, rate: 90, avg_package: 900000 }
      ],
      sector_wise_placement: [
        { sector: 'Technology', percentage: 55, avg_package: 950000 },
        { sector: 'Finance', percentage: 20, avg_package: 1100000 },
        { sector: 'Consulting', percentage: 15, avg_package: 900000 },
        { sector: 'Manufacturing', percentage: 10, avg_package: 700000 }
      ],
      company_tier_distribution: [
        { tier: 'Tier 1', percentage: 25 },
        { tier: 'Tier 2', percentage: 45 },
        { tier: 'Tier 3', percentage: 30 }
      ]
    },
    facilities: ['Wi-Fi Campus', 'Library', 'Sports Complex', 'Hostels', 'Medical Center', 'Innovation Labs', 'Incubation Center']
  },
  {
    id: 'shiv-nadar-university',
    name: 'Shiv Nadar University',
    location: 'Greater Noida, Uttar Pradesh',
    ranking: 38,
    established: 2011,
    type: 'Private',
    nirf_ranking: 58,
    image: 'https://i.ibb.co/sdBkwDfQ/Screenshot-2025-07-05-114712.png',
    accreditation: ['NAAC A++', 'NBA'],
    campus_size: '286 acres',
    student_strength: 7200,
    faculty_ratio: '1:10',
    research_output: 680,
    international_collaborations: 65,
    courses: [
      {
        id: 'cse-snu',
        name: 'Computer Science and Engineering',
        department: 'Computer Science',
        duration: '4 years',
        fees: 1600000,
        seats: 180,
        placement_rate: 95,
        avg_package: 1200000,
        highest_package: 5800000,
        top_recruiters: ['Microsoft', 'Google', 'Amazon', 'Adobe', 'Samsung'],
        specializations: ['AI/ML', 'Data Science', 'Cybersecurity', 'Blockchain'],
        industry_partnerships: ['Microsoft', 'Google', 'Amazon', 'Adobe']
      },
      {
        id: 'ece-snu',
        name: 'Electronics and Communication Engineering',
        department: 'Electronics',
        duration: '4 years',
        fees: 1500000,
        seats: 120,
        placement_rate: 91,
        avg_package: 980000,
        highest_package: 4200000,
        top_recruiters: ['Intel', 'Qualcomm', 'Samsung', 'Texas Instruments'],
        specializations: ['VLSI Design', 'IoT', 'Embedded Systems', 'Signal Processing'],
        industry_partnerships: ['Intel', 'Qualcomm', 'Samsung', 'Broadcom']
      }
    ],
    placement_stats: {
      overall_placement_rate: 93.5,
      avg_package: 1100000,
      highest_package: 5800000,
      median_package: 950000,
      total_offers: 720,
      top_recruiters: ['Microsoft', 'Google', 'Amazon', 'Adobe', 'Samsung'],
      placement_trends: [
        { year: 2020, rate: 88, avg_package: 850000 },
        { year: 2021, rate: 91, avg_package: 950000 },
        { year: 2022, rate: 92, avg_package: 1050000 },
        { year: 2023, rate: 94, avg_package: 1100000 }
      ],
      sector_wise_placement: [
        { sector: 'Technology', percentage: 60, avg_package: 1250000 },
        { sector: 'Finance', percentage: 18, avg_package: 1400000 },
        { sector: 'Consulting', percentage: 12, avg_package: 1100000 },
        { sector: 'Research', percentage: 10, avg_package: 900000 }
      ],
      company_tier_distribution: [
        { tier: 'Tier 1', percentage: 35 },
        { tier: 'Tier 2', percentage: 40 },
        { tier: 'Tier 3', percentage: 25 }
      ]
    },
    facilities: ['Wi-Fi Campus', 'Library', 'Sports Complex', 'Hostels', 'Medical Center', 'Research Labs', 'Innovation Hub']
  },
  {
    id: 'galgotias-university',
    name: 'Galgotias University',
    location: 'Greater Noida, Uttar Pradesh',
    ranking: 52,
    established: 2011,
    type: 'Private',
    nirf_ranking: 75,
    image: 'https://i.ibb.co/WWn2ghZZ/Screenshot-2025-07-05-114808.png',
    accreditation: ['NAAC A', 'NBA'],
    campus_size: '52 acres',
    student_strength: 15000,
    faculty_ratio: '1:15',
    research_output: 320,
    international_collaborations: 28,
    courses: [
      {
        id: 'cse-galgotias',
        name: 'Computer Science and Engineering',
        department: 'Computer Science',
        duration: '4 years',
        fees: 800000,
        seats: 360,
        placement_rate: 85,
        avg_package: 650000,
        highest_package: 3200000,
        top_recruiters: ['TCS', 'Infosys', 'Wipro', 'HCL', 'Tech Mahindra'],
        specializations: ['AI/ML', 'Data Science', 'Web Development', 'Mobile Apps'],
        industry_partnerships: ['TCS', 'Infosys', 'Wipro', 'HCL']
      },
      {
        id: 'mech-galgotias',
        name: 'Mechanical Engineering',
        department: 'Mechanical',
        duration: '4 years',
        fees: 750000,
        seats: 240,
        placement_rate: 78,
        avg_package: 520000,
        highest_package: 2100000,
        top_recruiters: ['Maruti Suzuki', 'Tata Motors', 'Mahindra', 'Bajaj Auto'],
        specializations: ['Automotive', 'Manufacturing', 'Thermal Engineering', 'Design'],
        industry_partnerships: ['Maruti Suzuki', 'Tata Motors', 'Mahindra']
      }
    ],
    placement_stats: {
      overall_placement_rate: 82.5,
      avg_package: 580000,
      highest_package: 3200000,
      median_package: 500000,
      total_offers: 1200,
      top_recruiters: ['TCS', 'Infosys', 'Wipro', 'HCL', 'Tech Mahindra'],
      placement_trends: [
        { year: 2020, rate: 75, avg_package: 450000 },
        { year: 2021, rate: 78, avg_package: 500000 },
        { year: 2022, rate: 80, avg_package: 550000 },
        { year: 2023, rate: 83, avg_package: 580000 }
      ],
      sector_wise_placement: [
        { sector: 'Technology', percentage: 50, avg_package: 650000 },
        { sector: 'Manufacturing', percentage: 25, avg_package: 520000 },
        { sector: 'Finance', percentage: 15, avg_package: 600000 },
        { sector: 'Others', percentage: 10, avg_package: 480000 }
      ],
      company_tier_distribution: [
        { tier: 'Tier 1', percentage: 15 },
        { tier: 'Tier 2', percentage: 35 },
        { tier: 'Tier 3', percentage: 50 }
      ]
    },
    facilities: ['Wi-Fi Campus', 'Library', 'Sports Complex', 'Hostels', 'Medical Center', 'Labs']
  },
  {
    id: 'amity-university-noida',
    name: 'Amity University Noida',
    location: 'Noida, Uttar Pradesh',
    ranking: 48,
    established: 2005,
    type: 'Private',
    nirf_ranking: 72,
    image: 'https://i.ibb.co/XfkSFLb2/Screenshot-2025-07-05-114829.png',
    accreditation: ['NAAC A+', 'NBA'],
    campus_size: '60 acres',
    student_strength: 12000,
    faculty_ratio: '1:12',
    research_output: 580,
    international_collaborations: 85,
    courses: [
      {
        id: 'cse-amity',
        name: 'Computer Science and Engineering',
        department: 'Computer Science',
        duration: '4 years',
        fees: 1000000,
        seats: 300,
        placement_rate: 88,
        avg_package: 750000,
        highest_package: 3800000,
        top_recruiters: ['Accenture', 'Capgemini', 'IBM', 'Cognizant', 'TCS'],
        specializations: ['AI/ML', 'Cloud Computing', 'Cybersecurity', 'Software Engineering'],
        industry_partnerships: ['IBM', 'Microsoft', 'Oracle', 'SAP']
      },
      {
        id: 'bba-amity',
        name: 'Bachelor of Business Administration',
        department: 'Management',
        duration: '3 years',
        fees: 900000,
        seats: 200,
        placement_rate: 82,
        avg_package: 650000,
        highest_package: 2800000,
        top_recruiters: ['HDFC Bank', 'ICICI Bank', 'Deloitte', 'EY'],
        specializations: ['Finance', 'Marketing', 'HR', 'International Business'],
        industry_partnerships: ['HDFC Bank', 'ICICI Bank', 'Deloitte']
      }
    ],
    placement_stats: {
      overall_placement_rate: 85.8,
      avg_package: 700000,
      highest_package: 3800000,
      median_package: 600000,
      total_offers: 1050,
      top_recruiters: ['Accenture', 'Capgemini', 'IBM', 'Cognizant', 'TCS'],
      placement_trends: [
        { year: 2020, rate: 80, avg_package: 550000 },
        { year: 2021, rate: 83, avg_package: 620000 },
        { year: 2022, rate: 85, avg_package: 670000 },
        { year: 2023, rate: 86, avg_package: 700000 }
      ],
      sector_wise_placement: [
        { sector: 'Technology', percentage: 45, avg_package: 780000 },
        { sector: 'Finance', percentage: 25, avg_package: 720000 },
        { sector: 'Consulting', percentage: 20, avg_package: 650000 },
        { sector: 'Others', percentage: 10, avg_package: 550000 }
      ],
      company_tier_distribution: [
        { tier: 'Tier 1', percentage: 20 },
        { tier: 'Tier 2', percentage: 40 },
        { tier: 'Tier 3', percentage: 40 }
      ]
    },
    facilities: ['Wi-Fi Campus', 'Library', 'Sports Complex', 'Hostels', 'Medical Center', 'Innovation Labs', 'Moot Court']
  },
  {
    id: 'jaypee-university',
    name: 'Jaypee Institute of Information Technology',
    location: 'Noida, Uttar Pradesh',
    ranking: 42,
    established: 2001,
    type: 'Private',
    nirf_ranking: 65,
    image: 'https://i.ibb.co/BMW9dyX/Screenshot-2025-07-05-114254.png',
    accreditation: ['NAAC A', 'NBA'],
    campus_size: '165 acres',
    student_strength: 6500,
    faculty_ratio: '1:11',
    research_output: 420,
    international_collaborations: 35,
    courses: [
      {
        id: 'cse-jiit',
        name: 'Computer Science and Engineering',
        department: 'Computer Science',
        duration: '4 years',
        fees: 1100000,
        seats: 200,
        placement_rate: 90,
        avg_package: 850000,
        highest_package: 4500000,
        top_recruiters: ['Microsoft', 'Amazon', 'Adobe', 'Samsung', 'Oracle'],
        specializations: ['AI/ML', 'Data Science', 'Software Engineering', 'Cybersecurity'],
        industry_partnerships: ['Microsoft', 'Amazon', 'Adobe', 'Oracle']
      },
      {
        id: 'ece-jiit',
        name: 'Electronics and Communication Engineering',
        department: 'Electronics',
        duration: '4 years',
        fees: 1050000,
        seats: 150,
        placement_rate: 87,
        avg_package: 720000,
        highest_package: 3200000,
        top_recruiters: ['Samsung', 'Intel', 'Qualcomm', 'Texas Instruments'],
        specializations: ['VLSI Design', 'Embedded Systems', 'Communication Systems', 'IoT'],
        industry_partnerships: ['Samsung', 'Intel', 'Qualcomm']
      }
    ],
    placement_stats: {
      overall_placement_rate: 88.5,
      avg_package: 780000,
      highest_package: 4500000,
      median_package: 680000,
      total_offers: 580,
      top_recruiters: ['Microsoft', 'Amazon', 'Adobe', 'Samsung', 'Oracle'],
      placement_trends: [
        { year: 2020, rate: 84, avg_package: 620000 },
        { year: 2021, rate: 86, avg_package: 700000 },
        { year: 2022, rate: 88, avg_package: 750000 },
        { year: 2023, rate: 89, avg_package: 780000 }
      ],
      sector_wise_placement: [
        { sector: 'Technology', percentage: 65, avg_package: 850000 },
        { sector: 'Finance', percentage: 15, avg_package: 900000 },
        { sector: 'Consulting', percentage: 12, avg_package: 750000 },
        { sector: 'Core Engineering', percentage: 8, avg_package: 600000 }
      ],
      company_tier_distribution: [
        { tier: 'Tier 1', percentage: 30 },
        { tier: 'Tier 2', percentage: 45 },
        { tier: 'Tier 3', percentage: 25 }
      ]
    },
    facilities: ['Wi-Fi Campus', 'Library', 'Sports Complex', 'Hostels', 'Medical Center', 'Research Labs']
  },
  {
    id: 'gl-bajaj',
    name: 'GL Bajaj Institute of Technology and Management',
    location: 'Greater Noida, Uttar Pradesh',
    ranking: 68,
    established: 1998,
    type: 'Private',
    nirf_ranking: 95,
    image: 'https://i.ibb.co/sddvSRrX/Screenshot-2025-07-05-114852.png',
    accreditation: ['NAAC A', 'NBA'],
    campus_size: '40 acres',
    student_strength: 8000,
    faculty_ratio: '1:14',
    research_output: 180,
    international_collaborations: 15,
    courses: [
      {
        id: 'cse-glbajaj',
        name: 'Computer Science and Engineering',
        department: 'Computer Science',
        duration: '4 years',
        fees: 650000,
        seats: 180,
        placement_rate: 82,
        avg_package: 580000,
        highest_package: 2800000,
        top_recruiters: ['TCS', 'Infosys', 'Wipro', 'Cognizant', 'HCL'],
        specializations: ['Software Development', 'Web Technologies', 'Mobile Apps', 'Database Management'],
        industry_partnerships: ['TCS', 'Infosys', 'Wipro']
      },
      {
        id: 'mba-glbajaj',
        name: 'Master of Business Administration',
        department: 'Management',
        duration: '2 years',
        fees: 450000,
        seats: 120,
        placement_rate: 78,
        avg_package: 520000,
        highest_package: 1800000,
        top_recruiters: ['HDFC Bank', 'ICICI Bank', 'Bajaj Finserv', 'Reliance'],
        specializations: ['Finance', 'Marketing', 'HR', 'Operations'],
        industry_partnerships: ['HDFC Bank', 'ICICI Bank', 'Bajaj Finserv']
      }
    ],
    placement_stats: {
      overall_placement_rate: 80.2,
      avg_package: 550000,
      highest_package: 2800000,
      median_package: 480000,
      total_offers: 650,
      top_recruiters: ['TCS', 'Infosys', 'Wipro', 'Cognizant', 'HCL'],
      placement_trends: [
        { year: 2020, rate: 75, avg_package: 420000 },
        { year: 2021, rate: 77, avg_package: 480000 },
        { year: 2022, rate: 79, avg_package: 520000 },
        { year: 2023, rate: 80, avg_package: 550000 }
      ],
      sector_wise_placement: [
        { sector: 'Technology', percentage: 55, avg_package: 600000 },
        { sector: 'Finance', percentage: 20, avg_package: 550000 },
        { sector: 'Manufacturing', percentage: 15, avg_package: 480000 },
        { sector: 'Others', percentage: 10, avg_package: 450000 }
      ],
      company_tier_distribution: [
        { tier: 'Tier 1', percentage: 10 },
        { tier: 'Tier 2', percentage: 30 },
        { tier: 'Tier 3', percentage: 60 }
      ]
    },
    facilities: ['Wi-Fi Campus', 'Library', 'Sports Complex', 'Hostels', 'Medical Center']
  }
];

export const getCollegeById = (id: string): College | undefined => {
  return collegesData.find(college => college.id === id);
};

export const getTopColleges = (limit: number = 10): College[] => {
  return collegesData.slice(0, limit);
};

export const searchColleges = (query: string): College[] => {
  if (!query.trim()) return collegesData;
  
  const searchTerm = query.toLowerCase();
  return collegesData.filter(college => 
    college.name.toLowerCase().includes(searchTerm) ||
    college.location.toLowerCase().includes(searchTerm) ||
    college.type.toLowerCase().includes(searchTerm)
  );
};

export const getSimilarColleges = (query: string): string[] => {
  if (!query.trim()) return [];
  
  const searchTerm = query.toLowerCase();
  const suggestions = new Set<string>();
  
  collegesData.forEach(college => {
    const name = college.name.toLowerCase();
    const location = college.location.toLowerCase();
    
    // Add college names that start with or contain the search term
    if (name.includes(searchTerm)) {
      suggestions.add(college.name);
    }
    
    // Add location-based suggestions
    if (location.includes(searchTerm)) {
      suggestions.add(college.name);
    }
    
    // Add partial matches for better autocomplete
    const words = name.split(' ');
    words.forEach(word => {
      if (word.startsWith(searchTerm) && word.length > searchTerm.length) {
        suggestions.add(college.name);
      }
    });
  });
  
  return Array.from(suggestions).slice(0, 5);
};

// Enhanced search function that finds colleges by location alphabet
export const searchCollegesByLocation = (query: string): College | null => {
  if (!query.trim()) return null;
  
  const searchTerm = query.toLowerCase();
  
  // Find college by location starting with the search term
  const college = collegesData.find(college => {
    const location = college.location.toLowerCase();
    const locationWords = location.split(',').map(word => word.trim());
    
    // Check if any location word starts with the search term
    return locationWords.some(word => word.startsWith(searchTerm));
  });
  
  return college || null;
};