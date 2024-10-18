import React from "react";

const AboutMe = () => {
  return (
    <div className="aboutMe py-5">
      <div className="row d-flex align-items-center justify-content-center text-center">
        <div className="col-lg-4 col-sm-12 mb-4 d-flex justify-content-center align-items-center">
          <img
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnpoNHB3Mzd6d3VvN282dXdhOTM5b2UwZjI1NG4zbTFiNjZmZGNzOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bGgsc5mWoryfgKBx1u/giphy.gif"
            alt=""
            className="gify"
            style={{ height: "300px", width: "300px", borderRadius: "30px" }}
          />
        </div>
        <div className="col-lg-5 col-sm-12 mb-4">
          <h3 className="text-center about">About Me</h3>
          <p className="about_text mt-3 px-3 py-3 bg-secondary rounded border border-3 border-secondary-subtle">
            I'm Anurag Tiwari, a dedicated front-end developer with a growing
            proficiency in SQL and a strong interest in DevOps. I thrive on
            building intuitive, responsive user interfaces with React.js while
            also expanding my expertise in managing data through SQL. My passion
            lies in solving complex problems with efficient, user-centered
            solutions, and I am committed to delivering top-notch work that
            integrates both design and functionality. As I dive deeper into
            DevOps, I’m excited to enhance my skills in automating processes and
            optimizing deployments. Let’s collaborate and bring your ideas to
            life!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
