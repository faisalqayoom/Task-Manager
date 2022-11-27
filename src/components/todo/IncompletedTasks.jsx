import React from "react";
import { MdDeleteForever, MdDone, MdEditCalendar } from "react-icons/md";

const IncompletedTasks = ({
  inputTask,
  handleOnComplete,
  handleOnDelete,
  handleOnEdit,
}) => {
  return (
    <div>
      <p className="added-tasks mt-3 mb-2 text-center heading">Added Tasks</p>

      <div className="">
        {inputTask &&
          inputTask.map((input) => (
            <p key={input.id} className="render-added-tasks my-2 pt-1 px-2">
              {input.name}
              <span className="done-delete-icons">
                <MdEditCalendar
                  className="edit-icon"
                  onClick={() => handleOnEdit(input.id)}
                />
                <MdDone
                  className="done-icon"
                  onClick={() => handleOnComplete(input.id)}
                />
                <MdDeleteForever
                  className="delete-icon"
                  onClick={() => handleOnDelete(input.id)}
                />
              </span>
            </p>
          ))}
      </div>
    </div>
  );
};

export default IncompletedTasks;
