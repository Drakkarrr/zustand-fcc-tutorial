import { useStore } from '../store/useStore.js';

function Controls() {
  const increasePopulation = useStore((state) => state.increasePopulation);
  const decreasePopulation = useStore((state) => state.decreasePopulation);
  return (
    <>
      <button onClick={increasePopulation}>one up</button>
      <br />
      <button onClick={decreasePopulation}>one down</button>
    </>
  );
}

export default Controls;
