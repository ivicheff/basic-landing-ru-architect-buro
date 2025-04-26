import { Button } from "~/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-background flex min-h-screen flex-col items-center justify-center gap-12 -mt-[4.5rem]">
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="">404 - Страница не найдена</h1>
        <p className="text-muted-foreground">
          Страница, которую вы ищете, не существует.
        </p>
      </div>
      <Link href="/">
        <Button variant="cta" >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Вернуться на главную
        </Button>
      </Link>
    </div>
  );
}
