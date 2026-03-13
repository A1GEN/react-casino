import React from 'react';

// Маалыматтардын тиби
interface BetRowProps {
  username: string;
  betAmount: number;
  multiplier: number;
  winAmount: number;
  currencySymbol: string;
}

// Ар бир сап үчүн өзүнчө компонент
const BetRow: React.FC<BetRowProps> = ({ username, betAmount, multiplier, winAmount, currencySymbol }) => {
  return (
    <div className="flex items-center justify-between bg-[#1A1F2E] rounded-xl p-4 mb-2 hover:bg-[#23293b] transition-colors">
      {/* Игрок (Player) бөлүмү */}
      <div className="flex items-center gap-3 w-1/4">
        <div className="w-8 h-8 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.5)]">
          {/* Бул жерге аватар же монетанын сүрөтү келет */}
        </div>
        <span className="text-gray-400 font-medium">{username}</span>
      </div>

      {/* Ставка (Bet) бөлүмү */}
      <div className="w-1/4 text-center">
        <span className="text-[#4C6491] font-bold">{betAmount}</span>
        <span className="text-[#2D3C5A] ml-1">{currencySymbol}</span>
      </div>

      {/* Кэф (Multiplier) бөлүмү */}
      <div className="w-1/4 text-center">
        <span className="text-gray-300 font-semibold">x{multiplier.toFixed(2)}</span>
      </div>

      {/* Выигрыш (Win) бөлүмү */}
      <div className="w-1/4 text-right">
        <span className="text-[#00FF5E] font-bold">{winAmount.toFixed(2)}</span>
        <span className="text-[#00FF5E] ml-1">{currencySymbol}</span>
      </div>
    </div>
  );
};

export default BetRow;