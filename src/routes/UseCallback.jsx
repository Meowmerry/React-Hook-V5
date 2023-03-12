import { useEffect, useState, useCallback } from 'react';
import UseRefComponent from './UseRef';

export default function Home() {
  const [left, setLeft] = useState(0);
  useEffect(() => {
    requestAnimationFrame(animate);
    function animate() {
      setLeft(left + 1);
    }
  }, [left]);

  const aUsefulCallback = () => { };
  const memoizedCallback = useCallback(aUsefulCallback, []);

  return (
    <div>
      <div style={{ textAlign: 'center', margin: '2rem' }}>
        <h4>useCallback</h4>
        <div style={{ textAlign: 'left' }}>
          <code>It is a React hook that allows you to memoize a function so that it's not recreated on each render, which can improve the performance of your components. It's useful when you have a function that is passed down to child components as a prop and you want to ensure that the child components don't re-render unnecessarily when the parent component updates.
            The useCallback hook takes two arguments: a function that you want to memoize and an array of dependencies that, when changed, will trigger the recreation of the memoized function.
            Here is an example of using useCallback to memoize a function:</code>
        </div>
        <div style={{ textAlign: 'left', marginTop: '1rem' }}>
          <code>
            Overall, useCallback is a useful tool for memoizing functions and improving the performance of your components when you have a function that is passed down to child components as a prop.
          </code>
        </div>
      </div>
      <div style={{ padding: '2rem' }}>
        <div
          style={{ left: `${Math.sin(left * 0.05) * 100 + 100}px` }}
          className="ball"
        ></div>
      </div>

      <UseRefComponent cb={memoizedCallback} />
    </div>
  );
}
