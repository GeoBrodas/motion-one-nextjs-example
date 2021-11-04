import CardLayout from './Layout/CardLayout';

import { PauseIcon, PlayIcon } from '@heroicons/react/outline';
import { animate } from 'motion';
import { useState } from 'react';

function MusicWaveform() {
  // scaleY resizes the element vertically
  // translateY moves the element vertically

  const [isPlaying, setIsPlaying] = useState(false);

  function switchModeHandler() {
    setIsPlaying((prevState) => !prevState);
  }

  function play() {
    // switches between states
    switchModeHandler();

    // animations with its references
    const animation1 = animate(
      '#bar1',
      {
        transform: [
          'scaleY(1.0) translateY(0rem)',
          'scaleY(1.5) translateY(-0.082rem)',
          'scaleY(1.0) translateY(0rem)',
        ],
      },
      {
        duration: 1.0,
        repeat: Infinity,
        easing: 'ease-in-out',
      }
    );
    const animation2 = animate(
      '#bar2',
      {
        transform: [
          'scaleY(1.0) translateY(0rem)',
          'scaleY(3) translateY(-0.083rem)',
          'scaleY(1.0) translateY(0rem)',
        ],
      },
      {
        delay: 0.2,
        duration: 1.5,
        repeat: Infinity,
        easing: 'ease-in-out',
      }
    );
    const animation3 = animate(
      '#bar3',
      {
        transform: [
          'scaleY(1.0)  translateY(0rem)',
          'scaleY(0.8) translateY(0.37rem)',
          'scaleY(1.0)  translateY(0rem)',
        ],
      },
      {
        delay: 0.3,
        duration: 1.5,
        repeat: Infinity,
        easing: 'ease-in-out',
      }
    );
    const animation4 = animate(
      '#bar4',
      {
        transform: [
          'scaleY(0.3)  translateY(0rem)',
          'scaleY(2.0) translateY(-0.05rem)',
          'scaleY(0.3)  translateY(0rem)',
        ],
      },
      {
        delay: 0.3,
        duration: 1.5,
        repeat: Infinity,
        easing: 'ease-in-out',
      }
    );

    // Controls for animation
    if (isPlaying) {
      animation1.pause();
      animation2.pause();
      animation3.pause();
      animation4.pause();
    } else {
      animation1.play();
      animation2.play();
      animation3.play();
      animation4.play();
    }
  }
  return (
    <CardLayout>
      <button onClick={play}>
        {/* Switch between play and pause */}
        {isPlaying ? (
          <PauseIcon className="h-8 text-blue-500" />
        ) : (
          <PlayIcon className="h-8 text-blue-500" />
        )}
      </button>

      {/* Bars */}
      <div className="w-auto flex items-end overflow-hidden">
        <span
          id="bar1"
          className="w-1 mr-[3px] h-4 bg-red-300 dark:bg-red-500 opacity-75"
        />
        <span
          id="bar2"
          className="w-1 mr-[3px] h-2 bg-red-300 dark:bg-red-500"
        />
        <span
          id="bar3"
          className="w-1 mr-[3px] h-6 bg-red-300 dark:bg-red-500 opacity-80"
        />
        <span
          id="bar4"
          className="w-1 h-2 bg-red-300 dark:bg-red-500 opacity-80"
        />
      </div>
    </CardLayout>
  );
}

export default MusicWaveform;
