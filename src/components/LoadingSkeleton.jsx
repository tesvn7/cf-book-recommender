import { Skeleton } from "@/components/ui/skeleton"

export default function LoadingSkeleton() {
  return (
    <div className="flex flex-col w-full space-y-3">
      <Skeleton className="h-[250px] rounded-xl" />
      <div className="space-y-2 w-full">
        <Skeleton className="h-4" />
        <Skeleton className="h-4" />
      </div>
    </div>
  )
}
