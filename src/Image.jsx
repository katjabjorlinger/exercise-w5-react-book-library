export const Image = ({ src, alt }) => {
    return (
      <img
        src={src}
        alt={alt}
        style={{ width: '150px', height: 'auto', borderRadius: '8px' }}
      />
    );
  };
  