import { Injectable } from '@angular/core';

@Injectable()
export class NodeService {
  getTreeNodesData() {
    return [
      {
        key: '0',
        label: 'Dashboard',
        // data: 'Documents Folder',
        icon: 'pi pi-fw pi-inbox',
        children: [
          {
            key: '0-0',
            label: 'Dashboard globale',
            // data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
          },
          {
            key: '0-1',
            label: 'Dashboard commerciale',
            // data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
          },
          {
            key: '0-2',
            label: 'Dashboard CRM',
            // data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
          },
          {
            key: '0-3',
            label: 'Dashboard DD',
            // data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
          },
        ],
      },
      {
        key: '1',
        label: 'Point de vente',
        // data: 'Events Folder',
        icon: 'pi pi-fw pi-calendar',
        children: [
          {
            key: '1-0',
            label: 'Point de vente',
            icon: 'pi pi-fw pi-calendar-plus',
            // data: 'Meeting',
          },
          {
            key: '1-1',
            label: 'Point de vente cafette',
            icon: 'pi pi-fw pi-calendar-plus',
            // data: 'Product Launch',
          },
          {
            key: '1-2',
            label: 'Weekly Inventory',
            icon: 'pi pi-fw pi-calendar-plus',
            // data: 'Report Review',
          },
          {
            key: '1-3',
            label: 'Transfert des recettes',
            icon: 'pi pi-fw pi-calendar-plus',
            // data: 'Report Review',
          },
          {
            key: '1-4',
            label: 'Call center',
            icon: 'pi pi-fw pi-calendar-plus',
            // data: 'Report Review',
          },
        ],
      },
      {
        key: '2',
        label: 'Rapports',
        // data: 'Movies Folder',
        icon: 'pi pi-fw pi-star-fill',
        children: [
          {
            key: '2-0',
            icon: 'pi pi-fw pi-star-fill',
            label: 'Rapport journalier',
            // data: 'Pacino Movies',
          },
          {
            key: '2-1',
            label: 'Consulation des ventes',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '2-2',
            label: 'Consultation des commandes',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '2-3',
            label: 'Consultation des Caisses',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '2-4',
            label: 'Consultation des CA par Boutique',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '2-5',
            label: 'Consultation des Transactions Grp',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '2-6',
            label: 'Consultation des Inventaires',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '2-7',
            label: 'Consultation des Récéption ',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '2-8',
            label: 'Rapports detaillé par site',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
        ],
      },
      {
        key: '3',
        label: 'CRM',
        // data: 'Movies Folder',
        icon: 'pi pi-fw pi-star-fill',
        children: [
          {
            key: '3-0',
            icon: 'pi pi-fw pi-star-fill',
            label: 'Agenda',
            // data: 'Pacino Movies',
          },
          {
            key: '3-1',
            label: 'Ajouter un paramètre CRM',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '3-2',
            label: 'Ajouter une population',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '3-3',
            label: 'Ajouter une réclamation',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '3-4',
            label: 'Ajouter une satisfaction',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
        ],
      },
      {
        key: '4',
        label: 'Promotion',
        // data: 'Movies Folder',
        icon: 'pi pi-fw pi-star-fill',
        children: [
          {
            key: '4-0',
            icon: 'pi pi-fw pi-star-fill',
            label: 'Ajouter population article',
            // data: 'Pacino Movies',
          },
          {
            key: '4-1',
            label: 'Ajouter population client',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '4-2',
            label: 'Ajouter avantage',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '4-3',
            label: 'Ajouter promotion',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
        ],
      },
      {
        key: '5',
        label: 'Assurance de qualité',
        // data: 'Movies Folder',
        icon: 'pi pi-fw pi-star-fill',
        children: [
          {
            key: '5-0',
            icon: 'pi pi-fw pi-star-fill',
            label: 'Ajouter paramètre de contrôle',
            // data: 'Pacino Movies',
          },
          {
            key: '5-1',
            label: 'Saisie résultats de contrôle',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '5-2',
            label: 'Ajouter une gamme',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
        ],
      },
      {
        key: '6',
        label: 'Gestion des Fournisseurs',
        // data: 'Movies Folder',
        icon: 'pi pi-fw pi-star-fill',
        children: [
          {
            key: '6-0',
            icon: 'pi pi-fw pi-star-fill',
            label: 'La liste des achats par Fournisseur',
            // data: 'Pacino Movies',
          },
          {
            key: '6-1',
            label: 'Activité Fournisseur',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '6-2',
            label: "Chiffre d'affaire par Fournisseur",
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '6-3',
            label: 'La liste des Fournisseurs',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '6-4',
            label: 'Ajouter Fournisseurs"',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '6-5',
            label: 'Répertoire Fournisseurs',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '6-6',
            label: 'Répertoire Fournisseurs Métier',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '6-7',
            label: 'Liste Répertoire Fournisseurs ',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
        ],
      },
      {
        key: '7',
        label: 'Gestion des Fournisseurs STD',
        // data: 'Movies Folder',
        icon: 'pi pi-fw pi-star-fill',
        children: [
          {
            key: '7-0',
            icon: 'pi pi-fw pi-star-fill',
            label: 'La liste des Clients',
            // data: 'Pacino Movies',
          },
          {
            key: '7-1',
            label: 'Ajouter Fournisseur STD',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
        ],
      },
      {
        key: '8',
        label: 'Gestion des Clients STD',
        // data: 'Movies Folder',
        icon: 'pi pi-fw pi-star-fill',
        children: [
          {
            key: '8-0',
            icon: 'pi pi-fw pi-star-fill',
            label: 'La liste des Clients',
            // data: 'Pacino Movies',
          },
          {
            key: '8-1',
            label: 'Ajouter Clients STD',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
        ],
      },
      {
        key: '9',
        label: 'Gestion des Clients',
        // data: 'Movies Folder',
        icon: 'pi pi-fw pi-star-fill',
        children: [
          {
            key: '9-0',
            icon: 'pi pi-fw pi-star-fill',
            label: 'La liste des Clients',
            // data: 'Pacino Movies',
          },
          {
            key: '9-1',
            label: 'Ajouter Clients',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '9-2',
            label: 'Répertoire Clients',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '9-3',
            label: 'Liste Répertoire Fournisseurs',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '9-4',
            label: 'La liste des ventes par clients',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '9-5',
            label: 'Activité clients',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '9-6',
            label: 'Soldes clients',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '9-7',
            label: "Chiffre d'affaires par clients",
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
        ],
      },
      {
        key: '10',
        label: 'Gestion des clients mobile',
        // data: 'Movies Folder',
        icon: 'pi pi-fw pi-star-fill',
        children: [
          {
            key: '10-0',
            icon: 'pi pi-fw pi-star-fill',
            label: 'La liste des Clients',
            // data: 'Pacino Movies',
          },
          {
            key: '10-1',
            label: 'Ajouter Clients',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '10-2',
            label: 'Ajouter Cluster',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '10-3',
            label: 'Ajouter Category',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '10-4',
            label: 'Ajouter Sub Cluste',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '10-5',
            label: 'Ajouter Category Type',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '10-6',
            label: 'Ajouter canaux de vente',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
        ],
      },
      {
        key: '11',
        label: 'Supervision',
        // data: 'Movies Folder',
        icon: 'pi pi-fw pi-star-fill',
        children: [
          {
            key: '11-0',
            icon: 'pi pi-fw pi-star-fill',
            label: 'Crée demande de chargement',
            // data: 'Pacino Movies',
          },
          {
            key: '11-1',
            label: 'Validation des demandes de chargement',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '11-2',
            label: 'Validation des demandes de chargement Sup',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '11-3',
            label: 'Validation des demandes de dechargement',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '11-4',
            label: 'Transfert demandes de chargement à la livraison',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '11-5',
            label: 'Liste des Chargement non Respectés',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '11-6',
            label: 'Service roadmap',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '11-7',
            label: 'Décompte Role',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
        ],
      },
      {
        key: '12',
        label: 'Gestion des itinéraires',
        // data: 'Movies Folder',
        icon: 'pi pi-fw pi-star-fill',
        children: [
          {
            key: '12-0',
            icon: 'pi pi-fw pi-star-fill',
            label: 'Listes des itinéraires',
            // data: 'Pacino Movies',
          },
          {
            key: '12-1',
            label: 'Ajouter un itinéraire',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
        ],
      },
      {
        key: '13',
        label: 'Gestion des roles',
        // data: 'Movies Folder',
        icon: 'pi pi-fw pi-star-fill',
        link: '/apps/role',
        children: [
          {
            key: '13-0',
            icon: 'pi pi-fw pi-star-fill',
            label: 'Créer un nouveau role',
            link: '/apps/role/new-role',
            // data: 'Pacino Movies',
          },
          {
            key: '13-1',
            label: 'Liste des roles',
            icon: 'pi pi-fw pi-star-fill',
            link: '/apps/role/list-roles',
            // data: 'De Niro Movies',
          },
        ],
      },
      {
        key: '14',
        label: 'Token Series',
        // data: 'Movies Folder',
        icon: 'pi pi-fw pi-star-fill',
        children: [
          {
            key: '14-0',
            icon: 'pi pi-fw pi-star-fill',
            label: 'Créer token serie',
            // data: 'Pacino Movies',
          },
          {
            key: '14-1',
            label: 'Liste des token',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
        ],
      },
      {
        key: '15',
        label: 'Gestion des services',
        // data: 'Movies Folder',
        icon: 'pi pi-fw pi-star-fill',
        children: [
          {
            key: '15-0',
            icon: 'pi pi-fw pi-star-fill',
            label: 'Créer un nouveau service',
            // data: 'Pacino Movies',
          },
          {
            key: '15-1',
            label: 'Consultation des Services',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
        ],
      },
      {
        key: '16',
        label: 'Gestion Standard des Produits',
        // data: 'Movies Folder',
        icon: 'pi pi-fw pi-star-fill',
        children: [
          {
            key: '16-0',
            icon: 'pi pi-fw pi-star-fill',
            label: 'Liste des Produits',
            // data: 'Pacino Movies',
          },
          {
            key: '16-1',
            label: 'Modification des Produits',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '16-2',
            label: 'Ajouter un Produit',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
        ],
      },
      {
        key: '17',
        label: 'Gestion des articles',
        // data: 'Movies Folder',
        icon: 'pi pi-fw pi-star-fill',
        children: [
          {
            key: '17-0',
            icon: 'pi pi-fw pi-star-fill',
            label: 'La liste des articles',
            // data: 'Pacino Movies',
          },
          {
            key: '17-1',
            label: 'Modification des articles',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '17-2',
            label: 'Génération Article',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '17-3',
            label: 'Ajouter des Articles',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '17-4',
            label: 'Ajouter Article via Modèle',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '17-5',
            label: 'MAINT Cout Article',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '17-6',
            label: 'Créer une page de produits',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '17-7',
            label: 'Gestion des Modèles',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
            children: [
              {
                key: '17-7-0',
                label: 'Ajouter Un Modèle',
                icon: 'pi pi-fw pi-star-fill',
                data: 'De Niro Movies',
              },
              {
                key: '17-7-1',
                label: 'Liste des Modèles',
                icon: 'pi pi-fw pi-star-fill',
                data: 'De Niro Movies',
              },
              {
                key: '17-7-2',
                label: 'Modification des Modèle',
                icon: 'pi pi-fw pi-star-fill',
                data: 'De Niro Movies',
              },
            ],
          },
        ],
      },
      {
        key: '18',
        label: 'Gestion Stock',
        // data: 'Movies Folder',
        icon: 'pi pi-fw pi-star-fill',
        children: [
          {
            key: '18-0',
            icon: 'pi pi-fw pi-star-fill',
            label: 'Chargement Des Vans',
            // data: 'Pacino Movies',
          },
          {
            key: '18-1',
            label: 'Chargement Des Vans 2',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '18-2',
            label: 'Chargement Des Vans (scan)',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '18-3',
            label: 'Dechargement Des Vans',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '18-4',
            label: 'Consultation demandes de chargement',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '18-5',
            label: 'Réception OA',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '18-6',
            label: 'Réception et Etiquetage',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '18-7',
            label: 'Etiquetage MP',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '18-8',
            label: 'Transfert Article',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '18-9',
            label: 'Sortie non Planifiée',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '18-10',
            label: 'Entrée non Planifiée',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '18-11',
            label: 'Réception non Planifiée Etiquetage',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '18-12',
            label: 'Réception Bobines',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '18-13',
            label: 'Mise A Jour Le Prix Récéption',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '18-14',
            label: 'Modification Statut Stock',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '18-15',
            label: 'Modification Statut palettes',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '18-16',
            label: 'Controle Palette',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '18-17',
            label: 'Consultation Stocks ',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '18-18',
            label: 'Consultation des Transactions',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '18-19',
            label: 'correction des Transactions',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '18-20',
            label: 'Consultation des Transactions Groupées',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '18-21',
            label: 'Etat du Stock A date',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '18-22',
            label: 'Journal des stocks',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '18-23',
            label: 'Etat du Stock par Emplacement',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '18-24',
            label: 'Etat du Stock par Statut',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '18-25',
            label: 'Etat du Stock sous sécurité',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },

          {
            key: '18-26',
            label: 'Gestion des inventaires',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
            children: [
              {
                key: '18-26-0',
                label: 'Generation liste d’inventaire',
                icon: 'pi pi-fw pi-star-fill',
                data: 'De Niro Movies',
              },
              {
                key: '18-26-1',
                label: 'Menu gel des stocks',
                icon: 'pi pi-fw pi-star-fill',
                data: 'De Niro Movies',
              },
              {
                key: '18-26-2',
                label: 'Saisie inventaire',
                icon: 'pi pi-fw pi-star-fill',
                data: 'De Niro Movies',
              },
              {
                key: '18-26-3',
                label: 'Analyse des ecarts',
                icon: 'pi pi-fw pi-star-fill',
                data: 'De Niro Movies',
              },
              {
                key: '18-26-4',
                label: 'ReSaisie inventaire',
                icon: 'pi pi-fw pi-star-fill',
                data: 'De Niro Movies',
              },
              {
                key: '18-26-5',
                label: 'Validation inventaire',
                icon: 'pi pi-fw pi-star-fill',
                data: 'De Niro Movies',
              },
            ],
          },
        ],
      },
      {
        key: '19',
        label: 'Gestion des achats',
        // data: 'Movies Folder',
        icon: 'pi pi-fw pi-star-fill',
        children: [
          {
            key: '19-0',
            icon: 'pi pi-fw pi-star-fill',
            label: "Demande d'achats",
            // data: 'Pacino Movies',
          },
          {
            key: '19-1',
            label: "Liste des Demande d'achats",
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '19-2',
            label: 'Approbation Demande',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '19-3',
            label: "Approbation des Demandes d'achats",
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '19-4',
            label: 'Offre Fournisseurs',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '19-5',
            label: 'Liste des Offre Fournisseurs',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '19-6',
            label: 'Tableau comparatif des offre',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '19-7',
            label: 'Bon de commande',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '19-8',
            label: 'Simulateur des commandes',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '19-9',
            label: 'Simulateur des commandes Embalage',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '19-10',
            label: 'Impression Bon de commande',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '19-11',
            label: 'Liste des Bon de commande',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '19-12',
            label: 'Edit Status BC',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '19-13',
            label: 'Consultations des commandes',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '19-14',
            label: 'Paiement des Récéption',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
        ],
      },
      {
        key: '20',
        label: 'Gestion des Ventes',
        // data: 'Movies Folder',
        icon: 'pi pi-fw pi-star-fill',
        children: [
          {
            key: '20-0',
            icon: 'pi pi-fw pi-star-fill',
            label: 'Offres Commerciales',
            // data: 'Pacino Movies',
          },
          {
            key: '20-1',
            label: 'Liste des Offres',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '20-2',
            label: 'Confirmation Offre',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '20-3',
            label: 'Commande Clients',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '20-4',
            label: 'Modification des Commandes',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '20-5',
            label: 'Débloque commande',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '20-6',
            label: 'Confirmation commande',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '20-7',
            label: 'Liste des Commandes',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '20-8',
            label: 'Commande Clients Céramic',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '20-9',
            label: 'Génération des BL',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '20-10',
            label: 'Versement Client',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '20-11',
            label: 'Paiement des BL',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '20-12',
            label: 'Facturation ',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '20-13',
            label: 'Facture en Attente',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '20-14',
            label: 'Facture Projet',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '20-15',
            label: 'Imputation Facture Projet',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '20-16',
            label: 'Impression Facture en Attente',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '20-17',
            label: 'Imputation Facture',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '20-18',
            label: 'Liste des Factures',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '20-19',
            label: 'Ajouter Facture DD',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '20-20',
            label: 'Liste des Factures DD',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '20-21',
            label: 'Liste des Ventes DD',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '20-22',
            label: 'Liste des Paiement DD',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '20-23',
            label: 'Liste des Visites',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
        ],
      },
      {
        key: '21',
        label: 'Gestion des Caisses',
        // data: 'Movies Folder',
        icon: 'pi pi-fw pi-star-fill',
        children: [
          {
            key: '21-0',
            icon: 'pi pi-fw pi-star-fill',
            label: 'Recette Vendeur',
            // data: 'Pacino Movies',
          },
          {
            key: '21-1',
            label: 'Liste des Recettes vendeurs',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '21-2',
            label: 'Transfert Entre Caisse',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '21-3',
            label: 'Liste des Transferts Recettes',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '21-4',
            label: 'Paiement Dépense',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
        ],
      },
      {
        key: '22',
        label: 'Gestion des Prévisions',
        // data: 'Movies Folder',
        icon: 'pi pi-fw pi-star-fill',
        children: [
          {
            key: '22-0',
            icon: 'pi pi-fw pi-star-fill',
            label: 'Maint Prévision',
            // data: 'Pacino Movies',
          },
          {
            key: '22-1',
            label: 'Liste des Prévisions',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
        ],
      },
      {
        key: '23',
        label: 'Comptabilité Client',
        // data: 'Movies Folder',
        icon: 'pi pi-fw pi-star-fill',
        children: [
          {
            key: '23-0',
            icon: 'pi pi-fw pi-star-fill',
            label: 'Maint des Paiement',
            // data: 'Pacino Movies',
          },
          {
            key: '23-1',
            label: 'Paiement par Projet',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '23-2',
            label: 'Liste des Paiement',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '23-3',
            label: 'Paiement à Rapproché',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '23-4',
            label: 'Maint des Notes de Débit',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '23-5',
            label: 'Journal Client',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
        ],
      },
      {
        key: '24',
        label: 'Comptabilité Fournisseur',
        // data: 'Movies Folder',
        icon: 'pi pi-fw pi-star-fill',
        children: [
          {
            key: '24-0',
            icon: 'pi pi-fw pi-star-fill',
            label: 'Maint des Factures',
            // data: 'Pacino Movies',
          },
          {
            key: '24-1',
            label: 'Liste des factures',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '24-2',
            label: 'Maint des Paiement',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '24-3',
            label: 'Paiement à Rapproché',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '24-4',
            label: 'Liste des Paiements',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '24-5',
            label: 'Maint des Notes de Débit',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '24-6',
            label: 'Journal Fournisseur',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
        ],
      },
      {
        key: '25',
        label: 'Gestion de Production',
        // data: 'Movies Folder',
        icon: 'pi pi-fw pi-star-fill',
        children: [
          {
            key: '25-0',
            icon: 'pi pi-fw pi-star-fill',
            label: 'Maint Ordre de Fabrication',
            // data: 'Pacino Movies',
          },
          {
            key: '25-1',
            label: 'Création des OFs à partir des Commandes',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '25-2',
            label: 'Création des OFs Semi-Finis',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '25-3',
            label: 'List des OFs',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '25-4',
            label: 'Lancement OF avec Liste',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '25-5',
            label: 'Lancement OF',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '25-6',
            label: 'Allocation Palette Par OF',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '25-7',
            label: 'Déclaration Operation',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '25-8',
            label: 'Broyage',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '25-9',
            label: 'OF de Tri',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '25-10',
            label: 'Déclaration bobine',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '25-11',
            label: 'Consommation extrusion',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '25-12',
            label: 'Déclaration Production ',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '25-13',
            label: 'Déclaration Production Palette',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '25-14',
            label: 'Déclaration Consomation',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '25-15',
            label: 'Cloture OF',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '25-16',
            label: 'Calcul Coût Production',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '25-17',
            label: 'List Prix de Revient OF',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '25-18',
            label: 'Etat des Broyages',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
          {
            key: '25-19',
            label: 'Récap des Broyages',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
          },
        ],
      },
      {
        key: '26',
        label: 'Gestion des Contrats',
        // data: 'Movies Folder',
        icon: 'pi pi-fw pi-star-fill',
        children: [
          {
            key: '26-0',
            icon: 'pi pi-fw pi-star-fill',
            label: 'La liste des Contrats',
            // data: 'Pacino Movies',
          },
          {
            key: '26-1',
            label: 'Ajouter un Contrat',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
        ],
      },
      {
        key: '27',
        label: 'Gestion des Employés',
        // data: 'Movies Folder',
        icon: 'pi pi-fw pi-star-fill',
        children: [
          {
            key: '27-0',
            icon: 'pi pi-fw pi-star-fill',
            label: 'Maint des Employés',
            // data: 'Pacino Movies',
          },
          {
            key: '27-1',
            label: 'Liste des Employés',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '27-2',
            label: 'Maint Congés des Employés',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '27-3',
            label: 'Ajout Population Employés',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '27-4',
            label: 'Liste des Population',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '27-5',
            label: 'Modification des Population',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '27-6',
            label: 'Gestion des métier',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
            children: [
              {
                key: '27-6-0',
                label: 'La liste des Code Métiers',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '27-6-1',
                label: 'Ajouter un Code Métier',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
            ],
          },
          {
            key: '27-7',
            label: 'Pointage des Employés',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '27-8',
            label: 'Liste des pointages',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '27-9',
            label: 'Calcule paie',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
        ],
      },
      {
        key: '28',
        label: 'Gestion Des Formations',
        // data: 'Movies Folder',
        icon: 'pi pi-fw pi-star-fill',
        children: [
          {
            key: '28-0',
            icon: 'pi pi-fw pi-star-fill',
            label: 'Création Formation',
            // data: 'Pacino Movies',
          },
          {
            key: '28-1',
            label: 'Modification Des Formation',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '28-2',
            label: 'Liste Des Formations',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '28-3',
            label: 'Demande de Formation Maitier',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '28-4',
            label: 'Demande de Formation Par Service',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '28-5',
            label: 'Demande de Formation',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '28-6',
            label: 'Approuver Demande de Formation',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '28-7',
            label: 'Demande de Formation Par Employée',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '28-8',
            label: 'Création Calendrier de Formation',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
        ],
      },
      {
        key: '29',
        label: 'Gestion des patients',
        // data: 'Movies Folder',
        icon: 'pi pi-fw pi-star-fill',
        children: [
          {
            key: '29-0',
            icon: 'pi pi-fw pi-star-fill',
            label: 'Ajouter un patient',
            // data: 'Pacino Movies',
          },
          {
            key: '29-1',
            label: 'liste des patients',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '29-2',
            label: 'Modification des patients',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '29-3',
            label: 'Gestion des assoications',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
            children: [
              {
                key: '29-3-0',
                label: 'Ajouter une Association',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '29-3-1',
                label: 'Liste des Associations',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '29-3-2',
                label: 'Modification des Associations',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
            ],
          },
          {
            key: '29-4',
            label: 'Gestion des Docteurs',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
            children: [
              {
                key: '29-4-0',
                label: 'Ajouter un Docteur',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '29-4-1',
                label: 'Liste des Docteurs',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '29-4-2',
                label: 'Modification des Docteurs',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
            ],
          },
        ],
      },
      {
        key: '30',
        label: 'Gestion des projets',
        // data: 'Movies Folder',
        icon: 'pi pi-fw pi-star-fill',
        children: [
          {
            key: '30-0',
            icon: 'pi pi-fw pi-star-fill',
            label: 'La liste Detail des Projets',
            // data: 'Pacino Movies',
          },
          {
            key: '30-1',
            label: 'Ajouter un projet',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '30-2',
            label: 'mettre A jour Projet',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '30-3',
            label: 'La liste des Projets',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '30-4',
            label: 'Lancer un projet',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '30-5',
            label: 'Affectation des Employés',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '30-6',
            label: 'Rapport des activités',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '30-7',
            label: 'Déclaration de panne des équipements',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '30-8',
            label: 'Déclaration de accident/incident',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '30-9',
            label: 'Sensibilisation',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '30-10',
            label: 'identification',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '30-11',
            label: 'Fiche revue exigences client V 01 model',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '30-12',
            label: "Fiche de suivi d'affaire projet V02 model",
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '30-13',
            label: 'Gestion des Nomenclatures',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
            children: [
              {
                key: '30-13-0',
                label: 'Maint Code Nomenclature',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '30-13-1',
                label: 'Maint des Nomenclatures',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '30-13-2',
                label: 'Liste des Nomenclatures',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '30-13-3',
                label: 'Affectation Nomenclature',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '30-13-4',
                label: 'Calcul coût des Nomenclatures',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
            ],
          },
          {
            key: '30-14',
            label: 'Gestion des Listes Outils',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
            children: [
              {
                key: '30-14-0',
                label: 'La liste des Listes Outils',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '30-14-1',
                label: 'Ajouter une Liste Outil',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
            ],
          },
          {
            key: '30-15',
            label: 'Gestion des Instructions',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
            children: [
              {
                key: '30-15-0',
                label: 'La liste des Instructions',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '30-15-1',
                label: 'Ajouter une Instruction',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
            ],
          },
        ],
      },
      {
        key: '31',
        label: 'Comptabilité Générale',
        icon: 'pi pi-fw pi-star-fill',
        // data: 'De Niro Movies',
        children: [
          {
            key: '31-0',
            label: 'Affectation Frais d approche',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '31-1',
            label: 'Calcul Coût Moyen Pondéré',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '31-2',
            label: 'Maint Ecriture Standard',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '31-3',
            label: 'Liste des Ecritures',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '31-4',
            label: 'Liste',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
        ],
      },
      {
        key: '32',
        label: 'Gestion des Transporteurs',
        icon: 'pi pi-fw pi-star-fill',
        // data: 'De Niro Movies',
        children: [
          {
            key: '32-0',
            label: 'Ajouter Transporteur',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '32-1',
            label: 'Edit Transporteur',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
          {
            key: '32-2',
            label: 'Liste des Transporteurs',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
        ],
      },
      {
        key: '33',
        label: 'Gestion des utilisateurs',
        icon: 'pi pi-fw pi-star-fill',
        link: '/apps/user',
        // data: 'De Niro Movies',
        children: [
          {
            key: '33-0',
            label: 'Créer un utilisateur back-office',
            icon: 'pi pi-fw pi-star-fill',
            link: '/apps/user/new-user',
            // data: 'De Niro Movies',
          },
          {
            key: '33-1',
            label: 'Liste des utilisateurs back-office',
            icon: 'pi pi-fw pi-star-fill',
            link: '/apps/user/list-users',
            // data: 'De Niro Movies',
          },
          {
            key: '33-2',
            label: 'Créer un utilisateur mobile',
            icon: 'pi pi-fw pi-star-fill',
            link: '/apps/user/new-user-mobile',
            // data: 'De Niro Movies',
          },
          {
            key: '33-3',
            label: 'Liste des utilisateurs mobile',
            icon: 'pi pi-fw pi-star-fill',
            link: '/apps/user/list-users-mobile',
            // data: 'De Niro Movies',
          },
        ],
      },
      {
        key: '34',
        label: 'Gestion des profils',
        icon: 'pi pi-fw pi-star-fill',
        link: '/apps/profile',
        // data: 'De Niro Movies',
        children: [
          {
            key: '34-0',
            label: 'Ajouter un profil back-office',
            icon: 'pi pi-fw pi-star-fill',
            link: '/apps/profile/new-profile',
            // data: 'De Niro Movies',
          },
          {
            key: '34-1',
            label: 'liste des profiles back-office',
            icon: 'pi pi-fw pi-star-fill',
            link: '/apps/profile/list-profiles',
            // data: 'De Niro Movies',
          },
          {
            key: '34-2',
            label: 'Ajouter un profil mobile',
            icon: 'pi pi-fw pi-star-fill',
            link: '/apps/profile/new-profile-mobile',
            // data: 'De Niro Movies',
          },

          {
            key: '34-3',
            label: 'Affection des pages produits',
            icon: 'pi pi-fw pi-star-fill',
            link: '/apps/profile/set-product-pages',
            // data: 'De Niro Movies',
          },
          {
            key: '34-4',
            label: 'liste des profiles mobile',
            icon: 'pi pi-fw pi-star-fill',
            link: '/apps/profile/list-profile-mobile',
            // data: 'De Niro Movies',
          },
          {
            key: '34-5',
            label: 'Ajouter un menu mobile',
            icon: 'pi pi-fw pi-star-fill',
            link: '/apps/profile/new-profile-menu-mobile',
            // data: 'De Niro Movies',
          },
        ],
      },
      {
        key: '35',
        label: 'Paramétrages',
        icon: 'pi pi-fw pi-star-fill',

        // data: 'De Niro Movies',
        children: [
          {
            key: '35-0',
            label: 'Parametrage Stock',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
            children: [
              {
                key: '35-0-0',
                label: 'Maint des Sites',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-0-1',
                label: 'List des Sites',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-0-2',
                label: 'Maint des Emplacements',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-0-3',
                label: 'Liste des Emplacements',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-0-4',
                label: 'Maint des Status de Stock',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-0-5',
                label: 'List des Status Stock',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
            ],
          },
          {
            key: '35-1',
            label: 'Paramétrage de production',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
            children: [
              {
                key: '35-1-0',
                label: 'Maint Code Nomenclature',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-1-1',
                label: 'Maint des Nomenclature',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-1-2',
                label: 'Liste des Nomenclature',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-1-3',
                label: 'Affectation Nomenclature',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-1-4',
                label: 'Calcul coût des Nomenclatures',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-1-5',
                label: 'Maint Centre de Charge',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-1-6',
                label: 'List des Centres de Charges',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-1-7',
                label: 'Maint des gammes',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-1-8',
                label: 'List des Gammes',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-1-9',
                label: 'Calcul coût des gammes',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-1-10',
                label: 'Maint des Code Causes',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-1-11',
                label: 'List des Codes Cause',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
            ],
          },
          {
            key: '35-2',
            label: 'Gestion des Devises',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
            children: [
              {
                key: '35-2-0',
                label: 'Maint des Devises',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-2-1',
                label: 'Liste des Devises',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-2-2',
                label: 'Maint des Taux de Changes',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
            ],
          },
          {
            key: '35-3',
            label: 'Parametrage des Tarif',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
            children: [
              {
                key: '35-3-0',
                label: 'Maint des Liste Prix',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-3-1',
                label: 'Liste des liste de Prix',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
            ],
          },
          {
            key: '35-4',
            label: 'Parametrage Des Codes',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
            children: [
              {
                key: '35-4-0',
                label: 'Maint code-mstr',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-4-1',
                label: 'Liste des codes',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-4-2',
                label: 'Maint des sequence',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-4-3',
                label: 'Liste des sequence',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
            ],
          },
          {
            key: '35-5',
            label: 'Parametrage Des Unitées',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
            children: [
              {
                key: '35-5-0',
                label: 'Maint Unité Mesure',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-5-1',
                label: 'Liste des Unitées',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
            ],
          },
          {
            key: '35-6',
            label: 'Parametrage de Qualité',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
            children: [
              {
                key: '35-6-0',
                label: 'ajouter spécification standard',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
            ],
          },
          {
            key: '35-7',
            label: 'Parametrage Comptabilite',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
            children: [
              {
                key: '35-7-0',
                label: 'Maint Compte',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-7-1',
                label: 'Liste des Compte',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-7-2',
                label: 'Maint des sous comptes',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-7-3',
                label: 'Liste des sous comptes',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-7-4',
                label: 'Maint des centre de coûts',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-7-5',
                label: 'Liste des Centres de Coût',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-7-6',
                label: 'Maint des Agregat',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-7-7',
                label: 'Maint des Journaux',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-7-8',
                label: 'Liste des Journaux',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-7-9',
                label: 'Maint des Lignes de produit',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-7-10',
                label: 'Maint des Taxes',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-7-11',
                label: 'Liste des Taxe',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-7-12',
                label: 'Maint des Entitées',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-7-13',
                label: 'Liste des Entitées',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-7-14',
                label: 'Maint des Banques',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-7-15',
                label: 'Liste des Banques',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-7-16',
                label: 'Maint Methode Paiement',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-7-17',
                label: 'Liste des Methodes de paiement',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
            ],
          },
          {
            key: '35-8',
            label: 'Paramétrages de Transport"',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
            children: [
              {
                key: '35-8-0',
                label: 'Ajouter Code Frais Transport',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-8-1',
                label: 'Edit Code Frais Transport',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-8-2',
                label: 'Liste des Codes Frais Transport',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-8-3',
                label: 'Ajouter Liste Frais Transport',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-8-4',
                label: 'Edit Liste Frais Transport',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-8-5',
                label: 'Liste des Liste Frais Transport',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
            ],
          },
          {
            key: '35-9',
            label: 'Paramétrages POS',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
            children: [
              {
                key: '35-9-0',
                label: 'Listes des Plateformes',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-9-1',
                label: 'Ajouter une Plateforme',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-9-2',
                label: 'Ajouter une catégorie',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-9-3',
                label: 'Liste des catégories',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
            ],
          },
          {
            key: '35-10',
            label: 'Paramétrages des imprimantes',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
            children: [
              {
                key: '35-10-0',
                label: 'Ajouter une imprimantes',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-10-1',
                label: 'Affecter une imprimante',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-10-2',
                label: 'Liste des imprimantes',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
            ],
          },
          {
            key: '35-11',
            label: 'Paramétrages Mobile',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
            children: [
              {
                key: '35-11-0',
                label: 'Résultat de la visite',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-11-1',
                label: 'Méthode de paiement',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-11-2',
                label: "Motif d'annulation",
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-11-3',
                label: 'Liste de prix',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
            ],
          },
          {
            key: '35-12',
            label: 'Parametrage des Formation',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
            children: [
              {
                key: '35-12-0',
                label: 'Domaine de Formation',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-12-1',
                label: 'Liste des Domaines de Formation',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-12-2',
                label: 'Rubrique de Formation',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
              {
                key: '35-12-3',
                label: 'Liste des Domaines de Formation',
                icon: 'pi pi-fw pi-star-fill',
                // data: 'De Niro Movies',
              },
            ],
          },
          {
            key: '35-13',
            label: 'Configuration Module',
            icon: 'pi pi-fw pi-star-fill',
            // data: 'De Niro Movies',
          },
        ],
      },
    ];
  }

  getTreeTableNodesData() {
    return [
      {
        key: '0',
        data: {
          name: 'Applications',
          size: '100kb',
          type: 'Folder',
        },
        children: [
          {
            key: '0-0',
            data: {
              name: 'React',
              size: '25kb',
              type: 'Folder',
            },
            children: [
              {
                key: '0-0-0',
                data: {
                  name: 'react.app',
                  size: '10kb',
                  type: 'Application',
                },
              },
              {
                key: '0-0-1',
                data: {
                  name: 'native.app',
                  size: '10kb',
                  type: 'Application',
                },
              },
              {
                key: '0-0-2',
                data: {
                  name: 'mobile.app',
                  size: '5kb',
                  type: 'Application',
                },
              },
            ],
          },
          {
            key: '0-1',
            data: {
              name: 'editor.app',
              size: '25kb',
              type: 'Application',
            },
          },
          {
            key: '0-2',
            data: {
              name: 'settings.app',
              size: '50kb',
              type: 'Application',
            },
          },
        ],
      },
      {
        key: '1',
        data: {
          name: 'Cloud',
          size: '20kb',
          type: 'Folder',
        },
        children: [
          {
            key: '1-0',
            data: {
              name: 'backup-1.zip',
              size: '10kb',
              type: 'Zip',
            },
          },
          {
            key: '1-1',
            data: {
              name: 'backup-2.zip',
              size: '10kb',
              type: 'Zip',
            },
          },
        ],
      },
      {
        key: '2',
        data: {
          name: 'Desktop',
          size: '150kb',
          type: 'Folder',
        },
        children: [
          {
            key: '2-0',
            data: {
              name: 'note-meeting.txt',
              size: '50kb',
              type: 'Text',
            },
          },
          {
            key: '2-1',
            data: {
              name: 'note-todo.txt',
              size: '100kb',
              type: 'Text',
            },
          },
        ],
      },
      {
        key: '3',
        data: {
          name: 'Documents',
          size: '75kb',
          type: 'Folder',
        },
        children: [
          {
            key: '3-0',
            data: {
              name: 'Work',
              size: '55kb',
              type: 'Folder',
            },
            children: [
              {
                key: '3-0-0',
                data: {
                  name: 'Expenses.doc',
                  size: '30kb',
                  type: 'Document',
                },
              },
              {
                key: '3-0-1',
                data: {
                  name: 'Resume.doc',
                  size: '25kb',
                  type: 'Resume',
                },
              },
            ],
          },
          {
            key: '3-1',
            data: {
              name: 'Home',
              size: '20kb',
              type: 'Folder',
            },
            children: [
              {
                key: '3-1-0',
                data: {
                  name: 'Invoices',
                  size: '20kb',
                  type: 'Text',
                },
              },
            ],
          },
        ],
      },
      {
        key: '4',
        data: {
          name: 'Downloads',
          size: '25kb',
          type: 'Folder',
        },
        children: [
          {
            key: '4-0',
            data: {
              name: 'Spanish',
              size: '10kb',
              type: 'Folder',
            },
            children: [
              {
                key: '4-0-0',
                data: {
                  name: 'tutorial-a1.txt',
                  size: '5kb',
                  type: 'Text',
                },
              },
              {
                key: '4-0-1',
                data: {
                  name: 'tutorial-a2.txt',
                  size: '5kb',
                  type: 'Text',
                },
              },
            ],
          },
          {
            key: '4-1',
            data: {
              name: 'Travel',
              size: '15kb',
              type: 'Text',
            },
            children: [
              {
                key: '4-1-0',
                data: {
                  name: 'Hotel.pdf',
                  size: '10kb',
                  type: 'PDF',
                },
              },
              {
                key: '4-1-1',
                data: {
                  name: 'Flight.pdf',
                  size: '5kb',
                  type: 'PDF',
                },
              },
            ],
          },
        ],
      },
      {
        key: '5',
        data: {
          name: 'Main',
          size: '50kb',
          type: 'Folder',
        },
        children: [
          {
            key: '5-0',
            data: {
              name: 'bin',
              size: '50kb',
              type: 'Link',
            },
          },
          {
            key: '5-1',
            data: {
              name: 'etc',
              size: '100kb',
              type: 'Link',
            },
          },
          {
            key: '5-2',
            data: {
              name: 'var',
              size: '100kb',
              type: 'Link',
            },
          },
        ],
      },
      {
        key: '6',
        data: {
          name: 'Other',
          size: '5kb',
          type: 'Folder',
        },
        children: [
          {
            key: '6-0',
            data: {
              name: 'todo.txt',
              size: '3kb',
              type: 'Text',
            },
          },
          {
            key: '6-1',
            data: {
              name: 'logo.png',
              size: '2kb',
              type: 'Picture',
            },
          },
        ],
      },
      {
        key: '7',
        data: {
          name: 'Pictures',
          size: '150kb',
          type: 'Folder',
        },
        children: [
          {
            key: '7-0',
            data: {
              name: 'barcelona.jpg',
              size: '90kb',
              type: 'Picture',
            },
          },
          {
            key: '7-1',
            data: {
              name: 'primeng.png',
              size: '30kb',
              type: 'Picture',
            },
          },
          {
            key: '7-2',
            data: {
              name: 'prime.jpg',
              size: '30kb',
              type: 'Picture',
            },
          },
        ],
      },
      {
        key: '8',
        data: {
          name: 'Videos',
          size: '1500kb',
          type: 'Folder',
        },
        children: [
          {
            key: '8-0',
            data: {
              name: 'primefaces.mkv',
              size: '1000kb',
              type: 'Video',
            },
          },
          {
            key: '8-1',
            data: {
              name: 'intro.avi',
              size: '500kb',
              type: 'Video',
            },
          },
        ],
      },
    ];
  }

  getLazyNodesData() {
    return [
      {
        label: 'Lazy Node 0',
        data: 'Node 0',
        expandedIcon: 'pi pi-folder-open',
        collapsedIcon: 'pi pi-folder',
        leaf: false,
      },
      {
        label: 'Lazy Node 1',
        data: 'Node 1',
        expandedIcon: 'pi pi-folder-open',
        collapsedIcon: 'pi pi-folder',
        leaf: false,
      },
      {
        label: 'Lazy Node 1',
        data: 'Node 2',
        expandedIcon: 'pi pi-folder-open',
        collapsedIcon: 'pi pi-folder',
        leaf: false,
      },
    ];
  }

  getFileSystemNodesData() {
    return [
      {
        data: {
          name: 'Applications',
          size: '200mb',
          type: 'Folder',
        },
        children: [
          {
            data: {
              name: 'Angular',
              size: '25mb',
              type: 'Folder',
            },
            children: [
              {
                data: {
                  name: 'angular.app',
                  size: '10mb',
                  type: 'Application',
                },
              },
              {
                data: {
                  name: 'cli.app',
                  size: '10mb',
                  type: 'Application',
                },
              },
              {
                data: {
                  name: 'mobile.app',
                  size: '5mb',
                  type: 'Application',
                },
              },
            ],
          },
          {
            data: {
              name: 'editor.app',
              size: '25mb',
              type: 'Application',
            },
          },
          {
            data: {
              name: 'settings.app',
              size: '50mb',
              type: 'Application',
            },
          },
        ],
      },
      {
        data: {
          name: 'Cloud',
          size: '20mb',
          type: 'Folder',
        },
        children: [
          {
            data: {
              name: 'backup-1.zip',
              size: '10mb',
              type: 'Zip',
            },
          },
          {
            data: {
              name: 'backup-2.zip',
              size: '10mb',
              type: 'Zip',
            },
          },
        ],
      },
      {
        data: {
          name: 'Desktop',
          size: '150kb',
          type: 'Folder',
        },
        children: [
          {
            data: {
              name: 'note-meeting.txt',
              size: '50kb',
              type: 'Text',
            },
          },
          {
            data: {
              name: 'note-todo.txt',
              size: '100kb',
              type: 'Text',
            },
          },
        ],
      },
      {
        data: {
          name: 'Documents',
          size: '75kb',
          type: 'Folder',
        },
        children: [
          {
            data: {
              name: 'Work',
              size: '55kb',
              type: 'Folder',
            },
            children: [
              {
                data: {
                  name: 'Expenses.doc',
                  size: '30kb',
                  type: 'Document',
                },
              },
              {
                data: {
                  name: 'Resume.doc',
                  size: '25kb',
                  type: 'Resume',
                },
              },
            ],
          },
          {
            data: {
              name: 'Home',
              size: '20kb',
              type: 'Folder',
            },
            children: [
              {
                data: {
                  name: 'Invoices',
                  size: '20kb',
                  type: 'Text',
                },
              },
            ],
          },
        ],
      },
      {
        data: {
          name: 'Downloads',
          size: '25mb',
          type: 'Folder',
        },
        children: [
          {
            data: {
              name: 'Spanish',
              size: '10mb',
              type: 'Folder',
            },
            children: [
              {
                data: {
                  name: 'tutorial-a1.txt',
                  size: '5mb',
                  type: 'Text',
                },
              },
              {
                data: {
                  name: 'tutorial-a2.txt',
                  size: '5mb',
                  type: 'Text',
                },
              },
            ],
          },
          {
            data: {
              name: 'Travel',
              size: '15mb',
              type: 'Text',
            },
            children: [
              {
                data: {
                  name: 'Hotel.pdf',
                  size: '10mb',
                  type: 'PDF',
                },
              },
              {
                data: {
                  name: 'Flight.pdf',
                  size: '5mb',
                  type: 'PDF',
                },
              },
            ],
          },
        ],
      },
      {
        data: {
          name: 'Main',
          size: '50mb',
          type: 'Folder',
        },
        children: [
          {
            data: {
              name: 'bin',
              size: '50kb',
              type: 'Link',
            },
          },
          {
            data: {
              name: 'etc',
              size: '100kb',
              type: 'Link',
            },
          },
          {
            data: {
              name: 'var',
              size: '100kb',
              type: 'Link',
            },
          },
        ],
      },
      {
        data: {
          name: 'Other',
          size: '5mb',
          type: 'Folder',
        },
        children: [
          {
            data: {
              name: 'todo.txt',
              size: '3mb',
              type: 'Text',
            },
          },
          {
            data: {
              name: 'logo.png',
              size: '2mb',
              type: 'Picture',
            },
          },
        ],
      },
      {
        data: {
          name: 'Pictures',
          size: '150kb',
          type: 'Folder',
        },
        children: [
          {
            data: {
              name: 'barcelona.jpg',
              size: '90kb',
              type: 'Picture',
            },
          },
          {
            data: {
              name: 'primeng.png',
              size: '30kb',
              type: 'Picture',
            },
          },
          {
            data: {
              name: 'prime.jpg',
              size: '30kb',
              type: 'Picture',
            },
          },
        ],
      },
      {
        data: {
          name: 'Videos',
          size: '1500mb',
          type: 'Folder',
        },
        children: [
          {
            data: {
              name: 'primefaces.mkv',
              size: '1000mb',
              type: 'Video',
            },
          },
          {
            data: {
              name: 'intro.avi',
              size: '500mb',
              type: 'Video',
            },
          },
        ],
      },
    ];
  }

  getTreeTableNodes() {
    return Promise.resolve(this.getTreeTableNodesData());
  }

  getTreeNodes() {
    return Promise.resolve(this.getTreeNodesData());
  }

  getFiles() {
    return Promise.resolve(this.getTreeNodesData());
  }

  getLazyFiles() {
    return Promise.resolve(this.getLazyNodesData());
  }

  getFilesystem() {
    return Promise.resolve(this.getFileSystemNodesData());
  }
}
