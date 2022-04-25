import React from 'react';
import styles from './Form.module.css';
import Select from '../Select/Select';
import {
  handleValidationEmail,
  handleValidationPassword,
} from '../../utils/ValidationForm';
import { update } from '../../utils/Func';
import { optionsDate } from '../../utils/Constants';

const Form = ({ universities, cities, onFormSubmit }) => {
  const citySelect = document.getElementById('city');
  const universitySelect = document.getElementById('univercity');
  const checkbox = document.getElementById('checkbox');
  const [password, setPassword] = React.useState('');
  const [date, setDate] = React.useState('');
  const [password2, setPassword2] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [errMessageEmail, setErrMessageEmail] = React.useState('');
  const [errMessagePassword, setErrMessagePassword] = React.useState('');
  const [errMessagePassword2, setErrMessagePassword2] = React.useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const city = citySelect.value;
    const university = universitySelect.value;
    const checkboxValue = checkbox.checked;
    if (
      !handleValidationEmail(email) &&
      !handleValidationPassword(password) &&
      password !== password2
    ) {
      setErrMessageEmail('Неверный E-mail');
      setErrMessagePassword('Используйте не менее 5 символов');
      setErrMessagePassword2('Пароли не совпадают');
      return;
    }
    if (!handleValidationEmail(email) && !handleValidationPassword(password)) {
      setErrMessageEmail('Неверный E-mail');
      setErrMessagePassword('Используйте не менее 5 символов');
      return;
    }
    if (!handleValidationEmail(email)) {
      setErrMessageEmail('Неверный E-mail');
      return;
    }
    if (!handleValidationPassword(password)) {
      setErrMessagePassword('Используйте не менее 5 символов');
      return;
    }
    if (password !== password2) {
      setErrMessagePassword2('Пароли не совпадают');
      return;
    }
    onFormSubmit({ city, university, password, email, checkboxValue });
    setDate(update(Date.now(), optionsDate));
  };

  const handleChangePassword = (evt) => {
    setPassword(evt.target.value);
    setErrMessagePassword('');
  };
  const handleChangePassword2 = (evt) => {
    setPassword2(evt.target.value);
    setErrMessagePassword2('');
  };
  const handleChangeEmail = (evt) => {
    setEmail(evt.target.value);
    setErrMessageEmail('');
  };

  return (
    <section className={styles.form}>
      <form
        onSubmit={handleSubmit}
        method='POST'
        className={styles.form_container}
        noValidate
      >
        <fieldset className={styles.form_fieldset}>
          <div className={styles.form_field_container}>
            <label className={styles.form_label}>Ваш город</label>
            <Select id='city' data={cities} />
          </div>
          <div className={styles.form_field_container}>
            <label className={styles.form_label}>Ваш университет</label>
            <Select id='univercity' data={universities} />
          </div>

          <div className={styles.form_field_container}>
            <label className={styles.form_label}>Пароль</label>
            <div className={styles.form_input_container}>
              <input
                type='password'
                autoComplete='new-password'
                value={password || ''}
                onChange={handleChangePassword}
                name='password'
                required
                placeholder=''
                className={`${styles.form_input} ${
                  errMessagePassword && styles.form_input_error
                }`}
              />
              <span className={styles.form_error_visible}>
                {errMessagePassword}
              </span>
            </div>
            <span className={styles.form_field_info}>
              Ваш новый пароль должен содержать не менее 5 символов.
            </span>
          </div>

          <div className={styles.form_field_container}>
            <label className={styles.form_label}>Пароль еще раз</label>
            <div className={styles.form_input_container}>
              <input
                type='password'
                autoComplete='new-password'
                value={password2 || ''}
                onChange={handleChangePassword2}
                name='password2'
                required
                placeholder=''
                className={`${styles.form_input} ${
                  errMessagePassword2 && styles.form_input_error
                }`}
              />
              <span className={styles.form_error_visible}>
                {errMessagePassword2}
              </span>
            </div>
            <span className={styles.form_field_info}>
              Повторите пароль, пожалуйста, это обезопасит вас с нами на случай
              ошибки.
            </span>
          </div>

          <div className={styles.form_field_container}>
            <label className={styles.form_label}>Электронная почта</label>
            <div className={styles.form_input_container}>
              <input
                type='email'
                value={email || ''}
                onChange={handleChangeEmail}
                name='email'
                required
                placeholder=''
                className={`${styles.form_input} ${
                  errMessageEmail && styles.form_input_error
                }`}
              />
              <span className={styles.form_error_visible}>
                {errMessageEmail}
              </span>
            </div>
            <span className={styles.form_field_info}>
              Можно изменить адрес, указанный при регистрации.{' '}
            </span>
          </div>

          <div className={styles.form_field_container}>
            <label className={styles.form_label}>Я согласен</label>
            <input
              type='checkbox'
              id='checkbox'
              className={styles.form_checkbox}
              value='принимать актуальную информацию на емейл'
            />
            <span className={styles.form_field_checkbox_info}>
              принимать актуальную информацию на емейл
            </span>
          </div>
        </fieldset>
        <div className={styles.form_button_container}>
          <button type='submit' className={styles.form_button_save}>
            Изменить
          </button>
          <p className={styles.form_date_info}>последние изменения {date}</p>
        </div>
      </form>
    </section>
  );
};

export default Form;
