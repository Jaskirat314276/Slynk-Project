
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CourseCard from "@/components/CourseCard";

const dummyCourses = [
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
  },
  {
    id: "2",
    title: "Calculus II Formula Sheet and Problem Solving Techniques",
    description: "All the formulas and methods you need to ace Calculus II, with step-by-step examples.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
    price: 19.99,
    rating: 4.6,
    reviews: 89,
    author: {
      name: "Michael Rodriguez",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    category: "Mathematics",
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
  },
  {
    id: "4",
    title: "Advanced Psychology Concepts Explained",
    description: "Breakdown of complex psychology theories with memorable examples and case studies.",
    image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b",
    price: 24.99,
    rating: 4.7,
    reviews: 153,
    author: {
      name: "David Kim",
      avatar: "https://i.pravatar.cc/150?img=4",
    },
    category: "Psychology",
  },
];

const FeaturedCourses = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Resources</h2>
            <p className="text-gray-600">Discover top-rated notes and study materials from peers</p>
          </div>
          <Link to="/courses">
            <Button variant="outline" className="mt-4 md:mt-0">
              View All
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {dummyCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
