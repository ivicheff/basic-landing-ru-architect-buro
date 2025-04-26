import GalleryListBlock from "~/components/block/gallery-list-block";
import { contentData } from "~/lib/content-data";

const GallerySection = () => {
  // Получаем данные из content.ru.json
  const {
    title,
    description,
    items: galleryItems,
    categories,
  } = contentData.gallery;

  return (
    <section className="flex flex-col" id="gallery">
      <div className="flex flex-col items-center gap-2 pb-8 text-center">
        <h2>{title}</h2>
        <p className="text-muted-foreground max-w-2xl">{description}</p>
      </div>

      {/* Компонент с галереей и фильтрацией */}
      <GalleryListBlock galleryItems={galleryItems} categories={categories} />
    </section>
  );
};

export default GallerySection;
