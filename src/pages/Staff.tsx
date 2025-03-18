
import { useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Award, GraduationCap, BookOpen } from "lucide-react";

interface StaffMember {
  name: string;
  title: string;
  image?: string;
  category: 'bcba' | 'bcaba' | 'rbt' | 'bt';
}

const Staff = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const staffMembers: StaffMember[] = [
    { name: "DR. LAURIE SPERRY", title: "Board Certified Behavior Analyst", category: 'bcba' },
    { name: "MS. LYDIA CHANEL SHEMWELL", title: "Board Certified Behavior Analyst", category: 'bcba' },
    { name: "DR. DAVE GAVISK", title: "Board Certified Behavior Analyst", category: 'bcba' },
    { name: "MR. TIMOTHY J CARLIN", title: "Board Certified Behavior Analyst", category: 'bcba' },
    { name: "MRS. DANIELLE VINSON-SHIBLEY", title: "Board Certified Behavior Analyst", category: 'bcba' },
    { name: "MS. JAYMIE VOSKAMP", title: "Board Certified Assistant Behavior Analyst", category: 'bcaba' },
    { name: "MS. ANN RICKETSON", title: "Registered Behavior Technician", category: 'rbt' },
    { name: "MR. AUSTIN ENDERS", title: "Registered Behavior Technician", category: 'rbt' },
    { name: "MS. KRISTA DEGERNESS", title: "Registered Behavior Technician", category: 'rbt' },
    { name: "MS. JENNA RICKETSON", title: "Behavior Technician", category: 'bt' },
    { name: "MS. KATIE RICKETSON", title: "Behavior Technician", category: 'bt' },
    { name: "MS. EVE SILVA", title: "Behavior Technician", category: 'bt' },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-asap-blue mb-4">Our Staff</h1>
        <p className="text-xl max-w-3xl mx-auto text-gray-600">
          Meet our team of dedicated professionals committed to providing exceptional services for individuals with Autism Spectrum Disorder.
        </p>
      </div>

      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <Award className="h-8 w-8 text-asap-blue" />
          <h2 className="text-2xl font-bold text-asap-blue">Board Certified Behavior Analysts</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {staffMembers
            .filter(member => member.category === 'bcba')
            .map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
                <CardContent className="p-0">
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover" 
                      />
                    ) : (
                      <div className="w-24 h-24 rounded-full bg-asap-blue flex items-center justify-center">
                        <span className="text-3xl font-bold text-white">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-gray-600">{member.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))
          }
        </div>
      </div>

      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <BookOpen className="h-8 w-8 text-asap-purple" />
          <h2 className="text-2xl font-bold text-asap-purple">Board Certified Assistant Behavior Analyst</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {staffMembers
            .filter(member => member.category === 'bcaba')
            .map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
                <CardContent className="p-0">
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover" 
                      />
                    ) : (
                      <div className="w-24 h-24 rounded-full bg-asap-purple flex items-center justify-center">
                        <span className="text-3xl font-bold text-white">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-gray-600">{member.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))
          }
        </div>
      </div>

      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <GraduationCap className="h-8 w-8 text-asap-green" />
          <h2 className="text-2xl font-bold text-asap-green">Registered Behavior Technicians</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {staffMembers
            .filter(member => member.category === 'rbt')
            .map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
                <CardContent className="p-0">
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover" 
                      />
                    ) : (
                      <div className="w-24 h-24 rounded-full bg-asap-green flex items-center justify-center">
                        <span className="text-3xl font-bold text-white">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-gray-600">{member.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))
          }
        </div>
      </div>

      <div>
        <div className="flex items-center gap-3 mb-6">
          <Award className="h-8 w-8 text-asap-lightBlue" />
          <h2 className="text-2xl font-bold text-asap-lightBlue">Behavior Technicians</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {staffMembers
            .filter(member => member.category === 'bt')
            .map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
                <CardContent className="p-0">
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover" 
                      />
                    ) : (
                      <div className="w-24 h-24 rounded-full bg-asap-lightBlue flex items-center justify-center">
                        <span className="text-3xl font-bold text-white">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-gray-600">{member.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Staff;
