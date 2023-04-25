export interface Subscriber {
  update(data: any): void;
}

export class ConcreteSubscriber implements Subscriber {
  update(data: any): void {
    console.log(`Received data: ${data}`);
  }
}
