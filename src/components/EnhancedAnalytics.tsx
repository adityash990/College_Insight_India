import React from 'react';
import { Doughnut, Radar, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale,
} from 'chart.js';
import { College } from '../data/collegesData';
import { TrendingUp, Users, Award, Building, Globe, BookOpen, Zap, Target, Sparkles } from 'lucide-react';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale
);

interface EnhancedAnalyticsProps {
  college: College;
}

const EnhancedAnalytics: React.FC<EnhancedAnalyticsProps> = ({ college }) => {
  const sectorData = {
    labels: college.placement_stats.sector_wise_placement.map(sector => sector.sector),
    datasets: [
      {
        data: college.placement_stats.sector_wise_placement.map(sector => sector.percentage),
        backgroundColor: [
          'rgba(59, 130, 246, 0.9)',
          'rgba(16, 185, 129, 0.9)',
          'rgba(245, 158, 11, 0.9)',
          'rgba(139, 92, 246, 0.9)',
          'rgba(239, 68, 68, 0.9)',
        ],
        borderColor: [
          'rgba(59, 130, 246, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(245, 158, 11, 1)',
          'rgba(139, 92, 246, 1)',
          'rgba(239, 68, 68, 1)',
        ],
        borderWidth: 3,
        hoverBorderWidth: 5,
        hoverOffset: 10,
      },
    ],
  };

  const tierData = {
    labels: college.placement_stats.company_tier_distribution.map(tier => tier.tier),
    datasets: [
      {
        data: college.placement_stats.company_tier_distribution.map(tier => tier.percentage),
        backgroundColor: [
          'rgba(34, 197, 94, 0.9)',
          'rgba(59, 130, 246, 0.9)',
          'rgba(245, 158, 11, 0.9)',
        ],
        borderColor: [
          'rgba(34, 197, 94, 1)',
          'rgba(59, 130, 246, 1)',
          'rgba(245, 158, 11, 1)',
        ],
        borderWidth: 3,
        hoverBorderWidth: 5,
        hoverOffset: 10,
      },
    ],
  };

  const performanceData = {
    labels: [
      'Placement Rate',
      'Research Output',
      'Faculty Ratio',
      'International Collaborations',
      'Industry Partnerships',
      'Student Satisfaction'
    ],
    datasets: [
      {
        label: college.name,
        data: [
          college.placement_stats.overall_placement_rate,
          Math.min((college.research_output / 50), 100),
          Math.min((15 / parseInt(college.faculty_ratio.split(':')[1])) * 100, 100),
          Math.min((college.international_collaborations / 2), 100),
          Math.min((college.courses.reduce((sum, course) => sum + course.industry_partnerships.length, 0) / 2), 100),
          85 // Mock satisfaction score
        ],
        backgroundColor: 'rgba(59, 130, 246, 0.3)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 3,
        pointBackgroundColor: 'rgba(59, 130, 246, 1)',
        pointBorderColor: '#fff',
        pointBorderWidth: 3,
        pointRadius: 8,
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(59, 130, 246, 1)',
        pointHoverRadius: 12,
      },
    ],
  };

  const packageTrendData = {
    labels: college.placement_stats.placement_trends.map(trend => trend.year.toString()),
    datasets: [
      {
        label: 'Average Package Growth',
        data: college.placement_stats.placement_trends.map(trend => trend.avg_package / 100000),
        backgroundColor: [
          'rgba(16, 185, 129, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(139, 92, 246, 0.8)',
          'rgba(245, 158, 11, 0.8)',
        ],
        borderColor: 'rgba(16, 185, 129, 1)',
        borderWidth: 3,
        borderRadius: 12,
        borderSkipped: false,
        hoverBackgroundColor: [
          'rgba(16, 185, 129, 1)',
          'rgba(59, 130, 246, 1)',
          'rgba(139, 92, 246, 1)',
          'rgba(245, 158, 11, 1)',
        ],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          padding: 20,
          usePointStyle: true,
          font: {
            size: 12,
            weight: 'bold' as const,
          },
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 2,
        cornerRadius: 12,
        displayColors: true,
      },
    },
  };

  const radarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 2,
        cornerRadius: 12,
      },
    },
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20,
          color: 'rgba(107, 114, 128, 0.8)',
          font: {
            size: 10,
          },
        },
        grid: {
          color: 'rgba(107, 114, 128, 0.2)',
        },
        angleLines: {
          color: 'rgba(107, 114, 128, 0.2)',
        },
        pointLabels: {
          color: 'rgba(55, 65, 81, 1)',
          font: {
            size: 11,
            weight: 'bold' as const,
          },
        },
      },
    },
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'rgba(16, 185, 129, 1)',
        borderWidth: 2,
        cornerRadius: 12,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: 'rgba(107, 114, 128, 0.8)',
          font: {
            weight: 'bold' as const,
          },
        },
      },
      y: {
        grid: {
          color: 'rgba(107, 114, 128, 0.1)',
        },
        ticks: {
          color: 'rgba(107, 114, 128, 0.8)',
          font: {
            weight: 'bold' as const,
          },
        },
      },
    },
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 p-3 rounded-2xl">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
        </div>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
          Advanced Analytics Dashboard
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Comprehensive insights into placement patterns, industry distribution, and institutional performance metrics.
        </p>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-3xl p-6 text-white transform hover:scale-105 transition-all duration-300 shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <Users className="w-10 h-10 text-white" />
            <span className="text-3xl font-bold">{college.student_strength.toLocaleString()}</span>
          </div>
          <h3 className="font-bold text-lg">Student Strength</h3>
          <p className="text-cyan-100">Total enrolled students</p>
          <div className="mt-2 bg-white/20 rounded-full h-2">
            <div className="bg-white rounded-full h-2 w-3/4"></div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 rounded-3xl p-6 text-white transform hover:scale-105 transition-all duration-300 shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <BookOpen className="w-10 h-10 text-white" />
            <span className="text-3xl font-bold">{college.research_output}</span>
          </div>
          <h3 className="font-bold text-lg">Research Papers</h3>
          <p className="text-emerald-100">Annual publications</p>
          <div className="mt-2 bg-white/20 rounded-full h-2">
            <div className="bg-white rounded-full h-2 w-4/5"></div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 rounded-3xl p-6 text-white transform hover:scale-105 transition-all duration-300 shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <Globe className="w-10 h-10 text-white" />
            <span className="text-3xl font-bold">{college.international_collaborations}</span>
          </div>
          <h3 className="font-bold text-lg">Global Partnerships</h3>
          <p className="text-purple-100">International collaborations</p>
          <div className="mt-2 bg-white/20 rounded-full h-2">
            <div className="bg-white rounded-full h-2 w-2/3"></div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-400 via-yellow-500 to-amber-500 rounded-3xl p-6 text-white transform hover:scale-105 transition-all duration-300 shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <Building className="w-10 h-10 text-white" />
            <span className="text-2xl font-bold">{college.campus_size}</span>
          </div>
          <h3 className="font-bold text-lg">Campus Size</h3>
          <p className="text-orange-100">Total area</p>
          <div className="mt-2 bg-white/20 rounded-full h-2">
            <div className="bg-white rounded-full h-2 w-5/6"></div>
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Sector-wise Placement */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20 hover:shadow-3xl transition-all duration-300">
          <div className="flex items-center mb-6">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-xl mr-3">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Sector-wise Placement Distribution
            </h3>
          </div>
          <div className="h-80 mb-6">
            <Doughnut data={sectorData} options={chartOptions} />
          </div>
          <div className="space-y-3">
            {college.placement_stats.sector_wise_placement.map((sector, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl">
                <span className="font-semibold text-gray-800">{sector.sector}</span>
                <div className="text-right">
                  <div className="font-bold text-blue-600">{sector.percentage}%</div>
                  <div className="text-sm text-gray-600">₹{(sector.avg_package / 100000).toFixed(1)}L avg</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Tier Distribution */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20 hover:shadow-3xl transition-all duration-300">
          <div className="flex items-center mb-6">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-2 rounded-xl mr-3">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Company Tier Distribution
            </h3>
          </div>
          <div className="h-80 mb-6">
            <Doughnut data={tierData} options={chartOptions} />
          </div>
          <div className="space-y-3">
            {college.placement_stats.company_tier_distribution.map((tier, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-gradient-to-r from-gray-50 to-emerald-50 rounded-xl">
                <span className="font-semibold text-gray-800">{tier.tier} Companies</span>
                <span className="font-bold text-emerald-600">{tier.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Radar */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20 hover:shadow-3xl transition-all duration-300">
          <div className="flex items-center mb-6">
            <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-2 rounded-xl mr-3">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Institutional Performance
            </h3>
          </div>
          <div className="h-80">
            <Radar data={performanceData} options={radarOptions} />
          </div>
        </div>

        {/* Package Growth Trend */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20 hover:shadow-3xl transition-all duration-300">
          <div className="flex items-center mb-6">
            <div className="bg-gradient-to-r from-orange-500 to-red-600 p-2 rounded-xl mr-3">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Package Growth Trend
            </h3>
          </div>
          <div className="h-80">
            <Bar data={packageTrendData} options={barOptions} />
          </div>
        </div>
      </div>

      {/* Accreditation and Rankings */}
      <div className="bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-600 rounded-3xl p-8 text-white shadow-2xl">
        <h3 className="text-3xl font-bold text-center mb-8 flex items-center justify-center">
          <Award className="w-8 h-8 mr-3" />
          Accreditation & Recognition
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-4">
              <Award className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
              <h4 className="font-bold text-xl mb-4">Accreditations</h4>
              <div className="space-y-2">
                {college.accreditation.map((acc, index) => (
                  <span key={index} className="inline-block bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mr-2 mb-2">
                    {acc}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-4">
              <TrendingUp className="w-16 h-16 mx-auto mb-4 text-green-300" />
              <h4 className="font-bold text-xl mb-4">Rankings</h4>
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-green-400 to-blue-500 px-6 py-3 rounded-xl">
                  <div className="text-2xl font-bold">#{college.ranking}</div>
                  <div className="text-sm">Overall Ranking</div>
                </div>
                <div className="bg-gradient-to-r from-orange-400 to-red-500 px-6 py-3 rounded-xl">
                  <div className="text-2xl font-bold">#{college.nirf_ranking}</div>
                  <div className="text-sm">NIRF Ranking</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-4">
              <Building className="w-16 h-16 mx-auto mb-4 text-blue-300" />
              <h4 className="font-bold text-xl mb-4">Institution Type</h4>
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-purple-400 to-pink-500 px-6 py-3 rounded-xl">
                  <div className="text-xl font-bold">{college.type}</div>
                </div>
                <div className="text-lg">
                  Est. {college.established}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedAnalytics;