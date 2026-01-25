'use client';

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

/**
 * DonutChart Component - Circular progress indicator
 * Displays a donut chart with customizable progress
 *
 * @param {number} value - Current value (e.g., 1.1)
 * @param {number} maxValue - Maximum value for calculation (e.g., 3.0)
 * @param {string} label - Label text below chart
 * @param {number} size - Width and height of chart (default: 182)
 * @param {string} progressColor - Color for progress segment (default: #12B76A)
 * @param {string} backgroundColor - Color for background segment (default: #252B37)
 * @param {boolean} showIcon - Whether to show lightning bolt icon
 */
const DonutChart = ({
  value = 1.1,
  maxValue = 3.0,
  label = "Data Recovered",
  size = 182,
  progressColor = "#12B76A",
  backgroundColor = "#252B37",
  showIcon = true
}) => {
  // Calculate percentage for the chart
  const percentage = Math.min((value / maxValue) * 100, 100);

  const data = [
    { name: 'progress', value: percentage },
    { name: 'remaining', value: 100 - percentage }
  ];

  const radius = size / 2;
  const innerRadius = radius - 15;
  const outerRadius = radius;

  return (
    <div className="flex flex-col items-center">
      <div style={{ width: size, height: size }} className="relative">
        <ResponsiveContainer width="100%" height="100%" minHeight={size} minWidth={size}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              startAngle={90}
              endAngle={-270}
              dataKey="value"
              animationBegin={0}
              animationDuration={1000}
              animationEasing="ease-out"
              stroke="none"
              strokeWidth={0}
            >
              <Cell fill={progressColor} stroke="none" strokeWidth={0} />
              <Cell fill={backgroundColor} stroke="none" strokeWidth={0} />
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Center content - Lightning bolt icon */}
        {showIcon && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mb-1"
              >
                <path
                  d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                  fill={progressColor}
                  stroke={progressColor}
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        )}
      </div>

      {label && (
        <p className='font-medium text-sm mt-4 lg:mt-7 text-center' style={{ color: progressColor }}>
          {label}
        </p>
      )}
    </div>
  );
};

/**
 * PiePercentageChart Component - Full pie chart showing percentages
 * Displays a pie chart with percentage breakdown
 *
 * @param {number} percentage - Main percentage value (e.g., 95)
 * @param {number} size - Width and height of chart (default: 300)
 * @param {string} primaryColor - Color for main segment (default: #12B76A)
 * @param {string} secondaryColor - Color for secondary segment (default: #414651)
 * @param {boolean} showPercentage - Whether to show percentage text in center
 * @param {string} labelText - Text to display below chart
 */
const PiePercentageChart = ({
  percentage = 95,
  size = 300,
  primaryColor = "#12B76A",
  secondaryColor = "#414651",
  showPercentage = true,
  labelText = "95% = 100% Data Accuracy"
}) => {
  const data = [
    { name: 'complete', value: percentage },
    { name: 'remaining', value: 100 - percentage }
  ];

  return (
    <div className="flex flex-col items-center">
      <div style={{ width: size, height: size }} className="relative">
        <ResponsiveContainer width="100%" height="100%" minHeight={size} minWidth={size}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              startAngle={90}
              endAngle={-270}
              innerRadius={0}
              outerRadius={size / 2}
              dataKey="value"
              animationBegin={0}
              animationDuration={1000}
              animationEasing="ease-out"
              isAnimationActive={true}
              stroke="none"
              strokeWidth={0}
            >
              <Cell fill={primaryColor} stroke="none" strokeWidth={0} />
              <Cell fill={secondaryColor} stroke="none" strokeWidth={0} />
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Center percentage text */}
        {showPercentage && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="text-5xl font-bold"
              style={{ color: 'white' }}
            >
              {percentage}%
            </span>
          </div>
        )}
      </div>

      {labelText && (
        <p className='font-medium text-sm lg:text-base text-[#A4A7AE] mt-6 text-center max-w-[250px]'>
          {labelText}
        </p>
      )}
    </div>
  );
};

export { DonutChart, PiePercentageChart };
