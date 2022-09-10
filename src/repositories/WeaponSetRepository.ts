import WeaponSet from '../models/WeaponSet';

abstract class WeaponSetRepository {
  abstract Get(): WeaponSet[];
}

export default WeaponSetRepository;
