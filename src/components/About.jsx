import React from "react";

const About = () => {
  return (
    <div>
      <section className="bg-white mt-20">
        <div className="max-w-2xl px-6 text-center mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800">
            Hi,{" "}
            <span className="bg-indigo-600 text-white rounded px-1">
              I’m Imran
            </span>
            . Nice to meet you.
          </h2>
          <p className="text-gray-600 mt-4">
            I'm a recent graduate in computer Science and Technology with
            significant experience using Java, JavaScript, MongoDB and SQL.I also
            have comprehensive knowledge of Web Development Languages and
            Tools.I have a skill of writing highly competent programs and have
            deep understanding regarding software development environments and
            considerable talent in achieving critical solutions.. My current
            career objective is seeking a role of a Software Engineer where I
            can contribute towards the organizational goals through my
            analytical skills and knowledge acquired by pursuing a degree in
            Computer Science
          </p>

          <div className="flex items-end justify-center mt-16"></div>
        </div>
      </section>
    </div>
  );
};

export default About;
