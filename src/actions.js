export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECEREMENT';
export const INCREMENTFAV = 'INCREMENTFAV';


export const increment = (value) => ({ type: INCREMENT, payload: value });
export const decrement = (value) => ({ type: DECREMENT, payload: value });
export const incrementFav = (value) => ({ type: INCREMENTFAV, payload: value });
