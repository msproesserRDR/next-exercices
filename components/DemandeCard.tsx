"use client";
// Par défaut dans Next.js, les composants sont rendus côté serveur (Server Components).
// Mais dès qu'un composant utilise des fonctionnalités interactives du navigateur - comme useState, onClick, etc.
// - il faut le marquer avec "use client" pour que React le rende côté client avec son interactivité.

type Message = {
    id: number;
    date: string;
    message: string;
    auteur: "assure" | "gestionnaire";
};

type DemandeCardProps = {
    id: number;
    qualification: string;
    dateCreation: string;
    statut: string;
    origine: string;
    numeroWeb: number;
};

export default function DemandeCard({ id, qualification, dateCreation, statut, origine, numeroWeb }: DemandeCardProps) {
    return (
        <div className="rounded-lg border p-4 shadow-sm">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{qualification}</h3>
                <span className="text-sm text-gray-400">#{numeroWeb}</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">
                {new Date(dateCreation).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
            </p>
            <p className="mt-2 font-medium">{statut}</p>
            <p className="text-sm text-gray-500 mt-1">{origine}</p>
        </div>
    );
}
