import { FC } from 'react';
import WeaponSet from '../models/WeaponSet';

type WeaponCardProps = {
  weapon: WeaponSet;
};

const WeaponCard: FC<WeaponCardProps> = (props) => {
  return (
    <div>
      <p>{props.weapon.name}</p>
    </div>
  );
};

export default WeaponCard;
