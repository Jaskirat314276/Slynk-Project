
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Pencil } from "lucide-react";
import CourseCard from "@/components/CourseCard";

const myMaterials = [
  {
    id: "10",
    title: "Advanced Econometrics - Statistical Methods",
    description: "Comprehensive notes on statistical methods in econometric analysis including regression techniques.",
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4",
    price: 24.99,
    rating: 4.7,
    reviews: 42,
    author: {
      name: "Current User",
      avatar: "https://i.pravatar.cc/150?img=68",
    },
    category: "Economics",
    sales: 68,
    earnings: 1699.32,
    published: "March 10, 2023",
  },
  {
    id: "11",
    title: "Python for Data Science - Practical Guide",
    description: "Step-by-step guide for implementing data science concepts using Python with example code.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    price: 29.99,
    rating: 4.9,
    reviews: 57,
    author: {
      name: "Current User",
      avatar: "https://i.pravatar.cc/150?img=68",
    },
    category: "Computer Science",
    sales: 104,
    earnings: 3118.96,
    published: "January 15, 2023",
  },
];

const purchasedMaterials = [
  {
    id: "1",
    title: "Organic Chemistry Complete Study Guide",
    description: "A comprehensive collection of notes, diagrams, and practice problems for Organic Chemistry.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d",
    price: 29.99,
    rating: 4.8,
    reviews: 124,
    author: {
      name: "Emily Chen",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    category: "Chemistry",
    purchaseDate: "May 3, 2023",
  },
  {
    id: "3",
    title: "Machine Learning Foundations - Python Implementation Guide",
    description: "Detailed notes and code examples for implementing basic machine learning algorithms in Python.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    price: 34.99,
    rating: 4.9,
    reviews: 217,
    author: {
      name: "Aisha Johnson",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    category: "Computer Science",
    purchaseDate: "April 17, 2023",
  },
];

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("my-materials");
  
  const user = {
    name: "Alex Morgan",
    email: "alex.morgan@example.com",
    avatar: "https://i.pravatar.cc/150?img=68",
    joinDate: "January 2023",
    university: "University of Washington",
    major: "Economics",
    bio: "Senior Economics major with a minor in Data Science. I love creating comprehensive notes and study guides that make complex topics accessible to everyone.",
  };
  
  const stats = [
    { label: "Materials Sold", value: 172 },
    { label: "Total Earnings", value: "$4,818.28" },
    { label: "Materials Created", value: 2 },
    { label: "Average Rating", value: "4.8" },
  ];

  return (
    <div className="container py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <Card>
            <CardHeader className="text-center">
              <Avatar className="h-24 w-24 mx-auto mb-4">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <CardTitle>{user.name}</CardTitle>
              <CardDescription className="flex justify-center items-center mt-2">
                <Badge className="bg-primary-500">{user.major}</Badge>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Email</h3>
                  <p>{user.email}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">University</h3>
                  <p>{user.university}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Member Since</h3>
                  <p>{user.joinDate}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Bio</h3>
                  <p className="text-sm">{user.bio}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full flex items-center">
                <Pencil className="mr-2 h-4 w-4" />
                Edit Profile
              </Button>
            </CardFooter>
          </Card>
          
          {/* Stats Card */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg">Your Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center p-3 bg-gray-50 rounded-md">
                    <p className="text-lg font-semibold">{stat.value}</p>
                    <p className="text-xs text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Main Content */}
        <div className="md:col-span-2">
          <Tabs defaultValue="my-materials" className="w-full">
            <TabsList className="w-full justify-start border-b rounded-none bg-transparent mb-6">
              <TabsTrigger 
                value="my-materials" 
                className={`rounded-none border-b-2 pb-2 pt-1 px-1 -mb-px ${
                  activeTab === "my-materials" 
                    ? "border-primary-600 text-primary-600" 
                    : "border-transparent"
                }`}
                onClick={() => setActiveTab("my-materials")}
              >
                My Materials
              </TabsTrigger>
              <TabsTrigger 
                value="purchased" 
                className={`rounded-none border-b-2 pb-2 pt-1 px-1 -mb-px ${
                  activeTab === "purchased" 
                    ? "border-primary-600 text-primary-600" 
                    : "border-transparent"
                }`}
                onClick={() => setActiveTab("purchased")}
              >
                Purchased
              </TabsTrigger>
              <TabsTrigger 
                value="earnings" 
                className={`rounded-none border-b-2 pb-2 pt-1 px-1 -mb-px ${
                  activeTab === "earnings" 
                    ? "border-primary-600 text-primary-600" 
                    : "border-transparent"
                }`}
                onClick={() => setActiveTab("earnings")}
              >
                Earnings
              </TabsTrigger>
              <TabsTrigger 
                value="settings" 
                className={`rounded-none border-b-2 pb-2 pt-1 px-1 -mb-px ${
                  activeTab === "settings" 
                    ? "border-primary-600 text-primary-600" 
                    : "border-transparent"
                }`}
                onClick={() => setActiveTab("settings")}
              >
                Settings
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="my-materials" className="mt-0">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">My Materials</h2>
                  <Link to="/create">
                    <Button className="bg-primary-600 hover:bg-primary-700">
                      Create New
                    </Button>
                  </Link>
                </div>
                
                {myMaterials.length > 0 ? (
                  <div className="space-y-6">
                    {myMaterials.map((course) => (
                      <Card key={course.id} className="overflow-hidden">
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-1/4 aspect-video">
                            <img
                              src={course.image}
                              alt={course.title}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="p-6 md:w-3/4">
                            <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                            <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                            
                            <div className="grid grid-cols-3 gap-4 mb-4">
                              <div className="text-center">
                                <p className="font-semibold">{course.sales}</p>
                                <p className="text-xs text-gray-500">Sales</p>
                              </div>
                              <div className="text-center">
                                <p className="font-semibold">${course.earnings.toFixed(2)}</p>
                                <p className="text-xs text-gray-500">Earnings</p>
                              </div>
                              <div className="text-center">
                                <p className="font-semibold">{course.rating} ★</p>
                                <p className="text-xs text-gray-500">{course.reviews} reviews</p>
                              </div>
                            </div>
                            
                            <div className="flex justify-between items-center">
                              <p className="text-sm text-gray-500">
                                Published: {course.published}
                              </p>
                              <div className="space-x-2">
                                <Button variant="outline" size="sm">
                                  Edit
                                </Button>
                                <Button variant="outline" size="sm">
                                  View Stats
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-gray-50 rounded-lg">
                    <h3 className="font-medium text-lg mb-2">No materials yet</h3>
                    <p className="text-gray-600 mb-6">
                      Share your knowledge by creating study materials
                    </p>
                    <Link to="/create">
                      <Button className="bg-primary-600 hover:bg-primary-700">
                        Create Your First Material
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="purchased" className="mt-0">
              <div>
                <h2 className="text-2xl font-bold mb-6">Purchased Materials</h2>
                
                {purchasedMaterials.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {purchasedMaterials.map((course) => (
                      <Card key={course.id} className="overflow-hidden">
                        <div className="aspect-video w-full overflow-hidden">
                          <img
                            src={course.image}
                            alt={course.title}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <CardContent className="p-6">
                          <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                          <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                          
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <Avatar className="h-6 w-6 mr-2">
                                <AvatarImage src={course.author.avatar} />
                                <AvatarFallback>{course.author.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <span className="text-sm">{course.author.name}</span>
                            </div>
                            <p className="text-sm text-gray-500">
                              Purchased: {course.purchaseDate}
                            </p>
                          </div>
                        </CardContent>
                        <CardFooter className="bg-gray-50 p-4">
                          <div className="w-full flex justify-between items-center">
                            <Button variant="outline" size="sm">
                              Download
                            </Button>
                            <Button size="sm" className="bg-primary-600 hover:bg-primary-700">
                              View Material
                            </Button>
                          </div>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-gray-50 rounded-lg">
                    <h3 className="font-medium text-lg mb-2">No purchases yet</h3>
                    <p className="text-gray-600 mb-6">
                      Browse our collection of study materials
                    </p>
                    <Link to="/courses">
                      <Button className="bg-primary-600 hover:bg-primary-700">
                        Explore Materials
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="earnings" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Earnings Overview</CardTitle>
                  <CardDescription>
                    Your earnings from selling materials on Slynk
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <div className="flex justify-between items-center p-6 bg-gray-50 rounded-lg">
                      <div>
                        <p className="text-sm text-gray-500">Total Earnings</p>
                        <p className="text-3xl font-bold">$4,818.28</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">This Month</p>
                        <p className="text-xl font-semibold">$742.50</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Pending</p>
                        <p className="text-xl font-semibold">$125.75</p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-4">Recent Transactions</h3>
                      <div className="space-y-2">
                        {[
                          {
                            date: "May 12, 2023",
                            title: "Python for Data Science - Practical Guide",
                            amount: 29.99,
                          },
                          {
                            date: "May 10, 2023",
                            title: "Advanced Econometrics - Statistical Methods",
                            amount: 24.99,
                          },
                          {
                            date: "May 8, 2023",
                            title: "Python for Data Science - Practical Guide",
                            amount: 29.99,
                          },
                          {
                            date: "May 5, 2023",
                            title: "Advanced Econometrics - Statistical Methods",
                            amount: 24.99,
                          },
                          {
                            date: "May 3, 2023",
                            title: "Python for Data Science - Practical Guide",
                            amount: 29.99,
                          },
                        ].map((transaction, idx) => (
                          <div
                            key={idx}
                            className="flex justify-between items-center p-3 border-b last:border-b-0"
                          >
                            <div>
                              <p className="font-medium">{transaction.title}</p>
                              <p className="text-sm text-gray-500">{transaction.date}</p>
                            </div>
                            <p className="font-medium">${transaction.amount.toFixed(2)}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="settings" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>
                    Manage your account preferences and settings
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-4">Notification Preferences</h3>
                      <div className="space-y-2">
                        {[
                          "Email me when someone purchases my material",
                          "Email me about new reviews on my materials",
                          "Email me about Slynk announcements and updates",
                          "Email me about relevant educational opportunities",
                        ].map((notification, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between"
                          >
                            <label className="text-sm">{notification}</label>
                            <input type="checkbox" defaultChecked={idx < 2} />
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-4">Payment Information</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Add or update your payment method to receive earnings from your sold materials
                      </p>
                      <Button variant="outline">Manage Payment Methods</Button>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-4">Privacy and Security</h3>
                      <div className="space-y-4">
                        <Button variant="outline">Change Password</Button>
                        <Button variant="outline" className="ml-4">
                          Two-Factor Authentication
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
