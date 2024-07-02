import React, { useEffect, useState } from 'react';
import ForgeReconciler, { Text } from '@forge/react';
import { invoke } from '@forge/bridge';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    invoke('getText', { example: 'my-invoke-variable' }).then(setData);
  }, []);

  options = {
      method:"GET",
      headers: {
          'Accept': 'application/json',
          "X-API-KEY": "ef14e306e672f390217db34781064f8b7d6020b88276abace03e8f3bd62bc1a18953f1f89140777bb87861a2fa1e452608721be5c18c99b6cdce6e8f062ffe65366801f5256e1b8572c3cc77f1aa51a077d6c67c0259f9cfc7982434ff9887b624db6cf038cbbe2e60216d21a5ebee"
      }
  }


  async function getEvents () {
    const response = await fetch("https://api.humanitix.com/v1/events?page=1", {
      method:"GET",
      headers: {
          'Accept': 'application/json',
          "X-API-KEY": "ef14e306e672f390217db34781064f8b7d6020b88276abace03e8f3bd62bc1a18953f1f89140777bb87861a2fa1e452608721be5c18c99b6cdce6e8f062ffe65366801f5256e1b8572c3cc77f1aa51a077d6c67c0259f9cfc7982434ff9887b624db6cf038cbbe2e60216d21a5ebee"
      }
    })
    const data = await response.json()
    console.log(data)
  }

  return (
    <>
      <Text>Hello world!</Text>
      <Text>{data ? data : 'Loading...'}</Text>
      <button onClick={getEvents()}></button>
    </>
  );
};

ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
