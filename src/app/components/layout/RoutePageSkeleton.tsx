import { Skeleton } from '../ui/skeleton';

/**
 * Shown while lazy route chunks load. Mirrors typical page padding below the fixed header.
 */
export default function RoutePageSkeleton() {
  return (
    <div
      className="pt-28 sm:pt-32 lg:pt-36 pb-20 px-4 sm:px-6 lg:px-8 bg-white"
      aria-busy="true"
      aria-live="polite"
      aria-label="Loading page content"
    >
      <div className="mx-auto max-w-5xl">
        <Skeleton className="mb-4 h-9 w-[min(100%,28rem)] rounded-lg sm:h-10" />
        <Skeleton className="mb-2 h-4 w-full max-w-2xl" />
        <Skeleton className="mb-10 h-4 w-full max-w-xl" />

        <div className="mb-12 grid gap-8 md:grid-cols-2 md:items-start">
          <Skeleton className="aspect-[16/10] w-full rounded-2xl" />
          <div className="space-y-3 pt-1">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[92%]" />
            <Skeleton className="mt-5 h-11 w-44 rounded-full" />
          </div>
        </div>

        <div className="space-y-3">
          <Skeleton className="h-5 w-40" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-[88%]" />
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          <Skeleton className="h-24 rounded-xl sm:col-span-1" />
          <Skeleton className="h-24 rounded-xl sm:col-span-1" />
          <Skeleton className="h-24 rounded-xl sm:col-span-1" />
        </div>
      </div>
    </div>
  );
}
