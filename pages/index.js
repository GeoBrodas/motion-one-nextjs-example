import Bounce from '@/components/Bounce';
import OnClick from '@/components/OnClick';
import OnHover from '@/components/OnHover';
import ThreeImageScatter from '@/components/ThreeImageScatter';

export default function Home() {
  return (
    <div className="m-2 grid md:grid-cols-2 lg:grid-cols-4 place-content-center">
      <OnClick />
      <OnHover />
      <ThreeImageScatter />
      <Bounce />
    </div>
  );
}
