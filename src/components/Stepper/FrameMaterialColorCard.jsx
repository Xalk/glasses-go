import React from 'react';
import useAppContext from '../../hooks/useAppContext';

function FrameMaterialColorCard({ name, id, price }) {
  const { setDesignedGlasses, designedGlasses } = useAppContext();

  const handleClick = () => {
    let obj = {
      id,
      name,
      price,
    };

    setDesignedGlasses((prev) => ({ ...prev, frameMaterialColor: obj }));
  };

  const isSelected = id === designedGlasses?.frameMaterialColor?.id;

  return (
    <div
      style={{
        border: isSelected ? '1px solid green' : '',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10px',
        borderRadius: '10px',
      }}
      onClick={handleClick}
    >
      <div
        style={{
          width: '32px',
          height: '32px',
          backgroundColor: name,
          borderRadius: '50%',
        }}
      ></div>
      <p>{name}</p>
      <p>${price}</p>
    </div>
  );
}

export default FrameMaterialColorCard;
