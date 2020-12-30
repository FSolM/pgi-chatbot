export default class ChatBot {
  container: HTMLElement;

  library: object;

  bot_class: string;
  user_class: string;

  error_message: string;

  constructor(container: HTMLElement, library: object) {
    // Sets internal target container for bot usage
    this.container = container;

    // Set default classes
    this.bot_class = 'bot-message';
    this.user_class = 'user-message';

    // Set default error message
    this.error_message = "Sorry, I didn't quite catched that";

    // Clears container's HTML
    this.container.innerHTML = '';

    // Initializes an empty library
    this.library = {};

    // Fills internal library
    Object.keys(library).forEach((key) => {
      if (typeof key === 'string') {
        // Incomming String key
        key.split('|').forEach((response) => {
          this.library[response] = library[key];
        });
      } else {
        // Incomming Number key
        this.library[key] = library[key];
        // Would be easier to just copy the array instead of looping through all the options again
        // maybe add a boolean in the constructor, or check the first key, if it's an string then loop, if not then copy
        // less hasle that way
      }
    });
  };

  // Setters
  set botClassName(name: string) {
    this.bot_class = name;
  };

  set userClassName(name: string) {
    this.user_class = name;
  };

  set errorMessage(message: string) {
    this.error_message = message;
  };

  // Methods
  welcome(welcome?: string): void {
    const message: string = (welcome === undefined) ? 'Welcome to the bot' : welcome;

    this.say(message, 'bot');
  };

  listen(message: string): void {
    this.say(message, 'user');

    message = message.toLowerCase();
    // Clear trailing Spaces

    (message in this.library) ? this.say(this.library[message], 'bot') : this.say(this.error_message, 'bot');
  };

  respond(message: string, input: number): void {
    this.say(message, 'user');

    (input in this.library) ? this.say(this.library[input], 'bot') : this.say(this.error_message, 'bot');
  }

  // Helper Methods
  private say(message: string, class_type: string): void {
    const element: string = this.construct(message, class_type);

    this.container.innerHTML += element;
  };
  
  private construct(message: string, class_type: string): string {
    const element_class: string = (class_type === 'user') ? this.user_class : this.bot_class;

    return `<div class=${element_class}>${message}</div>`;
  };
}
