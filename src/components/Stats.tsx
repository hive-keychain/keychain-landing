export default function Stats() {
  return (
      <section className="block" style={{ paddingTop: '8px' }}>
        <div className="wrap">
          <div className="stats-band reveal">
            <div className="stats-grid">
              <div className="stat">
                <div className="num">85K+</div>
                <div className="lbl">Users</div>
              </div>
              <div className="stat">
                <div className="num">60+</div>
                <div className="lbl">dApp integrations</div>
              </div>
              <div className="stat">
                <div className="num">Since 2019</div>
                <div className="lbl">Supporting the Hive ecosystem</div>
              </div>
              <div className="stat">
                <div className="num">Open source</div>
                <div className="lbl">Public extension and mobile code</div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
