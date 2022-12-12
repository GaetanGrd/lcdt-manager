import { LcdtIcon } from '../svgs/lcdt-icon.components';
import { useTranslation } from 'renderer/hooks/use-translation.hook';
import { NavBarButton} from './nav-bar-button.component'

export function NavBar() {

    const text = useTranslation();
    const isLoggedIn = true;

  return (
    <nav className="inset-4 pr-3 backdrop-blur-xl flex absolute justify-between items-center h-14 whitespace-nowrap font-sans font-semibold">
        <div id='primary-menu' className='h-full justify-start flex flex-auto order-none items-center'>
            <NavBarButton txt="pages.home.title" linkTo="/home"/>
            <div className='hover:bg-[#363949] rounded  py-2  text-white relative w-auto px-4 flex'>{text("pages.game.title")} <LcdtIcon className="w-5 ml-1" icon="dropdown" style={{color: "white"}}/></div>
            <NavBarButton txt="pages.tools.title" linkTo="/tools"/>
            <NavBarButton txt="pages.settings.title" linkTo="/settings"/>
        </div>
        <div id='secondary-menu'>
          <NavBarButton txt="pages.donators.title" linkTo="/tools"/>
          <NavBarButton txt={isLoggedIn ? text("misc.login") : text("misc.logout")} linkTo="#"/>
        </div>
    </nav>
  )
}
