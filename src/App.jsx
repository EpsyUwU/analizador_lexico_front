import './App.css'
import { useState } from 'react';

function App() {

  const [textAreaValue, setTextAreaValue] = useState('');
  const [analyzedText, setAnalyzedText] = useState('');
  const [backendData, setBackendData] = useState('');

  const handleTextAreaChange = (event) => {
    setTextAreaValue(event.target.value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setTextAreaValue(event.target.result);
    };

    reader.readAsText(file);
  };

  const handleSendToBackend = () => {
    fetch('http://localhost:5000/analyze', { // replace with your API endpoint
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: textAreaValue })
    })
      .then(response => response.text())
      .then(data => {
        console.log(data);
        // handle the response data
        setAnalyzedText(textAreaValue.split(' ').join('\n'));
        setBackendData(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div className="flex-1">
        <input type="file" onChange={handleFileChange} className="py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300" />
        <div className="mt-3">
          <h2>File Content:</h2>
          <textarea className="mt-3 w-full h-32 py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 bg-gray-200" value={textAreaValue} onChange={handleTextAreaChange} />
          <button onClick={handleSendToBackend} className="mt-3 w-full inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            Analizar codigo
          </button>
          <div className="mt-3 flex space-x-4">
            <textarea className="w-1/2 h-64 py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 bg-gray-200" readOnly value={analyzedText} />
            <textarea className="w-1/2 h-64 py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 bg-gray-200" readOnly value={backendData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
