export default function Stats() {
  return (
      <section className="block" style={{ paddingTop: '8px' }}>
        <div className="wrap">
          <div className="stats-band reveal">
            <div className="stats-grid">
              <div className="stat">
                <div className="num">4.8<em>★</em></div>
                <div className="lbl">Average rating in the app stores</div>
              </div>
              <div className="stat">
                <div className="num">200K+</div>
                <div className="lbl">Downloads, extension & mobile</div>
              </div>
              <div className="stat">
                <div className="num">7+</div>
                <div className="lbl">Years live securing accounts</div>
              </div>
              <div className="stat">
                <div className="num">Audited</div>
                <div className="lbl">Independent security audits · open source code</div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
