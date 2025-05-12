import React from 'react';

const About = () => {
  return (
    <div className=" text-gray-500 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
        <p className="text-lg text-center text-gray-500 mb-12">
          We're a passionate team committed to delivering seamless user experiences and powerful web applications.
        </p>

        {/* Mission Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-500 leading-relaxed">
            Our mission is to build efficient, scalable, and user-friendly digital solutions that empower businesses and individuals. We believe in innovation, quality, and continuous improvement.
          </p>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-center">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              { name: "Jane Doe", role: "Frontend Developer" },
              { name: "John Smith", role: "Backend Engineer" },
              { name: "Alice Brown", role: "UI/UX Designer" }
            ].map((member, index) => (
              <div key={index} className="bg-gray-100 rounded-xl shadow-md p-6 text-center hover:shadow-lg transition duration-300">
                <div className="w-24 h-24 overflow-hidden bg-gray-300 rounded-full mx-auto mb-4">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2lOQHK4HAH3hzhYwtJ_oVgzaaO7sjlDTrTA&s" className='w-full h-full' alt="" />
                </div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
