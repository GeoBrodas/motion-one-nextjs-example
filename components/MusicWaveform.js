import CardLayout from './Layout/CardLayout';

import { PlayIcon } from '@heroicons/react/outline';
import { animate } from 'motion';

function MusicWaveform() {
  function play() {
    animate('.pulse', { scaleY: 20 }, { duration: 1 });
  }
  return (
    <CardLayout>
      <button onClick={play}>
        <PlayIcon className="h-8 text-blue-500" />
      </button>
      <div className="flex space-x-4 h-20 w-20 relative">
        <div className="w-2 absolute bottom-0 left-4 pulse h-6 rounded-sm bg-red-500"></div>
        <div className="w-2 absolute bottom-0 left-4 pulse h-6 rounded-sm bg-red-500"></div>
        <div className="w-2 absolute bottom-0 left-8 pulse h-6 rounded-sm bg-red-500"></div>
        <div className="w-2 absolute bottom-0 left-12 pulse h-6 rounded-sm bg-red-500"></div>
        <div className="w-2 absolute bottom-0 left-16 pulse h-6 rounded-sm bg-red-500"></div>
        <div className="w-2 absolute bottom-0 left-20 pulse h-6 rounded-sm bg-red-500"></div>
        <div className="w-2 absolute bottom-0 left-24 pulse h-6 rounded-sm bg-red-500"></div>
      </div>
    </CardLayout>
  );
}

export default MusicWaveform;
