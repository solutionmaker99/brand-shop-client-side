const About = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/nQnBgkP/iphone.jpg"
            className="max-w-[30vw] rounded-lg shadow-2xl"
            data-aos="fade-left"
          />
          <div data-aos="fade-right">
            <h1 className="text-5xl font-bold">
              About Technology and Electronics!
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
