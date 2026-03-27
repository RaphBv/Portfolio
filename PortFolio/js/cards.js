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
        <p>Un projet qui de base était un exercice de Objectif3D, mais nous avons décidé de le continuer</p>
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
        <p>A project started as an exercise from Objectif3D but quickly became a project we continued.</p>
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
        <p>Jeu de fin de première année de mes études en collaboration avec des graphistes en 1 mois</p>
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
        <p>Ending game of innocent year of my studies in collaboration with graphic designers in 1 month</p>
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
        <p>Projet réalisé en Python, le but est de trouver l'endroit exacte sur le niveau de l'image affiché.</p>
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
        <p>Project carried out in Python, the goal is to find the exact place on the displayed image level.</p>
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
        <p>Jouez dans un donjon et récupérez la clé afin d'en explorer encore plus, vous pouvez également créer votre propre donjon.</p>
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
        <p>Play in a dungeon and retrieve the key to explore even more, you can also create your own dungeon.</p>
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
        <p>Développement d'un moteur de jeu basique "ComUnity", inspiré des principes d'Unity.</p>
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
        <p>Development of a basic game engine called "ComUnity", inspired by Unity's core principles.</p>
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
        <p>Développement d'un jeu en 48h sur le thème "MASQUE".</p>
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
        <p>Game made in 48H with "MASK" theme.</p>
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
        <p>Développement d'un jeu en 48h sur le thème "MARIAGE".</p>
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
        <p>Game made in 48H with "WEDDING" theme.</p>
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
        <p>Développement d'un jeu de survie.</p>
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
        <p>Basic survival game.</p>
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
        <p>Projet personnel sur Unity avec un vaisseau en 2.5D .</p>
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
        <p>A personal project in Unity with a ship 2.5D.</p>
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
    githubBtn: "⟁ GitHub",
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
    githubBtn: "⟁ GitHub",
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
