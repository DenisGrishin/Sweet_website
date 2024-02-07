import { useHover } from '@uidotdev/usehooks';
import { Button } from '../common/Button';

import { useBoolean } from '../../hooks/useBoolean';
import InfoButtonIcon from '../../img/icons/info-icon.svg?react';
import InfoButtonIconHover from '../../img/icons/info-icon-hover.svg?react';
import FacebookIcon from '../../img/icons/facebook.svg?react';
import TwitterIcon from '../../img/icons/twitter.svg?react';
import VkIcon from '../../img/icons/vk.svg?react';
import InstagramIcon from '../../img/icons/instagram.svg?react';
import Popup from './../common/Popup';

export const ContactandTime = () => {
  const [ref, hovering] = useHover();
  const [isOpen, setIsOpen] = useBoolean(false);
  return (
    <div>
      <div>C 09:00 до 22:00</div>
      <div className="flex items-center space-x-2">
        <a href="tel:8800111111" className="text-lg font-medium">
          8 (000) 111-11-11
        </a>

        <button onClick={setIsOpen.toggle} ref={ref}>
          {hovering ? <InfoButtonIconHover /> : <InfoButtonIcon />}
        </button>

        <Popup isOpen={isOpen} setIsOpen={setIsOpen.toggle}>
          <div className="text-center ">
            <div className="grid py-5">
              <div className="mb-2 opacity-50 ">
                г. Москва, Ленинский проспект, дом, строение
              </div>

              <a
                href="tel:80001111111"
                className="text-lg font-medium leading-[1.25]"
              >
                8 (000) 111-11-11
              </a>
              <a
                href="tel:+7000000000"
                className="text-lg font-medium leading-[1.25]"
              >
                +7 (000) 000-00-00
              </a>
            </div>
            <div className=" bg-[#f9f9f9] py-5">
              <div className="font-semibold text-[17px] mb-5">
                Мы в социальных сетях:
              </div>
              <div className="space-x-6 flex justify-center">
                <a href="#">
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a href="#">
                  {' '}
                  <TwitterIcon className="w-4 h-4" />
                </a>
                <a href="#">
                  {' '}
                  <VkIcon className="w-4 h-4" />
                </a>
                <a href="#">
                  {' '}
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </Popup>
      </div>
    </div>
  );
};
