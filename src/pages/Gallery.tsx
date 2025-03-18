
import { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Image } from "lucide-react";

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // This would be replaced with actual images later
  const [images, setImages] = useState<string[]>([]);

  // Placeholder for demonstration
  const placeholders = Array(9).fill(null);

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-asap-blue mb-4">Gallery</h1>
        <p className="text-xl max-w-3xl mx-auto text-gray-600">
          COME VISIT US
        </p>
        <div className="flex items-center justify-center gap-2 mt-2">
          <MapPin className="h-5 w-5 text-asap-blue" />
          <p className="text-lg">4940 Ward Rd, Wheat Ridge Colorado</p>
        </div>
      </div>

      {images.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <img 
                  src={image} 
                  alt={`ASAP Facility ${index + 1}`} 
                  className="w-full h-64 object-cover"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {placeholders.map((_, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0 bg-gray-100 h-64 flex flex-col items-center justify-center">
                  <Image className="h-16 w-16 text-gray-400 mb-4" />
                  <p className="text-gray-500">Image placeholder {index + 1}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center text-gray-600">
            <p>Images will be loaded in the future.</p>
          </div>
        </div>
      )}

      <div className="mt-12 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-asap-blue mb-4">About Our Facility</h2>
        <p className="mb-4">
          Our ASAP facility in Wheat Ridge, Colorado is designed to provide a comfortable, welcoming environment for individuals with Autism Spectrum Disorder and their families. The space is specifically tailored to meet the unique needs of our clients, with sensory-friendly areas and purposeful design elements.
        </p>
        <p>
          We invite you to come visit us and see our facility in person. Contact us to schedule a tour or to learn more about the services we offer.
        </p>
      </div>
    </div>
  );
};

export default Gallery;
