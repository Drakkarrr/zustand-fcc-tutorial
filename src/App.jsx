import Column from './components/Column';

function App() {
  return (
    <>
      <Column state='PLANNED' />
      <Column state='ONGOING' />
      <Column state='DONE' />
      <h1>Hello Zustand App!</h1>
    </>
  );
}

export default App;
