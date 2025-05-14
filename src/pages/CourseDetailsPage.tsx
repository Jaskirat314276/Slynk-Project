
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, CheckCircle, BookOpen, Clock } from "lucide-react";

const CourseDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  
  // In a real application, you'd fetch the course by ID
  const course = {
    id: "1",
    title: "Organic Chemistry Complete Study Guide",
    description: "A comprehensive collection of notes, diagrams, and practice problems for Organic Chemistry. Perfect for undergraduate students looking to excel in their organic chemistry courses. These notes have been carefully crafted to simplify complex concepts and provide clear explanations of reaction mechanisms and molecular structures.",
    longDescription: `<p>This comprehensive Organic Chemistry study guide includes:</p>
    <ul>
      <li>Detailed notes on all major organic chemistry topics</li>
      <li>Over 100 reaction mechanisms with step-by-step explanations</li>
      <li>50+ practice problems with fully worked solutions</li>
      <li>Memory aids for key concepts and nomenclature</li>
      <li>Study strategies specifically designed for organic chemistry exams</li>
    </ul>
    <p>These notes were created during my time at Stanford University where I achieved an A+ in Organic Chemistry I and II. The material is organized in a logical progression that builds understanding from basic concepts to more complex topics.</p>`,
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d",
    price: 29.99,
    rating: 4.8,
    reviews: 124,
    author: {
      name: "Emily Chen",
      avatar: "https://i.pravatar.cc/150?img=1",
      bio: "Chemistry major at Stanford University with a passion for making difficult concepts accessible. I've served as a teaching assistant for Organic Chemistry for 2 years.",
    },
    category: "Chemistry",
    features: [
      "100+ pages of organized notes",
      "Reaction mechanisms explained step-by-step",
      "Practice problems with solutions",
      "Downloadable PDF format",
      "Regular updates included",
    ],
    lastUpdated: "April 2023",
    courseLevel: "College - Undergraduate",
    relatedCourses: [
      {
        id: "2",
        title: "Calculus II Formula Sheet and Problem Solving Techniques",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
        price: 19.99,
        rating: 4.6,
        author: {
          name: "Michael Rodriguez",
        },
        category: "Mathematics",
      },
      {
        id: "5",
        title: "Biology 101: Cell Structure Masterclass",
        image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8",
        price: 17.99,
        rating: 4.5,
        author: {
          name: "Sarah Martinez",
        },
        category: "Biology",
      },
    ],
    reviews: [
      {
        id: 1,
        rating: 5,
        content: "These notes saved me during finals week! The reaction mechanisms are explained so clearly, and the practice problems really helped me test my understanding. Worth every penny!",
        author: "Jessica L.",
        date: "March 15, 2023",
        avatar: "https://i.pravatar.cc/150?img=10",
      },
      {
        id: 2,
        rating: 4,
        content: "Really good content and explanations. I would have liked more practice problems for some of the harder topics, but overall a fantastic resource that helped me bring my grade up from a C to an A-.",
        author: "Marcus T.",
        date: "February 28, 2023",
        avatar: "https://i.pravatar.cc/150?img=11",
      },
      {
        id: 3,
        rating: 5,
        content: "The way Emily explains stereochemistry finally made it click for me after weeks of struggling. The visual aids and diagrams are incredibly helpful. Highly recommend to anyone taking organic chemistry!",
        author: "Aiden K.",
        date: "January 12, 2023",
        avatar: "https://i.pravatar.cc/150?img=12",
      },
    ],
  };

  const [selectedTab, setSelectedTab] = useState("description");

  return (
    <div className="container py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <div className="mb-6">
            <Badge className="mb-4">{course.category}</Badge>
            <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
            
            <div className="flex items-center text-sm text-gray-600 mb-6">
              <div className="flex items-center mr-4">
                <Star className="h-4 w-4 text-amber-500 fill-current mr-1" />
                <span className="font-medium">{course.rating}</span>
                <span className="ml-1">({course.reviews} reviews)</span>
              </div>
              <div className="flex items-center mr-4">
                <BookOpen className="h-4 w-4 mr-1" />
                <span>{course.courseLevel}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>Last updated {course.lastUpdated}</span>
              </div>
            </div>
            
            <div className="aspect-video w-full overflow-hidden rounded-lg mb-6">
              <img
                src={course.image}
                alt={course.title}
                className="object-cover w-full h-full"
              />
            </div>
            
            <div className="bg-white p-6 rounded-lg border mb-6 md:hidden">
              <div className="text-3xl font-bold mb-4">${course.price}</div>
              <Button className="w-full mb-4 bg-primary-600 hover:bg-primary-700">
                Purchase Now
              </Button>
              <p className="text-sm text-center text-gray-500 mb-6">
                Secure payment handled by Stripe
              </p>
              <div className="space-y-3">
                <h4 className="font-medium mb-2">This resource includes:</h4>
                {course.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="w-full justify-start border-b rounded-none bg-transparent mb-6">
                <TabsTrigger 
                  value="description" 
                  className={`rounded-none border-b-2 pb-2 pt-1 px-1 -mb-px ${
                    selectedTab === "description" 
                      ? "border-primary-600 text-primary-600" 
                      : "border-transparent"
                  }`}
                  onClick={() => setSelectedTab("description")}
                >
                  Description
                </TabsTrigger>
                <TabsTrigger 
                  value="author" 
                  className={`rounded-none border-b-2 pb-2 pt-1 px-1 -mb-px ${
                    selectedTab === "author" 
                      ? "border-primary-600 text-primary-600" 
                      : "border-transparent"
                  }`}
                  onClick={() => setSelectedTab("author")}
                >
                  About the Author
                </TabsTrigger>
                <TabsTrigger 
                  value="reviews" 
                  className={`rounded-none border-b-2 pb-2 pt-1 px-1 -mb-px ${
                    selectedTab === "reviews" 
                      ? "border-primary-600 text-primary-600" 
                      : "border-transparent"
                  }`}
                  onClick={() => setSelectedTab("reviews")}
                >
                  Reviews
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="mt-0">
                <div>
                  <p className="text-gray-800 mb-6">{course.description}</p>
                  <div 
                    className="text-gray-800 space-y-4" 
                    dangerouslySetInnerHTML={{ __html: course.longDescription }}
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="author" className="mt-0">
                <div className="flex items-start space-x-4">
                  <Avatar className="h-14 w-14">
                    <AvatarImage src={course.author.avatar} alt={course.author.name} />
                    <AvatarFallback>{course.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-lg">{course.author.name}</h3>
                    <p className="text-gray-800 mt-2">{course.author.bio}</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-0">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="text-5xl font-bold mr-4">{course.rating}</div>
                    <div>
                      <div className="flex mb-1">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${
                                i < Math.floor(course.rating)
                                  ? "text-amber-400 fill-current"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                      </div>
                      <p className="text-gray-600 text-sm">
                        Based on {course.reviews} reviews
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {course.reviews.map((review) => (
                      <div key={review.id} className="border-b pb-6">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center">
                            <Avatar className="h-10 w-10 mr-3">
                              <AvatarImage src={review.avatar} alt={review.author} />
                              <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{review.author}</p>
                              <p className="text-gray-600 text-sm">{review.date}</p>
                            </div>
                          </div>
                          <div className="flex">
                            {Array(5)
                              .fill(0)
                              .map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < review.rating
                                      ? "text-amber-400 fill-current"
                                      : "text-gray-300"
                                  }`}
                                />
                              ))}
                          </div>
                        </div>
                        <p className="text-gray-800">{review.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg border sticky top-24 hidden md:block">
            <div className="text-3xl font-bold mb-4">${course.price}</div>
            <Button className="w-full mb-4 bg-primary-600 hover:bg-primary-700">
              Purchase Now
            </Button>
            <p className="text-sm text-center text-gray-500 mb-6">
              Secure payment handled by Stripe
            </p>
            <div className="space-y-3">
              <h4 className="font-medium mb-2">This resource includes:</h4>
              {course.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Related Courses */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">You might also like</h3>
            <div className="space-y-4">
              {course.relatedCourses.map((relatedCourse) => (
                <div key={relatedCourse.id} className="flex items-start space-x-3 border-b pb-4">
                  <img
                    src={relatedCourse.image}
                    alt={relatedCourse.title}
                    className="w-20 h-14 object-cover rounded"
                  />
                  <div>
                    <h4 className="font-medium text-sm line-clamp-2">
                      {relatedCourse.title}
                    </h4>
                    <div className="flex items-center mt-1">
                      <Star className="h-3 w-3 text-amber-500 fill-current" />
                      <span className="text-xs ml-1">{relatedCourse.rating}</span>
                      <span className="text-xs text-gray-600 ml-2">
                        ${relatedCourse.price}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
