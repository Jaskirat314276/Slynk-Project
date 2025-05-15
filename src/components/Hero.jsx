
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-primary-100 to-white py-16 md:py-24">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjEiPjxwYXRoIGQ9Ik0zNiAxOGMxLjY1NiAwIDMgMS4zNDQgMyAzcy0xLjM0NCAzLTMgMy0zLTEuMzQ0LTMtMyAxLjM0NC0zIDMtM20wLTJjLTIuNzYxIDAtNSAyLjIzOS01IDVzMi4yMzkgNSA1IDUgNS0yLjIzOSA1LTUtMi4yMzktNS01LTV6Ii8+PHBhdGggZD0iTTI0IDE4YzEuNjU2IDAgMyAxLjM0NCAzIDNzLTEuMzQ0IDMtMyAzLTMtMS4zNDQtMy0zIDEuMzQ0LTMgMy0zbTAtMmMtMi43NjEgMC01IDIuMjM5LTUgNXMyLjIzOSA1IDUgNSA1LTIuMjM5IDUtNS0yLjIzOS01LTUtNXoiLz48cGF0aCBkPSJNNDIgNmMxLjY1NiAwIDMgMS4zNDQgMyAzcy0xLjM0NCAzLTMgMy0zLTEuMzQ0LTMtMyAxLjM0NC0zIDMtM20wLTJjLTIuNzYxIDAtNSAyLjIzOS01IDVzMi4yMzkgNSA1IDUgNS0yLjIzOSA1LTUtMi4yMzktNS01LTV6Ii8+PHBhdGggZD0iTTE4IDZjMS42NTYgMCAzIDEuMzQ0IDMgM3MtMS4zNDQgMy0zIDMtMy0xLjM0NC0zLTMgMS4zNDQtMyAzLTNtMC0yYy0yLjc2MSAwLTUgMi4yMzktNSA1czIuMjM5IDUgNSA1IDUtMi4yMzktNS01LTIuMjM5LTUtNS01eiIvPjxwYXRoIGQ9Ik0zMCA2YzEuNjU2IDAgMyAxLjM0NCAzIDNzLTEuMzQ0IDMtMyAzLTMtMS4zNDQtMy0zIDEuMzQ0LTMgMy0zbTAtMmMtMi43NjEgMC01IDIuMjM5LTUgNXMyLjIzOSA1IDUgNSA1LTIuMjM5IDUtNS0yLjIzOS01LTUtNXoiLz48cGF0aCBkPSJNNTQgNmMxLjY1NiAwIDMgMS4zNDQgMyAzcy0xLjM0NCAzLTMgMy0zLTEuMzQ0LTMtMyAxLjM0NC0zIDMtM20wLTJjLTIuNzYxIDAtNSAyLjIzOS01IDVzMi4yMzkgNSA1IDUgNS0yLjIzOSA1LTUtMi4yMzktNS01LTV6Ii8+PHBhdGggZD0iTTYgNmMxLjY1NiAwIDMgMS4zNDQgMyAzcy0xLjM0NCAzLTMgMy0zLTEuMzQ0LTMtMyAxLjM0NC0zIDMtM20wLTJjLTIuNzYxIDAtNSAyLjIzOS01IDVzMi4yMzkgNSA1IDUgNS0yLjIzOSA1LTUtMi4yMzktNS01LTV6Ii8+PHBhdGggZD0iTTYgMzBjMS42NTYgMCAzIDEuMzQ0IDMgM3MtMS4zNDQgMy0zIDMtMy0xLjM0NC0zLTMgMS4zNDQtMyAzLTNtMC0yYy0yLjc2MSAwLTUgMi4yMzktNSA1czIuMjM5IDUgNSA1IDUtMi4yMzk1LTUgNS01LTUtNXoiLz48cGF0aCBkPSJNNTQgMzBjMS42NTYgMCAzIDEuMzQ0IDMgM3MtMS4zNDQgMy0zIDMtMy0xLjM0NC0zLTMgMS4zNDQtMyAzLTNtMC0yYy0yLjc2MSAwLTUgMi4yMzktNSA1czIuMjM5IDUgNSA1IDUtMi4yMzk1LTUgNS01LTUtNXoiLz48cGF0aCBkPSJNNiA0MmMxLjY1NiAwIDMgMS4zNDQgMyAzcy0xLjM0NCAzLTMgMy0zLTEuMzQ0LTMtMyAxLjM0NC0zIDMtM20wLTJjLTIuNzYxIDAtNSAyLjIzOS01IDVzMi4yMzkgNSA1IDUgNS0yLjIzOSA1LTUtMi4yMzktNS01LTV6Ii8+PHBhdGggZD0iTTE4IDQyYzEuNjU2IDAgMyAxLjM0NCAzIDNzLTEuMzQ0IDMtMyAzLTMtMS4zNDQtMy0zIDEuMzQ0LTMgMy0zbTAtMmMtMi43NjEgMC01IDIuMjM5LTUgNXMyLjIzOSA1IDUgNSA1LTIuMjM5IDUtNS0yLjIzOS01LTUtNXoiLz48cGF0aCBkPSJNMzAgNDJjMS42NTYgMCAzIDEuMzQ0IDMgM3MtMS4zNDQgMy0zIDMtMy0xLjM0NC0zLTMgMS4zNDQtMyAzLTNtMC0yYy0yLjc2MSAwLTUgMi4yMzktNSA1czIuMjM5IDUgNSA1IDUtMi4yMzk1LTUgNS01LTUtNXoiLz48cGF0aCBkPSJNNDIgNDJjMS42NTYgMCAzIDEuMzQ0IDMgM3MtMS4zNDQgMy0zIDMtMy0xLjM0NC0zLTMgMS4zNDQtMyAzLTNtMC0yYy0yLjc2MSAwLTUgMi4yMzktNSA1czIuMjM5IDUgNSA1IDUtMi4yMzk1LTUgNS01LTUtNXoiLz48cGF0aCBkPSJNNTQgNDJjMS42NTYgMCAzIDEuMzQ0IDMgM3MtMS4zNDQgMy0zIDMtMy0xLjM0NC0zLTMgMS4zNDQtMyAzLTNtMC0yYy0yLjc2MSAwLTUgMi4yMzktNSA1czIuMjM5IDUgNSA1IDUtMi4yMzktNS01LTIuMjM5LTUtNS01eiIvPjwvZz48L2c+PC9zdmc+')], opacity-50"></div>
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block">Learn from peers.</span>
            <span className="block text-primary-600">Share your knowledge.</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-2xl">
            Slynk connects students who want to share their best notes, study materials, and skills. Earn by sharing what you know, learn from others who've mastered the material.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/courses">
              <Button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-6 text-lg">
                Explore Materials
              </Button>
            </Link>
            <Link to="/create">
              <Button variant="outline" className="border-primary-600 text-primary-600 hover:bg-primary-50 px-8 py-6 text-lg">
                Start Sharing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
