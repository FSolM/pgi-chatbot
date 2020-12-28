export default class ChatBot {
  container: HTMLElement;

  library: object;

  bot_class: string;
  user_class: string;

  constructor(container: HTMLElement, library: object) {
    // Sets internal target container for bot usage
    this.container = container;

    // Set default classes
    this.bot_class = 'bot-message';
    this.user_class = 'user-message';

    // Clears container's HTML
    this.container.innerHTML = '';

    // Initializes an empty library
    this.library = {};

    // Fills internal library
    Object.keys(library).forEach((key) => {
      key.split('|').forEach((response) => {
        this.library[response] = library[key];
      });
    });
  };

  // Setters
  set botClassName(name) {
    this.bot_class = name;
  };

  set userClassName(name) {
    this.user_class = name;
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

    (message in this.library) ? this.say(this.library[message], 'bot') : this.say("Sorry, I didn't quite catched that", 'bot');
  };

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
