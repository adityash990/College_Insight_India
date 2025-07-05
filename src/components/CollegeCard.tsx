import React from 'react';
import { MapPin, Users, Award, TrendingUp, Building, Star, Globe, BookOpen, Zap, Target } from 'lucide-react';
import { College } from '../data/collegesData';

interface CollegeCardProps {
  college: College;
  onClick: () => void;
}

const CollegeCard: React.FC<CollegeCardProps> = ({ college, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 hover:scale-102 border border-gray-200 overflow-hidden relative"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/0 to-black/0 group-hover:from-gray-900/10 group-hover:to-black/10 transition-all duration-500 z-10"></div>
      
      <div className="relative z-20">
        <div className="relative overflow-hidden">
          <img 
            src={college.image} 
            alt={college.name}
            className="w-full h-44 object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          
          {/* Rankings */}
          <div className="absolute top-3 left-3 flex space-x-2">
            <div className="bg-black backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg border border-gray-600">
              🏆 #{college.ranking}
            </div>
            <div className="bg-gray-800 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg border border-gray-600">
              📊 NIRF #{college.nirf_ranking}
            </div>
          </div>
          
          {/* Type badge */}
          <div className="absolute top-3 right-3">
            <span className="bg-gray-900 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg border border-gray-600">
              {college.type}
            </span>
          </div>
          
          {/* Quick stats overlay */}
          <div className="absolute bottom-3 left-3 right-3">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-gray-200">
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="text-lg font-bold text-black">
                    {college.placement_stats.overall_placement_rate}%
                  </div>
                  <div className="text-xs text-gray-600 font-medium">Placement</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-800">
                    ₹{(college.placement_stats.avg_package / 100000).toFixed(1)}L
                  </div>
                  <div className="text-xs text-gray-600 font-medium">Avg Package</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-700">
                    {college.courses.length}
                  </div>
                  <div className="text-xs text-gray-600 font-medium">Courses</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-5">
          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-black transition-all duration-300">
            {college.name}
          </h3>
          
          <div className="flex items-center text-gray-600 mb-3">
            <MapPin className="w-4 h-4 mr-2 text-black" />
            <span className="text-sm font-medium">{college.location}</span>
            <span className="mx-2 text-gray-500">•</span>
            <span className="text-sm font-medium">Est. {college.established}</span>
          </div>
          
          {/* Enhanced metrics */}
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="bg-gray-50 rounded-xl p-3 text-center border border-gray-200 group-hover:border-gray-400 transition-all duration-300">
              <Users className="w-5 h-5 mx-auto mb-1 text-black" />
              <div className="text-sm font-bold text-black">{(college.student_strength / 1000).toFixed(1)}K</div>
              <div className="text-xs text-gray-700 font-medium">Students</div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-3 text-center border border-gray-200 group-hover:border-gray-400 transition-all duration-300">
              <Globe className="w-5 h-5 mx-auto mb-1 text-gray-800" />
              <div className="text-sm font-bold text-gray-800">{college.international_collaborations}</div>
              <div className="text-xs text-gray-700 font-medium">Global Partners</div>
            </div>
          </div>
          
          {/* Research output */}
          <div className="bg-gray-50 rounded-xl p-3 mb-3 border border-gray-200 group-hover:border-gray-400 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-4 h-4 text-gray-800" />
                <span className="text-sm font-bold text-gray-800">Research Output</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-sm font-bold text-black">{college.research_output}</span>
                <span className="text-xs text-gray-700">papers/year</span>
              </div>
            </div>
          </div>
          
          {/* Accreditations */}
          <div className="mb-3">
            <div className="flex flex-wrap gap-1">
              {college.accreditation.slice(0, 2).map((acc, index) => (
                <span key={index} className="bg-gray-100 text-gray-800 px-2 py-1 rounded-lg text-xs font-bold border border-gray-300">
                  {acc}
                </span>
              ))}
              {college.accreditation.length > 2 && (
                <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-lg text-xs font-bold border border-gray-300">
                  +{college.accreditation.length - 2} more
                </span>
              )}
            </div>
          </div>
          
          {/* Action button */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-600 font-medium">Faculty Ratio {college.faculty_ratio}</span>
            </div>
            <div className="text-sm font-bold text-black group-hover:text-gray-800 transition-all duration-300 flex items-center">
              Explore Details 
              <span className="ml-1 group-hover:translate-x-1 transition-transform text-gray-800">🚀</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;