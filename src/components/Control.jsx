import { useStore } from '../store/useStore.js';

function Controls() {
  const increasePopulation = useStore((state) => state.increasePopulation);
  return <button onClick={increasePopulation}>one up</button>;
}

export default Controls;
