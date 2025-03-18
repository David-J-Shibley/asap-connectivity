
import { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, FileText, Image, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  summary: string;
  image?: string;
  newsletter?: string;
}

const News = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // This will be replaced with actual data in the future
  const [newsItems, setNewsItems] = useState<NewsItem[]>([
    {
      id: 1,
      title: "ASAP Launches New Social Skills Program",
      date: "August 15, 2023",
      summary: "We're excited to announce our new social skills program designed specifically for adults with Autism Spectrum Disorder, focusing on workplace integration and relationship building.",
    },
    {
      id: 2,
      title: "CEU Training Opportunities Expanded",
      date: "July 3, 2023",
      summary: "ASAP has expanded its CEU training offerings with three new modules. These new courses focus on behavioral assessment, intervention strategies, and data collection techniques.",
    },
    {
      id: 3,
      title: "Community Event: Autism Awareness Workshop",
      date: "June 10, 2023",
      summary: "Join us for our upcoming Autism Awareness Workshop designed for educators, parents, and community members. Learn about ASD, effective supports, and inclusion strategies.",
    }
  ]);

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-asap-blue mb-4">ASAP News</h1>
        <p className="text-xl max-w-3xl mx-auto text-gray-600">
          Stay updated with the latest news, events, and newsletters from Autism Services and Programs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-bold text-asap-blue mb-6 flex items-center gap-2">
            <Calendar className="h-6 w-6" />
            Latest Updates
          </h2>
          
          <div className="space-y-6">
            {newsItems.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="sm:w-1/3">
                      <div className="h-40 bg-gray-200 rounded-lg flex items-center justify-center">
                        {item.image ? (
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover rounded-lg" 
                          />
                        ) : (
                          <Image className="h-12 w-12 text-gray-400" />
                        )}
                      </div>
                    </div>
                    <div className="sm:w-2/3">
                      <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                      <p className="text-gray-600 mb-3 flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{item.date}</span>
                      </p>
                      <p className="mb-4">{item.summary}</p>
                      <Button variant="outline" className="border-asap-blue text-asap-blue hover:bg-asap-blue/10">
                        Read More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-asap-purple mb-6 flex items-center gap-2">
            <FileText className="h-6 w-6" />
            Newsletters
          </h2>
          
          <Card className="mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">ASAP Quarterly Newsletters</h3>
              <p className="mb-6">
                Our quarterly newsletters provide updates on ASAP services, staff highlights, upcoming events, and valuable resources for individuals with ASD and their families.
              </p>
              
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row items-center gap-4 p-4 border border-gray-200 rounded-lg">
                  <div className="sm:w-1/4 h-32 bg-gray-200 rounded flex items-center justify-center">
                    <FileText className="h-10 w-10 text-gray-400" />
                  </div>
                  <div className="sm:w-3/4">
                    <h4 className="font-semibold mb-1">Summer 2023 Newsletter</h4>
                    <p className="text-gray-600 mb-3">Published July 1, 2023</p>
                    <Button variant="outline" size="sm" className="border-asap-purple text-asap-purple hover:bg-asap-purple/10">
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center gap-4 p-4 border border-gray-200 rounded-lg">
                  <div className="sm:w-1/4 h-32 bg-gray-200 rounded flex items-center justify-center">
                    <FileText className="h-10 w-10 text-gray-400" />
                  </div>
                  <div className="sm:w-3/4">
                    <h4 className="font-semibold mb-1">Spring 2023 Newsletter</h4>
                    <p className="text-gray-600 mb-3">Published April 1, 2023</p>
                    <Button variant="outline" size="sm" className="border-asap-purple text-asap-purple hover:bg-asap-purple/10">
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center gap-4 p-4 border border-gray-200 rounded-lg">
                  <div className="sm:w-1/4 h-32 bg-gray-200 rounded flex items-center justify-center">
                    <FileText className="h-10 w-10 text-gray-400" />
                  </div>
                  <div className="sm:w-3/4">
                    <h4 className="font-semibold mb-1">Winter 2023 Newsletter</h4>
                    <p className="text-gray-600 mb-3">Published January 1, 2023</p>
                    <Button variant="outline" size="sm" className="border-asap-purple text-asap-purple hover:bg-asap-purple/10">
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Button variant="link" className="text-asap-purple">
                  View All Past Newsletters
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
              <p className="mb-6">
                Stay up-to-date with ASAP news, events, and resources by subscribing to our newsletter.
              </p>
              <form className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Your Name"
                  />
                </div>
                <Button type="submit" className="w-full bg-asap-purple hover:bg-asap-purple/90">
                  Subscribe
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-asap-blue mb-6 text-center">Upcoming Events</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="bg-asap-blue/10 p-3 rounded-lg mb-4">
                <h3 className="font-semibold text-asap-blue">Parent Support Group</h3>
                <p className="text-gray-600">September 15, 2023 | 7:00 PM</p>
              </div>
              <p className="mb-4">Monthly support group for parents and caregivers of individuals with ASD. Share experiences and learn from others in the community.</p>
              <Button variant="outline" size="sm" className="border-asap-blue text-asap-blue hover:bg-asap-blue/10 w-full">
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="bg-asap-purple/10 p-3 rounded-lg mb-4">
                <h3 className="font-semibold text-asap-purple">Professional Workshop</h3>
                <p className="text-gray-600">October 5, 2023 | 9:00 AM - 4:00 PM</p>
              </div>
              <p className="mb-4">Advanced techniques in functional behavior assessment and positive behavior intervention planning for educators and clinicians.</p>
              <Button variant="outline" size="sm" className="border-asap-purple text-asap-purple hover:bg-asap-purple/10 w-full">
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="bg-asap-green/10 p-3 rounded-lg mb-4">
                <h3 className="font-semibold text-asap-green">Community Resource Fair</h3>
                <p className="text-gray-600">November 12, 2023 | 10:00 AM - 2:00 PM</p>
              </div>
              <p className="mb-4">Join us for a resource fair featuring local service providers, support organizations, and recreational programs for individuals with ASD.</p>
              <Button variant="outline" size="sm" className="border-asap-green text-asap-green hover:bg-asap-green/10 w-full">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <Button className="bg-asap-blue hover:bg-asap-darkBlue">
            View All Events
          </Button>
        </div>
      </div>
    </div>
  );
};

export default News;
