import { ConcretePublisher } from "./publisher";
import { Subscriber, ConcreteSubscriber } from "./subscriber";

const publisher = new ConcretePublisher();
const subscriberA: Subscriber = new ConcreteSubscriber();
const subscriberB: Subscriber = new ConcreteSubscriber();
const subscriberC: Subscriber = new ConcreteSubscriber();

// Subscribe
publisher.subscribe(subscriberA);
publisher.subscribe(subscriberB);
publisher.subscribe(subscriberC);

// Push notify 1 to all Subscriber
publisher.publish("Notification 1 !");
// UnSubscribe
publisher.unsubscribe(subscriberA);
publisher.unsubscribe(subscriberB);
console.log('--- After UnSubcribe A, B ---')
// Push notify 2 to all Subscriber
publisher.publish("Notification 2 !");
