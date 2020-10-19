import {put, takeEvery} from 'redux-saga/effects'

import ajax from './../http/index'
import {GET_ALL_TODO, REQ_ALL_TODO} from "./actionTypes";


function* getAllTodo() {
    console.log('222222222');
    const result = yield ajax('/api/todos');
    console.log(result);
    if(result.status === 200){
        const todos = result.data;
        // 派发给reducers
        yield put({
            type: GET_ALL_TODO,
            todos
        })
    }
}



function* mySaga() {
    console.log('1111111');
    // 接受action传递的任务
    yield takeEvery(REQ_ALL_TODO, getAllTodo);
}

export default mySaga;