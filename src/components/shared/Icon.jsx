import { Mail } from 'lucide-react';

export default function Icon(props) {
  return (
    <div className="icon" style={{ background: `linear-gradient(90deg, ${props.color1} 0%, ${props.color2} 100%)` }}>
      <props.icon size={20} color="#FFFFFF" strokeWidth={2} />
    </div>
  );
}