import { combineReducers } from 'redux'
import user from "./answerReducer"
import calculation from "./co2CalculationReducer"
import payment from "./paymentReducer"
import treespace from "./createTreespaceReducer"
import treespace1 from "./getTreespaceReducer"
import error from "./errorReducer"
import {averageKwh, averageWater, averageMeat, averageGasoline} from "./averagerReducer"


export default combineReducers({
  user: user,
  calculation1:calculation,
  payment: payment,
  treespace:treespace,
  treespace1: treespace1,
  averageKwh: averageKwh,
  averageWater:averageWater,
  averageMeat:averageMeat,
  averageGasoline:averageGasoline,
  error: error,
  
  })