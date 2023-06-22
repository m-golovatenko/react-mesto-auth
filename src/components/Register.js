import React from 'react';

function Register() {
  return (
    <div className="auth">
      <form className="auth__form" name="auth" noValidate>
        <h2 className="auth__title">Регистрация</h2>
        <input className="auth__input auth__input_email" placeholder="Email" />
        <span className="auth__input-error auth__input-name-error"></span>
        <input className="auth__input auth__input_email" placeholder="Пароль" />
        <span className="auth__input-error auth__input-name-error"></span>
        <button className="auth__save-button" type="submit" aria-label="Зарегистрироваться">
          Зарегистрироваться
        </button>
        <p className="auth__text">
          Уже зарегистрированы?
          <a className="auth__link" href="#">
            Войти
          </a>
        </p>
      </form>
    </div>
  );
}

export default Register;
