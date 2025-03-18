
import { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  School, 
  Users, 
  User, 
  Gavel, 
  Award, 
  ArrowRight 
} from "lucide-react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-asap-blue text-white py-20">
        <div className="container mx-auto px-4 text-center md:text-left">
          <div className="max-w-3xl mx-auto md:mx-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              AUTISM SERVICES AND PROGRAMS
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-8">
              SERVICES WHEN YOU NEED THEM
            </h2>
            <p className="text-lg mb-8">
              ASAP OFFERS A WIDE RANGE OF INDIVIDUALIZED SERVICES TO MEET THE UNIQUE NEEDS OF PEOPLE WITH AUTISM SPECTRUM DISORDER (ASD), THEIR FAMILIES AND CARE PROVIDERS. WHEN PARENTS ARE FACED WITH CONCERNS ABOUT THEIR CHILD, ASAP IS THERE TO HELP.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="bg-white text-asap-blue hover:bg-gray-100">
                <Link to="/services">Our Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-asap-blue">Services Include</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="bg-asap-blue text-white p-4 flex items-center gap-3">
                  <School className="h-6 w-6" />
                  <h3 className="text-xl font-semibold">School and Organizational Support</h3>
                </div>
                <div className="p-6">
                  <ul className="list-disc ml-5 space-y-2">
                    <li>Consultation and professional development</li>
                    <li>Modeling, coaching and feedback</li>
                  </ul>
                  <div className="mt-4 text-right">
                    <Button asChild variant="link" className="text-asap-blue p-0">
                      <Link to="/services" className="flex items-center gap-1">
                        Learn more <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="bg-asap-purple text-white p-4 flex items-center gap-3">
                  <Users className="h-6 w-6" />
                  <h3 className="text-xl font-semibold">Family and Individual Behavior Analytics</h3>
                </div>
                <div className="p-6">
                  <ul className="list-disc ml-5 space-y-2">
                    <li>Individualized functional behavioral assessments</li>
                    <li>Positive behavior intervention support plans for families and organizations</li>
                  </ul>
                  <div className="mt-4 text-right">
                    <Button asChild variant="link" className="text-asap-blue p-0">
                      <Link to="/services" className="flex items-center gap-1">
                        Learn more <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="bg-asap-green text-white p-4 flex items-center gap-3">
                  <User className="h-6 w-6" />
                  <h3 className="text-xl font-semibold">Social Skill Training</h3>
                </div>
                <div className="p-6">
                  <ul className="list-disc ml-5 space-y-2">
                    <li>Focus on independent living skills</li>
                    <li>Sexuality education and internet safety</li>
                    <li>Employment support and interview portfolio development</li>
                  </ul>
                  <div className="mt-4 text-right">
                    <Button asChild variant="link" className="text-asap-blue p-0">
                      <Link to="/services" className="flex items-center gap-1">
                        Learn more <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="bg-asap-darkBlue text-white p-4 flex items-center gap-3">
                  <Gavel className="h-6 w-6" />
                  <h3 className="text-xl font-semibold">Autism Forensics</h3>
                </div>
                <div className="p-6">
                  <ul className="list-disc ml-5 space-y-2">
                    <li>Pre and post-conviction services and support</li>
                    <li>Expert witness testimony</li>
                    <li>Working with lawyers, judges, parole and probation officers</li>
                  </ul>
                  <div className="mt-4 text-right">
                    <Button asChild variant="link" className="text-asap-blue p-0">
                      <Link to="/forensics" className="flex items-center gap-1">
                        Learn more <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <CardContent className="p-0">
                <div className="bg-asap-lightBlue text-asap-darkBlue p-4 flex items-center gap-3">
                  <Award className="h-6 w-6" />
                  <h3 className="text-xl font-semibold">Certified ACE Training Provider</h3>
                </div>
                <div className="p-6">
                  <p className="mb-2">Through Behavior Analysis Certification Board (BACB)</p>
                  <p>We offer continuing education and professional development opportunities.</p>
                  <div className="mt-4 text-right">
                    <Button asChild variant="link" className="text-asap-blue p-0">
                      <Link to="/training" className="flex items-center gap-1">
                        Learn more <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-asap-lightBlue/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-asap-darkBlue">Ready to Get Started?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Contact us today to learn more about our services and how we can help you or your loved one with Autism Spectrum Disorder.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-asap-blue hover:bg-asap-darkBlue">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-asap-blue text-asap-blue hover:bg-asap-blue/10">
              <Link to="/insurance">Insurance Information</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
