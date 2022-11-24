import { LcdtIconType } from '../svgs/lcdt-icon.components';
import { useTranslation } from 'renderer/hooks/use-translation.hook';
import React from "react";

type ButtonType = "custom"|"success"|"cancel"|"error";
type PropsType = {
    className?: string,
    style?: React.CSSProperties,
    imgClassName?: string,
    iconClassName?: string,
    icon?: LcdtIconType,
    image?: string,
    text?: string,
    type?: string,
    active?: boolean,
    disabled?: boolean,
    onClickOutside?: (e: MouseEvent) => void,
    onClick?: (e: React.MouseEvent) => void,
    typeColor?:ButtonType,
    color?: string,
    title?: string,
}

export function BsmButton({className, style, imgClassName, iconClassName, icon, image, text, type, active, withBar = true, disabled, onClickOutside, onClick, typeColor, color, title}: propsType) {
    const t = useTranslation();
  
    const textColor = (() => {
      return typeColor ? "white" : undefined;
    })();
  
    const renderTypeColor = (() => {
      if(typeColor === "custom"){ return ""; }
      if(!typeColor){ return ``; }
      if(typeColor === "cancel"){ return "bg-gray-500"; }
      if(typeColor === "error"){ return "bg-red-500"; }
      if(typeColor === "success"){ return "bg-green-500"; }
      return "";
    })()
  
    return (
        <div onClick={onClick} title={t(title)} className={`${className} overflow-hidden cursor-pointer group ${(!disabled && (!!typeColor || !!color)) && "hover:brightness-[1.15]"} ${disabled && "brightness-75 cursor-not-allowed"} ${renderTypeColor}`} style={{...style, backgroundColor: primaryColor || color}}>
          { image && <BsmImage image={image} className={imgClassName}/> }
          { icon && <BsmIcon icon={icon} className={iconClassName ?? "h-full w-full text-gray-800 dark:text-white"}/> }
          {text && (type === "submit" ? <button type="submit" className="w-full h-full" style={{...(!!textColor && {color: textColor})}}>{t(text)}</button> : <span style={{...(!!textColor && {color: `${textColor}`})}}>{t(text)}</span>)}
          { withBar && (
            <div className="absolute bottom-0 left-0 w-full h-1 bg-current" style={{color: secondColor}}>
              <div className="absolute top-0 left-0 h-full w-full bg-current brightness-50"/>
              <div className={`absolute top-0 left-0 h-full w-full bg-inherit -translate-x-full group-hover:translate-x-0 transition-transform shadow-center shadow-current ${active && "translate-x-0"}`}/>
            </div>
          )}
        </div>
  
    )
  }