
import React from 'react';
import { Link } from 'react-router-dom';
import { Info } from 'lucide-react';

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
    <div className="flip-card-container h-72 w-full">
      <div className="flip-card h-full">
        <div className="flip-card-front bg-brand-dark border border-brand-gray rounded-lg p-6 flex flex-col items-center justify-center shadow-md hover:border-brand-orange transition-colors">
          <div className="bg-white rounded-full p-3 mb-4 w-20 h-20 flex items-center justify-center">
            <img src={logo} alt={name} className="w-full h-full object-contain" />
          </div>
          <h3 className="text-lg font-semibold text-white text-center">{name}</h3>
        </div>
        <div className="flip-card-back bg-brand-gray border border-brand-orange rounded-lg p-6 flex flex-col justify-between shadow-lg">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-brand-orange mb-2">{name}</h3>
            <p className="text-sm text-white mb-2 line-clamp-3">{description}</p>
            <p className="text-xs text-gray-300">Leader: {leader}</p>
            <p className="text-xs text-gray-300">Contact: {email}</p>
          </div>
          <Link 
            to={link} 
            className="mt-auto bg-brand-orange text-white py-2 px-4 rounded text-center text-sm hover:bg-opacity-80 transition-all flex items-center justify-center"
          >
            <Info className="mr-2 h-4 w-4" />
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DigitalInitiativeCard;
