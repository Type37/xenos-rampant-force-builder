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
        "lore": "A generic force for any warring party in the early Great War, presented here as German conscripts — millions who marched east and west in 1914. Can represent second-line reserve units or less technologically advanced nations throughout the war and beyond.",
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
        "lore": "Years of fighting replaced cavalry and massed conscripts with trained trench raiders, light machine guns, and unreliable tanks. These veterans represent the kind of force common in the war's final years — or the Weimar-era freikorps who suppressed the rebellions, mutinies, and cult activity that flourished in the troubled peace that followed.",
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
        "lore": "Occult paramilitary groups flourished in Weimar Germany, whether Werwolf itself or the independent cults it sought to crush. This force has bolstered its limited numbers with creatures drawn from Central European mythology and Bronze Age bodies exhumed from peat bogs.",
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
        "lore": "The Strange Foundation, a renowned philanthropic organisation and, less publicly, a school for magicians, has been funding occult research since the 18th century. Their expeditions repeatedly brought them into conflict with the Schulers, though they occasionally received unexpected assistance from other secret societies opposed to Werwolf's schemes.",
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
        "lore": "The Handwerkers rarely took to the battlefield themselves, preferring to equip Waffen-SS units with their devices and gather research data from whoever survived. This detachment features a Handwerker who has decided to observe his technology in action firsthand — a decision he will probably regret.",
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
        "lore": "The Schulers were kept away from most battlefields — their creations instilled disgust and fear even in regular Wehrmacht troops. As the Soviets swept through Germany, they were finally unleashed. Most chose escape over a last stand. Some did not.",
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
        "lore": "The Freischurlers were Werwolf soldiers committed to neither the Handwerker nor Schuler ideology — mostly fanatical Nazis who fought on after Germany's surrender, only to discover the true depth of the organisation's depravity. Some deserted. The most committed fought on.",
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
        "lore": "Understanding that their next great enemy would be the Soviet Union, the OSS began smuggling rocket scientists, atomic physicists, and occult researchers out of the ruins of Nazi Germany ahead of the advancing Red Army. Paperclip teams were often accompanied by the army wherever Werwolf or Soviet resistance was anticipated.",
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
        "lore": "The SRG played a key part in the war against Werwolf, combining magic and intelligence to track down and eliminate their agents. Dissolved in 1946 by Clement Attlee, who feared that magically trained veterans from the colonies might be drawn into their homelands' independence movements — a concern history proved correct.",
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
        "lore": "Any good Soviet citizen knew the natural order of things is rational and communist — superstition has no place in the USSR. Red Army units confronting Werwolf's paranormal assets therefore reported their encounters in careful euphemism, requiring particular tact when one of the pre-Soviet creatures of Eastern European myth arrived to aid the Motherland.",
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
        "lore": "Society's first line of defence against aliens, monsters, and humanity's darkest deeds is usually law enforcement. When reports are little more than 'homeless people biting others' or 'strange lights in the woods', the first cop on scene is often outmatched — but the police always come back in greater numbers and with greater firepower.",
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
        "lore": "Similar to the SWAT list, but geared towards nations where police are not routinely armed. The emphasis is on effecting arrests with batons and tasers, though the highly trained AFOs are perfectly capable of dealing with anything natural or unnatural — as long as it isn't immune to bullets.",
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
        "lore": "Otherworldly entities often surround themselves with human devotees when on Earth, particularly when their powers make them appear godlike. This cult is structured like a street gang, and many of its day-to-day activities — including where it finds its funding — probably fit that mould.",
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
        "lore": "A compound-dwelling, open-carrying, paramilitary militia with political convictions that run deep. Whether they always trafficked with extra-dimensional entities or dug something up while building on an abandoned airbase, their original beliefs have been superseded: they now serve their demonic patron.",
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
        "lore": "Secretive groups investigating the paranormal range from centuries-old orders like the Templars and Illuminati to the private obsessions of corporate billionaires. Their conflicting objectives mean they come to blows when they encounter each other — and the contents of their museums and libraries make those encounters terrifying.",
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
        "lore": "The authorities know exactly what's out there. To avoid panicking the public, government agencies specialising in the paranormal tend to cover up first, deal with problems second — usually by destroying all evidence. In the case of this detachment, the threat is significant enough to call in serious firepower.",
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
        "lore": "Creatures inhabit the sewers, caverns, subway tunnels, and catacombs beneath the city — whether demons, inhabitants of the Hollow Earth, or degenerate humans turned cannibal. They are secretive ambush predators and scavengers who creep out after dark to prey on the lost and isolated.",
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
        "lore": "Strange lights mark the arrival of creatures from other worlds. They come to study, leaving mutilated cattle and flattened crops in their wake. This crew is composed of physically unimpressive aliens whose strength lies in psychic potential and unfathomable technology — an actual invasion force can be found in the War on Terra chapter.",
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
        "lore": "When the alien invasion struck, decades of dispersed command planning meant that even isolated overseas bases were able to fight back. This detachment could represent any professional military force in the genre — UNIT, XCOM, or any multinational rapid-response organisation.",
        "icon": "spartan-helmet",
        "units": [
          {
            "typeId": "recon",
            "count": 1,
            "label": "Special Forces Operators",
            "notes": "The best-trained soldiers money can produce, with kit that cost more than a small country's defence budget. They know it. You can tell.",
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
            "notes": "Professionals who've been to every war of the last decade. They move well, shoot first, and don't ask questions about the objective.",
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
            "notes": "The last line of argument when the target is armoured, elevated, or otherwise unwilling to cooperate. They have never missed a vehicle they wanted to stop.",
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
        "lore": "Being initially overlooked by the invasion gave the less-developed world breathing space to mobilise its large, if poorly trained, armed forces. Logistics and equipment quality are always an issue in such forces, and official corruption — even in the face of alien invasion — may hamper operations still further.",
        "icon": "mailed-fist",
        "units": [
          {
            "typeId": "heavy",
            "count": 1,
            "label": "Elite Republican Guard",
            "notes": "Elite is doing some work in that title. They're the best of what's available. That's a lower bar than it sounds.",
            "points": 2,
            "options": [],
            "xenos": {}
          },
          {
            "typeId": "light",
            "count": 2,
            "label": "Conscripts",
            "notes": "Pressed into service by a government that ran out of volunteers. Numerous. Enthusiasm is another matter.",
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
            "notes": "Hired for the gap between what the army can officially do and what this particular operation requires. They ask no questions that aren't about the rate.",
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
            "notes": "Old hardware maintained by people who've forgotten how some of the systems work. It still fires. It still moves. For now.",
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
        "lore": "Many a supposedly unbeatable army has learned that poorly paid troops with old rifles and battered pickups can punch well above their weight. Unfortunately, warlords often care more for their own interests than loftier goals — some have even sold their allegiance to the aliens in return for weapons or power over their rivals.",
        "icon": "crossed-pistols",
        "units": [
          {
            "typeId": "heavy",
            "count": 1,
            "label": "Warlord and Foreign Bodyguards",
            "notes": "The Warlord holds territory through personality and the implied threat of the bodyguards. The bodyguards are held by their paycheck.",
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
            "notes": "They have weapons. The weapons work. Everything after that is in the hands of whatever god watches over bystanders.",
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
            "notes": "Somewhere along the way, someone taught them properly. The RPGs help. A little discipline goes a long way.",
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
            "notes": "A pickup truck with a machine gun bolted to the bed. The simplest possible weapons platform. Historically very effective.",
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
            "notes": "A step up from the MG technical, with a weapon that can stop armour at range. The driver treats every pothole as a personal affront.",
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
        "lore": "With regular forces overstretched by the invasion, both governments and corporations have turned to PMCs — well-funded, equipped with decent personal gear, and offering a layer of deniability when the mission extends to striking human rivals rather than the invaders.",
        "icon": "gun-rose",
        "units": [
          {
            "typeId": "light",
            "count": 1,
            "label": "PMC Commander",
            "notes": "Runs the operation, takes the contract, and stays far enough back to maintain plausible deniability. Very well paid.",
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
            "notes": "Ex-soldiers working for money instead of ideology. Reliable, professional, and completely loyal until the contract changes.",
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
            "notes": "Indirect fire for clients who want the capability without the paperwork of a state military. Available at scale, billed by the round.",
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
            "notes": "Precision assets. The contract specifies the targets; the snipers handle the methodology. Both parties prefer it that way.",
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
            "notes": "They left the military for the private sector because the money is better. Their skills are exactly what they were.",
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
            "notes": "Surplus military hardware acquired through channels that don't invite scrutiny. It runs, which is the main criterion.",
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
        "lore": "Human civilisation survives in the occupied territories, at least until the invaders decide humanity is too troublesome to permit. Most comply; some collaborate; others fight back. The alien reprisals are swift and brutal, which enrages more civilians, which creates more fighters — the classic asymmetric cycle.",
        "icon": "black-flag",
        "units": [
          {
            "typeId": "recon",
            "count": 1,
            "label": "Veteran Insurgent Cell",
            "notes": "They've been doing this long enough that the government stopped putting a price on their heads and started trying to recruit them.",
            "points": 2,
            "options": [],
            "xenos": {}
          },
          {
            "typeId": "recon",
            "count": 3,
            "label": "Insurgent Cells",
            "notes": "The backbone of the resistance — small, distributed, and harder to destroy than a conventional force because there is no centre to target.",
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
            "notes": "The answer to armour, to fortified positions, and to the argument that insurgencies can't punch above their weight.",
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
            "notes": "Motivated by something beyond the politics. They don't negotiate. They don't defect. They make the veteran cells nervous.",
            "points": 2,
            "options": [],
            "xenos": {}
          },
          {
            "typeId": "militia",
            "count": 1,
            "label": "Armed Mob",
            "notes": "Not soldiers. Not insurgents in any organised sense. People with anger and weapons, which has always been sufficient.",
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
            "notes": "Fast, quiet, and gone before the response arrives. They carry messages, weapons, and fighters. The roads are optional.",
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
            "notes": "Welded from pipe and fired by calculation and luck in roughly equal measure. They hit more often than the enemy would like.",
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
            "notes": "The logical extreme of asymmetric warfare — take one cheap vehicle, fill it with consequences, and point it at the problem.",
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
        "lore": "Prior to the invasion, alien scouting incursions were regularly and secretly confronted by Special Forces units, some established specifically for that purpose. Nowadays they mainly train resistance movements in occupied territory, but still launch raids when opportunities arise.",
        "icon": "cloak-dagger",
        "units": [
          {
            "typeId": "elite",
            "count": 1,
            "label": "Breach Team",
            "notes": "The first ones through the door, before the situation is confirmed stable. They don't announce themselves.",
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
            "notes": "The firepower option for objectives that need a statement rather than a quiet resolution. Very good at statements.",
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
            "notes": "They find things, call in things, and remain invisible while doing both. The mission's success relies on them and everyone pretends otherwise.",
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
        "lore": "These aliens have come a long way to take our planet, and their strength is their technology. This detachment escalates the UFO Scientific Team from the Urban Fantasy chapter — the stun weapons are gone, replaced by searing bolts of plasma.",
        "icon": "alien-fire",
        "units": [
          {
            "typeId": "light",
            "count": 1,
            "label": "Elders",
            "notes": "The commanders of the invasion, communicating in frequencies human instruments can't detect. They've been patient for a very long time.",
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
            "notes": "Something between a vehicle and a weapons system, operating on principles no terrestrial engineer has reverse-engineered yet. Not for lack of trying.",
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
            "notes": "The combat arm of the invasion, silent and fast, operating on shared tactical awareness that makes individual command irrelevant.",
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
        "lore": "The invasion was not as sudden as many believed. For decades, scattered humans had already sworn themselves to the coming conquerors. Invading an entire planet requires more troops than even advanced technology can easily provide, so local auxiliaries are inevitable — gifted with power, status, and increased rations in return for their service.",
        "icon": "mdi-skull",
        "units": [
          {
            "typeId": "elite",
            "count": 1,
            "label": "Ex-Handwerker Envoy",
            "notes": "A human who made first contact and came back changed. Whether the knowledge they carry is a gift or an infection is an open question.",
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
            "notes": "People who looked at what was coming and chose the winning side early. They tell themselves it was pragmatism.",
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
            "notes": "Those whose early cooperation earned them something. What the aliens gave them, and what it cost, isn't something they discuss.",
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
        "lore": "Civilisation requires rules if it is to endure, and this detachment represents those who intend to make them. Whether recreating the old world or building a new one from scratch, their forces — ragtag by pre-apocalypse standards — are modelled closely on the World Before and hit harder than most of their competition.",
        "icon": "mailed-fist",
        "units": [
          {
            "typeId": "elite",
            "count": 1,
            "label": "Troopers in Salvaged Power Armour",
            "notes": "The armour predates the collapse. The troopers maintain it with parts cannibalized from whatever they can find. It works better than it has any right to.",
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
            "notes": "The Order's rank and file — disciplined, equipped, and absolutely clear about who they're working for.",
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
            "notes": "Deployed for clearing operations. The Order doesn't discuss what gets cleared.",
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
            "notes": "Long-range scouts operating outside the Order's territory. They see the full extent of what was lost. They don't tell the others.",
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
            "notes": "A pre-collapse armoured vehicle running again on jury-rigged systems. It's the Order's largest single bargaining chip, and they know it.",
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
        "lore": "When civilisation collapsed, the World Before's technology remained. Most tribes ignore it and let it rust. Some venerate the ancient machines as divine. Tech-barbarians descended from the inhabitants of isolated military bases often find themselves in possession of exceedingly dangerous weaponry — which they treat as sacred relics.",
        "icon": "visored-helm",
        "units": [
          {
            "typeId": "support",
            "count": 1,
            "label": "Those Worthy of the Arsenal",
            "notes": "Warriors who've passed the trials and earned the right to bear pre-collapse weapons. They maintain them as sacred objects. They also use them.",
            "points": 5,
            "options": [],
            "xenos": {}
          },
          {
            "typeId": "primitive",
            "count": 2,
            "label": "Those Not Yet Worthy",
            "notes": "Fighting to prove themselves, armed with whatever they've scavenged. The path to the Arsenal runs through combat. Most of them know that.",
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
            "notes": "A pre-collapse weapons platform that still functions. The Tech-Barbarians carry out rituals before activating it. They haven't worked out that the rituals don't help. The Type IV runs regardless.",
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
            "notes": "Missiles that the Tech-Barbarians have learned to launch but not to target with precision. The blast radius doesn't require precision.",
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
        "lore": "With the total collapse of economy and industry, many became nomads, moving ahead of hunger, environmental collapse, and ravening beasts. Some road warriors try to retain a sense of decency. Most eventually succumb to necessity and begin taking what they need from whoever they encounter.",
        "icon": "battle-tank",
        "units": [
          {
            "typeId": "berserk",
            "count": 1,
            "label": "The Warrior of the Wastes",
            "notes": "The leader, driving something rebuilt from three different vehicles. They know every road in the waste. They've paved some of them with former enemies.",
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
            "notes": "Custom-built and battle-scarred. It's faster than it looks and armoured better than it should be.",
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
            "notes": "Their specialty is acquisition — specifically, taking other people's vehicles at speed. They're very skilled at this.",
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
            "notes": "Riders without vehicles of their own, hitching wherever they can to get close enough to work. Useful in a fight. Marginally less so on the road.",
            "points": 1,
            "options": [],
            "xenos": {}
          },
          {
            "typeId": "primitive",
            "count": 1,
            "label": "Asphalt Vandals",
            "notes": "They destroy roads, bridges, and infrastructure for fun and tactical advantage. The distinction between the two doesn't concern them.",
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
            "notes": "Every vehicle in the column is different and every driver built their own. Optimised for the driver's style. They don't share parts.",
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
            "notes": "Motorcycle outriders who run ahead of the column to scout and harass. Fast, loud, and deliberately so.",
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
        "lore": "Not everyone in the aftermath is fuelled by ideology. Some just want to exist in peace. When targeted by raiders, they will quietly move on — but sometimes they are forced to fight to preserve a particularly secure encampment or a valuable water source.",
        "icon": "flame",
        "units": [
          {
            "typeId": "heavy",
            "count": 1,
            "label": "Police or Army Veterans",
            "notes": "People who knew how the old world worked and have adapted that knowledge to the new one. They train the others, set the watch, and remember what was lost.",
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
            "notes": "The perimeter watch — rotated constantly, armed with whatever the community can spare, and responsible for everything outside the wire.",
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
            "notes": "They go out into the ruins to find what the community needs. Every run is a calculation of what's worth risking. They've gotten good at the math.",
            "points": 2,
            "options": [],
            "xenos": {}
          },
          {
            "typeId": "militia",
            "count": 1,
            "label": "Non-combatants",
            "notes": "Children, elders, injured, people who can't fight but can do everything else. The community exists to protect them.",
            "points": 1,
            "options": [],
            "xenos": {}
          },
          {
            "typeId": "softskin-vehicle",
            "count": 2,
            "label": "RV, Coach or Truck",
            "notes": "The community's largest vehicle — a mobile refuge, supply carrier, and last resort. If it goes, the community follows or disperses.",
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
            "notes": "Barely running, but running. Used for scouting, extraction, and anything that needs getting somewhere fast.",
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
            "notes": "The community's mobile arm — ranging ahead, carrying messages, and keeping watch on approaches from a distance.",
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
        "lore": "Why do the dead walk in the post-apocalypse? A vengeful deity, a virus, a mutation, an alien experiment — the theories are many. Most survivors have concluded that the reason doesn't matter, as long as you don't let them bite you.",
        "icon": "biohazard",
        "units": [
          {
            "typeId": "greater-xeno",
            "count": 1,
            "label": "The Monstrous Dead",
            "notes": "Whatever this thing was before the collapse, it's larger now. The change wasn't kind to it. It isn't kind to anything it encounters.",
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
            "notes": "The majority of the risen — slow, relentless, dangerous only in numbers. The numbers are not a problem they have.",
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
            "notes": "The ones that retained enough function to use a weapon. Nobody knows how. Nobody wants to get close enough to study it.",
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
            "notes": "Something in the bite. Something in the water. The conversion is faster than anyone would prefer.",
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
            "notes": "Whatever kept them slow didn't keep them slow. These ones sprint. The survivors have stopped trying to explain it.",
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
        "lore": "Some compare her to King Arthur, others to Joan of Arc. The more rational say she is a mutant or the product of some hideous genetic experiment. Wherever she came from, she smites all who stand against her and blesses all who march with her.",
        "icon": "angel-wings",
        "units": [
          {
            "typeId": "elite",
            "count": 1,
            "label": "The Angel",
            "notes": "Something found in the ruins that the Disciples believe is divine. It radiates something. It follows something. Whatever it is, it protects its faithful.",
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
            "notes": "True believers with absolute commitment and nothing left to lose. The Angel makes them fearless. The absence of fear is not always an advantage.",
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
            "notes": "The armed protectors of the faith — trained, equipped from pre-collapse stores, and utterly devoted. They are the Angel's sword.",
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
            "notes": "Those who've joined the procession but not yet been tested. They carry what they're given and follow where they're led.",
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
        "lore": "Those with visible mutations are often shunned, so mutant families group together for protection. Generations of interbreeding have stirred the genetic soup still further. This particular tribe is fanatically devoted to protecting their psychic youngsters from the outside world.",
        "icon": "monster-grasp",
        "units": [
          {
            "typeId": "primitive",
            "count": 1,
            "label": "The Children",
            "notes": "Not literally children, though some of them are. The community calls its closest kin the Children — those who carry the most obvious marks of the change.",
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
            "notes": "Four of them, inseparable since before the collapse. Whatever the mutation did to their bodies, it didn't touch the bond between them. It may have strengthened it.",
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
            "notes": "A family that's been in the wastes since before the collapse, gradually drifting further from baseline. Territorial, capable, and numerous.",
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
            "notes": "Old Cooper has been hunting the waste for thirty years. His party moves with him and no one else. What they bring back keeps the community fed.",
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
            "notes": "Gosling herself is ancient by wasteland standards, and whatever she did to survive this long, some of it passed to the brood she raised. They're adaptable in ways that aren't entirely physical.",
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
        "lore": "Whether the Alliance is benevolent, merely protective, or coercive in its ambitions, its goal is the same: expand by seeking out new life and new civilisations. Its landing parties are as much about soft power as hard — though security is never far from hand.",
        "icon": "astronaut-helmet",
        "units": [
          {
            "typeId": "light",
            "count": 1,
            "label": "Captain, Ship's Officers, and One Nervous Ensign",
            "notes": "The Captain will make first contact, negotiate under fire, and find a solution that satisfies everyone. The ensign will not have a good day.",
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
            "notes": "There to protect the officers while they do the talking. Extensively trained. They spend most of their time standing still and looking composed.",
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
            "notes": "They're here for the anomaly, the artefact, or the lifeform. The security situation is, from their perspective, an obstacle to fieldwork.",
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
        "lore": "The Empire's attitude towards acquiring other species can be summarised as compliance or destruction. It fields a brute-force army — a sledgehammer whose sole purpose is to destroy the enemy, regardless of casualties suffered on either side.",
        "icon": "fa-empire",
        "units": [
          {
            "typeId": "elite",
            "count": 1,
            "label": "Centurions",
            "notes": "The Empire's elite formations, named for a tradition they revere and a history they've rewritten. They're effective. That's the only measure the Empire applies.",
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
            "notes": "The core of the Imperial line, trained from youth and organised into formations designed to grind down everything in front of them.",
            "points": 2,
            "options": [],
            "xenos": {}
          },
          {
            "typeId": "light",
            "count": 1,
            "label": "Hastati",
            "notes": "Expendable screens and garrison troops. The Empire has a surplus. Most Hastati know this.",
            "points": 1,
            "options": [],
            "xenos": {}
          },
          {
            "typeId": "berserk",
            "count": 1,
            "label": "Penal Troopers High on Combat Drugs",
            "notes": "Crime in the Empire is met with two options. One involves a cell. The other involves a combat stimulant and a dangerous assignment.",
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
            "notes": "The Empire's answer to the question of what heavy fire support should look like when you have enough hubris and enough engineers. It's impressive. It's also a target.",
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
        "lore": "Starship boarding actions are brutal, fast-moving, close-quarters battles where casualties are heavy and explosive decompression is a real risk. Boarding units tend to be small for manoeuvrability in confined spaces, favouring weapons with short range and low penetration.",
        "icon": "crossed-swords",
        "units": [
          {
            "typeId": "elite",
            "count": 1,
            "label": "Marine Forlorn Hope",
            "notes": "The first squad through the breach, before the situation is confirmed stable. The name is traditional. The attrition rate supports it.",
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
            "notes": "Combat-boarding specialists, trained for close-quarters work in zero gravity. They're very good at things that only matter in very specific terrible situations.",
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
            "notes": "The ship's own security contingent, deployed groundside when needed. Not marines. They know this. They've stopped minding.",
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
        "lore": "Even with fast commercial space travel, it can take months for an emergency signal to receive aid — and in that environment, piracy is all but guaranteed. This detachment is a raiding party deployed to a planetary surface; for a ship-to-ship boarding force, see the Boarding Party list.",
        "icon": "skull-crossed-bones",
        "units": [
          {
            "typeId": "berserk",
            "count": 1,
            "label": "Raiders on Hover Boards or Jetbikes",
            "notes": "Fast-attack harassment — hit the flanks, scatter the formation, take anything not bolted down, and leave before the response arrives.",
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
            "notes": "The reason the Raiders bother with any of this. Once the shooting's done, the Looters move in and strip the site of anything with a market value.",
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
            "notes": "They arrive via controlled crash, which tells you everything about the culture. The dropship is optional for the return trip.",
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
            "notes": "A ship built to move freight, now modified to move violence. The weapons are non-standard, the shielding is improvised, and it works better than it should.",
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
            "notes": "Whatever these creatures are, they've been incompletely domesticated and pointed at the enemy. The domestication is the part that needs work.",
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
        "lore": "Not all aliens are humanoid, or even recognisably sentient. Whether insectoid, crustacean, or wholly incomparable to Terran lifeforms, these territorial creatures may spread between worlds by accident or design. This detachment is a simple, near-mindless swarm of melee creatures.",
        "icon": "hive-mind",
        "units": [
          {
            "typeId": "greater-xeno",
            "count": 1,
            "label": "Queen",
            "notes": "The singular intelligence that directs the swarm. She doesn't give orders. She is the orders. The colony exists as an extension of her will.",
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
            "notes": "The swarm in mass formation — relentless, expendable, and moving with a collective purpose that individual courage cannot stop.",
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
            "notes": "Fresh from the birthing chambers, already capable and already killing. The Queen doesn't waste energy on childhood.",
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
        "lore": "Not every species advances at the same rate. Primitive tribes are often exploited by more advanced species, if not simply marked for extermination so their worlds can be plundered. Inevitably, the tribes fight back. Sometimes, they even win.",
        "icon": "tiger-head",
        "units": [
          {
            "typeId": "berserk",
            "count": 1,
            "label": "Chief Riding Irritable Xeno Beast",
            "notes": "The Chief leads from above the battle on an animal that views everything with violent suspicion. This inspires the warriors considerably.",
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
            "notes": "Riders who grew up on their beasts and fight better mounted than most cultures fight on foot. Their weapons are pre-gunpowder. Their effectiveness is not.",
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
            "notes": "Armed with the weapons of their tradition and vastly more effective with them than outsiders assume. The assumption is a mistake.",
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
            "notes": "Animals the tribe has worked with for generations. Trained is a relative term. Loyal is more accurate.",
            "points": 2,
            "options": [],
            "xenos": {}
          },
          {
            "typeId": "recon",
            "count": 1,
            "label": "Tribal Scouts with Traded Weapons",
            "notes": "Ranging ahead of the tribe with weapons acquired through exchange with passing traders. They know their territory. They learn everything else.",
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
        "lore": "At the far end of the scale are civilisations that harnessed stellar energies before life on Earth began. When the Ancients go to war, their technology is phenomenal — autonomous war machines, bio-constructs, enslaved lesser species. Often, the Ancients themselves are never seen. Perhaps their machines have been running autonomously for aeons. Perhaps their masters are long extinct.",
        "icon": "all-seeing-eye",
        "units": [
          {
            "typeId": "elite",
            "count": 1,
            "label": "Command Node",
            "notes": "A fragment of the original control architecture, still processing, still directing. It doesn't know how long it's been dormant. It doesn't consider this relevant.",
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
            "notes": "Autonomous combat platforms that predated most spacefaring civilisations. They were built to last. They did.",
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
            "notes": "A weapons system whose operating principles were never recovered from the Ancient databases. It functions. How it functions is a question for a better-equipped research team.",
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
        "lore": "Landing parties are starship crew when they're ready for danger. This list is what happens when they're not — when a civilian vessel is boarded, or the crew are forced to evacuate to a planetary surface unprepared. Represents the crew of an Alliance ship, and pairs naturally with the Alliance Landing Party.",
        "icon": "radar-dish",
        "units": [
          {
            "typeId": "heavy",
            "count": 2,
            "label": "Security Teams",
            "notes": "The ship's armed response, deployed whenever something needs securing and the crew would prefer not to discuss what that something is.",
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
            "notes": "Here to heal. Currently in a situation where there is more healing required than they anticipated. They're managing.",
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
            "notes": "Their natural environment is a maintenance crawlspace. Outside of it, they have good tools, good instincts, and limited enthusiasm for being shot at.",
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
            "notes": "The ship's automated response units, operating on protocols last updated three captains ago. They are thorough. The protocols do not include discretion.",
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
            "notes": "They shouldn't be here. The mission profile didn't anticipate a situation where staying aboard was more dangerous than coming along.",
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
        "lore": "The advantage of mechanoid troops — telemetry-controlled or autonomous AI — is obvious: fewer biological deaths on your own side. Some civilisations are populated solely by AIs, generally because the machines have outlived their long-dead creators. They tend to be evasive about what, specifically, caused that extinction.",
        "icon": "robot-helmet",
        "units": [
          {
            "typeId": "fighting-vehicle",
            "count": 1,
            "label": "Avatar of the God Machine",
            "notes": "The Machine's chosen instrument on the field — an autonomous platform carrying out the central intelligence's will with perfect efficiency and no capacity for mercy.",
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
            "notes": "Standard-issue combat machines, produced in sufficient quantity that individual unit loss is within acceptable parameters. They know this. It doesn't affect their function.",
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
            "notes": "Built for pursuit and termination. They do not stop. They do not fatigue. The only variable is how long the target runs.",
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
        "lore": "What humans call reality is our subjective, three-dimensional understanding of the universe. Dimensions exist above, below, and parallel to our own, and the veil between them can be torn aside — exposing our world to the physical laws of another. Many such entities are benign, if incomprehensible. This detachment does not represent those.",
        "icon": "gooey-daemon",
        "units": [
          {
            "typeId": "elite",
            "count": 1,
            "label": "Demon King",
            "notes": "Something that crossed from the other side and chose this dimension as its theatre. It has interests here. What they are, human cognition cannot fully hold.",
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
            "notes": "The advance elements of the incursion, sent ahead to soften the environment. Lesser is a comparative term. They're still very difficult to kill.",
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
            "notes": "An entity that treats the local laws of physics as advisory. It doesn't break reality. It just suggests alternatives.",
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
        "lore": "Genetic engineering, cybernetic implantation, and intense training combine to create something beyond an ordinary soldier. Enhanced troopers can accurately engage multiple targets in the time it takes lesser warriors to shoot once. They are most often fielded in small, specialised squads that strike at critical infrastructure and command.",
        "icon": "mailed-fist",
        "units": [
          {
            "typeId": "elite",
            "count": 1,
            "label": "Sergeant Kasimir",
            "notes": "The oldest member of the squad, which in enhanced terms means he's been through more augmentation cycles than the others. He commands by example. The example is usually violent.",
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
            "notes": "A pair who've fought together long enough to operate as a single tactical unit without communicating. Nobody's worked out if this is training or something the augmentation did.",
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
            "notes": "The squad's heavy element — more augmentation, more armour, more firepower. When the squad needs something stopped rather than outmaneuvered, these two handle it.",
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