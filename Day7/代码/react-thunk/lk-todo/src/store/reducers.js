import {
    GET_ALL_TODO,
    DEL_ONE_TODO,
    CHANGE_ONE_TODO,
    ADD_ONE_TODO,
    DEL_FINISHED_TODO,
    IS_CHECKED_ALL_TODO
} from './actionTypes'

// 默认状态(保险柜)
const defaultState = {
  todos: [],
  finishedCount: 0
};

export default (state = defaultState, action )=>{
    // 1. 存所有的Todo
    if(action.type === GET_ALL_TODO){
        const newState = JSON.parse(JSON.stringify(state));
        newState.todos = action.todos;
        return newState;
    }
    // 2. 删除一条todo
    if(action.type === DEL_ONE_TODO){
        const newState = JSON.parse(JSON.stringify(state));
        // 2.1. 遍历
        let tempFinishedCount = 0;
        newState.todos.forEach((todo, index)=>{
            if(action.todoId === todo.id){
                newState.todos.splice(index, 1);
            }
        });
        // 2.2 处理选中的
        newState.todos.forEach((todo, index)=>{
            if(todo.finished){
                tempFinishedCount += 1;
            }
        });
        // 2.3 更新状态
       newState.finishedCount = tempFinishedCount;
        return newState;
    }
    // 3. 修改一条todo的完成状态
    if(action.type === CHANGE_ONE_TODO){
        // 3.1 业务
        const newState = JSON.parse(JSON.stringify(state));
        let tempFinishedCount = 0;
        newState.todos.forEach((todo, index)=>{
            if(action.todoId === todo.id){
                todo.finished = action.isFinished;
            }
            if(todo.finished){
                tempFinishedCount += 1;
            }
        });

        // 3.2 更新状态
        newState.finishedCount = tempFinishedCount;
        return newState;
    }
    // 4.  添加一条todo
    if(action.type === ADD_ONE_TODO){
        // 4.1 业务
        const newState = JSON.parse(JSON.stringify(state));
        newState.todos.push(action.todo);
        // 4.2 更新状态
        return newState;
    }
    // 5. 删除已经完成状态的todo
    if(action.type === DEL_FINISHED_TODO){
        // 5.1 业务
        const newState = JSON.parse(JSON.stringify(state));
        let tempArr = [];
        newState.todos.forEach((todo, index)=>{
            if(!todo.finished){ // 没有完成的任务
                tempArr.push(todo);
            }
        });
        // 5.2 更新状态
        newState.todos = tempArr;
        newState.finishedCount = 0;
        return newState;
    }
    // 6. todo的全选与取消全选
    if(action.type === IS_CHECKED_ALL_TODO){
        // 6.1 业务
        const newState = JSON.parse(JSON.stringify(state));
        let tempFinishedCount = 0;
        newState.todos.forEach((todo, index)=>{
            todo.finished = action.flag;
        });

        // 处理选中的
        newState.todos.forEach((todo, index)=>{
            if(todo.finished){
                tempFinishedCount += 1;
            }
        });

        // 2. 更新状态机
        newState.finishedCount = tempFinishedCount;
        return newState;
    }
    return  state;
}

