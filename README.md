**ChatBot-Multi-Questions-Offline**
An offline chatbot application powered by a large language model (LLM) for processing multiple user questions simultaneously, integrated with a React-based frontend for a seamless user experience.

*Table of Contents*

  - Overview
  - Features
  - Technologies Used
  - Installation
  - Usage
  - Project Structure
  - Contributing

***Overview**
ChatBot-Multi-Questions-Offline enables users to interact with a chatbot that operates without an internet connection. The backend leverages a large language model to handle multiple questions concurrently, while the React frontend provides an intuitive and responsive interface.

***Features***

Offline Functionality: Fully functional without internet access.
Multi-Question Processing: Handles multiple user queries at once with context-aware responses.
React Frontend: A modern, responsive UI built with React for smooth user interaction.
Modular Design: Easily extensible for additional features or model updates.

Technologies Used

Backend:
Large Language Model (LLM) with Ollama [Download as per your Requirement]
Node.js


Frontend:
React.js for building the user interface
Tailwind CSS

Installation
Follow these steps to set up the project locally:

Clone the Repository:
git clone https://github.com/maiaabidhoon/ChatBot-Multi-Questions-Offline.git
cd ChatBot-Multi-Questions-Offline

Install Frontend & Backend Dependencies:
cd frontend
npm install
cd ..
cd Backend
npm install


Download LLM Model:

Download the pre-trained LLM model from Ollama.

Usage

Run the Frontend & Backend:
npm start


Access the Application:

Open your browser and go to http://localhost:5173 ( for Frontend ) (or the port specified in your React setup).
Interact with the chatbot by entering multiple questions in the interface.

Project Structure
ChatBot-Multi-Questions-Offline/
  - backend/              # Backend code for LLM and API
      - server.js         # Main backend application
      - package.json      # Backend dependencies
  - frontend/             # React frontend code
      - src/              # React components, hooks, and logic
      - public/           # Public assets (e.g., index.html, favicon)
      - package.json      # Frontend dependencies
  - README.md             # Project documentation

Contributing
Contributions are welcome! To contribute:
Khushi Chahan[https://github.com/KhushiChauhan8]

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes and commit (git commit -m "Add feature").
Push to the branch (git push origin feature-branch).
Open a pull request.

