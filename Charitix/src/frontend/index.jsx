import React, { useEffect, useState } from 'react';
import ForgeReconciler, { Text, Button } from '@forge/react';
import { invoke } from '@forge/bridge';
import Charity from './charity';

const App = () => {

  
  const [data, setData] = useState(null);
  const [orders, setOrders] = useState(null);
  const [isData, setIsData] = useState(false);
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    invoke('getEvents').then(setData);
    setIsData(true)
  }, []);

  useEffect(() => {
    invoke('getOrders').then(setOrders).catch(error => {console.error('error is ', error)});
  }, [isData]);


  console.log(data)
  if (orders) {
    console.log(orders)
  }

  const newComponent = () => {
    setClicked(true)
  }

  return (
    <>
      <Text>Hello world!</Text> 
      {clicked
        ?<>
        <Charity/>
        </>
        :<Text>Same page</Text>  
      }
      <Button onClick={newComponent}>go to charity</Button>
    </>
  );
};

ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;