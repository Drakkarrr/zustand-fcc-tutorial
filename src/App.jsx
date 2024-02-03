import Column from './components/Column';
import CounterBear from './components/CounterBear';

function App() {
  return (
    <>
      <Column state='PLANNED' />
      <br />
      <Column state='ONGOING' />
      <br />
      <Column state='DONE' />
      <br />
      <CounterBear />
    </>
  );
}

export default App;
