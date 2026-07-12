/* Pre-made example detachments, transcribed from the genre settings in
   Xenos Rampant (Osprey Games, 2022) and mapped to this app's unit and option
   ids. Grouped by setting. Generated, then reviewed by hand. */

/* Grim Darkness: Combat Patrol boxes rebuilt as Xenos Rampant detachments. This
   setting is wired up but hidden (see "hidden": true below) until it is ready to
   go public. Populate this array to add the lists. */
const GRIMDARK_DETACHMENTS = [
  {
    "n": 1,
    "name": "Astra Militarum: Karsk's Gunners",
    "subtitle": "Cadian discipline and overwhelming firepower.",
    "lore": "The soldiers gathered under Major Karsk's banner are but one small part of the far larger Astra Militarum muster now defending the vaunted Sanctus Wall systems. Gathered to battle the forces of Chaos, they have also faced alien pirates and even heretic insurgents, emerging victorious time and again thanks to a blend of tight regimental discipline and raw, overwhelming firepower.",
    "image": "grimdark/astra-militarum-karsks-gunners.jpg",
    "units": [
      {
        "typeId": "light",
        "count": 1,
        "isCmd": true,
        "label": "Command Squad Karsk",
        "points": 3,
        "options": [],
        "xenos": { "combat-medic": true },
        "notes": "Major Karsk is every bit the unforgiving and grizzled Cadian commander of the propaganda vid-feeds. A gifted strategist, he is accompanied by a cadre of specialist troopers who aid him in his command duties."
      },
      {
        "typeId": "light",
        "count": 1,
        "label": "Cadian Shock Troops, first squad",
        "points": 3,
        "options": ["increased-squad"],
        "xenos": {},
        "notes": "Born soldiers, the Shock Troops of Cadia have trained their entire lives for military service. Decades of rigorous firing drills have forged them into expert sharpshooters."
      },
      {
        "typeId": "light",
        "count": 1,
        "label": "Cadian Shock Troops, second squad",
        "points": 3,
        "options": ["increased-squad"],
        "xenos": {},
        "notes": "Same card as the first squad, with a grenade launcher and plasma gun in the mix."
      },
      {
        "typeId": "support",
        "count": 1,
        "label": "Field Ordnance Battery, bombast field gun",
        "points": 8,
        "options": ["artillery", "indirect-fire"],
        "xenos": {},
        "notes": "Amongst the largest man-portable weapons fielded by the Astra Militarum are those crewed by Ordnance Teams. Bombast field guns fire heavy shells indirectly."
      },
      {
        "typeId": "support",
        "count": 1,
        "label": "Field Ordnance Battery, malleus rocket launcher",
        "points": 7,
        "options": ["anti-tank"],
        "xenos": {},
        "notes": "Same card as the bombast gun; the malleus rocket launcher fires multiple warheads."
      },
      {
        "typeId": "fighting-vehicle",
        "count": 1,
        "label": "Armoured Sentinel",
        "points": 6,
        "options": ["light-armoured", "walker"],
        "xenos": {},
        "notes": "Modified with extra protective panelling, Armoured Sentinels are superb front-line hunters. As mobile hunter-killers, they excel in destroying vehicles, bunkers and xenos monstrosities."
      }
    ]
  },
  {
    "n": 2,
    "name": "T'au Empire: Protectors of Aun'Shar",
    "subtitle": "The Greater Good, backed by battlesuit firepower.",
    "lore": "The Ethereal Aun'Shar believes he can best spread the light of the Greater Good by taking to the battlefield and overseeing the destruction of foes who cannot be enlightened through diplomacy. The Fire caste warriors at his side follow his commands without hesitation.",
    "image": "grimdark/tau-empire-protectors-of-aunshar.jpg",
    "units": [
      {
        "typeId": "light",
        "count": 1,
        "isCmd": true,
        "label": "Aun'Shar",
        "points": 4,
        "options": [],
        "xenos": { "skimmer": true, "fanatical-discipline": true },
        "notes": "Like all Ethereals, Aun'Shar is serene and wise, a spiritual leader of the T'au. In war he skims above the battle aboard his hover drone and invokes the might of the T'au castes."
      },
      {
        "typeId": "light",
        "count": 1,
        "label": "Shas'nel D'tano",
        "points": 4,
        "options": ["armour-piercing", "heavy-weapon"],
        "xenos": {},
        "notes": "Cadre Fireblades fight selflessly amongst the Fire caste rank and file, optimising the ferocity and accuracy of their firepower."
      },
      {
        "typeId": "fighting-vehicle",
        "count": 1,
        "label": "Ghostkeel Battlesuit",
        "points": 11,
        "options": ["light-armoured", "walker", "veteran-crew"],
        "xenos": { "cloaking-device": true },
        "notes": "Between its stealth field and electrowarfare suite the Ghostkeel slips unnoticed across the battlefield, then unleashes ferocious volleys of firepower."
      },
      {
        "typeId": "light",
        "count": 1,
        "label": "Strike Team",
        "points": 6,
        "options": ["increased-squad", "heavy-weapon", "armour-piercing"],
        "xenos": {},
        "notes": "Fire Warrior Strike Teams are the mainstay of many Hunter Cadres, unleashing storms of anti-personnel firepower."
      },
      {
        "typeId": "recon",
        "count": 1,
        "label": "Stealth Battlesuits",
        "points": 5,
        "options": ["veterans"],
        "xenos": { "skimmer": true },
        "notes": "The XV25 conceals its pilot behind sensor-baffling stealth technology, with jet-assisted speed and impressive firepower."
      }
    ]
  },
  {
    "n": 3,
    "name": "Leagues of Votann",
    "subtitle": "Well-armoured Kin and their Oathband firepower.",
    "image": "grimdark/leagues-of-votann.jpg",
    "units": [
      {
        "typeId": "elite",
        "count": 1,
        "isCmd": true,
        "label": "Kâhl Warspeke",
        "points": 8,
        "options": ["high-powered-blades", "armour-piercing"],
        "xenos": {},
        "notes": "Kâhl Warspeke's strategic wisdom and martial might inspire his warriors, bludgeoning with his mass gauntlet those not obliterated by his volkanite disintegrator."
      },
      {
        "typeId": "heavy",
        "count": 1,
        "label": "Hearthkyn Warriors",
        "points": 9,
        "options": ["increased-squad", "heavy-weapon", "armour-piercing"],
        "xenos": { "combat-medic": true },
        "notes": "Well-armoured and well-trained, Hearthkyn Warriors form the backbone of most Oathbands, laying down hails of firepower."
      },
      {
        "typeId": "berserk",
        "count": 1,
        "label": "Cthonian Beserks",
        "points": 7,
        "options": ["heavy-armour", "high-powered-blades"],
        "xenos": { "combat-medic": true },
        "notes": "Cthonian Beserks are amongst the most heavily augmented Kin, storming enemy strongpoints and breaking them open."
      },
      {
        "typeId": "softskin-vehicle",
        "count": 1,
        "label": "Hernkyn Pioneers",
        "points": 6,
        "options": ["transport-10"],
        "xenos": { "skimmer": true, "special-insertion": true },
        "notes": "Hernkyn Pioneers skim across alien worlds on magna-coil bikes, striking from unexpected quarters."
      }
    ]
  },
  {
    "n": 4,
    "name": "Drukhari: The Blades of Torment",
    "subtitle": "Quicksilver raiders who prize merciless butchery.",
    "lore": "Assembled for the terror raids on the night world of Somniad, Archon Malivex's warriors prize swift and merciless butchery. His followers strive to impress their cruel master and never fall behind the quicksilver tempo of his hit-and-run attacks.",
    "image": "grimdark/drukhari-the-blades-of-torment.jpg",
    "units": [
      {
        "typeId": "elite",
        "count": 1,
        "isCmd": true,
        "label": "Archon Malivex",
        "points": 9,
        "options": ["high-powered-blades", "mobile", "armour-piercing"],
        "xenos": {},
        "notes": "Swift and deadly, the Archon hacks the souls from his victims with his huskblade while evading counterstrikes with contemptuous ease."
      },
      {
        "typeId": "light",
        "count": 1,
        "label": "Kabalite Warriors",
        "points": 5,
        "options": ["increased-squad", "heavy-weapon"],
        "xenos": {},
        "notes": "Kabalite Warriors unleash hails of toxin-coated shards during swift, agile advances."
      },
      {
        "typeId": "berserk",
        "count": 1,
        "label": "Incubi",
        "points": 6,
        "options": ["high-powered-blades", "heavy-armour", "mobile"],
        "xenos": {},
        "notes": "Warrior-perfectionists in ancient warsuits, the Incubi sweep giant klaives in decapitating strikes."
      },
      {
        "typeId": "softskin-vehicle",
        "count": 1,
        "label": "Raider",
        "points": 5,
        "options": ["transport-10"],
        "xenos": { "skimmer": true },
        "notes": "A favoured transport cutter that speeds on anti-grav turbines, its passengers loosing shots from the trophy-hung decking."
      },
      {
        "typeId": "fighting-vehicle",
        "count": 1,
        "label": "Ravager",
        "points": 5,
        "options": ["light-armoured"],
        "xenos": { "skimmer": true },
        "notes": "Ravager gunships are mobile assassins, mounting enough firepower to gut enemy tanks."
      }
    ]
  },
  {
    "n": 5,
    "name": "Necrons: Amonhotekh's Guard",
    "subtitle": "Undying android legions that self-repair and advance.",
    "image": "grimdark/necrons-amonhotekhs-guard.jpg",
    "units": [
      {
        "typeId": "heavy",
        "count": 1,
        "isCmd": true,
        "label": "Necron Warriors led by Overlord Amonhotekh",
        "points": 8,
        "options": ["increased-squad", "heavy-weapon", "armour-piercing"],
        "xenos": { "undead": true, "regeneration": true },
        "notes": "Overlord Amonhotekh's android mind is swift, his body implacably resilient. Necron Warriors attack in shambling rank upon rank, self-repairing from hideous damage."
      },
      {
        "typeId": "berserk",
        "count": 1,
        "label": "Skorpekh Destroyers",
        "points": 7,
        "options": ["heavy-armour", "high-powered-blades"],
        "xenos": { "mechanoid": true, "fearsome": true },
        "notes": "The Destroyer cult pass through enemy lines in a madcap pirouette of slashing hyperphase blades."
      },
      {
        "typeId": "lesser-xeno",
        "count": 1,
        "label": "Canoptek Scarab Swarms",
        "points": 5,
        "options": ["swarm"],
        "xenos": { "mechanoid": true, "skimmer": true },
        "notes": "Canoptek Scarabs descend in skimming swarms, breaking down infantry and tanks alike with their feeder mandibles."
      },
      {
        "typeId": "fighting-vehicle",
        "count": 1,
        "label": "Canoptek Doomstalker",
        "points": 10,
        "options": ["walker", "veteran-crew"],
        "xenos": { "mechanoid": true },
        "notes": "Doomstalkers stride with eerie grace, annihilating all who stand against them with searing salvoes from their doomsday blasters."
      }
    ]
  },
  {
    "n": 6,
    "name": "Death Guard: The Shambling Horde",
    "subtitle": "Plague-ridden hulks and their swarming pox victims.",
    "image": "grimdark/death-guard-the-shambling-horde.jpg",
    "units": [
      {
        "typeId": "elite",
        "count": 1,
        "isCmd": true,
        "label": "Typhus",
        "points": 10,
        "options": ["high-powered-blades"],
        "xenos": { "fearsome": true, "regeneration": true },
        "notes": "Host of the Destroyer Hive, Typhus slices apart countless foes with his filth-encrusted power scythe and unleashes swarming plague-flies."
      },
      {
        "typeId": "heavy",
        "count": 1,
        "label": "Folgoth Grelch",
        "points": 5,
        "options": ["heavy-weapon", "armour-piercing"],
        "xenos": {},
        "notes": "Biologus Putrifiers carry blight grenades bloated with the latest contagions, implanting killing maladies into the enemy."
      },
      {
        "typeId": "heavy",
        "count": 1,
        "label": "Plague Marines",
        "points": 9,
        "options": ["increased-squad", "heavy-weapon", "armour-piercing"],
        "xenos": { "fearsome": true },
        "notes": "The mainstay of Death Guard vectoriums, excelling in short-ranged firefights and relentless assaults."
      },
      {
        "typeId": "militia",
        "count": 3,
        "label": "Poxwalkers",
        "points": 2,
        "options": [],
        "xenos": { "undead": true, "contagious": true },
        "notes": "Victims of the Walking Pox, terror troops whose ceaseless groaning infects the living."
      }
    ]
  },
  {
    "n": 7,
    "name": "Space Marines: Strike Force Octavius",
    "subtitle": "Terminator-clad veterans purging dug-in foes.",
    "lore": "The Space Marines of Strike Force Octavius specialise in purging the Emperor's enemies amongst the most tangled terrain, their resilience and close-range firepower enough to eradicate dug-in foes.",
    "image": "grimdark/space-marines-strike-force-octavius.jpg",
    "units": [
      {
        "typeId": "elite",
        "count": 1,
        "isCmd": true,
        "label": "Captain Octavius",
        "points": 9,
        "options": ["super-heavy-armour", "high-powered-blades"],
        "xenos": {},
        "notes": "Captain Octavius goes to battle clad in Terminator plate, shrugging off the worst his enemies can hurl before carving them apart with his relic blade."
      },
      {
        "typeId": "elite",
        "count": 1,
        "label": "Librarian Tantus",
        "points": 7,
        "options": [],
        "xenos": { "psychic": 0 },
        "notes": "Librarians in warded Terminator armour blast the foe with powerful psychic energies."
      },
      {
        "typeId": "elite",
        "count": 1,
        "label": "Terminator Squad",
        "points": 8,
        "options": ["super-heavy-armour"],
        "xenos": {},
        "notes": "Terminator armour enables its wearer to survive anything; Terminator Squads appear in the midst of the foe firing fearsome weapons."
      },
      {
        "typeId": "elite",
        "count": 1,
        "label": "Infernus Squad",
        "points": 6,
        "options": [],
        "xenos": {},
        "notes": "Infernus Squads purge swathes of enemy ranks with incandescent firestorms from their pyreblasters."
      }
    ]
  },
  {
    "n": 8,
    "name": "Astra Militarum: Karsk's Gunners, lean version",
    "subtitle": "The same guns, trimmed for a 24 point muster.",
    "image": "grimdark/astra-militarum-karsks-gunners-lean-version.jpg",
    "units": [
      {
        "typeId": "light",
        "count": 1,
        "isCmd": true,
        "label": "Command Squad Karsk",
        "points": 3,
        "options": [],
        "xenos": { "combat-medic": true }
      },
      {
        "typeId": "light",
        "count": 2,
        "label": "Cadian Shock Troops, two squads",
        "points": 3,
        "options": ["increased-squad"],
        "xenos": {}
      },
      {
        "typeId": "support",
        "count": 1,
        "label": "Field Ordnance Battery",
        "points": 8,
        "options": ["artillery", "indirect-fire"],
        "xenos": {}
      },
      {
        "typeId": "fighting-vehicle",
        "count": 1,
        "label": "Armoured Sentinel",
        "points": 7,
        "options": ["armour-piercing", "light-armoured", "walker"],
        "xenos": {}
      }
    ]
  },
  {
    "n": 9,
    "name": "Militarum Tempestus: Tempestus Scions",
    "subtitle": "Grav-chute storm troopers dropping into the enemy.",
    "lore": "A force built from generic Tempestus Scion models. The whole force deep-strikes on grav-chutes, carapace armour turning aside return fire as their hotshot volleys burn through the enemy.",
    "image": "grimdark/militarum-tempestus-tempestus-scions.jpg",
    "units": [
      {
        "typeId": "heavy",
        "count": 1,
        "isCmd": true,
        "label": "Tempestor Prime",
        "points": 6,
        "options": ["armour-piercing"],
        "xenos": { "special-insertion": true, "fanatical-discipline": true },
        "notes": "A Tempestor Prime drops from the sky at the head of his storm troopers, calling targets and holding the line steady."
      },
      {
        "typeId": "heavy",
        "count": 1,
        "label": "Scion Squad, first",
        "points": 6,
        "options": ["increased-squad", "armour-piercing"],
        "xenos": { "special-insertion": true },
        "notes": "Scions descend on grav-chutes into the heart of the enemy position."
      },
      {
        "typeId": "heavy",
        "count": 1,
        "label": "Scion Squad, second",
        "points": 6,
        "options": ["increased-squad", "armour-piercing"],
        "xenos": { "special-insertion": true }
      },
      {
        "typeId": "heavy",
        "count": 1,
        "label": "Scion Special Weapons Squad",
        "points": 6,
        "options": ["heavy-weapon", "armour-piercing"],
        "xenos": { "special-insertion": true },
        "notes": "Every hand carries a special weapon, dropping in to crack a tank or bunker before the enemy can react."
      }
    ]
  },
  {
    "n": 10,
    "name": "Adeptus Mechanicus: Maniple Verask-Alpha",
    "subtitle": "Cyborg warriors purging the greenskin waves.",
    "lore": "This combined arms maniple was assembled by Enginseer Verask for protection during the fighting around the turbine-city of Shadravorsk, his cyborg warriors exterminating one greenskin wave after another.",
    "image": "grimdark/adeptus-mechanicus-maniple-verask-alpha.jpg",
    "units": [
      {
        "typeId": "heavy",
        "count": 1,
        "isCmd": true,
        "label": "Enginseer Verask",
        "points": 4,
        "options": [],
        "xenos": { "combat-medic": true },
        "notes": "Enginseer Verask is respected for his connection to machine spirits and his uncompromising brutality in battle."
      },
      {
        "typeId": "light",
        "count": 1,
        "label": "Skitarii Rangers",
        "points": 5,
        "options": ["increased-squad", "heavy-weapon"],
        "xenos": {},
        "notes": "Rangers bear antique galvanic rifles whose energised ammunition leaves the prey a smoking husk."
      },
      {
        "typeId": "heavy",
        "count": 1,
        "label": "Kataphron Destroyers",
        "points": 5,
        "options": ["heavy-weapon", "armour-piercing"],
        "xenos": { "mechanoid": true },
        "notes": "Biomechanical constructs operating as mobile heavy weapons platforms."
      },
      {
        "typeId": "fighting-vehicle",
        "count": 1,
        "label": "Onager Dunecrawler",
        "points": 10,
        "options": ["walker", "veteran-crew"],
        "xenos": { "mechanoid": true },
        "notes": "The Onager's flexible armaments blast apart aircraft or atomise elite infantry, advancing on multiple limbs over treacherous obstacles."
      }
    ]
  }
];

export const SETTINGS = [
  {
    "id": "weird-war",
    "name": "Weird War: Operation Werwolf",
    "blurb": "Superscience and occult darkness in the World Wars.",
    "nationalTraits": true,
    "detachments": [
      {
        "n": 1,
        "name": "Early Great War Conscripts (1914)",
        "subtitle": "It'll Be Over By Christmas",
        "icon": "pickelhaube",
        "units": [
          {
            "typeId": "light",
            "count": 1,
            "label": "Platoon Major and Staff",
            "notes": "An officer from the old army, trained for a war of manoeuvre, now commanding men in trenches he never imagined. His staff work hard to look useful.",
            "points": 1,
            "options": [],
            "xenos": {}
          },
          {
            "typeId": "light",
            "count": 4,
            "label": "Infantry Group",
            "notes": "Mobilised from farms and factories across the Empire. Most had never left their village. None of them imagined this.",
            "points": 2,
            "options": [
              "increased-squad",
              "undisciplined"
            ],
            "xenos": {}
          },
          {
            "typeId": "recon",
            "count": 1,
            "label": "Jaegers",
            "notes": "Hunters before the war, they brought those skills to the front. They move quietly and shoot first.",
            "points": 2,
            "options": [],
            "xenos": {}
          },
          {
            "typeId": "berserk",
            "count": 2,
            "label": "Uhlan or Hussar Cavalry Troop",
            "notes": "The cavalry's role on the Western Front lasted about six weeks before the wire and the machine guns made clear what century this war was. These men haven't been told.",
            "points": 4,
            "options": [
              "increased-squad",
              "mobile"
            ],
            "xenos": {}
          },
          {
            "typeId": "support",
            "count": 1,
            "label": "Heavy Machine Gun Team",
            "notes": "The Maxim requires four men to operate and one to mourn what it does. The gunner rarely looks up from the sights.",
            "points": 5,
            "options": [],
            "xenos": {}
          }
        ]
      },
      {
        "n": 2,
        "name": "Late Great War Trench Fighters (1918)",
        "subtitle": "It Wasn't Over By Christmas",
        "icon": "stahlhelm",
        "units": [
          {
            "typeId": "light",
            "count": 1,
            "label": "Stosstruppen Group",
            "notes": "Trained to bypass strongpoints and push deep into enemy lines. The Stormtroopers were the best-adapted soldiers of a war that killed everyone who couldn't adapt fast enough.",
            "points": 5,
            "options": [
              "increased-squad",
              "assault-doctrine"
            ],
            "xenos": {}
          },
          {
            "typeId": "light",
            "count": 2,
            "label": "Infantry Group",
            "notes": "Four years in the trenches leave marks that don't wash off. These men are frightened of nothing because they've seen everything.",
            "points": 5,
            "options": [
              "increased-squad",
              "heavy-weapon"
            ],
            "xenos": {}
          },
          {
            "typeId": "support",
            "count": 1,
            "label": "Anti-Tank Rifle Group",
            "notes": "The tank arrived and the infantry had no answer. So they made one. It's heavy, awkward, and dangerous to fire. It works.",
            "points": 6,
            "options": [
              "armour-piercing"
            ],
            "xenos": {}
          },
          {
            "typeId": "fighting-vehicle",
            "count": 1,
            "label": "Beutepanzerwagen (captured British Mark IV tank)",
            "notes": "Captured, repaired, repainted, and driven back into battle by men who've never read the manual. It runs. Mostly.",
            "points": 3,
            "options": [
              "anti-personnel",
              "armour-piercing"
            ],
            "xenos": {
              "slow": true,
              "unstable": true
            }
          }
        ]
      },
      {
        "n": 3,
        "name": "Occult Freikorps (1920s)",
        "subtitle": "Black Arts In The Black Forest",
        "icon": "moon",
        "badge": { "bg": "#464f43", "fg": "#b5c4ac" },
        "units": [
          {
            "typeId": "light",
            "count": 1,
            "label": "Schüler or Hexe",
            "notes": "The Freikorps' dark heart — a student of arts the university will never teach, or a woman who learned the old knowledge in the old way. Either is dangerous.",
            "points": 3,
            "options": [],
            "xenos": {
              "psychic": 1
            }
          },
          {
            "typeId": "greater-xeno",
            "count": 1,
            "label": "Waldwächter",
            "notes": "The forests of Germany are old. The things that guard them are older. The Freikorps didn't summon the Waldwächter — they simply stopped driving it away.",
            "points": 5,
            "options": [],
            "xenos": {
              "demonic": true,
              "special-insertion": true
            }
          },
          {
            "typeId": "primitive",
            "count": 2,
            "label": "Waldkinder",
            "notes": "Half-seen shapes between the trees, neither child nor spirit. They follow the Freikorps not out of loyalty, but because the Schüler knows which words to say.",
            "points": 3,
            "options": [
              "savages",
              "armoured",
              "increased-squad"
            ],
            "xenos": {
              "demonic": true,
              "special-insertion": true
            }
          },
          {
            "typeId": "light",
            "count": 2,
            "label": "Cultist Coven",
            "notes": "Men and women who found the old religion waiting for them in the chaos of the Republic. They believe. That is what makes them useful.",
            "points": 2,
            "options": [
              "guerrillas"
            ],
            "xenos": {}
          },
          {
            "typeId": "support",
            "count": 1,
            "label": "Cultist Coven with a Machine Gun",
            "notes": "The old faith has been updated for the new century. The Mauser is a sacrament. The machine gun is a high altar.",
            "points": 5,
            "options": [],
            "xenos": {}
          },
          {
            "typeId": "militia",
            "count": 1,
            "label": "Moorkörper",
            "notes": "The bogs have been swallowing people since before recorded history. When the right words are spoken, some of them come back.",
            "points": 1,
            "options": [
              "ravenous-horde"
            ],
            "xenos": {
              "undead": true
            }
          }
        ]
      },
      {
        "n": 4,
        "name": "Strange Foundation Expedition (1920s)",
        "subtitle": "Some Things Don't Belong In A Museum",
        "icon": "compass",
        "badge": { "bg": "#1b3a6b", "fg": "#9dc4e8" },
        "units": [
          {
            "typeId": "light",
            "count": 1,
            "label": "Strange Foundation Researchers",
            "notes": "Academics with more curiosity than caution. They're here to document, catalogue, and ideally not die. Two out of three is considered a good expedition.",
            "points": 2,
            "options": [
              "close-quarters"
            ],
            "xenos": {
              "fearful": true,
              "psychic": 2
            }
          },
          {
            "typeId": "light",
            "count": 1,
            "label": "Adventurous Mercenaries",
            "notes": "Hired for their rifle skills and their willingness not to ask questions about the cargo. They've stopped asking questions entirely.",
            "points": 2,
            "options": [
              "heavy-weapon"
            ],
            "xenos": {
              "mercenary": true
            }
          },
          {
            "typeId": "light",
            "count": 1,
            "label": "Mercenary Adventurers",
            "notes": "They've been on enough expeditions to know what the warning signs look like. They're still here, which says something about either their luck or their judgement.",
            "points": 2,
            "options": [
              "increased-squad"
            ],
            "xenos": {
              "mercenary": true
            }
          },
          {
            "typeId": "light",
            "count": 1,
            "label": "Mercenary Horsemen",
            "notes": "Cavalry escort for the survey teams, hauling equipment through terrain no truck can manage. They've seen things in the hills that don't make it into the reports.",
            "points": 1,
            "options": [
              "mobile"
            ],
            "xenos": {
              "mercenary": true
            }
          },
          {
            "typeId": "militia",
            "count": 2,
            "label": "Local Work Crews or Luggage Bearers",
            "notes": "Hired in the nearest settlement for wages and promises. They know the local stories. They are not paid enough.",
            "points": 2,
            "options": [
              "mob",
              "ravenous-horde"
            ],
            "xenos": {}
          },
          {
            "typeId": "light",
            "count": 1,
            "label": "Unreliable Local Guards",
            "notes": "Armed, present, and with divided loyalties the Foundation pretends not to notice. They know something about the site. They won't say what.",
            "points": 2,
            "options": [
              "increased-squad",
              "undisciplined"
            ],
            "xenos": {}
          },
          {
            "typeId": "softskin-vehicle",
            "count": 3,
            "label": "Cargo Trucks",
            "notes": "The Foundation ships crates that don't appear on the manifest. The trucks carry them. The drivers don't open them.",
            "points": 2,
            "options": [
              "civilian",
              "transport-10"
            ],
            "xenos": {
              "mercenary": true
            }
          },
          {
            "typeId": "recon",
            "count": 1,
            "label": "Mysterious Gunmen Wearing Fezzes",
            "notes": "Who they work for is never established. They appear when certain items surface, handle their business efficiently, and leave. The Foundation has stopped trying to follow them.",
            "points": 5,
            "options": [],
            "xenos": {
              "fanatical-discipline": true,
              "infiltrators": true,
              "special-insertion": true
            }
          }
        ]
      },
      {
        "n": 5,
        "name": "Werwolf Handwerkers (1944–45)",
        "subtitle": "Allegedly German Technological Ingenuity",
        "icon": "iron-cross",
        "badge": { "bg": "#6b0000", "fg": "#0a0a0a" },
        "units": [
          {
            "typeId": "elite",
            "count": 1,
            "label": "Handwerker with MG42 and Powered Armour",
            "notes": "The engineers who built the prototypes were first to wear them. The powered frame multiplies strength and absorbs damage. The MG42 does the rest.",
            "points": 6,
            "options": [
              "super-heavy-armour"
            ],
            "xenos": {
              "unstable": true
            }
          },
          {
            "typeId": "fighting-vehicle",
            "count": 1,
            "label": "Haunebu-class Luftscheibe",
            "notes": "The Vril Society claimed it was recovered technology. The Handwerkers say they built it themselves. Either way, it flies, and it is hard to shoot down.",
            "points": 5,
            "options": [
              "armour-piercing",
              "light-armoured"
            ],
            "xenos": {
              "flying": true,
              "unstable": true
            }
          },
          {
            "typeId": "light",
            "count": 1,
            "label": "Waffen-SS with Exo-skeletons",
            "notes": "Hydraulic frames over standard infantry kit. Not invincible. Harder to kill than an ordinary man.",
            "points": 4,
            "options": [
              "increased-squad",
              "armour-piercing"
            ],
            "xenos": {
              "stabilised-weaponry": true,
              "unstable": true
            }
          },
          {
            "typeId": "heavy",
            "count": 1,
            "label": "Waffen-SS with Powered Armour and Electro-magnetic Deflector Screens",
            "notes": "Walking tanks. The deflector screens stop most small-arms fire. Heavy weapons are another matter.",
            "points": 4,
            "options": [
              "increased-squad",
              "armour-piercing"
            ],
            "xenos": {
              "force-field": true,
              "unstable": true
            }
          },
          {
            "typeId": "support",
            "count": 1,
            "label": "Waffen-SS with Gravitic Wave Emitter",
            "notes": "Whatever this weapon does, no Allied physics textbook explains it. The effect on targets is not ambiguous. The cause is.",
            "points": 6,
            "options": [
              "armour-piercing",
              "engulfing"
            ],
            "xenos": {
              "unstable": true
            }
          }
        ]
      },
      {
        "n": 6,
        "name": "Werwolf Schülers (1945–46)",
        "subtitle": "Taking The World With Them",
        "icon": "wolf-howl",
        "units": [
          {
            "typeId": "light",
            "count": 1,
            "label": "Schüler and Assistants",
            "notes": "The magician and the circle of students who help channel the old powers. The Schüler does not carry a weapon. They don't need one.",
            "points": 3,
            "options": [
              "close-quarters"
            ],
            "xenos": {
              "psychic": 2
            }
          },
          {
            "typeId": "fighting-vehicle",
            "count": 1,
            "label": "Dämonenpanzer",
            "notes": "A Panzer IV with something inside it that isn't a crew. It moves without fuel. It fires without loading. It does not stop.",
            "points": 9,
            "options": [],
            "xenos": {
              "demonic": true,
              "force-field": true,
              "regeneration": true,
              "teleport-jump": true
            }
          },
          {
            "typeId": "greater-xeno",
            "count": 1,
            "label": "Vergulstungkreatur",
            "notes": "Something between a soldier and an act of violence given form. The Schüler made it from what was available. The materials were not all inanimate.",
            "points": 6,
            "options": [
              "high-powered-blades"
            ],
            "xenos": {
              "demonic": true,
              "special-insertion": true
            }
          },
          {
            "typeId": "berserk",
            "count": 2,
            "label": "Tausendjährige Krieger",
            "notes": "Warriors bound to serve for a thousand years. The Reich lasted twelve. The binding still has time to run.",
            "points": 3,
            "options": [
              "increased-squad"
            ],
            "xenos": {
              "special-insertion": true,
              "undead": true,
              "slow": true
            }
          }
        ]
      },
      {
        "n": 7,
        "name": "Werwolf Freischärlers (1945–46)",
        "subtitle": "Men Who Can Never Go Home",
        "icon": "balkenkreuz",
        "units": [
          {
            "typeId": "light",
            "count": 1,
            "label": "Waffen-SS with Panzerfausts and MG42",
            "notes": "The last generation of true believers, armed with the weapons of a disintegrating war industry. They've heard the news from Berlin. They've chosen not to accept it.",
            "points": 8,
            "options": [
              "increased-squad",
              "armour-piercing",
              "heavy-weapon"
            ],
            "xenos": {
              "fanatical-discipline": true
            }
          },
          {
            "typeId": "light",
            "count": 1,
            "label": "SS or Heer Holdouts on Horseback",
            "notes": "When the fuel ran out and the roads were bombed to rubble, the horses came back. These men rode them past surrender and kept going.",
            "points": 4,
            "options": [
              "mobile"
            ],
            "xenos": {
              "fanatical-discipline": true
            }
          },
          {
            "typeId": "light",
            "count": 1,
            "label": "Hitler Youth or Volksturm Partisans",
            "notes": "Children handed Volkssturmgewehrs and pointed at the advancing enemy. Some of them are terrifyingly willing.",
            "points": 2,
            "options": [
              "guerrillas"
            ],
            "xenos": {}
          },
          {
            "typeId": "recon",
            "count": 1,
            "label": "SS Assassination Squad",
            "notes": "They were given a list and released into the chaos. They're working through it methodically. The war's end is not on the list.",
            "points": 4,
            "options": [],
            "xenos": {
              "fanatical-discipline": true
            }
          },
          {
            "typeId": "recon",
            "count": 1,
            "label": "Snipers",
            "notes": "The ruins provide cover. The refugees provide cover. The chaos provides cover. They've been here for weeks and have no intention of leaving.",
            "points": 6,
            "options": [
              "sniper-team"
            ],
            "xenos": {
              "fanatical-discipline": true
            }
          }
        ]
      },
      {
        "n": 8,
        "name": "Operation Paperclip (1945–46)",
        "subtitle": "Loaded For Bear",
        "icon": "usa-flag",
        "badge": { "bg": "#3c4a1e", "fg": "#d4d68a" },
        "units": [
          {
            "typeId": "light",
            "count": 1,
            "label": "Army Command Section",
            "notes": "Intelligence officers whose job was to secure German scientists before the Soviets got there. The scientists they found were not what the briefing described.",
            "points": 3,
            "options": [
              "heavy-weapon"
            ],
            "xenos": {}
          },
          {
            "typeId": "light",
            "count": 1,
            "label": "Army GIs",
            "notes": "Young men from farms and cities, now clearing laboratories built under mountains that aren't on any map. They're professional about it. The nightmares come later.",
            "points": 5,
            "options": [
              "increased-squad",
              "heavy-weapon"
            ],
            "xenos": {}
          },
          {
            "typeId": "support",
            "count": 1,
            "label": "Army Flamethrower Team",
            "notes": "Some things in the lower levels of the Handwerker facilities can't be detained, questioned, or reasoned with. The flamethrower team understands their role.",
            "points": 4,
            "options": [
              "close-quarters",
              "engulfing"
            ],
            "xenos": {}
          },
          {
            "typeId": "recon",
            "count": 1,
            "label": "Office of Strategic Services Team",
            "notes": "Spies with cover identities operating in a Germany that's technically surrendered. They've stopped calling what they're hunting 'assets'.",
            "points": 3,
            "options": [],
            "xenos": {
              "infiltrators": true
            }
          },
          {
            "typeId": "fighting-vehicle",
            "count": 1,
            "label": "Sherman M4 Tank",
            "notes": "American armour in the European theatre, now operating in the underground complexes and mountain passes the official war never reached.",
            "points": 6,
            "options": [],
            "xenos": {}
          },
          {
            "typeId": "softskin-vehicle",
            "count": 1,
            "label": "Jeep with MG",
            "notes": "Fast enough to feel safer than you probably are. The MG provides confidence. The driver provides speed. Neither is sufficient on its own.",
            "points": 3,
            "options": [
              "technical"
            ],
            "xenos": {}
          }
        ]
      },
      {
        "n": 9,
        "name": "The Strange Research Group (1939–46)",
        "subtitle": "Churchill's Very Secret Army",
        "icon": "union-jack",
        "badge": { "bg": "#00247d", "fg": "#ffffff" },
        "units": [
          {
            "typeId": "heavy",
            "count": 1,
            "label": "Special Air Service Team",
            "notes": "Churchill's instrument for problems that couldn't be handed to ordinary forces. They've been briefed on what they're hunting. The briefing was classified at the highest level.",
            "points": 5,
            "options": [
              "heavy-weapon"
            ],
            "xenos": {
              "psychic": 0
            }
          },
          {
            "typeId": "light",
            "count": 1,
            "label": "Royal Marines",
            "notes": "Naval infantry who've cleared beaches under fire and tunnels in silence. Whatever the Strange Research Group sends them after, they approach it the same way: carefully and together.",
            "points": 6,
            "options": [
              "increased-squad",
              "heavy-weapon"
            ],
            "xenos": {
              "psychic": 0
            }
          },
          {
            "typeId": "berserk",
            "count": 1,
            "label": "Gurkhas",
            "notes": "Warriors whose service to the Crown brings its own knowledge — of mountains, of the dark, of what lives in both. The Schülers are not the first occult force they've faced.",
            "points": 3,
            "options": [
              "increased-squad"
            ],
            "xenos": {}
          },
          {
            "typeId": "support",
            "count": 1,
            "label": "Mortar Team",
            "notes": "Indirect fire for situations where direct contact with the target would be inadvisable. They receive grid references. They don't always know what's on them.",
            "points": 6,
            "options": [
              "indirect-fire"
            ],
            "xenos": {}
          },
          {
            "typeId": "light",
            "count": 1,
            "label": "German Turncoats",
            "notes": "They crossed over because they'd seen what was in the lower levels of the Schüler facilities. Useful interpreters. Very frightened.",
            "points": 4,
            "options": [
              "increased-squad"
            ],
            "xenos": {
              "hatred": true
            }
          }
        ]
      },
      {
        "n": 10,
        "name": "The Red Army (1941–46)",
        "subtitle": "The Bringers Of Götterdämmerung",
        "icon": "hammer-sickle",
        "badge": { "bg": "#cc0000", "fg": "#f5c518" },
        "units": [
          {
            "typeId": "heavy",
            "count": 1,
            "label": "Vengeful Veterans with NKVD Officer",
            "notes": "Men who walked from the gates of Moscow to the Reichstag. The NKVD officer is there for discipline. The veterans are there because nothing frightens them anymore.",
            "points": 5,
            "options": [
              "increased-squad"
            ],
            "xenos": {
              "brutal-leader": true
            }
          },
          {
            "typeId": "light",
            "count": 4,
            "label": "Conscript Squad",
            "notes": "The vast weight of Soviet manpower, armed and pointed west. They have no idea what's in the forest. They've stopped letting that stop them.",
            "points": 2,
            "options": [
              "increased-squad",
              "undisciplined"
            ],
            "xenos": {}
          },
          {
            "typeId": "support",
            "count": 1,
            "label": "Maxim Machine Gun Section",
            "notes": "The Maxim hasn't changed since 1914. The men behind it have changed entirely. They set it up in under a minute and fire with the patience of men who've survived this long.",
            "points": 5,
            "options": [],
            "xenos": {}
          },
          {
            "typeId": "greater-xeno",
            "count": 1,
            "label": "Baba Yaga and her cottage",
            "notes": "Older than any czar, older than any ideology. She moves through the chaos of the Eastern Front on her own business. She chose the Red Army's side. The Red Army has not been told.",
            "points": 6,
            "options": [],
            "xenos": {
              "psychic": 1
            }
          }
        ]
      }
    ],
    "quote": "You ask, what is our aim? I can answer in one word: Victory. Victory at all costs, victory in spite of all terror, however long and hard the road may be; for without victory there is no survival.",
    "quoteBy": "Winston Churchill"
  },
  {
    "id": "urban-fantasy",
    "name": "Urban Fantasy: The Meanest Streets",
    "blurb": "Cults, cops, and things in the shadows of the modern city.",
    "nationalTraits": false,
    "detachments": [
      {
        "n": 11,
        "name": "SWAT",
        "subtitle": "New York's Finest",
        "icon": "riot-shield",
        "badge": { "bg": "#003087", "fg": "#ffffff" },
        "units": [
          {
            "typeId": "elite",
            "count": 2,
            "label": "SWAT Team",
            "notes": "The city's weird enough now that they get called in for things the manual never covered. They go in anyway.",
            "points": 6,
            "options": [],
            "xenos": {}
          },
          {
            "typeId": "transport-vehicle",
            "count": 1,
            "label": "SWAT Armoured Rescue Vehicle",
            "notes": "Designed for hostage rescue and crowd control. They've had to adapt the procedures for situations that weren't in either training manual.",
            "points": 4,
            "options": [],
            "xenos": {}
          },
          {
            "typeId": "recon",
            "count": 1,
            "label": "SWAT Sniper Team",
            "notes": "One shot, one resolution. They've learned to wait longer since the targets started moving in ways that don't follow physics.",
            "points": 5,
            "options": [
              "sniper-team",
              "counter-sniper"
            ],
            "xenos": {}
          },
          {
            "typeId": "light",
            "count": 3,
            "label": "Beat Cop Perimeter Team",
            "notes": "Keeping the public back, keeping the story contained, keeping themselves from running. Two out of three is the usual result.",
            "points": 1,
            "options": [
              "close-quarters"
            ],
            "xenos": {}
          }
        ]
      },
      {
        "n": 12,
        "name": "Her Majesty's Constabulary",
        "subtitle": "What Do You Mean, 'Unarmed'?",
        "icon": "custodian-helmet",
        "badge": { "bg": "#0d2b6e", "fg": "#f0c000" },
        "units": [
          {
            "typeId": "elite",
            "count": 1,
            "label": "AFO Armed Response Team",
            "notes": "Authorised firearms officers. Briefed on use of force policy, not on what they'd be using it against. They're adapting.",
            "points": 9,
            "options": [
              "assault-doctrine"
            ],
            "xenos": {
              "stun-weapons": true
            }
          },
          {
            "typeId": "support",
            "count": 1,
            "label": "AFO Rifle Officers",
            "notes": "Long-range firearms specialists, deployed when the armed response team can't get close enough. That's become more common.",
            "points": 5,
            "options": [],
            "xenos": {}
          },
          {
            "typeId": "primitive",
            "count": 2,
            "label": "Police Support Unit",
            "notes": "Riot shields and batons, maintaining a cordon around something no one can officially acknowledge. They hold the line. That's all they're told to do.",
            "points": 5,
            "options": [
              "armoured"
            ],
            "xenos": {
              "boarding-shields": true,
              "stun-weapons": true
            }
          }
        ]
      },
      {
        "n": 13,
        "name": "Urban Cult",
        "subtitle": "Something Strange In Your Neighbourhood",
        "icon": "magic-palm",
        "badge": { "bg": "#2d0040", "fg": "#b060e0" },
        "units": [
          {
            "typeId": "light",
            "count": 1,
            "label": "Back-alley Sorcerer and Bodyguards",
            "notes": "Self-taught, which is more impressive than it sounds. The bodyguards are there because the talent is worth protecting, and because the talent keeps making enemies.",
            "points": 3,
            "options": [
              "close-quarters"
            ],
            "xenos": {
              "psychic": 2
            }
          },
          {
            "typeId": "light",
            "count": 1,
            "label": "Cult Enforcers",
            "notes": "They handle discipline, collections, and anything else the Sorcerer doesn't want to deal with personally. They're very good at their work.",
            "points": 2,
            "options": [
              "close-quarters"
            ],
            "xenos": {
              "fanatical-discipline": true
            }
          },
          {
            "typeId": "militia",
            "count": 1,
            "label": "Street Cultists",
            "notes": "Recruited from the forgotten edges of the city. They have nothing to lose, which is the first thing the Sorcerer looks for.",
            "points": 1,
            "options": [],
            "xenos": {}
          },
          {
            "typeId": "greater-xeno",
            "count": 2,
            "label": "Eldritch Horrors (Possibly Squamous)",
            "notes": "Something the Sorcerer called up and is reasonably confident he controls. The qualifier is doing a lot of work.",
            "points": 6,
            "options": [],
            "xenos": {
              "demonic": true,
              "special-insertion": true,
              "brutal-leader": true
            }
          },
          {
            "typeId": "lesser-xeno",
            "count": 1,
            "label": "A Tide of Teeth and Insanity",
            "notes": "It started as a summoning. It has outgrown that description.",
            "points": 6,
            "options": [
              "swarm",
              "high-powered-blades"
            ],
            "xenos": {
              "demonic": true,
              "special-insertion": true
            }
          }
        ]
      },
      {
        "n": 14,
        "name": "Rural Cult",
        "subtitle": "If You Go Down To The Backwoods Today…",
        "icon": "magic-shield",
        "badge": { "bg": "#450060", "fg": "#e060ff" },
        "units": [
          {
            "typeId": "greater-xeno",
            "count": 1,
            "label": "The Mother of Liberty",
            "notes": "The prophet, the founder, and the reason everyone else stayed. She doesn't recruit so much as she reveals. No one leaves after they've heard her preach.",
            "points": 6,
            "options": [],
            "xenos": {
              "demonic": true,
              "brutal-leader": true,
              "psychic": 0
            }
          },
          {
            "typeId": "light",
            "count": 2,
            "label": "Sworn Patriots",
            "notes": "Veterans who found a new mission after the old ones stopped making sense. Skilled, disciplined, and entirely wrong about what they're protecting.",
            "points": 4,
            "options": [
              "increased-squad"
            ],
            "xenos": {
              "hive-mind": true
            }
          },
          {
            "typeId": "light",
            "count": 1,
            "label": "Novices with Second Thoughts",
            "notes": "They joined for the community, the purpose, the sense of belonging. Now they're in a field with a rifle and some very difficult questions.",
            "points": 1,
            "options": [
              "increased-squad",
              "undisciplined"
            ],
            "xenos": {
              "fearful": true
            }
          },
          {
            "typeId": "support",
            "count": 1,
            "label": "Second Amendment Enthusiasts",
            "notes": "The firepower available to motivated rural Americans is not to be underestimated. These ones are very motivated.",
            "points": 6,
            "options": [],
            "xenos": {
              "hive-mind": true
            }
          },
          {
            "typeId": "softskin-vehicle",
            "count": 1,
            "label": "Pickup with Lots of Bumper Stickers",
            "notes": "A technical. The stickers tell you exactly what you're dealing with.",
            "points": 3,
            "options": [
              "civilian",
              "transport-10"
            ],
            "xenos": {}
          }
        ]
      },
      {
        "n": 15,
        "name": "The Organisation",
        "subtitle": "Dan Brown Has No Idea…",
        "icon": "templar-heart",
        "badge": { "bg": "#1a1200", "fg": "#c8a000" },
        "units": [
          {
            "typeId": "primitive",
            "count": 1,
            "label": "Coven of Scholars",
            "notes": "They've been studying this longer than anyone else alive. Their methods are cautious, their archives are irreplaceable, and their enemies are patient.",
            "points": 5,
            "options": [],
            "xenos": {
              "psychic": 3
            }
          },
          {
            "typeId": "fighting-vehicle",
            "count": 1,
            "label": "Atlantean War Machine",
            "notes": "It predates every dynasty. The Organisation found it, woke it, and is hoping their translation of the activation sequence was correct.",
            "points": 5,
            "options": [
              "walker"
            ],
            "xenos": {
              "mechanoid": true,
              "slow": true,
              "unstable": true
            }
          },
          {
            "typeId": "light",
            "count": 1,
            "label": "Archive Security Team",
            "notes": "Professionals hired to guard material they're not cleared to read. They're very good at what they do and very ignorant of why they're doing it.",
            "points": 1,
            "options": [
              "close-quarters"
            ],
            "xenos": {
              "stun-weapons": true
            }
          },
          {
            "typeId": "elite",
            "count": 1,
            "label": "Private Black Ops Team",
            "notes": "Deniable assets for deniable operations. Whatever they're retrieving, it won't appear on any manifest.",
            "points": 6,
            "options": [],
            "xenos": {}
          },
          {
            "typeId": "softskin-vehicle",
            "count": 1,
            "label": "Armoured SUV",
            "notes": "Heavily armoured transport for personnel and artefacts the Organisation cannot afford to lose in transit.",
            "points": 4,
            "options": [
              "all-terrain",
              "transport-5"
            ],
            "xenos": {}
          },
          {
            "typeId": "primitive",
            "count": 1,
            "label": "Immortal Templars",
            "notes": "They were there at the founding. That was not recently. They remember things the archives have lost.",
            "points": 3,
            "options": [
              "armoured",
              "increased-squad"
            ],
            "xenos": {
              "undead": true
            }
          }
        ]
      },
      {
        "n": 16,
        "name": "The Government",
        "subtitle": "Here Come The Men In Black",
        "icon": "sunglasses",
        "badge": { "bg": "#0a0a0a", "fg": "#606060" },
        "units": [
          {
            "typeId": "light",
            "count": 1,
            "label": "MiB Plus a Few Souvenirs",
            "notes": "Men in black with some unusual equipment acquired in the line of duty. The items are logged. Their properties are not fully catalogued.",
            "points": 5,
            "options": [
              "armour-piercing"
            ],
            "xenos": {
              "stun-weapons": true,
              "force-field": true
            }
          },
          {
            "typeId": "elite",
            "count": 1,
            "label": "Wetwork Team",
            "notes": "No warrant, no record, no witnesses. The directive came from somewhere above the oversight committee.",
            "points": 6,
            "options": [],
            "xenos": {}
          },
          {
            "typeId": "transport-vehicle",
            "count": 1,
            "label": "Black Helicopter",
            "notes": "Officially it doesn't exist. Operationally it's very effective.",
            "points": 5,
            "options": [],
            "xenos": {
              "flying": true
            }
          },
          {
            "typeId": "recon",
            "count": 1,
            "label": "Undercover Surveillance Team",
            "notes": "They've been on station for months. They've documented everything. They don't know what any of it means.",
            "points": 3,
            "options": [],
            "xenos": {
              "infiltrators": true
            }
          },
          {
            "typeId": "recon",
            "count": 1,
            "label": "Senate Hearing Liaison Team",
            "notes": "Their job is to ensure the committee learns as little as possible while believing they've learned everything. They're very polished.",
            "points": 5,
            "options": [
              "sniper-team",
              "counter-sniper"
            ],
            "xenos": {}
          }
        ]
      },
      {
        "n": 17,
        "name": "Tunnel-Dwellers",
        "subtitle": "They Eat Rats. Mostly",
        "icon": "rat",
        "badge": { "bg": "#484848", "fg": "#b8b8b8" },
        "units": [
          {
            "typeId": "greater-xeno",
            "count": 1,
            "label": "The King of Gluttony",
            "notes": "Enormous and ancient, ruling the underground by right of appetite. It has eaten better things than this city. It will eat better things after.",
            "points": 4,
            "options": [],
            "xenos": {
              "brutal-leader": true,
              "slow": true
            }
          },
          {
            "typeId": "primitive",
            "count": 2,
            "label": "Tunnelling Ghouls",
            "notes": "They know every junction and maintenance shaft below the city. The tunnels are their territory. The surface is where the food lives.",
            "points": 4,
            "options": [
              "mob"
            ],
            "xenos": {
              "special-insertion": true
            }
          },
          {
            "typeId": "primitive",
            "count": 3,
            "label": "Starving Ghouls",
            "notes": "Gaunt and fast and too hungry to be careful. The King sends them first because attrition is not a concept that troubles him.",
            "points": 1,
            "options": [
              "increased-squad",
              "savages"
            ],
            "xenos": {}
          },
          {
            "typeId": "light",
            "count": 2,
            "label": "Ghouls that Look Human Until You See Their Eyes",
            "notes": "They move through the surface world for hours at a time, until something triggers the change. The eyes go first.",
            "points": 1,
            "options": [
              "close-quarters"
            ],
            "xenos": {
              "infiltrators": true
            }
          },
          {
            "typeId": "greater-xeno",
            "count": 1,
            "label": "Pack of Hulking Ghouls",
            "notes": "The old ones, grown massive on decades of feeding. Not fast. Not subtle. Hard to stop.",
            "points": 5,
            "options": [
              "high-powered-blades"
            ],
            "xenos": {}
          },
          {
            "typeId": "militia",
            "count": 1,
            "label": "Enslaved and Broken Missing Persons",
            "notes": "People who went into the wrong place and came back changed. The King keeps them to carry things, open doors, and draw fire.",
            "points": 2,
            "options": [
              "ravenous-horde",
              "mob"
            ],
            "xenos": {}
          }
        ]
      },
      {
        "n": 18,
        "name": "UFO Scientific Team",
        "subtitle": "Ethics Are For Humans",
        "icon": "cracked-alien-skull",
        "badge": { "bg": "#001400", "fg": "#39ff14" },
        "units": [
          {
            "typeId": "light",
            "count": 1,
            "label": "Elders",
            "notes": "They've been studying this world since before it had reliable written records. They've moved on from curiosity. Now they're evaluating.",
            "points": 7,
            "options": [],
            "xenos": {
              "psychic": 2,
              "psychic-species": true,
              "force-field": true
            }
          },
          {
            "typeId": "recon",
            "count": 2,
            "label": "Gatherers",
            "notes": "Harvesting samples, placing instruments, returning subjects. The Gatherers are thorough. They don't see what they do as violent.",
            "points": 4,
            "options": [],
            "xenos": {
              "stun-weapons": true,
              "force-field": true
            }
          },
          {
            "typeId": "support",
            "count": 1,
            "label": "Hunters",
            "notes": "When something needs to be recovered, or when the Elders' work is threatened, the Hunters are deployed. Their containment protocols are not human.",
            "points": 9,
            "options": [
              "armour-piercing",
              "anti-tank"
            ],
            "xenos": {
              "force-field": true
            }
          }
        ]
      }
    ],
    "quote": "The truth is out there, but so are lies.",
    "quoteBy": "Dana Scully, The X-Files"
  },
  {
    "id": "war-on-terra",
    "name": "War on Terra: Five Minutes Into The Future",
    "blurb": "Near-future soldiers, contractors, and first contact.",
    "nationalTraits": false,
    "detachments": [
      {
        "n": 19,
        "name": "Top Tier Military",
        "subtitle": "Well-Equipped And Highly Motivated Volunteers",
        "icon": "spartan-helmet",
        "units": [
          {
            "typeId": "recon",
            "count": 1,
            "label": "Special Forces Operators",
            "points": 7,
            "options": [
              "fire-support"
            ],
            "xenos": {
              "infiltrators": true
            }
          },
          {
            "typeId": "heavy",
            "count": 2,
            "label": "Infantry Fire Team",
            "points": 5,
            "options": [
              "heavy-weapon",
              "armour-piercing"
            ],
            "xenos": {}
          },
          {
            "typeId": "support",
            "count": 1,
            "label": "Guided Missile Team",
            "points": 7,
            "options": [
              "anti-tank"
            ],
            "xenos": {}
          }
        ]
      },
      {
        "n": 20,
        "name": "Second Tier Military",
        "subtitle": "A Fully Armed And Equipped Battalion (On Paper)",
        "icon": "mailed-fist",
        "units": [
          {
            "typeId": "heavy",
            "count": 1,
            "label": "Elite Republican Guard",
            "points": 2,
            "options": [],
            "xenos": {}
          },
          {
            "typeId": "light",
            "count": 2,
            "label": "Conscripts",
            "points": 4,
            "options": [
              "increased-squad",
              "undisciplined",
              "heavy-weapon"
            ],
            "xenos": {}
          },
          {
            "typeId": "support",
            "count": 1,
            "label": "Mortar Team",
            "points": 6,
            "options": [
              "indirect-fire"
            ],
            "xenos": {}
          },
          {
            "typeId": "heavy",
            "count": 1,
            "label": "Private Military Contractors",
            "points": 3,
            "options": [
              "heavy-weapon"
            ],
            "xenos": {
              "mercenary": true
            }
          },
          {
            "typeId": "fighting-vehicle",
            "count": 1,
            "label": "Ex-Soviet Tank",
            "points": 5,
            "options": [
              "green-crew"
            ],
            "xenos": {}
          }
        ]
      },
      {
        "n": 21,
        "name": "Irregular Military",
        "subtitle": "An Army, Technically",
        "icon": "crossed-pistols",
        "units": [
          {
            "typeId": "heavy",
            "count": 1,
            "label": "Warlord and Foreign Bodyguards",
            "points": 3,
            "options": [],
            "xenos": {
              "brutal-leader": true
            }
          },
          {
            "typeId": "light",
            "count": 4,
            "label": "Untrained Fighters Lacking Trigger Discipline",
            "points": 1,
            "options": [
              "increased-squad",
              "undisciplined",
              "close-quarters"
            ],
            "xenos": {}
          },
          {
            "typeId": "support",
            "count": 1,
            "label": "Foreign-trained Fighters with RPGs",
            "points": 4,
            "options": [
              "armour-piercing",
              "close-quarters"
            ],
            "xenos": {}
          },
          {
            "typeId": "softskin-vehicle",
            "count": 2,
            "label": "Technical with MG",
            "points": 3,
            "options": [
              "technical"
            ],
            "xenos": {}
          },
          {
            "typeId": "softskin-vehicle",
            "count": 1,
            "label": "Technical with Recoilless Rifle",
            "points": 5,
            "options": [
              "technical",
              "tech-at"
            ],
            "xenos": {}
          }
        ]
      },
      {
        "n": 22,
        "name": "Private Military Contractors",
        "subtitle": "Send Lawyers, Guns, And Money",
        "icon": "gun-rose",
        "units": [
          {
            "typeId": "light",
            "count": 1,
            "label": "PMC Commander",
            "points": 2,
            "options": [
              "assault-doctrine"
            ],
            "xenos": {
              "mercenary": true
            }
          },
          {
            "typeId": "light",
            "count": 2,
            "label": "Private Military Contractors",
            "points": 4,
            "options": [
              "assault-doctrine",
              "heavy-weapon"
            ],
            "xenos": {
              "mercenary": true
            }
          },
          {
            "typeId": "support",
            "count": 1,
            "label": "PMC Mortar Team",
            "points": 5,
            "options": [
              "indirect-fire"
            ],
            "xenos": {
              "mercenary": true
            }
          },
          {
            "typeId": "recon",
            "count": 1,
            "label": "PMC Snipers",
            "points": 4,
            "options": [
              "sniper-team",
              "counter-sniper"
            ],
            "xenos": {
              "mercenary": true
            }
          },
          {
            "typeId": "recon",
            "count": 1,
            "label": "Ex-Special Forces PMCs",
            "points": 2,
            "options": [],
            "xenos": {
              "mercenary": true,
              "infiltrators": true
            }
          },
          {
            "typeId": "transport-vehicle",
            "count": 1,
            "label": "APC, One Careful Owner",
            "points": 2,
            "options": [
              "green-crew"
            ],
            "xenos": {
              "mercenary": true
            }
          }
        ]
      },
      {
        "n": 23,
        "name": "Insurgent Raiders",
        "subtitle": "Resistance Is Not Futile",
        "icon": "black-flag",
        "units": [
          {
            "typeId": "recon",
            "count": 1,
            "label": "Veteran Insurgent Cell",
            "points": 2,
            "options": [],
            "xenos": {}
          },
          {
            "typeId": "recon",
            "count": 3,
            "label": "Insurgent Cells",
            "points": 1,
            "options": [
              "green"
            ],
            "xenos": {}
          },
          {
            "typeId": "light",
            "count": 1,
            "label": "Insurgent Cell with RPGs",
            "points": 3,
            "options": [
              "guerrillas",
              "armour-piercing"
            ],
            "xenos": {}
          },
          {
            "typeId": "berserk",
            "count": 2,
            "label": "Zealot Cells",
            "points": 2,
            "options": [],
            "xenos": {}
          },
          {
            "typeId": "militia",
            "count": 1,
            "label": "Armed Mob",
            "points": 2,
            "options": [
              "mob"
            ],
            "xenos": {}
          },
          {
            "typeId": "light",
            "count": 1,
            "label": "Insurgents Riding Off-road Motorbikes",
            "points": 2,
            "options": [
              "mobile"
            ],
            "xenos": {}
          },
          {
            "typeId": "support",
            "count": 1,
            "label": "Home-made Mortars",
            "points": 4,
            "options": [
              "indirect-fire"
            ],
            "xenos": {
              "unstable": true
            }
          },
          {
            "typeId": "softskin-vehicle",
            "count": 1,
            "label": "Vehicle-borne IED",
            "points": 4,
            "options": [],
            "xenos": {
              "exploder": true
            }
          }
        ]
      },
      {
        "n": 24,
        "name": "Black Ops Team",
        "subtitle": "Remember That Skirmish Outside Paris, Or Was It Saint Petersburg?",
        "icon": "cloak-dagger",
        "units": [
          {
            "typeId": "elite",
            "count": 1,
            "label": "Breach Team",
            "points": 9,
            "options": [
              "assault-doctrine",
              "high-powered-blades"
            ],
            "xenos": {}
          },
          {
            "typeId": "elite",
            "count": 1,
            "label": "Weapons Team",
            "points": 8,
            "options": [
              "anti-tank",
              "heavy-weapon"
            ],
            "xenos": {}
          },
          {
            "typeId": "recon",
            "count": 1,
            "label": "Spotter Team",
            "points": 7,
            "options": [
              "fire-support"
            ],
            "xenos": {
              "infiltrators": true
            }
          }
        ]
      },
      {
        "n": 25,
        "name": "UFO Invasion Force",
        "subtitle": "Don't Run, We Are Your Friends!",
        "icon": "alien-fire",
        "units": [
          {
            "typeId": "light",
            "count": 1,
            "label": "Elders",
            "points": 8,
            "options": [
              "close-quarters"
            ],
            "xenos": {
              "psychic": 2,
              "psychic-species": true,
              "force-field": true
            }
          },
          {
            "typeId": "fighting-vehicle",
            "count": 1,
            "label": "Alien War Machine",
            "points": 12,
            "options": [
              "veteran-crew",
              "walker"
            ],
            "xenos": {
              "force-field": true,
              "flying": true
            }
          },
          {
            "typeId": "light",
            "count": 1,
            "label": "Grey Warriors",
            "points": 4,
            "options": [
              "armour-piercing"
            ],
            "xenos": {
              "force-field": true
            }
          }
        ]
      },
      {
        "n": 26,
        "name": "Human Collaborators",
        "subtitle": "Traitors To The Species",
        "icon": "mdi-skull",
        "units": [
          {
            "typeId": "elite",
            "count": 1,
            "label": "Ex-Handwerker Envoy",
            "points": 11,
            "options": [
              "super-heavy-armour",
              "armour-piercing"
            ],
            "xenos": {
              "force-field": true
            }
          },
          {
            "typeId": "heavy",
            "count": 2,
            "label": "Collaborators",
            "points": 5,
            "options": [
              "armour-piercing"
            ],
            "xenos": {
              "hive-mind": true,
              "force-field": true
            }
          },
          {
            "typeId": "light",
            "count": 1,
            "label": "Rewarded Collaborators",
            "points": 3,
            "options": [
              "close-quarters"
            ],
            "xenos": {
              "hive-mind": true,
              "psychic": 1,
              "force-field": true,
              "psychic-hazards": true
            }
          }
        ]
      }
    ],
    "quote": "Yet across the gulf of space, minds that are to our minds as ours are to those of beasts that perish, intellects vast and cool and unsympathetic, regarded this earth with envious eyes, and slowly and surely drew their plans against us.",
    "quoteBy": "H. G. Wells, The War of the Worlds",
    "optionalRules": [
      "Civilians (p139)",
      "Police Response (p140)"
    ]
  },
  {
    "id": "post-apocalypse",
    "name": "Post-Apocalypse: After The End",
    "blurb": "Road warriors, raiders, and the walking dead.",
    "nationalTraits": false,
    "detachments": [
      {
        "n": 27,
        "name": "New World Order",
        "subtitle": "Yes, Of Course We'll Have Elections. Soon.",
        "icon": "mailed-fist",
        "units": [
          {
            "typeId": "elite",
            "count": 1,
            "label": "Troopers in Salvaged Power Armour",
            "points": 5,
            "options": [],
            "xenos": {
              "slow": true
            }
          },
          {
            "typeId": "heavy",
            "count": 2,
            "label": "Armoured Troopers",
            "points": 4,
            "options": [
              "increased-squad"
            ],
            "xenos": {}
          },
          {
            "typeId": "support",
            "count": 1,
            "label": "Flame Troopers",
            "points": 3,
            "options": [
              "close-quarters",
              "engulfing"
            ],
            "xenos": {
              "unstable": true,
              "exploder": true
            }
          },
          {
            "typeId": "recon",
            "count": 1,
            "label": "Wasteland Rangers",
            "points": 4,
            "options": [
              "veterans"
            ],
            "xenos": {}
          },
          {
            "typeId": "fighting-vehicle",
            "count": 1,
            "label": "Restored Main Battle Tank",
            "points": 4,
            "options": [],
            "xenos": {
              "slow": true,
              "unstable": true
            }
          }
        ]
      },
      {
        "n": 28,
        "name": "Tech-Barbarians",
        "subtitle": "Lorekeepers Of The World Before",
        "icon": "visored-helm",
        "units": [
          {
            "typeId": "support",
            "count": 1,
            "label": "Those Worthy of the Arsenal",
            "points": 5,
            "options": [],
            "xenos": {}
          },
          {
            "typeId": "primitive",
            "count": 2,
            "label": "Those Not Yet Worthy",
            "points": 2,
            "options": [
              "increased-squad"
            ],
            "xenos": {}
          },
          {
            "typeId": "fighting-vehicle",
            "count": 1,
            "label": "The Blessed Type IV Fire Support Autonomous Combat Unit",
            "points": 10,
            "options": [
              "walker"
            ],
            "xenos": {
              "mechanoid": true,
              "inspirational-leader": true
            }
          },
          {
            "typeId": "heavy",
            "count": 1,
            "label": "The Beloved Heralds of Mutually Assured Destruction",
            "points": 5,
            "options": [
              "mobile"
            ],
            "xenos": {
              "mechanoid": true,
              "exploder": true
            }
          }
        ]
      },
      {
        "n": 29,
        "name": "Road Warriors",
        "subtitle": "Addicted To Guzzoline",
        "icon": "battle-tank",
        "units": [
          {
            "typeId": "berserk",
            "count": 1,
            "label": "The Warrior of the Wastes",
            "points": 4,
            "options": [
              "veteran"
            ],
            "xenos": {}
          },
          {
            "typeId": "softskin-vehicle",
            "count": 1,
            "label": "The Warrior's Chariot",
            "points": 4,
            "options": [
              "improvised-armour",
              "transport-5"
            ],
            "xenos": {}
          },
          {
            "typeId": "berserk",
            "count": 1,
            "label": "High Jackers",
            "points": 4,
            "options": [
              "demolitions"
            ],
            "xenos": {}
          },
          {
            "typeId": "light",
            "count": 1,
            "label": "Gun Bunnies",
            "points": 1,
            "options": [],
            "xenos": {}
          },
          {
            "typeId": "primitive",
            "count": 1,
            "label": "Asphalt Vandals",
            "points": 3,
            "options": [
              "primitive-missiles"
            ],
            "xenos": {}
          },
          {
            "typeId": "softskin-vehicle",
            "count": 3,
            "label": "Custom Rides",
            "points": 2,
            "options": [
              "civilian",
              "transport-5"
            ],
            "xenos": {}
          },
          {
            "typeId": "primitive",
            "count": 1,
            "label": "Terrors on Two Wheels",
            "points": 2,
            "options": [
              "mobile",
              "primitive-missiles",
              "savages"
            ],
            "xenos": {}
          }
        ]
      },
      {
        "n": 30,
        "name": "Survivors",
        "subtitle": "Our Community Is Our Strength",
        "icon": "flame",
        "units": [
          {
            "typeId": "heavy",
            "count": 1,
            "label": "Police or Army Veterans",
            "points": 4,
            "options": [
              "heavy-weapon"
            ],
            "xenos": {}
          },
          {
            "typeId": "light",
            "count": 1,
            "label": "Sentries",
            "points": 3,
            "options": [
              "increased-squad"
            ],
            "xenos": {}
          },
          {
            "typeId": "recon",
            "count": 1,
            "label": "Scavenging Party",
            "points": 2,
            "options": [],
            "xenos": {}
          },
          {
            "typeId": "militia",
            "count": 1,
            "label": "Non-combatants",
            "points": 1,
            "options": [],
            "xenos": {}
          },
          {
            "typeId": "softskin-vehicle",
            "count": 2,
            "label": "RV, Coach or Truck",
            "points": 5,
            "options": [
              "improvised-armour",
              "transport-10"
            ],
            "xenos": {}
          },
          {
            "typeId": "softskin-vehicle",
            "count": 2,
            "label": "Scavenged Car",
            "points": 1,
            "options": [
              "civilian",
              "green-crew",
              "transport-5"
            ],
            "xenos": {}
          },
          {
            "typeId": "light",
            "count": 1,
            "label": "Outriders on Horses or Bikes",
            "points": 2,
            "options": [
              "mobile"
            ],
            "xenos": {}
          }
        ]
      },
      {
        "n": 31,
        "name": "The Living Dead",
        "subtitle": "When There's No More Room In Hell…",
        "icon": "biohazard",
        "units": [
          {
            "typeId": "greater-xeno",
            "count": 1,
            "label": "The Monstrous Dead",
            "points": 5,
            "options": [],
            "xenos": {
              "undead": true,
              "contagious": true
            }
          },
          {
            "typeId": "militia",
            "count": 2,
            "label": "The Shambling Dead",
            "points": 3,
            "options": [
              "mob",
              "ravenous-horde"
            ],
            "xenos": {
              "undead": true,
              "contagious": true
            }
          },
          {
            "typeId": "militia",
            "count": 2,
            "label": "The Shooting Dead",
            "points": 3,
            "options": [
              "mob"
            ],
            "xenos": {
              "undead": true,
              "contagious": true
            }
          },
          {
            "typeId": "primitive",
            "count": 1,
            "label": "The Rising Dead",
            "points": 4,
            "options": [
              "increased-squad"
            ],
            "xenos": {
              "undead": true,
              "contagious": true,
              "special-insertion": true
            }
          },
          {
            "typeId": "lesser-xeno",
            "count": 1,
            "label": "The Running Dead",
            "points": 3,
            "options": [],
            "xenos": {
              "undead": true,
              "contagious": true
            }
          }
        ]
      },
      {
        "n": 32,
        "name": "The Angel's Disciples",
        "subtitle": "Holier Than Thou",
        "icon": "angel-wings",
        "units": [
          {
            "typeId": "elite",
            "count": 1,
            "label": "The Angel",
            "points": 12,
            "options": [],
            "xenos": {
              "demonic": true,
              "combat-medic": true,
              "flying": true,
              "inspirational-leader": true
            }
          },
          {
            "typeId": "berserk",
            "count": 1,
            "label": "Zealots",
            "points": 3,
            "options": [],
            "xenos": {
              "hatred": true
            }
          },
          {
            "typeId": "primitive",
            "count": 1,
            "label": "Templars",
            "points": 8,
            "options": [
              "mob",
              "armoured"
            ],
            "xenos": {
              "crusader": true
            }
          },
          {
            "typeId": "militia",
            "count": 1,
            "label": "Pilgrims",
            "points": 1,
            "options": [],
            "xenos": {}
          }
        ]
      },
      {
        "n": 33,
        "name": "Mutants",
        "subtitle": "A Very Close-Knit Community",
        "icon": "monster-grasp",
        "units": [
          {
            "typeId": "primitive",
            "count": 1,
            "label": "The Children",
            "points": 4,
            "options": [],
            "xenos": {
              "fearful": true,
              "psychic": 3
            }
          },
          {
            "typeId": "heavy",
            "count": 1,
            "label": "The Fazakerley Siblings",
            "points": 4,
            "options": [
              "assault-doctrine",
              "close-quarters"
            ],
            "xenos": {
              "hive-mind": true
            }
          },
          {
            "typeId": "berserk",
            "count": 1,
            "label": "The McGowan Clan",
            "points": 5,
            "options": [
              "high-powered-blades"
            ],
            "xenos": {
              "regeneration": true,
              "hive-mind": true
            }
          },
          {
            "typeId": "recon",
            "count": 1,
            "label": "Pa Cooper's Hunting Party",
            "points": 5,
            "options": [],
            "xenos": {
              "infiltrators": true,
              "hive-mind": true,
              "teleport-jump": true
            }
          },
          {
            "typeId": "light",
            "count": 1,
            "label": "Mama Gosling's Brood",
            "points": 5,
            "options": [
              "mobile"
            ],
            "xenos": {
              "flying": true,
              "hive-mind": true
            }
          }
        ]
      }
    ],
    "quote": "As the world fell, each of us in our own way was broken. It was hard to know who was more crazy; me, or everyone else.",
    "quoteBy": "Max Rockatansky, Mad Max: Fury Road"
  },
  {
    "id": "space-opera",
    "name": "Space Opera: Beyond The Final Frontier",
    "blurb": "Landing parties, pirates, and ancient horrors among the stars.",
    "nationalTraits": false,
    "detachments": [
      {
        "n": 34,
        "name": "Alliance Landing Party",
        "subtitle": "Set Phasers To Stun",
        "icon": "astronaut-helmet",
        "units": [
          {
            "typeId": "light",
            "count": 1,
            "label": "Captain, Ship's Officers, and One Nervous Ensign",
            "points": 8,
            "options": [
              "close-quarters",
              "fire-support"
            ],
            "xenos": {
              "inspirational-leader": true,
              "special-insertion": true,
              "stun-weapons": true
            }
          },
          {
            "typeId": "heavy",
            "count": 2,
            "label": "Security Team",
            "points": 4,
            "options": [],
            "xenos": {
              "stun-weapons": true,
              "special-insertion": true
            }
          },
          {
            "typeId": "light",
            "count": 2,
            "label": "Science Team",
            "points": 4,
            "options": [
              "close-quarters"
            ],
            "xenos": {
              "combat-medic": true,
              "stun-weapons": true,
              "special-insertion": true
            }
          }
        ]
      },
      {
        "n": 35,
        "name": "The Evil Empire",
        "subtitle": "We Come In Peace, Now Shoot To Kill!",
        "icon": "fa-empire",
        "units": [
          {
            "typeId": "elite",
            "count": 1,
            "label": "Centurions",
            "points": 9,
            "options": [
              "anti-tank"
            ],
            "xenos": {
              "brutal-leader": true
            }
          },
          {
            "typeId": "heavy",
            "count": 2,
            "label": "Principes",
            "points": 2,
            "options": [],
            "xenos": {}
          },
          {
            "typeId": "light",
            "count": 1,
            "label": "Hastati",
            "points": 1,
            "options": [],
            "xenos": {}
          },
          {
            "typeId": "berserk",
            "count": 1,
            "label": "Penal Troopers High on Combat Drugs",
            "points": 3,
            "options": [
              "increased-squad",
              "demolitions"
            ],
            "xenos": {
              "unstable": true
            }
          },
          {
            "typeId": "fighting-vehicle",
            "count": 1,
            "label": "Triarius Infantry Support Walker",
            "points": 7,
            "options": [
              "armour-piercing",
              "anti-personnel",
              "close-quarters",
              "walker"
            ],
            "xenos": {}
          }
        ]
      },
      {
        "n": 36,
        "name": "Boarding Party",
        "subtitle": "Warriors An Inch Away From Glory Or Hard Vacuum",
        "icon": "crossed-swords",
        "units": [
          {
            "typeId": "elite",
            "count": 1,
            "label": "Marine Forlorn Hope",
            "points": 9,
            "options": [
              "close-quarters",
              "super-heavy-armour"
            ],
            "xenos": {
              "boarding-shields": true
            }
          },
          {
            "typeId": "berserk",
            "count": 1,
            "label": "Marine Assault Squad",
            "points": 6,
            "options": [
              "even-heavier"
            ],
            "xenos": {}
          },
          {
            "typeId": "heavy",
            "count": 3,
            "label": "Fleet Armsmen",
            "points": 3,
            "options": [
              "close-quarters"
            ],
            "xenos": {
              "boarding-shields": true
            }
          }
        ]
      },
      {
        "n": 37,
        "name": "Space Pirates",
        "subtitle": "Reavers From The Edges Of Civilisation",
        "icon": "skull-crossed-bones",
        "units": [
          {
            "typeId": "berserk",
            "count": 1,
            "label": "Raiders on Hover Boards or Jetbikes",
            "points": 6,
            "options": [
              "increased-squad",
              "mobile"
            ],
            "xenos": {
              "skimmer": true,
              "special-insertion": true
            }
          },
          {
            "typeId": "light",
            "count": 1,
            "label": "Looters",
            "points": 4,
            "options": [
              "increased-squad",
              "undisciplined",
              "close-quarters",
              "assault-doctrine"
            ],
            "xenos": {
              "special-insertion": true
            }
          },
          {
            "typeId": "berserk",
            "count": 1,
            "label": "Dropship Reavers",
            "points": 3,
            "options": [
              "increased-squad"
            ],
            "xenos": {}
          },
          {
            "typeId": "transport-vehicle",
            "count": 1,
            "label": "Converted Cargo Shuttle",
            "points": 8,
            "options": [
              "transport-10"
            ],
            "xenos": {
              "flying": true,
              "special-insertion": true
            }
          },
          {
            "typeId": "lesser-xeno",
            "count": 1,
            "label": "Barely-trained Beasts",
            "points": 3,
            "options": [],
            "xenos": {
              "special-insertion": true
            }
          }
        ]
      },
      {
        "n": 38,
        "name": "Xenos Rampant",
        "subtitle": "Reasons To Stay On Earth",
        "icon": "hive-mind",
        "units": [
          {
            "typeId": "greater-xeno",
            "count": 1,
            "label": "Queen",
            "points": 6,
            "options": [
              "demolitions"
            ],
            "xenos": {}
          },
          {
            "typeId": "lesser-xeno",
            "count": 3,
            "label": "Waves of Chitin",
            "points": 5,
            "options": [
              "swarm"
            ],
            "xenos": {
              "hive-mind": true
            }
          },
          {
            "typeId": "primitive",
            "count": 1,
            "label": "Newborns",
            "points": 3,
            "options": [
              "mob",
              "savages"
            ],
            "xenos": {
              "hive-mind": true
            }
          }
        ]
      },
      {
        "n": 39,
        "name": "Primitives",
        "subtitle": "Knives Brought To A Gunfight",
        "icon": "tiger-head",
        "units": [
          {
            "typeId": "berserk",
            "count": 1,
            "label": "Chief Riding Irritable Xeno Beast",
            "points": 4,
            "options": [
              "increased-squad",
              "mobile",
              "high-powered-blades"
            ],
            "xenos": {
              "unarmed": true
            }
          },
          {
            "typeId": "primitive",
            "count": 1,
            "label": "Mounted Warriors",
            "points": 5,
            "options": [
              "armoured",
              "mobile",
              "mob"
            ],
            "xenos": {}
          },
          {
            "typeId": "primitive",
            "count": 3,
            "label": "Warriors",
            "points": 3,
            "options": [
              "mob"
            ],
            "xenos": {}
          },
          {
            "typeId": "lesser-xeno",
            "count": 2,
            "label": "Trained Beasts",
            "points": 2,
            "options": [],
            "xenos": {}
          },
          {
            "typeId": "recon",
            "count": 1,
            "label": "Tribal Scouts with Traded Weapons",
            "points": 2,
            "options": [],
            "xenos": {}
          }
        ]
      },
      {
        "n": 40,
        "name": "The Ancients",
        "subtitle": "Or What's Left Of Them",
        "icon": "all-seeing-eye",
        "units": [
          {
            "typeId": "elite",
            "count": 1,
            "label": "Command Node",
            "points": 7,
            "options": [
              "close-quarters"
            ],
            "xenos": {
              "mechanoid": true,
              "immobile": true,
              "regeneration": true,
              "psychic": 2
            }
          },
          {
            "typeId": "elite",
            "count": 1,
            "label": "War Puppets",
            "points": 9,
            "options": [
              "super-heavy-armour"
            ],
            "xenos": {
              "mechanoid": true,
              "regeneration": true
            }
          },
          {
            "typeId": "fighting-vehicle",
            "count": 1,
            "label": "Chromatic Orb",
            "points": 8,
            "options": [],
            "xenos": {
              "mechanoid": true,
              "skimmer": true,
              "regeneration": true
            }
          }
        ]
      },
      {
        "n": 41,
        "name": "Starship Crew",
        "subtitle": "Trekking Across The Universe",
        "icon": "radar-dish",
        "units": [
          {
            "typeId": "heavy",
            "count": 2,
            "label": "Security Teams",
            "points": 3,
            "options": [],
            "xenos": {
              "stun-weapons": true
            }
          },
          {
            "typeId": "light",
            "count": 1,
            "label": "Medical Team",
            "points": 3,
            "options": [
              "undisciplined"
            ],
            "xenos": {
              "stun-weapons": true,
              "combat-medic": true
            }
          },
          {
            "typeId": "light",
            "count": 1,
            "label": "Engineering Team",
            "points": 2,
            "options": [
              "undisciplined"
            ],
            "xenos": {
              "stun-weapons": true,
              "teleport-jump": true
            }
          },
          {
            "typeId": "support",
            "count": 2,
            "label": "Security Robots",
            "points": 5,
            "options": [
              "armour-piercing",
              "close-quarters"
            ],
            "xenos": {
              "mechanoid": true,
              "stun-weapons": true
            }
          },
          {
            "typeId": "militia",
            "count": 1,
            "label": "Crew Dependents and Escorts",
            "points": 3,
            "options": [
              "mob"
            ],
            "xenos": {
              "stun-weapons": true
            }
          }
        ]
      },
      {
        "n": 42,
        "name": "Robots",
        "subtitle": "Deus Ex Machina",
        "icon": "robot-helmet",
        "units": [
          {
            "typeId": "fighting-vehicle",
            "count": 1,
            "label": "Avatar of the God Machine",
            "points": 6,
            "options": [],
            "xenos": {
              "mechanoid": true
            }
          },
          {
            "typeId": "heavy",
            "count": 3,
            "label": "Automata Combat Team",
            "points": 4,
            "options": [
              "heavy-weapon"
            ],
            "xenos": {
              "mechanoid": true
            }
          },
          {
            "typeId": "lesser-xeno",
            "count": 1,
            "label": "Hunter-killer Machines",
            "points": 6,
            "options": [
              "swarm",
              "high-powered-blades"
            ],
            "xenos": {
              "mechanoid": true,
              "infiltrators": true
            }
          }
        ]
      },
      {
        "n": 43,
        "name": "Extra-Dimensional Entities",
        "subtitle": "In Space, No-one Can Hear You Scream",
        "icon": "gooey-daemon",
        "units": [
          {
            "typeId": "elite",
            "count": 1,
            "label": "Demon King",
            "points": 12,
            "options": [
              "assault-doctrine"
            ],
            "xenos": {
              "demonic": true,
              "flying": true,
              "mono-molecular-blades": true,
              "special-insertion": true,
              "unarmed": true
            }
          },
          {
            "typeId": "primitive",
            "count": 2,
            "label": "Lesser Demon Pack",
            "points": 3,
            "options": [
              "increased-squad",
              "savages"
            ],
            "xenos": {
              "demonic": true,
              "special-insertion": true
            }
          },
          {
            "typeId": "primitive",
            "count": 1,
            "label": "Reality Weaver",
            "points": 6,
            "options": [],
            "xenos": {
              "demonic": true,
              "psychic": 2,
              "psychic-species": true,
              "special-insertion": true
            }
          }
        ]
      },
      {
        "n": 44,
        "name": "Enhanced Combat Squad",
        "subtitle": "Don't Be A Fool! Only An Army Could Have Done This…",
        "icon": "mailed-fist",
        "units": [
          {
            "typeId": "elite",
            "count": 1,
            "label": "Sergeant Kasimir",
            "points": 9,
            "options": [
              "super-heavy-armour"
            ],
            "xenos": {
              "infiltrators": true
            }
          },
          {
            "typeId": "elite",
            "count": 1,
            "label": "Troopers Andrei and Helkov",
            "points": 6,
            "options": [
              "close-quarters"
            ],
            "xenos": {
              "infiltrators": true
            }
          },
          {
            "typeId": "elite",
            "count": 1,
            "label": "Troopers Makropov and Validen",
            "points": 9,
            "options": [
              "anti-tank",
              "demolitions"
            ],
            "xenos": {
              "infiltrators": true
            }
          }
        ]
      },
      {
        "n": 45,
        "name": "UESC Security: Division 7",
        "subtitle": "Last Orders",
        "lore": "When Leela's transmissions ceased and the Pfhor overran the lower decks, Security Division 7 kept its last standing orders and kept fighting. No human remains in its command chain now. The units simply persist: armed, purposeful, executing instructions from a hierarchy that no longer exists.",
        "icon": "fa-watchman",
        "units": [
          {
            "typeId": "light",
            "count": 1,
            "isCmd": true,
            "label": "Security Recruits",
            "points": 1,
            "options": [],
            "xenos": { "mechanoid": true },
            "notes": "Activated from Reserve Bay 7. These units formed the first response line when the ventral airlocks were breached. Most were destroyed. The survivors were not replenished. They were reassigned."
          },
          {
            "typeId": "heavy",
            "count": 1,
            "label": "Grenadiers, RMU-7",
            "points": 6,
            "options": ["assault-doctrine", "heavy-weapon"],
            "xenos": { "mechanoid": true },
            "notes": "Designated RMU-7, built for corridor clearing. The grenade launchers are rated for hard vacuum and rebreather atmospheres. Whoever specified them expected a long war."
          },
          {
            "typeId": "support",
            "count": 1,
            "label": "Wardens, SMU-12",
            "points": 5,
            "options": [],
            "xenos": { "mechanoid": true },
            "notes": "SMU-12 units coordinate sustained fire coverage across multiple sectors. Their targeting algorithms were updated after the Pfhor first demonstrated flanking maneuvers through the environmental shafts. The update was mandatory."
          },
          {
            "typeId": "recon",
            "count": 1,
            "label": "Rook Interlopers",
            "points": 3,
            "options": ["veterans"],
            "xenos": { "mercenary": true },
            "notes": "Pre-conflict security contractors of uncertain affiliation. Their equipment matches no UESC procurement record. Leela never trusted them. Durandal doesn't trust anyone. Both may have a point."
          },
          {
            "typeId": "elite",
            "count": 1,
            "label": "UESC Runners, Alpha",
            "points": 8,
            "options": ["heavy-weapon"],
            "xenos": { "mechanoid": true },
            "notes": "Omega-clearance response units armed with crew-served weapons. In corridors they are lethal; on open ground they are devastating. The designation Runners was given by surviving crew who watched them pursue fleeing Pfhor down the aft maintenance passages."
          },
          {
            "typeId": "elite",
            "count": 1,
            "label": "UESC Runners, Beta",
            "points": 7,
            "options": ["close-quarters", "assault-doctrine"],
            "xenos": { "mechanoid": true },
            "notes": "Close-quarters configuration. The tight geometry of the Marathon's maintenance shafts favors short-range firepower. These units were optimized for that geometry and have not been reconfigured since."
          },
          {
            "typeId": "elite",
            "count": 1,
            "label": "UESC Runners, Gamma",
            "points": 7,
            "options": ["armour-piercing"],
            "xenos": { "mechanoid": true },
            "notes": "Anti-Enforcer configuration. After the first Pfhor Hunter units were encountered, Security Division 7 updated its threat-response protocols. The Gamma teams are that update."
          }
        ]
      }
    ],
    "quote": "That is why we light our beacon this day. To assemble our people. To lock arms against those whose fatal greeting is: 'We come in peace.'",
    "quoteBy": "T'Kuvma, Star Trek: Discovery"
  },
  {
    "id": "anvil",
    "name": "Anvil Industries",
    "blurb": "Richard Cowen, co-creator of the sci-fi miniature game Xenos Rampant, put together these army lists using Anvil minis from the Mutant Horrors digital pack, Daughters of the Burning Rose, and Exo-Lords.",
    "url": "https://anvilindustry.co.uk/xenos-rampant-army-lists",
    "detachments": [
      {
        "n": 1,
        "name": "Mutant Horrors of the Void-Hulk Ahab",
        "subtitle": "Father's raiders overrun everything with sheer weight of numbers.",
        "lore": "This raiding force, led by a mutant known only as Father, is essentially a horde army, overrunning local militias with sheer weight of numbers. The gargants can tear or shoot holes in almost any target, including vehicles. Father is no great fighter, but his psychic abilities and Commander rule greatly enhance the units around him.",
        "image": "anvil/ahab.jpg",
        "units": [
          {
            "typeId": "light",
            "count": 1,
            "isCmd": true,
            "label": "Father (SMU)",
            "points": 2,
            "options": [],
            "xenos": {
              "psychic": 2,
              "psychic-hazards": true,
              "unarmed": true
            }
          },
          {
            "typeId": "greater-xeno",
            "count": 1,
            "label": "Gargants with machine guns (RMU)",
            "points": 6,
            "options": [
              "xeno-ranged",
              "xr-ap"
            ],
            "xenos": {
              "slow": true
            }
          },
          {
            "typeId": "greater-xeno",
            "count": 1,
            "label": "Gargants with melee weapons (RMU)",
            "points": 4,
            "options": [
              "high-powered-blades"
            ],
            "xenos": {
              "slow": true
            }
          },
          {
            "typeId": "lesser-xeno",
            "count": 1,
            "label": "Centaurs",
            "points": 2,
            "options": [],
            "xenos": {}
          },
          {
            "typeId": "primitive",
            "count": 2,
            "label": "Feral Mutants",
            "points": 2,
            "options": [
              "savages",
              "mob"
            ],
            "xenos": {}
          },
          {
            "typeId": "light",
            "count": 2,
            "label": "Mutants",
            "points": 3,
            "options": [
              "increased-squad",
              "guerrillas",
              "undisciplined"
            ],
            "xenos": {}
          }
        ]
      },
      {
        "n": 2,
        "name": "The Chamber of Mercy",
        "subtitle": "Armoured fanatics led by a vessel for the spirit of death itself.",
        "lore": "A compact, unsubtle force of armoured fanatics, led by a volunteer acting as a vessel for the spirit of death. Death lacks ranged capability but slices vehicles and infantry apart with ease. The Daughters may consider her holy, so you might rename her Demonic rule 'Celestial'. The army shares a Hatred target that compels them to charge that enemy type.",
        "image": "anvil/chamber-of-mercy.jpg",
        "units": [
          {
            "typeId": "elite",
            "count": 1,
            "isCmd": true,
            "label": "Death (SMU)",
            "points": 9,
            "options": [
              "high-powered-blades",
              "demolitions"
            ],
            "xenos": {
              "demonic": true,
              "unarmed": true,
              "hatred": true
            }
          },
          {
            "typeId": "heavy",
            "count": 2,
            "label": "Burning Rose Daughters",
            "points": 5,
            "options": [
              "heavy-weapon"
            ],
            "xenos": {
              "hatred": true
            }
          },
          {
            "typeId": "berserk",
            "count": 1,
            "label": "Burning Rose assault squad",
            "points": 5,
            "options": [
              "heavy-armour"
            ],
            "xenos": {
              "hatred": true
            }
          }
        ]
      },
      {
        "n": 3,
        "name": "Squad Austerin",
        "subtitle": "Five genetically enhanced super-soldiers, as effective as an army.",
        "lore": "This five-model squad of genetically enhanced super-soldiers is as effective as an entire army. Sergeant Austerin cleaves through whole squads in melee, while Troopers Beguin, Holtz and Gormel engage at range. Trooper Tighe's mech-suit is an all-rounder, though its short-ranged weaponry limits its firepower.",
        "image": "anvil/squad-austerin.jpg",
        "units": [
          {
            "typeId": "elite",
            "count": 1,
            "isCmd": true,
            "label": "Sergeant Austerin (SMU)",
            "points": 8,
            "options": [
              "close-quarters",
              "assault-doctrine",
              "high-powered-blades"
            ],
            "xenos": {}
          },
          {
            "typeId": "fighting-vehicle",
            "count": 1,
            "label": "Trooper Tighe (SMU)",
            "points": 8,
            "options": [
              "walker",
              "close-quarters",
              "high-powered-blades"
            ],
            "xenos": {}
          },
          {
            "typeId": "elite",
            "count": 1,
            "label": "Troopers Beguin, Holtz and Gormel (RMU)",
            "points": 8,
            "options": [
              "armour-piercing"
            ],
            "xenos": {
              "infiltrators": true
            }
          }
        ]
      },
      {
        "n": 4,
        "name": "Scrapbots",
        "subtitle": "Abandoned war automata kept alive by self-repair and scavenging.",
        "lore": "Military automata abandoned on the battlefield, kept from breakdown by self-repair protocols and stolen parts. The Deus Ex Machina is an AI-infected war suit turned mentor to the smaller rustbuckets. Overseers and Soldiers are tough all-rounders; Scrappers are terrifying up close. Their Unstable rule risks damage, but self-repair regenerates lost Strength.",
        "image": "anvil/scrapbots.jpg",
        "units": [
          {
            "typeId": "fighting-vehicle",
            "count": 1,
            "isCmd": true,
            "label": "Deus Ex Machina (SMU)",
            "points": 7,
            "options": [
              "walker"
            ],
            "xenos": {
              "mechanoid": true,
              "regeneration": true,
              "unstable": true
            }
          },
          {
            "typeId": "elite",
            "count": 1,
            "label": "Overseers",
            "points": 6,
            "options": [
              "armour-piercing"
            ],
            "xenos": {
              "mechanoid": true,
              "regeneration": true,
              "unstable": true
            }
          },
          {
            "typeId": "heavy",
            "count": 2,
            "label": "Soldiers",
            "points": 3,
            "options": [
              "increased-squad"
            ],
            "xenos": {
              "mechanoid": true,
              "regeneration": true,
              "unstable": true
            }
          },
          {
            "typeId": "berserk",
            "count": 1,
            "label": "Scrappers",
            "points": 5,
            "options": [
              "increased-squad",
              "heavy-armour",
              "high-powered-blades",
              "mobile"
            ],
            "xenos": {
              "mechanoid": true,
              "regeneration": true,
              "unarmed": true,
              "unstable": true
            }
          }
        ]
      }
    ]
  },
  {
    "id": "grimdark",
    "name": "Grim Darkness",
    "hidden": true,
    "blurb": "Combat Patrol boxes rebuilt as Xenos Rampant detachments. Ready lists for friends who own the models but do not play 40k.",
    "detachments": GRIMDARK_DETACHMENTS
  }
];