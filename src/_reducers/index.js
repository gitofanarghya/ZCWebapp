import { combineReducers } from 'redux';

import { authentication } from './users.reducer';
import { alert } from './alert.reducer';
import { commissioning } from './commissioning.reducer'
import { commands } from './commands.reducer'

const rootReducer = combineReducers({
  authentication,
  alert,
  commissioning,
  commands
});

export default rootReducer;