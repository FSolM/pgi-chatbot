# PGI Chabot

## PGI chatbot is a lightweight, easy to use question & response API for working with automated responses.

This bot uses a `Typescript` module to organize and better understand the code's structure. This module exports the main `ChatBot` class that works as the API's backbone.

### Usage

To install the package, use the following command:

```
$ npm i pgi-chatbot
```

To initialize the bot, first, import the main class into the desired project:

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

### Methods

#### Welcome Message

The bot contains a customizable welcoming message; to run it, first, initialize the bot and then run the `welcome()` method:

```Javascript
const chatbot = new ChatBot(container, library);

chatbot.welcome();
```

To customize the message, pass a `string` argument to the `welcome()` method:

```Javascript
chatbot.welcome('Hello there!');
```

#### Listen

The `listen` method is the basic entry point for the bot; it receives the message that the user has submitted and displays it in the previously defined container, then analyzes said message with the current library, and responds with either the defined answer or an error message if the message wasn't found in the `library`.

```Javascript
const container = document.getElementById('chat-container');

const library = { 'hello': "Hi!" };

const chatbot = new ChatBot(container, library);

chatbot.listen('Hello');

// Container Data:
// -> Hello
// -> Hi!

chatbot.listen('Hi there');

// Container Data:
// -> Hello
// -> Hi!
// -> Hi there
// -> Sorry, I didn't quite catched that
```

#### Respond

The `respond` method works similar to the `listen` one, except that it receives two parameters: a string message and an iterator instead of just the message. It's recommended to use this method when handling array libraries since the iterator will search for the respective answer pair in the array.

```Javascript
const container = document.getElementById('chat-container');

const library = ["Hi!"]

const chatbot = new ChatBot(container, library);

chatbot.respond('Hello!', 0);

// Container Data:
// -> Hello!
// -> Hi!

chatbot.respond('Hey!', 1);

// Container Data:
// -> Hello!
// -> Hi!
// -> Hey!
// -> Sorry, I didn't quite catched that
```

#### Library

The `library` may be one of the most important parts of the API; its format is a `Javascript` object that contains a series of `string keys` and `string` answers.

The keys must be in lowercase and can have a `|` separator if an answer can be triggered by more than one question.

Additionally, the `library` supports an array as its argument for listening to the user. It's recommended to use this method to implement an automatic form submission via the bot.

### Aditional Notes

#### Setters

You can personalize the class name for the bot messages, the user messages and the error message utilizing the class' setters:

```Javascript
chatbot.botClassName = 'new-bot-class';

chatbot.userClassName = 'new-user-class';

chatbot.errorMessage = 'New error message!';
```

#### NPM Scripting

If there are changes to the `.ts` file, please run the

```
$ npm run compile
```

command to compile them into the `.js` file.
