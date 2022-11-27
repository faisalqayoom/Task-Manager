/* eslint-disable array-callback-return */
import React, { useState } from "react";
import nextId from "react-id-generator";
import "./Todo.scss";
import IncompletedTasks from "./IncompletedTasks";
import ComplettedTasks from "./ComplettedTasks";
import Form from "./Form";

const Todo = () => {
  const defaultFormData = { id: "", name: "", isCompleted: false };
  const [task, setTask] = useState(defaultFormData);
  const [inputTask, setinputTask] = useState([]);

  const handleOnChange = (e) => {
    setTask({ ...task, name: e.target.value });
  };

  const handleOnAddTask = (e) => {
    e.preventDefault();
    if (task.id === "") {
      setinputTask([...inputTask, { ...task, id: nextId() }]);
      setTask(defaultFormData);
    } else {
      const updatedTasks = inputTask.map((item) => {
        if (item.id === task.id) return task;
        else return item;
      });
      setinputTask(updatedTasks);
    }
  };

  const handleOnDelete = (id) => {
    const newTasks = inputTask.filter((item) => item.id !== id);
    setinputTask(newTasks);
  };

  const handleOnComplete = (id) => {
    setinputTask(
      inputTask.map((item) => {
        if (item.id === id) item.isCompleted = true;
        return item;
      })
    );
  };
  const handleOnEdit = (id) => {
    const edibleTask = inputTask.find((item) => item.id === id);
    setTask(edibleTask);
  };

  return (
    <>
      <Form
        value={task.name}
        handleOnAddTask={handleOnAddTask}
        handleOnChange={handleOnChange}
      />

      <div className="container">
        <IncompletedTasks
          inputTask={inputTask.filter((item) => !item.isCompleted)}
          handleOnComplete={handleOnComplete}
          handleOnDelete={handleOnDelete}
          handleOnEdit={handleOnEdit}
        />
        <ComplettedTasks
          completedTasks={inputTask.filter((item) => item.isCompleted)}
          handlePermanentDelete={handleOnDelete}
        />
      </div>
    </>
  );
};

export default Todo;
