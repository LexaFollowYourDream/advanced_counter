import React, {ChangeEvent,} from 'react';
import s from "./App.module.css";

type MaxInputPropsType = {
    inputMaxCallback:(maxValue:string)=>void
    maxValue:number
    minValue:number
}

const MaxInput: React.FC<MaxInputPropsType> = (
    {
        inputMaxCallback,
        maxValue,
        minValue,
    }
) => {

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>)=>{
         console.log(event.currentTarget.value)
        inputMaxCallback(event.currentTarget.value)
    }

    return (
           maxValue <= minValue
            ?
            <input
                type="number"
                value={maxValue}
                onChange={onChangeHandler}
                className={s.input_numberError}
            />
            :
            <input
                type="number"
                value={maxValue}
                onChange={onChangeHandler}
                className={s.input_Max}
            />
    );
};

export default MaxInput;