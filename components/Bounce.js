import { animate } from 'motion';
import CardLayout from './Layout/CardLayout';

function Bounce() {
  // animate bounce
  function bounceHandler() {
    //   keyframes
    animate(
      '.bounce',
      { y: [-30, 45, 0, 45] },
      { duration: 1, direction: 'alternate' }
    );
  }

  return (
    <CardLayout>
      <div className="max-h-44">
        <button
          onClick={bounceHandler}
          className="bg-gray-300 hover:bg-gray-400 rounded-md px-2 py-1"
        >
          Bounce
        </button>
        <div className="py-10">
          <div className="rounded-full m-auto bounce bg-purple-400 w-10 h-10"></div>
        </div>
      </div>
    </CardLayout>
  );
}

export default Bounce;
