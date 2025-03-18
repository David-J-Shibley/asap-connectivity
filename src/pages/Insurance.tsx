
import { useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Check, FileCheck, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Insurance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const insuranceProviders = [
    { name: "AETNA", logo: "" },
    { name: "ANTHEM / BLUE CROSS BLUE SHIELD (all states)", logo: "" },
    { name: "BEACON HEALTH", logo: "" },
    { name: "GEHA", logo: "" },
    { name: "Kaiser (on a case-by-case basis)", logo: "" },
    { 
      name: "OPTUM INSURANCE COMPANIES", 
      logo: "",
      subProviders: [
        "UNITED BEHAVIORAL HEALTH (UBH)",
        "UNITED HEALTH CARE (UHC)",
        "UNITED MEDICAL RESOURCES (UMR)",
        "All-Savers",
        "Bind",
        "Change Healthcare"
      ]
    }
  ];

  const requiredDocuments = [
    "Copy of Autism Diagnosis (F84.0) from a physician",
    "Copy of your Insurance card (front & back)",
    "Fill out Client Intake Form, Consent to Treat Autism (Child), Consent to Treat Autism (Adult) and Patient Bill of Rights"
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-asap-blue mb-4">Insurance Information</h1>
        <p className="text-xl max-w-3xl mx-auto text-gray-600">
          ASAP is credentialed with the following insurance providers
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {insuranceProviders.map((provider, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="h-16 flex items-center justify-center mb-4">
                {provider.logo ? (
                  <img 
                    src={provider.logo} 
                    alt={`${provider.name} logo`} 
                    className="max-h-full" 
                  />
                ) : (
                  <h3 className="text-xl font-semibold text-center text-asap-blue">
                    {provider.name}
                  </h3>
                )}
              </div>
              
              {provider.subProviders && (
                <ul className="mt-4 space-y-2">
                  {provider.subProviders.map((subProvider, sIndex) => (
                    <li key={sIndex} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-asap-green mt-0.5 flex-shrink-0" />
                      <span>{subProvider}</span>
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-gray-50 p-8 rounded-lg mb-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-asap-blue mb-6 flex items-center">
            <FileCheck className="h-6 w-6 mr-2" />
            ASAP Immediate Paperwork Requirements
          </h2>
          
          <ul className="space-y-4 mb-6">
            {requiredDocuments.map((doc, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="bg-asap-blue rounded-full p-1.5 text-white flex-shrink-0 mt-0.5">
                  <span className="font-bold text-sm">{index + 1}</span>
                </div>
                <span>{doc}</span>
              </li>
            ))}
          </ul>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 flex gap-3">
            <AlertCircle className="h-6 w-6 text-yellow-500 flex-shrink-0" />
            <div>
              <p className="font-medium">Please note:</p> 
              <p className="mb-2">Not all plans cover Autism Behavioral Analysis services - please check your policy.</p>
              <p>In addition, it takes about three weeks to get an insurance authorization to perform services.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold text-asap-blue mb-6">Ready to Get Started?</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Contact us today to verify your insurance coverage and begin the process of receiving our services.
        </p>
        <Button asChild size="lg" className="bg-asap-blue hover:bg-asap-darkBlue">
          <Link to="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
};

export default Insurance;
