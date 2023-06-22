import React from 'react';

function Login() {
  return (
    <div className="auth">
      <form className="auth__form" name="login" noValidate>
        <h2 className="auth__title">Вход</h2>
        <input className="auth__input auth__input_email" placeholder="Email" />
        <span className="auth__input-error auth__input-name-error"></span>
        <input className="auth__input auth__input_email" placeholder="Пароль" />
        <span className="auth__input-error auth__input-name-error"></span>
        <button className="auth__save-button" type="submit" aria-label="Войти">
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
