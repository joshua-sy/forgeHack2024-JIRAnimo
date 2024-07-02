import Resolver from '@forge/resolver';
import { fetch } from '@forge/api';

const resolver = new Resolver();

resolver.define('getText', (req) => {
  console.log(req);

  return 'Hello, world!';
});

resolver.define('getEvents', async () => {
  const response = await fetch("https://api.humanitix.com/v1/events?page=1", {
    method:"GET",
    headers: {
        'Accept': 'application/json',
        "X-API-KEY": process.env.HUMANITIX_KEY
    }
  })
  console.log(response)
  const data = await response.json()
  console.log(data)
  return data
})

export const handler = resolver.getDefinitions();
