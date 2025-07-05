import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import StatsOverview from './components/StatsOverview';
import CollegeCard from './components/CollegeCard';
import CollegeDetail from './components/CollegeDetail';
import FilterSection from './components/FilterSection';
import { collegesData, College, searchColleges, getCollegeById } from './data/collegesData';

function App() {
  const [selectedCollege, setSelectedCollege] = useState<College | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    type: '',
    location: '',
    ranking: ''
  });

  const filteredColleges = useMemo(() => {
    let colleges = searchQuery ? searchColleges(searchQuery) : collegesData;
    
    if (filters.type) {
      colleges = colleges.filter(college => college.type === filters.type);
    }
    
    if (filters.location) {
      colleges = colleges.filter(college => 
        college.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }
    
    if (filters.ranking) {
      const [min, max] = filters.ranking.split('-').map(Number);
      colleges = colleges.filter(college => 
        college.ranking >= min && college.ranking <= max
      );
    }
    
    return colleges;
  }, [searchQuery, filters]);

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleCollegeSelect = (collegeId: string) => {
    const college = getCollegeById(collegeId);
    if (college) {
      setSelectedCollege(college);
    }
  };

  if (selectedCollege) {
    return (
      <CollegeDetail 
        college={selectedCollege} 
        onBack={() => setSelectedCollege(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header 
        onSearch={setSearchQuery} 
        searchQuery={searchQuery}
        onCollegeSelect={handleCollegeSelect}
      />
      <StatsOverview />
      
      <main className="container mx-auto px-4 py-6">
        <FilterSection 
          filters={filters} 
          onFilterChange={handleFilterChange}
        />
        
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-black mb-2">
              {searchQuery ? `🔍 Search Results for "${searchQuery}"` : '🏆 Top Colleges in India'}
            </h2>
            <p className="text-lg text-gray-700">
              🚀 Discover the best educational institutions with comprehensive analytics and insights
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl px-6 py-3 shadow-lg border border-gray-200">
            <div className="text-2xl font-bold text-black">
              {filteredColleges.length}
            </div>
            <div className="text-sm text-gray-600 font-medium">
              college{filteredColleges.length !== 1 ? 's' : ''} found
            </div>
          </div>
        </div>
        
        {filteredColleges.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredColleges.map((college) => (
              <CollegeCard
                key={college.id}
                college={college}
                onClick={() => setSelectedCollege(college)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="bg-gray-50 rounded-xl p-12 shadow-xl border border-gray-200 max-w-md mx-auto">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🔍</span>
              </div>
              <div className="text-gray-700 text-xl mb-3 font-bold">No colleges found</div>
              <div className="text-gray-500">Try adjusting your search criteria or filters</div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;