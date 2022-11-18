import  { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../commom/tab/tabReducer'
import billingCycleReducer from '../billingCycle/billingCycleReducer'
import authReducer from '../auth/authReducer'

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  tab: TabReducer,
  billingCycle : billingCycleReducer,
  form: formReducer,
  toastr: toastrReducer,
  auth: authReducer
})

export default rootReducer