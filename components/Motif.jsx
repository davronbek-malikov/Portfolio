// Abstract glowing AI motifs — one per project class. Pure inline SVG so they
// inherit the card's rarity color via currentColor / the --ra variable.
// Add a new `case` here when you add a project with a new `motif` keyword.

export default function Motif({ kind }) {
  const common = {
    width: "100%",
    height: "100%",
    viewBox: "0 0 320 118",
    preserveAspectRatio: "xMidYMid meet",
    style: { color: "var(--ra)" },
  };
  const stroke = "currentColor";

  switch (kind) {
    case "hub":
      return (
        <svg {...common}>
          {[ [60,30],[260,28],[55,90],[265,92],[160,18],[160,100] ].map(([x,y],i)=>(
            <line key={i} x1="160" y1="59" x2={x} y2={y} stroke={stroke} strokeWidth="1" opacity="0.35" />
          ))}
          {[ [60,30],[260,28],[55,90],[265,92],[160,18],[160,100] ].map(([x,y],i)=>(
            <circle key={"n"+i} cx={x} cy={y} r="4.5" fill={stroke} opacity="0.8" />
          ))}
          <circle cx="160" cy="59" r="15" fill="none" stroke={stroke} strokeWidth="1.5" />
          <circle cx="160" cy="59" r="8" fill={stroke} opacity="0.9" />
          <circle cx="160" cy="59" r="26" fill="none" stroke={stroke} strokeWidth="0.6" opacity="0.4" />
        </svg>
      );
    case "module":
      return (
        <svg {...common}>
          {[40,108,176,244].map((x,i)=>(
            <g key={i}>
              <rect x={x} y="34" width="52" height="50" rx="9" fill="none" stroke={stroke} strokeWidth="1.3" opacity="0.55" />
              <rect x={x+16} y="50" width="20" height="18" rx="4" fill={stroke} opacity="0.85" />
            </g>
          ))}
          <line x1="92" y1="59" x2="108" y2="59" stroke={stroke} strokeWidth="1.5" />
          <line x1="160" y1="59" x2="176" y2="59" stroke={stroke} strokeWidth="1.5" />
          <line x1="228" y1="59" x2="244" y2="59" stroke={stroke} strokeWidth="1.5" />
        </svg>
      );
    case "quant":
      return (
        <svg {...common}>
          <polyline points="30,86 70,72 100,80 140,46 180,58 220,30 290,40" fill="none" stroke={stroke} strokeWidth="2" />
          {[ [70,72],[140,46],[220,30] ].map(([x,y],i)=>(
            <circle key={i} cx={x} cy={y} r="4" fill={stroke} />
          ))}
          <line x1="30" y1="98" x2="290" y2="98" stroke={stroke} strokeWidth="0.6" opacity="0.4" />
          {[30,90,150,210,270].map((x,i)=>(<line key={i} x1={x} y1="96" x2={x} y2="100" stroke={stroke} strokeWidth="0.6" opacity="0.4" />))}
        </svg>
      );
    case "twin":
      return (
        <svg {...common}>
          {[110,210].map((cx,i)=>(
            <g key={i} opacity={i===0?1:0.55}>
              <circle cx={cx} cy="44" r="13" fill="none" stroke={stroke} strokeWidth="1.4" />
              <path d={`M ${cx-22} 96 Q ${cx} 64 ${cx+22} 96`} fill="none" stroke={stroke} strokeWidth="1.4" />
            </g>
          ))}
          <line x1="160" y1="20" x2="160" y2="100" stroke={stroke} strokeWidth="0.8" strokeDasharray="3 4" opacity="0.6" />
        </svg>
      );
    case "law":
      return (
        <svg {...common}>
          <line x1="160" y1="22" x2="160" y2="58" stroke={stroke} strokeWidth="1.6" />
          <line x1="108" y1="40" x2="212" y2="40" stroke={stroke} strokeWidth="1.6" />
          {[108,212].map((x,i)=>(
            <g key={i}>
              <line x1={x} y1="40" x2={x-16} y2="68" stroke={stroke} strokeWidth="1.2" opacity="0.7" />
              <line x1={x} y1="40" x2={x+16} y2="68" stroke={stroke} strokeWidth="1.2" opacity="0.7" />
              <path d={`M ${x-16} 68 Q ${x} 80 ${x+16} 68`} fill="none" stroke={stroke} strokeWidth="1.2" opacity="0.7" />
            </g>
          ))}
          <circle cx="160" cy="20" r="3.5" fill={stroke} />
          <rect x="150" y="92" width="20" height="6" fill={stroke} opacity="0.8" />
        </svg>
      );
    case "meeting":
      return (
        <svg {...common}>
          {[...Array(7)].map((_,i)=>{
            const x = 40 + i*38;
            const h = [22,46,30,58,34,50,24][i];
            return <rect key={i} x={x} y={59-h/2} width="10" height={h} rx="5" fill={stroke} opacity={0.45+ (h/120)} />;
          })}
          <line x1="30" y1="59" x2="294" y2="59" stroke={stroke} strokeWidth="0.6" opacity="0.3" />
        </svg>
      );
    case "forge":
      return (
        <svg {...common}>
          <circle cx="160" cy="59" r="30" fill="none" stroke={stroke} strokeWidth="1.4" opacity="0.6" />
          {[...Array(12)].map((_,i)=>{
            const a = (i/12)*Math.PI*2;
            return <circle key={i} cx={160+Math.cos(a)*30} cy={59+Math.sin(a)*30} r="2.4" fill={stroke} />;
          })}
          <circle cx="160" cy="59" r="13" fill="none" stroke={stroke} strokeWidth="1.6" />
          <path d="M154 59 l5 6 l9 -12" fill="none" stroke={stroke} strokeWidth="2" />
        </svg>
      );
    case "enterprise":
      return (
        <svg {...common}>
          {[60,160,260].map((cx,i)=>(
            <g key={i}>
              <rect x={cx-22} y="40" width="44" height="38" rx="6" fill="none" stroke={stroke} strokeWidth="1.3" opacity="0.7" />
              <line x1={cx-12} y1="52" x2={cx+12} y2="52" stroke={stroke} strokeWidth="1.2" opacity="0.6" />
              <line x1={cx-12} y1="60" x2={cx+12} y2="60" stroke={stroke} strokeWidth="1.2" opacity="0.6" />
              <line x1={cx-12} y1="68" x2={cx+4} y2="68" stroke={stroke} strokeWidth="1.2" opacity="0.6" />
            </g>
          ))}
          <line x1="82" y1="59" x2="138" y2="59" stroke={stroke} strokeWidth="1.4" strokeDasharray="2 3" />
          <line x1="182" y1="59" x2="238" y2="59" stroke={stroke} strokeWidth="1.4" strokeDasharray="2 3" />
          <path d="M150 26 l10 -8 l10 8" fill="none" stroke={stroke} strokeWidth="1.6" />
        </svg>
      );
    case "pitch":
      return (
        <svg {...common}>
          <rect x="40" y="14" width="240" height="90" rx="4" fill="none" stroke={stroke} strokeWidth="1.3" opacity="0.6" />
          <line x1="160" y1="14" x2="160" y2="104" stroke={stroke} strokeWidth="1" opacity="0.5" />
          <circle cx="160" cy="59" r="14" fill="none" stroke={stroke} strokeWidth="1" opacity="0.5" />
          <rect x="40" y="38" width="26" height="42" fill="none" stroke={stroke} strokeWidth="1" opacity="0.5" />
          <rect x="254" y="38" width="26" height="42" fill="none" stroke={stroke} strokeWidth="1" opacity="0.5" />
          {[ [92,36],[118,82],[200,30],[228,74] ].map(([x,y],i)=>(
            <circle key={i} cx={x} cy={y} r="3.2" fill={stroke} opacity="0.45" />
          ))}
          <circle cx="206" cy="58" r="5" fill={stroke} />
          <circle cx="206" cy="58" r="12" fill="none" stroke={stroke} strokeWidth="1.4" />
          <circle cx="206" cy="58" r="20" fill="none" stroke={stroke} strokeWidth="0.6" opacity="0.45" strokeDasharray="2 3" />
        </svg>
      );
    case "ml":
      return (
        <svg {...common}>
          {[40,160,280].map((x,col)=>{
            const ys = col===1 ? [30,59,88] : [40,78];
            return ys.map((y,r)=>(<circle key={col+"-"+r} cx={x} cy={y} r="5" fill="none" stroke={stroke} strokeWidth="1.4" />));
          })}
          {[40,78].map((y1)=>[30,59,88].map((y2,j)=>(
            <line key={y1+"-"+j} x1="45" y1={y1} x2="155" y2={y2} stroke={stroke} strokeWidth="0.6" opacity="0.35" />
          )))}
          {[30,59,88].map((y1)=>[40,78].map((y2,j)=>(
            <line key={"b"+y1+"-"+j} x1="165" y1={y1} x2="275" y2={y2} stroke={stroke} strokeWidth="0.6" opacity="0.35" />
          )))}
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="160" cy="59" r="26" fill="none" stroke={stroke} strokeWidth="1.4" />
          <circle cx="160" cy="59" r="6" fill={stroke} />
        </svg>
      );
  }
}
