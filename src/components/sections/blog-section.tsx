import { CalendarClock, ChevronRight, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  commentsCount: number;
  image: string;
  slug: string;
};

const BlogSection = () => {
  // Примерные данные статей блога
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "10 способов увеличить эффективность вашего бизнеса",
      excerpt:
        "Практические советы, которые помогут оптимизировать рабочие процессы и повысить продуктивность команды.",
      date: "20 июня 2024",
      author: {
        name: "Александр Петров",
        avatar: "/img/blog/authors/author-1.jpg",
      },
      category: "Бизнес",
      commentsCount: 12,
      image: "/img/blog/post-1.jpg",
      slug: "10-ways-to-improve-business-efficiency",
    },
    {
      id: "2",
      title: "Тренды цифровой трансформации в 2024 году",
      excerpt:
        "Обзор ключевых технологических тенденций, которые формируют будущее и меняют подход к ведению бизнеса.",
      date: "15 июня 2024",
      author: {
        name: "Мария Сидорова",
        avatar: "/img/blog/authors/author-2.jpg",
      },
      category: "Технологии",
      commentsCount: 8,
      image: "/img/blog/post-2.jpg",
      slug: "digital-transformation-trends-2024",
    },
    {
      id: "3",
      title: "Как построить эффективную стратегию маркетинга",
      excerpt:
        "Пошаговое руководство по созданию маркетинговой стратегии, которая привлечет клиентов и увеличит продажи.",
      date: "10 июня 2024",
      author: {
        name: "Дмитрий Иванов",
        avatar: "/img/blog/authors/author-3.jpg",
      },
      category: "Маркетинг",
      commentsCount: 5,
      image: "/img/blog/post-3.jpg",
      slug: "how-to-build-effective-marketing-strategy",
    },
  ];

  return (
    <section className="flex flex-col" id="blog">
      <div className="flex flex-col items-center gap-2 pb-8 text-center">
        <h2>Наш блог</h2>
        <p className="text-muted-foreground max-w-2xl">
          Полезные статьи, советы экспертов и новости индустрии, которые помогут
          вам развивать бизнес
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="group bg-card flex flex-col overflow-hidden rounded-lg border shadow-sm transition-all hover:shadow-md"
          >
            <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>

            <div className="flex flex-col gap-4 p-6">
              <div className="flex items-center gap-3">
                <span className="bg-primary/10 text-primary rounded px-3 py-1 text-xs font-medium">
                  {post.category}
                </span>
                <div className="text-muted-foreground flex items-center gap-1 text-xs">
                  <CalendarClock className="h-3.5 w-3.5" />
                  <span>{post.date}</span>
                </div>
                <div className="text-muted-foreground flex items-center gap-1 text-xs">
                  <MessageCircle className="h-3.5 w-3.5" />
                  <span>{post.commentsCount}</span>
                </div>
              </div>

              <Link href={`/blog/${post.slug}`}>
                <h3 className="hover:text-primary/90 line-clamp-2 text-xl font-semibold transition-colors">
                  {post.title}
                </h3>
              </Link>

              <p className="text-muted-foreground line-clamp-3 text-sm">
                {post.excerpt}
              </p>

              <div className="mt-auto flex items-center justify-between pt-4">
                <div className="flex items-center gap-2">
                  <div className="relative h-8 w-8 overflow-hidden rounded-full">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-xs font-medium">
                    {post.author.name}
                  </span>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="group/read text-primary flex items-center text-sm font-medium"
                >
                  Читать
                  <ChevronRight className="h-4 w-4 transition-transform group-hover/read:translate-x-1" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link href="/blog">
          <Button variant="outline" size="lg" className="gap-2">
            Все статьи
            <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default BlogSection;
