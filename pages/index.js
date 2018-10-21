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
      <img className="logo" src="/static/images/logos/ryr_logo_64x64.png" alt="RYR logo" />
      <h1>Request Yo Racks</h1>
    </div>
    <style jsx>{`
        h1 {
            color: #B35C22;
            display: inline-block;
            margin-left: 10px;
        }

        .navbar > * {
            vertical-align: middle;
        }
        `}
    </style>
  </div>
