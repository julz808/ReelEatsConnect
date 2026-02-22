'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowLeft, Mail, Lock, User } from 'lucide-react'

export default function CreatorLogin() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const supabase = createClient()

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    // Frontend-only mode - skip actual authentication
    if (!supabase) {
      console.log('Supabase credentials not set - running in frontend-only mode')
      await new Promise(resolve => setTimeout(resolve, 500))
      router.push('/creator/dashboard')
      return
    }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    router.push('/creator/dashboard')
    router.refresh()
  }

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col">
        {/* Back button */}
        <div className="p-8">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
        </div>

        {/* Form container */}
        <div className="flex-1 flex items-center justify-center px-8 pb-16">
          <div className="w-full max-w-md">
            <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="flex items-center gap-3 mb-8">
                <Image
                  src="/icon.png"
                  alt="ReelEats"
                  width={40}
                  height={40}
                  className="rounded-xl"
                />
                <span className="font-heading font-bold text-2xl">
                  ReelEats <span className="text-primary">Connect</span>
                </span>
              </div>
              <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
                Welcome back, <span className="text-primary">Creator</span>
              </h1>
              <p className="text-lg text-gray-600">
                Sign in to continue connecting with amazing venues
              </p>
            </div>

            <form onSubmit={handleEmailLogin} className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              {error && (
                <div className="p-4 rounded-2xl bg-red-50 border border-red-100 animate-in fade-in duration-300">
                  <p className="text-sm text-red-600">{error}</p>
                </div>
              )}

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-12 h-14 rounded-2xl border-gray-200 text-base transition-all focus:scale-[1.02]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="pl-12 h-14 rounded-2xl border-gray-200 text-base transition-all focus:scale-[1.02]"
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-14 rounded-full text-base font-semibold transition-all hover:scale-105 duration-300 shadow-lg hover:shadow-xl"
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </Button>

              <div className="text-center pt-4">
                <p className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <Link href="/auth/signup/creator" className="text-primary font-semibold hover:underline transition-colors">
                    Create account
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Right side - Visual */}
      <div className="hidden lg:block lg:w-1/2 relative bg-gradient-to-br from-primary/5 to-primary/20">
        <div className="absolute inset-0 flex items-center justify-center p-16">
          <div className="max-w-lg text-center animate-in fade-in slide-in-from-right duration-1000 delay-300">
            <div className="mb-8 inline-flex items-center justify-center w-32 h-32 rounded-full bg-white/80 backdrop-blur-sm shadow-2xl transition-all hover:scale-110 duration-500">
              <User className="w-16 h-16 text-primary" />
            </div>
            <h2 className="font-heading font-bold text-4xl mb-6 text-gray-900">
              Your Connections Await
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Jump back into building your creator portfolio and connecting with Melbourne's best venues.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
