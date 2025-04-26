import GalleryListBlock, {
  type FilterOption,
  type GalleryListBlockProps,
} from "~/components/block/gallery-list-block";
import { contentData } from "~/lib/content-data";

const GallerySection = () => {
  // Получаем данные из content.ru.json
  const {
    title,
    description,
    items: galleryItems,
    categories,
    filters,
  } = contentData.gallery;

  // Приводим фильтры к правильному типу
  const typedFilters: GalleryListBlockProps["filters"] = {
    subcategories: (filters?.subcategories as FilterOption[]) || [],
    styles: (filters?.styles as FilterOption[]) || [],
    locations: (filters?.locations as FilterOption[]) || [],
    status: (filters?.status as FilterOption[]) || [],
  };

  return (
    <section className="flex flex-col" id="gallery">
      <div className="flex flex-col items-center gap-2 pb-8 text-center">
        <h2>{title}</h2>
        <p className="text-muted-foreground max-w-2xl">{description}</p>
      </div>

      {/* Компонент с галереей и расширенной фильтрацией */}
      <GalleryListBlock
        galleryItems={galleryItems}
        categories={categories}
        filters={typedFilters}
      />
    </section>
  );
};

export default GallerySection;
