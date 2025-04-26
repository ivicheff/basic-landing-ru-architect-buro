import {
  BarChart,
  Clock,
  Cloud,
  Globe,
  Layout,
  Shield,
  Smartphone,
  Users,
  Zap,
} from "lucide-react";

const FeaturesSection = () => {
  // Примерные данные об особенностях продукта
  const features = [
    {
      id: 1,
      title: "Высокая производительность",
      description:
        "Оптимизированный код и современные технологии обеспечивают быструю работу даже при высоких нагрузках.",
      icon: <Zap className="text-primary h-10 w-10" />,
    },
    {
      id: 2,
      title: "Безопасность",
      description:
        "Встроенные механизмы защиты данных и соответствие стандартам безопасности для защиты вашей информации.",
      icon: <Shield className="text-primary h-10 w-10" />,
    },
    {
      id: 3,
      title: "Экономия времени",
      description:
        "Автоматизированные процессы и интуитивный интерфейс сокращают время на выполнение рутинных задач.",
      icon: <Clock className="text-primary h-10 w-10" />,
    },
    {
      id: 4,
      title: "Аналитика",
      description:
        "Подробные отчеты и статистика помогают принимать обоснованные решения на основе данных.",
      icon: <BarChart className="text-primary h-10 w-10" />,
    },
    {
      id: 5,
      title: "Командная работа",
      description:
        "Инструменты для эффективного взаимодействия между членами команды и управления проектами.",
      icon: <Users className="text-primary h-10 w-10" />,
    },
    {
      id: 6,
      title: "Интеграции",
      description:
        "Легкое подключение к популярным сервисам и API для расширения функциональности.",
      icon: <Globe className="text-primary h-10 w-10" />,
    },
    {
      id: 7,
      title: "Мобильность",
      description:
        "Полноценная работа на любых устройствах, включая смартфоны и планшеты.",
      icon: <Smartphone className="text-primary h-10 w-10" />,
    },
    {
      id: 8,
      title: "Современный дизайн",
      description:
        "Удобный и эстетичный интерфейс, который адаптируется под любые размеры экранов.",
      icon: <Layout className="text-primary h-10 w-10" />,
    },
    {
      id: 9,
      title: "Облачное хранение",
      description:
        "Доступ к вашим данным из любой точки мира с надежным резервным копированием.",
      icon: <Cloud className="text-primary h-10 w-10" />,
    },
  ];

  return (
    <section className="flex flex-col" id="features">
      <div className="flex flex-col items-center gap-2 pb-12 text-center">
        <h2>Особенности нашего продукта</h2>
        <p className="text-muted-foreground max-w-2xl">
          Мы создали решение, которое сочетает в себе все необходимые функции
          для эффективной работы и развития вашего бизнеса.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-card flex flex-col gap-4 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md"
          >
            <div className="bg-primary/10 flex h-16 w-16 items-center justify-center rounded-full">
              {feature.icon}
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
