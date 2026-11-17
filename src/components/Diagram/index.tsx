import type {ReactNode} from 'react';

/**
 * Small SVG kit for the hand-placed architecture diagrams of the learning
 * path. Colours come from CSS variables (src/css/custom.css) so that every
 * figure follows the light and dark themes.
 */

export type Tone = 'plain' | 'service' | 'arrival' | 'muted';

const stroke: Record<Tone, string> = {
  plain: 'var(--nc-fig-stroke)',
  service: 'var(--nc-service)',
  arrival: 'var(--nc-arrival)',
  muted: 'var(--nc-bound)',
};

const fill: Record<Tone, string> = {
  plain: 'var(--nc-fig-fill)',
  service: 'var(--nc-fig-service-fill)',
  arrival: 'var(--nc-fig-arrival-fill)',
  muted: 'var(--nc-fig-muted-fill)',
};

const textColor = 'var(--ifm-font-color-base)';

type FigureProps = {
  /** Width and height of the drawing area, in SVG user units. */
  width?: number;
  height: number;
  /** Accessible description of the drawing. */
  label: string;
  /** Caption, starting with "Figure N." */
  caption: ReactNode;
  /** Where the figure comes from; shown under the caption. */
  source: ReactNode;
  children: ReactNode;
};

export function Figure({
  width = 720,
  height,
  label,
  caption,
  source,
  children,
}: FigureProps): ReactNode {
  return (
    <figure className="nc-figure">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        width={width}
        role="img"
        aria-label={label}>
        <defs>
          {(Object.keys(stroke) as Tone[]).map((tone) => (
            <marker
              key={tone}
              id={`dg-arrow-${tone}`}
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" fill={stroke[tone]} />
            </marker>
          ))}
        </defs>
        {children}
      </svg>
      <figcaption>
        {caption}
        <span className="nc-figure-source">Source: {source}</span>
      </figcaption>
    </figure>
  );
}

type BoxProps = {
  x: number;
  y: number;
  w: number;
  h: number;
  /** One string per line; lines are centred in the box. */
  lines?: string[];
  tone?: Tone;
  dashed?: boolean;
  /** Render the first line in bold, or the first n lines when a number. */
  title?: boolean | number;
  size?: number;
  rx?: number;
};

export function Box({
  x,
  y,
  w,
  h,
  lines = [],
  tone = 'plain',
  dashed = false,
  title = false,
  size = 13,
  rx = 4,
}: BoxProps): ReactNode {
  const lineHeight = size * 1.3;
  const first = y + h / 2 - ((lines.length - 1) * lineHeight) / 2;
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={rx}
        fill={fill[tone]}
        stroke={stroke[tone]}
        strokeWidth="1.3"
        strokeDasharray={dashed ? '5 4' : undefined}
      />
      {lines.map((line, i) => (
        <text
          key={i}
          x={x + w / 2}
          y={first + i * lineHeight}
          fontSize={size}
          fontWeight={i < (title === true ? 1 : title || 0) ? 700 : 400}
          textAnchor="middle"
          dominantBaseline="central"
          fill={textColor}>
          {line}
        </text>
      ))}
    </g>
  );
}

type ArrowProps = {
  /** SVG path data, e.g. "M10,10 H100". */
  d: string;
  tone?: Tone;
  dashed?: boolean;
  /** Arrow heads: at the end (default), at both ends, or none. */
  heads?: 'end' | 'both' | 'none';
};

export function Arrow({
  d,
  tone = 'plain',
  dashed = false,
  heads = 'end',
}: ArrowProps): ReactNode {
  const marker = `url(#dg-arrow-${tone})`;
  return (
    <path
      d={d}
      fill="none"
      stroke={stroke[tone]}
      strokeWidth="1.4"
      strokeDasharray={dashed ? '5 4' : undefined}
      markerEnd={heads === 'none' ? undefined : marker}
      markerStart={heads === 'both' ? marker : undefined}
    />
  );
}

type TxtProps = {
  x: number;
  y: number;
  children: ReactNode;
  anchor?: 'start' | 'middle' | 'end';
  size?: number;
  bold?: boolean;
  italic?: boolean;
  tone?: Tone;
};

export function Txt({
  x,
  y,
  children,
  anchor = 'middle',
  size = 13,
  bold = false,
  italic = false,
  tone,
}: TxtProps): ReactNode {
  return (
    <text
      x={x}
      y={y}
      fontSize={size}
      fontWeight={bold ? 700 : 400}
      fontStyle={italic ? 'italic' : undefined}
      textAnchor={anchor}
      dominantBaseline="central"
      fill={tone ? stroke[tone] : textColor}>
      {children}
    </text>
  );
}
