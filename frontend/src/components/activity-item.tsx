import { ArrowDownRight, ArrowUpRight } from "lucide-react"

interface ActivityItemProps {
  title: string
  date: string
  points: string
  type: "earned" | "redeemed"
}

export function ActivityItem({ title, date, points, type }: ActivityItemProps) {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center gap-3">
        <div
          className={`flex h-9 w-9 items-center justify-center rounded-full ${
            type === "earned"
              ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
              : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
          }`}
        >
          {type === "earned" ? <ArrowUpRight className="h-5 w-5" /> : <ArrowDownRight className="h-5 w-5" />}
        </div>
        <div>
          <p className="font-medium">{title}</p>
          <p className="text-sm text-muted-foreground">{date}</p>
        </div>
      </div>
      <div
        className={`font-bold ${
          type === "earned" ? "text-emerald-600 dark:text-emerald-400" : "text-amber-600 dark:text-amber-400"
        }`}
      >
        {points}
      </div>
    </div>
  )
}
