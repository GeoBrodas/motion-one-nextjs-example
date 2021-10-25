import CardLayout from './Layout/CardLayout';
import Image from 'next/image';

function ThreeImageScatter() {
  // oneMouseOver
  // onMouseOut

  function onHover() {
    // code
  }

  function onHoverOff() {
    // code
  }

  return (
    <CardLayout>
      <div
        onMouseOver={onHover}
        onMouseOut={onHoverOff}
        className="pt-20 w-auto flex justify-center relative"
      >
        <div className="absolute one top-2 right-10 z-0">
          <Image
            className="rounded-full"
            alt="one"
            src="/images/avataaars.png"
            width="60"
            height="60"
          />
        </div>
        <div className="absolute two top-2 right-5 z-10">
          <Image
            className=" rounded-full"
            alt="two"
            src="/images/new.jpg"
            width="60"
            height="60"
          />
        </div>
        <div className="absolute three top-2 right-0 z-20">
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
