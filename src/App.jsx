import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";

const initialResult = { city: "", country: "" };

function App() {
  const [result, setResult] = useState(initialResult);

  return (
    <div>
      <Header />
      <Form setResult={setResult} />
    </div>
  );
}

export default App;
