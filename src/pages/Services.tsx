
import { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  School, 
  UserCheck, 
  Users, 
  GraduationCap, 
  Briefcase, 
  ShieldCheck, 
  Heart, 
  BookOpen,
  Gavel
} from "lucide-react";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-asap-blue mb-4">Our Services</h1>
        <p className="text-xl max-w-3xl mx-auto text-gray-600">
          ASAP offers a wide range of individualized services to meet the unique needs of people with Autism Spectrum Disorder (ASD), their families and care providers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center gap-4">
            <School className="h-8 w-8 text-asap-blue" />
            <div>
              <CardTitle>School Support</CardTitle>
              <CardDescription>Educational consultation and programs</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <UserCheck className="h-5 w-5 text-asap-green mt-0.5 flex-shrink-0" />
                <span>Consultation for schools and educational organizations</span>
              </li>
              <li className="flex items-start gap-2">
                <UserCheck className="h-5 w-5 text-asap-green mt-0.5 flex-shrink-0" />
                <span>Professional development for educators and staff</span>
              </li>
              <li className="flex items-start gap-2">
                <UserCheck className="h-5 w-5 text-asap-green mt-0.5 flex-shrink-0" />
                <span>Modeling effective teaching strategies</span>
              </li>
              <li className="flex items-start gap-2">
                <UserCheck className="h-5 w-5 text-asap-green mt-0.5 flex-shrink-0" />
                <span>Coaching and feedback for educational professionals</span>
              </li>
              <li className="flex items-start gap-2">
                <UserCheck className="h-5 w-5 text-asap-green mt-0.5 flex-shrink-0" />
                <span>IEP development and support</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center gap-4">
            <Users className="h-8 w-8 text-asap-purple" />
            <div>
              <CardTitle>Family Support</CardTitle>
              <CardDescription>Behavior analytics and interventions</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <UserCheck className="h-5 w-5 text-asap-green mt-0.5 flex-shrink-0" />
                <span>Individualized functional behavioral assessments</span>
              </li>
              <li className="flex items-start gap-2">
                <UserCheck className="h-5 w-5 text-asap-green mt-0.5 flex-shrink-0" />
                <span>Positive behavior intervention support plans</span>
              </li>
              <li className="flex items-start gap-2">
                <UserCheck className="h-5 w-5 text-asap-green mt-0.5 flex-shrink-0" />
                <span>Parent training and education</span>
              </li>
              <li className="flex items-start gap-2">
                <UserCheck className="h-5 w-5 text-asap-green mt-0.5 flex-shrink-0" />
                <span>Home-based behavioral strategies</span>
              </li>
              <li className="flex items-start gap-2">
                <UserCheck className="h-5 w-5 text-asap-green mt-0.5 flex-shrink-0" />
                <span>Crisis prevention and intervention</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center gap-4">
            <GraduationCap className="h-8 w-8 text-asap-green" />
            <div>
              <CardTitle>Social Skills Training</CardTitle>
              <CardDescription>For adults and adolescents</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <UserCheck className="h-5 w-5 text-asap-green mt-0.5 flex-shrink-0" />
                <span>Independent living skills development</span>
              </li>
              <li className="flex items-start gap-2">
                <UserCheck className="h-5 w-5 text-asap-green mt-0.5 flex-shrink-0" />
                <span>Sexuality education and relationship guidance</span>
              </li>
              <li className="flex items-start gap-2">
                <UserCheck className="h-5 w-5 text-asap-green mt-0.5 flex-shrink-0" />
                <span>Internet safety training</span>
              </li>
              <li className="flex items-start gap-2">
                <UserCheck className="h-5 w-5 text-asap-green mt-0.5 flex-shrink-0" />
                <span>Employment support services</span>
              </li>
              <li className="flex items-start gap-2">
                <UserCheck className="h-5 w-5 text-asap-green mt-0.5 flex-shrink-0" />
                <span>Interview portfolio development</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center gap-4">
            <Gavel className="h-8 w-8 text-asap-darkBlue" />
            <div>
              <CardTitle>Autism Forensics</CardTitle>
              <CardDescription>Legal system support and expert testimony</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <UserCheck className="h-5 w-5 text-asap-green mt-0.5 flex-shrink-0" />
                <span>Pre-conviction services and support</span>
              </li>
              <li className="flex items-start gap-2">
                <UserCheck className="h-5 w-5 text-asap-green mt-0.5 flex-shrink-0" />
                <span>Post-conviction services and support</span>
              </li>
              <li className="flex items-start gap-2">
                <UserCheck className="h-5 w-5 text-asap-green mt-0.5 flex-shrink-0" />
                <span>Expert witness testimony</span>
              </li>
              <li className="flex items-start gap-2">
                <UserCheck className="h-5 w-5 text-asap-green mt-0.5 flex-shrink-0" />
                <span>Consultation with legal professionals</span>
              </li>
              <li className="flex items-start gap-2">
                <UserCheck className="h-5 w-5 text-asap-green mt-0.5 flex-shrink-0" />
                <span>Support for lawyers, judges, parole and probation officers</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center gap-4">
            <Briefcase className="h-8 w-8 text-asap-blue" />
            <div>
              <CardTitle>Organizational Support</CardTitle>
              <CardDescription>Professional development and consultation</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <UserCheck className="h-5 w-5 text-asap-green mt-0.5 flex-shrink-0" />
                <span>Staff training and development</span>
              </li>
              <li className="flex items-start gap-2">
                <UserCheck className="h-5 w-5 text-asap-green mt-0.5 flex-shrink-0" />
                <span>Organizational behavior management</span>
              </li>
              <li className="flex items-start gap-2">
                <UserCheck className="h-5 w-5 text-asap-green mt-0.5 flex-shrink-0" />
                <span>Policy development and implementation</span>
              </li>
              <li className="flex items-start gap-2">
                <UserCheck className="h-5 w-5 text-asap-green mt-0.5 flex-shrink-0" />
                <span>Inclusive workplace strategies</span>
              </li>
              <li className="flex items-start gap-2">
                <UserCheck className="h-5 w-5 text-asap-green mt-0.5 flex-shrink-0" />
                <span>Program evaluation and improvement</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center gap-4">
            <BookOpen className="h-8 w-8 text-asap-purple" />
            <div>
              <CardTitle>ACE Training</CardTitle>
              <CardDescription>Certified provider through BACB</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <UserCheck className="h-5 w-5 text-asap-green mt-0.5 flex-shrink-0" />
                <span>Continuing education units (CEUs)</span>
              </li>
              <li className="flex items-start gap-2">
                <UserCheck className="h-5 w-5 text-asap-green mt-0.5 flex-shrink-0" />
                <span>BCBA certification maintenance support</span>
              </li>
              <li className="flex items-start gap-2">
                <UserCheck className="h-5 w-5 text-asap-green mt-0.5 flex-shrink-0" />
                <span>Professional development workshops</span>
              </li>
              <li className="flex items-start gap-2">
                <UserCheck className="h-5 w-5 text-asap-green mt-0.5 flex-shrink-0" />
                <span>Online training modules</span>
              </li>
              <li className="flex items-start gap-2">
                <UserCheck className="h-5 w-5 text-asap-green mt-0.5 flex-shrink-0" />
                <span>Certification documentation</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg">
        <div className="text-center mb-6">
          <ShieldCheck className="h-12 w-12 text-asap-blue mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-asap-blue">Our Approach</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <p className="mb-4">
            At ASAP, we believe in a holistic, evidence-based approach to supporting individuals with Autism Spectrum Disorder. Our services are:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <Heart className="h-6 w-6 text-asap-green mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-asap-blue">Individualized</span> - We recognize that each person with ASD has unique strengths, challenges, and needs. Our services are tailored to meet these individual differences.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Heart className="h-6 w-6 text-asap-green mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-asap-blue">Family-Centered</span> - We work closely with families, recognizing them as essential partners in the support process.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Heart className="h-6 w-6 text-asap-green mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-asap-blue">Evidence-Based</span> - Our interventions and strategies are based on the latest research and best practices in the field of applied behavior analysis.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Heart className="h-6 w-6 text-asap-green mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium text-asap-blue">Collaborative</span> - We work as part of a team, collaborating with other professionals and service providers involved in supporting the individual with ASD.
              </div>
            </li>
          </ul>
          <p>
            Our goal is to help individuals with ASD reach their full potential and lead fulfilling lives while providing support to their families and caregivers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
