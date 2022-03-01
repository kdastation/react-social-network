import { ChangeEventHandler, useState } from 'react';

interface inputType{
    value: string,
    onChange: ChangeEventHandler<HTMLInputElement>,
    clearValue: Function
}

const useInput = (): inputType => {
    const [value, setValue] = useState<string>('')

    const onChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const clearValue = () => {
        setValue('')
    }

    return {
        value, onChange, clearValue
    }
}

export {useInput}