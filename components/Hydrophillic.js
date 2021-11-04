import { animate, stagger } from 'motion';
import CardLayout from './Layout/CardLayout';

function Hydrophillic() {
  // move pawns to middle
  function formations() {
    animate('.pawn', { y: 50 }, { delay: stagger(0.1) });
  }

  // move pawns back to their original positions
  function reGroup() {
    animate('.pawn', { y: 0 }, { delay: stagger(0.1) });
  }

  return (
    <CardLayout>
      <div className="flex justify-between">
        <button
          onClick={formations}
          className="bg-gray-300 hover:bg-gray-400 rounded-md py-1 px-2 text-sm"
        >
          Formation!
        </button>
        <button
          onClick={reGroup}
          className="bg-gray-300 hover:bg-gray-400 rounded-md py-1 px-2 text-sm"
        >
          Regroup!
        </button>
      </div>
      <div className="h-20 pt-4 flex justify-center">
        <div className="bg-red-200 pawn w-3 h-3 rounded-full mx-1"></div>
        <div className="bg-red-200 pawn w-3 h-3 rounded-full mx-1"></div>
        <div className="bg-red-200 pawn w-3 h-3 rounded-full mx-1"></div>
        <div className="bg-red-200 pawn w-3 h-3 rounded-full mx-1"></div>
        <div className="bg-red-200 pawn w-3 h-3 rounded-full mx-1"></div>
      </div>
    </CardLayout>
  );
}

export default Hydrophillic;
