
import { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, FileCheck, Award, Mail, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Training = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-asap-blue mb-4">Training & CEUs</h1>
        <p className="text-xl max-w-3xl mx-auto text-gray-600">
          Free ABA education modules that can also serve as Continuing Education Units (CEUs) to maintain your BCBA certification levels.
        </p>
      </div>

      <div className="mb-12 bg-gray-50 p-8 rounded-lg">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="md:w-1/3 flex justify-center">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="h-48 bg-gray-200 flex items-center justify-center mb-4">
                {/* Placeholder for training table image */}
                <GraduationCap className="h-16 w-16 text-asap-blue" />
              </div>
              <p className="text-center text-gray-500 text-sm">Training modules table</p>
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold text-asap-blue mb-4 flex items-center gap-2">
              <Award className="h-6 w-6" />
              Continuing Education Units
            </h2>
            <p className="mb-4">
              If you are interested in training, we provide free ABA education modules that can also serve as Continuing Education Units (CEUs) to maintain your BCBA certification levels.
            </p>
            <p className="mb-4">
              The training modules are listed below. Just click on the link and watch the presentation.
              Additional trainings are forthcoming.
            </p>
            <div className="bg-white p-4 rounded-lg border border-gray-200 mb-4">
              <h3 className="font-semibold mb-2">If you'd like the training to count as a CEU with certification documentation:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <FileCheck className="h-5 w-5 text-asap-green mt-0.5 flex-shrink-0" />
                  <span>Request the training through the ASAP contact form (include your email)</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileCheck className="h-5 w-5 text-asap-green mt-0.5 flex-shrink-0" />
                  <span>A PayPal link will be sent to your e-mail address for the cost of the training ($15/course)</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileCheck className="h-5 w-5 text-asap-green mt-0.5 flex-shrink-0" />
                  <span>Once you have watched the training and passed the end of class test, you will receive your CEU certificate</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-asap-blue hover:bg-asap-darkBlue">
                <Link to="/contact" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Request Training
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-asap-blue text-asap-blue hover:bg-asap-blue/10">
                <a href="#training-modules" className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  View Modules
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div id="training-modules" className="scroll-mt-20">
        <h2 className="text-2xl font-bold text-asap-blue mb-6">Available Training Modules</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Introduction to ABA</CardTitle>
              <CardDescription>1.5 CEU Credits</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Learn the fundamentals of Applied Behavior Analysis and how it can be effectively used to support individuals with Autism Spectrum Disorder.</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-asap-green">
                  <DollarSign className="h-4 w-4" />
                  <span className="font-semibold">$15</span>
                </div>
                <Button variant="outline" className="border-asap-blue text-asap-blue hover:bg-asap-blue/10">
                  Watch Presentation
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Functional Behavior Assessment</CardTitle>
              <CardDescription>2.0 CEU Credits</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">This module covers conducting comprehensive functional behavior assessments to identify the underlying causes of challenging behaviors.</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-asap-green">
                  <DollarSign className="h-4 w-4" />
                  <span className="font-semibold">$15</span>
                </div>
                <Button variant="outline" className="border-asap-blue text-asap-blue hover:bg-asap-blue/10">
                  Watch Presentation
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Behavior Intervention Strategies</CardTitle>
              <CardDescription>1.8 CEU Credits</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Explore effective evidence-based strategies for addressing challenging behaviors and promoting positive alternatives.</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-asap-green">
                  <DollarSign className="h-4 w-4" />
                  <span className="font-semibold">$15</span>
                </div>
                <Button variant="outline" className="border-asap-blue text-asap-blue hover:bg-asap-blue/10">
                  Watch Presentation
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Social Skills Development</CardTitle>
              <CardDescription>1.5 CEU Credits</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Learn techniques and approaches for teaching and reinforcing social skills for individuals with Autism Spectrum Disorder.</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-asap-green">
                  <DollarSign className="h-4 w-4" />
                  <span className="font-semibold">$15</span>
                </div>
                <Button variant="outline" className="border-asap-blue text-asap-blue hover:bg-asap-blue/10">
                  Watch Presentation
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Data Collection and Analysis</CardTitle>
              <CardDescription>1.5 CEU Credits</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Master effective methods for collecting, organizing, and analyzing behavioral data to inform intervention decisions.</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-asap-green">
                  <DollarSign className="h-4 w-4" />
                  <span className="font-semibold">$15</span>
                </div>
                <Button variant="outline" className="border-asap-blue text-asap-blue hover:bg-asap-blue/10">
                  Watch Presentation
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow bg-gray-50">
            <CardHeader>
              <CardTitle>Coming Soon</CardTitle>
              <CardDescription>More modules in development</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Additional training modules are currently in development and will be available soon. Check back regularly for updates.</p>
              <div className="flex justify-end">
                <Button variant="outline" className="border-gray-300 text-gray-500" disabled>
                  Not Available Yet
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Don't see what you're looking for? We can develop custom training programs for your organization.
          </p>
          <Button asChild className="bg-asap-blue hover:bg-asap-darkBlue">
            <Link to="/contact">Contact Us for Custom Training</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Training;
