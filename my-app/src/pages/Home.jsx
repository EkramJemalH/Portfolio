import "./Home.css";

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <h1>Hi, I'm Ekram 👋</h1>
        <h2>Frontend Developer & UI/UX Designer</h2>
        <p>
          I design and build clean, user-friendly web experiences.
        </p>

        <div className="home-buttons">
          <button>View Projects</button>
          <button>Contact Me</button>
        </div>
      </div>
    </section>
  );
}

export default Home;