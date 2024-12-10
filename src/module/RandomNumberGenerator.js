import { Random } from "@woowacourse/mission-utils";

export default class RandomNumberGenerator {
    static generate() {
        return Random.pickNumberInRange(0, 9);
    }
}