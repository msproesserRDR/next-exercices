"use client";

import { useState } from "react";
import DemandeCard from "../../components/DemandeCard";

type Demande = {
    id: number;
    sujet: string;
    categorie: string;
    date: string;
    statut: string;
    message: string;
    parentId: number | null;
    auteur: "assure" | "gestionnaire";
};

export default function DemandesClient({ demandes: initialDemandes }: { demandes: Demande[] }) {
    const [demandes] = useState<Demande[]>(initialDemandes);
    const [filtre, setFiltre] = useState("Toutes");

    const filtres = ["Toutes", "En cours", "Clôturée"];

    const demandesRacines = demandes.filter((d) => d.parentId === null);

    const demandesFiltrees =
        filtre === "Toutes"
            ? demandesRacines
            : demandesRacines.filter((d) => d.statut === filtre);

    const getReponses = (id: number) =>
        demandes.filter((d) => d.parentId === id);

    return (
        <div>
            <div className="flex gap-2 mb-4">
                {filtres.map((f) => (
                    <button
                        key={f}
                        onClick={() => setFiltre(f)}
                        className={`px-4 py-2 rounded ${
                            filtre === f
                                ? "bg-blue-600 text-white"
                                : "bg-gray-200 text-gray-700"
                        }`}
                    >
                        {f === "Clôturée" ? "Clôturées" : f}
                    </button>
                ))}
            </div>
            <div className="grid gap-4">
                {demandesFiltrees.map((demande) => (
                    <DemandeCard
                        key={demande.id}
                        {...demande}
                        reponses={getReponses(demande.id)}
                    />
                ))}
            </div>
        </div>
    );
}
