import { animate } from 'motion';
import CardLayout from './Layout/CardLayout';

function OnClick() {
  return (
    <CardLayout>
      <div className="flex flex-col">
        <button
          className="rounded-md bg-gray-300 hover:bg-gray-400 p-1 text-sm"
          onClick={() =>
            animate('.click', { transform: 'rotate(45deg)' }, { duration: 0.5 })
          }
        >
          Rotate 45 degrees
        </button>
        <button
          className="rounded-md mt-2 bg-gray-300 hover:bg-gray-400 p-1 text-sm"
          onClick={() =>
            animate('.click', { transform: 'rotate(0deg)' }, { duration: 0.5 })
          }
        >
          Rotate 0 degrees
        </button>
      </div>
      <div className="w-20 click h-20 bg-black m-20 p-10"></div>
    </CardLayout>
  );
}

export default OnClick;
