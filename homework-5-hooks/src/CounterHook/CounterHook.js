import React, { useReducer, useCallback } from 'react'

/*
    В этом задании мы потренируемся писать простой кастомный хук.

    Хук будет представлять собой счётчик.

    Он должен возвращать объект со значениями:

    {count, increment, decrement}

    count - текущее значение счётчика
    increment - функция, увеличивает count на 1
    decrement - функция, уменьшает count на 1
*/

export const useCounter = () => {
	const countReducer = (state, action) => {
		switch (action.type) {
			case `inc`: {
				return state + 1;
			}
			case `dec`: {
				return state - 1;
			}
			default: {
				return state;
			}
		}
	};

	const [count, dispatch] = useReducer(countReducer, 0);

	const increment = useCallback(() => {
		dispatch({type: `inc`});
	});
	const decrement = useCallback(() => {
		dispatch({type: `dec`});
	});

	return {
		count,
		increment,
		decrement
	};
};


// easy does it

// export const useCounter = () => {
// 	const [count, setCount] = useState(0);
//
// 	const increment = () => setCount(count + 1);
// 	const decrement = () => setCount(count - 1);
//
// 	return {count, increment, decrement};
// }
