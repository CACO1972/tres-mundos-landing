
import { useState, useEffect } from 'react';
import { loadImage, removeBackground } from "@/utils/backgroundRemoval";
import { Loader } from "lucide-react";

const Hero = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedImages, setProcessedImages] = useState<{[key: string]: string}>({});
  const [error, setError] = useState<string | null>(null);
  
  const imageSources = {
    surgeon: "/lovable-uploads/0a413a6c-ce9c-4c13-9993-add39f1ec34b.png",
    main: "/lovable-uploads/c5fbffb9-714c-4193-a62d-60df8475aa66.png",
    racer: "/lovable-uploads/8a1c620f-bda6-4270-a606-77e312e4f01a.png"
  };

  useEffect(() => {
    const processImages = async () => {
      setIsProcessing(true);
      setError(null);
      
      try {
        const processedUrls: {[key: string]: string} = {};
        
        for (const [key, url] of Object.entries(imageSources)) {
          try {
            console.log(`Processing image: ${key}`);
            const img = await loadImage(url);
            const blob = await removeBackground(img);
            const objectUrl = URL.createObjectURL(blob);
            processedUrls[key] = objectUrl;
            console.log(`Processed image: ${key}`);
          } catch (e) {
            console.error(`Error processing image ${key}:`, e);
            // Fall back to original image if processing fails
            processedUrls[key] = url;
          }
        }
        
        setProcessedImages(processedUrls);
      } catch (e) {
        console.error("Error in image processing:", e);
        setError("Hubo un problema al procesar las imágenes. Mostrando imágenes originales.");
      } finally {
        setIsProcessing(false);
      }
    };
    
    processImages();
    
    // Cleanup function to revoke object URLs when component unmounts
    return () => {
      Object.values(processedImages).forEach(url => {
        if (url.startsWith('blob:')) {
          URL.revokeObjectURL(url);
        }
      });
    };
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black z-0"></div>
      
      {/* Processing indicator */}
      {isProcessing && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="text-center">
            <Loader className="mx-auto h-10 w-10 animate-spin text-gold" />
            <p className="mt-2 text-gold">Procesando imágenes...</p>
          </div>
        </div>
      )}
      
      {/* Error message */}
      {error && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50 bg-red-600/80 text-white px-4 py-2 rounded">
          {error}
        </div>
      )}
      
      {/* Images */}
      <div className="container mx-auto grid grid-cols-3 gap-4 md:gap-10 z-10 px-4">
        {/* Surgeon image - left */}
        <div className="hidden md:flex items-center justify-end">
          <div className="relative h-80 w-56 md:h-96 md:w-64 overflow-hidden rounded-md">
            <img 
              src={processedImages.surgeon || imageSources.surgeon} 
              alt="Carlos Montoya como cirujano" 
              className="absolute inset-0 w-full h-full object-contain object-center"
              style={{ 
                filter: 'drop-shadow(0 0 10px rgba(212, 175, 55, 0.3))' 
              }}
            />
          </div>
        </div>
        
        {/* Main image - center */}
        <div className="col-span-3 md:col-span-1 flex items-center justify-center">
          <div className="relative h-[30rem] w-72 md:h-[36rem] md:w-80 overflow-hidden">
            <img 
              src={processedImages.main || imageSources.main} 
              alt="Carlos Montoya" 
              className="absolute inset-0 w-full h-full object-contain object-center"
              style={{ 
                filter: 'drop-shadow(0 0 15px rgba(212, 175, 55, 0.4))' 
              }}
            />
          </div>
        </div>
        
        {/* Race driver image - right */}
        <div className="hidden md:flex items-center justify-start">
          <div className="relative h-80 w-56 md:h-96 md:w-64 overflow-hidden rounded-md">
            <img 
              src={processedImages.racer || imageSources.racer} 
              alt="Carlos Montoya como piloto" 
              className="absolute inset-0 w-full h-full object-contain object-center"
              style={{ 
                filter: 'drop-shadow(0 0 10px rgba(212, 175, 55, 0.3))' 
              }}
            />
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
