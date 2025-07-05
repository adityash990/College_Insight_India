import React, { useState } from 'react';
import { ArrowLeft, MapPin, Calendar, Building, Award, TrendingUp, Users, IndianRupee, Star, Globe, BookOpen } from 'lucide-react';
import { College } from '../data/collegesData';
import PlacementChart from './PlacementChart';
import CourseAnalysis from './CourseAnalysis';
import EnhancedAnalytics from './EnhancedAnalytics';

interface CollegeDetailProps {
  college: College;
  onBack: () => void;
}

const CollegeDetail: React.FC<CollegeDetailProps> = ({ college, onBack }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Building },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'placements', label: 'Placements', icon: Award }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-all duration-300 mb-6 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Colleges</span>
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-start space-x-4 mb-6">
                <img 
                  src={college.image} 
                  alt={college.name}
                  className="w-20 h-20 rounded-2xl object-cover border-4 border-white/20"
                />
                <div>
                  <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
                    {college.name}
                  </h1>
                  <div className="flex flex-wrap gap-4 text-emerald-200">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{college.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>Est. {college.established}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Building className="w-4 h-4" />
                      <span>{college.type}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                  <h3 className="font-semibold mb-3 flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    Student Info
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Total Students:</span>
                      <span className="font-medium">{college.student_strength.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Faculty Ratio:</span>
                      <span className="font-medium">{college.faculty_ratio}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Campus Size:</span>
                      <span className="font-medium">{college.campus_size}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                  <h3 className="font-semibold mb-3 flex items-center">
                    <Globe className="w-5 h-5 mr-2" />
                    Research & Global Reach
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Research Papers:</span>
                      <span className="font-medium">{college.research_output}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Global Partners:</span>
                      <span className="font-medium">{college.international_collaborations}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Star className="w-5 h-5 mr-2" />
                  Facilities & Amenities
                </h3>
                <div className="flex flex-wrap gap-2">
                  {college.facilities.map((facility, index) => (
                    <span key={index} className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                      {facility}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">#{college.ranking}</div>
                <div className="text-sm text-emerald-200">Overall Ranking</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">#{college.nirf_ranking}</div>
                <div className="text-sm text-orange-200">NIRF Ranking</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="font-semibold mb-4">Accreditations</h3>
                <div className="space-y-2">
                  {college.accreditation.map((acc, index) => (
                    <div key={index} className="bg-white/20 px-3 py-2 rounded-lg text-sm text-center">
                      {acc}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Quick Stats */}
      <div className="container mx-auto px-4 -mt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center border border-gray-100">
            <TrendingUp className="w-10 h-10 mx-auto mb-3 text-blue-600" />
            <div className="text-3xl font-bold text-blue-900 mb-1">
              {college.placement_stats.overall_placement_rate}%
            </div>
            <div className="text-gray-600">Placement Rate</div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center border border-gray-100">
            <Award className="w-10 h-10 mx-auto mb-3 text-emerald-600" />
            <div className="text-3xl font-bold text-emerald-900 mb-1">
              ₹{(college.placement_stats.avg_package / 100000).toFixed(1)}L
            </div>
            <div className="text-gray-600">Average Package</div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center border border-gray-100">
            <Users className="w-10 h-10 mx-auto mb-3 text-orange-600" />
            <div className="text-3xl font-bold text-orange-900 mb-1">
              {college.placement_stats.total_offers}
            </div>
            <div className="text-gray-600">Total Offers</div>
          </div>
        </div>
      </div>
      
      {/* Tabs Navigation */}
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg p-2 mb-8 border border-gray-100">
          <div className="flex space-x-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Tab Content */}
        <div className="pb-12">
          {activeTab === 'overview' && (
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">College Overview</h2>
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  {college.name} is a {college.type.toLowerCase()} institution established in {college.established}, 
                  located in {college.location}. With a strong focus on academic excellence and industry partnerships, 
                  the college has consistently maintained high placement rates and quality education standards.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Highlights</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Ranked #{college.ranking} overall and #{college.nirf_ranking} in NIRF</li>
                      <li>• {college.placement_stats.overall_placement_rate}% placement rate</li>
                      <li>• {college.student_strength.toLocaleString()} students across {college.courses.length} courses</li>
                      <li>• {college.international_collaborations} international collaborations</li>
                      <li>• {college.research_output} research publications annually</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Campus Facilities</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {college.facilities.map((facility, index) => (
                        <div key={index} className="bg-blue-50 text-blue-800 px-3 py-2 rounded-lg text-sm text-center">
                          {facility}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'analytics' && <EnhancedAnalytics college={college} />}
          
          {activeTab === 'courses' && <CourseAnalysis college={college} />}
          
          {activeTab === 'placements' && (
            <div className="space-y-8">
              <PlacementChart college={college} />
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold mb-6">Top Recruiters</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {college.placement_stats.top_recruiters.map((recruiter, index) => (
                    <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-100 p-4 rounded-xl text-center border border-blue-200">
                      <div className="font-semibold text-blue-900">{recruiter}</div>
                      <div className="text-sm text-blue-600">Top Recruiter</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CollegeDetail;