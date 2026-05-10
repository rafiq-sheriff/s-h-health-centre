import { Link } from 'react-router';
import { ChevronRight } from 'lucide-react';

export type Crumb = { label: string; to?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-600">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;

          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-1">
              {i > 0 && <ChevronRight className="h-4 w-4 shrink-0 text-gray-400" aria-hidden />}
              {item.to && !isLast ? (
                <Link to={item.to} className="text-[#5f8b71] hover:text-[#4a7359] font-medium">
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? 'font-semibold text-gray-900' : undefined}>{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
