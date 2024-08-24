'use client';

import { useMsal } from '@azure/msal-react';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import LoginPage from '@/components/LoginPage';

export default function Home() {
  const { instance } = useMsal();
  const router = useRouter();
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const activeAccount = instance.getActiveAccount();

    if (activeAccount) {
      setUserName(activeAccount.name ?? 'Usuario sin nombre');
      router.push('/main'); 
    }
  }, [instance, router]);

  return (
    <>
      {!userName && (
        <LoginPage onLogin={() => router.push('/main')} />
      )}
    </>
  );
}
