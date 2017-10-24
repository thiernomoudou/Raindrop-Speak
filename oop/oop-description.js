//OOP implementation

//real life object example Mobile Phone

//define a class Mobile with some attribute and basic functionnalitiies
class Mobile {
  //define some attributes of a mobile phone
  constructor(brand, color, processor, IMEICode, internalMemory) {
    this.brand = brand;
    this.color = color;
    this._processor = processor;
    this._IMEICode = IMEICode;
    this.internalMemory = internalMemory;
  }

  dial(number) {
    console.log('Dial a number ' + number);
  }

  receiveCall() {
    console.log('Receive a call');
  }

  sendMessage() {
    console.log('Message sent');
  }
}

//instances of class Mobile are for example

let mobile = new Mobile('samsung A-9', 'blue', 'intel324', '76567556757656', 7);

console.log(mobile.brand);
mobile.sendMessage();

//Abstraction

//When calling the method dial, we don't care about how it works inside. we just know that it
//will print the number we provide without knowing how it does it.

mobile.dial('+376287378838');

//Encapsulation

// We implement Encapsulation by specifying public or private,
// with the undescore, we set  _processor and _IMEICode attributes as private. even though they are still accessible to the public. Javascript doesn't support private like other languages.

//Inheritance
//Smartphone Inherit all attributes and methods of Mobile and add it own methods.

class Smartphone extends Mobile {
  constructor(brand, color, processor, IMEICode, internalMemory) {
    super(brand, color, processor, IMEICode, internalMemory, 'Mobile');
  }

  getWifiConnection() {
    Console.log('WIFI connected');
  }

  takePicture() {
    console.log('picture took');
  }

  getBluetooth() {
    console.log('Bluetooth code..');
  }

  sendMessage() {
    console.log('Message sent by a smartphone');
  }
}

let smartphone = new Smartphone('LG c-9', 'white', 'AMD324', '83739922777', 26);

console.log(smartphone.brand);
smartphone.dial('76832626');
smartphone.getBluetooth();

// Polymorphism

//the methods sendMessage for Mobile and smartphone are different. the method doesn't change.
//we can use sendMessage for both Mobile and Smartphone and it will give the appropriate functionnality we want.
smartphone.sendMessage();
