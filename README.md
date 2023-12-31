# Место (c реализацией входа в аккаунт)

Учебный проект Место на React с добавленной возможностью авторизации и аутентификации пользователей. В этом проекте пользователи могут зарегистрироваться на сайте, войти в свой аккаунт, просмотреть карточки с изображениями, добавить новую карточку, поставить лайк и удалить свои карточки.

## Использование

### Регистрация и авторизация

Первым шагом для использования проекта является регистрация на сайте. На странице регистрации необходимо ввести email и пароль. Если пользователь уже зарегистрирован, то он может перейти на страницу авторизации и ввести свои учетные данные.

### Главная страница

После успешной авторизации пользователь будет перенаправлен на главную страницу, на которой отображаются карточки с изображениями. Пользователь может просмотреть карточки, добавить новую карточку, поставить лайк и удалить свои карточки.

### Редактирование профиля

На странице профиля пользователь может редактировать свои данные, такие как имя и информация о себе. Для этого нужно кликнуть на кнопку редактирования и ввести новые данные.

### Изменение аватара

На странице профиля пользователь может также изменить свой аватар. Для этого нужно кликнуть на текущую картинку аватара и загрузить новое изображение.

### Выход из аккаунта

Пользователь может выйти из своего аккаунта, кликнув на соответствующую кнопку.

## Аутентификация

Для осуществления аутентификации используется JSON Web Tokens (JWT). Каждый раз, когда пользователь входит в свой аккаунт, сервер генерирует JWT, который передается в качестве токена в каждом запросе, выполняемом из приложения. Чтобы закрыть возможность доступа к определенным страницам или функциям на сервере, сервер проверяет валидность полученного токена.
