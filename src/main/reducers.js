import  { combineReducers } from 'redux'

import DashBoardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../commom/tab/tabReducer'

const rootReducer = combineReducers({
  dashboard: DashBoardReducer,
  tab: TabReducer
})

export default rootReducer