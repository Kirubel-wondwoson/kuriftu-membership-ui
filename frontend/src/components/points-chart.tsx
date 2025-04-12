"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"

export function PointsChart() {
  const data = [
    {
      name: "Jan",
      earned: 1200,
      redeemed: 0,
    },
    {
      name: "Feb",
      earned: 900,
      redeemed: 500,
    },
    {
      name: "Mar",
      earned: 1500,
      redeemed: 2500,
    },
    {
      name: "Apr",
      earned: 1800,
      redeemed: 0,
    },
    {
      name: "May",
      earned: 1200,
      redeemed: 1000,
    },
    {
      name: "Jun",
      earned: 2500,
      redeemed: 1500,
    },
  ]

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
        <XAxis dataKey="name" className="text-xs" />
        <YAxis className="text-xs" />
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(var(--background))",
            borderColor: "hsl(var(--border))",
            borderRadius: "var(--radius)",
          }}
        />
        <Legend />
        <Bar dataKey="earned" name="Points Earned" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
        <Bar dataKey="redeemed" name="Points Redeemed" fill="hsl(var(--muted-foreground))" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
