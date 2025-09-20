import '../../styles/components/shared.css';

export default function Emoji({ emoji: EmojiComponent, color1, color2, fontsize }) {
  const backgroundStyle = color1 && color2
    ? { background: `linear-gradient(90deg, ${color1} 0%, ${color2} 100%)` }
    : { background: 'transparent' };

  return (
    <div className="emoji-icon" style={backgroundStyle}>
      <p style={{ fontSize: fontsize }}>{EmojiComponent}</p>
    </div>
  );
}