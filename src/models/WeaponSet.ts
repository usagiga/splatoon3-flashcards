import MainWeapon from './MainWeapon';
import SubWeapon from './SubWeapon';
import SpecialWeapon from './SpecialWeapon';

type WeaponSet = {
  name: string;
  slug: string;
  image?: {
    path: string;
  };
  main?: MainWeapon;
  sub?: SubWeapon;
  special?: SpecialWeapon;
};

export default WeaponSet;
