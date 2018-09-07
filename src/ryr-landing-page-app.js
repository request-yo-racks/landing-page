define(["../node_modules/@polymer/polymer/polymer-element.js","../node_modules/@polymer/app-layout/app-header/app-header.js","../node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js","../node_modules/@polymer/app-layout/app-scroll-effects/app-scroll-effects.js","../node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js","../node_modules/@polymer/iron-flex-layout/iron-flex-layout.js","../node_modules/@polymer/iron-icons/iron-icons.js","../node_modules/@polymer/paper-icon-button/paper-icon-button.js","../node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js"],function(_polymerElement){"use strict";class RyrLandingPageApp extends _polymerElement.PolymerElement{static get template(){return _polymerElement.html`
    <style>

      * {
        margin: 0;
        padding: 0;
      }

      a {
        text-decoration: none;
        font-size: inherit;
        color: inherit;
      }

      .toolbar {
        @apply --layout-horizontal;
        @apply --layout-end-justified;
        background-color: rgba(255, 255, 255, 0.95);
      }

      .tabs {
        height: 100%;
        @apply --layout-horizontal;
      }

      .tabs > a {
        @apply --layout-vertical;
        @apply --layout-center-center;
        margin: 12px 16px 12px;
        border-bottom: 1px solid #222;
      }

      app-toolbar {
        --app-toolbar-font-size: 1em;
        background-color: white;
        height: 128px;
      }

      app-toolbar .logo {
        padding-right: 1em;
      }

      app-toolbar [main-title] {
        color: #B35C22;
        font-size: 1.5em;
      }

      header {
        @apply --layout-vertical;
        @apply --layout-center-center;
        height: calc(100vh - 128px);
        padding: 0 16px;
        background-image: url('images/bike-rack-dark.png');
        backgrond-repeat: no-repeat;
        background-size: cover;
        color: white;
        text-align: center;
      }

      header > h2 {
        font-size: 4em;
        font-weight: 300;
        margin: 0;
      }

      header > p {
        font-size: 2em;
      }

      section {
        padding: 88px 16px;
      }

      .container {
        @apply --layout-horizontal;
        max-width: 800px;
        margin: 0 auto;
      }

      .container > * {
        @apply --layout-flex;
      }

      .container img {
        max-width: 100%;
        max-height: 100%;
      }

      .container h3 {
        font-size: 32px;
        font-weight: 300;
        margin: 24px 0;
      }

      .container p {
        line-height: 1.5;
      }

      .container .logo {
        margin: 0 auto;
      }

      @media (max-width: 600px) {
        app-toolbar [main-title] {
          text-align: center;
          font-size: 1.1em;
        }

        app-toolbar .logo {
          padding: 0;
        }

        header > h2 {
          font-size: 2.5em;
        }

        header > p {
          font-size: 1em;
        }

        .container {
          @apply --layout-vertical;
        }
      }

    </style>

    <app-header-layout>

      <app-header slot="header">

        <app-toolbar class="toolbar">
          <img class="logo" src="images/logos/ryr_logo_64x64.png" />
          <div main-title>Request Yo Racks</div>
        </app-toolbar>

      </app-header>

      <header>
        <h2>Request a bike rack from the city of Austin</h2>
        <p>Always park your bike securely</p>
      </header>

      <section id="about">
        <div class="container">
          <div class="logo">
            <img src="images/logos/ryr_logo_256x256.png" />
          </div>
          <div>
            <p>Request your racks is a service allowing you to request a bike rack from the city of Austin in 3 simple steps:</p>
            <h3>Point, Select, Submit.</h3>
          </div>
        </div>
      </section>

    </app-header-layout>
    `}}customElements.define("ryr-landing-page-app",RyrLandingPageApp)});