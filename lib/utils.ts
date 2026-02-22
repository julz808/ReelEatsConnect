import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-AU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export function getImageUrl(path: string | null, supabaseUrl?: string) {
  if (!path) return '/placeholder-avatar.png'
  if (!supabaseUrl) return path
  return `${supabaseUrl}/storage/v1/object/public/profile-images/${path}`
}
