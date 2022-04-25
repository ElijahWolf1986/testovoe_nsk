import React from 'react';
import styles from './Header.module.css';

const Header = ({ userName, userStatus, onClickEditStatus }) => {
  return (
    <section className={styles.header}>
      <div className={styles.header_box}>
        <h1 className={styles.header_title}>
          Здравствуйте,
          <p className={styles.header_username}>{userName ? userName : ''}</p>
        </h1>
        <button
          className={styles.header_button_status}
          onClick={onClickEditStatus}
        >
          Сменить статус
        </button>
      </div>
      <div className={styles.header_status}>
        <div className={styles.header_status_dialog}></div>
        <p className={styles.header_status_paragraph}>
          {userStatus ? userStatus : ''}
        </p>
      </div>
    </section>
  );
};

export default Header;
