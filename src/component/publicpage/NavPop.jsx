import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './css/NavPop.module.css';

const NavPop = ({ onClick }) => {
  return (
    <div className={styles.hamburgerIcon} onClick={onClick}>
      <FontAwesomeIcon icon={faBars} className={styles.btn} />
    </div>
  );
};

export default NavPop;