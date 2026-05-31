from flask import Flask, jsonify
from flask_cors import CORS
from random import choices

app = Flask(__name__)
CORS(app)

possible_answers = [
  "It's possible...",
  "Of course not!",
  "How do you know!??",
  "In the near future",
  "Of course!",
  "Let's just say I can't answer that yet...",
  "Yes",
  "No"
]

@app.route("/get-random-answer", methods=["GET"])
def get_answered():
  answer = choices(possible_answers)

  return jsonify({"answer": answer})

if __name__ == "__main__":
  app.run(host="0.0.0.0", port=5000)