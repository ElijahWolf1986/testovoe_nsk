import React from 'react';
import styles from './EditStatus.module.css';
import Popup from '../Popup/Popup';
import { handleValidationStatusInputRequired } from '../../utils/ValidationForm';

const EditStatus = ({ isPopupOpen, currentStatus, onEditStatus, onClose }) => {
  const [status, setStatus] = React.useState('');
  const [errMessage, setErrMessage] = React.useState('');
  const [isButtonSaveDisabled, setButtonSaveDisabled] = React.useState(true);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!handleValidationStatusInputRequired(status)) {
      setErrMessage('Нужно ввести новый статус');
    } else {
      onEditStatus(status);
      onClose();
      return;
    }
  };

  const handleChangeStatus = (evt) => {
    setStatus(evt.target.value);
    setErrMessage('');
  };

  React.useEffect(() => {
    if (status) {
      setButtonSaveDisabled(false);
    } else {
      setButtonSaveDisabled(true);
    }
  }, [handleChangeStatus]);

  React.useEffect(() => {
    setStatus(currentStatus);
    setErrMessage('');
  }, [isPopupOpen]);

  return (
    <Popup isPopupOpen={isPopupOpen} onClose={onClose}>
      <form
        onSubmit={handleSubmit}
        method='POST'
        className={styles.popup__form}
        noValidate
      >
        <fieldset className={styles.popup__form_auth}>
          <label className={styles.popup__label}>Статус</label>
          <input
            type='text'
            value={status || ''}
            onChange={handleChangeStatus}
            name='status'
            placeholder='Введите новый статус'
            className={styles.popup__input}
          />
          <span className={styles.popup__error_visible}>{errMessage}</span>
        </fieldset>
        <button
          type='submit'
          className={`${styles.popup__button_save} ${
            isButtonSaveDisabled && styles.popup__button_save_disabled
          }`}
          disabled={isButtonSaveDisabled}
        >
          Изменить статус
        </button>
      </form>
    </Popup>
  );
};

export default EditStatus;
