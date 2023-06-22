import React from 'react';

function InfoTooltip(props) {
  return (
    <div
      className={`popup popup_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}
      onClick={props.onClose}>
      <div className="popup__container" onClick={evt => evt.stopPropagation()}>
        <img />
        <h2 className="popup__title">{props.title}</h2>
        <button
          className="popup__close-button"
          type="button"
          onClick={props.onClose}
          aria-label="Закрыть"></button>
      </div>
    </div>
  );
}

export default InfoTooltip;
