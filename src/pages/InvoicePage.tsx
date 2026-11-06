import { useEffect, useState } from 'react';
import { decode } from 'hive-uri';
import HiveQRCode from 'hive-qrcode';

// Keychain Store invoice page. Behaviour ported 1:1 from the current
// landing (hive-keychain/keychain-landing, src/components/Pages/Invoice.tsx):
// a shared invoice link looks like
//   https://hive-keychain.com/#invoice/<hive-uri payload>
// The payload rebuilds a hive://sign/op/... URI, which is decoded to
// render the payment QR, and the page auto-redirects to that URI so
// the Keychain app opens when it is installed. Everything happens
// client-side; the invoice data travels inside the URL hash.
// Presentation follows this landing's design system (invoice-*
// classes in src/index.css) instead of the current landing's
// Tailwind utilities. The QR centre logo uses the site logo already
// in public/assets (relative path, so it also works from a subpath)
// instead of the current landing's /favicon.png.
const InvoicePage = () => {
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
    <div className="invoice-page">
      <div className="wrap">
        <div className="invoice-col">
          <h1 className="invoice-title">Keychain Store Invoice</h1>
          {error ? (
            <div className="invoice-error">
              <p>{error}</p>
            </div>
          ) : (
            <>
              <p className="invoice-sub">
                Scan this QR Code to pay for this invoice with Keychain:
              </p>

              <div className="invoice-card">
                <div className="invoice-qr">
                  {decodedOp && (
                    <HiveQRCode
                      op={decodedOp}
                      size={300}
                      withLogo
                      logoImage="assets/keychain-logo.png"
                    />
                  )}
                </div>
              </div>

              {invoiceUri && (
                <a href={invoiceUri} className="btn btn-red invoice-cta">
                  Invoice link
                </a>
              )}

              <div className="invoice-help">
                <p>
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
  );
};

export default InvoicePage;
