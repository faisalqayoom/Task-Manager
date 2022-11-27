import { MdDeleteForever } from "react-icons/md";

const ComplettedTasks = ({ completedTasks, handlePermanentDelete }) => {
  return (
    <>
      <div>
        <p className="added-tasks mt-4 mb-2 text-center heading">
          Completed Tasks
        </p>
        <div className="">
          {completedTasks &&
            completedTasks.map((input) => (
              <p key={input.id} className="render-added-tasks pt-1 my-2 px-2">
                {input.name}
                <span className="done-delete-icons">
                  <MdDeleteForever
                    className="delete-icon"
                    onClick={() => handlePermanentDelete(input.id)}
                  />
                </span>
              </p>
            ))}
        </div>
      </div>
      <p className="mt-2 mb-5 text-center">...</p>
    </>
  );
};

export default ComplettedTasks;
