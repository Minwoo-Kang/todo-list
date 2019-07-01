import React, { Component } from 'react';
import TodoListTemplate from "./component/TodoListTemplate";
import Form from "./component/Form"


class App extends Component {
    render() {
        return (
            <TodoListTemplate form={<Form />}>
                Template completed !
            </TodoListTemplate>
    );
    }
}

export default App;