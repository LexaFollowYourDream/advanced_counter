import React from 'react';
import s from "./App.module.css";
import MaxInput from "./MaxInput";
import MinInput from "./MinInput";
import SuperButton from "./SuperButton";

type SettingBoardPropsType = {
    maxValue: number
    minValue: number
    isActive:boolean
    onClickInputHandler:()=>void
    inputMaxCallback:(maxValue: string) =>void
    inputMinCallback:(minValue: string) =>void
}

const SettingBoard:React.FC<SettingBoardPropsType> = (
    {
        maxValue,
        minValue,
        onClickInputHandler,
        inputMaxCallback,
        inputMinCallback,
        isActive,
    }
) => {
    return (
        <div className={s.counter_button}>
            <div className={s.input_text}>
                <div className={s.input_block}>
                    <div className={s.input_text_one}>
                        <div className={s.text}>max value :</div>
                        <MaxInput
                            inputMaxCallback={inputMaxCallback}
                            maxValue={maxValue}
                            minValue={minValue}
                        />
                    </div>
                    <div className={s.input_text_two}>
                        <div className={s.text}>min value :</div>
                        <MinInput
                            inputMinCallback={inputMinCallback}
                            minValue={minValue}
                            maxValue={maxValue}
                        />
                    </div>
                </div>
                <div className={s.block_button_set}>
                    <SuperButton name={"set"}
                                 onClick={onClickInputHandler}
                                 className={s.button_set}
                                 disabled={isActive || minValue < 0 || minValue >= maxValue}
                    />
                </div>
            </div>
        </div>
    );
};

export default SettingBoard;