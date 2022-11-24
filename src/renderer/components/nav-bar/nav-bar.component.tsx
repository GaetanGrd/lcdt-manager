import icon from '../../../../assets/icon.svg';
import { LcdtIcon } from '../svgs/lcdt-icon.components';
import { useTranslation } from 'renderer/hooks/use-translation.hook';
                                             

export function NavBar() {

    const text = useTranslation();
    const isLoggedIn = true;

  return (
    <nav className="inset-4 pr-3 backdrop-blur-xl flex absolute justify-between items-center h-14 whitespace-nowrap font-sans font-semibold">
        <div id='Logo' className='pl-6 pr-2 relative'>
          <img src={icon} className="h-8"/>
        </div>
        <div id='primary-menu' className='h-full justify-start flex flex-auto order-none items-center'>
            <a href='#' className=' hover:bg-[#363949] rounded  py-2 inline-block text-white relative w-auto px-4'>{text("pages.home.title")}</a>
            <div className='hover:bg-[#363949] rounded  py-2  text-white relative w-auto px-4 flex'>{text("pages.game.title")} <LcdtIcon className="w-5 ml-1" icon="dropdown" style={{color: "white"}}/></div>
            <a href='#' className='hover:bg-[#363949] rounded py-2 inline-block text-white relative w-auto px-4'>{text("pages.tools.title")}</a>
            <a href='#' className='hover:bg-[#363949] rounded py-2 inline-block text-white relative w-auto px-4'>{text("pages.settings.title")}</a>
        </div>
        <div id='secondary-menu'>
          <a href='#' className='hover:bg-[#363949] rounded py-2 inline-block text-white relative w-auto px-4'>{text("pages.donators.title")}</a>
          <a href='#' className='hover:bg-[#363949] rounded py-2 inline-block text-white relative w-auto px-4'>{isLoggedIn ? text("misc.login") : text("misc.logout")}</a>

        </div>
    </nav>
  )
}
