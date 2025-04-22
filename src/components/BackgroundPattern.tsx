
const BackgroundPattern = () => {
  return (
    <div className="fixed inset-0 z-0 opacity-5 pointer-events-none">
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Grid pattern */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(to right, #D4AF37 1px, transparent 1px), linear-gradient(to bottom, #D4AF37 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        ></div>
        
        {/* Diagonal lines */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #D4AF37, #D4AF37 1px, transparent 1px, transparent 60px)',
          }}
        ></div>
      </div>
    </div>
  );
};

export default BackgroundPattern;
