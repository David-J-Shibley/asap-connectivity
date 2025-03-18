
import { useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Link2, ExternalLink, FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resources = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-asap-blue mb-4">Resources</h1>
        <p className="text-xl max-w-3xl mx-auto text-gray-600">
          Helpful information, links, and documents for individuals with Autism Spectrum Disorder, their families, and professionals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <Card className="hover:shadow-lg transition-shadow h-full">
          <CardContent className="p-6 flex flex-col h-full">
            <div className="mb-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-asap-blue/10 flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-asap-blue" />
              </div>
              <h2 className="text-xl font-bold">Educational Resources</h2>
            </div>
            <p className="mb-6 flex-grow">
              Educational materials, guides, and research about Autism Spectrum Disorder and Applied Behavior Analysis.
            </p>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-2 text-asap-blue hover:underline">
                <Link2 className="h-4 w-4" />
                <span>Understanding ASD: A Parent's Guide</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-asap-blue hover:underline">
                <Link2 className="h-4 w-4" />
                <span>Evidence-Based Practices in ABA</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-asap-blue hover:underline">
                <Link2 className="h-4 w-4" />
                <span>Social Skills Development Strategies</span>
              </a>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow h-full">
          <CardContent className="p-6 flex flex-col h-full">
            <div className="mb-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-asap-purple/10 flex items-center justify-center">
                <FileText className="h-6 w-6 text-asap-purple" />
              </div>
              <h2 className="text-xl font-bold">Downloadable Forms</h2>
            </div>
            <p className="mb-6 flex-grow">
              Access forms and documents needed for ASAP services, including intake forms and consent documents.
            </p>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-2 text-asap-purple hover:underline">
                <Download className="h-4 w-4" />
                <span>Client Intake Form</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-asap-purple hover:underline">
                <Download className="h-4 w-4" />
                <span>Consent to Treat Autism (Child)</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-asap-purple hover:underline">
                <Download className="h-4 w-4" />
                <span>Consent to Treat Autism (Adult)</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-asap-purple hover:underline">
                <Download className="h-4 w-4" />
                <span>Patient Bill of Rights</span>
              </a>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow h-full">
          <CardContent className="p-6 flex flex-col h-full">
            <div className="mb-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-asap-green/10 flex items-center justify-center">
                <ExternalLink className="h-6 w-6 text-asap-green" />
              </div>
              <h2 className="text-xl font-bold">External Resources</h2>
            </div>
            <p className="mb-6 flex-grow">
              Links to helpful organizations, support groups, and additional resources for the ASD community.
            </p>
            <div className="space-y-3">
              <a href="https://www.autismspeaks.org/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-asap-green hover:underline">
                <ExternalLink className="h-4 w-4" />
                <span>Autism Speaks</span>
              </a>
              <a href="https://www.autism-society.org/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-asap-green hover:underline">
                <ExternalLink className="h-4 w-4" />
                <span>Autism Society of America</span>
              </a>
              <a href="https://www.bacb.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-asap-green hover:underline">
                <ExternalLink className="h-4 w-4" />
                <span>Behavior Analyst Certification Board</span>
              </a>
              <a href="https://www.cdc.gov/ncbddd/autism/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-asap-green hover:underline">
                <ExternalLink className="h-4 w-4" />
                <span>CDC Autism Information</span>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-bold text-asap-blue mb-6">Research and Publications</h2>
        <p className="mb-6">
          Recent research papers, articles, and publications related to Autism Spectrum Disorder and Applied Behavior Analysis.
        </p>
        
        <div className="space-y-6">
          <div className="border-b border-gray-200 pb-4">
            <h3 className="font-semibold mb-2">Advances in Applied Behavior Analysis for Autism Spectrum Disorder</h3>
            <p className="text-gray-600 mb-2">Journal of Applied Behavior Analysis, 2023</p>
            <p className="mb-3">This paper explores recent developments in ABA techniques specifically designed for individuals with ASD.</p>
            <Button variant="outline" size="sm" className="border-asap-blue text-asap-blue hover:bg-asap-blue/10">
              Read Abstract
            </Button>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h3 className="font-semibold mb-2">Social Skills Interventions for Adolescents with ASD</h3>
            <p className="text-gray-600 mb-2">Autism Research, 2022</p>
            <p className="mb-3">A comprehensive review of evidence-based social skills interventions for adolescents with Autism Spectrum Disorder.</p>
            <Button variant="outline" size="sm" className="border-asap-blue text-asap-blue hover:bg-asap-blue/10">
              Read Abstract
            </Button>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Understanding Autism in the Criminal Justice System</h3>
            <p className="text-gray-600 mb-2">Journal of Forensic Psychology, 2022</p>
            <p className="mb-3">This paper addresses the unique challenges faced by individuals with ASD in the criminal justice system and proposes strategies for improved outcomes.</p>
            <Button variant="outline" size="sm" className="border-asap-blue text-asap-blue hover:bg-asap-blue/10">
              Read Abstract
            </Button>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold text-asap-blue mb-6">Need Additional Resources?</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Our team is constantly updating our resource library. If you're looking for specific information that you don't see here, please contact us.
        </p>
        <Button asChild className="bg-asap-blue hover:bg-asap-darkBlue">
          <a href="/contact">Request Resources</a>
        </Button>
      </div>
    </div>
  );
};

export default Resources;
