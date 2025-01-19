import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState("Socrates");
  const [customPerson, setCustomPerson] = useState(""); // For custom person input

  const people = [
    "Socrates",
    "Plato",
    "Don Draper",
    "Alan Turing",
    "Nikola Tesla",
    "Leonardo da Vinci",
    "Steve Jobs",
    "Albert Einstein",
    "Bill Gates",
    "Marco Polo",
    "Choose Your Own", // New option for custom person
  ];

  const handleSendMessage = async () => {
    setLoading(true); // Set loading to true when request starts
    try {
      const res = await axios.post("http://127.0.0.1:5000/chat", {
        message: message,
        person: selectedPerson === "Choose Your Own" ? customPerson : selectedPerson,
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

      {/* Show custom person input if "Choose Your Own" is selected */}
      {selectedPerson === "Choose Your Own" && (
        <div>
          <input
            type="text"
            value={customPerson}
            onChange={(e) => setCustomPerson(e.target.value)}
            placeholder="Enter a name..."
            style={{
              marginBottom: "15px",
              padding: "8px",
              width: "300px",
              borderRadius: "5px",
              fontSize: "16px",
            }}
          />
        </div>
      )}

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
            background: "#6c63ff",
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
