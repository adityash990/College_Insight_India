import React, { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { getSimilarColleges, searchCollegesByLocation, getCollegeById } from '../data/collegesData';

interface SearchWithAutocompleteProps {
  onSearch: (query: string) => void;
  searchQuery: string;
  onCollegeSelect?: (collegeId: string) => void;
}

const SearchWithAutocomplete: React.FC<SearchWithAutocompleteProps> = ({ 
  onSearch, 
  searchQuery, 
  onCollegeSelect 
}) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchQuery.length > 0) {
      const similarColleges = getSimilarColleges(searchQuery);
      setSuggestions(similarColleges);
      setShowSuggestions(similarColleges.length > 0);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
    setActiveSuggestion(-1);
  }, [searchQuery]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onSearch(value);
    
    // Check for location-based search and auto-navigate
    if (value.length === 1) {
      const foundCollege = searchCollegesByLocation(value);
      if (foundCollege && onCollegeSelect) {
        // Small delay to show the search happening
        setTimeout(() => {
          onCollegeSelect(foundCollege.id);
        }, 500);
      }
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    onSearch(suggestion);
    setShowSuggestions(false);
    setActiveSuggestion(-1);
    
    // Auto-navigate to college if exact match
    const foundCollege = getCollegeById(suggestion.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''));
    if (foundCollege && onCollegeSelect) {
      setTimeout(() => {
        onCollegeSelect(foundCollege.id);
      }, 300);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setActiveSuggestion(prev => 
          prev < suggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActiveSuggestion(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        e.preventDefault();
        if (activeSuggestion >= 0) {
          handleSuggestionClick(suggestions[activeSuggestion]);
        }
        break;
      case 'Escape':
        setShowSuggestions(false);
        setActiveSuggestion(-1);
        break;
    }
  };

  const clearSearch = () => {
    onSearch('');
    setShowSuggestions(false);
    setActiveSuggestion(-1);
    inputRef.current?.focus();
  };

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search colleges by name, location, or type... (Try typing 'P' for Patiala)"
          value={searchQuery}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
          className="w-full pl-12 pr-12 py-4 rounded-xl bg-white border-2 border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-black/20 focus:border-black transition-all duration-300 shadow-lg text-lg"
        />
        {searchQuery && (
          <button
            onClick={clearSearch}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div
          ref={suggestionsRef}
          className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 max-h-64 overflow-y-auto"
        >
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className={`px-4 py-3 cursor-pointer transition-all duration-200 ${
                index === activeSuggestion
                  ? 'bg-gray-100 text-black'
                  : 'hover:bg-gray-50'
              } ${index === 0 ? 'rounded-t-xl' : ''} ${
                index === suggestions.length - 1 ? 'rounded-b-xl' : 'border-b border-gray-100'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Search className="w-4 h-4 text-gray-400" />
                <span className="text-gray-800">{suggestion}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchWithAutocomplete;