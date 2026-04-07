/* ═══════════════════════════════════════════════════════════
   cards.js — Données des cartes + textes de l'interface
   Modifier ce fichier pour ajouter / éditer vos projets.
═══════════════════════════════════════════════════════════ */

const CARDS = [

  {
    name:   "Sun's Arrival",
    type:   "[Gameplay Programmer]",
    stars:  8,
    desc: {
      fr: "Jeu d'horreur inspiré de Five Nights at Freddy's par Scott Cawthon.",
      en: "Horror game inspired by Five Nights at Freddy's by Scott Cawthon."
    },
    img:    "assets/SunMainMenu.png",
    video:  "assets/Sun's.mp4",
    github: "https://github.com/UltiRed8/Sun-s-Arrival",
    tech:   ["unreal","blueprint"],
    atk:    "3500",
    def:    "3500",
    details: {
      fr: `
        <p>À l’origine conçu comme un exercice de level design dans le cadre de la formation Objectif3D, ce projet a rapidement évolué bien au-delà de son objectif initial. Nous avons choisi de le développer jusqu’à une version aboutie en y intégrant une intelligence artificielle destinée à maintenir une pression constante sur le joueur. Le gameplay repose également sur un système de progression avec des salles qui se débloquent au fur et à mesure de l’avancement dans le jeu. Pensé pour une expérience coopérative, le projet peut être joué jusqu’à 3 joueurs.</p>
        <h3>🎯 Ce que j'ai développé</h3>
        <ul>
          <li>Implémentation des 3C (Character, Camera, Controls), avec gestion des caméras en vue 1ère et 3ème personne</li>
          <li>Ajout d’un système de variation du FOV lors du sprint pour améliorer le game feel</li>
          <li>Développement d’une IA ennemie capable de patrouiller, ouvrir des portes et poursuivre les joueurs</li>
          <li>Implémentation de mécaniques de furtivité (casiers pour se cacher)</li>
          <li>Création d’un mini-jeu interactif (mécanique de pression)</li>
          <li>Intégration des animations du joueur et de l’IA</li>
        </ul>
        <h3>📸 Images</h3>
        <img src="assets/SunMainMenu.png" alt="Images"/>
        <img src="assets/SunLobby.png" alt="Images"/>
        <img src="assets/SunMainOffice.png" alt="Images"/>
        <img src="assets/SunReactorRoom.png" alt="Images"/>
        <img src="assets/SunWarehouse.png" alt="Images"/>
        <h3>🔧 Difficultés rencontrées</h3>
        <ul>
          <li>Adaptation des systèmes gameplay (IA, interactions, animations) au contexte multijoueur</li>
          <li>Synchronisation des états (joueurs, IA, portes, cachettes) entre les différents clients</li>
          <li>Gestion cohérente des transitions de caméra (1ère / 3ème personne) en réseau</li>
          <li>Maintien d’un game feel fluide (FOV, déplacements) malgré les contraintes du multijoueur</li>
        </ul>
      `,
      en: `
        <p>Originally created as a level design exercise during the Objectif3D program, this project quickly grew beyond its initial purpose. We decided to fully develop it into a complete experience by adding an AI system designed to constantly pressure the player. The gameplay also features a progression system where new rooms unlock as the player advances through the game. Designed as a cooperative experience, the game supports up to 3 players.</p>
        <h3>🎯 What I developed</h3>
        <ul>
          <li>Implementation of the 3Cs (Character, Camera, Controls), including first-person and third-person camera systems</li>
          <li>Implementation of dynamic FOV changes during sprint to enhance game feel</li>
          <li>Development of an enemy AI capable of patrolling, opening doors, and chasing players</li>
          <li>Implementation of stealth mechanics (lockers to hide)</li>
          <li>Creation of an interactive mini-game (pressure-based mechanic)</li>
          <li>Integration of player and AI animations</li>
        </ul>
        <h3>📸 Images</h3>
        <img src="assets/SunMainMenu.png" alt="Images"/>
        <img src="assets/SunLobby.png" alt="Images"/>
        <img src="assets/SunMainOffice.png" alt="Images"/>
        <img src="assets/SunReactorRoom.png" alt="Images"/>
        <img src="assets/SunWarehouse.png" alt="Images"/>
        <h3>🔧 Challenges faced</h3>
        <ul>
          <li>Adapting gameplay systems (AI, interactions, animations) to a multiplayer environment</li>
          <li>Synchronizing states (players, AI, doors, hiding spots) across clients</li>
          <li>Handling camera transitions (first-person / third-person) in a networked context</li>
          <li>Maintaining smooth and responsive game feel (FOV, movement) despite multiplayer constraints</li>
        </ul>
      `
    }
  },

  {
    name:   "Antastic Night",
    type:   "[Gameplay Programmer / GPE]",
    stars:  6,
    desc: {
      fr: "Jeu en local, écran scindé en tour par tour.",
      en: "Splitscreen local game in turn by turn."
    },
    img:    "assets/OverdoseMainMenu.png",
    video:  "assets/Overdose.mp4",
    github: "https://github.com/UltiRed8/OverdoseProject",
    tech:   ["unreal","cpp"],
    atk:    "2400",
    def:    "2000",
    details: {
      fr: `
        <p>Réalisé comme projet de fin de première année, ce jeu de stratégie au tour par tour a été conçu pour une expérience multijoueur locale en écran partagé. Un joueur utilise le clavier et la souris tandis que l’autre joue à la manette, offrant une configuration asymétrique pensée pour le jeu en duo sur le même écran. L’objectif est d’éliminer l’équipe adverse en planifiant soigneusement chaque déplacement et chaque action. Toute action effectuée, qu’il s’agisse d’attaquer ou d’être touché, met immédiatement fin au tour du joueur, renforçant ainsi la dimension tactique et stratégique du gameplay.</p>
        <h3>🎯 Ce que j'ai développé</h3>
        <ul>
          <li>Développement de différents gameplays events (mort, soins, attribution d'armes, etc.)</li>
          <li>Implémentation de plusieurs types d'armes</li>
          <li>Création d'un système de knockback</li>
          <li>Participation au développement du système d'inventaire</li>
          <li>Mise en place du mode écran partagé (split-screen)</li>
        </ul>
        <h3>📸 Images</h3>
        <img src="assets/OverdoseMainMenu.png" alt="Images"/>
        <img src="assets/OverdoseInGame.png" alt="Images"/>
        <img src="assets/OverdosePlayMenu.png" alt="Images"/>
        <h3>🔧 Difficultés rencontrées</h3>
        <ul>
          <li>Implémentation du split-screen tout en garantissant l'indépendance des deux joueurs (caméras, inputs et interactions séparés)</li>
          <li>Gestion des interactions simultanées pour éviter qu'un joueur n'impacte involontairement l'expérience de l'autre</li>
          <li>Équilibrage et cohérence des différents gameplay events (mort, soins, attribution d'armes)</li>
        </ul>
      `,
      en: `
        <p>Created as the end-of-first-year project, this turn-based strategy game was designed as a local multiplayer split-screen experience. One player uses a keyboard and mouse while the other plays with a controller, creating an asymmetric setup tailored for two players on the same screen. The objective is to eliminate the opposing team through careful planning of every movement and action. Any action performed, whether attacking, or being hit, immediately ends the player’s turn, emphasizing the tactical and strategic depth of the gameplay.</p>
        <h3>🎯 What I developed</h3>
        <ul>
          <li>Development of various gameplay events (death, healing, weapon granting, etc.)</li>
          <li>Implementation of multiple weapon types</li>
          <li>Creation of a knockback system</li>
          <li>Contribution to the inventory system</li>
          <li>Implementation of split-screen mode</li>
        </ul>
        <h3>📸 Images</h3>
        <img src="assets/OverdoseMainMenu.png" alt="Images"/>
        <img src="assets/OverdoseInGame.png" alt="Images"/>
        <img src="assets/OverdosePlayMenu.png" alt="Images"/>
        <h3>🔧 Challenges faced</h3>
        <ul>
          <li>Implementation of split-screen while ensuring full independence between players (separate cameras, inputs, and interactions)</li>
          <li>Handling simultaneous interactions to prevent one player from interfering with the other's experience</li>
          <li>Balancing and maintaining consistency across gameplay events (death, healing, weapon granting)</li>
        </ul>
      `
    }
  },

  {
    name:   "Underground Experience",
    type:   "[GameJam/Gameplay Programmer]",
    stars:  5,
    desc: {
      fr: "Jeu développé lors de la gamejam de mars 2026 de mon école.",
      en: "Game made during the march 2026 gamejam of my school."
    },
    img:    "assets/UEMainMenu.png",
    video:  "",
    github: "https://github.com/RaphBv/GameJamUE",
    tech:   ["unreal","blueprint"],
    atk:    "2000",
    def:    "2000",
    details: {
      fr: `
        <p>Réalisé lors de la game jam de mars 2026 organisée par mon école, ce projet a été développé en seulement 48 heures autour des thèmes « 22 mai 1859 » et « Edimbourg ». Le jeu propose au joueur de progresser à travers différentes salles et énigmes, chacune pensée pour faire avancer à la fois le gameplay et la narration. L’objectif était de construire une expérience immersive menant à une révélation finale : le joueur revient à son point de départ et comprend qu’il est prisonnier d’une boucle temporelle. Ce projet met en avant notre capacité à concevoir rapidement une expérience cohérente, narrative et engageante sous forte contrainte de temps.</p>
        <h3>🎯 Ce que j'ai développé</h3>
        <ul>
  	  <li>Développement du menu principal et de l’interface du tutoriel</li>
  	  <li>Implémentation d’un système de gravité avancé permettant au joueur de se déplacer sur les murs, les sphères et à l’envers</li>
  	  <li>Création de portails avec Render Texture / Render Target pour assurer des transitions fluides entre les zones</li>
  	  <li>Développement d’un système d’objets à récupérer pour déverrouiller des portes</li>
  	  <li>Implémentation d’objets interactifs qui s’écartent à l’approche du joueur</li>
  	  <li>Création d’un acteur à suivre avec système de proximité pour déclencher sa progression</li>
 	  <li>Développement des 3C (Character, Camera, Controls)</li>
	  <li>Optimisation des performances pour limiter le lag durant le gameplay</li>
	</ul>
        <h3>📸 Images</h3>
        <img src="assets/UEMainMenu.png" alt="Images"/>
	<img src="assets/UECity.png" alt="Images"/>
	<img src="assets/UEMetro.png" alt="Images"/>
	<img src="assets/UEGravity.png" alt="Images"/>
	<img src="assets/UEFigure.png" alt="Images"/>
        <h3>🔧 Difficultés rencontrées</h3>
        <ul>
          <li>48 heures pour faire le jeu</li>
          <li>Gestion d’un système de gravité non conventionnel sur plusieurs surfaces et orientations</li>
  	  <li>Implémentation de transitions fluides via Render Target sans impact majeur sur les performances</li>
        </ul>
      `,
      en: `
        <p>Created during my school’s March 2026 game jam, this project was developed in just 48 hours around the themes “May 22, 1859” and “Edinburgh.” The game takes the player through a series of rooms and puzzles, each designed to drive both gameplay progression and narrative development. The goal was to build an immersive experience leading to a final reveal: the player returns to the starting point and realizes they are trapped in a time loop. This project highlights our ability to quickly design a cohesive, narrative-driven, and engaging experience under tight time constraints.</p>
        <h3>🎯 What I developed</h3>
        <ul>
  	  <li>Development of the main menu and tutorial UI</li>
  	  <li>Implementation of an advanced gravity system allowing the player to walk on walls, spheres, and upside down</li>
  	  <li>Creation of portals using Render Texture / Render Target to ensure smooth transitions between areas</li>
  	  <li>Development of a collectible item system used to unlock doors</li>
  	  <li>Implementation of interactive objects that move away when the player approaches</li>
  	  <li>Creation of a companion / actor-follow system with proximity-based progression triggers</li>
  	  <li>Development of the 3Cs (Character, Camera, Controls)</li>
  	  <li>Performance optimization to reduce lag during gameplay</li>
	</ul>
        <h3>📸 Images</h3>
        <img src="assets/UEMainMenu.png" alt="Images"/>
	<img src="assets/UECity.png" alt="Images"/>
	<img src="assets/UEMetro.png" alt="Images"/>
	<img src="assets/UEGravity.png" alt="Images"/>
	<img src="assets/UEFigure.png" alt="Images"/>
        <h3>🔧 Challenges faced</h3>
        <ul>
          <li>48 hours to make the game</li>
          <li>Handling a non-standard gravity system across multiple surfaces and orientations</li>
          <li>Implementing smooth transitions through Render Targets without major performance impact</li>
        </ul>
      `
    }
  },

  {
    name:   "Game GeoGuessor",
    type:   "[Python / Game]",
    stars:  5,
    desc: {
      fr: "Un GeoGuesseur mais sur des jeux videos en Python",
      en: "A GeoGuesseur but on video games in Python"
    },
    img:    "assets/GeoMenu.png",
    video:  "",
    github: "https://github.com/RaphBv/GameGeoguessor",
    tech:   ["python"],
    atk:    "1600",
    def:    "1600",
    details: {
      fr: `
        <p>Réalisé en tant que projet personnel en Python, ce jeu s’inspire du concept de GeoGuessr en l’adaptant à l’univers du jeu vidéo. Le principe est de proposer au joueur de deviner l’emplacement d’une image ou d’une scène issue d’un jeu vidéo. Le projet a été pensé avec une architecture flexible et facilement extensible, permettant d’ajouter rapidement n’importe quel jeu afin d’en créer sa propre version du GeoGuessr. Lorsque le jeu sélectionné possède plusieurs cartes ou environnements, le joueur peut également choisir parmi différentes maps, offrant ainsi une expérience personnalisable et évolutive.</p>
        <h3>🎯 Ce que j'ai développé</h3>
        <ul>
          <li>Conception d'un système de sélection de cartes permettant au joueur d'identifier la bonne localisation à partir d'une image</li>
          <li>Implémentation d'un système de score basé sur la distance entre la position choisie et la localisation réelle</li>
          <li>Développement d'un système de sauvegarde des scores via fichiers texte</li>
          <li>Mise en place d'un système de profils joueurs</li>
          <li>Création d'un système modulaire permettant d'ajouter facilement de nouveaux jeux (cartes et images)</li>
          <li>Implémentation des fonctionnalités de zoom et dézoom sur la carte</li>
        </ul>
        <h3>📸 Images</h3>
        <img src="assets/GeoMenu.png" alt="Images"/>
        <img src="assets/GeoInGame.png" alt="Images"/>
        <h3>🔧 Difficultés rencontrées</h3>
        <ul>
          <li>Calcul précis de la distance entre deux positions sur une carte pour garantir un scoring juste</li>
          <li>Gestion des coordonnées et de leur conversion entre l'image et la carte interactive</li>
          <li>Conception d'un système modulaire permettant d'ajouter facilement de nouveaux contenus sans casser l'existant</li>
          <li>Gestion de la sauvegarde des scores de manière fiable via fichiers texte</li>
        </ul>
      `,
      en: `
        <p>Developed as a personal Python project, this game takes inspiration from the GeoGuessr concept and adapts it to the world of video games. The objective is for players to guess the location of an image or scene taken from a video game. The project was designed with a flexible and easily extensible architecture, making it simple to add virtually any game and turn it into its own GeoGuessr experience. When the selected game includes multiple maps or environments, players can also choose between different maps, creating a customizable and scalable experience.</p>
        <h3>🎯 What I developed</h3>
        <ul>
          <li>Design of a map selection system where players must identify the correct location based on an image</li>
          <li>Implementation of a scoring system based on the distance between the selected position and the actual location</li>
          <li>Development of a score-saving system using text files</li>
          <li>Implementation of a player profile system</li>
          <li>Creation of a modular system allowing easy addition of new games (maps and images)</li>
          <li>Implementation of zoom in/out functionality on the map</li>
        </ul>
        <h3>📸 Images</h3>
        <img src="assets/GeoMenu.png" alt="Images"/>
        <img src="assets/GeoInGame.png" alt="Images"/>
        <h3>🔧 Challenges faced</h3>
        <ul>
          <li>Accurate calculation of distance between two map positions to ensure fair scoring</li>
          <li>Handling coordinate systems and conversion between image data and interactive maps</li>
          <li>Designing a modular system to easily add new content without breaking existing features</li>
          <li>Reliable score saving using text files</li>
        </ul>
      `
    }
  },

  {
    name:   "King of Thieves",
    type:   "[Gameplay Programmer / SFML]",
    stars:  5,
    desc: {
      fr: "Projet dont le but a été de recréer le célèbre jeu King Of Thieves mais en utilisant SFML.",
      en: "A project made where the goal was to recreate a smartphone game named KingOfThieves but with c++ SFML."
    },
    img:    "assets/KOTMainMenu.png",
    video:  "",
    github: "https://github.com/UltiRed8/KingOfThieves",
    tech:   ["cpp"],
    atk:    "1700",
    def:    "1700",
    details: {
      fr: `
        <p>Réalisé en C++ avec la bibliothèque SFML, ce projet avait pour objectif de recréer le gameplay du jeu <em>King of Thieves</em>. L’accent a été mis sur la reproduction fidèle des mécaniques principales, notamment les déplacements du personnage, les sauts, les collisions ainsi que la navigation à travers différents niveaux et pièges. Ce projet m’a permis de renforcer mes compétences en programmation orientée objet, en gestion de la physique de jeu et en développement de gameplay en temps réel dans un environnement 2D.</p>
        <h3>🎯 Ce que j'ai développé</h3>
        <ul>
          <li>Implémentation de différents types de pièges avec comportements spécifiques</li>
          <li>Développement d'un système de rebond contre les murs basé sur la physique du jeu</li>
          <li>Gestion des collisions et interactions entre le joueur et l'environnement</li>
          <li>Intégration des animations des pièges via SFML</li>
        </ul>
        <h3>📸 Images</h3>
        <img src="assets/KOTMainMenu.png" alt="Images"/>
        <img src="assets/KOTInGame.png" alt="Images"/>
        <img src="assets/KOTLocks.png" alt="Images"/>
        <img src="assets/KOTLevelEditor.png" alt="Images"/>
        <h3>🔧 Difficultés rencontrées</h3>
        <ul>
          <li>Gestion précise des collisions et des rebonds contre les murs pour obtenir un gameplay cohérent et satisfaisant</li>
          <li>Synchronisation des animations de pièges avec leur logique de gameplay (timing, activation)</li>
          <li>Implémentation de comportements variés pour les pièges tout en gardant un système maintenable</li>
          <li>Contraintes techniques liées à SFML pour la gestion des animations et du rendu</li>
        </ul>
      `,
      en: `
        <p>Developed in C++ using the SFML library, this project aimed to recreate the gameplay of <em>King of Thieves</em>. The focus was placed on faithfully reproducing the core mechanics, including character movement, jumping, collision handling, and navigation through various levels and traps. This project allowed me to strengthen my skills in object-oriented programming, game physics management, and real-time 2D gameplay development.</p>
        <h3>🎯 What I developed</h3>
        <ul>
          <li>Implementation of various trap types with distinct behaviors</li>
          <li>Development of a wall-bounce system based on gameplay physics</li>
          <li>Handling of collisions and interactions between the player and the environment</li>
          <li>Integration of trap animations using SFML</li>
        </ul>
        <h3>📸 Images</h3>
        <img src="assets/KOTMainMenu.png" alt="Images"/>
        <img src="assets/KOTInGame.png" alt="Images"/>
        <img src="assets/KOTLocks.png" alt="Images"/>
        <img src="assets/KOTLevelEditor.png" alt="Images"/>
        <h3>🔧 Challenges faced</h3>
        <ul>
          <li>Accurate collision handling and wall-bounce behavior to achieve consistent and satisfying gameplay</li>
          <li>Synchronization between trap animations and gameplay logic (timing and activation)</li>
          <li>Implementation of diverse trap behaviors while keeping the system maintainable</li>
          <li>Technical constraints related to SFML for animation and rendering</li>
        </ul>
      `
    }
  },

  {
    name:   "Com Unity",
    type:   "[OpenGL/Ligths]",
    stars:  7,
    desc: {
      fr: "Projet détudes OpenGL, le but était de créer notre propre moteur de jeux vidéos en une semaine en équipe.",
      en: "An OpenGL studies project, the goal was to create our own video games engine in one week with small teams to do it."
    },
    img:    "assets/ComUnityMainMenu.png",
    video:  "",
    github: "https://github.com/Prog1-2023/ComUnity",
    tech:   ["cpp"],
    atk:    "3000",
    def:    "3000",
    details: {
      fr: `
        <p>Réalisé en groupe, ce projet avait pour objectif de concevoir et développer un moteur de jeu vidéo en utilisant OpenGL. Le travail portait sur la mise en place des systèmes fondamentaux d’un moteur, tels que le rendu graphique, la gestion des objets en scène, la caméra ainsi que les interactions de base nécessaires au développement d’un jeu. Ce projet m’a permis de développer une meilleure compréhension du fonctionnement interne d’un moteur de jeu et des technologies de rendu temps réel, tout en renforçant mes compétences en travail d’équipe.</p>
        <h3>🎯 Ce que j'ai développé</h3>
        <ul>
          <li>Développement d'un système d'éclairage (lumière directionnelle, ponctuelle, etc.)</li>
          <li>Ajout de lumières dynamiques positionnables dans la scène</li>
          <li>Gestion des interactions entre les lumières et les objets (ombrage, intensité, atténuation)</li>
        </ul>
        <h3>📸 Images</h3>
        <img src="assets/ComUnityMainMenu.png" alt="Images"/>
        <img src="assets/ComUnityLight.png" alt="Images"/>
        <img src="assets/ComUnityConsole.png" alt="Images"/>
        <img src="assets/ComUnityCreateClass.png" alt="Images"/>
        <img src="assets/ComUnityEditorPreferences.png" alt="Images"/>
        <img src="assets/ComUnityMeshManager.png" alt="Images"/>
        <img src="assets/ComUnityPanels.png" alt="Images"/>
        <h3>🔧 Difficultés rencontrées</h3>
        <ul>
          <li>Compréhension et implémentation des shaders (GLSL) pour gérer correctement le rendu et l'éclairage</li>
          <li>Gestion des calculs d'éclairage (normales, directions, atténuation) pour obtenir un rendu réaliste</li>
        </ul>
      `,
      en: `
        <p>Developed as a group project, the goal was to design and build a video game engine using OpenGL. The work focused on implementing the core systems of an engine, such as graphics rendering, scene object management, camera systems, and the basic interactions required for game development. This project allowed me to gain a deeper understanding of how a game engine works internally and of real-time rendering technologies, while also strengthening my teamwork and software.</p>
        <h3>🎯 What I developed</h3>
        <ul>
          <li>Development of a lighting system (directional light, point light, etc.)</li>
          <li>Integration of dynamic lights that can be placed within the scene</li>
          <li>Handling interactions between lights and objects (shading, intensity, attenuation)</li>
        </ul>
        <h3>📸 Images</h3>
        <img src="assets/ComUnityMainMenu.png" alt="Images"/>
        <img src="assets/ComUnityLight.png" alt="Images"/>
        <img src="assets/ComUnityConsole.png" alt="Images"/>
        <img src="assets/ComUnityCreateClass.png" alt="Images"/>
        <img src="assets/ComUnityEditorPreferences.png" alt="Images"/>
        <img src="assets/ComUnityMeshManager.png" alt="Images"/>
        <img src="assets/ComUnityPanels.png" alt="Images"/>
        <h3>🔧 Challenges faced</h3>
        <ul>
          <li>Understanding and implementing shaders (GLSL) to properly handle rendering and lighting</li>
          <li>Managing lighting calculations (normals, directions, attenuation) to achieve realistic results</li>
        </ul>
      `
    }
  },

  {
    name:   "Robing William",
    type:   "[Global-GameJam/Gameplay Programmer]",
    stars:  4,
    desc: {
      fr: "Jeu développé lors de la globale gamejam 2026.",
      en: "Game made during the 2026 global gamejam."
    },
    img:    "assets/RWMenu.png",
    video:  "assets/KidRobber.mp4",
    github: "https://github.com/RaphBv/Global-GameJam-Robing-William",
    tech:   ["unreal","blueprint"],
    atk:    "1200",
    def:    "1200",
    details: {
      fr: `
        <p>Réalisé en 48 heures lors de la Global Game Jam 2026 sur le thème « Masque », ce projet propose une expérience de jeu centrée sur l’infiltration et la stratégie. Le gameplay se déroule en deux phases distinctes : une première phase de repérage, durant laquelle le joueur observe les lieux et prépare son plan, suivie d’une phase de cambriolage sous contrainte de temps. Le joueur doit alors infiltrer la maison et accomplir son objectif avant la fin du chronomètre. Ce projet met en avant notre capacité à concevoir rapidement une boucle de gameplay claire, immersive et rythmée sous forte contrainte de temps.</p>
        <h3>🎯 Ce que j'ai développé</h3>
        <ul>
          <li>Conception et implémentation du niveau tutoriel</li>
          <li>Développement des 3C (Character, Camera, Controls) pour garantir une expérience de jeu fluide</li>
          <li>Intégration et gestion des animations du joueur et des éléments du jeu</li>
          <li>Implémentation de pièges avec comportements spécifiques</li>
          <li>Développement d'un système d'inventaire</li>
          <li>Mise en place de la boucle de jeu principale</li>
          <li>Implémentation d'une IA capable de détecter le joueur et de le poursuivre</li>
        </ul>
        <h3>📸 Images</h3>
        <img src="assets/RWMenu.png" alt="Images"/>
        <img src="assets/RWInGame.png" alt="Images"/>
        <img src="assets/RWAI.png" alt="Images"/>
        <img src="assets/RWMap.png" alt="Images"/>
        <h3>🔧 Difficultés rencontrées</h3>
        <ul>
          <li>48 heures pour faire le jeu</li>
        </ul>
      `,
      en: `
        <p>Created in 48 hours during Global Game Jam 2026 around the theme “Mask,” this project delivers a gameplay experience focused on infiltration and strategy. The game is divided into two distinct phases: an initial scouting phase, where the player observes the environment and plans their approach, followed by the heist phase, which takes place under a strict time limit. The player must infiltrate the house and complete the objective before the timer runs out. This project highlights our ability to quickly design a clear, immersive, and well-paced gameplay loop under intense time constraints.</p>
        <h3>🎯 What I developed</h3>
        <ul>
          <li>Design and implementation of the tutorial level</li>
          <li>Development of the 3Cs (Character, Camera, Controls) to ensure a smooth gameplay experience</li>
          <li>Integration and management of player and game element animations</li>
          <li>Implementation of traps with specific behaviors</li>
          <li>Development of an inventory system</li>
          <li>Implementation of the main game loop</li>
          <li>Implementation of an AI able to detect and chase the player</li>
        </ul>
        <h3>📸 Images</h3>
        <img src="assets/RWMenu.png" alt="Images"/>
        <img src="assets/RWInGame.png" alt="Images"/>
        <img src="assets/RWAI.png" alt="Images"/>
        <img src="assets/RWMap.png" alt="Images"/>
        <h3>🔧 Challenges faced</h3>
        <ul>
          <li>48 hours to make the game</li>
        </ul>
      `
    }
  },

  {
    name:   "Maratre avec Modération",
    type:   "[GameJam/Gameplay Programmer]",
    stars:  4,
    desc: {
      fr: "Jeu développé lors de la gamejam de décembre 2025 de mon école.",
      en: "Game made during the december 2025 gamejam of my school."
    },
    img:    "assets/MAMMenu.png",
    video:  "assets/MAM.mp4",
    github: "https://github.com/RaphBv/GameJam-MAM",
    tech:   ["unreal","blueprint"],
    atk:    "1200",
    def:    "1200",
    details: {
      fr: `
        <p>Réalisé en 48 heures lors de la game jam de décembre 2025 organisée par mon école autour du thème « Marriage », ce projet repose sur une boucle de gameplay axée sur la gestion du temps et la réactivité. Le joueur doit réparer en continu les dégâts causés par la belle-mère avant qu’elle ne détériore l’ensemble de l’environnement. La partie se déroule sous une contrainte de temps : si tous les éléments sont détruits, le joueur perd, tandis qu’il remporte la partie s’il parvient à maintenir l’ensemble intact jusqu’à la fin du chronomètre. Ce projet met en avant la conception d’un gameplay dynamique, basé sur la pression croissante et la prise de décision rapide.</p>
        <h3>🎯 Ce que j'ai développé</h3>
        <ul>
          <li>Développement des 3C (Character, Camera, Controls) avec intégration des animations</li>
          <li>Mise en place de la boucle de jeu principale</li>
          <li>Implémentation d'un système d'inventaire</li>
          <li>Animation d'éléments du décor pour enrichir l'environnement</li>
          <li>Gestion dynamique des changements de caméra en fonction des salles</li>
          <li>Implémentation d'effets visuels (fumée, particules, paillettes)</li>
        </ul>
        <h3>📸 Images</h3>
        <img src="assets/MAMMenu.png" alt="Images"/>
        <img src="assets/MAMInGame.png" alt="Images"/>
        <h3>🔧 Difficultés rencontrées</h3>
        <ul>
          <li>48 heures pour faire le jeu</li>
        </ul>
      `,
      en: `
        <p>Created in 48 hours during my school’s December 2025 game jam around the theme “Wedding,” this project is built around a gameplay loop focused on time management and quick reactions. The player must continuously repair the damage caused by the mother-in-law before she destroys the entire environment. The game takes place under a time constraint: if everything gets broken, the player loses, while victory is achieved by keeping the environment intact until the timer runs out. This project highlights the design of a fast-paced gameplay experience based on increasing pressure and rapid decision-making.</p>
        <h3>🎯 What I developed</h3>
        <ul>
          <li>Development of the 3Cs (Character, Camera, Controls) with animation integration</li>
          <li>Implementation of the main game loop</li>
          <li>Development of an inventory system</li>
          <li>Animation of environment elements to enhance immersion</li>
          <li>Dynamic camera transitions based on room changes</li>
          <li>Implementation of visual effects (smoke, particles, sparkles)</li>
        </ul>
        <h3>📸 Images</h3>
        <img src="assets/MAMMenu.png" alt="Images"/>
        <img src="assets/MAMInGame.png" alt="Images"/>
        <h3>🔧 Challenges faced</h3>
        <ul>
          <li>48 hours to make the game</li>
        </ul>
      `
    }
  },

  {
    name:   "Survival Game",
    type:   "[Gameplay Programmer]",
    stars:  6,
    desc: {
      fr: "Projet personnel de jeu de survie.",
      en: "Personal survival game project."
    },
    img:    "assets/SMap.png",
    video:  "",
    github: "https://github.com/RaphBv/Survival",
    tech:   ["unreal","blueprint"],
    atk:    "2200",
    def:    "2200",
    details: {
      fr: `
        <p>Réalisé en tant que projet personnel, ce jeu de survie repose sur un ensemble de systèmes de gameplay interconnectés visant à créer une expérience immersive et évolutive. Le joueur évolue dans un monde rythmé par un cycle jour/nuit, où il doit collecter des ressources, fabriquer des outils et gérer ses besoins essentiels. Des mécaniques de survie telles que la barre de vie, la faim et la soif viennent renforcer la gestion stratégique du personnage. Le joueur a également la possibilité de dormir pour faire avancer le temps, tout en devant se préparer à d’éventuelles attaques d’ennemis. Ce projet met en avant la création d’une boucle de progression centrée sur la survie.</p>
        <h3>🎯 Ce que j'ai développé</h3>
        <ul>
          <li>Implémentation d’un système d’inventaire, de collecte de ressources et de construction</li>
          <li>Mise en place d’un cycle jour/nuit impactant le gameplay</li>
          <li>Ajout de mécaniques d’interaction (sommeil, visualisation de l’équipement du joueur)</li>
          <li>Implémentation d’une IA ennemie capable de patrouiller et d’attaquer</li>
        </ul>
        <h3>📸 Images</h3>
        <img src="assets/SMap.png" alt="Images"/>
        <img src="assets/SInGame.png" alt="Images"/>
        <img src="assets/SAI.png" alt="Images"/>
        <img src="assets/SInventory.png" alt="Images"/>
        <img src="assets/SBuild.png" alt="Images"/>
        <h3>🔧 Difficultés rencontrées</h3>
        <ul>
          <li>Gestion de systèmes interconnectés (inventaire, construction, IA) tout en maintenant une architecture cohérente</li>
        </ul>
      `,
      en: `
        <p>Developed as a personal project, this survival game is built around a set of interconnected gameplay systems designed to create an immersive and evolving experience. The player progresses through a world driven by a day/night cycle, where they must gather resources, craft tools, and manage essential needs. Survival mechanics such as health, hunger, and thirst bars reinforce the strategic management of the character. The player can also sleep to advance time, while preparing for potential enemy attacks. This project highlights the creation of a progression loop centered around survival.</p>
        <h3>🎯 What I developed</h3>
        <ul>
          <li>Implementation of inventory, resource gathering, and building systems</li>
          <li>Implementation of a day/night cycle impacting gameplay</li>
          <li>Addition of interaction mechanics (sleeping, character equipment visualization)</li>
          <li>Implementation of enemy AI capable of patrolling and attacking</li>
        </ul>
        <h3>📸 Images</h3>
        <img src="assets/SMap.png" alt="Images"/>
        <img src="assets/SInGame.png" alt="Images"/>
        <img src="assets/SAI.png" alt="Images"/>
        <img src="assets/SInventory.png" alt="Images"/>
        <img src="assets/SBuild.png" alt="Images"/>
        <h3>🔧 Challenges faced</h3>
        <ul>
            <li>Managing interconnected systems (inventory, building, AI) while maintaining a coherent architecture</li>
        </ul>
        
      `
    }
  },

  {
    name:   "Rocket Drift",
    type:   "[Gameplay Programmer]",
    stars:  4,
    desc: {
      fr: "Projet personnel sur Unity.",
      en: "Personal Unity game project."
    },
    img:    "assets/RocketInGame.png",
    video:  "assets/RocketBoost.mp4",
    github: "https://github.com/RaphBv/RocketBoost",
    tech:   ["unity", "csharp"],
    atk:    "1400",
    def:    "1400",
    details: {
      fr: `
        <p>Ce projet consiste en un jeu de pilotage dans lequel le joueur contrôle un vaisseau capable de monter, descendre et pivoter afin de traverser différents parcours et obstacles. L’objectif était de concevoir des sensations de contrôle précises et fluides, tout en proposant des niveaux demandant maîtrise du déplacement et anticipation. Ce projet met en avant le travail sur les mécaniques de mouvement.</p>
        <h3>🎯 Ce que j'ai développé</h3>
        <ul>
          <li>Implémentation d’un système de déplacement basé sur la physique (propulsion dépendante de la rotation du vaisseau)</li>
          <li>Création de pièges avec interactions gameplay</li>
          <li>Mise en place de la boucle de jeu principale</li>
          <li>Transition automatique entre les niveaux à l’arrivée</li>
        </ul>
        <h3>📸 Images</h3>
        <img src="assets/RocketMenu.png" alt="Images"/>
        <img src="assets/RocketInGame.png" alt="Images"/>
        <img src="assets/RocketFinish.png" alt="Images"/>
        <h3>🔧 Difficultés rencontrées</h3>
        <ul>
          <li>Gestion d’un système de mouvement physique précis et contrôlable par le joueur</li>
          <li>Synchronisation entre rotation et direction de propulsion</li>
          <li>Équilibrage du gameplay pour garantir des sensations de contrôle fluides</li>
          <li>Gestion des transitions de niveau sans casser le rythme de jeu</li>
        </ul>
      `,
      en: `
        <p>This project is a piloting game in which the player controls a spacecraft that can move up, down, and rotate in order to navigate through various courses and obstacles. The goal was to design precise and fluid controls while creating levels that require movement mastery and anticipation. This project highlights work on movement mechanics.</p>
        <h3>🎯 What I developed</h3>
        <ul>
          <li>Implementation of a physics-based movement system (thrust driven by the ship’s rotation)</li>
          <li>Creation of traps with gameplay interactions</li>
          <li>Implementation of the main game loop</li>
          <li>Level transitions upon reaching the goal</li>
        </ul>
        <h3>📸 Images</h3>
        <img src="assets/RocketMenu.png" alt="Images"/>
        <img src="assets/RocketInGame.png" alt="Images"/>
        <img src="assets/RocketFinish.png" alt="Images"/>
        <h3>🔧 Challenges faced</h3>
        <ul>
          <li>Handling precise and controllable physics-based movement</li>
          <li>Synchronizing rotation with propulsion direction</li>
          <li>Balancing gameplay to ensure smooth and responsive controls</li>
          <li>Managing level transitions without breaking gameplay flow</li>
        </ul>
        
      `
    }
  },

  {
    name:   "Supra BOII",
    type:   "[Gameplay Programmer]",
    stars:  7,
    desc: {
      fr: "Projet d'études en multijoueur sur Unity.",
      en: "Multiplayer studies project on Unity."
    },
    img:    "assets/SupraInGame.png",
    video:  "",
    github: "https://github.com/RaphBv/SupraBOII",
    tech:   ["unity", "csharp"],
    atk:    "3000",
    def:    "3000",
    details: {
      fr: `
        <p>Réalisé en multijoueur, ce projet avait pour objectif de recréer le mode de jeu « Domination » de Call of Duty: Black Ops 2. Le gameplay repose sur la capture et le contrôle de plusieurs zones stratégiques de la carte, les équipes devant accumuler des points en conservant ces objectifs le plus longtemps possible. Ce projet met en avant le développement de mécaniques multijoueur compétitives.</p>
        <h3>🎯 Ce que j'ai développé</h3>
        <ul>
          <li>Implémentation des 3C (Character, Camera, Controls) pour un gameplay dynamique et fluide</li>
          <li>Développement d’un système de capture de points avec gestion du contrôle des zones</li>
          <li>Implémentation des mécaniques de combat (tir, dégâts, grenades)</li>
          <li>Création d’un système d’économie avec collecte de pièces</li>
          <li>Ajout d’une mini-carte pour améliorer la lisibilité du gameplay</li>
          <li>Développement d’un système de score accordant des points lors des captures et éliminations</li>
          <li>Implémentation d’un système de récompenses débloquant des capacités spéciales (ex : frappes aériennes) selon des seuils de points</li>
          <li>Gestion du respawn des joueurs avec changement dynamique des points d’apparition</li>
          <li>Implémentation des conditions de victoire (première équipe à atteindre 100 points)</li>
        </ul>
        <h3>📸 Images</h3>
        <img src="assets/SupraMainMenu.png" alt="Images"/>
        <img src="assets/SupraInGame.png" alt="Images"/>
        <img src="assets/SupraMap.png" alt="Images"/>
        <img src="assets/SupraTemple.png" alt="Images"/>
        <img src="assets/SupraCapture.png" alt="Images"/>
        <h3>🔧 Difficultés rencontrées</h3>
        <ul>
          <li>Synchronisation des systèmes de gameplay en multijoueur (capture de points, dégâts, score)</li>
          <li>Gestion cohérente des états des zones capturées entre les clients</li>
          <li>Équilibrage du système de score et des récompenses pour maintenir un gameplay compétitif</li>
          <li>Gestion dynamique des points de spawn pour éviter les situations injustes</li>
          <li>Maintien d’un game feel fluide malgré les contraintes réseau</li>
        </ul>
      `,
      en: `
        <p>Developed as a multiplayer project, the goal was to recreate the “Domination” game mode from Call of Duty: Black Ops 2. The gameplay is based on capturing and controlling multiple strategic areas of the map, with teams earning points by holding these objectives for as long as possible. This project highlights the development of competitive multiplayer mechanics.</p>
        <h3>🎯 What I developed</h3>
        <ul>
          <li>Implementation of the 3Cs (Character, Camera, Controls) for dynamic and responsive gameplay</li>
          <li>Development of a capture system with zone control mechanics</li>
          <li>Implementation of combat mechanics (shooting, damage, grenades)</li>
          <li>Creation of an economy system with coin collection</li>
          <li>Integration of a mini-map to improve gameplay readability</li>
          <li>Development of a scoring system rewarding captures and eliminations</li>
          <li>Implementation of a reward system unlocking special abilities (e.g., airstrikes) based on score thresholds</li>
          <li>Handling player respawn with dynamic spawn point selection</li>
          <li>Implementation of win conditions (first team to reach 100 points)</li>
        </ul>
        <h3>📸 Images</h3>
        <img src="assets/SupraMainMenu.png" alt="Images"/>
        <img src="assets/SupraInGame.png" alt="Images"/>
        <img src="assets/SupraMap.png" alt="Images"/>
        <img src="assets/SupraTemple.png" alt="Images"/>
        <img src="assets/SupraCapture.png" alt="Images"/>
        <h3>🔧 Challenges faced</h3>
        <ul>
          <li>Synchronizing gameplay systems in a multiplayer environment (capture points, damage, scoring)</li>
          <li>Maintaining consistent zone states across clients</li>
          <li>Balancing scoring and reward systems to ensure competitive gameplay</li>
          <li>Managing dynamic spawn points to prevent unfair situations</li>
          <li>Maintaining smooth game feel despite network constraints</li>
        </ul>
        
      `
    }
  },

];

/* ═══════════════════════════════════════════════════════════
   Textes de l'interface (FR / EN)
═══════════════════════════════════════════════════════════ */
const UI = {
  fr: {
    deckTitle: "Mon Deck",
    phText:    "Sélectionne une carte<br/>pour révéler son pouvoir…",
    moreBtn:   "✦ En savoir plus",
    detTitle:  "⟁ Détails du Projet",
    githubBtn: "GitHub",
    noDetail:  "Aucun détail renseigné pour ce projet.",
    playHint:  "Clique l'image pour jouer",
    aboutBio:  `Passionné par la création de mécaniques de jeu et l'expérience joueur.
      Je développe en C++ / C# sur Unreal Engine &amp; Unity.
      Ce portfolio présente mes projets — chaque carte est une mécanique ou un projet réalisé.
      Sélectionne une carte pour en apprendre davantage.`,
  },
  en: {
    deckTitle: "My Deck",
    phText:    "Select a card<br/>to reveal its power…",
    moreBtn:   "✦ Learn more",
    detTitle:  "⟁ Project Details",
    githubBtn: " GitHub",
    noDetail:  "No details provided for this project.",
    playHint:  "Click image to play",
    aboutBio:  `Passionate about crafting game mechanics and player experience.
      I develop in C++ / C# on Unreal Engine &amp; Unity.
      This portfolio showcases my projects — each card is a mechanic or completed project.
      Select a card to learn more.`,
  }
};

/* ═══════════════════════════════════════════════════════════
   Icônes technologie
═══════════════════════════════════════════════════════════ */
const TECH = {
  unreal: { l:"Unreal",  c:"#e0e0e0", s:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l7 4.5-7 4.5z"/></svg>` },
  unity:  { l:"Unity",   c:"#e0e0e0", s:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18L20 8v8l-8 4-8-4V8l8-3.82zM12 7l-4 2v4l4 2 4-2v-4l-4-2z"/></svg>` },
  cpp:    { l:"C++",     c:"#6593f5", s:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 13h-2v-2H9v-2h2v-2H9V7h2V5h2v2h2v2h-2v2h2v2h-2v2z"/></svg>` },
  csharp: { l:"C#",      c:"#9b4dca", s:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3 13h-6v-2h2v-2h-2V9h2V7h2v2h2v2h-2v2h2v2z"/></svg>` },
  python: { l:"Python",  c:"#ffd43b", s:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 10H9v-1c0-1.33 2.67-2 3-2s3 .67 3 2v1z"/></svg>` },
  lua:    { l:"Lua",     c:"#7fdbff", s:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 12H8v-2h8v2zm0-4H8V8h8v2z"/></svg>` },
  godot:  { l:"Godot",   c:"#478cbf", s:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2a8 8 0 110 16A8 8 0 0112 4zm-3 5v6h2v-2h2v2h2V9H9zm2 2h2v2h-2v-2z"/></svg>` },
  blender:{ l:"Blender", c:"#f5792a", s:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3 14c-.83.63-1.88 1-3 1a5 5 0 010-10c1.12 0 2.17.37 3 1l-1.5 1.5C13 9.2 12.5 9 12 9a3 3 0 000 6c.5 0 1-.2 1.5-.5L15 16z"/></svg>` },
  blueprint: { l:"Blueprint",  c:"#3bc7ff", s:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 10H9v-1c0-1.33 2.67-2 3-2s3 .67 3 2v1z"/></svg>` },
};
