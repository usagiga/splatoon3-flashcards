import { FC } from 'react';
import WeaponCard from '../components/WeaponCard';
import WeaponSet from '../models/WeaponSet';
import styles from './Weapon.module.scss';

type WeaponProps = {
  weapon: WeaponSet;
};

const WeaponView: FC<WeaponProps> = (props) => {
  return (
    <div className={styles.container}>
      <WeaponCard weapon={props.weapon} />
    </div>
  );
};

export default WeaponView;
