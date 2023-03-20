import React, {ChangeEvent} from 'react';
import s from './App.module.css'



type MinInputPropsType = {
    inputMinCallback: (minValue: string) => void
    minValue: number
    maxValue: number

}

const MinInput: React.FC<MinInputPropsType> = (
    {
        inputMinCallback,
        minValue,
        maxValue,

    }
) => {


    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        inputMinCallback(event.currentTarget.value)
    }



    return (

            minValue < 0 || minValue >= maxValue
                ?
                <input
                    type="number"
                    value={minValue}
                    onChange={onChangeHandler}
                    className={s.input_numberError}
                />
                :
                <input
                    type="number"
                    value={minValue}
                    onChange={onChangeHandler}
                    className={s.input_Min}
                />

    );
};

export default MinInput;


