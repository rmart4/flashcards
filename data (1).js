// ============================================================================
// Données — Physique-Chimie 1ère spécialité
// Contenu extrait fidèlement des fiches de synthèse de R. Marteletti,
// complété par des questions de culture scientifique (repérées 🌍 :
// savants à l'origine des lois, applications concrètes).
//   - cards : flashcards question / réponse ouverte
//   - qcm   : questions à choix multiples (options[0] est TOUJOURS la bonne
//             réponse dans les données ; l'ordre est mélangé à l'affichage)
// ============================================================================
const CHAPTERS = [
  {
    id: "cohesion-matiere",
    title: "Cohésion de la matière",
    color: "blue",
    cards: [
      { q: "Qu'est-ce qu'un solide ionique ?", a: "Un assemblage compact de cations et d'anions alternés de façon régulière, électriquement neutre dans son ensemble." },
      { q: "Qu'est-ce qui assure la cohésion d'un solide ionique ?", a: "Les interactions électrostatiques : la régularité de l'alternance fait que les forces attractives (ions de signes opposés, proches) l'emportent sur les forces répulsives (ions de même signe, plus éloignés)." },
      { q: "Quelles sont les 3 règles d'écriture de la formule d'un solide ionique ?", a: "Nombre minimal d'ions assurant l'électroneutralité ; le cation est toujours placé en premier dans la formule ; le nom du solide commence toujours par celui de l'anion." },
      { q: "Pourquoi l'eau dissout-elle les solides ioniques ?", a: "La molécule d'eau est polaire : son pôle négatif (O) attire les cations, son pôle positif (H) attire les anions. Ces forces suffisent à briser le cristal." },
      { q: "Citer les 3 étapes de la dissolution d'un solide ionique.", a: "Dissociation, solvatation, dispersion." },
      { q: "Quelle est la formule de la concentration apportée C ?", a: "C = n(soluté) / V(solution)." },
      { q: "Quelle est la différence entre concentration apportée et concentration effective ?", a: "La concentration apportée C est la concentration de fabrication indiquée sur le flacon, même si l'espèce introduite a été totalement dissoute. La concentration effective est la concentration réelle de chaque ion en solution, donnée par la stœchiométrie de l'équation de dissolution ([Ay+]=x·C, [Bx−]=y·C)." },
      { q: "Qu'est-ce qu'un dipôle ?", a: "Une entité présente un dipôle si les barycentres de ses charges + et − ne sont pas confondus (molécule polaire = dipôle permanent, apolaire = aucun dipôle, polarisable = dipôle induit par des charges voisines)." },
      { q: "Classer les interactions de Van der Waals de la plus forte à la plus faible.", a: "Keesom (entre dipôles permanents de molécules polaires) ; Debye (entre dipôle permanent et le dipôle induit qu'il crée sur une molécule polarisable) ; London (entre dipôles instantanés dus aux fluctuations du nuage électronique, dans toute entité)." },
      { q: "Définir la liaison hydrogène.", a: "Elle s'établit entre un atome d'hydrogène lié à un atome très électronégatif (O, N, F) et un autre atome très électronégatif porteur d'un doublet non liant, d'une autre entité." },
      { q: "Classer par intensité décroissante : liaison ionique, liaison covalente, liaison hydrogène, Van der Waals.", a: "Liaison ionique (quelques centaines de kJ·mol⁻¹) > liaison covalente (quelques dizaines de kJ·mol⁻¹) > liaison hydrogène (quelques kJ·mol⁻¹) > Van der Waals (la plus faible)." },
      { q: "Qu'est-ce qu'un solvant ?", a: "Un liquide qui dissout/dilue des espèces sans les modifier chimiquement, ni être lui-même modifié. Il peut être polaire (eau, alcools…) ou apolaire (cyclohexane, benzène…)." },
      { q: "Énoncer la règle « qui se ressemble s'assemble ».", a: "Un soluté polaire (resp. apolaire) se dissout facilement dans un solvant polaire (resp. apolaire). Un soluté ionique se dissout bien dans un solvant polaire." },
      { q: "Quand deux solvants sont-ils miscibles ?", a: "S'ils peuvent être mélangés en toutes proportions (en général des solvants de polarités similaires)." },
      { q: "Quel est le principe de l'extraction par solvant ?", a: "Si un composé est plus soluble dans un solvant A que dans B, et que A et B ne sont pas miscibles, on peut extraire le composé de B vers A." },
      { q: "Qu'est-ce qu'une espèce polarisable ?", a: "Une entité dont le nuage électronique peut se déformer sous l'effet d'un champ électrique extérieur (par exemple créé par des charges voisines), ce qui y fait naître un dipôle induit." },
      { q: "Pourquoi le diiode I2, molécule apolaire, est-il tout de même sensible aux interactions de Van der Waals ?", a: "Parce que les forces de London existent dans toute entité, même apolaire : elles proviennent des fluctuations instantanées du nuage électronique, qui créent des dipôles instantanés." },
      { q: "🌍 Quel physicien néerlandais a donné son nom aux interactions intermoléculaires faibles étudiées dans ce chapitre ?", a: "Johannes Diderik van der Waals (1837-1923), physicien néerlandais, prix Nobel de physique 1910 pour ses travaux sur les états gazeux et liquide." },
      { q: "🌍 Citer une application concrète de l'extraction par solvant.", a: "La décaféination du café (extraction de la caféine par un solvant), ou l'extraction de parfums et d'huiles essentielles à partir de plantes." }
    ],
    qcm: [
      { q: "Quelle interaction assure la cohésion d'un solide ionique ?", options: ["Les interactions électrostatiques entre ions de signes opposés", "Les liaisons hydrogène entre ions", "Les interactions de Van der Waals uniquement", "La liaison covalente entre le cation et l'anion"] },
      { q: "Dans la formule d'un solide ionique, quel ion est toujours placé en premier ?", options: ["Le cation", "L'anion", "L'ion le plus abondant", "L'ion de plus petite charge"] },
      { q: "Quelle est la formule de la concentration apportée C ?", options: ["C = n(soluté) / V(solution)", "C = V(solution) / n(soluté)", "C = m(soluté) / V(solution)", "C = n(soluté) × V(solution)"] },
      { q: "Quel est l'ordre décroissant d'intensité correct ?", options: ["Ionique > covalente > hydrogène > Van der Waals", "Covalente > ionique > Van der Waals > hydrogène", "Van der Waals > hydrogène > covalente > ionique", "Hydrogène > ionique > covalente > Van der Waals"] },
      { q: "Une liaison hydrogène s'établit entre :", options: ["un atome H lié à O, N ou F, et un doublet non liant d'un atome très électronégatif d'une autre entité", "deux atomes d'hydrogène de deux molécules différentes", "deux doublets non liants de deux atomes différents", "un cation et un anion dans un cristal"] },
      { q: "Un soluté polaire se dissout facilement dans...", options: ["un solvant polaire", "un solvant apolaire", "n'importe quel solvant, la polarité ne joue aucun rôle", "un solvant de polarité opposée uniquement"] },
      { q: "Deux solvants sont dits miscibles si :", options: ["ils peuvent être mélangés en toutes proportions", "ils ont la même masse volumique", "l'un dissout l'autre partiellement seulement", "ils réagissent chimiquement entre eux"] },
      { q: "Pour un solide ionique AxBy, quelle affirmation est correcte ?", options: ["La concentration apportée C est celle du solide ; la concentration effective de A tient compte de la stœchiométrie ([A]=x·C)", "Concentration apportée et concentration effective désignent toujours la même valeur", "La concentration effective est toujours plus faible que C", "La concentration apportée ne s'applique qu'aux solides moléculaires"] },
      { q: "Une entité polarisable peut développer un dipôle...", options: ["induit par des charges électriques voisines", "uniquement s'il est permanent dès le départ", "uniquement en solution aqueuse", "seulement si elle est ionique"] },
      { q: "Le diiode I2 est un exemple de molécule...", options: ["apolaire, mais sensible aux forces de London", "polaire, avec un dipôle permanent", "ionique", "insoluble dans absolument tous les solvants"] },
      { q: "🌍 Le physicien qui a donné son nom aux interactions intermoléculaires faibles (forces de Van der Waals) était...", options: ["néerlandais, prix Nobel de physique 1910", "français, prix Nobel de chimie 1911", "britannique, jamais récompensé", "allemand, prix Nobel de physique 1901"] }
    ]
  },
  {
    id: "combustion-energie",
    title: "Combustion et énergie",
    color: "teal",
    cards: [
      { q: "Qu'est-ce qu'un combustible ?", a: "Une substance capable de brûler en présence d'un comburant, en libérant de l'énergie vers le milieu extérieur." },
      { q: "Quel est le comburant usuel ?", a: "Le dioxygène de l'air (autres comburants possibles : ozone, peroxydes, nitrate de potassium…)." },
      { q: "Écrire l'équation générale de combustion complète d'un alcane CnH2n+2.", a: "CnH2n+2 + (3n+1)/2 O2 → n CO2 + (n+1) H2O." },
      { q: "Écrire l'équation générale de combustion complète d'un alcool CnH2n+2O.", a: "CnH2n+2O + 3n/2 O2 → n CO2 + (n+1) H2O." },
      { q: "Qu'est-ce que l'énergie de liaison ?", a: "L'énergie à fournir pour rompre une mole de liaisons de covalence entre deux atomes (aussi libérée lors de leur formation). Unité : J·mol⁻¹, usuellement kJ·mol⁻¹." },
      { q: "La rupture d'une liaison est-elle endothermique ou exothermique ? Et sa formation ?", a: "La rupture d'une liaison nécessite de l'énergie fournie par le milieu extérieur : processus endothermique. Sa formation libère la même énergie vers le milieu extérieur : processus exothermique." },
      { q: "Quelle est la formule de l'énergie molaire de combustion Ecomb ?", a: "Ecomb = Σ E(liaisons produits) − Σ E(liaisons réactifs), pour un coefficient stœchiométrique du combustible égal à 1." },
      { q: "Quelle est la formule du pouvoir calorifique massique qp ?", a: "qp = Ecomb / M, exprimé en J·kg⁻¹ (attention : il faut convertir M en kg·mol⁻¹ avant le calcul)." },
      { q: "Pourquoi un feu d'hydrocarbure ne s'éteint-il pas avec de l'eau ?", a: "Les hydrocarbures, peu miscibles à l'eau et moins denses qu'elle, forment des atmosphères inflammables à la surface de l'eau." },
      { q: "Sur quel modèle repose le calcul de l'énergie molaire de combustion ?", a: "On modélise la combustion par un état fictif intermédiaire où tous les atomes sont isolés : on brise toutes les liaisons des réactifs, puis on forme toutes celles des produits. L'énergie dégagée est identique à celle de ce mécanisme imaginaire." },
      { q: "Que se forme-t-il en plus (ou à la place) du CO2 lors d'une combustion incomplète (dioxygène insuffisant) ?", a: "Du monoxyde de carbone CO (toxique) et/ou du carbone sous forme de suie." },
      { q: "Pourquoi les énergies de liaison des tables de données sont-elles toujours positives ?", a: "Par convention, elles représentent l'énergie qu'il faut fournir pour rompre la liaison (processus endothermique) : c'est donc toujours une grandeur positive." },
      { q: "🌍 Quel savant français est à l'origine de la loi de conservation de la masse, essentielle pour équilibrer les équations de combustion ?", a: "Antoine Lavoisier (1743-1794), qui énonça « Rien ne se perd, rien ne se crée, tout se transforme »." },
      { q: "🌍 Citer une application du pouvoir calorifique dans la vie courante.", a: "Le choix d'un combustible de chauffage (gaz, fioul, bois) ou d'un carburant, comparés selon leur pouvoir calorifique massique pour évaluer leur efficacité énergétique." }
    ],
    qcm: [
      { q: "Quel est le comburant usuel de la combustion ?", options: ["Le dioxygène de l'air", "Le dioxyde de carbone", "L'azote de l'air", "L'eau"] },
      { q: "Quelle est l'équation générale de combustion complète d'un alcane CnH2n+2 ?", options: ["CnH2n+2 + (3n+1)/2 O2 → n CO2 + (n+1) H2O", "CnH2n+2 + n O2 → n CO + (n+1) H2O", "CnH2n+2 + (3n+1)/2 O2 → (n+1) CO2 + n H2O", "CnH2n+2 + n/2 O2 → n CO2 + n H2O"] },
      { q: "La rupture d'une liaison covalente est un processus...", options: ["endothermique (nécessite de l'énergie)", "exothermique (libère de l'énergie)", "athermique (aucun échange d'énergie)", "toujours spontané et instantané"] },
      { q: "Quelle est la formule de l'énergie molaire de combustion ?", options: ["Ecomb = Σ E(liaisons produits) − Σ E(liaisons réactifs)", "Ecomb = Σ E(liaisons réactifs) − Σ E(liaisons produits)", "Ecomb = Σ E(liaisons produits) + Σ E(liaisons réactifs)", "Ecomb = Σ E(liaisons réactifs) × Σ E(liaisons produits)"] },
      { q: "Quelle est la formule du pouvoir calorifique massique qp ?", options: ["qp = Ecomb / M", "qp = M / Ecomb", "qp = Ecomb × M", "qp = Ecomb / n"] },
      { q: "Pourquoi un feu d'hydrocarbure ne s'éteint-il pas à l'eau ?", options: ["Les hydrocarbures, peu miscibles et moins denses que l'eau, forment une nappe inflammable en surface", "L'eau accélère la réaction de combustion", "Les hydrocarbures réagissent violemment avec l'eau", "L'eau n'a aucun effet, mais est dangereuse pour d'autres raisons"] },
      { q: "Sur quel modèle repose le calcul de Ecomb ?", options: ["Un état fictif où tous les atomes des réactifs sont isolés, puis reformés en produits", "Une mesure calorimétrique directe uniquement", "Le modèle du gaz parfait appliqué aux réactifs", "La loi de Hess appliquée uniquement aux produits"] },
      { q: "Une combustion incomplète (manque de dioxygène) produit notamment...", options: ["du monoxyde de carbone CO, toxique", "uniquement du CO2 et de l'eau", "de l'ozone", "de l'hydrogène gazeux"] },
      { q: "Dans les tables de données, les énergies de liaison sont toujours...", options: ["positives", "négatives", "nulles", "variables selon la température"] },
      { q: "🌍 La loi de conservation de la masse « Rien ne se perd, rien ne se crée » est attribuée à...", options: ["Antoine Lavoisier", "Isaac Newton", "Marie Curie", "Louis Pasteur"] }
    ]
  },
  {
    id: "dosages",
    title: "Les dosages",
    color: "orange",
    cards: [
      { q: "Définir réactif titré et réactif titrant.", a: "Réactif titré : espèce chimique dont on veut déterminer la concentration. Réactif titrant : espèce chimique de concentration connue, versée pour réagir avec le réactif titré." },
      { q: "Quelles sont les 3 qualités requises pour la réaction support d'un titrage ?", a: "Elle doit être rapide, totale et spécifique (= seule réaction possible entre ces réactifs)." },
      { q: "Définir le volume équivalent VE.", a: "Volume de réactif titrant versé pour faire réagir exactement tout le réactif titré." },
      { q: "Qu'est-ce qui caractérise l'équivalence d'un titrage ?", a: "Les réactifs ont été introduits en proportions stœchiométriques : n0(A)/α = nE(B)/β." },
      { q: "Citer les 3 façons de repérer l'équivalence par changement de couleur.", a: "Réactif titré coloré → sa couleur disparaît à l'équivalence. Réactif titrant coloré → sa couleur apparaît à l'équivalence. Indicateur coloré → sa couleur change à l'équivalence." },
      { q: "Énoncer la loi de Beer-Lambert.", a: "A = ε × ℓ × C (à ε et ℓ fixés, A = k × C) : A est l'absorbance (sans unité), ε le coefficient d'absorption molaire (L·mol⁻¹·cm⁻¹), ℓ l'épaisseur de solution traversée (cm), C la concentration (mol·L⁻¹)." },
      { q: "À quelle condition la loi de Beer-Lambert est-elle valable ?", a: "Seulement si la solution n'est pas trop concentrée (sinon A et C ne sont plus proportionnelles)." },
      { q: "Pourquoi travaille-t-on à λmax pour un dosage par étalonnage ?", a: "Pour minimiser l'incertitude de mesure, à condition que l'espèce titrée soit la seule espèce du milieu à absorber à cette longueur d'onde." },
      { q: "Quelles sont les 4 étapes du protocole du dosage par étalonnage ?", a: "1) Préparation de la gamme étalon par dilutions de concentrations connues. 2) Mesure de l'absorbance de chaque solution étalon. 3) Tracé de la courbe d'étalonnage A = f(C). 4) Mesure de l'absorbance de la solution inconnue et détermination de Cinc par report sur la droite." },
      { q: "Vers la Terminale : quelle autre méthode existe pour un dosage par étalonnage ?", a: "Le dosage par conductance G, via la loi de Kohlrausch (G = k × C)." },
      { q: "Quel matériel utilise-t-on pour verser précisément le réactif titrant lors d'un titrage ?", a: "Une burette graduée." },
      { q: "Pourquoi agite-t-on le mélange pendant un titrage ?", a: "Pour homogénéiser la solution et permettre à la réaction de se faire complètement et rapidement, ce qui rend le repérage de l'équivalence plus précis." },
      { q: "🌍 La loi de Beer-Lambert doit son nom à plusieurs scientifiques : lesquels ?", a: "Pierre Bouguer (1729), Johann Heinrich Lambert (1760) et August Beer (1852), qui ont chacun contribué à établir la relation entre absorption de la lumière et concentration." },
      { q: "🌍 Citer un exemple d'utilisation d'un dosage colorimétrique dans la vie courante.", a: "Le contrôle de la concentration en chlore ou en pH dans une piscine, ou certains tests colorimétriques de qualité de l'eau." }
    ],
    qcm: [
      { q: "Le réactif titré est...", options: ["l'espèce chimique dont on veut déterminer la concentration", "l'espèce chimique de concentration connue versée à la burette", "l'indicateur coloré", "le solvant de la réaction"] },
      { q: "Une réaction support de titrage doit être...", options: ["rapide, totale et spécifique", "lente et réversible", "endothermique et rapide", "totale mais pas nécessairement spécifique"] },
      { q: "À l'équivalence d'un titrage αA + βB → produits, quelle relation est vraie ?", options: ["n0(A)/α = nE(B)/β", "n0(A) = nE(B)", "n0(A)×α = nE(B)×β", "n0(A)/β = nE(B)/α"] },
      { q: "Quelle est la loi de Beer-Lambert ?", options: ["A = ε × ℓ × C", "A = ε / (ℓ × C)", "A = ε + ℓ + C", "C = ε × ℓ × A"] },
      { q: "À quelle longueur d'onde travaille-t-on de préférence pour un dosage par étalonnage ?", options: ["λmax, le maximum d'absorption", "La plus petite longueur d'onde du spectre visible", "La longueur d'onde où l'absorbance est nulle", "Une longueur d'onde arbitraire, cela n'a pas d'importance"] },
      { q: "Que trace-t-on lors de l'étape 3 du protocole d'un dosage par étalonnage ?", options: ["La courbe d'étalonnage A = f(C)", "La courbe C = f(temps)", "Le spectre d'absorption de la solution inconnue", "La courbe de titrage pH = f(V)"] },
      { q: "Vers la Terminale, quelle autre grandeur peut servir à un dosage par étalonnage ?", options: ["La conductance G (loi de Kohlrausch)", "La masse volumique", "La viscosité", "L'indice de réfraction"] },
      { q: "Quel matériel verse précisément le réactif titrant ?", options: ["Une burette graduée", "Une éprouvette", "Un bécher", "Une pipette jaugée"] },
      { q: "Pourquoi agite-t-on pendant un titrage ?", options: ["Pour homogénéiser la solution et accélérer la réaction", "Pour refroidir la solution", "Pour évaporer le solvant", "Ce n'est pas nécessaire"] },
      { q: "🌍 La loi de Beer-Lambert doit son nom à...", options: ["Bouguer, Lambert et Beer", "Newton et Coulomb", "Lavoisier et Berthollet", "Kohlrausch uniquement"] }
    ]
  },
  {
    id: "dualite-onde-corpuscule",
    title: "Dualité onde-corpuscule",
    color: "violet",
    cards: [
      { q: "Quelle est la relation entre longueur d'onde dans le vide λ0 et fréquence ν ?", a: "λ0 = c/ν, avec c = 299 792 458 m·s⁻¹ ≈ 3,00×10⁸ m·s⁻¹ (célérité de la lumière dans le vide)." },
      { q: "Qu'est-ce que le photon ?", a: "Une particule de charge et de masse nulles, se déplaçant à la vitesse de la lumière c." },
      { q: "Quelle est la formule de l'énergie d'un photon ?", a: "E = hν, avec h = 6,626×10⁻³⁴ J·s (constante de Planck) et ν la fréquence de la radiation associée au photon." },
      { q: "Que vaut 1 eV en joules ?", a: "1 eV = 1,60×10⁻¹⁹ J." },
      { q: "Pourquoi préfère-t-on l'électronvolt au joule à l'échelle de l'atome ?", a: "Le joule est trop grand pour les énergies infimes de l'atome ; on préfère l'eV, l'énergie gagnée par un électron accéléré sous une tension de 1 V." },
      { q: "Que signifie « l'énergie d'un atome est quantifiée » ?", a: "Elle ne peut prendre qu'un nombre discret de valeurs, représentées par des niveaux d'énergie sur un diagramme spécifique à l'élément." },
      { q: "Comment nomme-t-on l'état de plus basse énergie d'un atome ? Et les autres états ?", a: "L'état fondamental (plus basse énergie) ; les autres sont des états excités." },
      { q: "Quelle est la formule de l'énergie échangée lors d'une transition (absorption ou émission de photon) ?", a: "ΔE = |Ef − Ei| = hν." },
      { q: "Énoncer la dualité onde-corpuscule.", a: "La lumière est à la fois une onde (caractérisée par sa fréquence ν et sa longueur d'onde λ0) et un flux de photons (caractérisé par l'énergie E = hν) : deux modèles indissociablement liés." },
      { q: "Comment le spectre d'absorption d'un atome est-il lié à son spectre d'émission ?", a: "Le spectre d'absorption est le « négatif » du spectre d'émission : les raies apparaissent aux mêmes longueurs d'onde car les niveaux d'énergie de l'atome — et donc les fréquences des transitions possibles — sont quantifiés." },
      { q: "Que se passe-t-il si un atome reçoit un photon dont l'énergie ne correspond exactement à aucun écart entre deux niveaux d'énergie permis ?", a: "Le photon n'est pas absorbé : un atome ne peut absorber que des photons dont l'énergie correspond exactement à l'écart entre deux de ses niveaux d'énergie." },
      { q: "Quelle relation relie la fréquence ν et la période T d'une onde lumineuse ?", a: "ν = 1/T." },
      { q: "🌍 Quel physicien a introduit l'idée de quanta d'énergie en 1900, à l'origine du concept de photon ?", a: "Max Planck (1858-1947), physicien allemand, en étudiant le rayonnement du corps noir. Sa constante h porte son nom." },
      { q: "🌍 Quel physicien a proposé, en 1905, l'explication de l'effet photoélectrique grâce au concept de photon, ce qui lui valut le prix Nobel ?", a: "Albert Einstein, qui reçut le prix Nobel de physique 1921 pour cette explication (et non pour la relativité)." }
    ],
    qcm: [
      { q: "Quelle est la relation entre λ0 et ν ?", options: ["λ0 = c/ν", "λ0 = ν/c", "λ0 = c×ν", "λ0 = c + ν"] },
      { q: "Quelle est la formule de l'énergie d'un photon ?", options: ["E = hν", "E = h/ν", "E = hc", "E = mc²"] },
      { q: "Quelle est la valeur de 1 eV en joules ?", options: ["1,60×10⁻¹⁹ J", "1,60×10⁻²⁷ J", "6,626×10⁻³⁴ J", "9,11×10⁻³¹ J"] },
      { q: "L'état de plus basse énergie d'un atome est appelé...", options: ["état fondamental", "état excité", "état ionisé", "état stationnaire"] },
      { q: "Quelle est la formule de l'énergie échangée lors d'une transition ?", options: ["ΔE = |Ef − Ei| = hν", "ΔE = Ef + Ei", "ΔE = Ef × Ei", "ΔE = hν²"] },
      { q: "La dualité onde-corpuscule énonce que la lumière est...", options: ["à la fois une onde et un flux de photons", "soit une onde, soit un flux de photons selon l'expérience", "uniquement une onde électromagnétique", "uniquement un flux de particules matérielles"] },
      { q: "Le spectre d'absorption d'un atome est...", options: ["le négatif du spectre d'émission", "identique au spectre d'émission", "indépendant du spectre d'émission", "toujours un spectre continu"] },
      { q: "Un atome peut-il absorber n'importe quel photon incident ?", options: ["Non, seulement ceux dont l'énergie correspond exactement à un écart entre deux niveaux", "Oui, n'importe lequel", "Seulement les photons de basse énergie", "Seulement en l'absence de champ magnétique"] },
      { q: "Quelle est la relation entre fréquence ν et période T ?", options: ["ν = 1/T", "ν = T", "ν = T²", "ν = 2T"] },
      { q: "🌍 Le prix Nobel de physique 1921 attribué à Einstein récompensait...", options: ["son explication de l'effet photoélectrique", "sa théorie de la relativité générale", "sa découverte de l'électron", "ses travaux sur la radioactivité"] }
    ]
  },
  {
    id: "energie-mecanique",
    title: "Énergie mécanique",
    color: "blue",
    cards: [
      { q: "Quelle est la formule de l'énergie potentielle de pesanteur ?", a: "Epp(M) = m × g × zM (m en kg, g en N·kg⁻¹, zM l'altitude par rapport à une référence choisie, Epp en joules)." },
      { q: "Quelle est la formule de l'énergie cinétique ?", a: "Ec = ½ × m × v² (m en kg, v en m·s⁻¹, Ec en joules)." },
      { q: "Quelle est la formule de l'énergie mécanique ?", a: "Em = Ec + Epp." },
      { q: "Quand une force est-elle dite conservative ?", a: "Si son travail entre deux points ne dépend pas du chemin suivi. Exemples : poids, force électrostatique, force gravitationnelle — jamais les frottements (toujours non conservatifs)." },
      { q: "Quelle est la relation entre variation d'énergie potentielle et travail d'une force conservative ?", a: "ΔEp = Ep(B) − Ep(A) = −WAB(F conservative)." },
      { q: "L'énergie potentielle est-elle définie de manière unique ?", a: "Non, elle est définie à une constante additive près : on choisit librement une référence (souvent Ep = 0 au sol)." },
      { q: "Énoncer le théorème de l'énergie mécanique (TEM).", a: "Dans un référentiel galiléen, la variation d'énergie mécanique d'un système qui évolue entre un point A et un point B est égale au travail de toutes les forces non conservatives sur le trajet suivi : ΔEm = Em(B) − Em(A) = ΣWAB(F non conservatives)." },
      { q: "Dans quel cas l'énergie mécanique d'un système se conserve-t-elle ?", a: "Si le système n'est soumis qu'à des forces conservatives, ou à des forces non conservatives qui ne travaillent pas (réaction normale, tension d'un fil…)." },
      { q: "Qu'est-ce qu'une force dissipative ?", a: "Une force qui s'oppose au mouvement (ex : frottements), dont le travail est négatif : elle fait diminuer l'énergie mécanique Em." },
      { q: "Pour un pendule avec frottement, comment évolue l'énergie mécanique au cours du temps ?", a: "Elle diminue jusqu'à s'annuler (l'énergie est dissipée sous forme de chaleur)." },
      { q: "Dans quel type de référentiel le théorème de l'énergie mécanique est-il valable ?", a: "Un référentiel galiléen : c'est une condition indispensable à l'application de ce théorème, comme pour tous les théorèmes de la mécanique newtonienne." },
      { q: "Un skieur descend une piste avec frottements : que peut-on dire de son énergie mécanique au cours de la descente ?", a: "Elle diminue, car les frottements (force non conservative) dissipent de l'énergie sous forme de chaleur." },
      { q: "🌍 Quel savant a établi les lois de la mécanique classique, fondement des théorèmes énergétiques étudiés dans ce chapitre ?", a: "Isaac Newton (1642-1727), dans ses Philosophiæ Naturalis Principia Mathematica (1687)." },
      { q: "🌍 Citer une application où l'on cherche à limiter la perte d'énergie mécanique par frottement.", a: "La lubrification des mécanismes (huile, graisse) ou le profilage aérodynamique des véhicules, qui réduisent les pertes par frottement et permettent d'économiser l'énergie." }
    ],
    qcm: [
      { q: "Quelle est la formule de l'énergie mécanique ?", options: ["Em = Ec + Epp", "Em = Ec − Epp", "Em = Ec × Epp", "Em = Epp − Ec"] },
      { q: "Une force est dite conservative si...", options: ["son travail entre deux points ne dépend pas du chemin suivi", "elle est toujours positive", "elle ne dépend pas du temps", "elle s'oppose toujours au mouvement"] },
      { q: "Quelle est la relation entre ΔEp et le travail d'une force conservative ?", options: ["ΔEp = −WAB(F conservative)", "ΔEp = WAB(F conservative)", "ΔEp = WAB(F conservative)²", "ΔEp = −2×WAB(F conservative)"] },
      { q: "Quel est l'énoncé correct du théorème de l'énergie mécanique (TEM) ?", options: ["Dans un référentiel galiléen, ΔEm = ΣWAB(forces non conservatives)", "Dans n'importe quel référentiel, ΔEm = ΣWAB(toutes les forces)", "Dans un référentiel galiléen, ΔEm = ΣWAB(forces conservatives)", "ΔEm est toujours nulle, quel que soit le référentiel"] },
      { q: "Dans quel cas l'énergie mécanique se conserve-t-elle ?", options: ["Si seules des forces conservatives (ou ne travaillant pas) s'exercent", "Toujours, quel que soit le système", "Uniquement en l'absence de toute force", "Uniquement si le mouvement est rectiligne"] },
      { q: "Une force dissipative (ex : frottement) a un travail...", options: ["négatif, elle fait diminuer Em", "positif, elle fait augmenter Em", "nul, elle ne travaille jamais", "variable selon le référentiel choisi"] },
      { q: "Pour un pendule avec frottements, l'énergie mécanique...", options: ["diminue jusqu'à s'annuler", "reste constante", "augmente progressivement", "oscille sans jamais diminuer"] },
      { q: "Un système soumis uniquement à des frottements voit son énergie mécanique...", options: ["diminuer", "augmenter", "rester constante", "devenir infinie"] },
      { q: "Le théorème de l'énergie mécanique n'est valable que dans...", options: ["un référentiel galiléen", "n'importe quel référentiel", "un référentiel en rotation", "le référentiel du centre de masse uniquement"] },
      { q: "🌍 Les lois de la mécanique classique, à la base de ces théorèmes, ont été établies par...", options: ["Isaac Newton", "Albert Einstein", "Max Planck", "Marie Curie"] }
    ]
  },
  {
    id: "energie-electricite",
    title: "L'énergie en électricité",
    color: "teal",
    cards: [
      { q: "Quelle est la formule de l'intensité du courant ?", a: "I = Q/Δt, où Q est la somme des valeurs absolues des charges traversant la section S (toujours positive)." },
      { q: "Quel est le sens conventionnel du courant électrique ?", a: "Il correspond au déplacement des charges positives ; les électrons se déplacent en sens contraire." },
      { q: "Différence entre convention générateur et convention récepteur ?", a: "Convention générateur : U et I de même sens (dipôle actif qui fournit de l'énergie au circuit). Convention récepteur : U et I de sens contraire (dipôle passif qui reçoit de l'énergie)." },
      { q: "Quel est le modèle d'une source de tension réelle (pile) ?", a: "U = E − r×I, où E est la f.é.m. et r la résistance interne (modèle série)." },
      { q: "Quelle est la formule de la puissance électrique ?", a: "P = ℰ/Δt (ℰ : énergie échangée en J ; 1 Watt = 1 Joule/seconde)." },
      { q: "Quelles sont les formules de puissance reçue par un récepteur et de puissance fournie par un générateur ?", a: "Récepteur : Preçue = U × I. Générateur : Pfournie = U × I." },
      { q: "Quelle est la loi de l'effet Joule pour un résistor ?", a: "Preçue = U×I = R×I² (toute l'énergie reçue par un résistor est transformée en chaleur)." },
      { q: "Établir le bilan de puissance d'un générateur réel (f.é.m. E, résistance interne r, intensité I).", a: "Ptot = E×I (puissance totale produite) ; Pr = r×I² (puissance perdue par effet Joule dans la résistance interne) ; Pfournie = Ptot − Pr = U×I." },
      { q: "Quelle est la formule du rendement d'un convertisseur ?", a: "η = Putile / Pdisponible, toujours ≤ 1 (souvent exprimé en %)." },
      { q: "Pour une source idéale de tension, que vaut U ?", a: "U = E : la tension à vide est indépendante de l'intensité débitée." },
      { q: "Quelle est l'unité de l'énergie électrique utilisée sur une facture d'électricité ?", a: "Le kilowattheure (kWh), avec 1 kWh = 3,6×10⁶ J." },
      { q: "Pourquoi une résistance chauffe-t-elle lorsqu'elle est parcourue par un courant ?", a: "C'est l'effet Joule : l'énergie électrique reçue est intégralement convertie en chaleur, par les collisions des électrons avec les atomes du matériau." },
      { q: "🌍 Quel physicien anglais a donné son nom à l'effet de chauffage par le passage du courant électrique ?", a: "James Prescott Joule (1818-1889), qui a établi la loi reliant chaleur dégagée, résistance et intensité." },
      { q: "🌍 Citer une application directe de l'effet Joule dans la vie quotidienne.", a: "Les appareils de chauffage électrique, les grille-pains, ou les plaques de cuisson électriques." }
    ],
    qcm: [
      { q: "Quelle est la formule de l'intensité ?", options: ["I = Q/Δt", "I = Δt/Q", "I = Q×Δt", "I = U/Δt"] },
      { q: "Que signifie la convention générateur ?", options: ["U et I sont de même sens", "U et I sont de sens contraires", "U est toujours nul", "I est toujours nul"] },
      { q: "Quel est le modèle d'une pile réelle ?", options: ["U = E − r×I", "U = E + r×I", "U = E/r×I", "U = E × r × I"] },
      { q: "Quelle est la formule de la puissance électrique ?", options: ["P = ℰ/Δt", "P = ℰ × Δt", "P = Δt/ℰ", "P = ℰ²/Δt"] },
      { q: "Quelle est la loi de l'effet Joule pour un résistor ?", options: ["P = U×I = R×I²", "P = U/I = R/I²", "P = U×I = R/I", "P = U−I = R−I²"] },
      { q: "Quelle est la formule du rendement d'un convertisseur ?", options: ["η = Putile / Pdisponible", "η = Pdisponible / Putile", "η = Putile × Pdisponible", "η = Putile − Pdisponible"] },
      { q: "Pour une source idéale de tension, U = ?", options: ["U = E, indépendante de I", "U = E − r×I", "U diminue toujours avec I", "U = 0"] },
      { q: "Quelle est l'unité usuelle de l'énergie électrique sur une facture ?", options: ["Le kilowattheure (kWh)", "Le watt (W)", "L'ampère (A)", "Le volt (V)"] },
      { q: "Pourquoi une résistance chauffe-t-elle sous l'effet du courant ?", options: ["C'est l'effet Joule : l'énergie électrique est convertie en chaleur", "C'est l'effet Doppler", "C'est l'effet photoélectrique", "C'est une réaction chimique"] },
      { q: "🌍 L'effet Joule doit son nom à...", options: ["James Prescott Joule", "André-Marie Ampère", "Georg Ohm", "Alessandro Volta"] }
    ]
  },
  {
    id: "evolution-systeme-chimique",
    title: "L'évolution d'un système chimique",
    color: "orange",
    cards: [
      { q: "Que décrit l'avancement x d'une réaction chimique ?", a: "L'avancement x (en mol) caractérise l'évolution du système entre l'état initial (x=0) et l'état final (x=xf). C'est une grandeur qui ne peut que croître au cours de la transformation jusqu'à sa valeur finale xf, lorsque le système n'évolue plus." },
      { q: "Comment détermine-t-on le réactif limitant à l'aide d'un tableau d'avancement ?", a: "On suppose la réaction totale. Pour chaque réactif, on suppose qu'il est limitant (il serait alors totalement consommé à l'état final, donc n(X)=0), ce qui donne une valeur de xmax pour chaque hypothèse. On valide l'hypothèse qui donne la plus petite valeur de xmax." },
      { q: "Pourquoi valide-t-on l'hypothèse donnant la plus petite valeur de xmax ?", a: "C'est la valeur de l'avancement pour laquelle la réaction s'arrête (dans l'hypothèse où elle est totale), car l'un des réactifs, au moins, a disparu et l'avancement ne peut alors plus croître." },
      { q: "Quand une transformation chimique est-elle dite totale ?", a: "Au moins un réactif est totalement consommé à l'état final : xf = xmax." },
      { q: "Quand une transformation chimique est-elle dite non totale ?", a: "Tous les réactifs restent présents à l'état final : xf < xmax." },
      { q: "Que se passe-t-il dans le cas d'un mélange stœchiométrique ?", a: "Les réactifs sont en mêmes proportions n0/ν → ils sont tous limitants en même temps : xmax,1 = xmax,2 = … = xmax." },
      { q: "Quel piège faut-il éviter lors de la comparaison des réactifs pour trouver le réactif limitant ?", a: "Ne jamais comparer directement les quantités de matière initiales sans les diviser par le coefficient stœchiométrique correspondant." },
      { q: "Rappel de 2nde : comment identifier le réactif limitant sans tableau d'avancement ?", a: "Le réactif limitant est celui pour lequel le rapport n0/ν (quantité initiale / coefficient stœchiométrique) est le plus petit." },
      { q: "Que représente n0(A) dans un tableau d'avancement ?", a: "La quantité de matière initiale du réactif A, à l'état initial (x=0)." },
      { q: "Un solvant en large excès apparaît-il dans le tableau d'avancement au même titre qu'un réactif ?", a: "Non, on note en général « solvant » dans le tableau : sa quantité est considérée en large excès et n'est pas suivie quantitativement comme celle des autres réactifs." },
      { q: "🌍 Quel principe fondamental, énoncé par Lavoisier, sous-tend la construction d'un tableau d'avancement ?", a: "La loi de conservation de la matière : au cours d'une transformation chimique, les éléments chimiques et la charge totale se conservent, seule leur répartition entre espèces change." },
      { q: "🌍 Citer un exemple industriel où l'on cherche à connaître le réactif limitant d'une réaction.", a: "En synthèse de médicaments ou d'engrais industriels, connaître le réactif limitant permet d'optimiser les quantités de matières premières et de limiter le gaspillage et les coûts." }
    ],
    qcm: [
      { q: "L'avancement x d'une réaction...", options: ["ne peut que croître au cours de la transformation", "peut croître ou décroître selon la réaction", "est toujours égal à xmax", "est indépendant des quantités initiales"] },
      { q: "Pour déterminer le réactif limitant avec un tableau d'avancement, on...", options: ["teste chaque réactif comme limitant et on retient l'hypothèse donnant le plus petit xmax", "compare directement les quantités initiales n0", "retient l'hypothèse donnant le plus grand xmax", "suppose que tous les réactifs sont limitants simultanément"] },
      { q: "Une transformation est dite totale si...", options: ["xf = xmax", "xf < xmax", "xf = 0", "xf > xmax"] },
      { q: "Dans un mélange stœchiométrique...", options: ["tous les réactifs sont limitants en même temps", "aucun réactif n'est limitant", "un seul réactif est toujours limitant", "la réaction ne peut pas être totale"] },
      { q: "Quel piège faut-il éviter pour identifier le réactif limitant ?", options: ["Comparer les quantités initiales sans les diviser par le coefficient stœchiométrique", "Utiliser un tableau d'avancement", "Supposer la réaction totale", "Diviser par le coefficient stœchiométrique"] },
      { q: "Rappel de 2nde : le réactif limitant est celui pour lequel...", options: ["le rapport n0/ν est le plus petit", "le rapport n0/ν est le plus grand", "la quantité initiale n0 est la plus petite", "la quantité initiale n0 est la plus grande"] },
      { q: "Une transformation non totale signifie que...", options: ["tous les réactifs restent présents à l'état final", "un réactif est totalement consommé", "aucun produit ne s'est formé", "la réaction n'a pas commencé"] },
      { q: "Que représente n0(A) dans un tableau d'avancement ?", options: ["La quantité initiale du réactif A", "La quantité finale du réactif A", "L'avancement maximal", "Le coefficient stœchiométrique de A"] },
      { q: "🌍 La loi de conservation de la matière en chimie est attribuée à...", options: ["Antoine Lavoisier", "Isaac Newton", "Charles Coulomb", "Dimitri Mendeleïev"] }
    ]
  },
  {
    id: "fluide-au-repos",
    title: "Le fluide au repos",
    color: "violet",
    cards: [
      { q: "Quelle est la formule de la masse volumique d'un fluide ?", a: "ρfluide = m/V (identique en tout point pour un fluide homogène)." },
      { q: "Qu'est-ce qu'un fluide au repos, à l'échelle macroscopique et microscopique ?", a: "Il est macroscopiquement immobile : la moyenne vectorielle des vitesses de ses particules est nulle. Mais à l'échelle microscopique, les particules restent animées d'un mouvement erratique (leur vitesse individuelle en valeur n'est pas nulle)." },
      { q: "Quelle est la relation entre température en Celsius et en Kelvin ?", a: "θ(°C) = T(K) − 273,15 ≈ T(K) − 273." },
      { q: "Que mesure la température d'un fluide ?", a: "L'agitation microscopique : plus la moyenne de la valeur de la vitesse des particules est grande, plus la température est grande." },
      { q: "Quelle est la formule de la pression ?", a: "P = F/S, en Pascal (Pa), où F est la force perpendiculaire à la surface S." },
      { q: "Énoncer la loi de l'hydrostatique.", a: "PB − PA = ρgh, pour un liquide incompressible et homogène, au repos, dans un champ de pesanteur uniforme (B plus profond que A)." },
      { q: "Comment varie la pression avec la profondeur dans un liquide au repos ?", a: "Elle est identique sur tout plan horizontal et augmente avec la profondeur." },
      { q: "Énoncer la loi de Mariotte pour un gaz à température fixée.", a: "P×V = constante, soit P1×V1 = P2×V2, valable uniquement pour un gaz (pas dans un liquide !), à quantité de matière et température fixées." },
      { q: "Donner la valeur de la pression atmosphérique normale P0 et ses équivalences usuelles.", a: "P0 ≈ 1,013×10⁵ Pa = 1 bar = 1 atm = 760 mmHg = 760 Torr = 1013 hPa = 1013 mbar." },
      { q: "Que mesure un baromètre ?", a: "La pression atmosphérique." },
      { q: "Pourquoi ressent-on une douleur aux oreilles en plongée lorsqu'on descend rapidement ?", a: "Parce que la pression augmente avec la profondeur (loi de l'hydrostatique) : la différence de pression entre l'intérieur et l'extérieur de l'oreille devient importante si l'on ne l'équilibre pas régulièrement." },
      { q: "🌍 Quel physicien italien a inventé le baromètre à mercure et mis en évidence la pression atmosphérique en 1643 ?", a: "Evangelista Torricelli (1608-1647), élève de Galilée." },
      { q: "🌍 Citer une application de la loi de l'hydrostatique dans la construction.", a: "Le dimensionnement des barrages : la pression de l'eau, et donc la force exercée sur le mur, augmente avec la profondeur, ce qui explique que les barrages sont plus épais à la base." }
    ],
    qcm: [
      { q: "Quelle est la formule de la masse volumique ?", options: ["ρ = m/V", "ρ = V/m", "ρ = m×V", "ρ = m+V"] },
      { q: "Quelle est la relation entre Celsius et Kelvin ?", options: ["θ(°C) = T(K) − 273,15", "θ(°C) = T(K) + 273,15", "θ(°C) = T(K) × 273,15", "θ(°C) = T(K) / 273,15"] },
      { q: "Quelle est la formule de la pression ?", options: ["P = F/S", "P = F×S", "P = S/F", "P = F+S"] },
      { q: "Quelle est la loi de l'hydrostatique ?", options: ["PB − PA = ρgh", "PB − PA = ρg/h", "PB + PA = ρgh", "PB − PA = ρ/gh"] },
      { q: "La pression dans un liquide au repos...", options: ["augmente avec la profondeur", "diminue avec la profondeur", "reste constante quelle que soit la profondeur", "dépend uniquement de la surface libre"] },
      { q: "Quelle est la loi de Mariotte (gaz, température fixée) ?", options: ["P×V = constante", "P/V = constante", "P+V = constante", "P×V² = constante"] },
      { q: "Quelle est la valeur de la pression atmosphérique normale ?", options: ["≈ 1,013×10⁵ Pa", "≈ 1,013×10³ Pa", "≈ 1,013×10⁷ Pa", "≈ 1,013×10⁰ Pa"] },
      { q: "Un baromètre mesure...", options: ["la pression atmosphérique", "la température", "la masse volumique", "le débit d'un fluide"] },
      { q: "La douleur aux oreilles en plongée s'explique par...", options: ["l'augmentation de la pression avec la profondeur", "la diminution de la température avec la profondeur", "la loi de Mariotte appliquée aux liquides", "un phénomène sans lien avec la pression"] },
      { q: "🌍 Le baromètre à mercure et la mise en évidence de la pression atmosphérique sont dus à...", options: ["Evangelista Torricelli", "Blaise Pascal", "Robert Boyle", "Edme Mariotte"] }
    ]
  },
  {
    id: "interactions-fondamentales",
    title: "Interactions fondamentales",
    color: "blue",
    cards: [
      { q: "Écrire la formule de la force gravitationnelle exercée par A sur B.", a: "F(A→B) = −G × mA×mB/d² × uAB, avec G = 6,67×10⁻¹¹ SI (constante de Newton)." },
      { q: "La force gravitationnelle est-elle toujours attractive ou peut-elle être répulsive ?", a: "Toujours attractive (masses positives) : chaque corps est attiré vers l'autre." },
      { q: "Écrire la formule de la force électrostatique exercée par A sur B (loi de Coulomb).", a: "F(A→B) = k × qA×qB/d² × uAB, avec k = 8,99×10⁹ SI ≈ 9,0×10⁹ SI." },
      { q: "La force électrostatique est-elle toujours attractive ?", a: "Non : elle est attractive OU répulsive selon le signe des charges (répulsive si charges de même signe, attractive si charges de signes contraires)." },
      { q: "Écrire la formule du champ gravitationnel créé par une masse m0 en un point M.", a: "g(M) = −G×m0/r² × uOM, toujours dirigé vers la masse source." },
      { q: "Écrire la formule du champ électrostatique créé par une charge q0 en un point M.", a: "E(M) = k×q0/r² × uOM : dirigé vers O si q0 < 0, à l'opposé de O si q0 > 0." },
      { q: "Quelle force subit une masse m (ou une charge q) placée dans un champ ?", a: "F = m × g(M) dans un champ gravitationnel ; F = q × E(M) dans un champ électrostatique." },
      { q: "Qu'est-ce qu'une ligne de champ ?", a: "Une courbe en tout point tangente au champ, orientée dans son sens. Un spectre est l'ensemble de ces lignes." },
      { q: "Comparer les ordres de grandeur des forces gravitationnelle et électrostatique à l'échelle des particules.", a: "La force électrostatique est environ 10³⁹ fois plus grande que la force gravitationnelle : la gravitation est totalement négligeable à l'échelle des particules." },
      { q: "La constante gravitationnelle G a-t-elle la même valeur partout, à notre connaissance actuelle ?", a: "Oui, G est considérée comme une constante universelle, valable en tout point et à tout instant." },
      { q: "Pourquoi ne ressent-on pas la force électrostatique entre objets macroscopiques du quotidien ?", a: "Parce que la matière ordinaire est globalement électriquement neutre (autant de charges + que de charges −) : les effets s'annulent à grande échelle." },
      { q: "🌍 Quel physicien français a établi la loi de la force électrostatique entre deux charges, en 1785 ?", a: "Charles-Augustin de Coulomb (1736-1806), à l'aide d'une balance de torsion." },
      { q: "🌍 Citer une application des champs gravitationnels étudiés dans ce chapitre.", a: "Le calcul des trajectoires des satellites et des sondes spatiales, qui repose directement sur la loi de gravitation universelle de Newton." }
    ],
    qcm: [
      { q: "La force gravitationnelle est...", options: ["toujours attractive", "attractive ou répulsive selon les masses", "toujours répulsive", "nulle si les masses sont égales"] },
      { q: "Quelle est la formule de la force électrostatique (loi de Coulomb) ?", options: ["F = k×qA×qB/d²", "F = k×qA×qB×d²", "F = G×qA×qB/d²", "F = k×(qA+qB)/d²"] },
      { q: "La force électrostatique entre deux charges de même signe est...", options: ["répulsive", "attractive", "nulle", "dépend uniquement de la distance"] },
      { q: "Quelle est la formule du champ gravitationnel créé par une masse m0 ?", options: ["g(M) = −G×m0/r² × uOM", "g(M) = G×m0×r² × uOM", "g(M) = −G×m0×r × uOM", "g(M) = G/m0×r² × uOM"] },
      { q: "Quelle est la force subie par une charge q dans un champ électrostatique E ?", options: ["F = q × E", "F = q / E", "F = q + E", "F = q² × E"] },
      { q: "À l'échelle des particules, la gravitation est...", options: ["totalement négligeable devant la force électrostatique", "du même ordre de grandeur que la force électrostatique", "plus intense que la force électrostatique", "la seule force à considérer"] },
      { q: "Une ligne de champ est...", options: ["une courbe en tout point tangente au champ, orientée dans son sens", "une droite reliant systématiquement deux charges", "toujours perpendiculaire au champ", "indépendante de la source du champ"] },
      { q: "La constante gravitationnelle G est considérée comme...", options: ["une constante universelle", "variable selon la masse des objets", "variable selon la distance", "propre à chaque planète"] },
      { q: "🌍 La loi de la force électrostatique entre deux charges a été établie en 1785 par...", options: ["Charles-Augustin de Coulomb", "Isaac Newton", "Benjamin Franklin", "André-Marie Ampère"] }
    ]
  },
  {
    id: "intro-chimie-organique",
    title: "Introduction à la chimie organique",
    color: "teal",
    cards: [
      { q: "Qu'est-ce qu'un groupe caractéristique, et que définit-il ?", a: "Porté par le squelette carboné, il définit une fonction chimique et des propriétés spécifiques ; les molécules d'une même fonction forment une famille chimique." },
      { q: "Nommer les 4 fonctions oxygénées monofonctionnelles vues en 1ère, leur groupe caractéristique et leur terminaison.", a: "Alcool (−OH, terminaison -ol), aldéhyde (R-CHO, terminaison -al), cétone (R1-CO-R2, terminaison -one), acide carboxylique (R-COOH, terminaison acide -oïque)." },
      { q: "Comment nomme-t-on un alcane linéaire ?", a: "Radical + suffixe « -ane » (ex : CH3-CH2-CH2-CH2-CH2-CH3 → hexane)." },
      { q: "Comment nomme-t-on un groupe alkyle ?", a: "Radical + suffixe « -yle » (ex : -CH3 méthyle, -C2H5 éthyle). Formule générale : -CnH2n+1." },
      { q: "Comment détermine-t-on la chaîne principale d'un alcane ramifié, et comment numérote-t-on les carbones ?", a: "La chaîne principale est la plus longue : elle fixe le nom. On numérote pour donner le plus petit numéro possible aux ramifications ; des ramifications identiques utilisent un préfixe di/tri/tétra, classées par ordre alphabétique." },
      { q: "Quelle bande IR caractéristique indique la présence d'un groupe C=O ?", a: "Une bande forte et fine entre 1700 et 1740 cm⁻¹ (aldéhyde, cétone ou acide carboxylique)." },
      { q: "Comment distinguer un acide carboxylique d'un alcool par spectroscopie IR ?", a: "L'acide carboxylique présente une bande C=O (1700-1740 cm⁻¹) ET une bande O-H large (2500-3200 cm⁻¹). L'alcool présente seulement une bande O-H forte et assez fine (3200-3550 cm⁻¹), sans bande C=O." },
      { q: "Quelle est la méthode pour identifier une fonction organique par spectroscopie IR ?", a: "Chercher d'abord la bande C=O (1700-1740 cm⁻¹, fine et intense). C=O + O-H large (2500-3200) → acide carboxylique. C=O seule (pas de O-H) → aldéhyde ou cétone. O-H (3200-3550) seule → alcool." },
      { q: "Où se situent toujours les groupes -CHO et -COOH dans la chaîne carbonée ?", a: "Toujours en bout de chaîne : leur numéro de position (1) n'est donc jamais précisé dans le nom." },
      { q: "Qu'est-ce qu'une espèce naturelle et une espèce synthétique ?", a: "Naturelle : extraite du vivant. Synthétique : créée par l'Homme, chimiquement identique à l'espèce naturelle, ou artificielle si elle n'existe pas dans la nature." },
      { q: "Quelle est la différence entre une chaîne carbonée saturée et insaturée ?", a: "Saturée : ne contient que des liaisons C-C simples. Insaturée : contient au moins une liaison double (C=C) ou triple (C≡C)." },
      { q: "🌍 Quelle méthode d'analyse, basée sur les vibrations des liaisons chimiques, est utilisée pour identifier les fonctions organiques dans ce chapitre ?", a: "La spectroscopie infrarouge (IR), qui exploite le fait que chaque type de liaison absorbe le rayonnement IR à un nombre d'onde caractéristique." },
      { q: "🌍 Citer une application industrielle de la chimie organique de synthèse.", a: "La synthèse de médicaments (ex. aspirine), de matières plastiques, ou d'arômes et parfums identiques au naturel." }
    ],
    qcm: [
      { q: "Un groupe caractéristique définit...", options: ["une fonction chimique et des propriétés spécifiques", "uniquement la masse molaire de la molécule", "la géométrie VSEPR de la molécule", "le nombre d'atomes de carbone uniquement"] },
      { q: "Quel est le groupe caractéristique de la fonction alcool ?", options: ["−OH", "−CHO", "−COOH", "R1-CO-R2"] },
      { q: "Quelle est la terminaison du nom d'une cétone ?", options: ["-one", "-al", "-ol", "-oïque"] },
      { q: "Quelle est la bande IR caractéristique d'un groupe C=O ?", options: ["1700-1740 cm⁻¹, forte et fine", "3200-3550 cm⁻¹, forte et fine", "2800-3200 cm⁻¹, moyenne", "500-1000 cm⁻¹, large"] },
      { q: "Comment distingue-t-on un acide carboxylique d'un alcool en IR ?", options: ["L'acide présente C=O ET O-H large ; l'alcool présente seulement O-H fine", "L'acide présente seulement O-H ; l'alcool présente C=O", "Les deux ont exactement le même spectre", "Seule la RMN permet de les distinguer"] },
      { q: "Où se situent toujours les groupes -CHO et -COOH ?", options: ["En bout de chaîne carbonée", "Au milieu de la chaîne", "Sur un carbone ramifié uniquement", "Cela varie selon la molécule"] },
      { q: "Comment nomme-t-on un alcane linéaire à 6 carbones ?", options: ["hexane", "pentane", "heptane", "hexanol"] },
      { q: "Une espèce synthétique identique à une espèce naturelle est...", options: ["chimiquement identique, mais fabriquée par l'Homme", "toujours différente chimiquement de l'espèce naturelle", "obligatoirement plus toxique", "impossible à obtenir"] },
      { q: "Une chaîne carbonée insaturée contient...", options: ["au moins une liaison double ou triple", "uniquement des liaisons simples", "obligatoirement un cycle", "obligatoirement un hétéroatome"] },
      { q: "🌍 L'identification des fonctions organiques dans ce chapitre s'appuie notamment sur...", options: ["la spectroscopie infrarouge (IR)", "la radioactivité", "la spectroscopie de masse uniquement", "la chromatographie exclusivement"] }
    ]
  },
  {
    id: "lentille-convergente",
    title: "La lentille mince convergente",
    color: "orange",
    cards: [
      { q: "Écrire la relation de conjugaison de Descartes.", a: "1/OA' − 1/OA = 1/OF' = 1/f' = C." },
      { q: "Quelle est la formule du grandissement γ ?", a: "γ = A'B'/AB = OA'/OA." },
      { q: "Quelle est la formule de la vergence d'une lentille ?", a: "C = 1/f' (C en dioptrie δ, f' en mètres)." },
      { q: "Quel est le signe de f (distance focale objet) et de f' (distance focale image) pour une lentille convergente ?", a: "f = OF < 0 et f' = OF' > 0." },
      { q: "Que signifie γ > 0 ou γ < 0 pour l'image ?", a: "γ > 0 : image droite (même sens que l'objet). γ < 0 : image inversée." },
      { q: "Que signifie |γ| > 1 ou |γ| < 1 pour l'image ?", a: "|γ| > 1 : image plus grande que l'objet. |γ| < 1 : image plus petite que l'objet." },
      { q: "Quelle est la différence entre image réelle et image virtuelle ?", a: "Image réelle : peut être observée sur un écran (OA' > 0). Image virtuelle : ne peut pas l'être, seuls les prolongements des rayons (en pointillés) s'y croisent (OA' < 0)." },
      { q: "Quel est le signe de OA pour un objet réel ?", a: "OA < 0." },
      { q: "Quel est le principe de fonctionnement d'une loupe ?", a: "C'est une lentille convergente utilisée avec l'objet placé entre le centre optique O et le foyer objet F. L'image, virtuelle, droite et agrandie, est vue sous un angle plus grand : la loupe « grossit » l'objet." },
      { q: "Comment oriente-t-on les axes en optique (axe optique et axe perpendiculaire) ?", a: "L'axe optique est orienté dans le sens de propagation de la lumière (souvent vers la droite) ; l'axe perpendiculaire l'est en fonction des objets étudiés (souvent vers le haut). Une distance algébrique est positive dans le sens de l'axe choisi, négative sinon." },
      { q: "Qu'est-ce que le foyer image F' d'une lentille convergente ?", a: "Le point où convergent tous les rayons émergents issus de rayons incidents parallèles à l'axe optique." },
      { q: "Citer un instrument optique, autre que la loupe, utilisant une ou plusieurs lentilles convergentes.", a: "L'appareil photo, le microscope, la lunette astronomique, le vidéoprojecteur, ou l'œil humain (cristallin)." },
      { q: "🌍 Quel savant français a posé les bases de la relation de conjugaison utilisée dans ce chapitre ?", a: "René Descartes (1596-1650), qui a posé les fondements de l'optique géométrique moderne, notamment dans sa Dioptrique (1637)." },
      { q: "🌍 Citer une application médicale des lentilles convergentes.", a: "La correction de l'hypermétropie (difficulté à voir de près) grâce à des lunettes à verres convergents, qui font converger davantage la lumière avant qu'elle n'atteigne la rétine." }
    ],
    qcm: [
      { q: "Quelle est la relation de conjugaison de Descartes ?", options: ["1/OA' − 1/OA = 1/f'", "1/OA' + 1/OA = 1/f'", "OA' − OA = f'", "1/OA' × 1/OA = 1/f'"] },
      { q: "Quelle est la formule du grandissement γ ?", options: ["γ = OA'/OA", "γ = OA/OA'", "γ = OA'×OA", "γ = OA'−OA"] },
      { q: "Pour une lentille convergente, quel est le signe de f' ?", options: ["f' > 0", "f' < 0", "f' = 0", "Cela dépend de l'objet"] },
      { q: "Si γ < 0, l'image est...", options: ["inversée", "droite", "virtuelle obligatoirement", "réelle obligatoirement"] },
      { q: "Une image virtuelle vérifie...", options: ["OA' < 0", "OA' > 0", "OA' = 0", "OA' = OF'"] },
      { q: "Dans une loupe, l'objet est placé...", options: ["entre le centre optique O et le foyer objet F", "au-delà du foyer objet F", "exactement au foyer image F'", "à l'infini"] },
      { q: "Quelle est la formule de la vergence ?", options: ["C = 1/f'", "C = f'", "C = 1/f' ×2", "C = f'/2"] },
      { q: "Le foyer image F' d'une lentille convergente est le point où...", options: ["convergent les rayons émergents issus de rayons incidents parallèles à l'axe", "divergent tous les rayons", "se situe toujours l'objet", "se situe le centre optique"] },
      { q: "Parmi ces instruments, lequel n'utilise PAS de lentille convergente ?", options: ["Un miroir plan", "Un appareil photo", "Une loupe", "Un microscope"] },
      { q: "🌍 La relation de conjugaison des lentilles utilisée dans ce chapitre porte le nom de...", options: ["Descartes", "Newton", "Fresnel", "Huygens"] }
    ]
  },
  {
    id: "lumiere-couleur",
    title: "Lumière et couleur",
    color: "violet",
    cards: [
      { q: "Quels sont les deux types de cellules photosensibles de la rétine ?", a: "Les bâtonnets (sensibles aux intensités faibles, pas de distinction de couleurs, vision nocturne) et les cônes (demandent plus de lumière, sensibilité spectrale, distinction des couleurs, vision diurne)." },
      { q: "Quel est le principe de la synthèse additive, et quelles sont ses couleurs primaires ?", a: "Superposition de lumières colorées. Couleurs primaires : Rouge, Vert, Bleu (RVB). R+V+B = blanc, l'absence des trois = noir." },
      { q: "Quel est le principe de la synthèse soustractive, et quelles sont ses couleurs primaires ?", a: "Superposition de l'absorption de lumières colorées (filtres). Couleurs primaires : Magenta, Cyan, Jaune (CMJ). C+M+J = noir, l'absence des trois = blanc." },
      { q: "Que peut-il arriver à la lumière incidente sur un objet ?", a: "Elle peut être transmise, absorbée ou diffusée (renvoyée dans toutes les directions)." },
      { q: "Quand deux couleurs sont-elles dites complémentaires ?", a: "Si leur superposition donne du blanc (synthèse additive) ou du noir (synthèse soustractive)." },
      { q: "Quelle est la couleur perçue d'un objet éclairé en lumière blanche ?", a: "La couleur complémentaire de celle qu'il absorbe." },
      { q: "Rappeler la loi de Beer-Lambert.", a: "A = ε × ℓ × C." },
      { q: "Que représente λmax dans un spectre d'absorption, et comment est-elle reliée à la couleur perçue ?", a: "λmax est la longueur d'onde du maximum d'absorption ; la couleur perçue de la solution est la complémentaire de la couleur absorbée au maximum d'absorption." },
      { q: "Quelle est la différence entre un objet opaque et un objet transparent, en termes de lumière ?", a: "Objet opaque : diffuse une partie de la lumière incidente et absorbe le reste. Objet transparent : diffuse, absorbe et transmet la lumière incidente." },
      { q: "Pourquoi le ciel est-il bleu de jour ?", a: "La lumière du Soleil est diffusée par les molécules de l'atmosphère ; cette diffusion (diffusion de Rayleigh) est plus efficace pour les courtes longueurs d'onde (bleu), qui dominent donc la lumière diffusée perçue." },
      { q: "Quelle est la différence entre un spectre d'émission et un spectre d'absorption ?", a: "Le spectre d'émission montre les longueurs d'onde émises par une source ; le spectre d'absorption montre les longueurs d'onde absorbées par une substance traversée par la lumière blanche." },
      { q: "🌍 Citer une application technologique de la synthèse additive des couleurs.", a: "Les écrans (télévision, smartphone, ordinateur), qui combinent des pixels rouges, verts et bleus (RVB) pour recréer toutes les couleurs perçues." },
      { q: "🌍 Citer une application de la synthèse soustractive des couleurs.", a: "L'impression couleur (imprimantes), qui utilise des encres cyan, magenta et jaune (et noir) déposées sur du papier blanc." }
    ],
    qcm: [
      { q: "Les cônes de la rétine permettent...", options: ["la distinction des couleurs (vision diurne)", "la vision nocturne uniquement", "la perception du mouvement uniquement", "la mise au point de l'image"] },
      { q: "Quelles sont les couleurs primaires de la synthèse additive ?", options: ["Rouge, Vert, Bleu", "Magenta, Cyan, Jaune", "Rouge, Jaune, Bleu", "Blanc, Noir, Gris"] },
      { q: "En synthèse additive, R+V+B donne...", options: ["du blanc", "du noir", "du gris", "du magenta"] },
      { q: "Quelles sont les couleurs primaires de la synthèse soustractive ?", options: ["Magenta, Cyan, Jaune", "Rouge, Vert, Bleu", "Blanc, Noir, Gris", "Cyan, Vert, Rouge"] },
      { q: "Deux couleurs sont complémentaires si leur superposition donne...", options: ["du blanc (additive) ou du noir (soustractive)", "toujours du gris", "toujours du noir, quel que soit le mode de synthèse", "toujours du blanc, quel que soit le mode de synthèse"] },
      { q: "La couleur perçue d'un objet éclairé en lumière blanche est...", options: ["la complémentaire de la couleur qu'il absorbe", "la couleur qu'il absorbe", "toujours blanche", "indépendante de ce qu'il absorbe"] },
      { q: "Que représente λmax dans un spectre d'absorption ?", options: ["La longueur d'onde du maximum d'absorption", "La longueur d'onde où l'absorbance est nulle", "La longueur d'onde de la lumière transmise", "La borne supérieure du spectre visible"] },
      { q: "Pourquoi le ciel est-il bleu de jour ?", options: ["La diffusion atmosphérique favorise les courtes longueurs d'onde (bleu)", "Le Soleil émet uniquement de la lumière bleue", "L'atmosphère absorbe toutes les couleurs sauf le bleu", "C'est un effet de la réfraction uniquement"] },
      { q: "Le spectre d'absorption d'une substance montre...", options: ["les longueurs d'onde absorbées par la substance", "les longueurs d'onde émises par la substance", "uniquement la couleur perçue", "la température de la substance"] },
      { q: "🌍 Les écrans (TV, smartphones) utilisent le principe de...", options: ["la synthèse additive (pixels RVB)", "la synthèse soustractive (encres CMJ)", "la diffraction de la lumière", "l'effet photoélectrique"] }
    ]
  },
  {
    id: "mouvement-force",
    title: "Mouvement et force",
    color: "blue",
    cards: [
      { q: "Énoncer le principe d'inertie.", a: "Dans un référentiel galiléen, tout corps persévère dans son état de repos ou de mouvement rectiligne uniforme (MRU) si les forces qui s'exercent sur lui se compensent, ou s'il n'est soumis à aucune force." },
      { q: "Comment s'écrit le principe d'inertie sous forme vectorielle ?", a: "Repos ou MRU ⟺ ΣF = 0 (dans un référentiel galiléen)." },
      { q: "Comment construit-on graphiquement Δv entre deux points proches M1 et M2 d'une trajectoire ?", a: "On trace v1 en M1 et v2 en M2 à la même échelle, puis −v1 (même norme, sens opposé) en pointillés à partir de l'extrémité de v2 : Δv va alors de M2 à l'extrémité de −v1 (Δv = v2 + (−v1) = v2 − v1)." },
      { q: "Quelle est la direction de Δv pour une trajectoire rectiligne ? Pour une trajectoire curviligne ?", a: "Rectiligne : Δv est colinéaire à la trajectoire. Curviligne : Δv est dirigé vers l'intérieur de la courbure." },
      { q: "Énoncer la loi qualitative reliant Δv et ΣF.", a: "Dans un référentiel galiléen, la variation du vecteur vitesse d'un système est colinéaire à la résultante des forces appliquées ΣF, et de même sens." },
      { q: "Pour une même force appliquée, comment la masse d'un système influence-t-elle sa variation de vitesse ?", a: "Le système de masse plus faible subit la variation de vitesse la plus importante. Pour produire la même variation de vitesse sur deux systèmes de masses différentes, il faut appliquer une force plus grande au système le plus massif." },
      { q: "Quelle est la formule du vecteur vitesse en un point M ?", a: "v(M) = MM'/Δt, de direction tangente à la trajectoire en M, et de sens celui du mouvement." },
      { q: "Pour un satellite en orbite circulaire, quelle est la relation entre Δv et la force gravitationnelle ?", a: "Δv et la force gravitationnelle F pointent tous deux vers le centre de la trajectoire : ils sont colinéaires, ce qui est cohérent car la gravitation est la seule force appliquée au satellite." },
      { q: "Qu'est-ce qu'un référentiel galiléen ?", a: "Un référentiel dans lequel le principe d'inertie est vérifié : un système isolé ou pseudo-isolé y est soit au repos, soit en mouvement rectiligne uniforme. Le référentiel terrestre est généralement considéré comme galiléen pour les mouvements étudiés au lycée." },
      { q: "Le référentiel terrestre est-il rigoureusement galiléen ?", a: "Non, il ne l'est qu'approximativement (la Terre tourne sur elle-même et autour du Soleil), mais cette approximation est excellente pour la plupart des mouvements étudiés au lycée." },
      { q: "🌍 Quel savant italien est à l'origine du principe d'inertie, plus tard formalisé par Newton ?", a: "Galilée (1564-1642), d'où le terme « référentiel galiléen »." },
      { q: "🌍 Citer une application où le principe d'inertie est directement observable.", a: "La ceinture de sécurité en voiture : lors d'un freinage brutal, le corps du passager, selon le principe d'inertie, tend à continuer son mouvement en ligne droite si rien ne le retient." }
    ],
    qcm: [
      { q: "Le principe d'inertie énonce que dans un référentiel galiléen...", options: ["un corps persévère dans son état de repos ou de MRU si les forces se compensent", "un corps accélère toujours en l'absence de force", "un corps ralentit toujours en l'absence de force", "les forces ne peuvent jamais se compenser"] },
      { q: "Dans un référentiel galiléen, la loi qualitative reliant Δv et ΣF énonce que Δv est...", options: ["colinéaire à ΣF, et de même sens", "colinéaire à ΣF, de sens opposé", "perpendiculaire à ΣF", "indépendant de ΣF"] },
      { q: "Pour une trajectoire curviligne, Δv est dirigé...", options: ["vers l'intérieur de la courbure", "vers l'extérieur de la courbure", "tangentiellement à la trajectoire", "perpendiculairement au plan de la trajectoire"] },
      { q: "À force égale, un système de masse plus faible subit...", options: ["une variation de vitesse plus importante", "une variation de vitesse plus faible", "aucune variation de vitesse", "la même variation de vitesse qu'un système plus massif"] },
      { q: "Pour un satellite en orbite circulaire, Δv et la force gravitationnelle sont...", options: ["colinéaires, tous deux dirigés vers le centre", "perpendiculaires", "de sens opposés", "sans relation particulière"] },
      { q: "Le vecteur vitesse en un point M est dirigé...", options: ["selon la tangente à la trajectoire en M, dans le sens du mouvement", "perpendiculairement à la trajectoire en M", "vers le centre de la trajectoire", "dans une direction fixe indépendante du mouvement"] },
      { q: "Le principe d'inertie s'applique dans...", options: ["un référentiel galiléen", "n'importe quel référentiel", "un référentiel accéléré uniquement", "un référentiel en rotation uniquement"] },
      { q: "Un référentiel galiléen est un référentiel dans lequel...", options: ["le principe d'inertie est vérifié", "tous les objets sont immobiles", "la gravité est nulle", "seule la Terre peut servir de référence"] },
      { q: "Le référentiel terrestre est-il rigoureusement galiléen ?", options: ["Non, mais c'est une très bonne approximation pour la plupart des mouvements étudiés au lycée", "Oui, parfaitement", "Non, il ne peut jamais être utilisé comme galiléen", "Cela dépend uniquement de la vitesse de l'objet étudié"] },
      { q: "🌍 Le terme « référentiel galiléen » fait référence à...", options: ["Galilée", "Isaac Newton", "Johannes Kepler", "René Descartes"] }
    ]
  },
  {
    id: "ondes-mecaniques",
    title: "Ondes mécaniques",
    color: "teal",
    cards: [
      { q: "Définir une onde progressive.", a: "Une perturbation locale d'un milieu, qui se transmet de proche en proche, avec transport d'énergie mais sans transport de matière." },
      { q: "Pourquoi une onde mécanique ne se propage-t-elle jamais dans le vide ?", a: "Parce qu'elle est mécanique : la perturbation déplace localement de la matière, elle se propage donc nécessairement dans un milieu matériel." },
      { q: "Quelle est la différence entre une onde transversale et une onde longitudinale ?", a: "Transversale : la direction de la perturbation est perpendiculaire à celle de la propagation. Longitudinale : la direction de la perturbation est parallèle à celle de la propagation." },
      { q: "Quelle est la formule de la célérité d'une onde ?", a: "v = d/Δt (d en m, Δt en s, v en m·s⁻¹)." },
      { q: "Quelle est la relation liant le retard τ entre deux points M et M' à la célérité v ?", a: "MM' = v × τ (dans un milieu homogène, où v est constante)." },
      { q: "Quelles sont les relations entre fréquence f, période T et longueur d'onde λ ?", a: "f = 1/T et λ = v/f = v×T." },
      { q: "Quelles sont les deux périodicités d'une onde progressive périodique sinusoïdale ?", a: "Une périodicité temporelle T (en s) et une périodicité spatiale λ (en m)." },
      { q: "Quand deux points d'un milieu vibrent-ils en phase ?", a: "Si la distance qui les sépare est un multiple entier de la longueur d'onde λ." },
      { q: "Qu'est-ce qu'un séisme, en termes d'onde ?", a: "Un séisme génère des ondes mécaniques (ondes sismiques) qui se propagent dans la Terre, transportant de l'énergie sans transport de matière." },
      { q: "Quelle est la différence entre une onde progressive à une dimension et à trois dimensions ?", a: "À une dimension, l'onde se propage le long d'une seule direction (ex : corde). À trois dimensions, elle se propage dans toutes les directions de l'espace (ex : son dans l'air)." },
      { q: "🌍 Citer une application des ondes mécaniques utilisée en médecine.", a: "L'échographie, qui utilise des ultrasons (ondes mécaniques de haute fréquence) pour observer l'intérieur du corps sans rayonnement ionisant." },
      { q: "🌍 Citer une application des ondes sismiques en sciences de la Terre.", a: "L'étude de la propagation des ondes sismiques permet de sonder la structure interne de la Terre (croûte, manteau, noyau) et de détecter les séismes." }
    ],
    qcm: [
      { q: "Une onde mécanique transporte...", options: ["de l'énergie, sans transport de matière", "de la matière, sans transport d'énergie", "à la fois matière et énergie", "ni matière ni énergie"] },
      { q: "Une onde mécanique peut-elle se propager dans le vide ?", options: ["Non, elle nécessite un milieu matériel", "Oui, toujours", "Oui, mais seulement si elle est transversale", "Cela dépend de sa fréquence"] },
      { q: "Dans une onde transversale, la perturbation est...", options: ["perpendiculaire à la direction de propagation", "parallèle à la direction de propagation", "aléatoire par rapport à la propagation", "toujours verticale"] },
      { q: "Quelle est la formule de la célérité d'une onde ?", options: ["v = d/Δt", "v = Δt/d", "v = d×Δt", "v = d+Δt"] },
      { q: "Quelle est la relation entre longueur d'onde λ, célérité v et période T ?", options: ["λ = v×T", "λ = v/T", "λ = T/v", "λ = v+T"] },
      { q: "Deux points d'un milieu vibrent en phase si la distance qui les sépare est...", options: ["un multiple entier de λ", "un multiple entier de T", "toujours nulle", "indépendante de λ"] },
      { q: "Le son dans l'air est une onde...", options: ["longitudinale", "transversale", "ni longitudinale ni transversale", "électromagnétique"] },
      { q: "Un séisme génère...", options: ["des ondes mécaniques se propageant dans la Terre", "uniquement de la lumière", "un transport de matière sur de longues distances", "des ondes électromagnétiques uniquement"] },
      { q: "Une onde se propageant dans toutes les directions de l'espace (ex : le son dans l'air) est une onde à...", options: ["3 dimensions", "1 dimension", "2 dimensions", "0 dimension"] },
      { q: "🌍 L'échographie médicale utilise...", options: ["des ultrasons (ondes mécaniques)", "des rayons X", "de la lumière visible", "des ondes radio"] }
    ]
  },
  {
    id: "oxydoreduction",
    title: "Oxydoréduction",
    color: "orange",
    cards: [
      { q: "Définir oxydant et réducteur.", a: "Oxydant : espèce chimique susceptible de capter un ou plusieurs électrons. Réducteur : espèce chimique susceptible de céder un ou plusieurs électrons." },
      { q: "Écrire la forme générale d'un couple oxydant/réducteur.", a: "Ox + n e⁻ ⇌ Red." },
      { q: "Définir oxydation et réduction.", a: "Oxydation : transformation au cours de laquelle une espèce perd un ou plusieurs électrons (elle est donc oxydée). Réduction : transformation au cours de laquelle une espèce gagne un ou plusieurs électrons (elle est donc réduite)." },
      { q: "Un oxydant peut-il être oxydé ? Un réducteur peut-il être réduit ?", a: "Non : un oxydant ne peut qu'être réduit (jamais oxydé) ; un réducteur ne peut qu'être oxydé (jamais réduit)." },
      { q: "Quelles sont les 4 étapes pour écrire une demi-équation électronique, dans l'ordre ?", a: "1) Conserver les éléments ≠ O, H (ajuster les coefficients). 2) Conserver l'oxygène O (ajouter H2O si besoin). 3) Conserver l'hydrogène H (ajouter H+ si besoin). 4) Conserver la charge (ajouter des électrons)." },
      { q: "Qu'est-ce qui ne doit jamais apparaître dans l'équation d'une réaction d'oxydoréduction ?", a: "Aucun électron ne doit apparaître dans l'équation de la réaction (ils s'éliminent lors de l'addition des deux demi-équations)." },
      { q: "Quelles sont les étapes pour écrire une réaction d'oxydoréduction à partir de deux couples ?", a: "1) Identifier les deux couples mis en jeu. 2) Écrire les deux demi-équations (réactifs à gauche si possible). 3) Multiplier chaque demi-équation pour obtenir le même nombre d'électrons dans les deux, puis les additionner et simplifier." },
      { q: "Pourquoi la demi-équation du couple MnO4⁻/Mn²⁺ ne peut-elle pas s'équilibrer sans H+ ?", a: "Parce qu'on est en milieu acide : les ions H+ sont nécessaires pour conserver l'élément hydrogène lors de l'équilibrage (H2O est utilisé pour conserver l'oxygène, H+ pour conserver l'hydrogène)." },
      { q: "Qu'est-ce que la rouille, en termes de réaction d'oxydoréduction ?", a: "C'est le produit de l'oxydation du fer par le dioxygène de l'air en présence d'eau : le fer (réducteur) cède des électrons au dioxygène (oxydant)." },
      { q: "Qu'est-ce que le couple oxydant/réducteur H+/H2 ?", a: "Un couple où l'oxydant (H+) et le réducteur (H2) échangent des électrons selon 2H+ + 2e⁻ ⇌ H2 ; il sert notamment de référence en électrochimie." },
      { q: "🌍 Citer une application industrielle majeure des réactions d'oxydoréduction.", a: "La production d'électricité par les piles et batteries, qui reposent sur des réactions d'oxydoréduction spontanées entre deux couples séparés." },
      { q: "🌍 Citer un exemple de réaction d'oxydoréduction dans la vie quotidienne.", a: "La corrosion des métaux (rouille du fer), ou la combustion (le combustible est le réducteur, le dioxygène l'oxydant)." }
    ],
    qcm: [
      { q: "Un oxydant est une espèce capable de...", options: ["capter un ou plusieurs électrons", "céder un ou plusieurs électrons", "capter des protons", "céder des protons"] },
      { q: "Un oxydant peut-il être oxydé ?", options: ["Non, un oxydant ne peut qu'être réduit", "Oui, systématiquement", "Oui, mais seulement en milieu acide", "Cela dépend du couple considéré"] },
      { q: "Quelle est l'écriture générale correcte d'un couple oxydant/réducteur ?", options: ["Ox + n e⁻ ⇌ Red", "Red + n e⁻ ⇌ Ox", "Ox ⇌ Red (sans électrons)", "Ox − n e⁻ ⇌ Red"] },
      { q: "Que ne doit-on jamais voir dans l'équation finale d'une réaction d'oxydoréduction ?", options: ["Des électrons libres", "Des ions H+", "Des molécules d'eau", "Des coefficients stœchiométriques"] },
      { q: "Quel est l'ordre correct des étapes pour équilibrer une demi-équation ?", options: ["Éléments ≠O,H → O (H2O) → H (H+) → charge (e⁻)", "Charge → H → O → éléments", "O → H → charge → éléments", "H → O → éléments → charge"] },
      { q: "Sans ions H+, la demi-équation de MnO4⁻/Mn²⁺...", options: ["ne peut pas s'équilibrer (milieu acide nécessaire)", "s'équilibre normalement", "n'a pas besoin d'électrons", "produit directement un précipité"] },
      { q: "Une réduction correspond à un gain de...", options: ["électrons", "protons", "neutrons", "masse"] },
      { q: "La formation de la rouille est due à...", options: ["l'oxydation du fer par le dioxygène en présence d'eau", "la réduction du fer par l'eau", "une réaction acido-basique", "une réaction de combustion incomplète"] },
      { q: "Les piles électriques fonctionnent grâce à...", options: ["des réactions d'oxydoréduction spontanées", "des réactions acido-basiques uniquement", "la fusion nucléaire", "l'électrolyse uniquement"] },
      { q: "🌍 Quel phénomène quotidien est un exemple direct d'oxydoréduction ?", options: ["La rouille (corrosion du fer)", "La fonte de la glace", "La dissolution du sucre dans l'eau", "L'évaporation de l'eau"] }
    ]
  },
  {
    id: "structure-edifices-chimiques",
    title: "Structure des édifices chimiques",
    color: "violet",
    cards: [
      { q: "Quelles sont les 3 étapes, dans l'ordre logique, pour déterminer la polarité d'une molécule ?", a: "Schéma de Lewis (doublets) → géométrie VSEPR → électronégativité et barycentres des charges (polarité)." },
      { q: "Quelles sont les étapes de construction du schéma de Lewis d'une molécule ?", a: "1) Dénombrer le nombre total d'électrons de valence. 2) Calculer le nombre de doublets (diviser par 2 le total précédent). 3) Placer les atomes pour former le plus de liaisons vers le centre. 4) Placer les doublets pour respecter la règle de l'octet pour chacun des atomes." },
      { q: "Comment repère-t-on une lacune électronique sur un schéma de Lewis ?", a: "Si l'atome est entouré de moins de doublets que le gaz noble le plus proche, on représente ce déficit par un rectangle vide." },
      { q: "Quelle est la formule de la charge formelle portée par un atome ?", a: "Charge formelle = nombre d'e⁻ de valence de l'atome seul − nombre d'e⁻ comptés autour de l'atome dans la molécule (doublet non-liant compte pour 2 e⁻, doublet liant pour 1 e⁻)." },
      { q: "Dans la notation VSEPR AXnEm, que représentent X et E ?", a: "X représente un doublet liant, E un doublet non-liant. L'atome central A est toujours de la forme AXnEm, avec n+m ≤ 4 au lycée." },
      { q: "Quelle est la géométrie d'une molécule de type AX2 (n+m=2) ?", a: "Linéaire." },
      { q: "Quelle est la géométrie d'une molécule de type AX3 (n+m=3, ex. BF3) ?", a: "Trigonale plane." },
      { q: "Quelle est la géométrie d'une molécule de type AX2E (n+m=3, ex. SO2) ?", a: "Coudée." },
      { q: "Quelles sont les 3 géométries possibles pour n+m=4 ?", a: "Tétraédrique (AX4, ex. CH4), pyramidale à base triangulaire (AX3E, ex. NH3), coudée (AX2E2, ex. H2O)." },
      { q: "Quand une liaison est-elle dite polarisée ?", a: "Si |Δχ| > 0,4 entre les deux atomes X-Y liés ; l'atome le plus électronégatif porte δ−, l'autre δ+." },
      { q: "Quand une molécule est-elle polaire ?", a: "Si elle possède des liaisons polarisées ET que les barycentres de ses charges + et − sont distincts." },
      { q: "Comment évolue l'électronégativité dans le tableau périodique ?", a: "Elle croît de bas en haut et de gauche à droite (χ(H) < χ(C) < χ(N) < χ(Cl) < χ(O) < χ(F))." },
      { q: "Pourquoi le méthane CH4 est-il apolaire malgré des liaisons C-H polarisées ?", a: "Parce que sa géométrie tétraédrique parfaitement symétrique fait que les barycentres des charges + et − sont confondus : les effets des liaisons polarisées s'annulent globalement." },
      { q: "Quelle est la différence entre la géométrie de la molécule et la figure de répulsion en VSEPR ?", a: "La figure de répulsion inclut tous les doublets (liants et non-liants) ; la géométrie de la molécule ne décrit que la disposition des atomes entre eux, sans tenir compte visuellement des doublets non-liants." },
      { q: "🌍 Quel chimiste américain a proposé la représentation des doublets d'électrons (schéma de Lewis) en 1916 ?", a: "Gilbert Newton Lewis (1875-1946)." },
      { q: "🌍 Citer une application où la polarité des molécules joue un rôle essentiel.", a: "La formulation des savons et détergents : leurs molécules possèdent une partie polaire (hydrophile) et une partie apolaire (hydrophobe), ce qui leur permet de dissoudre les graisses dans l'eau." }
    ],
    qcm: [
      { q: "Quel est l'ordre logique pour déterminer la polarité d'une molécule ?", options: ["Lewis → VSEPR → électronégativité/barycentres", "VSEPR → Lewis → électronégativité", "Électronégativité → Lewis → VSEPR", "Lewis → électronégativité → VSEPR"] },
      { q: "Dans la notation AXnEm, que représente E ?", options: ["un doublet non-liant", "un doublet liant", "un atome lié", "une charge formelle"] },
      { q: "Quelle est la géométrie d'une molécule AX4 (ex. CH4) ?", options: ["Tétraédrique", "Pyramidale", "Coudée", "Linéaire"] },
      { q: "Quelle est la géométrie d'une molécule AX3E (ex. NH3) ?", options: ["Pyramidale à base triangulaire", "Tétraédrique", "Trigonale plane", "Linéaire"] },
      { q: "Une liaison est dite polarisée si...", options: ["|Δχ| > 0,4 entre les deux atomes liés", "|Δχ| < 0,4 entre les deux atomes liés", "les deux atomes ont la même électronégativité", "elle relie deux atomes identiques"] },
      { q: "Une molécule est polaire si...", options: ["elle a des liaisons polarisées ET des barycentres de charges distincts", "elle a des liaisons polarisées, peu importe les barycentres", "les barycentres de charges sont confondus", "elle ne possède aucune liaison polarisée"] },
      { q: "Une lacune électronique apparaît quand un atome est entouré de...", options: ["moins de doublets que le gaz noble le plus proche", "plus de doublets que le gaz noble le plus proche", "exactement le nombre de doublets du gaz noble le plus proche", "aucun doublet liant"] },
      { q: "Pourquoi le méthane CH4 est-il apolaire malgré des liaisons polarisées ?", options: ["Sa géométrie tétraédrique symétrique confond les barycentres des charges", "Il n'a aucune liaison polarisée", "Le carbone n'est pas électronégatif", "L'hydrogène est plus électronégatif que le carbone"] },
      { q: "La figure de répulsion en VSEPR, contrairement à la géométrie de la molécule, prend en compte...", options: ["tous les doublets, liants et non-liants", "uniquement les doublets liants", "uniquement les doublets non-liants", "uniquement les atomes"] },
      { q: "🌍 Le schéma de Lewis (représentation des doublets d'électrons) a été proposé en 1916 par...", options: ["Gilbert Newton Lewis", "Dimitri Mendeleïev", "Linus Pauling", "Niels Bohr"] }
    ]
  },
  {
    id: "synthese-organique",
    title: "Synthèse organique",
    color: "blue",
    cards: [
      { q: "Quelles sont les 4 étapes pour réaliser une synthèse organique ?", a: "1) Transformation des réactifs (réaction). 2) Isolement du produit recherché. 3) Purification du produit obtenu. 4) Identification (analyse) du produit purifié." },
      { q: "Quel est le rôle de la pierre ponce dans un montage à reflux ?", a: "Elle régule l'ébullition et évite les à-coups de chauffe." },
      { q: "Quel est le principe de la recristallisation ?", a: "On dissout le solide impur dans le minimum de solvant chaud (solubilité plus grande à chaud). Au refroidissement lent, le solide recristallise (sa solubilité diminue) ; les impuretés, trop minoritaires pour saturer, restent dans le filtrat." },
      { q: "Citer 3 méthodes d'analyse d'un produit de synthèse.", a: "Spectroscopie (UV, visible, IR, RMN…) ; chromatographie (sur couche mince, en phase liquide ou gazeuse) ; mesure de grandeurs caractéristiques (température de changement d'état, masse volumique…)." },
      { q: "Quelle est la formule du rendement r d'une synthèse ?", a: "r = m(P) obtenue / m(P) max. théorique = n(P) obtenue / n(P) max. théorique, avec m max. et n max. calculées en supposant la réaction totale." },
      { q: "Citer 3 causes possibles d'un rendement inférieur à 100 %.", a: "Réaction lente, interrompue avant son terme ; réaction non totale par nature ; pertes de produit (transvasement, filtration, rinçage…)." },
      { q: "Citer les critères de la chimie verte.", a: "Utilisation d'agro-ressources et de ressources renouvelables ; solvants « propres », non toxiques ; économie d'atomes et minimum de déchets formés ; « chimie douce » (conditions moins agressives : température et pression plus basses)." },
      { q: "Quelle est la différence entre isolement et purification d'un produit de synthèse ?", a: "Isolement : sépare le produit recherché des réactifs n'ayant pas réagi, du solvant et du catalyseur (filtration ou extraction par solvant). Purification : élimine les impuretés restant dans le produit isolé (ex : recristallisation, distillation fractionnée)." },
      { q: "Pourquoi « resale »-t-on (relargage) la phase aqueuse lors d'une extraction liquide/liquide ?", a: "Pour diminuer la solubilité des espèces à extraire dans l'eau et favoriser leur migration vers la phase organique." },
      { q: "Pourquoi utilise-t-on un montage à reflux lors d'une synthèse organique ?", a: "Pour chauffer le mélange réactionnel afin d'accélérer la réaction, tout en évitant la perte de matière par évaporation : les vapeurs se condensent dans le réfrigérant et retombent dans le ballon." },
      { q: "Quelle différence y a-t-il entre le rendement et la pureté d'un produit de synthèse ?", a: "Le rendement mesure la quantité de produit obtenue par rapport à la quantité maximale théorique. La pureté mesure la proportion de produit recherché par rapport aux impuretés restantes dans l'échantillon final." },
      { q: "🌍 Citer un exemple historique célèbre de synthèse organique ayant eu un impact majeur sur la société.", a: "La synthèse de l'aspirine (acide acétylsalicylique) par Felix Hoffmann en 1897 pour les laboratoires Bayer, l'un des médicaments les plus utilisés au monde." },
      { q: "🌍 Pourquoi la chimie verte est-elle devenue un enjeu majeur de la synthèse organique moderne ?", a: "Face aux enjeux environnementaux, l'industrie chimique cherche à réduire les déchets, utiliser des ressources renouvelables et des procédés moins toxiques et moins énergivores." }
    ],
    qcm: [
      { q: "Quelles sont, dans l'ordre, les 4 étapes d'une synthèse organique ?", options: ["Réaction, isolement, purification, analyse", "Analyse, réaction, isolement, purification", "Isolement, réaction, analyse, purification", "Réaction, analyse, isolement, purification"] },
      { q: "Quel est le rôle de la pierre ponce dans un montage à reflux ?", options: ["Réguler l'ébullition et éviter les à-coups de chauffe", "Catalyser la réaction", "Absorber les vapeurs toxiques", "Filtrer le mélange réactionnel"] },
      { q: "Quel est le principe de la recristallisation ?", options: ["Dissoudre à chaud dans un minimum de solvant, puis refroidir lentement pour faire recristalliser le solide pur", "Faire bouillir le solide jusqu'à évaporation totale", "Ajouter un excès de solvant froid directement", "Filtrer le solide sans le dissoudre"] },
      { q: "Quelle est la formule du rendement r d'une synthèse ?", options: ["r = m(P) obtenue / m(P) max théorique", "r = m(P) max théorique / m(P) obtenue", "r = m(P) obtenue × m(P) max théorique", "r = m(P) obtenue + m(P) max théorique"] },
      { q: "Quelle est une cause possible d'un rendement < 100 % ?", options: ["Une réaction non totale ou des pertes de produit lors des manipulations", "Un excès de réactif limitant", "Une catalyse trop efficace", "Une température de réaction trop stable"] },
      { q: "La chimie verte cherche notamment à...", options: ["utiliser des ressources renouvelables et minimiser les déchets", "maximiser la vitesse de réaction uniquement", "utiliser exclusivement des solvants organiques classiques", "ignorer le rendement au profit de la rapidité"] },
      { q: "Pourquoi resale-t-on la phase aqueuse lors d'une extraction liquide/liquide ?", options: ["Pour diminuer la solubilité de l'espèce à extraire dans l'eau et favoriser son passage en phase organique", "Pour accélérer l'évaporation de l'eau", "Pour augmenter le pH de la solution", "Pour dissoudre davantage le produit dans l'eau"] },
      { q: "Le montage à reflux permet de chauffer un mélange réactionnel tout en...", options: ["évitant la perte de matière par évaporation", "augmentant la perte de matière", "empêchant toute réaction", "refroidissant le mélange"] },
      { q: "La pureté d'un produit de synthèse mesure...", options: ["la proportion de produit recherché par rapport aux impuretés", "la quantité obtenue par rapport à la quantité théorique maximale", "la masse molaire du produit", "la vitesse de la réaction"] },
      { q: "🌍 L'aspirine a été synthétisée industriellement pour la première fois par...", options: ["Felix Hoffmann (laboratoires Bayer, 1897)", "Alexander Fleming", "Louis Pasteur", "Marie Curie"] }
    ]
  },
  {
    id: "theoreme-energie-cinetique",
    title: "Théorème de l'énergie cinétique",
    color: "teal",
    cards: [
      { q: "Quelle est la formule du travail d'une force constante ?", a: "WAB(F) = F · AB = F × AB × cos α (W en J, F en N, AB en m)." },
      { q: "Quel est le signe du travail selon l'angle α entre la force et le déplacement ?", a: "Angle aigu (0°≤α<90°) → travail moteur (W>0). Angle obtus (90°<α≤180°) → travail résistant (W<0). Angle droit (α=90°) → travail nul." },
      { q: "Quelle est la formule du travail du poids entre A et B ?", a: "WAB(P) = P·AB = m×g×(zA − zB)." },
      { q: "Quel est le signe du travail du poids selon le déplacement vertical ?", a: "zA > zB (le système descend) → W>0, moteur. zA < zB (le système monte) → W<0, résistant. zA = zB (déplacement horizontal) → W=0, nul." },
      { q: "Quelle est la formule du travail de la force électrostatique ?", a: "WAB(FE) = q × UAB (q la charge électrique en C, UAB la tension en V)." },
      { q: "Pourquoi le poids et la force électrostatique sont-ils des forces conservatives ?", a: "Leur travail ne dépend que des positions de départ et d'arrivée, jamais du chemin suivi (comme la force de rappel d'un ressort)." },
      { q: "Quelle est la formule de l'énergie cinétique ?", a: "Ec = ½ × m × v²." },
      { q: "Énoncer le théorème de l'énergie cinétique.", a: "Dans un référentiel galiléen, la variation d'énergie cinétique d'un système se déplaçant de A à B est égale à la somme des travaux des forces qui lui sont appliquées : ΔEc = ΣWAB(Fext)." },
      { q: "Que se passe-t-il pour le système si le travail total des forces appliquées est positif ? Négatif ?", a: "W > 0 (résultante motrice) ⇒ le système accélère. W < 0 (résultante résistante) ⇒ le système ralentit." },
      { q: "Quelle est la formule de la vitesse en fin de chute libre, pour un système partant avec une vitesse initiale nulle ?", a: "vB = √(2gh), avec h la hauteur de chute." },
      { q: "Dans quel type de référentiel le théorème de l'énergie cinétique est-il valable ?", a: "Un référentiel galiléen : c'est une condition indispensable à l'application du théorème." },
      { q: "Un cycliste freine sur du plat : quel est le signe du travail de la force de freinage ?", a: "Négatif (résistant) : la force de freinage s'oppose au mouvement, elle fait diminuer l'énergie cinétique du système." },
      { q: "🌍 Le théorème de l'énergie cinétique découle des lois de la mécanique établies par quel savant ?", a: "Isaac Newton, dont les lois du mouvement permettent de démontrer ce théorème." },
      { q: "🌍 Citer une application du théorème de l'énergie cinétique en sécurité routière.", a: "Le calcul de la distance de freinage d'un véhicule : plus la vitesse est grande, plus l'énergie cinétique à dissiper par les freins est grande (elle varie en v²), d'où l'augmentation rapide de la distance de freinage avec la vitesse." }
    ],
    qcm: [
      { q: "Quelle est la formule du travail d'une force constante ?", options: ["W = F × AB × cos α", "W = F × AB × sin α", "W = F / AB × cos α", "W = F + AB × cos α"] },
      { q: "Si l'angle entre la force et le déplacement est obtus (90°<α≤180°), le travail est...", options: ["résistant (négatif)", "moteur (positif)", "nul", "toujours maximal"] },
      { q: "Quelle est la formule du travail du poids entre A et B ?", options: ["W = m×g×(zA−zB)", "W = m×g×(zA+zB)", "W = m×g/(zA−zB)", "W = m/g×(zA−zB)"] },
      { q: "Quelle est la formule de l'énergie cinétique ?", options: ["Ec = ½×m×v²", "Ec = m×v²", "Ec = ½×m×v", "Ec = m×v"] },
      { q: "Quel est l'énoncé correct du théorème de l'énergie cinétique ?", options: ["Dans un référentiel galiléen, ΔEc = ΣWAB(forces extérieures)", "Dans n'importe quel référentiel, ΔEc = ΣWAB(forces conservatives uniquement)", "ΔEc est toujours nulle, quel que soit le référentiel", "Dans un référentiel galiléen, ΔEc = ΣWAB(forces non conservatives uniquement)"] },
      { q: "Si le travail total appliqué à un système est positif, le système...", options: ["accélère", "ralentit", "reste à vitesse constante", "s'arrête immédiatement"] },
      { q: "Quelle est la vitesse en fin de chute libre depuis une hauteur h, vitesse initiale nulle ?", options: ["v = √(2gh)", "v = 2gh", "v = √(gh)", "v = gh²"] },
      { q: "Le théorème de l'énergie cinétique n'est valable que dans...", options: ["un référentiel galiléen", "n'importe quel référentiel", "un référentiel accéléré uniquement", "le référentiel du système lui-même"] },
      { q: "Le travail de la force de freinage d'un véhicule qui ralentit est...", options: ["négatif (résistant)", "positif (moteur)", "nul", "indéterminé"] },
      { q: "🌍 La distance de freinage d'un véhicule augmente rapidement avec la vitesse car l'énergie cinétique varie...", options: ["en v² (le carré de la vitesse)", "proportionnellement à v", "en 1/v", "elle ne dépend pas de la vitesse"] }
    ]
  }
];
