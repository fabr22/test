import styles from './buttonWithCountry.module.scss'

import Flag from "../../../assets/svg/flag";
import { ReactNode } from 'react';

const ButtonWithCountry = ({children}: {children: ReactNode}) => {
  return (
    <div className={styles['wrapper']}>
      <button className={styles['button']}> {children}</button>
      <Flag />
    </div>
  );
};

export default ButtonWithCountry;
