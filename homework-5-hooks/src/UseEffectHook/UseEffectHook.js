import React, {useEffect, useState} from 'react'
import { getJoke } from '../utils'

/*
  Напишите компонент, который загрузит шутку о Чаке Норрисе
  Используйте useEffect

  Вам придётся использовать асинхронный эффект. Это имеет свои особенности.
*/

export const UseEffectHook = () => {
	const [joke, setJoke] = useState(null);

	useEffect(() => {
		(async () => {
			try {
				const result = await getJoke();
				setJoke(result.value);
			} catch (error) {
				console.log(`smth gone wrong - ${error}`);
			}
		})();
	}, [joke]);

	return (
		<div data-testid="joke">{joke}</div>
	);
};
