"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/nav";
import Footer from "@/components/foot";
import Spline from "@splinetool/react-spline";

export default function GalleryPage() {
  // Static gallery data
  const gallery = [
    {
      image: "/images/sample1.jpg",
      title: "Beautiful Landscape",
      description: "A serene view of the mountains during sunset.",
    },
    {
      image: "/images/sample2.jpg",
      title: "City Lights",
      description: "Skyline illuminated at night with vibrant colors.",
    },
    {
      image: "/images/sample3.jpg",
      title: "Ocean Waves",
      description: "Crystal blue waters crashing on the rocks.",
    },
  ];

  return (
    <div>
      <div className="bg-[#fafafa] min-h-screen flex flex-col pt-20">
  <Navbar />


        {/* Spline Section */}
        
<div className="hidden sm:block w-full relative">
  <div className="w-full h-[70vh] lg:h-screen">
    <Spline
      scene="https://prod.spline.design/u-FE8axZ14n8nwcH/scene.splinecode"
      className="w-full h-full"
    />
  </div>
</div>






        {/* Gallery Section */}
        <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-[#fafafa] relative z-10">
          {gallery.map((item, index) => (
            <Card
              key={index}
              className="shadow-lg rounded-2xl overflow-hidden bg-white hover:scale-105 transition-transform"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
