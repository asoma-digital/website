export default function Icon({ icon: IconComponent, color1, color2 }) {
  const backgroundStyle = color1 && color2
    ? { background: `linear-gradient(90deg, ${color1} 0%, ${color2} 100%)` }
    : { background: 'transparent' };

  return (
    <div className="icon" style={backgroundStyle}>
      <IconComponent size={20} color="#FFFFFF" strokeWidth={2} />
    </div>
  );
}