export type DemandeAPI = {
    id: number;
    numero_therefore: number;
    numero_web: number;
    code_qualification: string;
    date_creation: string;
    numero_adherent: string;
    rang_beneficiaire: string;
    statut: string;
    origine: string;
};

export type DemandesResponse = {
    pagination: {
        nombre_items: number;
        numero_page: number;
        total_items: number;
        total_pages: number;
    };
    data: DemandeAPI[];
};

export const demandesResponse: DemandesResponse = {
    pagination: {
        nombre_items: 10,
        numero_page: 1,
        total_items: 22,
        total_pages: 3
    },
    data: [
        {
            id: 585810,
            numero_therefore: 5996510,
            numero_web: 685810,
            code_qualification: "declaration_teletransmission",
            date_creation: "2026-05-26 12:18:49",
            numero_adherent: "0891438",
            rang_beneficiaire: "11",
            statut: "Dossier traité",
            origine: "Messagerie sécurisée"
        },
        {
            id: 584141,
            numero_therefore: 5993228,
            numero_web: 684141,
            code_qualification: "remboursement_soins_courants",
            date_creation: "2026-05-23 15:24:25",
            numero_adherent: "0891438",
            rang_beneficiaire: "11",
            statut: "Dossier traité, virement à venir",
            origine: "Messagerie sécurisée"
        },
        {
            id: 535783,
            numero_therefore: 5878466,
            numero_web: 635783,
            code_qualification: "remboursement_autres",
            date_creation: "2026-04-15 18:09:40",
            numero_adherent: "0891438",
            rang_beneficiaire: "00",
            statut: "Inconnu",
            origine: "Messagerie sécurisée"
        },
        {
            id: 248655,
            numero_therefore: 5204989,
            numero_web: 348655,
            code_qualification: "remboursement_dentaire",
            date_creation: "2025-10-30 17:41:27",
            numero_adherent: "0891438",
            rang_beneficiaire: "02",
            statut: "Dossier traité, virement à venir",
            origine: "Messagerie sécurisée"
        },
        {
            id: 246041,
            numero_therefore: 5199453,
            numero_web: 346041,
            code_qualification: "remboursement_dentaire",
            date_creation: "2025-10-29 12:59:06",
            numero_adherent: "0891438",
            rang_beneficiaire: "11",
            statut: "Dossier traité, virement à venir",
            origine: "Messagerie sécurisée"
        },
        {
            id: 217829,
            numero_therefore: 5143790,
            numero_web: 317829,
            code_qualification: "remboursement_autres",
            date_creation: "2025-10-14 20:26:56",
            numero_adherent: "0891438",
            rang_beneficiaire: "00",
            statut: "Dossier traité",
            origine: "Messagerie sécurisée"
        },
        {
            id: 217825,
            numero_therefore: 5143786,
            numero_web: 317825,
            code_qualification: "remboursement_dentaire",
            date_creation: "2025-10-14 20:24:38",
            numero_adherent: "0891438",
            rang_beneficiaire: "00",
            statut: "Dossier traité, virement à venir",
            origine: "Messagerie sécurisée"
        },
        {
            id: 198593,
            numero_therefore: 5107851,
            numero_web: 298593,
            code_qualification: "declaration_teletransmission",
            date_creation: "2025-10-06 12:56:06",
            numero_adherent: "0891438",
            rang_beneficiaire: "00",
            statut: "Dossier traité",
            origine: "Messagerie sécurisée"
        },
        {
            id: 198587,
            numero_therefore: 5107845,
            numero_web: 298587,
            code_qualification: "declaration_teletransmission",
            date_creation: "2025-10-06 12:54:50",
            numero_adherent: "0891438",
            rang_beneficiaire: "11",
            statut: "Dossier traité",
            origine: "Messagerie sécurisée"
        },
        {
            id: 178116,
            numero_therefore: 5057090,
            numero_web: 278116,
            code_qualification: "remboursement_dentaire",
            date_creation: "2025-09-24 13:52:38",
            numero_adherent: "0891438",
            rang_beneficiaire: "11",
            statut: "Dossier traité",
            origine: "Messagerie sécurisée"
        }
    ]
};

export const demandes = demandesResponse.data;

