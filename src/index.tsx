import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      if(count === 20) {
        clearTimeout();
      } else {
        setCount(count + 1);
      }
    }, 1000);

  }, [count]);
   
  return (
    <h1>{count}</h1>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));