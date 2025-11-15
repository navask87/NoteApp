import { ChangeEvent } from "react";
import { Priority } from "./Note";

interface PriorityProp {
  priority: Priority;
  handleSetPriority: (data: Priority) => void;
}
export const PrioritySelector = ({
  priority,
  handleSetPriority,
}: PriorityProp) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleSetPriority(event.target.value as Priority);
  };

  return (
    <div>
      <div className="priority-group">
        <span>Priority:</span>
        <span>
          <input
            type="radio"
            value="Low"
            checked={priority === Priority.Low}
            onChange={(event) => handleChange(event)}
          />
          Low
        </span>
        <span>
          <input
            type="radio"
            value="Medium"
            checked={priority === Priority.Medium}
            onChange={(event) => handleChange(event)}
          />
          Medium
        </span>
        <span>
          <input
            type="radio"
            value="High"
            checked={priority === Priority.High}
            onChange={(event) => handleChange(event)}
          />
          High
        </span>
      </div>
      <hr className="priority-separator" />
    </div>
  );
};
