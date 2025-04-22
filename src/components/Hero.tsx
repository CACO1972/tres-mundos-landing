
const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black z-0"></div>
      
      {/* Images */}
      <div className="container mx-auto grid grid-cols-3 gap-4 md:gap-10 z-10 px-4">
        {/* Surgeon image - left */}
        <div className="hidden md:flex items-center justify-end">
          <div className="relative h-80 w-56 md:h-96 md:w-64 overflow-hidden rounded-md">
            <img 
              src="/lovable-uploads/0a413a6c-ce9c-4c13-9993-add39f1ec34b.png" 
              alt="Carlos Montoya como cirujano" 
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
          </div>
        </div>
        
        {/* Main image - center */}
        <div className="col-span-3 md:col-span-1 flex items-center justify-center">
          <div className="relative h-[30rem] w-72 md:h-[36rem] md:w-80 overflow-hidden">
            <img 
              src="/lovable-uploads/c5fbffb9-714c-4193-a62d-60df8475aa66.png" 
              alt="Carlos Montoya" 
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30"></div>
          </div>
        </div>
        
        {/* Race driver image - right */}
        <div className="hidden md:flex items-center justify-start">
          <div className="relative h-80 w-56 md:h-96 md:w-64 overflow-hidden rounded-md">
            <img 
              src="/lovable-uploads/8a1c620f-bda6-4270-a606-77e312e4f01a.png" 
              alt="Carlos Montoya como piloto" 
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
          </div>
        </div>
      </div>
      
      {/* Text overlay */}
      <div className="absolute bottom-0 inset-x-0 text-center pb-16 md:pb-20 z-20">
        <h1 className="bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent text-3xl md:text-5xl font-extralight tracking-wider mb-2">
          Tres mundos, una sola pasión
        </h1>
        <p className="text-white/80 text-lg md:text-xl font-light tracking-wide">
          Implantólogo. Emprendedor. Piloto.
        </p>
      </div>
    </div>
  );
};

export default Hero;
