import CustomForm from "~/components/forms/custom-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { contentData } from "~/lib/content-data";

const FormCard = () => {
  return (
    <Card className="flex h-full flex-col justify-between gap-3 pb-8">
      <CardHeader className="gap-3">
        <CardTitle>
          <h3>{contentData.contacts.form.title}</h3>
        </CardTitle>
        <CardDescription>
          <p>{contentData.contacts.form.description}</p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <CustomForm />
      </CardContent>
    </Card>
  );
};

export default FormCard;
