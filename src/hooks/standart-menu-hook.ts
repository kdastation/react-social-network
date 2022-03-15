import { useState } from "react";

export const useStandartMenu = () => {
    const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElement(event.currentTarget);
      };
    
    const onClose = () => {
        setAnchorElement(null)
    }

    return {
        anchorElement,
        handleClick,
        onClose
    }
}