
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const CreateCoursePage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    image: null,
    fileUpload: null,
  });
  
  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.files && e.target.files[0],
      }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Success",
        description: "Your material has been submitted for review and will be published soon.",
      });
    }, 1500);
  };
  
  return (
    <div className="container py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Create Learning Material</h1>
        <p className="text-gray-600 mb-8">
          Share your knowledge and help other students succeed while earning income
        </p>
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-8">
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>
                  Provide the essential details about your learning material
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    placeholder="e.g., Organic Chemistry Complete Study Guide"
                    value={formData.title}
                    onChange={(e) => handleChange("title", e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your learning material in detail. What does it cover? Who is it for? What problems does it solve?"
                    rows={5}
                    value={formData.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select
                      onValueChange={(value) => handleChange("category", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mathematics">Mathematics</SelectItem>
                        <SelectItem value="science">Science</SelectItem>
                        <SelectItem value="computerscience">Computer Science</SelectItem>
                        <SelectItem value="languages">Languages</SelectItem>
                        <SelectItem value="arts">Arts & Humanities</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                        <SelectItem value="engineering">Engineering</SelectItem>
                        <SelectItem value="medicine">Medicine</SelectItem>
                        <SelectItem value="law">Law</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="price">Price ($)</Label>
                    <Input
                      id="price"
                      type="number"
                      min="0"
                      step="0.01"
                      placeholder="19.99"
                      value={formData.price}
                      onChange={(e) => handleChange("price", e.target.value)}
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Cover Image */}
            <Card>
              <CardHeader>
                <CardTitle>Cover Image</CardTitle>
                <CardDescription>
                  Upload a cover image for your learning material
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    {formData.image ? (
                      <div className="flex flex-col items-center">
                        <img
                          src={URL.createObjectURL(formData.image as unknown as Blob)}
                          alt="Preview"
                          className="max-h-40 object-contain mb-4"
                        />
                        <p className="text-sm text-gray-600">
                          {(formData.image as unknown as File).name}
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <p>Drag and drop an image here, or click to browse</p>
                        <p className="text-xs text-gray-500">
                          JPG, PNG or GIF, max 5MB
                        </p>
                      </div>
                    )}
                    <input
                      type="file"
                      id="image"
                      className="hidden"
                      accept="image/*"
                      onChange={(e) => handleFileChange(e, "image")}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      className="mt-4"
                      onClick={() => document.getElementById("image")?.click()}
                    >
                      Browse Files
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Content Upload */}
            <Card>
              <CardHeader>
                <CardTitle>Content Upload</CardTitle>
                <CardDescription>
                  Upload your learning material (PDF, DOC, PPT, etc.)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    {formData.fileUpload ? (
                      <div className="flex flex-col items-center">
                        <p className="text-sm font-medium mb-2">File uploaded successfully:</p>
                        <p className="text-sm text-gray-600">
                          {(formData.fileUpload as unknown as File).name}
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <p>Drag and drop your file here, or click to browse</p>
                        <p className="text-xs text-gray-500">
                          PDF, DOC, PPT, ZIP, max 50MB
                        </p>
                      </div>
                    )}
                    <input
                      type="file"
                      id="fileUpload"
                      className="hidden"
                      accept=".pdf,.doc,.docx,.ppt,.pptx,.zip"
                      onChange={(e) => handleFileChange(e, "fileUpload")}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      className="mt-4"
                      onClick={() => document.getElementById("fileUpload")?.click()}
                    >
                      Browse Files
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Terms and Submit */}
            <Card>
              <CardContent className="pt-6">
                <div className="mb-6">
                  <div className="flex items-start mb-4">
                    <input
                      type="checkbox"
                      id="terms"
                      className="mt-1 mr-2"
                      required
                    />
                    <label htmlFor="terms" className="text-sm">
                      I confirm that I have the right to sell this content and it does not violate 
                      any copyright or intellectual property laws. I agree to Slynk's{" "}
                      <a href="#" className="text-primary-600 hover:underline">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-primary-600 hover:underline">
                        Content Guidelines
                      </a>
                      .
                    </label>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row sm:justify-between space-y-4 sm:space-y-0">
                <Button type="button" variant="outline">
                  Save as Draft
                </Button>
                <Button
                  type="submit"
                  className="bg-primary-600 hover:bg-primary-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit for Review"}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCoursePage;
