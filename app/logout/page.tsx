'use client'

import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Logout() {
  const router = useRouter()

  useEffect(() => {
    const signOut = async () => {
      const { error } = await supabase.auth.signOut()
      
      if (error) {
        console.error('Error signing out:', error)
      } else {
        router.push('/')
      }
    }

    signOut()
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Signing out...
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            You will be redirected shortly.
          </p>
        </div>
      </div>
    </div>
  )
}
