import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

import LiteYouTubeEmbed from "react-lite-youtube-embed";

type FeatureItem = {
  title: string;
  // Svg: React.ComponentType<React.ComponentProps<"svg">>;
  src: string;
  description: JSX.Element;
  video: boolean;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Customize Stories",
    src: require("@site/static/img/the-reading-club-customize-stories.JPG")
      .default,
    description: (
      <>
        Make pronouns, characters, locations—anything—customizable.
        {/* Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly. */}
        {/* Write your own custom stories with our state-of-the-art parser and
        upload them to your own private library. */}
        {/* If you follow the simple instructions and tutorial, our
        software will allow you to make pronouns, characters, locations -- and
        more -- customizable within the app as well. This will be a great
        opportunity to create fun memories with your children! */}
      </>
    ),
    video: false,
  },
  {
    title: "Self Publish",
    src: require("@site/static/img/The-Reading-Club-Self-Publish-Library-Share-With-Others.png")
      .default,
    description: (
      <>
        {/* Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory. */}
        Upload stories to your private library or share with others.
      </>
    ),
    video: false,
  },
  {
    title: "Be Creative",
    src: require("@site/static/img/The-Reading-Club-Interactive-Reading-App-Screenshot-Reading-Interface.jpg")
      .default,
    description: (
      <>
        It all begins with a story that is familiar. Create fun memories for
        children!
      </>
    ),
    video: false,
  },
  {
    title: "",
    src: "https://www.youtube.com/embed/KmM_1C2kVF4",
    description: <></>,
    video: true,
  },
];

function Feature({ title, src, description, video }: FeatureItem) {
  return video ? (
    <div className={clsx("col col--12")}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
        {/* Will reuse styles.featureSvg but will change to image tag */}
        {/* <img src={src} className={styles.featureImg} /> */}
        <iframe
          className={styles.featureVid}
          src="https://www.youtube.com/embed/KmM_1C2kVF4"
          title="YouTube video player"
          // frameBorder="0"
          // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        {/* <LiteYouTubeEmbed
          id="_An9EsKPhp0"
          // params="autoplay=1&autohide=1&showinfo=0&rel=0"
          title="Explain Like I'm 5: Docusaurus"
          // poster="maxresdefault"
          // webp
        /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  ) : (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
        {/* Will reuse styles.featureSvg but will change to image tag */}
        <img src={src} className={styles.featureImg} />
      </div>

      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

// HomepageFeatures.defaultProps = {
//   FeatureList: FeatureList,
// };
