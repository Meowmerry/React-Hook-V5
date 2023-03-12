import React, { useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

export function CounterReducter() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <div style={{textAlign: 'center',margin: '2rem',}}>
            <div style={{ margin: '2rem',textAlign: 'left' }}>
            <code >
                <h4>useReducer</h4>It is a React hook that allows you to manage complex state in your components
                by creating a more predictable and controlled way of updating the state. It's an alternative
                to useState that is useful when the state logic is more complex and involves multiple sub-values
                or when the next state depends on the previous state.
                The useReducer hook takes two arguments: a reducer function and an initial state.
                The reducer function takes two arguments: the current state and an action object that describes the changes you want to make to the state. It then returns the new state.
                Here is an example of using useReducer to manage a counter</code>
            </div>
            
            <div>Count: </div>
            <div>{state.count}</div>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        </div>
    );
}
