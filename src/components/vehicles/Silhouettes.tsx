import { cn } from "@/lib/utils";

type SilhouetteProps = {
  className?: string;
  glowColor?: "primary" | "accent";
};

const strokeStyle = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/**
 * 1. Electric Scooter Silhouette
 */
export function ScooterSilhouette({ className, glowColor = "accent" }: SilhouetteProps) {
  const glowHex = glowColor === "primary" ? "#00E676" : "#22D3EE";

  return (
    <svg
      viewBox="0 0 340 200"
      className={cn("h-auto w-full text-foreground/85 transition-all duration-300", className)}
      aria-label="Electric Scooter Silhouette"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="scooterBodyGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#94a3b8" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#334155" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="scooterGlow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#00E676" />
          <stop offset="100%" stopColor="#22D3EE" />
        </linearGradient>
        <filter id="scooterNeon" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Ground Shadow & Reflection */}
      <ellipse cx="170" cy="178" rx="140" ry="8" fill="#000000" opacity="0.6" filter="blur(6px)" />

      {/* Rear Wheel & Rim */}
      <circle cx="75" cy="145" r="36" stroke="#475569" strokeWidth="6" fill="#0b1120" />
      <circle cx="75" cy="145" r="26" stroke="#94a3b8" strokeWidth="2" strokeDasharray="6 4" fill="none" />
      <circle cx="75" cy="145" r="10" fill="url(#scooterBodyGrad)" />

      {/* Front Wheel & Rim */}
      <circle cx="265" cy="145" r="36" stroke="#475569" strokeWidth="6" fill="#0b1120" />
      <circle cx="265" cy="145" r="26" stroke="#94a3b8" strokeWidth="2" strokeDasharray="6 4" fill="none" />
      <circle cx="265" cy="145" r="10" fill="url(#scooterBodyGrad)" />

      {/* Main Lower Chassis / Battery Pan */}
      <path
        d="M75 145 L115 145 C125 145 135 148 145 148 L195 148 C205 148 212 142 218 135 L240 100"
        {...strokeStyle}
        strokeWidth="3.5"
        stroke="#94a3b8"
      />

      {/* Front Fork & Steering Column */}
      <path d="M265 145 L238 65 L228 50" {...strokeStyle} strokeWidth="3" stroke="#e2e8f0" />
      {/* Handlebar & Brake Lever */}
      <path d="M218 50 L248 48 M248 48 L256 52" {...strokeStyle} strokeWidth="3" stroke="#ffffff" />

      {/* Sleek Aerodynamic Front Apron */}
      <path
        d="M238 65 L255 85 C260 90 262 98 258 115 L245 130"
        {...strokeStyle}
        strokeWidth="2.5"
        stroke="url(#scooterBodyGrad)"
      />

      {/* Dual LED Headlight Accent */}
      <path
        d="M255 82 L268 85"
        stroke="url(#scooterGlow)"
        strokeWidth="3.5"
        filter="url(#scooterNeon)"
        strokeLinecap="round"
      />

      {/* Aerodynamic Seat & Rear Tail */}
      <path
        d="M100 105 C115 95 140 92 180 95 C190 95 195 102 195 112 L195 140 H135 L100 115 Z"
        fill="url(#scooterBodyGrad)"
        opacity="0.25"
      />
      <path
        d="M95 105 C115 94 145 92 195 96 C202 96 205 102 205 110"
        {...strokeStyle}
        strokeWidth="3"
        stroke="#ffffff"
      />

      {/* Rear LED Taillight */}
      <path
        d="M90 106 L82 108"
        stroke="#ff3b30"
        strokeWidth="3"
        strokeLinecap="round"
        filter="url(#scooterNeon)"
      />

      {/* Electric Energy Pulse Line */}
      <path
        d="M125 125 L165 125 L175 115 L190 115"
        stroke={glowHex}
        strokeWidth="2"
        strokeDasharray="4 4"
        opacity="0.85"
      />
    </svg>
  );
}

/**
 * 2. Electric Bike Silhouette
 */
export function BikeSilhouette({ className, glowColor = "primary" }: SilhouetteProps) {
  const glowHex = glowColor === "primary" ? "#00E676" : "#22D3EE";

  return (
    <svg
      viewBox="0 0 360 200"
      className={cn("h-auto w-full text-foreground/85 transition-all duration-300", className)}
      aria-label="Electric Bike Silhouette"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="bikeFrameGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="40%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
        <filter id="bikeGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Ground Shadow */}
      <ellipse cx="180" cy="180" rx="150" ry="8" fill="#000000" opacity="0.65" filter="blur(6px)" />

      {/* Rear Wheel */}
      <circle cx="75" cy="140" r="38" stroke="#334155" strokeWidth="7" fill="#0b1120" />
      <circle cx="75" cy="140" r="28" stroke="#64748b" strokeWidth="2" strokeDasharray="8 4" fill="none" />
      <circle cx="75" cy="140" r="12" fill="url(#bikeFrameGrad)" />

      {/* Front Wheel */}
      <circle cx="285" cy="140" r="38" stroke="#334155" strokeWidth="7" fill="#0b1120" />
      <circle cx="285" cy="140" r="28" stroke="#64748b" strokeWidth="2" strokeDasharray="8 4" fill="none" />
      <circle cx="285" cy="140" r="12" fill="url(#bikeFrameGrad)" />

      {/* Swingarm & Monoshock */}
      <path d="M75 140 L145 135 L170 105" {...strokeStyle} strokeWidth="3" stroke="#94a3b8" />

      {/* Inverted Front Suspension Forks */}
      <path d="M285 140 L245 65 L235 50" {...strokeStyle} strokeWidth="3.5" stroke="#cbd5e1" />
      {/* Clip-on Handlebars */}
      <path d="M225 52 L248 48 M248 48 L258 52" {...strokeStyle} strokeWidth="3" stroke="#ffffff" />

      {/* Aggressive Tank & Frame Geometry */}
      <path
        d="M135 105 L175 70 H225 L235 90 L210 135 L145 135 Z"
        fill="url(#bikeFrameGrad)"
        opacity="0.2"
      />
      <path
        d="M130 102 C150 90 175 68 220 68 C232 68 240 76 244 88 L255 102"
        {...strokeStyle}
        strokeWidth="3"
        stroke="#ffffff"
      />

      {/* Streetfighter LED Projector Light */}
      <path
        d="M255 94 L272 98"
        stroke={glowHex}
        strokeWidth="4"
        strokeLinecap="round"
        filter="url(#bikeGlow)"
      />

      {/* Exposed Trellis Frame Ribs */}
      <path d="M175 75 L160 115 M195 72 L185 125 M220 72 L205 125" {...strokeStyle} strokeWidth="1.8" stroke="#64748b" />

      {/* Aerodynamic Step-up Sport Seat */}
      <path
        d="M100 88 C120 88 135 95 155 102 L140 108 L100 96 Z"
        fill="#ffffff"
        opacity="0.9"
      />
      <path d="M90 92 L140 105" {...strokeStyle} strokeWidth="2.5" stroke="#ffffff" />

      {/* Electric Powertrain Core Highlight */}
      <circle cx="178" cy="125" r="18" stroke={glowHex} strokeWidth="2" fill="none" opacity="0.8" />
      <path d="M172 125 H184 M178 119 V131" stroke={glowHex} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/**
 * 3. Electric Delivery Vehicle Silhouette
 */
export function DeliveryVehicleSilhouette({ className, glowColor = "accent" }: SilhouetteProps) {
  const glowHex = glowColor === "primary" ? "#00E676" : "#22D3EE";

  return (
    <svg
      viewBox="0 0 380 200"
      className={cn("h-auto w-full text-foreground/85 transition-all duration-300", className)}
      aria-label="Electric Delivery Vehicle Silhouette"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="deliveryMetal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="50%" stopColor="#64748b" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#0f172a" stopOpacity="0.3" />
        </linearGradient>
        <filter id="delivGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Ground Shadow */}
      <ellipse cx="190" cy="180" rx="165" ry="8" fill="#000000" opacity="0.65" filter="blur(6px)" />

      {/* Three Wheels (2 Rear, 1 Front or Commercial Cargo Trike) */}
      <circle cx="65" cy="145" r="32" stroke="#334155" strokeWidth="6" fill="#0b1120" />
      <circle cx="65" cy="145" r="22" stroke="#64748b" strokeWidth="2" strokeDasharray="6 3" fill="none" />
      <circle cx="65" cy="145" r="9" fill="#94a3b8" />

      <circle cx="160" cy="145" r="32" stroke="#334155" strokeWidth="6" fill="#0b1120" />
      <circle cx="160" cy="145" r="22" stroke="#64748b" strokeWidth="2" strokeDasharray="6 3" fill="none" />
      <circle cx="160" cy="145" r="9" fill="#94a3b8" />

      <circle cx="315" cy="145" r="32" stroke="#334155" strokeWidth="6" fill="#0b1120" />
      <circle cx="315" cy="145" r="22" stroke="#64748b" strokeWidth="2" strokeDasharray="6 3" fill="none" />
      <circle cx="315" cy="145" r="9" fill="#94a3b8" />

      {/* Rear Insulated Cargo Container Box */}
      <rect
        x="45"
        y="50"
        width="145"
        height="85"
        rx="8"
        fill="url(#deliveryMetal)"
        stroke="#94a3b8"
        strokeWidth="2.5"
      />
      {/* Box Panel Ribs */}
      <path d="M95 50 V135 M145 50 V135" stroke="#475569" strokeWidth="1.5" />
      <rect x="55" y="60" width="28" height="15" rx="3" stroke={glowHex} strokeWidth="1.5" fill="none" opacity="0.7" />

      {/* Driver Cabin & Fairing */}
      <path
        d="M190 135 H235 C242 135 248 128 250 120 L270 70 C274 60 282 55 295 55 H305 L320 85 C325 95 328 108 325 125 L315 145"
        {...strokeStyle}
        strokeWidth="2.8"
        stroke="#ffffff"
      />
      {/* Windshield */}
      <path
        d="M272 68 L296 58 H304 L316 85"
        stroke={glowHex}
        strokeWidth="2"
        fill="none"
        opacity="0.8"
      />

      {/* Commercial Headlight Beam */}
      <path
        d="M325 100 L342 104"
        stroke={glowHex}
        strokeWidth="4"
        strokeLinecap="round"
        filter="url(#delivGlow)"
      />

      {/* Connecting Chassis Rail */}
      <path d="M45 135 H315" {...strokeStyle} strokeWidth="3.5" stroke="#64748b" />

      {/* Battery Pack Under Belly */}
      <rect x="195" y="130" width="70" height="16" rx="4" fill="#00E676" opacity="0.25" stroke="#00E676" strokeWidth="1.5" />
    </svg>
  );
}

/**
 * 4. Electric Cargo Vehicle Silhouette
 */
export function CargoVehicleSilhouette({ className, glowColor = "primary" }: SilhouetteProps) {
  const glowHex = glowColor === "primary" ? "#00E676" : "#22D3EE";

  return (
    <svg
      viewBox="0 0 400 200"
      className={cn("h-auto w-full text-foreground/85 transition-all duration-300", className)}
      aria-label="Electric Cargo Vehicle Silhouette"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="cargoMetalGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="45%" stopColor="#64748b" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#0f172a" stopOpacity="0.4" />
        </linearGradient>
        <filter id="cargoGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Ground Shadow */}
      <ellipse cx="200" cy="180" rx="175" ry="8" fill="#000000" opacity="0.7" filter="blur(6px)" />

      {/* Heavy Duty Wheels */}
      <circle cx="80" cy="142" r="34" stroke="#334155" strokeWidth="7" fill="#0b1120" />
      <circle cx="80" cy="142" r="23" stroke="#64748b" strokeWidth="2.5" strokeDasharray="8 4" fill="none" />
      <circle cx="80" cy="142" r="10" fill="#94a3b8" />

      <circle cx="170" cy="142" r="34" stroke="#334155" strokeWidth="7" fill="#0b1120" />
      <circle cx="170" cy="142" r="23" stroke="#64748b" strokeWidth="2.5" strokeDasharray="8 4" fill="none" />
      <circle cx="170" cy="142" r="10" fill="#94a3b8" />

      <circle cx="330" cy="142" r="34" stroke="#334155" strokeWidth="7" fill="#0b1120" />
      <circle cx="330" cy="142" r="23" stroke="#64748b" strokeWidth="2.5" strokeDasharray="8 4" fill="none" />
      <circle cx="330" cy="142" r="10" fill="#94a3b8" />

      {/* Heavy Commercial Flatbed / Container */}
      <rect
        x="40"
        y="45"
        width="180"
        height="90"
        rx="6"
        fill="url(#cargoMetalGrad)"
        stroke="#cbd5e1"
        strokeWidth="2.5"
      />
      {/* Structural cross-bracing */}
      <path d="M40 45 L220 135 M40 135 L220 45" stroke="#475569" strokeWidth="1" opacity="0.4" />
      <path d="M100 45 V135 M160 45 V135" stroke="#94a3b8" strokeWidth="1.8" />

      {/* Driver Ergonomic High-Roof Cabin */}
      <path
        d="M225 135 H260 C265 135 270 130 272 120 L285 50 C288 42 295 38 305 38 H345 C355 38 360 45 363 56 L375 110 C378 122 372 135 360 135 L330 135"
        {...strokeStyle}
        strokeWidth="3"
        stroke="#ffffff"
      />

      {/* Panoramic Windshield */}
      <path
        d="M290 52 H342 L358 100 H304 Z"
        fill="rgba(34, 211, 238, 0.1)"
        stroke="rgba(34, 211, 238, 0.6)"
        strokeWidth="2"
      />

      {/* Twin Heavy Projector LED */}
      <path
        d="M366 110 L385 114"
        stroke={glowHex}
        strokeWidth="4"
        strokeLinecap="round"
        filter="url(#cargoGlow)"
      />

      {/* High-capacity structural under-chassis beam */}
      <path d="M35 135 H365" stroke="#475569" strokeWidth="5" strokeLinecap="round" />
      {/* Industrial high-voltage battery casing */}
      <rect x="205" y="130" width="90" height="18" rx="4" fill="#00E676" opacity="0.25" stroke="#00E676" strokeWidth="2" />
      <path d="M245 134 L255 134 L250 144 L260 144" stroke="#00E676" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

/**
 * Helper to render vehicle silhouette by type
 */
export function VehicleByType({
  type,
  className,
  glowColor = "accent",
}: {
  type: "scooter" | "bike" | "delivery" | "cargo";
  className?: string;
  glowColor?: "primary" | "accent";
}) {
  switch (type) {
    case "scooter":
      return <ScooterSilhouette className={className} glowColor={glowColor} />;
    case "bike":
      return <BikeSilhouette className={className} glowColor={glowColor} />;
    case "delivery":
      return <DeliveryVehicleSilhouette className={className} glowColor={glowColor} />;
    case "cargo":
      return <CargoVehicleSilhouette className={className} glowColor={glowColor} />;
    default:
      return <ScooterSilhouette className={className} glowColor={glowColor} />;
  }
}
