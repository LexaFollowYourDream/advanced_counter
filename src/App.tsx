import React, {useEffect, useState} from 'react';
import './App.css';
import s from './App.module.css'
import SuperButton from "./SuperButton";
import MaxInput from "./MaxInput";
import MinInput from "./MinInput";
import Count from "./Count";


function App() {

    const [count, setCount] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [minValue, setMinValue] = useState<number>(0)
    const [isActive, setActive] = useState<boolean>(false)
    const [status, setStatus] = useState<boolean>(false)


    useEffect(() => {
        let countAsString = localStorage.getItem("count")
        if (countAsString) {
            let newCount = JSON.parse(countAsString)
            setCount(newCount)
        }
        let maxValueAsString = localStorage.getItem("maxValue")
        if (maxValueAsString) {
            let newMaxValue = JSON.parse(maxValueAsString)
            setMaxValue(newMaxValue)
        }
        let minValueAsString = localStorage.getItem("minValue")
        if (minValueAsString) {
            let newMinValue = JSON.parse(minValueAsString)
            setMinValue(newMinValue)
        }
    }, [])


    useEffect(() => {
        localStorage.setItem("count", JSON.stringify(count))
        localStorage.setItem("maxValue", JSON.stringify(maxValue))
        localStorage.setItem("minValue", JSON.stringify(minValue))
    }, [count, maxValue, minValue])


    const onClickHandler = () => {
        if (count >= maxValue) {
            return
        }
        setCount((prevState) => prevState + 1)
    }

    const onClickHandlerZero = () => {
        setCount(minValue)
    }

    const onClickInputHandler = () => {
        setActive(!isActive)
        setCount(minValue)
        setMaxValue(maxValue)
        offStatus()
    }

    const inputMaxCallback = (maxValue: string) => {
        setMaxValue(+maxValue)
        setActive(!isActive ? isActive : !isActive)
        onStatus()
    }

    const inputMinCallback = (minValue: string) => {
        setMinValue(+minValue)
        setActive(!isActive ? isActive : !isActive)
        onStatus()
    }

    const onStatus = () => {
        setStatus(true)
    }

    const offStatus = () => {
        setStatus(false)
    }


    return (
            <div className={s.fon}>
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
                            disabled={minValue < 0 || minValue >= maxValue || count === maxValue}
                        />
                        <SuperButton
                            onClick={onClickHandlerZero}
                            name={"reset"}
                            className={count === minValue ? `${s.button_reset_blue}` : `${s.button_reset}`}
                            disabled={minValue < 0 || minValue >= maxValue}
                        />
                    </div>
                </div>
            </div>

    )
}

export default App;





