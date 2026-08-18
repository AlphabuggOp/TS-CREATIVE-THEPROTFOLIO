type Props = {
  url: string
  href: string
  title: string
  shot?: string
  caption: string
}

export default function BrowserFrame({ url, href, title, shot, caption }: Props) {
  return (
    <a className="frame" href={href} target="_blank" rel="noreferrer" data-hot>
      <div className="chrome">
        <span className="dots"><i /><i /><i /></span>
        <span className="url t-mono">{url.replace('https://', '')}</span>
        <span className="go t-mono">OPEN LIVE →</span>
      </div>
      <div className="viewport">
        {shot ? (
          <img src={shot} alt={title} />
        ) : (
          <div className="fallback">
            <p className="t-display">{title}</p>
            <p className="t-mono t-dim">{caption}</p>
          </div>
        )}
      </div>
      <style>{`
        .frame {
          display: block; border: 1px solid rgba(103,232,249,.2);
          background: #0b101c; border-radius: 10px; overflow: hidden;
          transition: transform .35s var(--ease-out), box-shadow .35s, border-color .35s;
        }
        .frame:hover {
          transform: translateY(-8px);
          border-color: rgba(103,232,249,.55);
          box-shadow: 0 24px 70px rgba(0,0,0,.45), 0 0 40px rgba(103,232,249,.12);
        }
        .chrome {
          display: flex; align-items: center; gap: 12px;
          padding: 10px 12px; background: #0a0e18;
          border-bottom: 1px solid rgba(103,232,249,.12);
        }
        .dots { display: flex; gap: 6px; }
        .dots i { width: 8px; height: 8px; border-radius: 50%; background: #2a3344; display: block; }
        .dots i:nth-child(1) { background: #ff5f57; }
        .dots i:nth-child(2) { background: #febc2e; }
        .dots i:nth-child(3) { background: #28c840; }
        .url { flex: 1; font-size: 10px; letter-spacing: .08em; color: var(--ghost); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .go { font-size: 9px; letter-spacing: .18em; color: var(--ember); opacity: 0; transition: opacity .25s; }
        .frame:hover .go { opacity: 1; }
        .viewport { aspect-ratio: 16/9; background: #07090f; overflow: hidden; }
        .viewport img { width: 100%; height: 100%; object-fit: cover; object-position: top center; }
        .fallback {
          height: 100%; display: grid; place-items: center; text-align: center; padding: 24px;
          background:
            radial-gradient(circle at 50% 20%, rgba(103,232,249,.12), transparent 46%),
            #07090f;
        }
        .fallback .t-display { letter-spacing: .18em; font-size: 28px; }
        .fallback .t-mono { margin-top: 10px; font-size: 11px; letter-spacing: .16em; }
      `}</style>
    </a>
  )
}
