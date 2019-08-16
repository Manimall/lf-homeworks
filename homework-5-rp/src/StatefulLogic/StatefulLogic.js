import React, { useState } from 'react';

/*
  Render-props можно использовать для вынесения стейтфул логики

  Напишите компонент, который будет добавлять тултип к кнопке.
  Пусть тултип будет обычным `div`

  Пусть на тултипе будет написано "Hello, i'm Tooltip"

  Укажите у тултипа аттрибут `data-testid="tooltip"`

  Кнопка должна получать onClick коллбек из компонента-обёртки
*/

export const WithTooltip = ({ children }) => {
	const [isShown, setIsShown] = useState(false);

	const toggleTooltip = () => setIsShown(!isShown);

	return (
		<React.Fragment>
			{children(toggleTooltip)}
			{isShown && <div data-testid="tooltip">Hello, i'm Tooltip</div>}
		</React.Fragment>
	)
};
