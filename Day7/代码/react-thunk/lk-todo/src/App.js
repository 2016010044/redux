import React from 'react';
import "./index.css"

import store from './store/index'
import {getAllTodoAction} from './store/actionCretors'

// 引入组件
import Top from './components/Top'
import List from './components/List'
import Foot from './components/Foot'

class App extends React.Component {
    componentDidMount() {
        /*
        const todos = [
            {id: 1, title: "学习2个小时的react课程", finished: false},
            {id: 2, title: "学习1个小时的webpack课程", finished: false},
            {id: 3, title: "学习1个小时的node课程", finished: false},
            {id: 4, title: "刷2小时的抖音", finished: false}
        ];

        const action = getAllTodoAction(todos);
        store.dispatch(action);
        */

        const action = getAllTodoAction();
        store.dispatch(action);
    }

    render(){
      return (
          <div className="todo-container">
              <div className="todo-wrap">
                  {/*头部*/}
                  <Top />
                  {/*列表*/}
                  <List />
                  {/*尾部*/}
                  <Foot/>
              </div>
          </div>
      )
    }
}

export default App;
