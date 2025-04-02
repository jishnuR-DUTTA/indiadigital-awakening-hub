
import React from 'react';
import { Link } from 'react-router-dom';

interface DigitalInitiativeCardProps {
  name: string;
  logo: string;
  description: string;
  leader: string;
  email: string;
  link: string;
}

const DigitalInitiativeCard: React.FC<DigitalInitiativeCardProps> = ({
  name,
  logo,
  description,
  leader,
  email,
  link
}) => {
  return (
    <div className="flip-card-container h-64 w-full">
      <div className="flip-card h-full">
        <div className="flip-card-front bg-brand-dark border border-brand-gray rounded-lg p-4 flex flex-col items-center justify-center">
          <img src={logo} alt={name} className="w-24 h-24 object-contain mb-4" />
          <h3 className="text-lg font-semibold text-white">{name}</h3>
        </div>
        <div className="flip-card-back bg-brand-gray border border-brand-orange rounded-lg p-4 flex flex-col justify-between">
          <div>
            <p className="text-sm text-white mb-2">{description}</p>
            <p className="text-xs text-gray-300 mb-1">Leader: {leader}</p>
            <p className="text-xs text-gray-300 mb-4">Contact: {email}</p>
          </div>
          <Link 
            to={link} 
            className="mt-auto bg-brand-orange text-white py-2 px-4 rounded text-center text-sm hover:bg-opacity-80 transition-all"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DigitalInitiativeCard;
