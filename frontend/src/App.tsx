import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [response, setResponse] = useState<string>("Hi there! How can I assist you?");
  const [value, setValue] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:3005/chatbot", { question: value });
      setResponse(res.data);
    } catch (error) {
      console.error("Error:", error);
      setResponse("Sorry, something went wrong.");
    }
  };

  return (
    <div className="container">
      <div>
        <input type="text" value={value} onChange={onChange} />
      </div>
      <div>
        <button onClick={handleSubmit}>Ask</button>
      </div>
      <div>
        <p>Chatbot: {response}</p>
      </div>
    </div>
  );
}

export default App;