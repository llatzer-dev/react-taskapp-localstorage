export const TaskRow = ({ task, toggleTask }) => {
  return (
    <tr key={task.name}>
      <td>
        {task.name}
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => toggleTask(task)}
        />
      </td>
    </tr>
  );
};
