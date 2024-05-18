import './App.css'
import { useState } from 'react';

function App() {

  const [textAreaValue, setTextAreaValue] = useState('');

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

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div className="flex-1">
        <input type="file" onChange={handleFileChange} className="py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300" />
        <div className="mt-3">
          <h2>File Content:</h2>
          <textarea className="mt-3 w-full h-32 py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 bg-gray-200" value={textAreaValue} onChange={handleTextAreaChange} />
          <button className="mt-3 w-full inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            Analizar codigo
          </button>

          <div className="mt-3 overflow-x-auto relative shadow-md sm:rounded-lg">
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3 px-6">Person</th>
                    <th scope="col" className="py-3 px-6">Bank Account</th>
                    <th scope="col" className="py-3 px-6">Amount</th>
                    <th scope="col" className="py-3 px-6">Approved</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b ">
                    <td className="py-4 px-6">Alex Johnson</td>
                    <td className="py-4 px-6">82926417</td>
                    <td className="py-4 px-6">$4,500.00</td>
                    <td className="py-4 px-6">Yes</td>
                  </tr>
                  <tr className="bg-white border-b ">
                    <td className="py-4 px-6">Maria Garcia</td>
                    <td className="py-4 px-6">55387621</td>
                    <td className="py-4 px-6">$3,150.00</td>
                    <td className="py-4 px-6">No</td>
                  </tr>
                  <tr className="bg-white border-b ">
                    <td className="py-4 px-6">James Smith</td>
                    <td className="py-4 px-6">90817264</td>
                    <td className="py-4 px-6">$7,820.00</td>
                    <td className="py-4 px-6">Yes</td>
                  </tr>
                  <tr className="bg-white border-b ">
                    <td className="py-4 px-6">Patricia Brown</td>
                    <td className="py-4 px-6">26483910</td>
                    <td className="py-4 px-6">$1,230.00</td>
                    <td className="py-4 px-6">Yes</td>
                  </tr>
                  <tr className="bg-white ">
                    <td className="py-4 px-6">Ethan Davis</td>
                    <td className="py-4 px-6">64738290</td>
                    <td className="py-4 px-6">$865.00</td>
                    <td className="py-4 px-6">No</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
