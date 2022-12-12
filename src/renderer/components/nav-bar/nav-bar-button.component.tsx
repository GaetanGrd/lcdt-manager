import { useTranslation } from 'renderer/hooks/use-translation.hook';
import {Link} from 'react-router-dom';

type Props = {              // Value exemple :
  txt : string,             // "pages.game.title"
  linkTo : string,            // /home
}

export function NavBarButton({txt, linkTo} : Props ) {
  const translate = useTranslation();
  const className = "hover:bg-[#363949] rounded py-2 inline-block text-white relative w-auto px-4";
  return (
    <Link to={linkTo} className={className} >{translate(txt)}</Link>
  )
}
