import { createStore } from 'redux';
import { reducer } from './reducres';


export const store = createStore(reducer);