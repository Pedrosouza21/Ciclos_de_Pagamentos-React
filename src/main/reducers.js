import  { combineReducers } from 'redux'

import DashBoardReducer from '../dashboard/dashboardReducer'
import tabReducer from '../commom/tab/tabReducer'

const rootReducer = combineReducers({
  dashboard: DashBoardReducer,
  tab: tabReducer
})

export default rootReducer