export default function Home() {
  return (
    <>
      <div className="logo">

        <img src="/logo.svg" alt="" />


      </div>


      <section className="hero">

        <div className="hero-inner">
          <div className="hero-spotlight-gallery">

            <div className="hero-spotlight-col">
              <div className="hero-spotlight-item">
                <img src="/img-1.jpg" alt="" />
              </div>
              <div className="hero-spotlight-item">
                <img src="/img-2.jpg" alt="" />

              </div>
              <div className="hero-spotlight-item">
                <img src="/img-3.jpg" alt="" />

              </div>
            </div>

            <div className="hero-spotlight-col">
              <div className="hero-spotlight-item">
                <img src="/img-1.jpg" alt="" />
              </div>
              <div className="hero-spotlight-item">
                <img src="/img-5.jpg" alt="" />

              </div>
              <div className="hero-spotlight-item">
                <img src="/img-6.jpg" alt="" />

              </div>
            </div>

            <div className="hero-spotlight-col">
              <div className="hero-spotlight-item">
                <img src="/img-7.jpg" alt="" />
              </div>
              <div className="hero-spotlight-item">
                <img src="/img-2.jpg" alt="" />

              </div>
              <div className="hero-spotlight-item">
                <img src="/img-3.jpg" alt="" />

              </div>
            </div>


          </div>
          <div className="hero-header">
            <h3>
              A living catalogue of images but shouldn't exist. 
              Collected frame by frame from the edge of the real.
            </h3>
            <a href="#" className="btn">Request Access</a>
          </div>

          <div className="hero-footer">
            <h5>An archive of the unreal</h5>
          </div>
        </div>
        <div className="hero-overlay"></div>
      </section>



      <section className="studio">
        <h1>studio</h1>
      </section>
      <section className="connect">
        <h1>connect</h1>

      </section>

    </>
  )
}