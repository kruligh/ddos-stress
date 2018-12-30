# DDoS Stress

> DDoS Stress tool

## Fork Modification
Instead of using only GET's to url to ddos, I use code using fetch.
  Run requests by using `copy as fetch` from google developer console, also POST's and others.

  To modify success/failure conditions see `lib/ddos-stess.js::runFetch` function.

  Example command (instead of URL):

  `fetch("http://localhost:8080/operator/session/login", {"credentials":"omit","headers":{"accept":"application/json, text/plain, */*","accept-language":"en-US,en;q=0.9,la;q=0.8,pl;q=0.7","content-type":"application/json"},"referrer":"http://localhost:3002/login/admin","referrerPolicy":"no-referrer-when-downgrade","body":"{\"login\":\"asdf\",\"password\":\"asdf\"}","method":"POST","mode":"cors"})`

  Its dirty code, for tests only.

## Getting Started
Install the module with: 

```bash
$ npm install -g ddos-stress
```

### Example:

```javascript
var Stress = require('ddos-stress');

// Create new instance of DDoS Stress
var stress = new Stress();

// Run stress on server
stress.run('http://192.168.3.44/',10);
```

### Distributed DOS (DDoS) Example:

Start DDoS Server

```javascript
node server.js
```

Edit etc/config.js and set the  DDoS server IP address and port:

```javascript
config.server = 'localhost';
config.port = 5004;
```

Run node.js on N+1 servers (to distribute the attack):

```javascript
node node.js
```

Open your browser and point it to the server (where server.js is started) IP and port:

http://localhost:3000/


Watch the video to see the DDoS Stress App in action:

[![DDoS Stress Video Preview](http://img.youtube.com/vi/zlfNmzn3yIk/0.jpg)](http://www.youtube.com/watch?v=zlfNmzn3yIk)


## Warning
Do not use this module ta attack servers and services you don't own! 
It is only for testing purposes and not for unauthorized actions.

## License 

The MIT License

Copyright (c) 2015, Martin Lazarov

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

