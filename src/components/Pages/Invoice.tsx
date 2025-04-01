import React, { useEffect, useState } from 'react';
import { decode } from 'hive-uri';
import HiveQRCode from 'hive-qrcode';

const Invoice = () => {
  const [invoiceUri, setInvoiceUri] = useState<string>('');
  const [decodedOp, setDecodedOp] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Extract the invoice data from URL hash
    const hash = window.location.hash;
    if (hash && hash.startsWith('#invoice/')) {
      const invoiceData = hash.replace('#invoice/', '');
      
      try {
        const uri = `hive://sign/op/${invoiceData}`;
        setInvoiceUri(uri);
        
        const decoded = decode(uri);
        setDecodedOp(decoded.tx.operations[0]);
        
        // Auto-redirect to Hive app
        window.location.href = uri;
      } catch (error) {
        console.error('Error decoding Hive URI:', error);
        setError('Error al procesar la factura. Por favor, verifica que el enlace sea correcto.');
      }
    } else {
      setError('No se encontró información de la factura en la URL.');
    }
  }, []);

  // Listen for hash changes
  useEffect(() => {
    const handleHashChange = () => {
      window.location.reload();
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white pt-20 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Keychain Store Invoice</h1>
        <div className="prose max-w-none px-4 md:px-60">
          <div className="flex flex-col items-center">
            {error ? (
              <div className="bg-red-50 p-6 rounded-lg shadow-sm max-w-2xl mx-auto">
                <p className="text-red-600 text-center">{error}</p>
              </div>
            ) : (
              <>
                <p className="text-gray-700 mb-6 text-center">
                  Scan this QR Code to pay for this invoice with Keychain:
                </p>
                
                <div className="mb-8 flex justify-center">
                  {decodedOp && (
                    <HiveQRCode
                      op={decodedOp}
                      size={300}
                      withLogo
                      logoImage="/favicon.png"
                    />
                  )}
                </div>
                
                {invoiceUri && (
                  <a 
                    href={invoiceUri}
                    className="text-red-600 hover:text-red-700 font-medium mb-6"
                  >
                    Invoice link
                  </a>
                )}
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm max-w-2xl mx-auto">
                  <p className="text-gray-700 text-center">
                    If you are already on your mobile and the App you are using didn't
                    redirect you automatically to the Keychain App, select "Open in Browser"
                    among your App options, or copy paste this link in your usual browser.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;