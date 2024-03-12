import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTask } from '../redux/actions/actions';;

const Tasks = () => {
  const [taskDescription, setTaskDescription] = useState('');
  const dispatch = useDispatch();

  const TaskAdd = () => {
    if (taskDescription.trim() !== '') {
      const newTask = {
        id: uuidv4(),
        description: taskDescription,
        isDone: false
      };
      dispatch(addTask(newTask));
      setTaskDescription('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder="Give Task Description"
      />
      <button onClick={TaskAdd}>Add Task</button>
    </div>
  );
};

export default Tasks;