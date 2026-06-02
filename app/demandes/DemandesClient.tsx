"use client";

import { useState } from "react";
import DemandeCard from "../../components/DemandeCard";
import { DemandeAPI } from "./data";

const qualificationLabels: Record<string, string> = {
    declaration_teletransmission: "Déclaration télétransmission",
    remboursement_soins_courants: "Remboursement soins courants",
    remboursement_autres: "Remboursement autres",
    remboursement_dentaire: "Remboursement dentaire",
    devis_hospitalisation: "Devis hospitalisation",
};

export default function DemandesClient({ demandes }: { demandes: DemandeAPI[] }) {
    const [filtre, setFiltre] = useState("Toutes");

    const filtres = ["Toutes", "En cours", "Clôturées"];

    const demandesFiltrees =
        filtre === "Toutes"
            ? demandes
            : filtre === "En cours"
                ? demandes.filter((d) => d.statut === "En cours d'instruction")
                : demandes.filter((d) => d.statut !== "En cours d'instruction");

    return (
        <div>
            <div className="flex flex-wrap gap-2 mb-4">
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
                        {f}
                    </button>
                ))}
            </div>
            <div className="grid gap-4">
                {demandesFiltrees.map((demande) => (
                    <DemandeCard
                        key={demande.id}
                        id={demande.id}
                        qualification={qualificationLabels[demande.code_qualification] || demande.code_qualification}
                        dateCreation={demande.date_creation}
                        statut={demande.statut}
                        origine={demande.origine}
                        numeroWeb={demande.numero_web}
                    />
                ))}
            </div>
        </div>
    );
}
