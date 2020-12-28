# PGI Chabot

## PGI chatbot is a lightweight, easy to use question & response API for working with automated responses.

This bot uses a `Typescript` module to organize and better understand the code's structure. This module exports the main `ChatBot` class that works as the API's backbone.

To initialize the bot first, import the main class into the desired project:

```Javascript
import ChatBot from 'pgi-chatbot'
```

Once is initialized, you'll need to create an instance of it:

```Javascript
const chatbot = new ChatBot();
```

The bot's instance takes some pre-created parameters: a `container` where the chat will take place and a `library` object that contains the desired question/answers duos:

```Javascript
// Container Element with id 'chat-container'
const container = document.getElementById('chat-container');

// Library of Q/A
const library = {
  'hello': "Hi!"
  'goodbye|bye': "Bye-bye!"
};
```

So, an instance of the API will end up looking something like this:

```Javascript
import ChatBot from 'pgi-chatbot'

const container = document.getElementById('chat-container');

const library = {
  'hello': "Hi!"
  'goodbye|bye': "Bye-bye!"
};

const chatbot = new ChatBot(container, library);
```

### Aditional Notes

#### Library

The `library` may be one of the most important parts of the API; its format is a `Javascript` object that contains a series of `string keys` and `string` answers.

The keys must be in lowercase and can have a `|` separator if an answer can be triggered by more than one question.

#### NPM Scripting

If there are changes to the `.ts` file, please run the

```
$ npm run compile
```

command to compile them into the `.js` file.
