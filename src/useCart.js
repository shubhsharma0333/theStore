import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increment, decrement, incrementFav} from './actions';

export const useCart = () => {
  const cart = useSelector((state)=>state.cart);
  const fav = useSelector((state)=>state.favorites);
  const dispatch = useDispatch();
  const actions = bindActionCreators({ increment, decrement, incrementFav  }, dispatch);
  return useMemo(() => {
    return { cart, fav, ...actions };
  }, [cart, fav, actions]);
};