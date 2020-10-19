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
