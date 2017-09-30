#!/bin/sh
# Install MongoDB
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6 &&
echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list &&
sudo apt-get update &&
sudo apt-get install -y mongodb-org &&
# Run MongoDB
sudo service mongod start &&
# Install NodeJS
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash - &&
sudo apt-get install -y nodejs &&
cd /home/ubuntu/toro-net-test/ && npm install &&
npm run serve &
/home/ubuntu/toro-net-test/node_modules/nodemon/bin/nodemon.js server.js &
