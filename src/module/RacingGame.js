import { Console } from "@woowacourse/mission-utils";
import Car from "./Car.js";
import { OutPutUtils } from "../utils/IOutils.js";

export default class RacingGame {
    constructor(carNameList, tryNumber) {
        this.carList = carNameList.map(carName => new Car(carName))
        this.tryNumber = tryNumber;
    }

    start() {
        OutPutUtils.printEmptyLine()
        OutPutUtils.printResultNotice();

        for (let i = 0; i < this.tryNumber; i++) {
            this.carList.map(car => {
                car.move()
                OutPutUtils.printResult(car);
            });
            OutPutUtils.printEmptyLine();
        }

        const winnerList = this.getWinner(this.carList);
        OutPutUtils.printWinnerList(winnerList);
    }

    getWinner(carList) {
        const max = carList.reduce((prev, el) => {
            return prev.movement >= el.movement ? prev.movement : el.movement
        })

        const winnerList = carList.filter(car => car.movement === max);

        return winnerList
    }


}