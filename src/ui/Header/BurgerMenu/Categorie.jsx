import React from 'react';
import { useBoolean } from '../../../hooks/useBoolean';

export const Categorie = () => {
  const [isActiveCategorie, setIsActiveCategorie] = useBoolean(true);

  return (
    <div className="font-medium">
      <button
        onClick={() => setIsActiveCategorie.on()}
        className={`${isActiveCategorie && 'text-pinkColor underline'}`}
      >
        Каталог
      </button>
      <button
        onClick={() => setIsActiveCategorie.off()}
        className={`${!isActiveCategorie && 'text-pinkColor underline'}`}
      >
        По бренду
      </button>
    </div>
  );
};
