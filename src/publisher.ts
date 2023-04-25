import { Subscriber } from "./subscriber";

export class ConcretePublisher {
    // this is where we maintain list of subscribers for our PubSub
  private subscribers: Subscriber[] = [];

  subscribe(subscriber){
    // add the subscriber to existing list
    this.subscribers = [...this.subscribers, subscriber]
  }

  unsubscribe(subscriber){
   // remove the subscriber from existing list
    this.subscribers = this.subscribers.filter(sub => sub!== subscriber)
  }

  publish(payload){
   // publish payload to existing subscribers by invoking them
    this.subscribers.forEach(subscriber => subscriber.update(payload))
  }
}