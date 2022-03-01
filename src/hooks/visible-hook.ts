import { MouseEventHandler, useState } from 'react';

interface visibleType{
    isVisible: boolean,
    toogleVisible: MouseEventHandler<HTMLButtonElement>
}

const useVisible = (initialVisibleValue: boolean): visibleType => {
    const [isVisible, setIsvisible] = useState<boolean>(initialVisibleValue)
    
    const toogleVisible = () => {
        setIsvisible(!isVisible)
    }

    return {
        isVisible, toogleVisible
    }

}

export {useVisible}