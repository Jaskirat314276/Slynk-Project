
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
}

const CourseCard = ({
  id,
  title,
  description,
  image,
  price,
  rating,
  reviews,
  author,
  category,
}: CourseCardProps) => {
  return (
    <Link to={`/courses/${id}`}>
      <Card className="course-card overflow-hidden h-full flex flex-col">
        <div className="relative aspect-video w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
          <Badge className="absolute top-2 right-2 bg-primary-500">{category}</Badge>
        </div>
        <CardContent className="flex-grow pt-4">
          <h3 className="font-semibold text-lg line-clamp-2 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm line-clamp-2 mb-4">{description}</p>
          
          <div className="flex items-center space-x-2 mb-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={author.avatar} alt={author.name} />
              <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="text-sm text-gray-600">{author.name}</span>
          </div>
          
          <div className="flex items-center">
            <div className="flex items-center text-amber-500 mr-1">
              <Star className="h-4 w-4 fill-current" />
            </div>
            <span className="text-sm font-medium">{rating.toFixed(1)}</span>
            <span className="text-sm text-gray-600 ml-1">({reviews})</span>
          </div>
        </CardContent>
        <CardFooter className="border-t pt-4">
          <div className="flex items-center justify-between w-full">
            <span className="font-semibold">${price.toFixed(2)}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CourseCard;
