
import { useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Gavel, 
  FileText, 
  CheckCircle, 
  ShieldCheck, 
  Book, 
  UserCheck
} from "lucide-react";
import { Link } from 'react-router-dom';

const Forensics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-asap-blue mb-4">Autism Forensics</h1>
        <p className="text-xl max-w-3xl mx-auto text-gray-600">
          Understanding the role of applied behavior analysis within the juvenile/criminal justice system
          and how our team can support you, your client, or your family member.
        </p>
        <div className="mt-6">
          <Button className="bg-asap-blue hover:bg-asap-darkBlue">
            <FileText className="mr-2 h-4 w-4" /> Open ABA Forensics Presentation
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-bold text-asap-blue mb-6 flex items-center gap-2">
            <Gavel className="h-6 w-6" />
            Our Forensic Services
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-asap-green mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Pre-Conviction Services</h3>
                <p>Comprehensive assessments, expert testimony, and consultation for defense teams to help explain how ASD may have contributed to alleged criminal behavior.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-asap-green mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Post-Conviction Services</h3>
                <p>Support for individuals with ASD in correctional settings, including behavior intervention plans, staff training, and transition planning.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-asap-green mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Expert Witness Testimony</h3>
                <p>Qualified expert witnesses who can explain ASD to judges, juries, and legal professionals in a clear, accessible manner.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-asap-green mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Professional Collaboration</h3>
                <p>Working with lawyers, judges, parole and probation officers to develop appropriate supports and interventions for individuals with ASD in the justice system.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-asap-blue mb-6 flex items-center gap-2">
            <ShieldCheck className="h-6 w-6" />
            Understanding ASD in Legal Contexts
          </h2>
          <p className="mb-4">
            Individuals with Autism Spectrum Disorder (ASD) often face unique challenges within the legal system. 
            Their condition may impact:
          </p>
          <ul className="space-y-3 ml-6 list-disc">
            <li>Understanding of social rules and legal consequences</li>
            <li>Communication with law enforcement and legal representatives</li>
            <li>Sensory sensitivities in court and correctional environments</li>
            <li>Vulnerability to manipulation or coercion</li>
            <li>Ability to navigate complex legal processes</li>
          </ul>
          <p className="mt-4">
            Our forensic team provides the expertise needed to ensure fair treatment and appropriate 
            accommodations for individuals with ASD throughout the legal process.
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-asap-blue mb-6">Our Forensic Team</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="sm:w-1/3">
                  <div className="h-48 w-full bg-gray-200 rounded-lg flex items-center justify-center">
                    <UserCheck className="h-16 w-16 text-gray-400" />
                  </div>
                </div>
                <div className="sm:w-2/3">
                  <h3 className="text-xl font-bold mb-1">Dr. Laurie Sperry</h3>
                  <p className="text-gray-600 mb-4">Autism Forensics Expert</p>
                  <p className="mb-4">
                    Dr. Sperry specializes in autism forensics and has extensive experience providing expert testimony and consultation in legal cases involving individuals with ASD.
                  </p>
                  <Button variant="outline" className="border-asap-blue text-asap-blue hover:bg-asap-blue/10">
                    <Book className="mr-2 h-4 w-4" /> View Biography and Resume
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="sm:w-1/3">
                  <div className="h-48 w-full bg-gray-200 rounded-lg flex items-center justify-center">
                    <UserCheck className="h-16 w-16 text-gray-400" />
                  </div>
                </div>
                <div className="sm:w-2/3">
                  <h3 className="text-xl font-bold mb-1">Dr. Frank Straub</h3>
                  <p className="text-gray-600 mb-4">Criminal Justice Consultant</p>
                  <p className="mb-4">
                    Dr. Straub brings expertise in law enforcement and criminal justice systems, helping to bridge the gap between legal requirements and appropriate accommodations for individuals with ASD.
                  </p>
                  <Button variant="outline" className="border-asap-blue text-asap-blue hover:bg-asap-blue/10">
                    <Book className="mr-2 h-4 w-4" /> View Biography and Resume
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="bg-asap-blue/10 p-8 rounded-lg">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-asap-blue">Need Forensic Support?</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Contact our team for a confidential consultation about your specific case or situation.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-asap-blue hover:bg-asap-darkBlue">
            <Link to="/contact">Contact Our Forensic Team</Link>
          </Button>
          <Button asChild variant="outline" className="border-asap-blue text-asap-blue hover:bg-asap-blue/10">
            <a href="#presentation" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Download Forensics Brochure
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Forensics;
