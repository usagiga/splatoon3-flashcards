import React, { FC } from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Weapons from './models/Weapons';
import WeaponCard from './components/WeaponCard';

const App: FC = () => {
  const weapons = Weapons;
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
          element={<WeaponCard weapon={weapon} />}
        />
      ))}
    </Routes>
  );
};

export default App;
