import React from 'react';

interface GameCardProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  gradientClass: string;
}

const GameCard: React.FC<GameCardProps> = ({ title, subtitle, imageSrc, gradientClass }) => {
  return (
    <div className={`relative w-64 h-80 rounded-[2rem] overflow-hidden cursor-pointer transition-transform hover:scale-105 shadow-lg ${gradientClass}`}>
      {/* Сүрөт бөлүмү */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Текст бөлүмү (Overlay) */}
      <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-center text-center bg-gradient-to-t from-black/40 to-transparent">
        <h2 className="text-white text-4xl font-black uppercase leading-none tracking-tight break-words mb-1">
          {title}
        </h2>
        <p className="text-white/80 text-[10px] font-bold tracking-widest uppercase">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default GameCard;