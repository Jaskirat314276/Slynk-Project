
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Slynk</h3>
            <p className="text-gray-600 text-sm">
              A peer-to-peer knowledge exchange platform where students share personalized notes and skills.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/courses" className="hover:text-primary-600">Browse Notes</Link></li>
              <li><Link to="/courses" className="hover:text-primary-600">Popular Skills</Link></li>
              <li><Link to="/create" className="hover:text-primary-600">Share Your Knowledge</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-primary-600">Guidelines</a></li>
              <li><a href="#" className="hover:text-primary-600">Discussions</a></li>
              <li><a href="#" className="hover:text-primary-600">Discord</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-primary-600">Help Center</a></li>
              <li><a href="#" className="hover:text-primary-600">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary-600">FAQ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Slynk. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-primary-600">
              Terms
            </a>
            <a href="#" className="text-gray-500 hover:text-primary-600">
              Privacy
            </a>
            <a href="#" className="text-gray-500 hover:text-primary-600">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
