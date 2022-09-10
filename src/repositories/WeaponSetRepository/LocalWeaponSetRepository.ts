import WeaponSetRepository from '../WeaponSetRepository';
import WeaponSet from '../../models/WeaponSet';

const Weapons: WeaponSet[] = [
  {
    name: 'ブキ1',
    slug: 'weapon1',
  },
  {
    name: 'ブキ2',
    slug: 'weapon2',
  },
  {
    name: 'ブキ3',
    slug: 'weapon3',
  },
];

class LocalWeaponSetRepository implements WeaponSetRepository {
  Get(): WeaponSet[] {
    return Weapons;
  }
}

export default LocalWeaponSetRepository;
