import { Console } from "@woowacourse/mission-utils";
import { InputValidator } from "../validator/InputValidator.js";

export class InputUtils {
    static async nameInput() {
        const inputString = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
        const nameList = this.nameStrToList(inputString);
        InputValidator.validateCarName(nameList);

        return nameList
    }

    static nameStrToList(inputString) {

        let nameList = inputString.split(',');
        nameList.map(str => {
            str.trim()
        })

        return nameList;
    }

    static async tryNumberInput() {
        let tryNumber = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
        tryNumber = InputValidator.validateTryNumber(tryNumber);

        return tryNumber
    }
}


export class OutPutUtils {

    static printEmptyLine() {
        Console.print('');
    }

    static printResultNotice() {
        Console.print('실행 결과');
    }

    static printResult(car) {
        const name = car.getName();
        const movement = car.getMovement();

        Console.print(name + ' : ' + '-'.repeat(movement));
    }

    static printWinnerList(winnerList) {

        let winners = winnerList.map(car => car.getName())
        winners.join(', ');

        Console.print('최종 우승자 : ' + winners);
    }
}