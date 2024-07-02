import React, { useEffect, useState } from 'react';
import ForgeReconciler, { Text, Button, Image } from '@forge/react';
import { invoke } from '@forge/bridge';

const App = () => {
  const [data, setData] = useState(null);
  // const [orders, setOrders] = useState(null);
  // const [event, setEvent] = useState(null);

  useEffect(() => {
    invoke('getEvents').then(setData);
  }, []);


  console.log(data)


  return (
    <>
      <Text>Hello world!</Text> 
      <Button>press me</Button>
      <Text>{data 
      ? <>
      {}
      {data.events[0]['name']} 
      {data.events[0]['description']}
      <Image src={data.events[0]['bannerImage']['url']}></Image>
      </>
      : 'Loading...'}</Text>
    </>
  );
};

ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
