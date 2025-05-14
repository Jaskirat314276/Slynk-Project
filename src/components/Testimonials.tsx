
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    content: "Slynk completely transformed my study habits. I purchased notes for my Biochemistry class and went from a C to an A-. The materials were so well organized and explained concepts better than my textbook!",
    author: {
      name: "Alex Thompson",
      title: "Biology Major, UCLA",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
  },
  {
    id: 2,
    content: "I started sharing my Computer Science notes on Slynk and have earned enough to cover half my textbooks for the semester! Plus, it feels great knowing I'm helping others succeed.",
    author: {
      name: "Priya Patel",
      title: "Computer Science Major, MIT",
      avatar: "https://i.pravatar.cc/150?img=6",
    },
  },
  {
    id: 3,
    content: "As someone with ADHD, finding concise and well-structured notes has been game-changing for my studies. Slynk's peer-to-peer model means I get notes from people who actually understand what's important.",
    author: {
      name: "Jordan Wilson",
      title: "Psychology Student, NYU",
      avatar: "https://i.pravatar.cc/150?img=7",
    },
  },
];

const Testimonials = () => {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold mb-2 text-center">What Students Say</h2>
        <p className="text-gray-600 text-center mb-12">Join thousands of students already sharing and learning on Slynk</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
            >
              <div className="mb-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i} className="text-amber-400 text-lg">
                      ★
                    </span>
                  ))}
              </div>
              <p className="text-gray-700 mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-4">
                  <AvatarImage src={testimonial.author.avatar} />
                  <AvatarFallback>{testimonial.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{testimonial.author.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.author.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
