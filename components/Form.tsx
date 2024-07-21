"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { createPost } from "../models/AddModel";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  description: z.string().max(100, {
    message: "Description must be at most 100 characters.",
  }),
});

export default function PostsForm() {
  const [isOpen, setIsOpen] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
  });


  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Form</Button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 z-50 flex items-center justify-center"
      >
        {/* Manual Overlay */}
        <div className="fixed inset-0 bg-black opacity-30" aria-hidden="true" />

        <div className="bg-white rounded-lg p-6 w-full max-w-md z-10">
          <Form {...form}>
            <form action={createPost} className="space-y-8 max-w-lg mx-auto">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-2">
                    <FormLabel className="font-semibold text-gray-700">
                      Title
                    </FormLabel>
                    <FormControl>
                      <input
                        placeholder="Title"
                        {...field}
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </FormControl>
                    <FormMessage className="text-sm text-gray-600" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-2">
                    <FormLabel className="font-semibold text-gray-700">
                      Description
                    </FormLabel>
                    <FormControl>
                      <textarea
                        placeholder="Description"
                        {...field}
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={4}
                      />
                    </FormControl>
                    <FormMessage className="text-sm text-gray-600" />
                  </FormItem>
                )}
              />
              <div className="flex justify-end space-x-4">
                <Button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  
                  
                >
                  Submit
                </Button>
                <Button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-red-700 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </Dialog>
    </>
  );
}
