import React from 'react';
import { Bar } from 'react-chartjs-2';
import { College } from '../data/collegesData';
import { GraduationCap, IndianRupee, TrendingUp, Users } from 'lucide-react';

interface CourseAnalysisProps {
  college: College;
}

const CourseAnalysis: React.FC<CourseAnalysisProps> = ({ college }) => {
  const chartData = {
    labels: college.courses.map(course => course.name.split(' ').slice(0, 2).join(' ')),
    datasets: [
      {
        label: 'Placement Rate (%)',
        data: college.courses.map(course => course.placement_rate),
        backgroundColor: 'rgba(59, 130, 246, 0.6)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 2,
        yAxisID: 'y',
      },
      {
        label: 'Average Package (Lakhs)',
        data: college.courses.map(course => course.avg_package / 100000),
        backgroundColor: 'rgba(16, 185, 129, 0.6)',
        borderColor: 'rgba(16, 185, 129, 1)',
        borderWidth: 2,
        yAxisID: 'y1',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Course-wise Placement Analysis',
        font: {
          size: 16,
          weight: 'bold' as const,
        },
      },
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Courses',
        },
      },
      y: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
        title: {
          display: true,
          text: 'Placement Rate (%)',
        },
        min: 80,
        max: 100,
      },
      y1: {
        type: 'linear' as const,
        display: true,
        position: 'right' as const,
        title: {
          display: true,
          text: 'Average Package (Lakhs)',
        },
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Course Analysis</h2>
      
      <div className="bg-white rounded-lg shadow-lg p-6">
        <Bar data={chartData} options={options} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {college.courses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <GraduationCap className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-lg font-bold text-gray-900">{course.name}</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Department:</span>
                <span className="font-medium">{course.department}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Duration:</span>
                <span className="font-medium">{course.duration}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Fees:</span>
                <span className="font-medium">₹{(course.fees / 100000).toFixed(1)}L</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Seats:</span>
                <span className="font-medium">{course.seats}</span>
              </div>
              
              <div className="border-t pt-3">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">{course.placement_rate}%</div>
                    <div className="text-xs text-gray-600">Placement Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-emerald-600">₹{(course.avg_package / 100000).toFixed(1)}L</div>
                    <div className="text-xs text-gray-600">Avg Package</div>
                  </div>
                </div>
              </div>
              
              <div className="border-t pt-3">
                <div className="text-center">
                  <div className="text-lg font-bold text-orange-600">₹{(course.highest_package / 100000).toFixed(1)}L</div>
                  <div className="text-xs text-gray-600">Highest Package</div>
                </div>
              </div>
              
              <div className="border-t pt-3">
                <h4 className="font-semibold text-gray-900 mb-2">Top Recruiters</h4>
                <div className="space-y-1">
                  {course.top_recruiters.slice(0, 3).map((recruiter, index) => (
                    <div key={index} className="text-sm text-gray-700">• {recruiter}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseAnalysis;