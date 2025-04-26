"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/forms/form";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { handleForm } from "~/lib/actions";
import { contentData } from "~/lib/content-data";

const formContent = contentData.contacts.form;

const CustomForm = () => {
  const [loading, setLoading] = useState(false);

  const formSchema = z.object({
    email: z.string().email(formContent.fields.email.error),
    name: z.string().min(2, formContent.fields.name.error),
    message: z.string().min(10, formContent.fields.message.error),
  });

  type FormData = z.infer<typeof formSchema>;

  const formInstance = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const result = await handleForm(formData);

      if (result?.message) {
        alert(result.message);
      } else {
        alert(formContent.success);
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert(formContent.error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="border-none px-0 py-0 shadow-none bg-transparent">
      <CardContent className="h-full">
        <Form {...formInstance}>
          <form
            onSubmit={formInstance.handleSubmit(onSubmit)}
            className="h-full"
          >
            <div className="flex h-full w-full flex-col items-center gap-3">
              <FormField
                control={formInstance.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>
                      <p>{formContent.fields.name.label}</p>
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={formContent.fields.name.placeholder}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={formInstance.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>
                      <p>{formContent.fields.email.label}</p>
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={formContent.fields.email.placeholder}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={formInstance.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>
                      <p>{formContent.fields.message.label}</p>
                    </FormLabel>
                    <FormControl className="h-32">
                      <Textarea
                        {...field}
                        className="h-32"
                        placeholder={formContent.fields.message.placeholder}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="mt-2 w-full" disabled={loading}>
                {loading
                  ? formContent.button.loading
                  : formContent.button.default}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default CustomForm;
