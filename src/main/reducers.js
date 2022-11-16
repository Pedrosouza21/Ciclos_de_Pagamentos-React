import  { combineReducers } from 'redux'

import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../commom/tab/tabReducer'
import billinbCycleReducer from '../billingCycle/billinbCycleReducer'

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  tab: TabReducer,
  billingCycle : billinbCycleReducer
})

export default rootReducer