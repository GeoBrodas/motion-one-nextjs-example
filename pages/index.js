import { animate } from 'motion';

export default function Home() {
  return (
    <div className="m-2">
      <button
        onClick={() =>
          animate('.box', { transform: 'rotate(45deg)' }, { duration: 0.5 })
        }
      >
        Click me
      </button>
      <div
        onMouseEnter={() =>
          animate(
            '.box',
            { x: 100, rotate: 45, backgroundColor: 'red' },
            { duration: 0.5 }
          )
        }
        onMouseLeave={() => {
          animate(
            '.box',
            { x: 0, rotate: 0, backgroundColor: 'black' },
            { duration: 0.5 }
          );
        }}
        className="w-20 box h-20 bg-black m-20 p-10"
      ></div>
    </div>
  );
}
