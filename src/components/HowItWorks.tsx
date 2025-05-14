
import { Book, Heart, MessageSquare } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Upload Your Knowledge",
    description:
      "Share your notes, study guides, or offer peer tutoring sessions. Set your own prices for your materials or services.",
    icon: <Book className="h-8 w-8" />,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "Help Others Succeed",
    description:
      "Your notes and skills help fellow students master difficult subjects and achieve better grades.",
    icon: <Heart className="h-8 w-8" />,
    color: "bg-red-100 text-red-600",
  },
  {
    id: 3,
    title: "Earn While You Learn",
    description:
      "Get paid when others purchase your materials. Build your reputation through ratings and reviews.",
    icon: <MessageSquare className="h-8 w-8" />,
    color: "bg-green-100 text-green-600",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold mb-4 text-center">How Slynk Works</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          A simple process to share your knowledge and help other students succeed
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div
              key={step.id}
              className="text-center flex flex-col items-center"
            >
              <div className={`${step.color} p-5 rounded-full mb-6`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
