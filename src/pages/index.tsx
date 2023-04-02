import NavBar from "@/components/NavBar";
import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState<number>(0);

  const handleIncrement = () => {
    setCounter((v) => v + 1);
  };

  return (
    <div>
      <NavBar />
      <h1>Hello Home {counter}</h1>
      <button onClick={handleIncrement}>Up</button>
    </div>
  );
}
