import CardLayout from './Layout/CardLayout';
import Image from 'next/image';
import { animate } from 'motion';

function ThreeImageScatter() {
  // oneMouseOver
  // onMouseOut

  function onHover() {
    animate('.one', { x: -70 }, { duration: 0.2 });
    animate('.two', { x: -40 }, { duration: 0.2 });
    animate('.three', { x: -10 }, { duration: 0.2 });
  }

  function onHoverOff() {
    animate('.one', { x: 0 }, { duration: 0.2 });
    animate('.two', { x: 0 }, { duration: 0.2 });
    animate('.three', { x: 0 }, { duration: 0.2 });
  }

  return (
    <CardLayout>
      <div
        onMouseOver={onHover}
        onMouseOut={onHoverOff}
        className="pt-20 w-auto h-32 flex justify-center relative"
      >
        <div className="absolute one top-8 right-10 z-0">
          <Image
            className="rounded-full"
            alt="one"
            src="/images/avataaars.png"
            width="60"
            height="60"
          />
        </div>
        <div className="absolute two top-8 right-5 z-10">
          <Image
            className=" rounded-full"
            alt="two"
            src="/images/new.jpg"
            width="60"
            height="60"
          />
        </div>
        <div className="absolute three top-8 right-0 z-20">
          <Image
            className=" rounded-full"
            alt="three"
            src="/images/logo.png"
            width="60"
            height="60"
          />
        </div>
      </div>
    </CardLayout>
  );
}

export default ThreeImageScatter;
