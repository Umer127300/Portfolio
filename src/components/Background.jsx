import "./background.css";

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050816]">
      {/* Stars */}
      {[...Array(120)].map((_, i) => (
        <span
          key={i}
          className="star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      {/* Shooting Stars */}
      <span className="shooting shooting1"></span>
      <span className="shooting shooting2"></span>
      <span className="shooting shooting3"></span>

      {/* Purple Glow */}
      <div className="absolute w-125 h-125 rounded-full bg-purple-700/20 blur-[140px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
};

export default Background;