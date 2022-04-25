import React from 'react';
import styles from './Select.module.css';
import { v4 as uuidv4 } from 'uuid';

const Select = ({ data, id }) => {
  return data ? (
    <select id={id} className={styles.select}>
      {data.map((item) => {
        return (
          <option className={styles.select_option} key={uuidv4()}>
            {item}
          </option>
        );
      })}
    </select>
  ) : (
    <select className={styles.select}>
      <option className={styles.select_option}>не найдено ;(</option>
    </select>
  );
};

export default Select;
