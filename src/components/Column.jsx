import Task from './Task';
import './column.css';

const Column = ({ state }) => {
  return (
    <div className='column'>
      <p>{state}</p>
      <Task title='Task 1' />
    </div>
  );
};

export default Column;
