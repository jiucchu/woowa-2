import Car from "./Car.js";
import { Console } from "@woowacourse/mission-utils";
import RandomNumberGenerator from "./RandomNumberGenerator.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class RacingGame {
  constructor(carNames, tryNumber) {
    this.cars = carNames.map(name => new Car(name));
    this.tryNumber = tryNumber;
  }

  start() {
    Console.print('');
    Console.print('실행 결과');
    for (let i = 0; i < this.tryNumber; i++) {
      this.cars.forEach(car => {
          car.move(RandomNumberGenerator.generate());
      });
      this.printNowRacing();
    }
    this.printWinners();
  }

  printNowRacing() {
    this.cars.forEach(car => {
      Console.print(`${car.getName()} : ${'-'.repeat(car.getPosition())}`);
    });
    Console.print('');
  }

  printWinners() {
    const maxPosition = Math.max(...this.cars.map(car => car.getPosition()));
    const winners = this.cars.filter(car => car.getPosition() === maxPosition).map(car => car.getName());
    Console.print("최종 우승자 : " + winners.join(", "));
  }
}

export default RacingGame;