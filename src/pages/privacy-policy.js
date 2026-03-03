import React from "react";
import Helmet from "react-helmet";

import * as styles from "./privacy-policy.module.css";

const PrivacyPolicy = () => (
  <div className={styles.container}>
    <Helmet title="Recallr Catalog — Privacy Policy" />

    <h1>Privacy Policy</h1>
    <p className={styles.updated}>Last updated: March 3, 2026</p>

    <p>
      Recallr Catalog ("Recallr", "we", "the app") is developed by Simon
      Arneson. This policy explains what data the app accesses, how it is
      processed, and where it is stored.
    </p>

    <h2>The Short Version</h2>
    <p>
      Recallr processes your photos entirely on your device. We do not collect
      analytics, run ads, or send your data to third-party services. Your data
      stays on your device and in your private iCloud account.
    </p>

    <h2>Data We Process</h2>

    <h3>Photos and Images</h3>
    <p>
      When you import photos into Recallr, the app uses Apple's on-device Vision
      framework to generate image feature prints for similarity matching and
      performs OCR to extract text. All of this processing happens locally on
      your device — no images are sent to external servers for analysis.
    </p>

    <h3>Trading Card Recognition</h3>
    <p>
      Recallr uses Apple's on-device intelligence (FoundationModels) to identify
      trading cards from photos. This processing runs entirely on your device.
      If on-device recognition is unavailable and you have configured an
      external API endpoint in the app's settings, card images may be sent to
      that endpoint for identification. No external API is contacted unless you
      explicitly configure one.
    </p>

    <h3>Recipe and Web Content</h3>
    <p>
      When you share a URL with Recallr, the app fetches the webpage content
      directly from that website to extract recipe information and archive the
      page for offline access. These requests go directly from your device to
      the website — Recallr does not route them through any intermediary server.
    </p>

    <h2>Data Storage</h2>

    <h3>On Your Device</h3>
    <p>
      All photos, metadata, extracted recipes, card information, and archived
      web content are stored locally on your device using Apple's SwiftData
      framework.
    </p>

    <h3>iCloud Sync</h3>
    <p>
      If you have iCloud enabled, Recallr syncs your data across your devices
      using Apple's CloudKit. This data is stored in your{" "}
      <strong>private</strong> iCloud database, which only you can access.
      Synced data includes:
    </p>
    <ul>
      <li>Photos and thumbnails</li>
      <li>Category names and organization</li>
      <li>Recipe and trading card metadata</li>
      <li>Archived webpage content</li>
      <li>Image feature prints (used for photo similarity matching)</li>
    </ul>
    <p>
      Apple manages the security and encryption of your iCloud data according to
      their own privacy policy.
    </p>

    <h2>Permissions</h2>
    <p>Recallr requests the following device permissions:</p>
    <ul>
      <li>
        <strong>Photo Library (read)</strong> — to import photos for cataloging
      </li>
      <li>
        <strong>Photo Library (write)</strong> — to save processed images back
        to your library when requested
      </li>
    </ul>
    <p>
      Recallr does not access your camera, location, contacts, microphone, or
      any health or fitness data.
    </p>

    <h2>Third-Party Services</h2>
    <p>
      Recallr does not include any third-party analytics, advertising, or
      tracking SDKs. The app is built entirely with Apple's first-party
      frameworks.
    </p>
    <p>The only external network requests the app makes are:</p>
    <ul>
      <li>
        Fetching webpage content from URLs you explicitly share with the app
      </li>
      <li>Downloading images from recipe websites you import</li>
      <li>
        If you configure an external API for card recognition, sending card
        images to that endpoint
      </li>
    </ul>

    <h2>Data Sharing</h2>
    <p>
      We do not sell, share, or transfer your personal data to any third party.
      We do not have access to your data — it lives on your device and in your
      private iCloud account.
    </p>

    <h2>Data Retention</h2>
    <p>
      Your data remains on your device and in iCloud for as long as you keep it.
      You can delete individual items or all data at any time from within the
      app. Uninstalling the app removes all local data. iCloud data can be
      managed through your device's iCloud storage settings.
    </p>

    <h2>Children's Privacy</h2>
    <p>
      Recallr is not directed at children under 13. We do not knowingly collect
      any personal information from children.
    </p>

    <h2>Changes to This Policy</h2>
    <p>
      If we update this policy, we will revise the "Last updated" date above.
      Continued use of the app after changes constitutes acceptance of the
      updated policy.
    </p>

    <h2>Contact</h2>
    <p>
      If you have questions about this privacy policy, contact us at:{" "}
      <a href="mailto:info@pelag.io">info@pelag.io</a>
    </p>
  </div>
);

export default PrivacyPolicy;
