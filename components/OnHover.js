import { animate } from 'motion';
import CardLayout from './Layout/CardLayout';

function OnHover() {
  return (
    <CardLayout>
      <div
        onMouseOver={() =>
          animate(
            '.hover',
            { x: 100, rotate: 45, backgroundColor: 'red' },
            { duration: 0.5 }
          )
        }
        onMouseOut={() => {
          animate(
            '.hover',
            { x: 0, rotate: 0, backgroundColor: 'black' },
            { duration: 0.5 }
          );
        }}
        className="w-20 hover h-20 bg-black m-20 p-10"
      ></div>
    </CardLayout>
  );
}

export default OnHover;
