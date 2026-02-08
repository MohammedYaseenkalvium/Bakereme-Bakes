export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
      id: '1',
      name: 'Butter Croissant',
      description: 'Flaky, buttery, and freshly baked every morning',
      price: 4.50,
      image: 'https://images.unsplash.com/photo-1709798289100-7b46217e0325?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGNyb2lzc2FudCUyMGJha2VyeXxlbnwxfHx8fDE3NzA1NjAwNzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Pastries'
    },
    {
      id: '2',
      name: 'Chocolate Cake',
      description: 'Rich, moist chocolate cake with ganache',
      price: 8.99,
      image: 'https://images.unsplash.com/photo-1630410941240-3ce7991777ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwcGFzdHJ5fGVufDF8fHx8MTc3MDU2MDA3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Cakes'
    },
    {
      id: '3',
      name: 'Cinnamon Roll',
      description: 'Warm cinnamon roll with cream cheese frosting',
      price: 5.25,
      image: 'https://images.unsplash.com/photo-1639695855253-0c23c9c60fe9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5uYW1vbiUyMHJvbGwlMjBiYWtlcnl8ZW58MXx8fHwxNzcwNTUyNDM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Pastries'
    },
    {
      id: '4',
      name: 'French Macarons',
      description: 'Delicate almond cookies in assorted flavors',
      price: 12.00,
      image: 'https://images.unsplash.com/photo-1714387278170-d560a9b6f08a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBtYWNhcm9uJTIwY29sb3JmdWx8ZW58MXx8fHwxNzcwNTYwMDc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Pastries'
    },
    {
      id: '5',
      name: 'Blueberry Muffin',
      description: 'Fresh blueberries in a tender, moist muffin',
      price: 3.75,
      image: 'https://images.unsplash.com/photo-1518310421734-95e54cfc97a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlYmVycnklMjBtdWZmaW4lMjBiYWtlcnl8ZW58MXx8fHwxNzcwNTYwMDc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Muffins'
    },
    {
      id: '6',
      name: 'Chocolate Éclair',
      description: 'Crispy choux pastry filled with vanilla cream',
      price: 6.50,
      image: 'https://images.unsplash.com/photo-1552598827-ea6f80fcbcfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY2xhaXIlMjBwYXN0cnklMjBkZXNzZXJ0fGVufDF8fHx8MTc3MDU2MDA3OXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Pastries'
    },
    {
      id: '7',
      name: 'Artisan Bread',
      description: 'Rustic sourdough with a crispy crust',
      price: 7.00,
      image: 'https://images.unsplash.com/photo-1627308593341-d886acdc06a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwYnJlYWQlMjBiYWtlcnl8ZW58MXx8fHwxNzcwNDc3OTczfDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Bread'
    }
];
