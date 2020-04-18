import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, login } from './actions';

const App = () => {
    // const [ counter, setCounter ] = useState(useSelector(state => state.counter))
    const counter = useSelector(state => state.counter)
    const isLogged = useSelector(state => state.isLogged)
    const dispatch = useDispatch();

    return (
        <div>
            <h1>React Redux Practice</h1>
            <h3>Counter (3): {counter}</h3>
            <p><button onClick={() => dispatch(increment(3))}>+</button> <button onClick={() => dispatch(decrement(3))}>-</button></p>

            <p>Login to see list below: <button onClick={() => dispatch(login())}>{ isLogged ? 'Logout' : 'Login' }</button></p>
            { isLogged ? (
            <ul>
                <li>Sample List 1</li>
                <li>Sample List 2</li>
                <li>Sample List 3</li>
            </ul>
            ) : '' }
            
        </div>
    )
}
 
export default App;