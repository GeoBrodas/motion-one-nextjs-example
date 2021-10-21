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
      <div className="w-10 box h-10 bg-black m-20 p-10"></div>
    </div>
  );
}
