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
    const recipeExamples = ["Beef Stew", "Crepes", "Creme Brulee", "Cajun Chicken Pasta", "Chicken Alfredo", "Chicken Pot Pie", "Farmer's Casserole", "Spaghetti", "Ham Fried Rice", "Teriyaki Chicken", "Panko Sesame Chicken", "Swissburgers"];
    
    setInterval(() => {
        const userName = 'Fred';
        const recipe = recipeExamples.at(Math.floor(Math.random() * (recipeExamples.length-1)));
        this.broadcastEvent(userName, recipe);
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