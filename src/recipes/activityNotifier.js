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
        
    }, 15000);
 }
 broadcastEvent(from, recipe) {
    const event = new EventMessage(from, recipe);
    
 }
 
 receiveEvent() {
    
 }
}