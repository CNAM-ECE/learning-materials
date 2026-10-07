import type {ReactNode} from 'react';

/**
 * Token-bucket arrival curve against a rate-latency service curve, with the
 * horizontal deviation (delay bound) and vertical deviation (backlog bound).
 * Coordinates are hand-placed: origin at (60, 340), latency T at x = 160,
 * burst b at y = 250, slopes r = 0.4 and R = 1.5 in plot units.
 */
export default function BoundsFigure(): ReactNode {
  const text = 'var(--ifm-font-color-base)';
  return (
    <figure className="nc-figure">
      <svg
        viewBox="0 0 600 390"
        width="600"
        role="img"
        aria-label="Token-bucket arrival curve and rate-latency service curve with delay and backlog bounds">
        <defs>
          <marker
            id="nc-arrow"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="var(--nc-bound)" />
          </marker>
        </defs>

        {/* Axes */}
        <line x1="60" y1="340" x2="575" y2="340" stroke={text} strokeWidth="1.2" />
        <line x1="60" y1="340" x2="60" y2="25" stroke={text} strokeWidth="1.2" />
        <text x="580" y="345" fontSize="15" fill={text}>t</text>
        <text x="40" y="22" fontSize="15" fill={text}>bits</text>

        {/* Arrival curve: gamma_{r,b}(t) = b + r t */}
        <line x1="60" y1="250" x2="560" y2="50" stroke="var(--nc-arrival)" strokeWidth="2.5" />
        <circle cx="60" cy="250" r="3.5" fill="var(--nc-arrival)" />
        <text x="470" y="68" fontSize="15" fill="var(--nc-arrival)">α(t) = b + r·t</text>

        {/* Service curve: beta_{R,T}(t) = R [t - T]^+ */}
        <polyline
          points="60,340 160,340 360,40"
          fill="none"
          stroke="var(--nc-service)"
          strokeWidth="2.5"
        />
        <text x="372" y="48" fontSize="15" fill="var(--nc-service)">β(t) = R·[t − T]⁺</text>

        {/* Horizontal deviation: delay bound */}
        <line
          x1="62"
          y1="250"
          x2="218"
          y2="250"
          stroke="var(--nc-bound)"
          strokeWidth="1.5"
          strokeDasharray="5 4"
          markerStart="url(#nc-arrow)"
          markerEnd="url(#nc-arrow)"
        />
        <text x="96" y="242" fontSize="14" fill={text}>D = T + b/R</text>

        {/* Vertical deviation: backlog bound */}
        <line
          x1="160"
          y1="212"
          x2="160"
          y2="338"
          stroke="var(--nc-bound)"
          strokeWidth="1.5"
          strokeDasharray="5 4"
          markerStart="url(#nc-arrow)"
          markerEnd="url(#nc-arrow)"
        />
        <text x="168" y="300" fontSize="14" fill={text}>B = b + r·T</text>

        {/* Axis ticks */}
        <text x="155" y="360" fontSize="14" fill={text}>T</text>
        <text x="44" y="255" fontSize="14" fill={text}>b</text>
        <text x="50" y="360" fontSize="14" fill={text}>0</text>
      </svg>
      <figcaption>
        Figure 1. Delay and backlog bounds as the horizontal and vertical
        deviations between an arrival curve α and a service curve β (case r ≤ R).
      </figcaption>
    </figure>
  );
}
