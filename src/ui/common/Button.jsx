const circleIconStyles =
  'px-[0px] py-[0px] w-[50px] h-[50px] flex  justify-center items-center';

const colorsBgStyles = {
  beige: 'bg-beigeColor',
  pink: 'bg-pinkColor',
  balackColor: 'bg-balackColor',
  grayColor: 'bg-grayColor',
};

export const Button = ({
  children,
  onClick,
  hasCircleIconStyles = false,
  colorKey = '',
  otherStyle = '',
  hasSquareBtn = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={` ${otherStyle}  ${hasCircleIconStyles && circleIconStyles}  ${
        colorKey && colorsBgStyles[colorKey]
      } ${hasSquareBtn ? 'rounded-[4px]' : 'rounded-[250px] px-7 py-2'}`}
    >
      {children}
    </button>
  );
};
