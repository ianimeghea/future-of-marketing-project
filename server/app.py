# server/app.py
from flask import Flask, request, jsonify
import openai
from openai import OpenAI
from dotenv import load_dotenv
import os
from flask_cors import CORS
import traceback

load_dotenv(override = True)  # Load environment variables from .env

app = Flask(__name__)
# Enable CORS for all routes
CORS(app)
client = OpenAI(api_key=os.getenv("KEY"))

@app.route("/chat", methods=["POST"])
def chat():
    try:
        data = request.json
        message = data.get("message")
        person = data.get("person", "Socrates")  # Default to Socrates if no person is provided

        # Construct the system message based on the selected person
        system_message = f"You are {person}, a renowned figure in history. Provide responses as {person} would."

        completion = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": system_message},
                {"role": "user", "content": message},
            ],
        )

        reply = completion.choices[0].message.content
        return jsonify({"reply": reply})
    except Exception as e:
        # Log the error with traceback to help debug
        error_message = f"Error: {str(e)}"
        print(error_message)
        print(traceback.format_exc())  # Print the full traceback to the server log
        return jsonify({"error": error_message}), 500

if __name__ == "__main__":
    app.run(debug=True, port=5000)
