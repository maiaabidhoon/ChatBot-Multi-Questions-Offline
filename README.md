ChatBot-Multi-Questions-Offline
An offline chatbot application powered by a large language model (LLM) for processing multiple user questions simultaneously, integrated with a React-based frontend for a seamless user experience.


Table of Contents

Overview
Features
Technologies Used
Installation
Usage
Project Structure
Contributing
License


Overview
ChatBot-Multi-Questions-Offline is a powerful chatbot application that operates entirely offline. It leverages a large language model (LLM) to process multiple user questions concurrently, providing context-aware responses. The frontend, built with React, offers a modern and responsive user interface for seamless interaction.

Features

Offline Functionality: Fully functional without an internet connection, perfect for low-connectivity environments.
Multi-Question Processing: Handles multiple queries simultaneously with intelligent, context-aware responses.
React Frontend: A sleek, responsive UI built with React for an intuitive user experience.
Modular Design: Easily extensible to support additional features or model updates.


Technologies Used
Backend

Large Language Model (LLM): Powered by Ollama (Download as per your requirements).
Node.js: Backend runtime for efficient server-side processing.

Frontend

React.js: For building a dynamic and responsive user interface.
Tailwind CSS: For modern, utility-first styling.


Installation
Follow these steps to set up the project locally:

Clone the Repository:
git clone https://github.com/maiaabidhoon/ChatBot-Multi-Questions-Offline.git
cd ChatBot-Multi-Questions-Offline


Install Frontend Dependencies:
cd frontend
npm install


Install Backend Dependencies:
cd ../Backend
npm install


Download LLM Model:

Download the pre-trained LLM model from Ollama and follow their setup instructions.




Usage

Run the Backend:
cd Backend
npm start


Run the Frontend:
cd frontend
npm start


Access the Application:

Open your browser and navigate to http://localhost:5173 (or the port specified in your React setup).
Interact with the chatbot by entering multiple questions in the interface.




Project Structure
ChatBot-Multi-Questions-Offline/
├── Backend/                # Backend code (Node.js + LLM integration)
├── frontend/               # Frontend code (React + Tailwind CSS)
├── README.md              # Project documentation
└── LICENSE                # License file


Contributing
Contributions are welcome! To contribute, please follow these steps:

Fork the Repository:

Click the "Fork" button on the GitHub repository page.


Create a New Branch:
git checkout -b feature-branch


Make Your Changes:

Implement your feature or bug fix.


Commit Your Changes:
git commit -m "Add feature or fix description"


Push to the Branch:
git push origin feature-branch


Open a Pull Request:

Submit a pull request on GitHub with a clear description of your changes.




License
This project is licensed under the MIT License. See the LICENSE file for details.
