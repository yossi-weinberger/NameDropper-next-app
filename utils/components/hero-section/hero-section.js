import "./hero-section.css";

export function HeroSection() {
  return (
    <div className="heroSection">
      <div className="text">
        <h1>lorem ipsum dolor sit amet, consectetur adipiscing</h1>
        <p>
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        </p>
      </div>
      <div className="buttons">
        <button type="button">More info</button>
        <button type="button">Contact</button>
        <button type="button">Store</button>
      </div>
    </div>
  );
}
