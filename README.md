# t9-edume server README

To start the server in development mode, please copy and paste the following into your terminal:

`cd server && npm run start:dev`

Then, to copy the dictionary.txt to allow for real word filtering, please enter the following in a new terminal window in the server directory:

`npm run copy-dict`

The server will then be running on port 9000 by default, exposing the below endpoint:

`POST http://localhost:9000/t9`

This endpoint accepts the following request body:

    {
    	numbers: string
    }

And responds with the following response object:

    {
      "allCombinations": {
    	...
      },
      "filteredCombinations": {
    	...
      }
    }

For example:

    Request:

    POST http://localhost:9000/t9
    {
    	numbers: '44'
    }

    Response:
    POST http://localhost:9000/t9
    {
      "allCombinations": {
        "0": "gg",
        "1": "gh",
        "2": "gi",
        "3": "hg",
        "4": "hh",
        "5": "hi",
        "6": "ig",
        "7": "ih",
        "8": "ii"
      },
      "filteredCombinations": {
        "0": "gg",
        "1": "gi",
        "2": "hh",
        "3": "hi",
        "4": "ii"
      }
    }

To run test specs, please enter the following terminal command in the server directory:

    npm run test
