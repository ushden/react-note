import {ALERT_SHOW, ALERT_HIDE} from '../types';


export const alerReducer = (state, action) => {
  switch(action.type) {
    case ALERT_SHOW:
      state.visible = true;
      state.text = action.data.text;
      state.type = action.data.type;

      return {...state};
    case ALERT_HIDE: 
      state.visible = false;
      state.text = '';
      state.type = '';

      return {...state}
    default:
      return state;  
  }
} 