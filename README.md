# STADVDB_S13.5_T120-21

This repository contains the source codes for the Web Application involving MySQL and Express. The project is submitted for Major Course Output 1 of the STADVDB course. The chosen dataset is *Credit Card customers* that can be found in [Kaggle](https://www.kaggle.com/sakshigoyal7/credit-card-customers).

## Contents

Each folder in the repository has its own functions to make the project run properly.

- controller - This folder contains files which defines the callback function for a given client request.
- public - This folder contains static files.
- queries - This folder contains all the SQL files that can be run in MySQL Workbench which is our basis for the queries in the application.
- routes - This folder contains a file which describes the response of the server for GET/POST request to a specific path in the server.
- views - This folder contains all files to be rendered to the user when requested from the server.

### Note

There are two Javascript files outside from any folder.

- index.js - Main entry point.
- database.js - Contains which database to connect.

## Pre-requisites

You will need the following:
1. Node.js
2. MySQL

## Getting Started

1. Clone the repository either through downloading here in GitHub, or use the command below. Please note that Git must be installed in your system for this to work if you choose the latter option.
```
git clone https://github.com/Gridmerc/STADVDB_S13.5_T120-21
```

2. Open Command Prompt or Terminal, depending on which Operating System you are using, and navigate to the project folder where you downloaded.
3. Run the command, `npm install` to initialize and install all dependencies needed.
4. Run the command, `node index.js` to start up the server. Alternatively, since nodemon is installed, you may opt to use `npm run dev` to allow the server to restart on its own if there are changes in the code.
5. When the application is running, you must see the following:
```
APP: Listening at Port 5000
MySQL: Connected
```
6. Head to your browser and head to the URL, `http://localhost:5000/`.
7. You will be directed to the home page.
8. If you are in the home page, congratulations! That means the server is up and running. Roam around the web application to view the different queries.

## More Info

If there are no package.json, run these commands.
1. `npm install --save express mysql ejs express-handlebars hbs` to add the necessary packages.
2. `npm install -g nodemon` to add nodemon.

## Authors

STADVDB S13-5 - Members
1. Chu, Chuan-Chen (chuan-chen_chu@dlsu.edu.ph)
2. Delima Jr., Reynaldo K. (reynaldo_delimajr@dlsu.edu.ph)
3. Jatico II, Nilo Cantil K. (nilo_jaticoii@dlsu.edu.ph)
4. Lin, James Kevin S. (james_lin@dlsu.edu.ph)
5. Sta. Ana, Jose Antonio III T. (jose_antonio_iii_staana@dlsu.edu.ph)

## Heroku

Here is the link of the Heroku deployment. Please note ClearDB has a limitation of 5MB for the database to work, but it will not run 24/7 due to free membership limitations. Please contact the authors if you wish to see the deployed version. If ever the localhost does not work, please contact the authors as we are willing to provide a demo.