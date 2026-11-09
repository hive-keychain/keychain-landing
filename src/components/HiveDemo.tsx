import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

// ===== Hive operations — LIVE via Hive Keychain extension =====
// Change this to point the demo vote at a different post.
const VOTE_TARGET = {
  author: 'keychain',
  permlink: 'hive-keychain-development-proposal-2026',
  title: 'Hive Keychain Development Proposal 2026',
};

function hasKeychain() {
  return typeof window !== 'undefined' && !!window.hive_keychain;
}

export default function HiveDemo() {
  const [user, setUserState] = useState<string | null>(null);
  const userRef = useRef<string | null>(null);
  const [detected, setDetected] = useState(false);
  const [detectMsg, setDetectMsg] = useState('');
  const [authMsg, setAuthMsg] = useState<{ text: string; kind: string }>({ text: '', kind: '' });
  const [username, setUsername] = useState('');
  const [signBusy, setSignBusy] = useState(false);
  const [step, setStep] = useState(1);
  const [done, setDone] = useState<Record<number, boolean>>({});
  const [following, setFollowing] = useState(false);
  const [followBusy, setFollowBusy] = useState(false);
  const [followSub, setFollowSub] = useState(
    'Follow the official Keychain account and its posts will show in your Hive feed.',
  );
  const [voted, setVoted] = useState(false);
  const [voteBusy, setVoteBusy] = useState(false);
  const [voteSub, setVoteSub] = useState('Optional: sign in to vote on this post.');
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [postBusy, setPostBusy] = useState(false);
  const [posted, setPosted] = useState(false);
  const [postSub, setPostSub] = useState<ReactNode>(
    'Optional: publishing broadcasts a post to Hive after you approve it in Keychain.',
  );
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const postTitleRef = useRef<HTMLInputElement | null>(null);
  const postBodyRef = useRef<HTMLTextAreaElement | null>(null);

  const setUser = (u: string | null) => {
    userRef.current = u;
    setUserState(u);
  };

  const connText = user
    ? '● Signed in as @' + user
    : detected
      ? '● Keychain detected'
      : '● Not signed in';
  const connColor = user || detected ? '#57d98e' : '#f5a623';

  function refreshDetection() {
    const has = hasKeychain();
    if (userRef.current) return has;
    setDetected(has);
    return has;
  }

  // Extension injects after load on some browsers — poll briefly.
  useEffect(() => {
    refreshDetection();
    let tries = 0;
    const timer = window.setInterval(() => {
      tries++;
      if (refreshDetection() || tries > 20) window.clearInterval(timer);
    }, 300);
    return () => window.clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function recheck() {
    const has = refreshDetection();
    setDetectMsg(
      has
        ? ''
        : 'Still not detected. Make sure the extension is installed and unlocked, then reload the page.',
    );
    if (has) usernameRef.current?.focus();
  }

  // ===== Stepper state =====
  function goToStep(n: number) {
    if (n > 1 && !userRef.current) n = 1;
    setStep(n);
  }
  function markDone(n: number, advanceTo?: number) {
    setDone((prev) => ({ ...prev, [n]: true }));
    if (advanceTo) {
      window.setTimeout(() => {
        if (userRef.current) goToStep(advanceTo);
      }, 900);
    }
  }
  function stepClass(n: number) {
    const cls: string[] = [];
    if (n === step) cls.push('current');
    if (done[n]) cls.push('done');
    if (n === 1 || user) cls.push('clickable');
    return cls.join(' ');
  }
  function stepClick(n: number) {
    if (n === 1 || userRef.current) goToStep(n);
  }

  // The vote always targets the fixed post in VOTE_TARGET above — no
  // live lookup, so this step renders instantly and can't fail to load.
  function setSignedIn(raw: string) {
    setUser(raw);
    setVoteSub('Your 100% upvote will open in Keychain for confirmation.');
    markDone(1, 2);
  }
  function signOut() {
    setUser(null);
    setDone({});
    setStep(1);
    setVoted(false);
    setVoteSub('Optional: sign in to vote on this post.');
    refreshDetection();
  }

  // Sign in: handshake + sign a buffer with the posting key
  function signIn() {
    if (!hasKeychain()) {
      refreshDetection();
      setAuthMsg({ text: 'Keychain extension not detected. Install it and reload.', kind: 'err' });
      return;
    }
    const raw = username.trim().replace(/^@/, '').toLowerCase();
    if (!/^[a-z0-9\-\.]{3,16}$/.test(raw)) {
      setAuthMsg({ text: 'Enter a valid Hive username first.', kind: 'err' });
      usernameRef.current?.focus();
      return;
    }
    setSignBusy(true);
    setAuthMsg({ text: 'Confirm the signature request in the Keychain popup…', kind: '' });
    const message = 'Sign in to the Keychain homepage demo · ' + new Date().toISOString();
    const kc = window.hive_keychain!;
    const doSign = () => {
      try {
        kc.requestSignBuffer(raw, message, 'Posting', (res) => {
          setSignBusy(false);
          if (res && res.success) {
            setSignedIn(raw);
          } else {
            setAuthMsg({
              text:
                res && (res.message || res.error)
                  ? 'Keychain: ' + (res.message || res.error)
                  : 'Signing was cancelled or failed in Keychain.',
              kind: 'err',
            });
          }
        });
      } catch {
        setSignBusy(false);
        setAuthMsg({
          text: 'Keychain could not sign. Make sure the account is in Keychain and the extension is unlocked.',
          kind: 'err',
        });
      }
    };
    if (kc.requestHandshake) {
      kc.requestHandshake(() => {
        doSign();
      });
    } else {
      doSign();
    }
  }
  function onUsernameKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.preventDefault();
      signIn();
    }
  }

  // Vote on the fixed target post (VOTE_TARGET) — requestVote(username, permlink, author, weight, cb)
  function vote() {
    if (!user) {
      setVoteSub('Sign in first.');
      return;
    }
    if (!hasKeychain()) {
      setVoteSub('Keychain extension not detected.');
      return;
    }
    setVoteBusy(true);
    setVoteSub('Confirm the vote in Keychain…');
    try {
      window.hive_keychain!.requestVote(user, VOTE_TARGET.permlink, VOTE_TARGET.author, 10000, (res) => {
        setVoteBusy(false);
        if (res && res.success) {
          setVoted(true);
          setVoteSub('Vote broadcast to Hive for @' + VOTE_TARGET.author + '/' + VOTE_TARGET.permlink);
          markDone(3, 4);
        } else {
          setVoted(false);
          setVoteSub(
            res && (res.message || res.error)
              ? 'Keychain: ' + (res.message || res.error)
              : 'Vote was cancelled or failed. You may have already voted on this post.',
          );
        }
      });
    } catch {
      setVoteBusy(false);
      setVoted(false);
      setVoteSub('Could not open Keychain for voting.');
    }
  }

  // Follow @keychain — custom_json "follow"
  function toggleFollow() {
    if (!user) {
      setFollowSub('Sign in first.');
      return;
    }
    if (user === 'keychain') {
      setFollowSub('You are @keychain, so you cannot follow yourself.');
      return;
    }
    if (!hasKeychain()) {
      setFollowSub('Keychain extension not detected.');
      return;
    }
    const isFollowing = following;
    const what = isFollowing ? [] : ['blog'];
    const json = JSON.stringify(['follow', { follower: user, following: 'keychain', what }]);
    setFollowBusy(true);
    setFollowSub('Confirm in Keychain…');
    try {
      window.hive_keychain!.requestCustomJson(
        user,
        'follow',
        'Posting',
        json,
        isFollowing ? 'Unfollow @keychain' : 'Follow @keychain',
        (res) => {
          setFollowBusy(false);
          if (res && res.success) {
            if (isFollowing) {
              setFollowing(false);
              setFollowSub('Unfollowed @keychain.');
              setDone((prev) => {
                const next = { ...prev };
                delete next[2];
                return next;
              });
            } else {
              setFollowing(true);
              setFollowSub('You now follow @keychain. Its posts will show in your Hive feed.');
              markDone(2, 3);
            }
          } else {
            setFollowSub(
              res && (res.message || res.error)
                ? 'Keychain: ' + (res.message || res.error)
                : 'Follow was cancelled or failed in Keychain.',
            );
          }
        },
      );
    } catch {
      setFollowBusy(false);
      setFollowSub('Could not open Keychain for this action.');
    }
  }

  // Post — requestPost, falling back to requestBroadcast(comment)
  function publish() {
    if (!user) {
      setPostSub('Sign in first.');
      return;
    }
    const title = postTitle.trim();
    const bodyText = postBody.trim();
    if (!title) {
      setPostSub('Add a title for your post first.');
      postTitleRef.current?.focus();
      return;
    }
    if (!bodyText) {
      setPostSub('Write the post body first. Publishing will ask Keychain to sign and broadcast it.');
      postBodyRef.current?.focus();
      return;
    }
    if (!hasKeychain()) {
      setPostSub('Keychain extension not detected.');
      return;
    }
    const slug =
      title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
        .slice(0, 60) || 'post';
    const permlink = slug + '-' + Date.now().toString(36);
    const jsonMetadata = JSON.stringify({
      tags: ['keychain'],
      app: 'keychain-homepage-demo/1.0',
      format: 'markdown',
    });
    const author = user;
    setPostBusy(true);
    setPostSub('Confirm the post in Keychain…');
    const doneCb = (res: { success: boolean; message?: string; error?: string }) => {
      setPostBusy(false);
      if (res && res.success) {
        setPosted(true);
        setPostSub(
          <>
            Posted to Hive as @{author} ·{' '}
            <a
              href={'https://peakd.com/@' + author + '/' + permlink}
              target="_blank"
              rel="noopener"
              style={{ color: '#57d98e', fontWeight: 800 }}
            >
              View your post
            </a>
          </>,
        );
        setPostTitle('');
        setPostBody('');
        markDone(4);
      } else {
        setPosted(false);
        setPostSub(
          res && (res.message || res.error)
            ? 'Keychain: ' + (res.message || res.error)
            : 'Publishing was cancelled or failed in Keychain.',
        );
      }
    };
    try {
      const kc = window.hive_keychain!;
      if (typeof kc.requestPost === 'function') {
        kc.requestPost(author, title, bodyText, 'keychain', '', jsonMetadata, permlink, '', doneCb);
      } else if (typeof kc.requestBroadcast === 'function') {
        const ops = [
          [
            'comment',
            {
              parent_author: '',
              parent_permlink: 'keychain',
              author,
              permlink,
              title,
              body: bodyText,
              json_metadata: jsonMetadata,
            },
          ],
        ];
        kc.requestBroadcast(author, ops, 'Posting', doneCb);
      } else {
        setPostBusy(false);
        setPosted(false);
        setPostSub('This Keychain version does not expose posting from web pages.');
      }
    } catch {
      setPostBusy(false);
      setPosted(false);
      setPostSub('Could not open Keychain for posting.');
    }
  }

  return (
      <div className="demo-card">
        <div className="d-head"><span className="d-net"><span className="ico" style={{ background: '#e31337' }}><svg width="14" height="12" viewBox="0 0 220 190" fill="currentColor"><path d="M157.27,107.26a1,1,0,0,1,.82,1.42l-46.75,80.85a1,1,0,0,1-.82.47H81.94a.94.94,0,0,1-.81-1.42l46.75-80.85a.94.94,0,0,1,.81-.47ZM129.48,84.09a1,1,0,0,1-.82-.47L81.13,1.42A.94.94,0,0,1,81.94,0h28.58a1,1,0,0,1,.82.47l47.53,82.2a.94.94,0,0,1-.81,1.42Z" /><path d="M135.13,1.42A.94.94,0,0,1,136,0h28.62a.93.93,0,0,1,.81.47l54.49,94.06a.93.93,0,0,1,0,.94l-54.49,94.06a.93.93,0,0,1-.81.47H136a.94.94,0,0,1-.82-1.42L189.34,95Zm-23.26,93.1a1,1,0,0,1,0,1L57.13,189.53a1,1,0,0,1-1.65,0L.13,95.48a1,1,0,0,1,0-1L54.87.47a1,1,0,0,1,1.65,0Z" /></svg></span>Hive operations</span><span className="d-live" id="hiveConnStatus" style={{ color: connColor }}>{connText}</span></div>
        <ol className="hive-steps" id="hiveSteps" aria-label="Hive operations steps">
          <li data-step="1" className={stepClass(1)} onClick={() => stepClick(1)}><span className="sdot">{done[1] ? '✓' : '1'}</span><span>Sign in</span></li>
          <li data-step="2" className={stepClass(2)} onClick={() => stepClick(2)}><span className="sdot">{done[2] ? '✓' : '2'}</span><span>Follow</span></li>
          <li data-step="3" className={stepClass(3)} onClick={() => stepClick(3)}><span className="sdot">{done[3] ? '✓' : '3'}</span><span>Vote</span></li>
          <li data-step="4" className={stepClass(4)} onClick={() => stepClick(4)}><span className="sdot">{done[4] ? '✓' : '4'}</span><span>Post</span></li>
        </ol>
        <div className="hive-step" id="hiveStep1" hidden={step !== 1}>
          <div className="demo-route" id="hiveAuthBox">
            <div className="r-lbl">Step 1 · Sign in with Keychain · signature only</div>
            <div id="hiveNoExtension" hidden={detected || !!user}>
              <div className="r-main" style={{ fontSize: '15px' }}>Keychain extension not detected</div>
              <div className="r-sub">This demo is live: it needs the Hive Keychain browser extension. Install it, unlock it, then check again. On mobile, open this page inside the Keychain app browser.</div>
              <div className="op-row"><a className="op-btn link-btn" href="https://hive-keychain.com" target="_blank" rel="noopener">Get Keychain</a><button type="button" className="op-btn ghost" id="hiveRecheckBtn" onClick={recheck}>Check again</button></div>
              <div className="r-sub hive-auth-msg" id="hiveDetectMsg">{detectMsg}</div>
            </div>
            <div id="hiveSignInForm" hidden={!detected || !!user}>
              <div className="r-sub" style={{ marginTop: '4px' }}>Enter your Hive username. Keychain will ask you to sign a short message to prove it is you. This sign-in signature is not broadcast and does not change your account.</div>
              <div className="op-row">
                <input className="op-input" id="hiveUsernameInput" type="text" placeholder="@yourusername" aria-label="Your Hive username" autoComplete="off" autoCapitalize="none" spellCheck="false" value={username} onChange={(e) => setUsername(e.target.value)} onKeyDown={onUsernameKeyDown} ref={usernameRef} />
                <button type="button" className="op-btn" id="hiveSignInBtn" disabled={signBusy} onClick={signIn}>{signBusy ? 'Check Keychain…' : 'Sign in with Keychain'}</button>
              </div>
              <div className={'r-sub hive-auth-msg' + (authMsg.kind ? ' ' + authMsg.kind : '')} id="hiveAuthMsg" role="status" aria-live="polite">{authMsg.text}</div>
            </div>
            <div id="hiveSignedIn" hidden={!user}>
              <div className="op-row" style={{ marginTop: '4px' }}><span className="hive-signed-badge">✓ Signed in as <span id="hiveSignedUser">{user ? '@' + user : '@account'}</span></span><button type="button" className="op-btn ghost" id="hiveSignOutBtn" onClick={signOut}>Disconnect</button></div>
              <div className="r-sub">You’re connected. The next three steps are optional real Hive actions. Follow, vote, or publish only if you want to; each is broadcast only after you approve it in Keychain.</div>
            </div>
          </div>
        </div>
        <div className="hive-step" id="hiveStep2" hidden={step !== 2}>
          <div className="demo-route">
            <div className="r-lbl">Step 2 · Follow · optional onchain action</div>
            <div className="op-row" style={{ marginTop: '2px' }}><span className="r-main" style={{ fontSize: '15px', marginTop: '0' }}>@keychain</span><button type="button" className={following ? 'op-btn done' : 'op-btn ghost'} id="hiveFollowBtn" disabled={followBusy} onClick={toggleFollow}>{followBusy ? 'Check Keychain…' : following ? '✓ Following @keychain' : 'Follow @keychain'}</button></div>
            <div className="r-sub" id="hiveFollowSub" role="status" aria-live="polite">{followSub}</div>
          </div>
          <div className="hive-nav"><button type="button" className="op-btn ghost" data-hive-back="1" onClick={() => goToStep(1)}>← Back</button><span className="spacer" /><button type="button" className="hive-skip" data-hive-skip="3" onClick={() => goToStep(3)}>Skip for now →</button></div>
        </div>
        <div className="hive-step" id="hiveStep3" hidden={step !== 3}>
          <div className="demo-route">
            <div className="r-lbl">Step 3 · Vote · optional onchain action</div>
            <div className="r-main" style={{ fontSize: '15px' }}><a className="hive-post-link" id="hivePostLink" href="https://peakd.com/@keychain/hive-keychain-development-proposal-2026" target="_blank" rel="noopener"><span id="hivePostTitle">Hive Keychain Development Proposal 2026</span></a></div>
            <div className="r-sub" id="hivePostMeta">By @keychain · Tap the title to read it on PeakD</div>
            <div className="op-row"><button type="button" className={'op-btn' + (voted ? ' done' : '')} id="hiveVoteBtn" disabled={!user || voteBusy} onClick={vote}>{voteBusy ? 'Check Keychain…' : voted ? '✓ Upvoted · 100%' : 'Optional: upvote · 100%'}</button><span className="r-sub" id="hiveVoteSub" style={{ marginTop: '0' }} role="status" aria-live="polite">{voteSub}</span></div>
          </div>
          <div className="hive-nav"><button type="button" className="op-btn ghost" data-hive-back="2" onClick={() => goToStep(2)}>← Back</button><span className="spacer" /><button type="button" className="hive-skip" data-hive-skip="4" onClick={() => goToStep(4)}>Skip for now →</button></div>
        </div>
        <div className="hive-step" id="hiveStep4" hidden={step !== 4}>
          <div className="demo-route">
            <div className="r-lbl">Step 4 · Post · optional onchain action</div>
            <div style={{ display: 'grid', gap: '8px', marginTop: '8px' }}>
              <input className="op-input" id="hivePostTitleInput" type="text" placeholder="Post title" aria-label="Hive post title" style={{ flex: 'none', width: '100%' }} value={postTitle} onChange={(e) => setPostTitle(e.target.value)} ref={postTitleRef} />
              <textarea className="op-input op-textarea" id="hivePostInput" placeholder="Write something to Hive…" aria-label="Write a Hive post" value={postBody} onChange={(e) => setPostBody(e.target.value)} ref={postBodyRef} />
            </div>
            <div className="op-row"><button type="button" className={'op-btn' + (posted ? ' done' : '')} id="hivePostBtn" disabled={postBusy} onClick={publish}>{postBusy ? 'Check Keychain…' : posted ? '✓ Published' : 'Optional: publish post'}</button></div>
            <div className="r-sub" id="hivePostSub" role="status" aria-live="polite">{postSub}</div>
          </div>
          <div className="hive-nav"><button type="button" className="op-btn ghost" data-hive-back="3" onClick={() => goToStep(3)}>← Back</button></div>
          <p className="try-hint" style={{ color: '#57d98e' }}>The sign-in signature is not broadcast. Follow, vote, and post are real Hive broadcasts only when you approve them.</p>
        </div>
      </div>
  );
}
