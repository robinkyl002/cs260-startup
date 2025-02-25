class EventMessage {
    constructor(from, recipe) {
        this.from = from;
        this.recipe = recipe;
    }
}

class ActivityNotifier {
 events = [];
 handlers = [];
 
 constructor() {
    setInterval(() => {
        
        const userName = 'Fred';
        this.broadcastEvent(userName, );
    }, 15000);
 }
 broadcastEvent(from, recipe) {
    const event = new EventMessage(from, recipe);
    
    this.receiveEvent(event);
 }
 
 addHandler(handler) {
    this.handlers.push(handler);
  }

  removeHandler(handler) {
    this.handlers.filter((h) => h !== handler);
  }
 
 receiveEvent(event) {
    this.events.push(event);
    
    this.handlers.forEach((handler) => {
        handler(event);
    });
 }
}

const ActivityNotify = new ActivityNotifier();
export { ActivityNotify };