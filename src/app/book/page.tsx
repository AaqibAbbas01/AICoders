import { redirect } from 'next/navigation';

export default function BookPage() {
  // Redirect to book-slot page which already exists
  redirect('/book-slot');
} 