import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import WeaponSetRepository from './repositories/WeaponSetRepository';
import WeaponView from './views/Weapon';

type RouterProps = {
  weaponSetRepository: WeaponSetRepository;
};

const Router: FC<RouterProps> = (props) => {
  const weapons = props.weaponSetRepository.Get();
  const randomWeaponIndex = Math.floor(Math.random() * weapons.length);
  const randomWeapon = weapons[randomWeaponIndex];

  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={'/' + randomWeapon.slug} replace={true} />}
      />
      {weapons.map((weapon) => (
        <Route
          path={'/' + weapon.slug}
          element={<WeaponView weapon={weapon} />}
        />
      ))}
    </Routes>
  );
};

export default Router;
