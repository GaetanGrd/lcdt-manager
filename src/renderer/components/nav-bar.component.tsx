import icon from '../../../assets/icon.svg';
import { useTranslation } from 'renderer/hooks/use-translation.hook';


export function NavBar() {

    const text = useTranslation();

  return (
    <nav className="justify-center bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900 h-24 align-middle ">
        <div className="flex align-middle">
            <a href="/" className="flex items-center w-36 ">
                <img src={icon} className="h-6 mr-3 sm:h-9" alt="lcdt logo" />
            </a>
            <div>
                <ul className="  flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li className='w-10'>
                        <a href="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">{text("pages.home.title")}</a>
                    </li>
                    <li>
                        <a href="/" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{text("pages.game.title")}</a>
                    </li>
                    <li>
                        <a href="/" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{text("pages.tools.title")}</a>
                    </li>
                    <li>
                        <a href="/" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{text("pages.settings.title")}</a>
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>
  )
}
