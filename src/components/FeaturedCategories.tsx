
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Book, Star, MessageSquare, Pencil } from "lucide-react";

const categories = [
  {
    id: "notes",
    title: "Study Notes",
    description: "Comprehensive notes from top students",
    icon: <Book className="h-6 w-6" />,
    color: "bg-blue-100",
    iconColor: "text-blue-500",
  },
  {
    id: "summaries",
    title: "Course Summaries",
    description: "Condensed course material in digestible formats",
    icon: <Pencil className="h-6 w-6" />,
    color: "bg-amber-100",
    iconColor: "text-amber-500",
  },
  {
    id: "tutoring",
    title: "Peer Tutoring",
    description: "One-on-one help from students who aced the course",
    icon: <MessageSquare className="h-6 w-6" />,
    color: "bg-green-100",
    iconColor: "text-green-500",
  },
  {
    id: "reviews",
    title: "Exam Reviews",
    description: "Practice tests and exam preparation materials",
    icon: <Star className="h-6 w-6" />,
    color: "bg-purple-100",
    iconColor: "text-purple-500",
  },
];

const FeaturedCategories = () => {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 text-center">Discover Learning Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link to={`/courses?category=${category.id}`} key={category.id}>
              <Card className="h-full p-6 transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                <div className={`${category.color} ${category.iconColor} p-3 rounded-full w-fit mb-4`}>
                  {category.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
