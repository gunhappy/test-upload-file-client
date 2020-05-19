import React, { useCallback, useState } from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

function App() {
  const [file, setFile] = useState(null)

  const onChange = useCallback((e) => {
    const file = e.target.files[0]
    setFile(file)
  }, [])

  const onClick = useCallback(() => {
    if (file) {
      console.log(file, 'upload')
      const formData = new FormData()
      formData.append('file', file)
      axios
      .post('http://localhost:3000/upload-file', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(() => {
        console.log('SUCCESS!!')
      })
      .catch(err => {
        console.log(err, 'FAILURE!!')
      })
    }
  }, [file])

  return (
    <div className="App">
      <header className="App-header">
        <input type="file" onChange={onChange} />
        <button onClick={onClick}>Upload</button>
      </header>
    </div>
  );
}

export default App;
