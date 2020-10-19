// 1. 存所有的Todo
export const GET_ALL_TODO = 'get_all_todo';
export const REQ_ALL_TODO = 'req_all_todo'; // 告知saga做什么事情
// 2. 删除一条todo
export const DEL_ONE_TODO = 'del_one_todo';
// 3. 修改一条todo的完成状态
export const CHANGE_ONE_TODO = 'change_one_todo';
// 4.  添加一条todo
export const ADD_ONE_TODO = 'add_one_todo';
// 5. 删除已经完成状态的todo
export const DEL_FINISHED_TODO = 'del_finished_todo';
// 6. todo的全选与取消全选
export const IS_CHECKED_ALL_TODO = 'is_checked_all_todo';