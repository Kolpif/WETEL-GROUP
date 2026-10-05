import type { Metadata } from 'next';
import Link from 'next/link';
import { Download, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Conditions générales de vente et de services',
  description: 'Conditions WETEL GROUP pour les professionnels : abonnements, location de matériel et maintenance. Version du 5 octobre 2026.',
};

type Block = { kind: string; text?: string; items?: string[] };
const sections: { id: string; title: string; blocks: Block[] }[] = [
  {
    "id": "article-1",
    "title": "Article 1 Objet et champ d’application",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Les présentes conditions générales de vente et de services, ci-après « CGV », régissent les ventes et prestations conclues avec WETEL GROUP, société par actions simplifiée dont le siège social est situé au 25 rue Tronchet, 75008 Paris, France, identifiée sous le numéro SIREN 979 507 639 et le numéro SIRET 979 507 639 00016, numéro de TVA intracommunautaire FR79 979507639, ci-après « WETEL GROUP »."
      },
      {
        "kind": "paragraph",
        "text": "WETEL GROUP peut être contactée au 01 88 81 22 27 ou à contact@wetelgroup.com."
      },
      {
        "kind": "paragraph",
        "text": "Les CGV s’appliquent exclusivement aux clients agissant pour les besoins de leur activité professionnelle, personnes physiques ou morales, ci-après « Client ». Elles couvrent, selon la commande, les accès Internet professionnels, la téléphonie fixe sur IP, les services mobiles, les standards téléphoniques hébergés, la fourniture d’équipements, l’installation, la configuration, l’assistance et la maintenance."
      },
      {
        "kind": "paragraph",
        "text": "La qualité de professionnel n’exclut pas les protections légales dont bénéficie le Client, notamment en matière de communications électroniques ou de contrats conclus hors établissement. Les règles impératives applicables prévalent sur les stipulations contraires du Contrat. Les achats des personnes publiques sont soumis aux règles qui leur sont propres ; les documents du marché et les règles impératives de la commande publique prévalent."
      }
    ]
  },
  {
    "id": "article-2",
    "title": "Article 2 Définitions et documents contractuels",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Le « Contrat » comprend les documents remis au Client et acceptés pour les prestations commandées. Le « Bon de commande » désigne le devis ou bon signé, ses annexes tarifaires et les avenants acceptés. Les « Conditions particulières » précisent les caractéristiques d’un Service et, le cas échéant, ses engagements de qualité, ci-après « SLA ». La « Mise en service » est la date à laquelle le Service est effectivement activé et utilisable conformément à la commande. Le « Matériel » désigne les équipements identifiés dans la commande et leur mode de fourniture : vente, location financière ou mise à disposition."
      },
      {
        "kind": "paragraph",
        "text": "En cas de contradiction, les documents prévalent dans l’ordre suivant : avenant expressément accepté ; Bon de commande et ses stipulations spécifiques ; Conditions particulières et SLA ; récapitulatif contractuel ; présentes CGV ; fiche tarifaire générale remise avant la commande. Une fiche tarifaire générale ne modifie pas le prix expressément convenu. Les informations précontractuelles ayant une valeur contractuelle et les mentions légalement requises ne peuvent être écartées par cette hiérarchie."
      },
      {
        "kind": "paragraph",
        "text": "Les conditions d’achat du Client ne sont acceptées que dans la mesure convenue par écrit entre les parties. Les règles légales applicables aux clauses incompatibles de conditions générales respectives demeurent réservées."
      },
      {
        "kind": "paragraph",
        "text": "Lorsque le Client bénéficie du récapitulatif contractuel prévu par la réglementation des communications électroniques, ce document lui est fourni avant la conclusion du Contrat. S’il ne peut exceptionnellement être transmis immédiatement pour des raisons techniques objectives, le Contrat ne prend effet qu’après sa remise et la confirmation de l’accord du Client, conformément à la loi."
      }
    ]
  },
  {
    "id": "article-3",
    "title": "Article 3 Commande et acceptation",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Le Client reçoit les CGV dans leur version applicable, les Conditions particulières, les prix et les informations nécessaires avant de s’engager. Son représentant déclare disposer des pouvoirs requis. La signature peut être manuscrite ou électronique."
      },
      {
        "kind": "paragraph",
        "text": "La commande engage les parties après signature du Client et acceptation de WETEL GROUP, sous réserve des conditions précisément mentionnées au Bon de commande, notamment l’éligibilité technique, la disponibilité des ressources et, en cas de financement, l’accord du bailleur. WETEL GROUP confirme l’acceptation ou les réserves à lever sur un support durable. Une commande refusée ne donne pas lieu à une facturation de Services non exécutés."
      },
      {
        "kind": "paragraph",
        "text": "WETEL GROUP peut demander les justificatifs nécessaires à l’identification du Client, aux pouvoirs du signataire, à la solvabilité et à l’exécution : justificatif d’immatriculation, coordonnées de facturation, mandat, RIB et données techniques. Les documents collectés doivent être pertinents et proportionnés."
      },
      {
        "kind": "paragraph",
        "text": "En présence d’informations inexactes ou manquantes, WETEL GROUP demande une régularisation. Les conséquences d’un défaut de régularisation relèvent des articles 4 et 14. Aucune modification payante, option ou prolongation d’engagement ne résulte d’un mandat général implicite."
      }
    ]
  },
  {
    "id": "article-4",
    "title": "Article 4 Éligibilité installation et réception",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "L’éligibilité initiale est soumise aux vérifications techniques nécessaires au raccordement et aux autorisations requises. Le Bon de commande indique les prérequis, les prestations incluses, les frais de raccordement ou d’installation et la date ou le délai de fourniture. Tout surcoût découvert après étude, notamment pour des travaux particuliers, fait l’objet d’un devis ou avenant accepté avant exécution."
      },
      {
        "kind": "paragraph",
        "text": "Le Client fournit les informations exactes nécessaires, notamment les adresses, numéros et codes RIO utiles, et permet l’accès aux locaux aux horaires convenus. Il assure, pour ce qui relève de son installation, l’alimentation électrique, le câblage, l’environnement et les autorisations décrits dans les Conditions particulières. WETEL GROUP informe le Client des conséquences connues de prérequis manquants."
      },
      {
        "kind": "paragraph",
        "text": "La Mise en service et la réception des équipements font l’objet d’une confirmation ou d’un procès-verbal distinguant chaque prestation et les réserves éventuelles. Une réception ne vaut pas renonciation aux recours pour défauts non apparents. Le procès-verbal destiné au financeur doit correspondre à une livraison et une installation réellement réalisées."
      },
      {
        "kind": "paragraph",
        "text": "Si le Client empêche le déploiement malgré une demande précise et une mise en demeure lui accordant au moins quinze jours pour remédier au blocage, WETEL GROUP peut reporter l’intervention ou mettre fin à la commande dans les conditions applicables. Les prestations exécutées et frais externes non récupérables, prévus ou préalablement acceptés et justifiés, peuvent être réclamés sans double indemnisation. Un abonnement non activé n’est pas facturé comme un Service fourni, sauf prestation distincte de réservation effectivement réalisée et expressément commandée."
      }
    ]
  },
  {
    "id": "article-5",
    "title": "Article 5 Durée des abonnements et modifications demandées par le Client",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "La durée minimale d’engagement de chaque abonnement est indiquée au Bon de commande. À défaut de durée différente expressément convenue et licite, elle est de vingt-quatre mois à compter de la conclusion du Contrat. La facturation du Service commence à sa Mise en service selon l’article 8 ; elle ne déplace pas le point de départ d’un plafond légal d’engagement."
      },
      {
        "kind": "paragraph",
        "text": "Un engagement supérieur à vingt-quatre mois peut être convenu lorsque le régime applicable au Client et à l’offre le permet. Pour un Client bénéficiant du plafond légal, une durée supérieure nécessite, lorsqu’elle est légalement possible, une renonciation expresse, précise et distinctement recueillie aux dispositions concernées. L’acceptation globale des CGV ne vaut pas cette renonciation. La seule désignation du Contrat comme professionnel ne suffit pas."
      },
      {
        "kind": "paragraph",
        "text": "À l’expiration de l’engagement minimal, l’abonnement se poursuit à durée indéterminée, sans nouvelle période minimale automatique. Les informations de fin d’engagement et les conseils tarifaires exigés par la réglementation sont transmis aux échéances applicables."
      },
      {
        "kind": "paragraph",
        "text": "Un ajout d’option, de ligne ou de Matériel, un remplacement en maintenance ou une évolution technique n’entraîne pas automatiquement le réengagement des Services existants. Un nouvel engagement suppose l’accord exprès du Client sur son périmètre, sa durée, son prix et sa nouvelle échéance, dans les limites légales."
      }
    ]
  },
  {
    "id": "article-6",
    "title": "Article 6 Location financière et matériels",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Le Bon de commande précise pour chaque équipement sa désignation, sa quantité et son mode de fourniture."
      },
      {
        "kind": "paragraph",
        "text": "En cas de location financière, le Client conclut un contrat avec le bailleur identifié dans les documents remis avant signature. La durée habituellement proposée est de vingt et un trimestres, soit soixante-trois mois ; seuls le contrat effectivement accepté et les règles applicables déterminent la durée opposable. Les loyers, frais, assurance éventuelle, point de départ, restitution et conditions de fin de location doivent être présentés au Client. La location n’emporte pas acquisition automatique de la propriété."
      },
      {
        "kind": "paragraph",
        "text": "L’existence d’une personne morale distincte comme bailleur ne supprime pas une éventuelle interdépendance juridique entre les contrats de fourniture, maintenance et financement. Les règles relatives aux offres groupées et les renonciations ciblées éventuellement nécessaires doivent être examinées pour l’ensemble effectivement commercialisé. Les CGV ne modifient pas un contrat de financement signé avec un tiers."
      },
      {
        "kind": "paragraph",
        "text": "Le Client conserve les équipements loués avec soin, respecte leurs conditions d’utilisation et les obligations d’assurance prévues au contrat de location. Les modalités de restitution et les conséquences d’une non-restitution sont celles du propriétaire, sous réserve des règles impératives."
      },
      {
        "kind": "paragraph",
        "text": "Pour les équipements vendus par WETEL GROUP, la propriété est réservée jusqu’au paiement intégral du prix, si cette réserve a été convenue avant la livraison. Les risques sont transférés à la livraison au Client, sauf stipulation particulière ou disposition légale contraire. La reprise d’un bien respecte les procédures légales et ne peut donner lieu à un paiement supérieur à la créance réellement due."
      },
      {
        "kind": "paragraph",
        "text": "Pour les équipements appartenant à WETEL GROUP et mis à disposition, le Client les restitue complets dans les trente jours suivant la fin de la prestation concernée, à l’adresse communiquée et accessible dans les conditions de restitution. Les frais de retour et montants de remplacement éventuels sont ceux annoncés et acceptés avant la commande ; l’usure normale n’est pas facturée comme une dégradation."
      }
    ]
  },
  {
    "id": "article-7",
    "title": "Article 7 Prix et évolution des conditions",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Les prix sont exprimés en euros hors taxes, auxquels s’ajoutent les taxes légalement applicables. Le Bon de commande et les annexes remises distinguent les abonnements, consommations, loyers, installation, maintenance, options et frais éventuels."
      },
      {
        "kind": "paragraph",
        "text": "Aucun frais annuel de gestion, frais de réactivation, option payante ou coût de maintenance n’est ajouté sans base contractuelle précise acceptée. Une révision par indice n’est applicable que si la clause acceptée précise un indice pertinent, la formule, la périodicité et les indices de référence."
      },
      {
        "kind": "paragraph",
        "text": "Toute modification proposée des conditions d’un Service de communications électroniques est notifiée clairement sur support durable au moins un mois avant son entrée en vigueur, avec l’information sur le droit de résilier sans frais dans les quatre mois suivant la notification lorsque l’article L. 224-33 du Code de la consommation l’exige. Les exceptions légales demeurent applicables. Cette notification ne permet pas de supprimer les recours du Client pour un manquement distinct."
      },
      {
        "kind": "paragraph",
        "text": "Pour les prestations qui ne relèvent pas de ce mécanisme, une modification du Contrat suppose une clause de révision licite déjà acceptée ou un nouvel accord. La seule publication d’une nouvelle version des CGV sur le site ne modifie pas les contrats en cours."
      }
    ]
  },
  {
    "id": "article-8",
    "title": "Article 8 Facturation et paiement",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Sauf Conditions particulières, les abonnements sont facturés mensuellement à terme à échoir et les consommations à terme échu. La première et la dernière période d’abonnement sont calculées au prorata des jours effectivement couverts. L’installation et les équipements sont facturés selon l’échéancier accepté, en respectant notamment les règles applicables aux contrats conclus hors établissement."
      },
      {
        "kind": "paragraph",
        "text": "Les factures sont payables dans les dix jours calendaires de leur émission, sauf échéance différente expressément convenue. Le prélèvement SEPA requiert un mandat valide et le respect des règles de prénotification applicables. Les autres moyens acceptés sont le virement ou tout moyen convenu. Le Client reste débiteur lorsque le tiers payeur qu’il a désigné est défaillant."
      },
      {
        "kind": "paragraph",
        "text": "Les factures sont transmises par les moyens légalement applicables, notamment les circuits de facturation électronique réglementaires selon leur champ et leur calendrier. L’envoi d’un PDF par courriel ne se substitue pas à un circuit obligatoire. Le Client communique ses coordonnées de facturation et les données nécessaires."
      },
      {
        "kind": "paragraph",
        "text": "Une consommation non facturée pour une raison technique peut être portée sur une facture ultérieure dans le respect des délais légaux. Les relevés techniques et de consommation constituent des éléments de preuve susceptibles d’être discutés et contredits ; ils ne sont pas irréfragables."
      },
      {
        "kind": "paragraph",
        "text": "Le Client signale une anomalie de facture dès sa découverte, de préférence dans les trente jours de sa réception. Ce délai de gestion n’emporte ni renonciation à un droit ni réduction d’un délai légal de recours. WETEL GROUP instruit la réclamation et corrige les erreurs établies. La partie non sérieusement contestée reste payable ; les droits légaux de suspension ou d’exception d’inexécution sont réservés."
      }
    ]
  },
  {
    "id": "article-9",
    "title": "Article 9 Retard de paiement et recouvrement",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Pour les créances soumises au Code de commerce, les pénalités sont exigibles dès le lendemain de l’échéance, sans rappel préalable. Le taux annuel est celui de l’opération de refinancement la plus récente de la Banque centrale européenne applicable au semestre considéré, majoré de dix points, sans être inférieur au minimum légal. Elles sont calculées sur le solde TTC impayé au prorata des jours de retard, sans arrondi par périodes indivisibles."
      },
      {
        "kind": "paragraph",
        "text": "Une indemnité forfaitaire de quarante euros est due par facture payée en retard, dans les conditions légales. Des frais de recouvrement supplémentaires peuvent être réclamés sur justificatifs pour leur part excédant ce forfait. Les règles des procédures collectives et le régime propre aux personnes publiques sont réservés."
      },
      {
        "kind": "paragraph",
        "text": "La suspension et la résiliation pour impayé suivent l’article 14. Une difficulté de paiement peut être signalée sans attendre à WETEL GROUP ; tout échéancier dérogatoire nécessite un accord écrit."
      }
    ]
  },
  {
    "id": "article-10",
    "title": "Article 10 Garantie maintenance et assistance",
    "blocks": [
      {
        "kind": "heading",
        "text": "10.1 Garantie et première année"
      },
      {
        "kind": "paragraph",
        "text": "La garantie commerciale du constructeur, lorsqu’elle existe, est décrite pour le Matériel concerné avec son étendue et sa durée. Elle ne supprime pas les garanties et recours légalement applicables. L’existence d’une garantie constructeur ne signifie pas que toutes les interventions, pièces, déplacements et prestations de WETEL GROUP sont gratuits."
      },
      {
        "kind": "paragraph",
        "text": "Le Bon de commande précise les prestations de maintenance ou d’assistance incluses pendant les douze premiers mois à compter de la réception de l’installation, ainsi que leurs exclusions. Aucun contenu gratuit non décrit n’est présumé."
      },
      {
        "kind": "heading",
        "text": "10.2 Maintenance payante à compter du treizième mois"
      },
      {
        "kind": "paragraph",
        "text": "Lorsqu’une maintenance est souscrite dès la commande, son prix et son périmètre sont acceptés à cette date. Si le Bon de commande prévoit une première année sans facturation de cette maintenance, la facturation commence automatiquement à l’issue des douze premiers mois suivant la réception de l’installation, sans nouvelle souscription, parce que cet échéancier a été expressément accepté dès l’origine."
      },
      {
        "kind": "paragraph",
        "text": "Le Bon de commande indique le montant mensuel HT, les quantités et types d’équipements couverts, la date de départ, les prestations incluses, les prestations payantes supplémentaires et la date de fin. Pour une installation louée sur soixante-trois mois, il peut prévoir une maintenance jusqu’au terme de la location et cinquante et une mensualités payantes après la première année, sous réserve de la concordance des dates et des règles applicables à l’offre."
      },
      {
        "kind": "paragraph",
        "text": "Pour les nouvelles commandes acceptant cette grille, sauf tarification différente expressément convenue au Bon de commande, la maintenance standard est composée d’un forfait d’assistance de 17 euros HT par mois et par installation, de 8 euros HT par mois et par poste téléphonique IP couvert, et de 5 euros HT par mois et par routeur couvert. Une installation avec un poste principal et un routeur représente ainsi 30 euros HT par mois, à compter du treizième mois lorsque la première année est prévue sans facturation. Les quantités, le total mensuel et les dates figurent au Bon de commande. Cette grille ne modifie pas les contrats antérieurs par sa seule publication."
      },
      {
        "kind": "paragraph",
        "text": "L’absence de production d’un contrat d’un autre mainteneur ne crée pas, à elle seule, un abonnement de maintenance chez WETEL GROUP. Une maintenance non commandée initialement fait l’objet d’un devis accepté avant facturation."
      },
      {
        "kind": "heading",
        "text": "10.3 Prestations et exclusions"
      },
      {
        "kind": "paragraph",
        "text": "Sauf périmètre différent expressément décrit, la maintenance souscrite couvre le diagnostic à distance, l’assistance à la configuration et la correction des anomalies relevant du périmètre convenu. Le Bon de commande précise si sont inclus les déplacements, la main-d’œuvre sur site, les pièces, les équipements de remplacement, les mises à jour et le prêt de Matériel. À défaut d’inclusion explicite, ces prestations nécessitent un devis accepté."
      },
      {
        "kind": "paragraph",
        "text": "Peuvent être exclues les interventions rendues nécessaires par un dommage accidentel, une alimentation ou un câblage non conforme relevant du Client, un usage contraire aux instructions, une modification non autorisée ayant causé l’anomalie, ou les consommables identifiés comme exclus. L’exclusion doit correspondre à la cause effective du défaut ; elle ne couvre pas une faute de WETEL GROUP."
      },
      {
        "kind": "paragraph",
        "text": "Les horaires d’assistance, modalités d’ouverture d’incident et éventuelles astreintes sont précisés dans les Conditions particulières remises avant signature. Les engagements contractuels d’une offre ne sont pas réduits par une mention générale d’horaires ouvrés. Une garantie de temps de rétablissement existe uniquement pour les Services sur lesquels elle a été expressément convenue."
      },
      {
        "kind": "paragraph",
        "text": "Toute intervention hors forfait est précédée de l’information sur son prix et de l’accord du Client, y compris lorsqu’un bon d’intervention sert de support à cet accord."
      }
    ]
  },
  {
    "id": "article-11",
    "title": "Article 11 Fourniture des Services et engagements de qualité",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "WETEL GROUP fournit les Services conformément à leurs caractéristiques contractuelles et assume les obligations correspondant à son rôle réel. Le Bon de commande identifie les cocontractants : WETEL GROUP en qualité de fournisseur ou intégrateur, et, le cas échéant, l’opérateur ou bailleur avec lequel le Client signe directement un contrat distinct. Un partenaire intervenant pour l’exécution d’une obligation de WETEL GROUP ne devient pas, de ce seul fait, le débiteur du Client à sa place."
      },
      {
        "kind": "paragraph",
        "text": "Les Conditions particulières définissent selon le Service les débits annoncés et garantis, la disponibilité, les délais d’installation, la prise en charge, le rétablissement, les plages de couverture, les maintenances programmées, la méthode de mesure et les avoirs ou indemnités. Un délai de prise en charge ne constitue pas un délai de rétablissement."
      },
      {
        "kind": "paragraph",
        "text": "Lorsqu’une garantie de rétablissement est convenue, les Conditions particulières précisent son point de départ et les renseignements nécessaires au diagnostic. Elles peuvent prévoir de neutraliser les seules périodes documentées pendant lesquelles une coopération ou un accès indispensable demandé au Client manque et empêche effectivement la réparation. WETEL GROUP en informe le Client, conserve les heures et motifs de suspension puis de reprise du décompte, et poursuit les actions qui restent possibles. Ce mécanisme ne neutralise pas ses propres retards ni les droits impératifs du Client."
      },
      {
        "kind": "paragraph",
        "text": "WETEL GROUP informe le Client des interruptions programmées selon les modalités de l’offre et prend les mesures appropriées pour limiter les incidents. Les limitations de couverture radio, les prérequis d’une connexion IP et les restrictions d’une offre doivent être annoncés avant la commande."
      },
      {
        "kind": "paragraph",
        "text": "Les Services de téléphonie IP peuvent dépendre de l’alimentation électrique et de l’accès Internet. Les conditions d’accès aux numéros d’urgence, de localisation de l’appelant et de continuité en cas de coupure sont communiquées dans les Conditions particulières. Le Client informe WETEL GROUP des usages nécessitant une compatibilité particulière, notamment téléalarme, téléassistance, terminaux de paiement, ascenseurs ou équipements de sécurité, afin de déterminer une solution adaptée."
      },
      {
        "kind": "paragraph",
        "text": "Les recours légaux pour défaut de fourniture ou non-conformité et les indemnités impératives ne sont pas remplacés par les seuls avoirs contractuels."
      }
    ]
  },
  {
    "id": "article-12",
    "title": "Article 12 Obligations du Client et sécurité",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Le Client paie les sommes exigibles, maintient à jour ses coordonnées et ses contacts habilités, respecte les prérequis communiqués et utilise les Services conformément aux lois et aux limites annoncées de l’offre. Les restrictions d’un forfait dit illimité, destinations exclues et seuils d’usage doivent être définis avant souscription. WETEL GROUP ne peut inventer rétroactivement un seuil pour refuser une consommation conforme à l’offre."
      },
      {
        "kind": "paragraph",
        "text": "Le Client protège les identifiants et équipements relevant de son contrôle, limite les droits d’accès, applique les mesures de sécurité convenues et signale sans délai une compromission. Les communications authentifiées et les journaux sont des indices d’utilisation, sans présomption irréfragable de responsabilité. La prise en charge d’une consommation frauduleuse dépend notamment des causes de l’incident, des mesures de sécurité respectives et des informations disponibles ; aucune clause ne reporte sur le Client les conséquences d’une faute imputable à WETEL GROUP."
      },
      {
        "kind": "paragraph",
        "text": "WETEL GROUP peut mettre en œuvre des alertes et blocages de sécurité prévus dans l’offre et informe le Client de leurs effets. Le Client assure les sauvegardes qui lui incombent ; toute prestation de sauvegarde commandée reste à la charge du prestataire qui s’y est engagé."
      },
      {
        "kind": "paragraph",
        "text": "Une assistance à distance requiert l’autorisation du contact habilité pour la session ou selon un mandat de maintenance expressément convenu. L’accès est limité aux besoins de l’intervention et respecte la confidentialité, la sécurité et la traçabilité appropriées."
      }
    ]
  },
  {
    "id": "article-13",
    "title": "Article 13 Portabilité des numéros",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Les opérations de portabilité respectent les règles de l’ARCEP et les informations contractuelles propres à l’offre, notamment en cas de portage partiel, de groupement de numéros ou d’accès partagé. Le Client fournit les éléments nécessaires et ne résilie pas préalablement la ligne à porter sans coordination."
      },
      {
        "kind": "paragraph",
        "text": "Le portage effectif entraîne la résiliation des prestations concernées auprès du fournisseur quitté selon les règles applicables. Pour un portage partiel, les prestations conservées sont identifiées ; le Client reçoit une information claire sur les Services qui restent actifs et facturés. La portabilité n’efface pas les créances et indemnités légalement dues et ne clôture pas automatiquement tous les contrats distincts de Matériel ou de maintenance."
      },
      {
        "kind": "paragraph",
        "text": "Les indemnités légales pour retard de portage, perte de numéro ou rendez-vous non honoré dans une procédure de portage ou de changement de fournisseur sont dues par le fournisseur responsable dans les conditions de l’article L. 224-42-1 du Code de la consommation. Elles sont versées dans les trente jours suivant la demande et ne sont pas soumises au plafond contractuel de responsabilité."
      }
    ]
  },
  {
    "id": "article-14",
    "title": "Article 14 Suspension et résiliation par WETEL GROUP",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "En cas d’impayé ou d’un autre manquement contractuel susceptible d’être corrigé, WETEL GROUP adresse une mise en demeure précisant l’obligation inexécutée, les moyens de régulariser et les conséquences annoncées. Cette notification est envoyée par lettre recommandée, lettre recommandée électronique valable ou autre moyen permettant d’établir sa réception."
      },
      {
        "kind": "paragraph",
        "text": "À défaut de régularisation dans les quinze jours suivant réception, WETEL GROUP peut suspendre les Services concernés de façon proportionnée. Si le manquement persiste quinze jours supplémentaires après la notification de la suspension, elle peut notifier la résiliation pour ce manquement. Lorsqu’elle se prévaut d’une clause résolutoire, la mise en demeure mentionne expressément la présente clause et l’obligation dont la violation est invoquée. Les autres voies légales de résolution demeurent ouvertes dans leurs conditions propres."
      },
      {
        "kind": "paragraph",
        "text": "En présence d’une fraude, d’une utilisation illicite ou d’un danger immédiat et sérieux pour la sécurité du réseau, une restriction ou suspension proportionnée peut intervenir sans préavis, avec information du Client dès que possible et possibilité de régularisation lorsqu’elle est pertinente."
      },
      {
        "kind": "paragraph",
        "text": "Une suspension imputable au Client ne met pas fin au Contrat. Les sommes effectivement dues selon l’offre peuvent continuer à être facturées dans la mesure licite et justifiée ; la suspension ne prolonge pas automatiquement l’engagement. La réactivation intervient après la régularisation et les vérifications nécessaires, sans frais non annoncés."
      },
      {
        "kind": "paragraph",
        "text": "Ces dispositions ne privent pas le Client de ses recours légaux et ne dérogent pas aux règles des procédures collectives."
      }
    ]
  },
  {
    "id": "article-15",
    "title": "Article 15 Résiliation par le Client et conséquences",
    "blocks": [
      {
        "kind": "heading",
        "text": "15.1 Demande de résiliation"
      },
      {
        "kind": "paragraph",
        "text": "Le Client peut notifier sa résiliation à contact@wetelgroup.com ou par lettre recommandée au siège de WETEL GROUP, en précisant son identité, la référence du Contrat et les Services concernés. WETEL GROUP accuse réception et indique la date d’effet et les éventuelles sommes dues. Tout dispositif de résiliation en ligne légalement obligatoire est également accessible."
      },
      {
        "kind": "paragraph",
        "text": "Après l’engagement minimal, la résiliation de l’abonnement prend effet dans les dix jours calendaires de la réception de la demande, sauf date ultérieure choisie par le Client. Pendant l’engagement, le même délai de traitement s’applique sans effacer une indemnité anticipée licitement due. La maintenance et la location suivent leurs échéances expressément convenues, sous réserve des règles des offres groupées et des autres droits applicables."
      },
      {
        "kind": "heading",
        "text": "15.2 Résiliation anticipée"
      },
      {
        "kind": "paragraph",
        "text": "Lorsque la loi permet une résiliation sans frais ou limite les sommes exigibles, ces dispositions priment. Les règles applicables aux offres groupées de petits professionnels sont notamment prises en compte : les droits de sortie après le douzième mois et les éventuelles règles sur l’équipement terminal subventionné ne sont pas écartés par une simple durée de vingt-quatre mois."
      },
      {
        "kind": "paragraph",
        "text": "Dans les autres cas, une cessation anticipée à l’initiative du Client sans cause de sortie gratuite, ou une résiliation justifiée par son manquement, peut donner lieu à l’indemnité annoncée au Bon de commande. À défaut de formule particulière licite, l’indemnité correspond aux redevances fixes HT du Service concerné restant à courir jusqu’au terme de son engagement valablement convenu, déduction faite des coûts directement évités et des sommes déjà perçues pour la même période. Les consommations futures variables sont exclues. Aucune majoration forfaitaire supplémentaire de dix pour cent n’est cumulée pour le même manquement. Le pouvoir de révision du juge et les règles de proportionnalité demeurent applicables."
      },
      {
        "kind": "paragraph",
        "text": "Les loyers éventuellement dus au bailleur sont traités dans le contrat de location et ne sont pas également réclamés par WETEL GROUP en son nom propre. Les frais externes ou de fermeture distincts ne sont dus que s’ils ont été annoncés, acceptés et peuvent légalement être exigés."
      },
      {
        "kind": "paragraph",
        "text": "Toute demande d’indemnité est accompagnée d’un décompte par Service indiquant l’échéance contractuelle, les périodes restantes, les tarifs effectivement prévus pour ces périodes, les remises ou périodes gratuites applicables et les déductions retenues. Une période de maintenance initialement gratuite n’est pas valorisée comme une période payante. WETEL GROUP conserve les justificatifs permettant d’expliquer le montant demandé, notamment les coûts non récupérables et les économies réalisées du fait de la cessation."
      },
      {
        "kind": "heading",
        "text": "15.3 Inexécution et fin de contrat"
      },
      {
        "kind": "paragraph",
        "text": "Le Client peut demander la correction d’une inexécution de WETEL GROUP. À défaut de remède après une mise en demeure accordant un délai raisonnable adapté au manquement, il peut exercer les droits de résolution ou de résiliation prévus par la loi. Aucun délai fixe de trente jours ne fait obstacle à un recours immédiat légalement ouvert en cas de gravité ou d’urgence."
      },
      {
        "kind": "paragraph",
        "text": "À la fin d’un Service, restent dus les montants acquis, sous déduction des avoirs, remboursements et compensations légalement applicables. Les données et configurations restituables, leurs formats, délais de récupération et éventuels frais de réversibilité acceptés sont précisés dans les Conditions particulières. Les équipements sont restitués à leur propriétaire selon l’article 6. Les obligations de confidentialité et celles dont la nature impose la survie demeurent applicables."
      }
    ]
  },
  {
    "id": "article-16",
    "title": "Article 16 Responsabilité",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Chaque partie répond des dommages directs et certains résultant d’un manquement qui lui est imputable. La responsabilité de WETEL GROUP n’est pas exclue par le seul fait que l’incident provient d’un partenaire choisi pour exécuter ses propres obligations."
      },
      {
        "kind": "paragraph",
        "text": "Sous réserve des exclusions ci-dessous, l’indemnisation contractuelle est plafonnée, pour un même événement, à six mois de redevances HT des Services affectés et, pour l’ensemble des événements d’une année contractuelle, à neuf mois de ces redevances. Si l’historique est inférieur à la période de référence, le calcul utilise la redevance mensuelle convenue multipliée par six ou neuf. Pour une prestation ponctuelle, le plafond est le prix HT de cette prestation. Un avenant peut prévoir un plafond différent adapté au risque et aux engagements de l’offre."
      },
      {
        "kind": "paragraph",
        "text": "Les préjudices indirects, notamment les pertes commerciales ou pertes d’exploitation qui présentent effectivement ce caractère, ne sont pas indemnisés au titre de cette clause. Un dommage ne devient pas indirect du seul fait qu’il est immatériel. Une obligation expressément souscrite de sauvegarde ou de protection des données conserve sa portée."
      },
      {
        "kind": "paragraph",
        "text": "Les exclusions et plafonds ne s’appliquent ni au dol, ni à la faute lourde, ni aux dommages corporels, ni aux indemnisations impératives, ni lorsqu’ils videraient une obligation essentielle de sa substance. Ils ne limitent pas les restitutions de sommes indûment facturées, les droits impératifs ni les droits des personnes concernées au titre de la protection des données."
      }
    ]
  },
  {
    "id": "article-17",
    "title": "Article 17 Force majeure",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "La force majeure s’apprécie conformément à l’article 1218 du Code civil. Une panne d’opérateur, une cyberattaque, un incident électrique ou un événement météorologique ne constitue pas automatiquement une force majeure : ses circonstances et les mesures appropriées doivent être examinées."
      },
      {
        "kind": "paragraph",
        "text": "La partie empêchée informe l’autre dès que possible, expose les effets sur ses obligations et cherche à les limiter. Un empêchement temporaire suspend les obligations empêchées dans les conditions légales ; un empêchement définitif produit les conséquences légales de résolution. Les Services non fournis ne sont pas automatiquement facturables du seul fait de cet article. Chaque partie peut exercer les droits de résolution légalement ouverts, notamment si le retard rend la poursuite du Contrat sans objet."
      }
    ]
  },
  {
    "id": "article-18",
    "title": "Article 18 Confidentialité et données personnelles",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Les parties protègent les informations confidentielles reçues dans l’exécution du Contrat et ne les communiquent qu’aux personnes habilitées ou lorsque la loi l’exige."
      },
      {
        "kind": "paragraph",
        "text": "WETEL GROUP traite les données nécessaires à la gestion commerciale, contractuelle, à la facturation et aux obligations légales selon les bases juridiques applicables. Les personnes concernées peuvent adresser leurs demandes à contact@wetelgroup.com et saisir la CNIL. Les destinataires, durées de conservation et modalités d’exercice des droits sont détaillés dans l’information de confidentialité communiquée au Client et sur le site."
      },
      {
        "kind": "paragraph",
        "text": "Lorsque WETEL GROUP traite des données personnelles pour le compte du Client, un accord conforme à l’article 28 du RGPD est conclu avant ce traitement. Il précise notamment les instructions, finalités, catégories de données et personnes, mesures de sécurité, sous-traitants ultérieurs, assistance, notification des violations, audits et modalités de restitution ou de suppression. Les lieux de traitement et transferts éventuels hors de l’Espace économique européen sont identifiés et encadrés conformément à la réglementation. Une déclaration générale de conformité ne remplace pas cet accord."
      },
      {
        "kind": "paragraph",
        "text": "Les droits d’utilisation des logiciels et services sont ceux des licences effectivement concédées par WETEL GROUP ou leurs titulaires. La commande ne transfère pas des droits de propriété intellectuelle que WETEL GROUP ne détient pas."
      }
    ]
  },
  {
    "id": "article-19",
    "title": "Article 19 Rétractation des professionnels protégés",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Un Client professionnel bénéficie du régime de l’article L. 221-3 du Code de la consommation lorsque le Contrat est conclu hors établissement, qu’il emploie au plus cinq salariés et que l’objet du Contrat n’entre pas dans le champ de son activité principale. Aucun droit de rétractation général n’est créé pour tous les contrats entre professionnels conclus à distance."
      },
      {
        "kind": "paragraph",
        "text": "Lorsque ce régime s’applique, WETEL GROUP remet les informations obligatoires, une copie du contrat et le formulaire de rétractation sur le support requis. Aucun paiement ni contrepartie n’est reçu avant l’expiration des sept jours suivant la conclusion, sauf exception légale applicable."
      },
      {
        "kind": "paragraph",
        "text": "Le délai de rétractation est de quatorze jours, calculé selon la nature du Contrat : à compter de sa conclusion pour les prestations de services, et de la réception du bien pour les ventes de biens dans les conditions légales. Les règles de computation et de prolongation du délai, notamment en cas d’absence d’information, restent applicables."
      },
      {
        "kind": "paragraph",
        "text": "Le Client peut utiliser le formulaire annexé ou toute déclaration dénuée d’ambiguïté, adressée par courriel ou courrier aux coordonnées de l’article 1, avant l’expiration du délai. Il n’a pas à attendre une autorisation de WETEL GROUP pour exercer son droit."
      },
      {
        "kind": "paragraph",
        "text": "L’exécution d’un service avant la fin du délai suppose la demande expresse du Client sur le support légalement requis. En cas de rétractation, seul le montant proportionné légalement dû pour le Service exécuté peut être demandé si les conditions d’information et de consentement sont réunies. La seule activation ne supprime pas le droit de rétractation. Sa perte en cas de service entièrement exécuté nécessite les conditions légales distinctes."
      },
      {
        "kind": "paragraph",
        "text": "Les sommes remboursables sont restituées au plus tard dans les quatorze jours suivant la date à laquelle WETEL GROUP est informée de la rétractation, par le moyen de paiement initial sauf accord exprès sans frais. Pour les ventes, les biens sont renvoyés au plus tard dans les quatorze jours suivant la communication de la rétractation, avec information préalable sur les frais de retour. Le remboursement peut être différé jusqu’à la récupération des biens ou la preuve de leur expédition lorsque la loi le permet ; les autres retenues ne sont admises que dans les cas légaux."
      }
    ]
  },
  {
    "id": "article-20",
    "title": "Article 20 Preuve réclamations et litiges",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Les parties peuvent conserver les contrats, confirmations, signatures électroniques, courriels et traces techniques dans des conditions permettant d’en vérifier l’intégrité. Ces éléments peuvent être contestés par tout moyen admissible. Le paiement d’une première facture ne remplace pas la preuve de la remise et de l’acceptation préalables des CGV."
      },
      {
        "kind": "paragraph",
        "text": "Les réclamations sont adressées à contact@wetelgroup.com ou au siège. Les parties recherchent une solution amiable et peuvent recourir, d’un commun accord, à la médiation interentreprises. Cette démarche ne retarde pas un recours urgent et ne suspend pas à elle seule un délai de prescription."
      },
      {
        "kind": "paragraph",
        "text": "Le Contrat est soumis au droit français, sous réserve des règles impératives applicables."
      },
      {
        "kind": "paragraph",
        "text": "**POUR LES SEULS LITIGES ENTRE PARTIES AYANT TOUTES CONTRACTÉ EN QUALITÉ DE COMMERÇANT, ET SOUS RÉSERVE DES COMPÉTENCES IMPÉRATIVES, COMPÉTENCE TERRITORIALE EST ATTRIBUÉE AUX JURIDICTIONS DE PARIS MATÉRIELLEMENT COMPÉTENTES, NOTAMMENT AU TRIBUNAL DES ACTIVITÉS ÉCONOMIQUES DE PARIS POUR LES LITIGES RELEVANT DE SA COMPÉTENCE. CETTE CLAUSE DOIT FIGURER DE FAÇON TRÈS APPARENTE DANS L’ENGAGEMENT DU CLIENT.**"
      },
      {
        "kind": "paragraph",
        "text": "Dans les autres cas, les règles légales de compétence s’appliquent. L’inapplicabilité d’une stipulation n’affecte pas les autres dispositions dans la mesure où le Contrat peut légalement subsister."
      }
    ]
  },
  {
    "id": "article-21",
    "title": "Annexe Formulaire de rétractation",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "À compléter et envoyer uniquement si le Client bénéficie d’un droit de rétractation et souhaite l’exercer."
      },
      {
        "kind": "paragraph",
        "text": "À l’attention de WETEL GROUP, 25 rue Tronchet, 75008 Paris, France, contact@wetelgroup.com."
      },
      {
        "kind": "paragraph",
        "text": "Je vous notifie par la présente ma rétractation du contrat portant sur la vente du bien ou la prestation de service désigné ci-dessous :"
      },
      {
        "kind": "list",
        "items": [
          "Bien ou prestation : ____________________",
          "Référence du contrat ou de la commande : ____________________",
          "Commandé le / reçu le : ____________________",
          "Nom ou raison sociale du Client : ____________________",
          "Adresse du Client : ____________________",
          "Nom et qualité du représentant, le cas échéant : ____________________",
          "Date : ____________________",
          "Signature du Client ou de son représentant, uniquement pour une notification sur papier : ____________________"
        ]
      }
    ]
  }
];

function Emphasis({ text }: { text: string }) {
  return <>{text.split(/(\*\*.*?\*\*)/g).map((part, index) => part.startsWith('**')
    ? <strong key={index}>{part.slice(2, -2)}</strong> : part)}</>;
}

export default function CGVPage() {
  return <>
    <section className="py-16 lg:py-20 bg-wetel-canvas border-b border-wetel-line">
      <div className="container-wide">
        <span className="badge mb-5">Réservé aux professionnels</span>
        <h1 className="text-4xl lg:text-5xl text-wetel-ink max-w-4xl">Conditions générales de vente et de services</h1>
        <p className="text-wetel-muted mt-6">WETEL GROUP · Version du 5 octobre 2026</p>
        <p className="text-wetel-ink-soft mt-4 max-w-3xl">Les durées, équipements, prestations et prix de votre commande sont précisés dans votre devis et ses annexes. La publication de cette version ne modifie pas à elle seule les contrats déjà signés.</p>
        <a href="/documents/cgv-wetel-group-2026-10-05.txt" download className="btn-secondary mt-6 no-print"><Download className="w-4 h-4" />Télécharger les CGV</a>
      </div>
    </section>
    <div className="container-wide py-12 grid lg:grid-cols-[260px_1fr] gap-10 items-start">
      <aside className="legal-nav lg:sticky lg:top-28 card p-5">
        <h2 className="font-semibold text-wetel-ink mb-4">Sommaire</h2>
        <nav aria-label="Articles des conditions générales" className="space-y-2 text-sm">
          {sections.map(section => <a key={section.id} href={`#${section.id}`} className="block py-1 text-wetel-muted hover:text-wetel-orange">{section.title}</a>)}
        </nav>
      </aside>
      <article className="legal-content card p-6 sm:p-10 text-wetel-ink-soft min-w-0">
        {sections.map(section => <section key={section.id} id={section.id}>
          <h2 className="text-wetel-ink">{section.title}</h2>
          {section.blocks.map((block, index) => block.kind === 'heading'
            ? <h3 key={index} className="text-wetel-ink">{block.text}</h3>
            : block.kind === 'list'
              ? <ul key={index}>{block.items?.map((item, i) => <li key={i}><Emphasis text={item} /></li>)}</ul>
              : <p key={index}><Emphasis text={block.text || ''} /></p>)}
        </section>)}
      </article>
    </div>
    <div className="container-wide pb-16 no-print"><Link href="/contact" className="btn-primary">Une question sur votre contrat ?<ArrowRight className="w-4 h-4" /></Link></div>
  </>;
}
