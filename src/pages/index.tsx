import Head from "next/head";
import { useState } from "react";
import Seo from "./seo";

export default function Home() {
  const [counter, setCounter] = useState<number>(0);

  const handleIncrement = () => {
    setCounter((v) => v + 1);
  };

  return (
    <div>
      <Seo title="Home" />
      <h1>Hello Home {counter}</h1>
      <button onClick={handleIncrement}>Up</button>
      {/* <style jsx global>{`
        a {
          color: white;
        }
      `}</style> */}
    </div>
  );
}
