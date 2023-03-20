import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';


type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>


type SuperButtonPropsType = DefaultButtonPropsType &   {
    name:string,
    className?:string|undefined
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        name,
        className,
       ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {

    return (
        <button
            className={className}
            {...restProps}
        >
            {name}
        </button>
    )
}

export default SuperButton;
