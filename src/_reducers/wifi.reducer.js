import { wifiConstants } from '../_constants';

const initialState = {
  sending: false,
  sent:  false
}

export function wifi(state, action) {
  if (typeof state === 'undefined') {
    return initialState
  }
  switch (action.type) {
    case wifiConstants.SET_WIFI_INFO_REQUEST:
      return {
        ...state,
        sending: true,
        sent: false
      };
    case wifiConstants.SET_WIFI_INFO_SUCCESS:
      return {
        ...state,
        sending: false,
        sent: true
      };
    case wifiConstants.SET_WIFI_INFO_FAILURE:
      return {
        ...state,
        sending: false,
        error: action.error,
        sent: false
      };
    default:
      return state
  }
}