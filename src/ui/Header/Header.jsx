import { ContactandTime } from './ContactandTime';
import LoginPopup from './LoginPopup';
import { TitleSite } from './TitleSite';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';

export const Header = () => {
  return (
    <header className="pt-8 pb-5 flex justify-between items-center">
      <div className="flex items-center gap-x-4">
        <BurgerMenu />
        <ContactandTime />
      </div>
      <TitleSite />
      <LoginPopup />
    </header>
  );
};
