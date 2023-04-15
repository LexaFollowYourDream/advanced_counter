import React from 'react';
import s from "./App.module.css";
import Count from "./Count";
import SuperButton from "./SuperButton";


type CounterDisplayPropsType = {
    status: boolean
    count:number
    maxValue: number
    minValue: number
    onClickHandlerZero:()=>void
    onClickHandler:()=>void
}

const CounterDisplay:React.FC<CounterDisplayPropsType> = (
    {
        status,
        count,
        minValue,
        maxValue,
        onClickHandlerZero,
        onClickHandler,
    }
) => {

    return (
        <div className={s.block_buttons_number}>
            <div className={s.buttons_number}>
                <Count
                    text={"нажмите set"}
                    status={status}
                    count={count}
                    maxValue={maxValue}
                    minValue={minValue}
                />
            </div>
            <div className={s.buttons}>
                <SuperButton
                    onClick={onClickHandler}
                    name={"inc"}
                    className={count === maxValue ? `${s.button_inc_red}` : `${s.button_inc}`}
                    disabled={minValue < 0 || minValue >= maxValue || count === maxValue }
                />
                <SuperButton
                    onClick={onClickHandlerZero}
                    name={"reset"}
                    className={count === minValue ? `${s.button_reset_blue}` : `${s.button_reset}`}
                    disabled={minValue < 0 || minValue >= maxValue  }
                />
            </div>
        </div>
    );
};

export default CounterDisplay;