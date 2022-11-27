import { MdAddTask } from "react-icons/md";


const Form = ({ value, handleOnChange, handleOnAddTask }) => {
  return (
    <form className="form container">
      <div>
        <p className="my-5 text-center mt-5 heading">Task Manager </p>
      </div>
      <div className="wrappper-input-icon d-flex">
        <div className="input-type ">
          <input
            className="form-control shadow-none input-group-sm"
            type="text"
            placeholder="Enter Your Task"
            onChange={handleOnChange}
            value={value}
            required
          />
        </div>
        <div className="add-icon-input ms-auto">
          <MdAddTask className="add-task-btn" onClick={handleOnAddTask} />
        </div>
      </div>
    </form>
  );
};

export default Form;
