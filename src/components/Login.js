import React from 'react';

function Login() {
  return (
    <div className="login">
      <form className="login__form" name="login" noValidate>
        <h2 className="login__title">Вход</h2>
        <input className="login__input login__input_email" placeholder="Email" />
        <span className="login__input-error login__input-name-error"></span>
        <input className="login__input login__input_email" placeholder="Пароль" />
        <span className="login__input-error login__input-name-error"></span>
        <button className="login__save-button" type="submit" aria-label="Войти">
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
