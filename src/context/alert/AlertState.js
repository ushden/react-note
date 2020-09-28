import React, { useReducer } from 'react';
import { ALERT_SHOW, ALERT_HIDE } from '../types';
import { alerReducer } from './alerReducer';
import { AlertContext } from './alertContext';

export const AlertState = ({ children }) => {
	const [state, dispatch] = useReducer(alerReducer, { visible: false });

	const show = (text, type = 'warning') => {
		dispatch({ type: ALERT_SHOW, data: {text, type} });
	};

  const hide = () => {
    dispatch({type: ALERT_HIDE});
  }

	return <AlertContext.Provider value={{show, hide, alert: state}}>{children}</AlertContext.Provider>;
};
