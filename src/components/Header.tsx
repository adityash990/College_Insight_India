import React from 'react';
import { GraduationCap, BarChart3, Sparkles, Zap, Star } from 'lucide-react';
import SearchWithAutocomplete from './SearchWithAutocomplete';

interface HeaderProps {
  onSearch: (query: string) => void;
  searchQuery: string;
  onCollegeSelect?: (collegeId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch, searchQuery, onCollegeSelect }) => {
  return (
    <header className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden py-12">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-16 right-0 w-56 h-56 bg-gray-300/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/3 w-48 h-48 bg-white/3 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce delay-1500"></div>
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-white rounded-full animate-bounce delay-2500"></div>
      </div>
      
      <div className="relative container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-700 to-black p-2.5 rounded-xl border border-gray-600">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <Sparkles className="w-3 h-3 text-gray-300 absolute -top-0.5 -right-0.5 animate-pulse" />
              <Zap className="w-2.5 h-2.5 text-white absolute -bottom-0.5 -left-0.5 animate-pulse delay-1000" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">
                CollegeInsight India
              </h1>
              <p className="text-gray-300 text-sm font-medium">🚀 Premium Analytics Platform</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-xl px-3 py-2 border border-gray-600">
              <BarChart3 className="w-5 h-5 text-gray-300" />
              <div>
                <div className="text-sm font-bold">Advanced Analytics</div>
                <div className="text-xs text-gray-400">Real-time Insights</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white leading-tight">
            Discover Your Perfect College
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-5">
            🎯 Comprehensive analysis of India's top educational institutions with 
            <span className="text-white font-semibold"> real-time placement data</span>, 
            <span className="text-gray-200 font-semibold"> course insights</span>, and 
            <span className="text-gray-100 font-semibold"> intelligent recommendations</span>.
          </p>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-gray-600">
              <Star className="w-5 h-5 text-white mx-auto mb-1" />
              <h3 className="text-base font-bold text-white mb-1">150+ Colleges</h3>
              <p className="text-gray-300 text-sm">Comprehensive database</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-gray-600">
              <Zap className="w-5 h-5 text-gray-200 mx-auto mb-1" />
              <h3 className="text-base font-bold text-gray-200 mb-1">Real-time Data</h3>
              <p className="text-gray-300 text-sm">Live placement statistics</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-gray-600">
              <BarChart3 className="w-5 h-5 text-gray-100 mx-auto mb-1" />
              <h3 className="text-base font-bold text-gray-100 mb-1">AI-Powered Insights</h3>
              <p className="text-gray-300 text-sm">Smart recommendations</p>
            </div>
          </div>
        </div>
        
        <SearchWithAutocomplete 
          onSearch={onSearch} 
          searchQuery={searchQuery}
          onCollegeSelect={onCollegeSelect}
        />
        
        <div className="flex justify-center mt-5 space-x-6 text-sm text-gray-300">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="font-medium">19 Colleges</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse delay-300"></div>
            <span className="font-medium">Real-time Data</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-gray-100 rounded-full animate-pulse delay-700"></div>
            <span className="font-medium">Location Search</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;