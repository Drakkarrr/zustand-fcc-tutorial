import Column from './components/Column';

function App() {
  return (
    <>
      <Column state='PLANNED' />
      <br />
      <Column state='ONGOING' />
      <br />
      <Column state='DONE' />
    </>
  );
}

export default App;
