# t9-edume server README

To start the server in development mode, please copy and paste the following into your terminal:

`cd server && npm i && npm run start:dev`

Then, to copy the dictionary.txt to allow for real word filtering, please enter the following in a new terminal window in the server directory. The dictionary used is from [Google's Trillion Word Corpus](https://github.com/first20hours/google-10000-english) of the 10,000 most common words in the English language. This dictionary is a list of the most common combinations of characters in English and therefore contains some words that don't appear in the dictionary, particularly 1-2 letter words!

`npm run copy-dict`

If you do not run the copy-dict command, the API will return an empty object for "filteredCombinations".

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

    Request
    POST http://localhost:9000/t9
    {
    	numbers: '44'
    }

    Response:
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

# t9-edume server README

To start the React app in development mode, please enter the following command into your terminal:

`cd client && npm i && npm run start`
