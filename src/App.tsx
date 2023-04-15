import React, {useEffect, useState} from 'react';
import './App.css';
import s from './App.module.css'
import CounterDisplay from "./CounterDisplay";
import SettingBoard from "./SettingBoard";


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
        setStatus(false)
    }

    const inputMaxCallback = (maxValue: string) => {
        setMaxValue(+maxValue)
        setActive(!isActive ? isActive : !isActive)
        setStatus(true)
    }

    const inputMinCallback = (minValue: string) => {
        setMinValue(+minValue)
        setActive(!isActive ? isActive : !isActive)
        setStatus(true)
    }


    return (
        <div className={s.fon}>
            <SettingBoard
                maxValue={maxValue}
                minValue={minValue}
                isActive={isActive}
                inputMaxCallback={inputMaxCallback}
                inputMinCallback={inputMinCallback}
                onClickInputHandler={onClickInputHandler}
            />
            <CounterDisplay
                count={count}
                status={status}
                maxValue={maxValue}
                minValue={minValue}
                onClickHandler={onClickHandler}
                onClickHandlerZero={onClickHandlerZero}
            />
        </div>

    )
}

export default App;


