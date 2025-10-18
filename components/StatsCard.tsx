import React from 'react'

interface StatsCardProps {
  headerTitle: string;
  total: number;
  currentMonthCount: number;
  lastMonthCount: number;
  iconSrc: string;
  iconAlt: string;
  trend: string;
  trendType: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ 
  headerTitle, 
  total, 
  currentMonthCount, 
  lastMonthCount, 
  iconSrc, 
  iconAlt, 
  trend,
  trendType
}) => {
  // Create simple chart data points for visual effect
  const chartPoints = [
    { x: 0, y: 20 },
    { x: 20, y: 15 },
    { x: 40, y: 25 },
    { x: 60, y: 18 },
    { x: 80, y: 5 },
    { x: 100, y: 2 }
  ];

  return (
    <div className="stats-card">
      <div className="content">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <img src={iconSrc} alt={iconAlt} className="size-5 opacity-70" />
            <h3 className="p-18-semibold text-gray-700">{headerTitle}</h3>
          </div>
          <p className="p-30-bold text-primary-500 mb-3">{total.toLocaleString()}</p>
          
          {/* Mini Line Chart */}
          <div className="mb-3">
            <svg width="100" height="30" className="opacity-60">
              <polyline
                fill="none"
                stroke={trendType === 'increase' ? '#10b981' : '#ef4444'}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                points={chartPoints.map(point => `${point.x},${point.y}`).join(' ')}
              />
              {/* Add dots at data points */}
              {chartPoints.map((point, index) => (
                <circle
                  key={index}
                  cx={point.x}
                  cy={point.y}
                  r="2"
                  fill={trendType === 'increase' ? '#10b981' : '#ef4444'}
                  className="opacity-80"
                />
              ))}
            </svg>
          </div>
        </div>
        
        <div className="flex items-center gap-2 self-end">
          <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
            trendType === 'increase' 
              ? 'bg-green-100 text-green-700' 
              : 'bg-red-100 text-red-700'
          }`}>
            <svg 
              width="12" 
              height="12" 
              viewBox="0 0 12 12"
              className={`${trendType === 'increase' ? 'rotate-0' : 'rotate-180'}`}
            >
              <path 
                d="M6 2L10 8H2L6 2Z" 
                fill="currentColor"
              />
            </svg>
            <span>{trend}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatsCard
