import {
    GET_ALL_TODO,
    DEL_ONE_TODO,
    CHANGE_ONE_TODO,
    ADD_ONE_TODO,
    DEL_FINISHED_TODO,
    IS_CHECKED_ALL_TODO
} from './actionTypes'
import store from './index'

import ajax from './../http/index'

// 1. 存所有的Todo
export const getAllTodoAction = ()=>{
    return ()=>{
        ajax('/api/todos').then((res)=>{
            console.log(res);
            if(res.status === 200){
                const todos = res.data;
                // 派发
                store.dispatch({
                    type: GET_ALL_TODO,
                    todos
                })
            }
        })
    }
};

// 2. 删除一条todo
export const getDelTodoAction = (todoId)=>({
    type: DEL_ONE_TODO,
    todoId
});

// 3. 修改一条todo的完成状态
export const getChangeOneTodo = (todoId, isFinished)=>({
    type: CHANGE_ONE_TODO,
    todoId,
    isFinished
});

// 4.  添加一条todo
export const getAddOneTodoAction = (todo)=>({
    type: ADD_ONE_TODO,
    todo
});
// 5. 删除已经完成状态的todo
export const getDelFinishedTodoAction = ()=>({
    type: DEL_FINISHED_TODO
});
// 6. todo的全选与取消全选
export const getIsCheckedAllAction = (flag)=>({
    type: IS_CHECKED_ALL_TODO,
    flag
});