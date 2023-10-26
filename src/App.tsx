import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { Game } from "./components/Game";
import './App.scss'

function App() {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useLayoutEffect(() => {
    //@ts-ignore
    setWidth(ref?.current?.offsetWidth || 0);
  }, []);

  useEffect(() => {
    function handleWindowResize() {
      //@ts-ignore
      setWidth(ref?.current?.offsetWidth || 0);
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <main className="container" ref={ref}>
      <Game containerWidth={width - 100} />
    </main>
  )
}

export default App
