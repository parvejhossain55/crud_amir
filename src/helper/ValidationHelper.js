import cogoTost from "cogo-toast";

class ValidationHelper {

    isEmpty(value){
        if(value.length === 0){
            return true;
        }
        else{
            return false;
        }
    }

    successTost(msg){
        cogoTost.success(msg)
    }
    errorTost(msg){
        cogoTost.error(msg)
    }
}

export const {isEmpty , successTost, errorTost} = new ValidationHelper();
