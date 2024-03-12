import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import tasksReducer from './reducers';
import Tasks from './components/Tasks';
import ListTask from './components/ListTask';
import './App.css'; 

const store = createStore(tasksReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>ToDo App</h1>
        <div className="add-task-container">
          <Tasks />
        </div>
        <ListTask />
      </div>
    </Provider>
  );
}

export default App;