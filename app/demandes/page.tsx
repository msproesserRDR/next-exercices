import DemandesClient from "./DemandesClient";

const demandes: { id: number; sujet: string; categorie: string; date: string; statut: string; message: string; parentId: number | null; auteur: "assure" | "gestionnaire" }[] = [
    {
        id: 1,
        sujet: "Problème de connexion",
        categorie: "Technique",
        date: "2026-05-20 12:09:34",
        statut: "En cours",
        message: "Je n'arrive par à me connecter depuis ce matin.",
        parentId: null,
        auteur: "assure",
    },
    {
        id: 2,
        sujet: "Demande de remboursement",
        categorie: "Facturation",
        date: "2026-05-21 09:12:23",
        statut: "Clôturée",
        message: "Remboursement effectué avec succès.",
        parentId: null,
        auteur: "assure",
    },
    {
        id: 3,
        sujet: "Problème de connexion",
        categorie: "Technique",
        date: "2026-05-22 17:45:21",
        statut: "En cours",
        message: "Nous avons en effet des soucis avec l'authentification. Nos équipes mettent tout en oeuvre pour rétablir la situation.",
        parentId: 1,
        auteur: "gestionnaire",
    },
];

export default function Page() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Mes demandes</h1>
            <DemandesClient demandes={demandes}/>
        </div>
    );
}