import { useState, useLayoutEffect, useRef } from 'react';

const LayoutEffectComponent = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const el = useRef();

  useLayoutEffect(() => {
    setWidth(el.current.clientWidth);
    setHeight(el.current.clientHeight);
  });

  return (
    <div>
      <div style={{ textAlign: 'center', margin: '2rem' }}>
        <h4>useLayoutEffect</h4>
        <div style={{ textAlign: 'left' }}>
          <code>It is a React hook that allows you to perform synchronous updates to the DOM immediately after a component has rendered. It's similar to useEffect, but it's synchronous and runs before the browser has painted the screen, so it can be useful for managing layout effects like measuring the size or position of an element.
            The useLayoutEffect hook takes two arguments: a function that performs the layout effect and an array of dependencies that, when changed, will trigger the re-execution of the effect.
            Here is an example of using useLayoutEffect to measure the size of an element:</code>
        </div>
        <div style={{ textAlign: 'left', marginTop: '1rem' }}>
          <code>
          By using useLayoutEffect to measure the size of the element immediately after it has rendered, we can avoid rendering the component multiple times and improve the performance of our application.
          Overall, useLayoutEffect is a useful tool for managing layout effects that require synchronous updates to the DOM immediately after a component has rendered, and it's particularly useful for measuring the size or position of an element.
          </code>
        </div>
      </div>
      <h2>textarea width: {width}px</h2>
      <h2>textarea height: {height}px</h2>
      <textarea
        onClick={() => {
          setWidth(0); // this is basically saying "force update"
        }}
        ref={el}
      />
    </div>
  );
};

export default LayoutEffectComponent;
