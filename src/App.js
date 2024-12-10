import { InputUtils } from "./utils/IOutils.js";
import { Console } from "@woowacourse/mission-utils";
import RacingGame from "./module/RacingGame.js";
class App {
  async run() {
    try {
      const carNameList = await InputUtils.nameInput();
      const tryNumber = await InputUtils.tryNumberInput();

      const racingGame = new RacingGame(carNameList, tryNumber);

      racingGame.start();

    } catch (error) {
      Console.print(error.message);
      throw error;
    }

  }
}

export default App;
