import  { combineReducers } from 'redux'

import DashBoardReducer from '../dashboard/dashboardReducer'

const rootReducer = combineReducers({
  dashboard: DashBoardReducer 
})

export default rootReducer