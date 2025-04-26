"use client";

import { Calculator as CalculatorIcon, Info } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { contentData } from "~/lib/content-data";

interface CalculationState {
  service: string;
  duration: string;
  complexity: string;
  urgency: string;
}

interface OptionType {
  value: string;
  label: string;
  basePrice?: number;
  multiplier?: number;
}

interface CalculatorFieldType {
  label: string;
  placeholder: string;
  options: OptionType[];
}

interface CalculatorType {
  title: string;
  description: string;
  buttonText: string;
  resultTitle: string;
  disclaimer: string;
  contactUs: string;
  fields: {
    service: CalculatorFieldType;
    duration: CalculatorFieldType;
    complexity: CalculatorFieldType;
    urgency: CalculatorFieldType;
  };
}

const Calculator = () => {
  const calculator = contentData.pricing
    .calculator as unknown as CalculatorType;

  const [formData, setFormData] = useState<CalculationState>({
    service: "",
    duration: "",
    complexity: "",
    urgency: "",
  });

  const [result, setResult] = useState<number | null>(null);
  const [formComplete, setFormComplete] = useState(false);

  // Проверяем, заполнены ли все поля
  useEffect(() => {
    const isComplete = Object.values(formData).every((value) => value !== "");
    setFormComplete(isComplete);
  }, [formData]);

  const handleChange = (field: keyof CalculationState, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    setResult(null); // Сбрасываем результат при изменении параметров
  };

  const calculatePrice = () => {
    // Находим выбранную услугу
    const selectedService = calculator.fields.service.options.find(
      (option) => option.value === formData.service,
    );

    // Находим множители
    const durationMultiplier =
      calculator.fields.duration.options.find(
        (option) => option.value === formData.duration,
      )?.multiplier ?? 1;

    const complexityMultiplier =
      calculator.fields.complexity.options.find(
        (option) => option.value === formData.complexity,
      )?.multiplier ?? 1;

    const urgencyMultiplier =
      calculator.fields.urgency.options.find(
        (option) => option.value === formData.urgency,
      )?.multiplier ?? 1;

    if (selectedService?.basePrice) {
      // Рассчитываем стоимость
      const price =
        selectedService.basePrice *
        durationMultiplier *
        complexityMultiplier *
        urgencyMultiplier;
      setResult(Math.round(price)); // Округляем до целого числа
    }
  };

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card className="mx-auto w-full max-w-2xl">
      <CardHeader className="flex flex-col gap-3">
        <CardTitle className="flex items-center gap-2">
          <CalculatorIcon className="h-7 w-7 text-blue-500" />
          <h3>{calculator.title}</h3>
        </CardTitle>
        <CardDescription>{calculator.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="w-full space-y-2">
          <Label htmlFor="service">{calculator.fields.service.label}</Label>
          <Select
            value={formData.service}
            onValueChange={(value) => handleChange("service", value)}
          >
            <SelectTrigger id="service" className="w-full">
              <SelectValue
                placeholder={calculator.fields.service.placeholder}
              />
            </SelectTrigger>
            <SelectContent className="">
              {calculator.fields.service.options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="w-full space-y-2">
          <Label htmlFor="duration">{calculator.fields.duration.label}</Label>
          <Select
            value={formData.duration}
            onValueChange={(value) => handleChange("duration", value)}
          >
            <SelectTrigger id="duration" className="w-full">
              <SelectValue
                placeholder={calculator.fields.duration.placeholder}
              />
            </SelectTrigger>
            <SelectContent>
              {calculator.fields.duration.options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="w-full space-y-2">
          <Label htmlFor="complexity">
            {calculator.fields.complexity.label}
          </Label>
          <Select
            value={formData.complexity}
            onValueChange={(value) => handleChange("complexity", value)}
          >
            <SelectTrigger id="complexity" className="w-full">
              <SelectValue
                placeholder={calculator.fields.complexity.placeholder}
              />
            </SelectTrigger>
            <SelectContent>
              {calculator.fields.complexity.options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="w-full space-y-2">
          <Label htmlFor="urgency">{calculator.fields.urgency.label}</Label>
          <Select
            value={formData.urgency}
            onValueChange={(value) => handleChange("urgency", value)}
          >
            <SelectTrigger id="urgency" className="w-full">
              <SelectValue
                placeholder={calculator.fields.urgency.placeholder}
              />
            </SelectTrigger>
            <SelectContent>
              {calculator.fields.urgency.options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button
          onClick={calculatePrice}
          className="w-full"
          disabled={!formComplete}
        >
          {calculator.buttonText}
        </Button>

        {result !== null && (
          <div className="mt-6 rounded-lg bg-blue-50 p-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold">
                  {calculator.resultTitle}
                </h3>
                <p className="text-xl font-bold text-blue-700">
                  {formatPrice(result)}
                </p>
              </div>
              <div className="group relative">
                <Info className="h-5 w-5 cursor-help text-blue-500" />
                <div className="invisible absolute right-0 bottom-full mb-2 w-64 rounded-lg bg-white p-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <p className="text-sm">{calculator.disclaimer}</p>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground mt-2 text-sm">
              {calculator.contactUs}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Calculator;
