export default () =>
  <div>
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