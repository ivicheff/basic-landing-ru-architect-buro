import { CheckCircle2, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Integration = {
  id: string;
  name: string;
  description: string;
  logo: string;
  category: "analytics" | "marketing" | "crm" | "communication" | "development";
  features: string[];
  url: string;
};

const IntegrationsSection = () => {
  // Примерные данные интеграций
  const integrations: Integration[] = [
    {
      id: "1",
      name: "Google Analytics",
      description:
        "Полная интеграция с аналитикой Google для отслеживания эффективности вашего бизнеса.",
      logo: "/img/integrations/google-analytics.svg",
      category: "analytics",
      features: [
        "Отслеживание конверсий",
        "Анализ поведения пользователей",
        "Настраиваемые отчеты",
      ],
      url: "https://analytics.google.com",
    },
    {
      id: "2",
      name: "Mailchimp",
      description:
        "Автоматизация email-маркетинга и синхронизация данных для эффективных кампаний.",
      logo: "/img/integrations/mailchimp.svg",
      category: "marketing",
      features: ["Сегментация аудитории", "A/B тестирование", "Шаблоны писем"],
      url: "https://mailchimp.com",
    },
    {
      id: "3",
      name: "Salesforce",
      description:
        "Интеграция с ведущей CRM-системой для управления клиентскими отношениями.",
      logo: "/img/integrations/salesforce.svg",
      category: "crm",
      features: [
        "Синхронизация контактов",
        "Автоматические задачи",
        "Отчеты по продажам",
      ],
      url: "https://salesforce.com",
    },
    {
      id: "4",
      name: "Slack",
      description:
        "Получайте уведомления и управляйте проектами напрямую из Slack.",
      logo: "/img/integrations/slack.svg",
      category: "communication",
      features: [
        "Уведомления в реальном времени",
        "Командные обсуждения",
        "Интеграция с задачами",
      ],
      url: "https://slack.com",
    },
    {
      id: "5",
      name: "GitHub",
      description:
        "Связь с репозиториями кода для разработчиков и технических команд.",
      logo: "/img/integrations/github.svg",
      category: "development",
      features: [
        "Отслеживание изменений",
        "Автоматизация задач",
        "Управление релизами",
      ],
      url: "https://github.com",
    },
    {
      id: "6",
      name: "HubSpot",
      description:
        "Объединяйте маркетинг, продажи и обслуживание клиентов в единой платформе.",
      logo: "/img/integrations/hubspot.svg",
      category: "marketing",
      features: [
        "Лид-менеджмент",
        "Маркетинговые кампании",
        "Автоматизация продаж",
      ],
      url: "https://hubspot.com",
    },
  ];

  // Категории интеграций
  const categories = [
    { id: "analytics", name: "Аналитика", icon: "📊" },
    { id: "marketing", name: "Маркетинг", icon: "📣" },
    { id: "crm", name: "CRM", icon: "👥" },
    { id: "communication", name: "Коммуникации", icon: "💬" },
    { id: "development", name: "Разработка", icon: "💻" },
  ];

  return (
    <section className="flex flex-col" id="integrations">
      <div className="flex flex-col items-center gap-2 pb-8 text-center">
        <h2>Интеграции</h2>
        <p className="text-muted-foreground max-w-2xl">
          Наш продукт без проблем интегрируется с популярными сервисами и
          платформами, помогая создать единую экосистему
        </p>
      </div>

      {/* Категории */}
      <div className="grid grid-cols-2 gap-4 pb-10 md:grid-cols-3 lg:grid-cols-5">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-card flex flex-col items-center gap-2 rounded-lg border p-4 text-center shadow-sm"
          >
            <div className="text-3xl">{category.icon}</div>
            <h3 className="text-lg font-medium">{category.name}</h3>
            <p className="text-muted-foreground text-sm">
              {integrations.filter((i) => i.category === category.id).length}{" "}
              интеграций
            </p>
          </div>
        ))}
      </div>

      {/* Интеграции */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {integrations.map((integration) => (
          <div
            key={integration.id}
            className="bg-card flex flex-col gap-4 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md"
          >
            <div className="flex justify-between">
              <div className="relative h-12 w-12">
                <Image
                  src={integration.logo}
                  alt={integration.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="bg-primary/10 text-primary rounded px-3 py-1 text-xs font-medium">
                {categories.find((c) => c.id === integration.category)?.name}
              </span>
            </div>

            <div>
              <h3 className="text-xl font-semibold">{integration.name}</h3>
              <p className="text-muted-foreground mt-1 text-sm">
                {integration.description}
              </p>
            </div>

            <div className="mt-2">
              <h4 className="text-sm font-medium">Ключевые возможности:</h4>
              <ul className="mt-2 space-y-1">
                {integration.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto pt-4">
              <Link
                href={integration.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary inline-flex items-center gap-1 text-sm font-medium hover:underline"
              >
                Подробнее
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-muted/30 mt-12 flex flex-col items-center gap-4 rounded-lg border p-8 text-center">
        <h3 className="text-xl font-semibold">
          Нужна интеграция с другим сервисом?
        </h3>
        <p className="text-muted-foreground max-w-lg">
          Не нашли нужную интеграцию? Наша команда может разработать
          индивидуальное решение для вашего бизнеса.
        </p>
        <Link
          href="/contact"
          className="bg-primary hover:bg-primary/90 mt-2 rounded-md px-6 py-2 font-medium text-white transition-colors"
        >
          Связаться с нами
        </Link>
      </div>
    </section>
  );
};

export default IntegrationsSection;
