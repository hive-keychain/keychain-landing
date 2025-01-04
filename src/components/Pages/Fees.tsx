import React from 'react';

const Fees = () => {
  return (
    <div className="min-h-screen bg-white pt-20 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Fees</h1>
        <div className="prose max-w-none px-60">
          <h2 className="text-xl font-semibold mt-6 mb-2 text-center">Hive Keychain, INC.</h2>
          <h3 className="text-x font-semibold mt-6 mb-2 text-center">Effective Date: September 26th, 2024</h3>
          <p className="text-gray-700 mb-4">
            Hive Keychain charges a 1% fee on HIVE purchases, operated on the third-party provider Transak. Furthermore, Keychain Swaps are subject to a 0.75% fee, starting on January 22nd, 2024 at 12AM UTC. The amount of these fees are subject to change and are displayed within the Keychain Swap Services.
          </p>
          <p className="text-gray-700 mb-4">
            We reserve the right to change all fees at any time, in our sole and absolute discretion, and will update this document accordingly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Fees;