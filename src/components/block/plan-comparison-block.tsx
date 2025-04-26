import { Check, X } from "lucide-react";
import ComparisonCard from "~/components/ui/comparison-card";
import { Table, TableBody, TableCell, TableRow } from "~/components/ui/table";
import { contentData } from "~/lib/content-data";

const COLUMN_COUNT = contentData.comparison.plans.length + 1;
const COLUMN_WIDTH = `${100 / COLUMN_COUNT}%`;

const PlanComparisonBlock = () => {
  // Преобразуем данные функций в формат для карточек
  const planFeatures = contentData.comparison.plans.reduce(
    (result, plan) => {
      const planId = plan.id;
      const featureMap: Record<string, boolean | string> = {};

      contentData.comparison.features.forEach((feature) => {
        featureMap[feature.name] =
          feature.values[planId as keyof typeof feature.values];
      });

      result[planId] = featureMap;
      return result;
    },
    {} as Record<string, Record<string, boolean | string>>,
  );

  return (
    <div className="flex flex-col items-center lg:items-end">
      <div className="grid w-full  grid-cols-1 gap-6 lg:max-w-[75%] lg:grid-cols-3 lg:gap-0">
        {contentData.comparison.plans.map((plan) => (
          <ComparisonCard
            key={plan.id}
            {...plan}
            features={planFeatures[plan.id]}
          />
        ))}
      </div>
      <div className="hidden rounded-lg lg:block">
        <Table className="w-full table-fixed border ">
          <TableBody>
            {contentData.comparison.features.map((feature, index) => (
              <TableRow
                key={feature.id}
                className={index % 2 === 0 ? "bg-muted/50" : " "}
              >
                <TableCell
                  className="font-medium"
                  style={{ width: COLUMN_WIDTH }}
                >
                  {feature.name}
                </TableCell>
                {contentData.comparison.plans.map((plan) => {
                  const value =
                    feature.values[plan.id as keyof typeof feature.values];
                  return (
                    <TableCell
                      key={`${feature.id}-${plan.id}`}
                      className={`text-center ${
                        plan.popular ? "bg-primary/5" : ""
                      }`}
                      style={{ width: COLUMN_WIDTH }}
                    >
                      {typeof value === "boolean" ? (
                        value ? (
                          <Check className="mx-auto h-5 w-5 text-green-500" />
                        ) : (
                          <X className="mx-auto h-5 w-5 text-red-500" />
                        )
                      ) : (
                        <span>{value}</span>
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PlanComparisonBlock;
