import { AuthProvider } from '@descope/react-sdk';
import React, { useEffect } from 'react';
import './App.css';
import Site from './Site';

function App() {
  const [baseUrl, setBaseUrl] = React.useState<string>("")
  useEffect(() => {
    setBaseUrl(`${window.location.protocol}//auth.${window.location.hostname}`)
  }, [])

  const projectId = process.env.REACT_APP_DESCOPE_PROJECT_ID || "";

  return baseUrl && projectId ? (<AuthProvider baseUrl={baseUrl} projectId={projectId}>
    <Site />
    </AuthProvider>) : (<div>Loading...<pre>{JSON.stringify({projectId, baseUrl, env: process.env}, null, 2)}</pre></div>);
}

export default App;
