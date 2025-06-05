"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2, UploadCloud } from "lucide-react";
import { useState } from "react";

const projectUploadSchema = z.object({
  projectName: z.string().min(3, { message: "Project name must be at least 3 characters." }),
  description: z.string().min(10, { message: "Description must be at least 10 characters." }),
  // For simplicity, not handling actual file object validation here. In a real app, this would be more complex.
  projectImage: z.any().refine((files) => files?.length === 1, "Project image is required."),
});

type ProjectUploadFormValues = z.infer<typeof projectUploadSchema>;

// Placeholder for server action
async function uploadProject(data: FormData) {
  console.log("Uploading project (form data):", data.get("projectName"), data.get("projectImage"));
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 2000));
  // Simulate success/failure
  // if (Math.random() > 0.5) throw new Error("Failed to upload project.");
  return { success: true, message: "Project uploaded successfully!" };
}


export function ProjectUploadForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const form = useForm<ProjectUploadFormValues>({
    resolver: zodResolver(projectUploadSchema),
    defaultValues: {
      projectName: "",
      description: "",
    },
  });

  async function onSubmit(data: ProjectUploadFormValues) {
    setIsSubmitting(true);
    
    const formData = new FormData();
    formData.append("projectName", data.projectName);
    formData.append("description", data.description);
    if (data.projectImage && data.projectImage.length > 0) {
      formData.append("projectImage", data.projectImage[0]);
    }

    try {
      // const result = await uploadProjectAction(formData); // Replace with actual server action
      const result = await uploadProject(formData); // Placeholder
      if (result.success) {
        toast({
          title: "Project Uploaded!",
          description: "The new project has been added to the gallery.",
        });
        form.reset();
        setFileName(null); 
      } else {
        toast({
          title: "Upload Failed",
          description: result.message || "Could not upload the project. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred during upload. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="projectName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Name / Title</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Luxury Sedan Full Tint" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Briefly describe the work done..."
                  className="min-h-[100px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="projectImage"
          render={({ field: { onChange, value, ...rest } }) => (
            <FormItem>
              <FormLabel>Project Image</FormLabel>
              <FormControl>
                 <Input 
                    type="file" 
                    accept="image/*" 
                    onChange={(e) => {
                      onChange(e.target.files);
                      setFileName(e.target.files?.[0]?.name || null);
                    }}
                    {...rest} 
                    className="pt-2 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
                  />
              </FormControl>
              {fileName && <FormDescription>Selected file: {fileName}</FormDescription>}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
          {isSubmitting ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <UploadCloud className="mr-2 h-4 w-4" />
          )}
          Upload Project
        </Button>
      </form>
    </Form>
  );
}
