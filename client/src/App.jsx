import { useState } from 'react';
import axios from 'axios';

function App() {
  const [questions, setQuestions] = useState(['']);
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleCopyContent = (text) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
  };

  const handleQuestionChange = (idx, value) => {
    setQuestions(prev => prev.map((q, i) => (i === idx ? value : q)));
  };

  const handleAddQuestion = () => {
    setQuestions(prev => [...prev, '']);
  };

  const handleRemoveQuestion = (idx) => {
    setQuestions(prev => prev.length > 1 ? prev.filter((_, i) => i !== idx) : prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponses([]);
    const filteredQuestions = questions.map(q => q.trim()).filter(q => q);
    try {
      const promises = filteredQuestions.map(async (question) => {
        try {
          const res = await axios.post('http://localhost:3001/api/chat', { prompt: question });
          return res.data?.message?.content || res.data?.response || '';
        } catch (error) {
          console.error('Error:', error);
          return 'Error fetching response from the server.';
        }
      });
      const tempResponses = await Promise.all(promises);
      setResponses(tempResponses);
    } catch (error) {
      setResponses(filteredQuestions.map(() => 'Error fetching response from the server.' + error));
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-2xl w-full mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Chat with Ollama</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            {questions.map((q, idx) => (
              <div key={idx} className="flex items-center mb-2">
                <input
                  type="text"
                  value={q}
                  onChange={e => handleQuestionChange(idx, e.target.value)}
                  placeholder={`Question ${idx + 1}`}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveQuestion(idx)}
                  className="ml-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  disabled={questions.length === 1}
                  title="Remove"
                >-</button>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddQuestion}
              className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >+ Add Question</button>
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 rounded-lg text-white font-semibold ${
              loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
            } transition-colors`}
          >
            {loading ? 'Loading...' : 'Send'}
          </button>
        </form>
        {responses.length > 0 && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Questions & Responses:</h3>
            <ul>
              {responses.map((resp, idx) => (
                <li key={idx} className="mb-4 p-4 bg-gray-50 rounded-lg text-gray-800">
                  <div className="mb-2">
                    <span className="font-semibold text-blue-600">Q{idx + 1}:</span>
                    <span className="ml-2 text-gray-700">{questions[idx]}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-700">Answer:</span>
                    <button
                      className="text-sm text-blue-500 hover:underline"
                      onClick={() => handleCopyContent(resp)}
                    >Copy</button>
                  </div>
                  <div>{resp}</div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;