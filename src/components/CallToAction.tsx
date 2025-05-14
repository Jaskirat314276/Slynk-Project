
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 bg-primary-700 text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Share Your Knowledge?</h2>
          <p className="text-lg mb-8 text-primary-100">
            Turn your class notes and skills into income while helping other students succeed. 
            Join our community of student knowledge-sharers today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/create">
              <Button className="bg-white text-primary-700 hover:bg-primary-50 px-8 py-6 text-lg">
                Start Sharing
              </Button>
            </Link>
            <Link to="/courses">
              <Button variant="outline" className="border-white text-white hover:bg-primary-600 px-8 py-6 text-lg">
                Browse Resources
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
