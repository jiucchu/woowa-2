import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE } from "../utils/Constant.js";

export class InputValidator {
    static validateCarName(nameList) {
        nameList.map(name => {
            if (name.length > 5 || name.length === 0) {
                throw new Error(ERROR_MESSAGE.NAME_INPUT_ERRROR);
            }
        })

        return 0
    }

    static validateTryNumber(strTryNumber) {

        const tryNumber = Number(strTryNumber);

        if (strTryNumber === '') {
            throw new Error(ERROR_MESSAGE.TRYNUMBER_INPUT_IS_EMPTY);
        }

        if (Number.isNaN(tryNumber)) {
            throw new Error(ERROR_MESSAGE.INPUT_IS_NOT_NUMBER);
        }

        if (tryNumber < 0) {
            throw new Error(ERROR_MESSAGE.INPUT_IN_NOT_POSITIVE);
        }

        return tryNumber
    }
}

