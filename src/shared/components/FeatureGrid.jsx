import React from 'react';
import { Card } from './Card';

export const FeatureGrid = ({ features }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, idx) => (
        <Card key={idx} hoverable className="group cursor-pointer">
          <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform">
            {feature.icon}
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </Card>
      ))}
    </div>
  );
};
