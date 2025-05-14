
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Search } from "lucide-react";
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
  {
    id: "5",
    title: "Biology 101: Cell Structure Masterclass",
    description: "Visual notes and memory aids for understanding cell biology and functions.",
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8",
    price: 17.99,
    rating: 4.5,
    reviews: 78,
    author: {
      name: "Sarah Martinez",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    category: "Biology",
  },
  {
    id: "6",
    title: "Economics Principles - Microeconomics Study Guide",
    description: "Concise summaries of key microeconomic principles with real-world examples.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
    price: 22.99,
    rating: 4.4,
    reviews: 65,
    author: {
      name: "Thomas Wilson",
      avatar: "https://i.pravatar.cc/150?img=6",
    },
    category: "Economics",
  },
  {
    id: "7",
    title: "Art History: Renaissance to Modern Art",
    description: "Comprehensive timeline and analysis of major art movements and influential works.",
    image: "https://images.unsplash.com/photo-1580060860978-f63a1769b4d8",
    price: 27.99,
    rating: 4.8,
    reviews: 92,
    author: {
      name: "Isabella Garcia",
      avatar: "https://i.pravatar.cc/150?img=7",
    },
    category: "Art History",
  },
  {
    id: "8",
    title: "Introduction to Programming: Java Edition",
    description: "Step-by-step guide to Java programming with annotated code examples.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    price: 31.99,
    rating: 4.9,
    reviews: 186,
    author: {
      name: "Ryan Lee",
      avatar: "https://i.pravatar.cc/150?img=8",
    },
    category: "Computer Science",
  }
];

const categories = [
  "All Categories",
  "Chemistry",
  "Mathematics",
  "Computer Science",
  "Psychology",
  "Biology",
  "Economics",
  "Art History",
  "Physics",
  "Literature",
];

const CoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [ratingFilter, setRatingFilter] = useState(0);
  const [filteredCourses, setFilteredCourses] = useState(dummyCourses);

  return (
    <div className="container py-10">
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8">
        {/* Sidebar Filters */}
        <div className="w-full md:w-1/4">
          <div className="bg-white p-6 rounded-lg border border-gray-200 sticky top-24">
            <h2 className="font-semibold text-lg mb-6">Filters</h2>
            
            {/* Category Filter */}
            <div className="mb-6">
              <label className="text-sm font-medium mb-2 block">Category</label>
              <Select defaultValue={selectedCategory} onValueChange={(value) => setSelectedCategory(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            {/* Price Range Filter */}
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium">Price Range</label>
                <span className="text-sm text-gray-600">
                  ${priceRange[0]} - ${priceRange[1]}
                </span>
              </div>
              <Slider
                defaultValue={[0, 100]}
                max={100}
                step={5}
                onValueChange={(value) => setPriceRange(value)}
              />
            </div>
            
            {/* Rating Filter */}
            <div className="mb-6">
              <label className="text-sm font-medium mb-2 block">Minimum Rating</label>
              <div className="space-y-2">
                {[4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center">
                    <Checkbox
                      id={`rating-${rating}`}
                      checked={ratingFilter === rating}
                      onCheckedChange={() => 
                        setRatingFilter(ratingFilter === rating ? 0 : rating)
                      }
                    />
                    <label htmlFor={`rating-${rating}`} className="ml-2 text-sm">
                      {rating}+ Stars
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Format Filter */}
            <div className="mb-6">
              <label className="text-sm font-medium mb-2 block">Format</label>
              <div className="space-y-2">
                {["PDF Notes", "Video Tutorials", "Flashcards", "Practice Tests"].map((format) => (
                  <div key={format} className="flex items-center">
                    <Checkbox id={`format-${format}`} />
                    <label htmlFor={`format-${format}`} className="ml-2 text-sm">
                      {format}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <Button variant="outline" className="w-full">
              Reset Filters
            </Button>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="w-full md:w-3/4">
          <div>
            <h1 className="text-3xl font-bold mb-6">Browse Learning Resources</h1>
            
            {/* Search */}
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-4 w-4 text-gray-500" />
              </div>
              <input
                type="search"
                placeholder="Search for notes, skills, subjects..."
                className="w-full py-3 pl-10 pr-4 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Sort Options */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">Showing {dummyCourses.length} results</p>
              <Select defaultValue="most-popular">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="most-popular">Most Popular</SelectItem>
                  <SelectItem value="highest-rated">Highest Rated</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {/* Course Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {dummyCourses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
            
            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <nav className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button size="sm" variant="outline" className="bg-primary-50">
                  1
                </Button>
                <Button size="sm" variant="outline">
                  2
                </Button>
                <Button size="sm" variant="outline">
                  3
                </Button>
                <Button size="sm" variant="outline">
                  Next
                </Button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
