'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { LogOut, User, Settings } from 'lucide-react'

interface NavbarProps {
  userType: 'creator' | 'restaurant'
  userName?: string
  userImage?: string
}

export function Navbar({ userType, userName = 'User', userImage }: NavbarProps) {
  const pathname = usePathname()

  const creatorLinks = [
    { href: '/creator/dashboard', label: 'Dashboard' },
    { href: '/creator/browse-restaurants', label: 'Browse Restaurants' },
    { href: '/creator/connections', label: 'Connections' },
    { href: '/creator/profile', label: 'My Profile' },
  ]

  const restaurantLinks = [
    { href: '/restaurant/dashboard', label: 'Dashboard' },
    { href: '/restaurant/browse-creators', label: 'Browse Creators' },
    { href: '/restaurant/connections', label: 'Connections' },
    { href: '/restaurant/profile', label: 'My Venue' },
  ]

  const links = userType === 'creator' ? creatorLinks : restaurantLinks

  return (
    <nav className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/icon.png"
                alt="ReelEats"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-heading font-bold text-lg hidden sm:inline">
                ReelEats
              </span>
            </Link>

            <div className="hidden md:flex gap-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition-colors ${
                    pathname === link.href
                      ? 'text-primary font-medium'
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar>
                  <AvatarImage src={userImage} alt={userName} />
                  <AvatarFallback className="bg-primary text-white">
                    {userName.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <div className="flex flex-col">
                  <span className="font-medium">{userName}</span>
                  <span className="text-xs text-muted-foreground capitalize">
                    {userType} Account
                  </span>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href={`/${userType}/profile`} className="cursor-pointer">
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive cursor-pointer">
                <LogOut className="mr-2 h-4 w-4" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden pb-4 flex gap-4 overflow-x-auto">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm whitespace-nowrap transition-colors ${
                pathname === link.href
                  ? 'text-primary font-medium'
                  : 'text-gray-600'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
