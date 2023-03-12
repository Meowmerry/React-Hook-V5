import { useEffect, useState, useMemo } from 'react';
import expensiveMathOperation from './expensiveMathOperation';

export default function Home() {
  const [count, setCount] = useState(35);
  const [left, setLeft] = useState(0);
  const value = useMemo(() => expensiveMathOperation(count), [count]);

  useEffect(() => {
    requestAnimationFrame(animate);
    function animate() {
      setLeft(left + 1);
    }
  }, [left]);

  return (
    <div>
      <div style={{ textAlign: 'center', margin: '2rem' }}>

        <h4>useMemo</h4>
        <div style={{ textAlign: 'left' }}>
          <code>It is a React hook that allows you to optimize the performance of your components by memoizing expensive computations. It's useful when you have a computationally intensive function that is called repeatedly, 
            but the output of that function doesn't change frequently.
            The useMemo hook takes two arguments: a function that performs the computation and an array of dependencies that, when changed, will trigger the re-computation of the memoized value.
            Here is an example of using useMemo</code>
        </div>
        <div  style={{ textAlign: 'left', marginTop: '1rem' }}>
          <code>
          Overall, useMemo is a useful tool for optimizing the performance of your components by memoizing the results of expensive computations, and it's particularly useful when you have a computationally intensive function that is called repeatedly with the same inputs.          </code>
        </div>

      </div>
      <div
        style={{ left: `${Math.sin(left * 0.05) * 100 + 100}px` }}
        className="ball"
      ></div>
      <h2>
        Count: {count} <button onClick={() => setCount(count + 1)}>+</button>
      </h2>
      <h2>Result of an expensive math computation: {value}</h2>
    </div>
  );
}
