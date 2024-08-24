import { useMsal } from '@azure/msal-react';
import React from 'react';

const LogoutButton = ({ onLogout }: { onLogout: () => void }) => {
    const { instance } = useMsal();

    const handleLogout = () => {
        instance.logoutPopup().then(() => {
        instance.setActiveAccount(null);  // Limpiar la cuenta activa
        onLogout();  // Llamar a la función de callback para actualizar la UI
        }).catch(e => {
        console.error(e);
        });
    };

    return (
        <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded mt-4"
        >
        Cerrar sesión
        </button>
    );
};

export default LogoutButton;
