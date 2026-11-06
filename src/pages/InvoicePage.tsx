import { useEffect, useRef, useState } from 'react';
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
  const [copied, setCopied] = useState(false);
  const copiedTimer = useRef<number | null>(null);

  // The invoice link is a hive:// URI. On mobile the page often opens
  // inside another app, where the address cannot be selected, so the
  // copy control writes that URI to the clipboard directly.
  const copyInvoiceLink = async () => {
    if (!invoiceUri) return;
    let ok = false;
    try {
      await navigator.clipboard.writeText(invoiceUri);
      ok = true;
    } catch {
      const input = document.createElement('textarea');
      input.value = invoiceUri;
      input.setAttribute('readonly', '');
      input.style.position = 'fixed';
      input.style.left = '0';
      input.style.top = '0';
      input.style.opacity = '0';
      document.body.appendChild(input);
      input.focus();
      input.select();
      ok = document.execCommand('copy');
      document.body.removeChild(input);
    }
    if (!ok) return;
    setCopied(true);
    if (copiedTimer.current) window.clearTimeout(copiedTimer.current);
    copiedTimer.current = window.setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    return () => {
      if (copiedTimer.current) window.clearTimeout(copiedTimer.current);
    };
  }, []);

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
                <div className="invoice-link">
                  <a href={invoiceUri} className="invoice-link-url" title={invoiceUri}>
                    {invoiceUri}
                  </a>
                  <button
                    type="button"
                    className="invoice-copy"
                    onClick={copyInvoiceLink}
                    aria-label={copied ? 'Invoice link copied' : 'Copy invoice link'}
                  >
                    {copied ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
                    )}
                  </button>
                </div>
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
