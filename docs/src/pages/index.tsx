import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
// import YoutubeEmbed from "@site/src/components/HomepageFeatures/YouTubeEmbed";
import LiteYouTubeEmbed from "react-lite-youtube-embed";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Read Intro Tutorial
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        {/* <HomepageFeatures /> */}
        {/* <YoutubeEmbed embedId="KmM_1C2kVF4" /> */}
        {/* <LiteYouTubeEmbed
          id="_An9EsKPhp0"
          // params="autoplay=1&autohide=1&showinfo=0&rel=0"
          title="Explain Like I'm 5: Docusaurus"
          // poster="maxresdefault"
          // webp
        /> */}
      </main>
    </Layout>
  );
}
