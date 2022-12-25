import Image from 'next/image';
import CookowlyIcon from '../../public/brand/cookowly.svg';

export function BrandIcon() {
  return (
    <div className="w-10 h-10 relative">
      <Image src={CookowlyIcon} alt="Cookowly icon" fill />
    </div>
  );
}
