"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Upload, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// Service categories
const categories = ["Accommodation", "Dining", "Spa & Wellness", "Activities", "Tours", "Special Packages"]

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Service name must be at least 2 characters.",
  }),
  points: z.number().min(1, {
    message: "Points must be at least 1.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  available: z.boolean().default(true),
  category: z.string({
    required_error: "Please select a category.",
  }),
  image: z.instanceof(FileList).optional(),
})

export function AddServiceForm() {
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [showSuccess, setShowSuccess] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      points: undefined,
      description: "",
      available: true,
      category: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, you would save this to your database and upload the image

    // Show success message
    setShowSuccess(true)

    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false)
    }, 3000)

    // Reset form
    form.reset({
      name: "",
      points: undefined,
      description: "",
      available: true,
      category: "",
    })
    setImagePreview(null)
  }

  const handleImageChange = (fileList: FileList | null) => {
    if (!fileList || fileList.length === 0) {
      setImagePreview(null)
      return
    }

    const file = fileList[0]
    const reader = new FileReader()
    reader.onloadend = () => {
      setImagePreview(reader.result as string)
    }
    reader.readAsDataURL(file)
  }

  // Example Unsplash images for preview
  const exampleImages = {
    Accommodation: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop",
    Dining: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop",
    "Spa & Wellness": "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop",
    Activities: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?q=80&w=2044&auto=format&fit=crop",
    Tours: "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?q=80&w=2070&auto=format&fit=crop",
    "Special Packages": "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop",
  }

  const selectedCategory = form.watch("category")

  return (
    <Form {...form}>
      {showSuccess && (
        <Alert className="mb-6 bg-green-50 border-green-200">
          <CheckCircle2 className="h-4 w-4 text-green-600" />
          <AlertTitle className="text-green-800">Service added successfully</AlertTitle>
          <AlertDescription className="text-green-700">The new service has been added to the system.</AlertDescription>
        </Alert>
      )}

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Service Name</FormLabel>
              <FormControl>
                <Input placeholder="Spa Treatment" {...field} />
              </FormControl>
              <FormDescription>Enter the name of the redeemable service</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="points"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Points Required</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="500"
                  {...field}
                  onChange={(e) => {
                    const value = e.target.value === "" ? undefined : Number.parseInt(e.target.value, 10)
                    field.onChange(value)
                  }}
                />
              </FormControl>
              <FormDescription>Enter the number of points needed to redeem this service</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Describe the service in detail..." className="min-h-[120px]" {...field} />
              </FormControl>
              <FormDescription>Provide a detailed description of the service</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>Select the category this service belongs to</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="available"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4 shadow-sm">
              <div className="space-y-0.5">
                <FormLabel className="text-base">Availability</FormLabel>
                <FormDescription>Make this service available for redemption</FormDescription>
              </div>
              <FormControl>
                <Switch checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="image"
          render={({ field: { value, onChange, ...fieldProps } }) => (
            <FormItem>
              <FormLabel>Service Image</FormLabel>
              <FormControl>
                <div className="grid w-full gap-4">
                  <div className="flex flex-col items-center justify-center gap-4 rounded-md border border-dashed p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                      <Upload className="h-6 w-6" />
                    </div>
                    <div className="flex flex-col items-center justify-center text-center">
                      <p className="text-sm font-medium">Drag & drop an image here</p>
                      <p className="text-xs text-muted-foreground">JPG, PNG or GIF, up to 10MB</p>
                    </div>
                    <Input
                      id="image"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        onChange(e.target.files)
                        handleImageChange(e.target.files)
                      }}
                      {...fieldProps}
                    />
                    <Button type="button" variant="outline" onClick={() => document.getElementById("image")?.click()}>
                      Select Image
                    </Button>
                  </div>

                  {/* Show either the uploaded image preview or a category-based example */}
                  {imagePreview ? (
                    <div className="relative aspect-video overflow-hidden rounded-md border">
                      <img
                        src={imagePreview || "/placeholder.svg"}
                        alt="Preview"
                        className="h-full w-full object-cover"
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="sm"
                        className="absolute right-2 top-2"
                        onClick={() => {
                          setImagePreview(null)
                          onChange(null)
                        }}
                      >
                        Remove
                      </Button>
                    </div>
                  ) : selectedCategory ? (
                    <div className="relative aspect-video overflow-hidden rounded-md border">
                      <img
                        src={exampleImages[selectedCategory as keyof typeof exampleImages] || "/placeholder.svg"}
                        alt={`${selectedCategory} example`}
                        className="h-full w-full object-cover opacity-70"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="bg-black/50 px-3 py-1 text-white rounded text-sm">
                          Example {selectedCategory} Image
                        </p>
                      </div>
                    </div>
                  ) : null}
                </div>
              </FormControl>
              <FormDescription>Upload an image that represents the service</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Add Service</Button>
      </form>
    </Form>
  )
}
