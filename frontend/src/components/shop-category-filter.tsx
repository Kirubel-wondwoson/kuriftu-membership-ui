"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const categories = [
  { value: "all", label: "All Categories" },
  { value: "packages", label: "Packages" },
  { value: "accommodations", label: "Accommodations" },
  { value: "dining", label: "Dining" },
  { value: "spa", label: "Spa & Wellness" },
  { value: "activities", label: "Activities" },
  { value: "merchandise", label: "Merchandise" },
  { value: "services", label: "Services" },
  { value: "gift-cards", label: "Gift Cards" },
]

interface ShopCategoryFilterProps {
  activeCategory: string
  setActiveCategory: (category: string) => void
}

export function ShopCategoryFilter({ activeCategory, setActiveCategory }: ShopCategoryFilterProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between">
          {activeCategory
            ? categories.find((category) => category.value === activeCategory)?.label
            : "Select category..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search category..." />
          <CommandList>
            <CommandEmpty>No category found.</CommandEmpty>
            <CommandGroup>
              {categories.map((category) => (
                <CommandItem
                  key={category.value}
                  value={category.value}
                  onSelect={(currentValue) => {
                    setActiveCategory(currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn("mr-2 h-4 w-4", activeCategory === category.value ? "opacity-100" : "opacity-0")}
                  />
                  {category.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
