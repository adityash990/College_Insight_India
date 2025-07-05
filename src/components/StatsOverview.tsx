import React from 'react';
import { GraduationCap, TrendingUp, Award, Building2, Users, Globe, BookOpen, Star, Zap, Target } from 'lucide-react';
import { collegesData } from '../data/collegesData';

const StatsOverview: React.FC = () => {
  const totalColleges = collegesData.length;
  const avgPlacementRate = collegesData.reduce((sum, college) => sum + college.placement_stats.overall_placement_rate, 0) / totalColleges;
  const avgPackage = collegesData.reduce((sum, college) => sum + college.placement_stats.avg_package, 0) / totalColleges;
  const totalCourses = collegesData.reduce((sum, college) => sum + college.courses.length, 0);
  const totalStudents = collegesData.reduce((sum, college) => sum + college.student_strength, 0);
  const totalResearchPapers = collegesData.reduce((sum, college) => sum + college.research_output, 0);

  const stats = [
    {
      icon: Building2,
      title: 'Total Colleges',
      value: totalColleges.toString(),
      gradient: 'from-gray-800 to-black',
      description: 'Premium institutions analyzed',
      trend: '+12% this year',
      emoji: '🏛️'
    },
    {
      icon: Users,
      title: 'Total Students',
      value: `${(totalStudents / 1000).toFixed(0)}K+`,
      gradient: 'from-gray-700 to-gray-900',
      description: 'Students across all colleges',
      trend: 'Growing community',
      emoji: '👥'
    },
    {
      icon: TrendingUp,
      title: 'Avg Placement Rate',
      value: `${avgPlacementRate.toFixed(1)}%`,
      gradient: 'from-black to-gray-800',
      description: 'Overall success rate',
      trend: '+5.2% from last year',
      emoji: '📈'
    },
    {
      icon: Award,
      title: 'Avg Package',
      value: `₹${(avgPackage / 100000).toFixed(1)}L`,
      gradient: 'from-gray-900 to-black',
      description: 'Annual compensation',
      trend: '+18% growth',
      emoji: '💰'
    },
    {
      icon: GraduationCap,
      title: 'Total Courses',
      value: totalCourses.toString(),
      gradient: 'from-gray-800 to-gray-900',
      description: 'Diverse specializations',
      trend: 'Multiple domains',
      emoji: '🎓'
    },
    {
      icon: BookOpen,
      title: 'Research Papers',
      value: `${(totalResearchPapers / 1000).toFixed(1)}K+`,
      gradient: 'from-black to-gray-700',
      description: 'Annual publications',
      trend: 'High research output',
      emoji: '📚'
    }
  ];

  return (
    <section className="py-6 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-gray-100 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-gray-200 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center mb-3">
            <div className="bg-gradient-to-r from-gray-800 to-black p-2.5 rounded-xl border border-gray-300">
              <Zap className="w-5 h-5 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-black">
            Platform Analytics
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            🚀 Comprehensive insights from India's top educational institutions with 
            <span className="text-black font-bold"> real-time data</span>, 
            <span className="text-gray-800 font-bold"> advanced analytics</span>, and 
            <span className="text-gray-900 font-bold"> intelligent recommendations</span> for your academic journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`group bg-gradient-to-br ${stat.gradient} rounded-xl p-4 text-white transform hover:scale-105 transition-all duration-500 hover:shadow-xl relative overflow-hidden border border-gray-600`}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-xl group-hover:scale-110 transition-transform duration-300 border border-gray-500">
                    <stat.icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-lg">{stat.emoji}</div>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </h3>
                
                <p className="font-bold text-sm mb-1">{stat.title}</p>
                <p className="text-white/80 mb-2 text-xs">{stat.description}</p>
                
                <div className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-bold inline-flex items-center space-x-1 border border-gray-500">
                  <Star className="w-3 h-3" />
                  <span>{stat.trend}</span>
                </div>
                
                {/* Progress bar */}
                <div className="mt-2 bg-white/20 rounded-full h-1">
                  <div className="bg-white rounded-full h-1 transition-all duration-1000 group-hover:w-full" style={{width: `${70 + (index * 5)}%`}}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional insights */}
        <div className="mt-6 bg-gray-50 rounded-xl p-5 border border-gray-200 shadow-lg">
          <div className="text-center mb-5">
            <div className="flex items-center justify-center mb-2">
              <Target className="w-5 h-5 text-black mr-2" />
              <h3 className="text-xl font-bold text-black">
                Why Choose Our Platform?
              </h3>
            </div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              🎯 Get access to the most comprehensive college database with real-time analytics, 
              placement insights, and personalized recommendations powered by AI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-gray-800 to-black w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg border border-gray-600">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-base text-black mb-2">📊 Real-time Data</h4>
              <p className="text-gray-700 text-sm">Live placement statistics and course updates with instant notifications</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-gray-700 to-gray-900 w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg border border-gray-600">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-base text-black mb-2">🌍 Comprehensive Coverage</h4>
              <p className="text-gray-700 text-sm">All major colleges across India with detailed insights and analytics</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-black to-gray-800 w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg border border-gray-600">
                <Award className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-base text-black mb-2">🤖 Smart Recommendations</h4>
              <p className="text-gray-700 text-sm">AI-powered suggestions based on your preferences and career goals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsOverview;