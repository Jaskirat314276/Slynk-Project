
import Hero from "@/components/Hero";
import FeaturedCategories from "@/components/FeaturedCategories";
import FeaturedCourses from "@/components/FeaturedCourses";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <FeaturedCategories />
      <FeaturedCourses />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default HomePage;
