#!/bin/bash

cd /var/www
sudo cp -r ./build/* ./html
sudo service apache2 restart