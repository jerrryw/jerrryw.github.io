import type { Metric } from '@/data/types';

interface MetricListProps {
  metrics: readonly Metric[];
}

/**
 * Measured results, typeset as figures rather than buried in prose.
 * This is the only component that uses the monospace face.
 */
export function MetricList({ metrics }: MetricListProps) {
  if (metrics.length === 0) return null;

  return (
    <div className="metric-row">
      {metrics.map((metric) => (
        <div key={metric.label} className="metric">
          <span className="metric__value">{metric.value}</span>
          <span className="metric__label">{metric.label}</span>
        </div>
      ))}
    </div>
  );
}
