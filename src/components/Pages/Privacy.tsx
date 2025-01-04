import React from 'react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white pt-20 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Privacy Policy</h1>
        <div className="prose max-w-none px-60">
          <h2 className="text-xl font-semibold mt-6 mb-2 text-center">Hive Keychain, INC.</h2>
          <h3 className="text-l font-semibold mt-6 mb-2 text-center">Effective Date: November 29th, 2022</h3>
          <p className="text-gray-700 mb-4">
            Hive Keychain Ltd. ("us", "we", or "our") provides and operates the Hive Keychain Browser Extensions and mobile Apps (the "Services").
          </p>
          <p className="text-gray-700 mb-4">
            This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Services and the choices you have associated with that data.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">1. Information Collection And Use</h3>
          <p className="text-gray-700 mb-4">
            The Services do not collect any personal data of any kind. Account names and keys entered into the Services are stored locally and are securely encrypted using the user-chosen password and/or biometrics (on Hive Keychain mobile Apps).
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">2. Usage Data</h3>
          <h4 className="text-md font-semibold mt-4 mb-2">1. Mobile Apps</h4>
          <p className="text-gray-700 mb-4">
            On our Mobile Apps, usage data such as navigation events, usage time, device type and country are collected anonymously (no username attached) using Google Analytics. Their Privacy Policy can be found <a href="https://support.google.com/analytics/answer/6004245?hl=en" className="text-red-700">here</a>.
          </p>
          <p className="text-gray-700 mb-4">
            The App Stores used by users to download the Apps also collect information. We recommend reading <a href="https://policies.google.com/privacy?hl=en-US" className="text-red-700">Google Play</a>'s and <a href="https://www.apple.com/legal/privacy/en-ww/" className="text-red-700">Apple App Store</a>'s Privacy Policies to learn more about their usage of users data.
          </p>

          <h4 className="text-md font-semibold mt-4 mb-2">2. Browser Extensions</h4>
          <p className="text-gray-700 mb-4">
            On our Extensions, if the user chooses to participate in Keychain analytics, usage data such as navigation events, usage time, types of operations, device type and country are collected anonymously (no username attached) using Google Analytics. Their Privacy Policy can be found here.
          </p>
          <p className="text-gray-700 mb-4">
            The App Stores used by users to download the Apps also collect information. We recommend reading <a href="https://policies.google.com/privacy?hl=en-US" className="text-red-700">Chrome Store</a>'s and <a href="https://www.mozilla.org/en-US/privacy/websites/" className="text-red-700">Mozilla Add-On</a>Mozilla Add-On's Privacy Policies to learn more about their usage of users data.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">3. Transfer Of Data</h3>
          <p className="text-gray-700 mb-4">
            No personal data stored within the Services is ever transferred or transmitted off of the user's device at any time or for any reason, aside from the username, that is used as follows. On all our Services, the username is sent to an API to retrieve on-chain specific data such as delegation information, but is not stored anywhere. On our Mobile Apps, the username is sent to HiveAuth when the user decides to initiate a HiveAuth session.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">4. Links To Other Sites</h3>
          <p className="text-gray-700 mb-4">
            Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.
          </p>
          <p className="text-gray-700 mb-4">
            We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">5. Changes To This Privacy Policy</h3>
          <p className="text-gray-700 mb-4">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>
          <p className="text-gray-700 mb-4">
            We will let you know via a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.
          </p>
          <p className="text-gray-700 mb-4">
            You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">6. Contact Us</h3>
          <p className="text-gray-700 mb-4">
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <p className="text-gray-700 mb-4">
            By email: <a href="mailto:privacy@hive-keychain.com" className=" text-red-700">privacy@hive-keychain.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;