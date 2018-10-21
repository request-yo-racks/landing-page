import Head from 'next/head'

export default () =>
  <div>
    <Head>
      <title>Request Yo Racks</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="RYR landing page" />
      <meta name="theme-color" content="#B35C22" />
      <link rel="manifest" href="/static/manifest.json" />
    </Head>
    <div className="navbar">
      <img className="logo" src="/static/images/logos/ryr_logo-64x64.png" alt="RYR logo" />
      <h1>Request Yo Racks</h1>
    </div>
    <div className="cover">
      <h2>Request a bike rack from the city of Austin</h2>
      <p>Always park your bike securely</p>
    </div>
    <section id="about">
      <div className="logo">
        <img src="/static/images/logos/ryr_logo-256x256.png" alt="RYR logo" />
      </div>
      <div>
        <img className="how-it-works" src="/static/images/how-it-works.png" alt="How it works" />
      </div>
    </section>
    <style jsx>{`
        h1 {
            color: #B35C22;
            display: inline-block;
            margin-left: 0.5em;
        }

        .navbar {
          padding: 0.75em;
        }

        .navbar > * {
          vertical-align: middle;
        }

        .cover {
          display: flex;
          justify-content: center;
          flex-direction: column;
          text-align: center;
          height: calc(100vh - 128px);
          padding: 0 16px;
          background-image: url('/static/images/bike-rack-dark.png');
          backgrond-repeat: no-repeat;
          background-size: cover;
          color: white;
          text-align: center;
        }

        .cover > h2 {
          font-size: 4em;
        }

        .cover > p {
          font-size: 2em;
        }

        #about {
          margin: 2em auto;
          display: flex;
          justify-content: center;
          flex-direction: row;
          align-items: center;
        }

        #about .how-it-works {
          max-width: 640px;
        }
        `}
    </style>
  </div>
