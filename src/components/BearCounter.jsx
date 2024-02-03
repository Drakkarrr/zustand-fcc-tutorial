import { useStore } from '../store/useStore.js';

function BearCounter() {
  const bears = useStore((state) => state.bears);
  return <h1>{bears} around here...</h1>;
}

export default BearCounter;
