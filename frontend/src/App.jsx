import { useEffect, useState } from "react";
import Message from "./components/Message";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("/api/message")
      .then(res => res.json())
      .then(data => setMsg(data.message))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1> hi team this devops</h1>
      <Message text={msg} />
    </div>
  );
}

export default App;
