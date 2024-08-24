'use client';

import { useMsal } from '@azure/msal-react';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const { instance } = useMsal();
  const router = useRouter();
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const activeAccount = instance.getActiveAccount();
    if (!activeAccount) {
      router.push('/');  // Redirigir a la página de inicio si no está autenticado
    } else {
      setUserName(activeAccount.name ?? 'Usuario sin nombre');
    }
  }, [instance, router]);

  const handleLogout = () => {
    instance.logoutPopup().then(() => {
      instance.setActiveAccount(null);  // Limpiar la cuenta activa
      router.push('/');  // Redirigir a la página principal después del logout
    }).catch(e => {
      console.error(e);
    });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-2xl">Hola, {userName}!</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded mt-4"
        >
          Cerrar sesión
        </button>
        {/* Aquí puedes agregar más contenido del dashboard */}
      </div>
    </div>
  );
}
