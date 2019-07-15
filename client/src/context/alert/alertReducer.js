<<<<<<< HEAD
import { SET_ALERT, REMOVE_ALERT } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      return [...state, action.payload];
    case REMOVE_ALERT:
      return state.filter(alert => alert.id !== alert.payload);
    default:
      return state;
  }
};
=======
import { SET_ALERT, REMOVE_ALERT } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      return [...state, action.payload];
    case REMOVE_ALERT:
      return state.filter(alert => alert.id !== alert.payload);
    default:
      return state;
  }
};
>>>>>>> c3bf2e9760416230d95a8463188e8c9266996bae
