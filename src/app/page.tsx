import Link from 'next/link';

const HomePage = () => (
  <main className="molokai-home-page">
    <section className="molokai-logo-hero-section">
      <div className="molokai-logo-hero">
        <p className="molokai-eyebrow">Molokai Grown Since 1983</p>

        <h1>Aloha a ho’okipa</h1>

        <p className="molokai-hero-subtitle">
          Beautiful island-grown plumerias with care, color, and aloha.
        </p>
      </div>
    </section>

    <section className="molokai-content-section molokai-section-light">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-5">
            <p className="molokai-eyebrow">About the Farm</p>
            <h2>Rooted in Molokai, grown with care.</h2>
          </div>

          <div className="col-lg-7">
            <p className="molokai-section-text">
              Molokai Plumerias is a local plumeria farm focused on growing beautiful,
              healthy flowers with the warm colors and tropical feel of the islands.
              This site will help visitors learn about the farm, browse flowers, and
              understand how to care for their plumerias.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="molokai-content-section molokai-section-warm">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <Link href="/about" className="molokai-info-card molokai-info-card-link">
              <h3>About</h3>
              <p>
                Learn the story behind Molokai Plumerias and the flowers grown on the farm.
              </p>
            </Link>
          </div>

          <div className="col-md-4">
            <Link href="/care-instructions" className="molokai-info-card molokai-info-card-link">
              <h3>Care Instructions</h3>
              <p>
                Get simple care tips for watering, sunlight, planting, and keeping plumerias healthy.
              </p>
            </Link>
          </div>

          <div className="col-md-4">
            <Link href="/flowers" className="molokai-info-card molokai-info-card-link">
              <h3>Flowers</h3>
              <p>
                Browse available plumerias and view the colors, styles, and varieties offered.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section className="molokai-content-section molokai-review-section">
      <div className="container">
        <div className="molokai-review-panel">
          <p className="molokai-eyebrow">Customer Reviews</p>

          <div className="molokai-stars">★★★★★</div>

          <div className="molokai-review-rotator">
            <blockquote className="molokai-review molokai-review-one">
              “The flowers were beautiful, fresh, and full of color. You can tell they are grown with care.”
            </blockquote>

            <blockquote className="molokai-review molokai-review-two">
              “Amazing plumerias and helpful care advice. The whole experience felt personal and local.”
            </blockquote>

            <blockquote className="molokai-review molokai-review-three">
              “Healthy plants, gorgeous blooms, and a true Molokai feel. I would absolutely recommend them.”
            </blockquote>
          </div>

          <p className="molokai-review-note">
            Replace these sample quotes with real Google reviews when the client provides them.
          </p>
        </div>
      </div>
    </section>
  </main>
);

export default HomePage;
