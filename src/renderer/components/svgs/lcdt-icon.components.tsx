import { CSSProperties, memo } from "react";

import { DropdownIcon } from "./icons/dropdown";
import { TrashIcon } from "./icons/trash-icon.component";

export type LcdtIconType = (
    "dropdown"|"trash"
 )

 export const LcdtIcon = memo(({className, icon, style}: {className?: string, icon: LcdtIconType, style?: CSSProperties}) => {

    const renderIcon = () => {
        if(icon === "dropdown"){ return <DropdownIcon className={className} style={style}/> }
        return <TrashIcon className={className} style={style}/>
    }

  return (
    <>
        {renderIcon()}
    </>
  )
})