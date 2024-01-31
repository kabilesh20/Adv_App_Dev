import link3 from "../assets/images/about/clg1.jpeg";

function Aboutme() {
  return (
    <div className="about-container">
      <img className="about-image" src={link3} alt="personal photo" />

      <div className="rectangle1"></div>
      <div className="rectangle2"></div>

      <section>
        <h2>About University</h2>
        <p>
        Campus University (CU) is a leading Indian Institution offering its students a unique amalgamation of professional and academic excellence. The University has been accredited with the prestigious A+ grade by the National Assessment and Accreditation Council (NAAC). Campus  University has become Youngest and the only private university in India to bag an A+ grade in the first cycle of the accreditation process and has also become the only state private university of Punjab to be accredited by NAAC.

Also, ranked among Asia’s best and fastest-growing universities, CU has coupled the experience of top industry leaders and renowned academicians to foster a global approach.
        </p>
      </section>
    </div>
  );
}

export default Aboutme;
