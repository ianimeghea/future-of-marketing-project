import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false); // Track loading state
  const [selectedPerson, setSelectedPerson] = useState("Socrates");

  const people = [
    "Socrates",
    "Plato",
    "Ada Lovelace",
    "Alan Turing",
    "Marie Curie",
    "Nikola Tesla",
    "Leonardo da Vinci",
    "Steve Jobs",
    "Albert Einstein",
    'Bill Gates',
    "Marco Polo",
  ];

  const handleSendMessage = async () => {
    setLoading(true); // Set loading to true when request starts
    try {
      const res = await axios.post("http://127.0.0.1:5000/chat", {
        message: message,
        person: selectedPerson,
      });
      setResponse(res.data.reply);
    } catch (error) {
      setResponse("Error with the chatbot");
    } finally {
      setLoading(false); // Set loading to false when request finishes
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Chat about the Future of Marketing.</h2>

      <div>
        <label htmlFor="person-select">Choose a person: </label>
        <select
          id="person-select"
          value={selectedPerson}
          onChange={(e) => setSelectedPerson(e.target.value)}
          style={{
            marginBottom: "15px",
            padding: "8px",
            fontSize: "16px",
            borderRadius: "5px",
          }}
        >
          {people.map((person) => (
            <option key={person} value={person}>
              {person}
            </option>
          ))}
        </select>
      </div>

      <div className="input">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask something..."
          style={{
            marginBottom: "15px",
            padding: "8px",
            width: "500px",
            borderRadius: "5px",
            fontSize: "16px",
          }}
        />
        <br />
        <button
          onClick={handleSendMessage}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            color: "white",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Send
        </button>
      </div>

      {/* Display loading spinner when the request is being processed */}
      {loading ? (
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      ) : (
        response && (
          <div className="response-card">
            <h3>Response:</h3>
            <p>{response}</p>
          </div>
        )
      )}
    </div>
  );
};

export default Chatbot;
