import React from 'react';
import Image from 'next/image';
import { useMsal } from '@azure/msal-react';

const LoginPage = ({ onLogin }: { onLogin: () => void }) => {
    const { instance } = useMsal();
  
    const handleLoginClick = () => {
      instance.loginPopup({
        scopes: ['user.read'],
      }).then(response => {
        instance.setActiveAccount(response.account);
        onLogin();  
      }).catch(e => {
        console.error(e);
      });
    };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-200 to-gray-400">
      <div className="bg-white rounded-lg shadow-lg p-16 max-w-md text-center">
        <div className="mx-auto mb-6 h-16 relative">
            <Image
                    src="/logo-dark.png" 
                    alt="UAI Logo"
                    layout="fill" 
                    objectFit="contain" 
                />
        </div>
        <h1 className="text-2xl font-semibold mb-4">Firma Docentes</h1>
        <p className="mb-8 text-lg">Ingrese con su correo UAI</p>
        <button
            onClick={handleLoginClick}
            className="bg-white border border-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg flex items-center justify-center shadow-md hover:bg-gray-100 w-full"
            >
            <div className="relative h-6 w-6">  {/* Ajusta el tamaño del logo */}
                <Image
                src="https://www.microsoft.com/favicon.ico"
                alt="Microsoft"
                unoptimized
                layout="fill"
                objectFit="contain"
                />
            </div>
            </button>
      </div>
    </div>
  );
};

export default LoginPage;
