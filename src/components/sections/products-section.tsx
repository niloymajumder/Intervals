import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const thirtyImage = PlaceHolderImages.find(p => p.id === 'thirty');
const anontityaImage = PlaceHolderImages.find(p => p.id === 'anontitya');

const products = [
  {
    title: 'Thirty',
    description: 'A web and print magazine exploring culture, society, science, philosophy, arts, film, architecture, sustainability, and the in-between moments of life.',
    image: thirtyImage,
    link: '#',
  },
  {
    title: 'Anontitya',
    description: 'A cultural aesthetics–driven fashion house centered on fabrics, handicrafts, and timeless design rooted in tradition and reinterpretation.',
    image: anontityaImage,
    link: '#',
  },
];

export default function ProductsSection() {
  return (
    <section id="work" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-2xl lg:max-w-none">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
            Our Products
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {products.map((product) => (
            <div key={product.title} className="group">
              <a href={product.link}>
                <div className="aspect-video relative mb-4 overflow-hidden rounded-lg">
                  {product.image && (
                    <Image
                      src={product.image.imageUrl}
                      alt={product.image.description}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      data-ai-hint={product.image.imageHint}
                    />
                  )}
                </div>
                <h3 className="text-xl font-semibold font-headline">{product.title}</h3>
                <p className="mt-1 text-muted-foreground">{product.description}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
