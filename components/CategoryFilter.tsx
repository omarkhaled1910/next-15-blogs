import Link from "next/link";

export default function CategoryFilter({ categories }: { categories: any[] }) {
  return (
    <nav className="mb-6">
      <ul className="flex gap-4">
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={`/categories/${category.slug}`} className="text-blue-500 hover:underline">
            {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}