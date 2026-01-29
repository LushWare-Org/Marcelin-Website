export default function Founder() {
  return (
    <section id="founder" className="py-20 px-4 ">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-cyan-500 uppercase mb-2">Leadership</h2>
          <h3 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Founder</span>
          </h3>
          <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative group">
          {/* Background Decoration */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          
          <div className="relative bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 shadow-2xl">
            <div className="flex flex-col lg:flex-row">
              
              {/* Image Section */}
              <div className="lg:w-2/5 relative h-[400px] lg:h-auto overflow-hidden">
                <img 
                  src="/img/founder.jpeg" 
                  alt="Danio Elson Gamayel Marcelin" 
                  className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent lg:bg-gradient-to-r"></div>
              </div>

              {/* Content Section */}
              <div className="lg:w-3/5 p-8 md:p-14 flex flex-col justify-center">
                <div className="mb-8">
                  <h3 className="text-4xl font-bold text-white mb-2 leading-tight">
                    Danio Elson Gamayel Marcelin
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="text-xl text-cyan-400 font-medium">Founder & CEO</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-600"></span>
                    <span className="text-gray-400">Marcelin Global Holdings (MGH)</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="text-gray-300 text-lg leading-relaxed border-l-4 border-cyan-500 pl-6 italic">
                    "With a vision to transform the technological landscape of Seychelles and beyond, 
                    Danio has dedicated his career to building scalable, technology-driven businesses."
                  </p>
                  
                  <p className="text-gray-400 text-lg leading-relaxed">
                    A Seychelles-born entrepreneur and technology innovator, Danio is the driving force behind 
                    <span className="text-white font-semibold"> Marcel Robotics</span>. 
                    His leadership philosophy centers on owning the technology, controlling the system, 
                    and scaling aggressively while maintaining a strong focus on local leadership and regional expansion.
                  </p>
                </div>

                {/* Optional: Social or Signature Area */}
                <div className="mt-10 pt-8 border-t border-gray-800 flex items-center justify-between">
                   <div className="text-sm text-gray-500 tracking-tighter uppercase font-bold">
                     Innovation • Excellence • Leadership
                   </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}