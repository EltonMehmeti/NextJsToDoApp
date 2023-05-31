import { ITask } from "@/types/tasks";
import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
interface TaskProps {
  task: ITask;
}
const Task: React.FC<TaskProps> = ({ task }) => {
  return (
    <div>
      <tr className="w-full" key={task.id}>
        <td>{task.text}</td>
        <td className="flex gap-5">
          <AiOutlineEdit cursor="pointer" className="text-blue-500" size={25} />
          <AiOutlineDelete
            cursor="pointer"
            className="text-red-500"
            size={25}
          />
        </td>
      </tr>
    </div>
  );
};

export default Task;
