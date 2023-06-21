import React from 'react';

function Register() {
  return (
    <div className="register">
      <form className="register__form" name="register" noValidate>
        <h2 className="register__title">Регистрация</h2>
        <input className="register__input register__input_email" placeholder="Email" />
        <span className="register__input-error register__input-name-error"></span>
        <input className="register__input register__input_email" placeholder="Пароль" />
        <span className="register__input-error register__input-name-error"></span>
        <button className="register__save-button" type="submit" aria-label="Зарегистрироваться">
          Зарегистрироваться
        </button>
        <p className="register__text">
          Уже зарегистрированы?
          <a className="register__link" href="#">
            Войти
          </a>
        </p>
      </form>
    </div>
  );
}

export default Register;
