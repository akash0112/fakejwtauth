import {applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import Rootreducer from '../reducer';
const store=createStore(Rootreducer,{},composeWithDevTools(applyMiddleware(thunk)))
export default store;