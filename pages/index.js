import OnClick from '@/components/OnClick';
import OnHover from '@/components/OnHover';
import ThreeImageScatter from '@/components/ThreeImageScatter';

export default function Home() {
  return (
    <div className="m-2 grid place-content-center">
      <OnClick />
      <OnHover />
      <ThreeImageScatter />
    </div>
  );
}
