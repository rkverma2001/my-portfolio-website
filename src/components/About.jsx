const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Ritesh Kumar, currently pursuing BTech in Computer Science and
          Engineering from Dr. A.P.J. Kalam Technical University, Lucknow, is a
          dedicated Frontend Developer with a keen eye for crafting engaging
          user experiences. Proficient in React.js, HTML, CSS, and vanilla
          JavaScript, he brings websites to life with seamless interactivity and
          visual appeal. Leveraging Git/GitHub for version control and Firebase
          for hosting, Ritesh ensures smooth deployment and maintenance of his
          projects.
        </p>
        <br />
        <p className="text-xl ">
          With a solid foundation in core CS subjects like Java, DBMS, Operating
          Systems, Computer Networks, and Data Structures, Ritesh Kumar embodies
          a holistic approach to software development. His relentless pursuit of
          excellence drives him to continuously innovate and refine his skills,
          making him a valuable asset in the ever-evolving tech industry.
          Passionate and hardworking, Ritesh is committed to delivering
          top-notch solutions that leave a lasting impact on users and
          stakeholders alike.
        </p>
      </div>
    </div>
  );
};

export default About;
