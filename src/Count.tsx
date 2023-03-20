import s from "./App.module.css";

type CountPropsType = {
    count: number,
    maxValue: number
    minValue: number
    status: boolean
    text: string
}

const Count = (props: CountPropsType) => {
    return (
        props.status
            ?
            props.minValue < 0 || props.maxValue <= props.minValue
                ?

                <h1 className={s.number}>
                    not correct !!!
                </h1>
                :
                <h1 className={props.count === props.maxValue ? `${s.number}` : `${s.numberCounter}`}>
                    {props.text}
                </h1>
            :
            props.minValue < 0 || props.maxValue <= props.minValue
                ?
                <div className={s.number}>
                    not correct !!!
                </div>
                :
                <h1 className={props.count === props.maxValue ? `${s.number}` : `${s.numberCounter}`}>
                    {props.count}
                </h1>
    )
};

export default Count;

