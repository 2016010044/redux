import React from 'react';
import "./index.css"

import {getAllTodoAction} from './store/actionCretors'
// 引入
import {connect} from 'react-redux'

// 引入组件
import Top from './components/Top'
import List from './components/List'
import Foot from './components/Foot'

class App extends React.Component {
    componentDidMount() {
          // 1. 请求todo数据
         this.props.reqTodoList();
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

const  mapDispatchToProps = (dispatch)=>{
    return {
         // 请求todo的数据
         reqTodoList(){
             const action = getAllTodoAction();
             dispatch(action);
         }

    }
};

// export default App;
export  default connect(null, mapDispatchToProps)(App)
