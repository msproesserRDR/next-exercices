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
    sujet: string;
    categorie: string;
    date: string;
    statut: string;
    message: string;
    auteur: "assure" | "gestionnaire";
    reponses?: Message[];
};

export default function DemandeCard({ id, sujet, categorie, date, statut, message, auteur, reponses = [] }: DemandeCardProps) {
    const estCloturee = statut.toLowerCase() === "clôturée" || statut.toLowerCase() === "cloturee";

    const labelAuteur = (a: "assure" | "gestionnaire") =>
        a === "gestionnaire" ? "🏢 Gestionnaire" : "👤 Assuré";

    return (
        <div className="rounded-lg border p-4 shadow-sm">
            <div className="flex items-center gap-2">
                {!estCloturee && (
                    <span className="inline-block h-3 w-3 rounded-full bg-red-500"></span>
                )}
                <h3 className="text-lg font-semibold">{sujet}</h3>
            </div>
            <p className="text-sm text-gray-500">{categorie}</p>
            <p className="text-sm text-gray-500">
                {new Date(date).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
            </p>
            <p className="mt-1 font-medium">{statut}</p>

            {/* Message initial */}
            <div className="mt-2 p-3 bg-gray-50 rounded">
                <p className="text-xs text-gray-400 mb-1">{labelAuteur(auteur)} — Message initial</p>
                <p className="text-gray-700">{message}</p>
            </div>

            {/* Réponses */}
            {reponses.length > 0 && (
                <div className="mt-3 space-y-2 border-l-2 border-blue-300 pl-4">
                    {reponses.map((rep) => (
                        <div key={rep.id} className={`p-3 rounded ${rep.auteur === "gestionnaire" ? "bg-blue-50" : "bg-gray-50"}`}>
                            <p className="text-xs text-gray-400 mb-1">
                                {labelAuteur(rep.auteur)} — {new Date(rep.date).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                            </p>
                            <p className="text-gray-700">{rep.message}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
