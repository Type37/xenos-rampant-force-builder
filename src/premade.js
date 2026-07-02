/* Pre-made example detachments, transcribed from the genre settings in
   Xenos Rampant (Osprey Games, 2022) and mapped to this app's unit and option
   ids. Grouped by setting. Generated, then reviewed by hand. */
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
        "units": [
          {
            "typeId": "light",
            "count": 1,
            "label": "Platoon Major and Staff",
            "points": 1,
            "options": [],
            "xenos": {}
          },
          {
            "typeId": "light",
            "count": 4,
            "label": "Infantry Group",
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
            "points": 2,
            "options": [],
            "xenos": {}
          },
          {
            "typeId": "berserk",
            "count": 2,
            "label": "Uhlan or Hussar Cavalry Troop",
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
        "units": [
          {
            "typeId": "light",
            "count": 1,
            "label": "Stosstruppen Group",
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
        "units": [
          {
            "typeId": "light",
            "count": 1,
            "label": "Schüler or Hexe",
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
            "points": 5,
            "options": [],
            "xenos": {}
          },
          {
            "typeId": "militia",
            "count": 1,
            "label": "Moorkörper",
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
        "units": [
          {
            "typeId": "light",
            "count": 1,
            "label": "Strange Foundation Researchers",
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
        "units": [
          {
            "typeId": "elite",
            "count": 1,
            "label": "Handwerker with MG42 and Powered Armour",
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
        "units": [
          {
            "typeId": "light",
            "count": 1,
            "label": "Schüler and Assistants",
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
        "units": [
          {
            "typeId": "light",
            "count": 1,
            "label": "Waffen-SS with Panzerfausts and MG42",
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
        "units": [
          {
            "typeId": "light",
            "count": 1,
            "label": "Army Command Section",
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
            "points": 6,
            "options": [],
            "xenos": {}
          },
          {
            "typeId": "softskin-vehicle",
            "count": 1,
            "label": "Jeep with MG",
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
        "units": [
          {
            "typeId": "heavy",
            "count": 1,
            "label": "Special Air Service Team",
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
        "units": [
          {
            "typeId": "heavy",
            "count": 1,
            "label": "Vengeful Veterans with NKVD Officer",
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
            "points": 5,
            "options": [],
            "xenos": {}
          },
          {
            "typeId": "greater-xeno",
            "count": 1,
            "label": "Baba Yaga and her cottage",
            "points": 6,
            "options": [],
            "xenos": {
              "psychic": 1
            }
          }
        ]
      }
    ]
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
        "units": [
          {
            "typeId": "elite",
            "count": 2,
            "label": "SWAT Team",
            "points": 6,
            "options": [],
            "xenos": {}
          },
          {
            "typeId": "transport-vehicle",
            "count": 1,
            "label": "SWAT Armoured Rescue Vehicle",
            "points": 4,
            "options": [],
            "xenos": {}
          },
          {
            "typeId": "recon",
            "count": 1,
            "label": "SWAT Sniper Team",
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
        "units": [
          {
            "typeId": "elite",
            "count": 1,
            "label": "AFO Armed Response Team",
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
            "points": 5,
            "options": [],
            "xenos": {}
          },
          {
            "typeId": "primitive",
            "count": 2,
            "label": "Police Support Unit",
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
        "units": [
          {
            "typeId": "light",
            "count": 1,
            "label": "Back-alley Sorcerer and Bodyguards",
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
            "points": 1,
            "options": [],
            "xenos": {}
          },
          {
            "typeId": "greater-xeno",
            "count": 2,
            "label": "Eldritch Horrors (Possibly Squamous)",
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
        "units": [
          {
            "typeId": "greater-xeno",
            "count": 1,
            "label": "The Mother of Liberty",
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
        "units": [
          {
            "typeId": "primitive",
            "count": 1,
            "label": "Coven of Scholars",
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
            "points": 6,
            "options": [],
            "xenos": {}
          },
          {
            "typeId": "softskin-vehicle",
            "count": 1,
            "label": "Armoured SUV",
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
        "units": [
          {
            "typeId": "light",
            "count": 1,
            "label": "MiB Plus a Few Souvenirs",
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
            "points": 6,
            "options": [],
            "xenos": {}
          },
          {
            "typeId": "transport-vehicle",
            "count": 1,
            "label": "Black Helicopter",
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
        "units": [
          {
            "typeId": "greater-xeno",
            "count": 1,
            "label": "The King of Gluttony",
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
        "units": [
          {
            "typeId": "light",
            "count": 1,
            "label": "Elders",
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
    ]
  },
  {
    "id": "war-on-terra",
    "name": "Five Minutes Into The Future: The War On Terra",
    "blurb": "Near-future soldiers, contractors, and first contact.",
    "nationalTraits": false,
    "detachments": [
      {
        "n": 19,
        "name": "Top Tier Military",
        "subtitle": "Well-Equipped And Highly Motivated Volunteers",
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
    ]
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
      }
    ]
  }
];
