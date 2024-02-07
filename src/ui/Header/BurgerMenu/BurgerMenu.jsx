import React, { useState } from 'react';
import { Categorie } from './Categorie';
import BurgerBtnIcon from '../../../img/icons/burgerMenu.svg?react';
import CloseIcon from '../../../img/icons/close.svg?react';

export const BurgerMenu = () => {
  return (
    <div>
      <button>
        <BurgerBtnIcon />
      </button>

      <div>
        <div className="fixed inset-0 bg-black/25"></div>
        <div className="w-[374px] h-full fixed left-0 top-0 z-50 bg-white pt-7 pr-10 pl-12">
          <div className="flex justify-end mb-7">
            <CloseIcon className="w-6 h-6" />
          </div>
          <Categorie />
        </div>
      </div>
    </div>
  );
};
