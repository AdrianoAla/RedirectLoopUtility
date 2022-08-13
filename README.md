# 🔁 Redirect Loop Utility 🔁
With the Redirect Loop Utility, you can instantly create a web server that infinitely redirects you between two pages!

# Setup
To set up the RLU, simply clone this repository into a folder and run `npm install` to install the necessary dependancies!

# Usage
To use the RLU, simple run `node index.js` with your arguments

 - `-port` or `-p`, this specifies the port to run the server on (default is 3000)
 - `-time` or `-t`, this specifies the time in seconds between redirects (default is 1)
 - `-first` or `-f`, this specifies the url of the first page (default is /)
 - `-second` or `-s`, this specifies the url of the second page (default is /redirect)
 - `-auth` or `-a`, this specifies your NGROK authtoken, if none is provided your server will not be tunneled
