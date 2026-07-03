/* Xenos Rampant data. Profiles, options, special rules, xeno rules and
   commander traits transcribed from Xenos Rampant (Osprey Games, 2022).
   To-hit values are shown as target numbers (a bare 6 in the book is 6+). */

export const INFANTRY = "infantry";
export const VEHICLE = "vehicle";

export const UNIT_TYPES = [
  {
    "id": "elite",
    "name": "Elite Infantry",
    "cls": "infantry",
    "base": 6,
    "sp": 5,
    "role": "The best soldiers in the galaxy. Heaviest armour, no fear, cut swathes through almost any foe.",
    "act": {
      "atk": "Free (5+)",
      "mov": "5+",
      "sho": "Free (5+)",
      "cou": "3+"
    },
    "prof": {
      "atk": "4+",
      "def": "4+",
      "sho": "4+ / 18\"",
      "arm": "4",
      "mov": "8\""
    },
    "special": [
      "Back Into The Fray",
      "Firefight",
      "Ranger"
    ],
    "xenoPolicy": {
      "type": "all"
    },
    "options": [
      {
        "id": "anti-tank",
        "name": "Anti-Tank",
        "cost": 2,
        "conflicts": [
          "armour-piercing"
        ],
        "text": "When Shooting at enemy vehicle units (including when using the Firefight rule), count the target’s Armour as being half its usual value. This cannot be combined with the effects of Armour-Piercing."
      },
      {
        "id": "armour-piercing",
        "name": "Armour-Piercing",
        "cost": 1,
        "conflicts": [
          "anti-tank"
        ],
        "text": "When Shooting (including when using the Firefight rule), count the target’s Armour as being 1 point lower than usual."
      },
      {
        "id": "assault-doctrine",
        "name": "Assault Doctrine",
        "cost": 2,
        "text": "Bayonets or more traditional melee weapons improve the unit’s Attack Value to 3+."
      },
      {
        "id": "close-quarters",
        "name": "Close Quarters Doctrine",
        "cost": -1,
        "text": "This unit is armed for short-range combat, reducing its Shoot Value to 4+ / 12\"."
      },
      {
        "id": "demolitions",
        "name": "Demolitions",
        "cost": 2,
        "conflicts": [
          "high-powered-blades"
        ],
        "text": "During Attacks (whether Attacking or Defending), count the Armour of enemy vehicle units as being half its usual value. This cannot be combined with the effects of High-Powered Blades."
      },
      {
        "id": "fire-support",
        "name": "Fire Support",
        "cost": 4,
        "text": "This unit can call in Fire Support as an ordered activation."
      },
      {
        "id": "heavy-weapon",
        "name": "Heavy Weapon",
        "cost": 2,
        "text": "When Shooting (including when using the Firefight rule), any 6s count as two hits, rather than one."
      },
      {
        "id": "high-powered-blades",
        "name": "High-Powered Blades",
        "cost": 1,
        "conflicts": [
          "demolitions"
        ],
        "text": "During Attacks (whether Attacking or Defending), count the target’s Armour as being one point lower than usual."
      },
      {
        "id": "mobile",
        "name": "Mobile",
        "cost": 1,
        "text": "The use of exo-skeletons, powered armour or mounts increases this unit’s Maximum Movement by 4\". This unit still counts, for all rules purposes, as infantry. This cannot be combined with the Slow xeno rule."
      },
      {
        "id": "super-heavy-armour",
        "name": "Super Heavy Armour",
        "cost": 2,
        "text": "You don’t think they’re tough enough already? Some Elite Infantry boast carapaces more suited to an armoured vehicle. Increase this unit’s Armour to 5, but reduce its Maximum Movement by 2\". Super-heavily armoured infantry also become susceptible to the Anti-Tank and Demolitions rules, as if they were vehicles."
      }
    ]
  },
  {
    "id": "heavy",
    "name": "Heavy Infantry",
    "cls": "infantry",
    "base": 2,
    "sp": 5,
    "role": "Professional line troops. Best tying the enemy up in bloody firefights while others grab objectives.",
    "act": {
      "atk": "6+",
      "mov": "5+",
      "sho": "Free (6+)",
      "cou": "4+"
    },
    "prof": {
      "atk": "6+",
      "def": "5+",
      "sho": "6+ / 18\"",
      "arm": "3",
      "mov": "6\""
    },
    "special": [
      "Firefight",
      "Go To Ground"
    ],
    "xenoPolicy": {
      "type": "all"
    },
    "options": [
      {
        "id": "armour-piercing",
        "name": "Armour-Piercing",
        "cost": 1,
        "text": "When Shooting (including when using the Firefight rule), count the target’s Armour as being 1 point lower than usual."
      },
      {
        "id": "assault-doctrine",
        "name": "Assault Doctrine",
        "cost": 2,
        "text": "Bayonets or more traditional melee weapons improve this unit’s Attack Value by 1 (e.g. 6 becomes 5+, or 5+ becomes 4+)."
      },
      {
        "id": "close-quarters",
        "name": "Close Quarters Doctrine",
        "cost": -1,
        "text": "This unit is armed for short-range combat, reducing its Shoot Value to 6 / 12\", or 5+ / 12\" with Increased Squad Size."
      },
      {
        "id": "fire-support",
        "name": "Fire Support",
        "cost": 4,
        "text": "This unit can call in Fire Support as an ordered activation."
      },
      {
        "id": "heavy-weapon",
        "name": "Heavy Weapon",
        "cost": 2,
        "text": "When Shooting (including when using the Firefight rule), any 6s count as two hits, rather than one."
      },
      {
        "id": "increased-squad",
        "name": "Increased Squad Size",
        "cost": 2,
        "sp": 10,
        "text": "This unit begins the game with 10 Strength Points and increases its Attack Value to 5+, Defence Value to 4+ and Shoot Value to 5+ / 18\"."
      },
      {
        "id": "mobile",
        "name": "Mobile",
        "cost": 1,
        "text": "The use of exo-skeletons, powered armour or mounts increases this unit’s Maximum Movement by 4\". This unit still counts, for all rules purposes, as infantry. This cannot be combined with the Slow xeno rule."
      },
      {
        "id": "undisciplined",
        "name": "Undisciplined",
        "cost": -1,
        "text": "The unit has Courage 5+."
      }
    ]
  },
  {
    "id": "light",
    "name": "Light Infantry",
    "cls": "infantry",
    "base": 1,
    "sp": 5,
    "role": "Manoeuvrable and lightly armoured. For capturing objectives or holding ground, not slugging it out.",
    "act": {
      "atk": "6+",
      "mov": "Free (5+)",
      "sho": "6+",
      "cou": "4+"
    },
    "prof": {
      "atk": "6+",
      "def": "5+",
      "sho": "6+ / 18\"",
      "arm": "2",
      "mov": "8\""
    },
    "special": [
      "Firefight",
      "Go To Ground"
    ],
    "xenoPolicy": {
      "type": "all"
    },
    "options": [
      {
        "id": "armour-piercing",
        "name": "Armour-Piercing",
        "cost": 1,
        "text": "When Shooting (including when using the Firefight rule), count the target’s Armour as being 1 point lower than usual."
      },
      {
        "id": "assault-doctrine",
        "name": "Assault Doctrine",
        "cost": 2,
        "text": "Bayonets or more traditional melee weapons improve this unit’s Attack Value by 1 (e.g. 6 becomes 5+, or 5+ becomes 4+)."
      },
      {
        "id": "close-quarters",
        "name": "Close Quarters Doctrine",
        "cost": -1,
        "text": "This unit is armed for short-range combat, reducing its Shoot Value to 6+ / 12\", or 5+ / 12\" with Increased Squad Size."
      },
      {
        "id": "fire-support",
        "name": "Fire Support",
        "cost": 4,
        "text": "This unit can call in Fire Support as an ordered activation."
      },
      {
        "id": "guerrillas",
        "name": "Guerrillas",
        "cost": 1,
        "text": "When in soft cover, this unit increases its Armour value by an additional point."
      },
      {
        "id": "heavy-weapon",
        "name": "Heavy Weapon",
        "cost": 2,
        "text": "When Shooting (including when using the Firefight rule), any 6’s count as two hits, rather than one."
      },
      {
        "id": "increased-squad",
        "name": "Increased Squad Size",
        "cost": 2,
        "sp": 10,
        "text": "This unit begins the game with 10 Strength Points and increases its Attack Value to 5+, Defence Value to 4+ and Shoot Value to 5+ / 18\"."
      },
      {
        "id": "mobile",
        "name": "Mobile",
        "cost": 1,
        "text": "The use of exo-skeletons, powered armour or mounts increases this unit’s Maximum Movement by 4\". This unit still counts, for all rules purposes, as infantry. This cannot be combined with the Slow xeno rule."
      },
      {
        "id": "undisciplined",
        "name": "Undisciplined",
        "cost": -1,
        "text": "The unit has Courage 5+."
      }
    ]
  },
  {
    "id": "berserk",
    "name": "Berserk Infantry",
    "cls": "infantry",
    "base": 2,
    "sp": 5,
    "role": "Melee-hungry warriors who fire from the hip as they close. Subject to Wild Charges.",
    "act": {
      "atk": "5+",
      "mov": "(Free) 6+",
      "sho": "7+",
      "cou": "4+"
    },
    "prof": {
      "atk": "4+",
      "def": "6+",
      "sho": "6+ / 12\"",
      "arm": "2",
      "mov": "8\""
    },
    "special": [
      "Counter-Charge",
      "Firefight",
      "Open Order",
      "Ranger",
      "Wild Charge"
    ],
    "xenoPolicy": {
      "type": "except",
      "list": [
        "psychic",
        "crusader"
      ]
    },
    "options": [
      {
        "id": "demolitions",
        "name": "Demolitions",
        "cost": 2,
        "conflicts": [
          "high-powered-blades"
        ],
        "text": "During Attacks (whether Attacking or Defending), count the Armour of enemy vehicle units as being half its usual value. This cannot be combined with the effects of High-Powered Blades."
      },
      {
        "id": "enthusiastic",
        "name": "Enthusiastic But Untrained",
        "cost": -1,
        "text": "This unit’s Attack Value is reduced by 1 (e.g. 4+ to 5+ for base units)."
      },
      {
        "id": "heavy-armour",
        "name": "Heavy Armour",
        "cost": 2,
        "conflicts": [
          "even-heavier"
        ],
        "text": "This unit’s Armour becomes 3."
      },
      {
        "id": "even-heavier",
        "name": "Even Heavier Armour",
        "cost": 4,
        "conflicts": [
          "heavy-armour",
          "increased-squad"
        ],
        "text": "Change this unit’s Armour to 4 and Attack Value to 3+. May not be combined with Heavy Armour or Increased Squad Size."
      },
      {
        "id": "high-powered-blades",
        "name": "High-Powered Blades",
        "cost": 1,
        "conflicts": [
          "demolitions"
        ],
        "text": "During Attacks (whether Attacking or Defending), count the target’s Armour as being 1 point lower than usual."
      },
      {
        "id": "increased-squad",
        "name": "Increased Squad Size",
        "cost": 1,
        "sp": 10,
        "conflicts": [
          "even-heavier"
        ],
        "text": "This unit begins the game with 10 Strength Points, and also increases its Attack Value to 3+. This unit’s Defence Value and Shoot Value remain unchanged."
      },
      {
        "id": "mobile",
        "name": "Mobile",
        "cost": 1,
        "text": "The use of exo-skeletons, powered armour or mounts increases this unit’s Maximum Movement by 4\". This unit still counts, for all rules purposes, as infantry. This cannot be combined with the Slow xeno rule."
      },
      {
        "id": "veteran",
        "name": "Veteran",
        "cost": 2,
        "text": "This unit’s Defence Value becomes 5+."
      }
    ]
  },
  {
    "id": "support",
    "name": "Support Infantry",
    "cls": "infantry",
    "base": 5,
    "sp": 5,
    "noAttack": true,
    "role": "Heavy-weapon crews and artillery. Long reach, can never Attack, needs protecting.",
    "act": {
      "atk": "—",
      "mov": "6+",
      "sho": "(Free) 7+",
      "cou": "4+"
    },
    "prof": {
      "atk": "—",
      "def": "5+",
      "sho": "4+ / 24\"",
      "arm": "2",
      "mov": "6\""
    },
    "special": [
      "Firefight",
      "Spotters",
      "Never Attacks"
    ],
    "xenoPolicy": {
      "type": "all"
    },
    "options": [
      {
        "id": "anti-tank",
        "name": "Anti-Tank",
        "cost": 2,
        "conflicts": [
          "armour-piercing"
        ],
        "text": "When Shooting at enemy vehicle units (including when using the Firefight rule), count the target’s Armour as being half its usual value. This cannot be combined with the effects of Armour-Piercing."
      },
      {
        "id": "armour-piercing",
        "name": "Armour-Piercing",
        "cost": 1,
        "conflicts": [
          "anti-tank"
        ],
        "text": "When Shooting (including when using the Firefight rule), count the target’s Armour as being 1 point lower than usual."
      },
      {
        "id": "artillery",
        "name": "Artillery",
        "cost": 2,
        "conflicts": [
          "close-quarters"
        ],
        "text": "This unit’s Shoot Value becomes 4+ / 48\". Cannot be combined with Close Quarters Doctrine."
      },
      {
        "id": "close-quarters",
        "name": "Close Quarters Doctrine",
        "cost": -2,
        "conflicts": [
          "artillery"
        ],
        "text": "Reduce this unit’s Shoot Value to 4+ / 12\"."
      },
      {
        "id": "engulfing",
        "name": "Engulfing",
        "cost": 1,
        "text": "This unit’s Shooting targets gain no Armour bonus from cover."
      },
      {
        "id": "heavy-weapon",
        "name": "Heavy Weapon",
        "cost": 2,
        "text": "When Shooting (including when using the Firefight rule), any 6s count as two hits, rather than one. This represents Support Infantry carrying even heavier guns than their basic profile implies, or a higher number of them compared to a similarly upgraded Heavy or Light Infantry squad."
      },
      {
        "id": "indirect-fire",
        "name": "Indirect Fire",
        "cost": 1,
        "text": "When using the Spotters rule, this unit may fire at targets that it cannot draw a line of sight to, as long as the unit acting as spotters can do so."
      }
    ]
  },
  {
    "id": "recon",
    "name": "Recon Infantry",
    "cls": "infantry",
    "base": 2,
    "sp": 5,
    "role": "Lighter than Light. Infiltrate, harry supply lines, snipe, then vanish. Hard to pin down.",
    "act": {
      "atk": "7+",
      "mov": "Free (5+)",
      "sho": "7+",
      "cou": "5+"
    },
    "prof": {
      "atk": "6+",
      "def": "6+",
      "sho": "5+ / 12\"",
      "arm": "1",
      "mov": "8\""
    },
    "special": [
      "Firefight",
      "Hard to Target",
      "Open Order",
      "Skirmish"
    ],
    "xenoPolicy": {
      "type": "except",
      "list": [
        "cloaking-device",
        "psychic",
        "exploder",
        "crusader"
      ]
    },
    "options": [
      {
        "id": "counter-sniper",
        "name": "Counter-Sniper Training",
        "cost": 1,
        "requires": "sniper-team",
        "text": "A unit with the Sniper Team option can be trained as counter-snipers. This allows them to target enemy units with the Hard to Target Special rule (usually enemy Recon Infantry) at ranges beyond 12\"."
      },
      {
        "id": "fire-support",
        "name": "Fire Support",
        "cost": 4,
        "text": "This unit can call in Fire Support as an ordered activation."
      },
      {
        "id": "green",
        "name": "Green",
        "cost": -1,
        "conflicts": [
          "sniper-team",
          "veterans"
        ],
        "text": "This unit cannot use the Skirmish rule. This cannot be combined with Sniper Team or Veterans."
      },
      {
        "id": "sniper-team",
        "name": "Sniper Team",
        "cost": 2,
        "conflicts": [
          "green",
          "veterans"
        ],
        "text": "This unit’s Shoot Value becomes 5+ / 24\", but it cannot use the Skirmish rule. This cannot be combined with Green or Veterans."
      },
      {
        "id": "veterans",
        "name": "Veterans",
        "cost": 2,
        "conflicts": [
          "green",
          "sniper-team"
        ],
        "text": "This unit Skirmishes at its normal Shoot Value. This cannot be combined with Green or Sniper Team."
      }
    ]
  },
  {
    "id": "primitive",
    "name": "Primitive Infantry",
    "cls": "infantry",
    "base": 1,
    "sp": 5,
    "role": "Pre-firearms cultures, knights, ghouls, brain-parasite hosts. Better in rough terrain.",
    "act": {
      "atk": "5+",
      "mov": "Free (6+)",
      "sho": "—",
      "cou": "4+"
    },
    "prof": {
      "atk": "5+",
      "def": "6+",
      "sho": "—",
      "arm": "1",
      "mov": "8\""
    },
    "special": [
      "Go To Ground",
      "Open Order"
    ],
    "xenoPolicy": {
      "type": "all"
    },
    "options": [
      {
        "id": "armoured",
        "name": "Armoured",
        "cost": 1,
        "text": "This unit is wearing primitive metal armour or has naturally resilient scales, plates or leathery skin. This unit counts as Armour 2 when Attacking or Defending, or against Shooting attacks from Primitive Infantry or Militia Rabble only; against all other sources of harm, they are their usual Armour 1."
      },
      {
        "id": "increased-squad",
        "name": "Increased Squad Size",
        "cost": 1,
        "sp": 10,
        "conflicts": [
          "mob"
        ],
        "text": "This unit begins the game with 10 Strength Points, and also increases its Attack Value to 4+ and its Defence Value to 5+. Its Shoot Value remains unchanged. This cannot be combined with Mob."
      },
      {
        "id": "mob",
        "name": "Mob",
        "cost": 2,
        "sp": 15,
        "conflicts": [
          "increased-squad"
        ],
        "text": "This unit begins the game with 15 Strength Points, and also increases its Attack Value to 3+ and its Defence Value to 5+. Its Shoot Value remains unchanged. This cannot be combined with Increased Squad Size."
      },
      {
        "id": "mobile",
        "name": "Mobile",
        "cost": 1,
        "text": "Increase this unit’s Maximum Movement by 4\". This unit still counts, for all rules purposes, as infantry. This cannot be combined with the Slow xeno rule."
      },
      {
        "id": "primitive-missiles",
        "name": "Primitive Missiles",
        "cost": 1,
        "conflicts": [
          "savages"
        ],
        "text": "This unit is armed with javelins, bows, slings, or perhaps muskets, granting it Shoot 6+ and Shoot Value 6 / 6\". However, against any opponents other than Greater or Lesser Xenomorphs, Primitive Infantry, or Militia Rabble, targets count as having one more point of Armour. Cannot be combined with Savages."
      },
      {
        "id": "savages",
        "name": "Savages",
        "cost": -1,
        "conflicts": [
          "primitive-missiles"
        ],
        "text": "This unit becomes subject to the rules for Wild Charges. Cannot be combined with Primitive Missiles."
      },
      {
        "id": "young-warriors",
        "name": "Young Warriors",
        "cost": -1,
        "text": "Courage becomes 5+."
      }
    ]
  },
  {
    "id": "militia",
    "name": "Militia Rabble",
    "cls": "infantry",
    "base": 1,
    "sp": 10,
    "role": "Conscripts, zombies, frenzied cultists. Disposable bodies and bullet shields.",
    "act": {
      "atk": "8+",
      "mov": "6+",
      "sho": "7+",
      "cou": "5+"
    },
    "prof": {
      "atk": "6+",
      "def": "6+",
      "sho": "6+ / 6\"",
      "arm": "1",
      "mov": "6\""
    },
    "special": [],
    "xenoPolicy": {
      "type": "allowOnly",
      "list": [
        "undead",
        "mechanoid",
        "demonic",
        "contagious",
        "hatred",
        "fearsome",
        "special-insertion",
        "stun-weapons"
      ]
    },
    "options": [
      {
        "id": "mob",
        "name": "Mob",
        "cost": 1,
        "sp": 15,
        "text": "This unit begins the game with 15 Strength Points, and also increases Shoot Value to 6 / 12\". This unit’s Attack Value and Defence Value remain unchanged."
      },
      {
        "id": "ravenous-horde",
        "name": "Ravenous Horde",
        "cost": 0,
        "text": "Remove this unit’s Shoot and Shoot Value, but increase its Attack to a (still-pathetic) 7+."
      }
    ]
  },
  {
    "id": "greater-xeno",
    "name": "Greater Xenomorphs",
    "cls": "infantry",
    "base": 4,
    "sp": 5,
    "role": "Alien queens, clawed bio-constructs, monsters. Usually single or reduced model units.",
    "act": {
      "atk": "5+",
      "mov": "Free (6+)",
      "sho": "—",
      "cou": "3+"
    },
    "prof": {
      "atk": "3+",
      "def": "6+",
      "sho": "—",
      "arm": "4",
      "mov": "10\""
    },
    "special": [
      "Open Order",
      "Ranger",
      "Wild Charge"
    ],
    "xenoPolicy": {
      "type": "all"
    },
    "options": [
      {
        "id": "demolitions",
        "name": "Demolitions",
        "cost": 2,
        "conflicts": [
          "high-powered-blades"
        ],
        "text": "During Attacks (whether Attacking or Defending), count the Armour of enemy vehicle units as being half its usual value. This cannot be combined with the effects of High-Powered Blades."
      },
      {
        "id": "cunning",
        "name": "Cunning",
        "cost": 2,
        "text": "This unit’s Defence Value becomes 5+."
      },
      {
        "id": "high-powered-blades",
        "name": "High-Powered Blades",
        "cost": 1,
        "conflicts": [
          "demolitions"
        ],
        "text": "During Attacks (whether Attacking or Defending), count the target’s Armour as being 1 point lower than usual."
      },
      {
        "id": "ponderous",
        "name": "Ponderous",
        "cost": 1,
        "conflicts": [
          "xeno-ranged"
        ],
        "text": "This unit loses the Wild Charge rule. This cannot be combined with Xenomorph Ranged Attack."
      },
      {
        "id": "xeno-ranged",
        "name": "Xenomorph Ranged Attack",
        "cost": 2,
        "conflicts": [
          "ponderous"
        ],
        "text": "This unit either has a ranged weapon or can spit acid, flame, or poison gas. Remove the Wild Charge rule and replace it with Shoot 6+ and Shoot Value 5+ / 18\". This unit can be further customised with Area Effect (+1 point per unit, ignore cover when Shooting), Armour-Piercing (+1 point per unit, -1 to enemy Armour when Shooting), Close Quarters Doctrine (-1 point per unit, reduce Shooting range to 12”) or Anti-Tank (+2 points per unit, halve enemy vehicle Armour during Shooting). This cannot be combined with Ponderous."
      },
      {
        "id": "xr-area",
        "name": "Area Effect",
        "cost": 1,
        "requires": "xeno-ranged",
        "text": "When using the Xenomorph Ranged Attack, this unit's Shooting targets gain no Armour bonus from cover."
      },
      {
        "id": "xr-ap",
        "name": "Armour-Piercing (ranged)",
        "cost": 1,
        "requires": "xeno-ranged",
        "conflicts": [
          "xr-at"
        ],
        "text": "When using the Xenomorph Ranged Attack, count the target's Armour as being 1 point lower than usual."
      },
      {
        "id": "xr-cqd",
        "name": "Close Quarters Doctrine (ranged)",
        "cost": -1,
        "requires": "xeno-ranged",
        "text": "Reduce the Xenomorph Ranged Attack's Shooting range to 12\"."
      },
      {
        "id": "xr-at",
        "name": "Anti-Tank (ranged)",
        "cost": 2,
        "requires": "xeno-ranged",
        "conflicts": [
          "xr-ap"
        ],
        "text": "When using the Xenomorph Ranged Attack against enemy vehicles, count the target's Armour as being half its usual value."
      }
    ]
  },
  {
    "id": "lesser-xeno",
    "name": "Lesser Xenomorphs",
    "cls": "infantry",
    "base": 2,
    "sp": 5,
    "role": "Fast, savage swarms. Insectoid, mammalian, mechanical, extra-dimensional, whatever bites.",
    "act": {
      "atk": "5+",
      "mov": "Free (6+)",
      "sho": "—",
      "cou": "4+"
    },
    "prof": {
      "atk": "4+",
      "def": "6+",
      "sho": "—",
      "arm": "3",
      "mov": "12\""
    },
    "special": [
      "Open Order",
      "Ranger",
      "Wild Charge"
    ],
    "xenoPolicy": {
      "type": "all"
    },
    "options": [
      {
        "id": "cunning",
        "name": "Cunning",
        "cost": 2,
        "text": "This unit’s Defence Value becomes 5+."
      },
      {
        "id": "high-powered-blades",
        "name": "High-Powered Blades",
        "cost": 1,
        "text": "During Attacks (whether Attacking or Defending), count the target’s Armour as being 1 point lower than usual."
      },
      {
        "id": "swarm",
        "name": "Swarm",
        "cost": 2,
        "sp": 10,
        "text": "This unit begins the game with 10 Strength Points, and also increases its Attack Value to 3+. Its Defence Value and Shoot Value remain unchanged."
      },
      {
        "id": "xeno-ranged",
        "name": "Xenomorph Ranged Attack",
        "cost": 2,
        "text": "This unit either has a ranged weapon or can spit acid, flame or poison gas. Remove the Wild Charge rule and replace it with Shoot 6+ and Shoot Value 5+ / 18\". This unit can be further customised with Area Effect (+1 point per unit, ignore cover when Shooting), Armour-Piercing (+1 point per unit, -1 to enemy Armour when Shooting), Close Quarters Doctrine (-1 point per unit, reduce Shooting range to 12\") or Anti-Tank (+2 points per unit, halve enemy vehicle Armour during Shooting)."
      },
      {
        "id": "xr-area",
        "name": "Area Effect",
        "cost": 1,
        "requires": "xeno-ranged",
        "text": "When using the Xenomorph Ranged Attack, this unit's Shooting targets gain no Armour bonus from cover."
      },
      {
        "id": "xr-ap",
        "name": "Armour-Piercing (ranged)",
        "cost": 1,
        "requires": "xeno-ranged",
        "conflicts": [
          "xr-at"
        ],
        "text": "When using the Xenomorph Ranged Attack, count the target's Armour as being 1 point lower than usual."
      },
      {
        "id": "xr-cqd",
        "name": "Close Quarters Doctrine (ranged)",
        "cost": -1,
        "requires": "xeno-ranged",
        "text": "Reduce the Xenomorph Ranged Attack's Shooting range to 12\"."
      },
      {
        "id": "xr-at",
        "name": "Anti-Tank (ranged)",
        "cost": 2,
        "requires": "xeno-ranged",
        "conflicts": [
          "xr-ap"
        ],
        "text": "When using the Xenomorph Ranged Attack against enemy vehicles, count the target's Armour as being half its usual value."
      }
    ]
  },
  {
    "id": "fighting-vehicle",
    "name": "Fighting Vehicle",
    "cls": "vehicle",
    "base": 6,
    "sp": 5,
    "heavy": true,
    "role": "Tanks, armoured walkers, self-propelled guns. Centrepiece support for an infantry force.",
    "act": {
      "atk": "6+",
      "mov": "Free (6+)",
      "sho": "6+",
      "cou": "3+"
    },
    "prof": {
      "atk": "6+",
      "def": "5+",
      "sho": "4+ / 18\"",
      "arm": "6",
      "mov": "8\""
    },
    "special": [
      "All-Terrain",
      "Anti-Tank",
      "Demolitions",
      "High-Powered Blades",
      "Line-Breaker",
      "Vehicle"
    ],
    "xenoPolicy": {
      "type": "all"
    },
    "options": [
      {
        "id": "anti-personnel",
        "name": "Anti-Personnel Specialism",
        "cost": -1,
        "text": "This unit is geared almost exclusively towards blowing up or mowing down infantry. Remove the Anti-Tank rule."
      },
      {
        "id": "area-effect",
        "name": "Area Effect",
        "cost": 2,
        "text": "This unit’s Shooting targets gain no Armour bonus from cover."
      },
      {
        "id": "armour-piercing",
        "name": "Armour-Piercing",
        "cost": 1,
        "text": "When Shooting (including when using the Firefight rule), count the target’s Armour as being 1 point lower than usual. You may not apply this rule at the same time as Anti-Tank."
      },
      {
        "id": "artillery",
        "name": "Artillery",
        "cost": 2,
        "conflicts": [
          "close-quarters"
        ],
        "text": "This unit’s Shoot Value becomes 4+ / 48\". If this vehicle targets an enemy that is within 12\" of a friendly unit that has not been activated this turn, the friendly unit may forgo its action this turn to act as spotters. Spotters improve the vehicle’s Shoot Value to 3+ / 48\" for this action only. Cannot be combined with Close Quarters Doctrine."
      },
      {
        "id": "close-quarters",
        "name": "Close Quarters Doctrine",
        "cost": -1,
        "conflicts": [
          "artillery"
        ],
        "text": "Reduce this unit’s Shoot Value to 4+ / 12\". Cannot be combined with Artillery."
      },
      {
        "id": "combat-engineering",
        "name": "Combat Engineering Vehicle",
        "cost": 1,
        "text": "This vehicle is fitted out with heavy equipment for clearing mines or demolishing obstructions. If it Attacks a building, the building only hits on Defence rolls of 6."
      },
      {
        "id": "indirect-fire",
        "name": "Indirect Fire",
        "cost": 1,
        "requires": "artillery",
        "text": "Artillery only. When using a friendly unit as spotters, this unit may Shoot at enemy that it cannot see, so long as the unit acting as spotters has line of sight to the target."
      },
      {
        "id": "light-armoured",
        "name": "Light Armoured Vehicle",
        "cost": -2,
        "text": "Reduce this unit’s Armour by 1 and remove the Demolitions and Line-Breaker rules."
      },
      {
        "id": "green-crew",
        "name": "Green Crew",
        "cost": -1,
        "conflicts": [
          "veteran-crew"
        ],
        "text": "This unit’s Shoot Value becomes 5+ / 18\" (5+ / 12\" with Close Quarters Doctrine, 5+ / 48\" with Artillery). This cannot be combined with Veteran Crew."
      },
      {
        "id": "veteran-crew",
        "name": "Veteran Crew",
        "cost": 2,
        "conflicts": [
          "green-crew"
        ],
        "text": "This unit can move and fire without the usual -1 penalty. This cannot be combined with Green Crew."
      },
      {
        "id": "walker",
        "name": "Walker",
        "cost": 2,
        "text": "This vehicle walks, by means bipedal, quadrupedal, or creepily crab-like. Its Maximum Movement is reduced by 2\", but its Attack Value becomes 4+. Walkers are able to Storm defences if they win an Attack action, while buildings they Attack do not get to Defend."
      }
    ]
  },
  {
    "id": "transport-vehicle",
    "name": "Transport Vehicle",
    "cls": "vehicle",
    "base": 4,
    "sp": 5,
    "heavy": true,
    "role": "Carries infantry to where they are needed. Armoured, but soft to anti-tank fire.",
    "act": {
      "atk": "6+",
      "mov": "Free (6+)",
      "sho": "6+",
      "cou": "4+"
    },
    "prof": {
      "atk": "6+",
      "def": "6+",
      "sho": "5+ / 12\"",
      "arm": "5",
      "mov": "10\""
    },
    "special": [
      "High-Powered Blades",
      "Transport (5)",
      "Vehicle"
    ],
    "xenoPolicy": {
      "type": "all"
    },
    "options": [
      {
        "id": "all-terrain",
        "name": "All-Terrain",
        "cost": 1,
        "text": "This unit does not halve its movement in rough terrain."
      },
      {
        "id": "armour-piercing",
        "name": "Armour-Piercing",
        "cost": 1,
        "text": "When Shooting (including when using the Firefight rule), count the target’s Armour as being 1 point lower than usual."
      },
      {
        "id": "transport-10",
        "name": "Transport (10)",
        "cost": 1,
        "text": "This vehicle can carry an infantry unit with up to 10 Strength Points. This replaces Transport (5)."
      },
      {
        "id": "line-breaker",
        "name": "Line-Breaker",
        "cost": 1,
        "text": "This vehicle can cross obstacles in the same way as a Fighting Vehicle."
      },
      {
        "id": "green-crew",
        "name": "Green Crew",
        "cost": -1,
        "text": "This vehicle’s Shoot Value becomes 6 / 12\"."
      },
      {
        "id": "walker",
        "name": "Walker",
        "cost": 2,
        "text": "This vehicle walks, by means bipedal, quadrupedal or creepily crab-like. Its Maximum Movement is reduced by 2\", but its Attack Value becomes 4+ and its Defence Value becomes 5+. Walkers are able to Storm defences if they win an Attack action, while buildings they Attack do not get to Defend. Walkers can be further customised with Demolitions (+2 points per unit, halve enemy vehicle Armour during Attacks, but cannot be combined with High-Powered Blades)."
      }
    ]
  },
  {
    "id": "softskin-vehicle",
    "name": "Soft-skin Vehicle",
    "cls": "vehicle",
    "base": 2,
    "sp": 5,
    "role": "Scout cars, civilian trucks, technicals. Fast and fragile until you bolt guns on.",
    "act": {
      "atk": "6+",
      "mov": "Free (6+)",
      "sho": "7+",
      "cou": "4+"
    },
    "prof": {
      "atk": "6+",
      "def": "6+",
      "sho": "6+ / 6\"",
      "arm": "3",
      "mov": "12\""
    },
    "special": [
      "Vehicle"
    ],
    "xenoPolicy": {
      "type": "except",
      "list": [
        "psychic",
        "crusader"
      ]
    },
    "options": [
      {
        "id": "all-terrain",
        "name": "All-Terrain",
        "cost": 1,
        "text": "This unit does not halve its movement in rough terrain."
      },
      {
        "id": "civilian",
        "name": "Civilian",
        "cost": -1,
        "conflicts": [
          "improvised-armour"
        ],
        "text": "This unit is a civilian vehicle, lacking in any armour. Reduce its Armour to 2. Cannot be combined with Improvised Armour."
      },
      {
        "id": "improvised-armour",
        "name": "Improvised Armour",
        "cost": 1,
        "conflicts": [
          "civilian"
        ],
        "text": "Heavy armour plating has been welded onto this vehicle, slowing its Maximum Movement by 2”, but increasing its Armour to 4."
      },
      {
        "id": "large-vehicle",
        "name": "Large Vehicle",
        "cost": 2,
        "sp": 10,
        "text": "This vehicle is a bus, oil tanker, combine harvester, or similarly bulky vehicle. Reduce its Maximum Movement by 2\", but increase Strength Points to 10."
      },
      {
        "id": "green-crew",
        "name": "Green Crew",
        "cost": -1,
        "text": "This unit’s Courage becomes 5+."
      },
      {
        "id": "scythes",
        "name": "Scythes",
        "cost": 1,
        "text": "Scythed wheels, spiked dozer blades, or meat hooks trailing on chains increases this unit’s Attack Value to 5+."
      },
      {
        "id": "technical",
        "name": "Technical",
        "cost": 2,
        "text": "This vehicle has weapons, possibly hastily bolted onto the chassis. Improve its Shoot to 6+ and Shoot Value to 5+ / 18\". Technicals can further be customised with Anti-Tank (+1 point per unit, halve the Armour of enemy vehicles in Shoot actions, but cannot be combined with Armour-Piercing), Armour-Piercing (+1 point per unit, -1 to enemy Armour during Shooting, but cannot be combined with Anti-Tank), Close Quarters Doctrine (-1 point per unit, reduce Shoot Value to 5+ / 12\"), or Engulfing (+1 point per unit, targets gain no benefit from cover during Shooting)."
      },
      {
        "id": "tech-at",
        "name": "Anti-Tank (technical)",
        "cost": 1,
        "requires": "technical",
        "conflicts": [
          "tech-ap"
        ],
        "text": "When using the Technical's weapons against enemy vehicles, count the target's Armour as half its usual value."
      },
      {
        "id": "tech-ap",
        "name": "Armour-Piercing (technical)",
        "cost": 1,
        "requires": "technical",
        "conflicts": [
          "tech-at"
        ],
        "text": "When using the Technical's weapons, count the target's Armour as being 1 point lower than usual."
      },
      {
        "id": "tech-cqd",
        "name": "Close Quarters Doctrine (technical)",
        "cost": -1,
        "requires": "technical",
        "text": "Reduce the Technical's Shoot Value to 5+ / 12\"."
      },
      {
        "id": "tech-engulf",
        "name": "Engulfing (technical)",
        "cost": 1,
        "requires": "technical",
        "text": "The Technical's Shooting targets gain no benefit from cover."
      },
      {
        "id": "transport-5",
        "name": "Transport (5)",
        "cost": 1,
        "conflicts": [
          "transport-10",
          "transport-15"
        ],
        "text": "This vehicle can carry an infantry unit with up to 5 Strength Points. Cannot be combined with Transport (10) or Transport (15). Copplestone Castings Assault Troopers (Heavy Infantry) on patrol. Transport Vehicles help you to move your units around the table swiftly"
      },
      {
        "id": "transport-10",
        "name": "Transport (10)",
        "cost": 2,
        "conflicts": [
          "transport-5",
          "transport-15"
        ],
        "text": "This vehicle can carry an infantry unit with up to 10 Strength Points. Cannot be combined with Transport (5) or Transport (15)."
      },
      {
        "id": "transport-15",
        "name": "Transport (15)",
        "cost": 2,
        "conflicts": [
          "transport-5",
          "transport-10"
        ],
        "text": "This vehicle can carry an infantry unit with up to 15 Strength Points, but reduces its Maximum Movement by 2\". Cannot be combined with Transport (5) or Transport (10)."
      },
      {
        "id": "walker",
        "name": "Walker",
        "cost": 2,
        "text": "This vehicle walks, by means bipedal, quadrupedal or creepily crab-like. Its Maximum Movement is reduced by 2\", but its Attack Value becomes 4+ and its Defence Value becomes 5+. Walkers are able to Storm defences if they win an Attack action, while buildings they Attack do not get to Defend. Walkers can be further customised with Demolitions (+2 points per unit, halve enemy vehicle Armour during Attacks, but cannot be combined with High-Powered Blades) or High-Powered Blades (+1 point, -1 to enemy Armour during Attacks, but cannot be combined with Demolitions)."
      }
    ]
  }
];

export const XENO_RULES = [
  {
    "id": "boarding-shields",
    "name": "Boarding Shields",
    "text": "Boarding actions are characterised by sudden, heavy torrents of short-range gunfire and the use of fearsome breaching tools to cut through bulkheads and bodies alike. As such, portable cover, in the form of hefty boarding shields, often with a loophole for the muzzle of the carrier’s own weapon, is extremely desirable. In lower-tech cultures, this xeno rule can be used to represent riot shields, particularly heavy wooden tower shields, or any other shield that both provides protection against incoming fire and is large enough to cover most of the wielder’s silhouette. Troops armed with Boarding Shields improve their Defence Value characteristic by 1 (e.g. from 4+ to 3+), and also gain +1 Armour against Shoot actions and Firefight reactions. In settings where these shields are particularly unwieldy, it may be appropriate to give the Slow xeno rule to units equipped in this way.",
    "costText": "2 points.",
    "cost": 2
  },
  {
    "id": "brutal-leader",
    "name": "Brutal Leader",
    "text": "One or more members of this unit keep their comrades in line through the application of carefully targeted violence. They may be fanatical priests, political officers, or wardens armed with the trigger for rest of the Detachment’s explosive collars. This unit, plus any other friendly units within 6\", may re-roll failed Courage tests (including for Rallying), once per test. This effect only applies if the Brutal Leader’s unit is not Suppressed (therefore this rule cannot be used to Rally the Brutal Leader’s own unit). A unit re-rolling a test because of a Brutal Leader will automatically lose a Strength Point as one of their number is executed or otherwise punished to provide an example of the fate awaiting cowards and traitors. This Strength Point loss is in addition to any caused by failed Courage tests and does not cause further Courage tests.",
    "costText": "1 point.",
    "cost": 1
  },
  {
    "id": "cloaking-device",
    "name": "Cloaking Device",
    "text": "Although not completely hidden from sight, this unit conceals itself using powerful psychic abilities, light-refracting stealth technology, or by having a gaseous form. The unit may only be targeted by ranged attacks within 12\" and gains +1 Armour against Shoot actions and Firefight reactions. Psychic powers and Attacks work as normal against cloaked units; assume there is some kind of visual disturbance or distortion that allows them to be seen at close quarters. Note that Recon Infantry achieve this same effect with their Hard To Target rule, and for fewer points.",
    "costText": "3 points.",
    "cost": 3
  },
  {
    "id": "combat-medic",
    "name": "Combat Medic",
    "text": "One or more members of this unit are trained in combat medicine. Should the unit, or a friendly one within 6\", lose Strength Points (except as the result of a failed Courage test or the Brutal Leader xeno rule), roll one die. Subtract 1 from the result if the unit with Combat Medic is at half Strength Points or below. On a roll of 4+, reduce the number of Strength Points lost by one. Combat Medic has no effect on units with the Demonic, Mechanoid, or Undead xeno rules (unless the unit with Combat Medic also has the matching xeno rule), and cannot be used when the unit with Combat Medic is Suppressed.",
    "costText": "2 points.",
    "cost": 2
  },
  {
    "id": "contagious",
    "name": "Contagious",
    "text": "Sometimes it’s better to hack off a bitten arm than risk infection by… whatever it is that’s animating those things. Every time this unit inflicts Strength Point loss on an enemy infantry unit during an Attack (whether Attacking or Defending), the Contagious unit regains one Strength Point that it has lost during the game. This may be a case of enemy casualties rising from the dead or switching sides after becoming possessed, or this xeno rule could also represent some kind of power-leeching or vampiric ability in the Contagious unit.",
    "costText": "1 point. Demonic or Undead infantry units only.",
    "cost": 1,
    "requiresAny": [
      "demonic",
      "undead"
    ],
    "infantryOnly": true
  },
  {
    "id": "crusader",
    "name": "Crusader",
    "text": "Advances in science and technology, and even encounters with alien species, may not be enough to dim the religious zeal of some warriors. Sometimes, the encountered aliens might be so powerful as to cause lesser beings to worship them as gods. Whether their faith is based on superstition or direct experience of godlike entities, it is unquestionable that this unit’s fervour carries them to greater heroics on the battlefield. A unit with the Crusader xeno rule added becomes more powerful when playing against opponents that are particularly reviled by their faith. Pick a target for the Crusader’s wrath: units with the Demonic, Mechanoid, or Undead xeno rule, or a particular species of alien (including, for aliens, humans), are all applicable choices. Followers of another religion, so long as that would be obvious on the battlefield such as in a war between two cults, is also a possibility. A Crusader unit may re-roll all misses once during Shooting and Attacks, including in Firefights and while Defending, when fighting against a unit of the targeted type. A Crusader may choose to ignore the effects caused by Fearsome units of the targeted type. The 4-point cost only applies when playing against a Detachment with one or more units of the targeted type present. If none of that unit type are in play, there is no additional point cost. A Detachment including a Crusader may not field units of its targeted type; deploying those units together tends to end badly.",
    "costText": "4 points / 0 points.",
    "tiers": [
      {
        "label": "Zealots",
        "cost": 4
      },
      {
        "label": "Worship a powerful alien",
        "cost": 0
      }
    ]
  },
  {
    "id": "demonic",
    "name": "Demonic",
    "text": "This xeno rule, more than most others, may not be suitable for all sub-genres of science fiction. However, exactly what qualifies as a demon isn’t necessarily bound to theology; whilst a demon could be a creature from fire-and-brimstone Hell, it could just as easily be an entity from a parallel plane of existence, or simply a creature from distant realms of space where the laws of physics work differently than in our small corner of a vast, uncaring universe. If you feel so inclined, angels can also use the Demonic xeno rule, although you should probably rename it something like Celestial or Angelic. Demonic units have the following additional rules: • Ignore the effects of Stun Weapons. • Ignore the effects of Fearsome units. • Count as having the Fearsome xeno rule, at no extra cost, representing the innate ‘wrongness’ of the Demonic creatures’ existence as much as the teeth, horns, and flaming skulls it may have. • Enemies who target Demonic units with psychic powers gain a +2 modifier to their activation roll, as the psychic activity disrupts their presence on the physical plane. • Any Strength Point loss inflicted on other Demonic units is doubled. Bear in mind that the same applies in return! • Once Demonic units lose physical integrity, they rapidly lose their grip on the mortal plane. A Demonic unit that has lost any of its starting Strength Points counts as having the Unstable xeno rule.",
    "costText": "0 points.",
    "cost": 0
  },
  {
    "id": "exploder",
    "name": "Exploder",
    "text": "This unit is either innately highly volatile (such as strange hydrogen-filled jellyfish or armoured guzzoline tankers) or is carrying explosives that it can detonate at will (such as with fanatical cultists or trained, but usually unsuspecting, animals strapped with grenades). The unit acts as normal until it explodes. Units with the 1-point version of this xeno rule will explode upon reaching 0 Strength Points, but before any models are removed from the table. Removal from the table by any other means (such as routing) means that the unit does not explode. Units with the 2-point version only explode by choice, as an ordered activation successful on a 5+. A failed activation test means that only a partial detonation occurs, destroying the unit but without harming anyone else. Remove the unit from play as a casualty. When the unit explodes, the explosion affects all buildings and units – friend and foe alike – within a 6\" radius of the exploding unit. This works as a Shoot action hitting on a 3+ (the number of dice rolled is equal to the Exploder’s Strength Points immediately prior to the action triggering the explosion), but you should roll separately for each unit within the blast zone. Once exploded, the Exploder unit is removed the table and counts as destroyed.",
    "costText": "1–2 points.",
    "tiers": [
      {
        "label": "Small charge",
        "cost": 1
      },
      {
        "label": "Large charge",
        "cost": 2
      }
    ]
  },
  {
    "id": "fanatical-discipline",
    "name": "Fanatical Discipline",
    "text": "This unit is courageous to the point of foolhardiness. Improve its Courage score by 1, to a maximum of 3+. For example, a unit with Courage 5+ becomes Courage 4+.",
    "costText": "2 points.",
    "cost": 2
  },
  {
    "id": "fearsome",
    "name": "Fearsome",
    "text": "In a universe of plasma bolts and clawed monstrosities, there are still some things that strike terror into the hearts of even the most hardened soldiers. Such units will affect all opposing troop types in the same way: • Courage tests caused as the result of an Attack (but not Shooting) by a Fearsome unit suffer an additional -1 to the total. Fearsome does not apply when the Fearsome unit is the Defender. • Demonic, Mechanoid, and Undead units, and those with the Fearsome xeno rule themselves, are not frightened of Fearsome opponents.",
    "costText": "2 points.",
    "cost": 2
  },
  {
    "id": "fearful",
    "name": "Fearful",
    "text": "Fearful units are really not suited to the battlefield. They may be civilians impressed into the army, yet thoroughly unimpressed by what they find there, or they could be a prey species with an innate need not to be near danger. Every Courage and Rally test suffers -1 to the total; if Attacked by a Fearsome unit, Courage tests are taken at -2.",
    "costText": "-1 point.",
    "cost": -1
  },
  {
    "id": "flying",
    "name": "Flying",
    "text": "This unit spends more time in the air than on the ground during combat, either due to possessing wings, jet packs, or bulging helium sacs. This brings with it both advantages and vulnerabilities: • A Flying unit may move over friends and enemies during its movement, but at the end of its move must adhere to the 1\" proximity rule just like any other unit. This is still a great advantage, as units may not usually interpenetrate. • Line of sight can be drawn to or from Flying units from anywhere on the tabletop, except where that passes through the roofs of buildings, forest canopies, or other forms of overhead cover; assume Flying units are positioned well above the table. Flying units can always draw line of sight to other Flying units. • Flying units ignore all terrain for Moving and Attacking, and they never benefit from cover. • Units targeted by a Flying unit will only benefit from cover if it is a building, woods, or some other overhead cover. • All measurement of distances involving Flying units is counted from the models’ bases, not the position of the models themselves. • Flying units with the Wild Charge rule will move over friendly units that would usually block the charge, to contact an enemy unit. • Flying units cannot be Attacked by units that do not also possess the Flying xeno rule, but can be targeted by Shooting. Range is measured from base to base. Flying units can Attack units on the ground as normal; they are swooping down to swipe with claws or make a strafing run before wheeling away again. Units they Attack can Defend as normal. • When Retreating, a Flying unit moves its full Maximum Movement, and may move over any other unit or terrain; this may result in it retreating off the table more quickly than you would wish!",
    "costText": "2 points.",
    "cost": 2
  },
  {
    "id": "force-field",
    "name": "Force Field",
    "text": "This unit is protected by an energy field, either psychic or technological in nature, that absorbs incoming weapons fire. • Class I force fields cost 1 point and cover the basic variety, providing only limited protection. When the unit loses Strength Points to Shooting (but not during Attacks), roll a die for each lost Strength Point. For each 6 rolled, reduce the number of Strength Points lost by one. • Class II force fields cost 2 points and work the same way as Class I fields, but are twice as effective, reducing lost Strength Points on a roll of 5 or 6. • Class III force fields cost, you guessed it, 3 points. They are top of the range, reducing lost Strength Points on results of 5 or 6, and protect against both Attacks and Shooting.",
    "costText": "1–3 points.",
    "tiers": [
      {
        "label": "Class I",
        "cost": 1
      },
      {
        "label": "Class II",
        "cost": 2
      },
      {
        "label": "Class III",
        "cost": 3
      }
    ]
  },
  {
    "id": "hatred",
    "name": "Hatred",
    "text": "Some believe that the future will be a place of bonding and mutual respect between cultures. The members of this unit do not subscribe to that view. Perhaps they’ve seen their foes do truly terrible things, lost close friends or relatives to the war, or maybe they’re just bigots. Before deployment, pick a target for your unit’s Hatred; units with the Demonic, Mechanoid, or Undead xeno rules, or a particular species of alien (including, for aliens, humans), are all applicable choices. Members of another religion or a different nationality, so long as that would be obvious on the battlefield, such as in a war between two cults, or a war between nations of the same species, is also a possibility. All of your units subject to Hatred must direct this towards the same target. For example, all of the units in your Detachment of secret government UFO hunters that have this rule could hate Zeta Reticulans; but you couldn’t have some hating Zeta Reticulans and some hating Pleiadians. Units with Hatred gain the Wild Charge special rule against enemy units they hate. Units with Hatred that already have the Wild Charge special rule automatically pass their Wild Charge tests against enemy units they hate.",
    "costText": "1 point.",
    "cost": 1
  },
  {
    "id": "hive-mind",
    "name": "Hive Mind",
    "text": "Some alien species have an innate psychic connection, while others are dominated by powerful psychics or sentient plants (which show up surprisingly often in science fiction) and operate as little more than puppets to their overlords. While the Detachment’s Commander is on the table and not Suppressed, all friendly units that have the Hive Mind xeno rule are counted as if they were within 12\" of the Commander model (i.e. they gain bonuses to Courage and activation tests, plus potentially certain Commander traits). If a unit with the Hive Mind rule is actually within 12\" of the Commander model, they also count as being Courage 0+. A Commander unit may not take this xeno rule; the Commander has a more developed sense of self-preservation, making them effectively a weak link if the enemy wants to break the psychic connection.",
    "costText": "1 point.",
    "cost": 1
  },
  {
    "id": "immobile",
    "name": "Immobile",
    "text": "Artillery, fixed turret emplacements, and many plant-based aliens tend not to move much. With this xeno rule, a unit loses its ability to initiate Move and Attack actions, and is automatically routed if forced to Retreat. As Immobile units cannot take Move actions, they cannot board or disembark a transport vehicle. Although immobile artillery, for example, is usually towed into place, the time taken to prepare such weapons for firing means that it is assumed to have occurred prior to the game beginning. If you want a towed light artillery piece, consider Support Infantry with the Slow xeno rule instead. Immobile units cannot move onto the table after the start of Turn 1, unless they also have the Special Insertion xeno rule to enter play via parachute, teleportation, or some other unorthodox means. Mantic Games Plague Detachment – looking at them you just know",
    "costText": "-2 points.",
    "cost": -2
  },
  {
    "id": "infiltrators",
    "name": "Infiltrators",
    "text": "Instead of deploying normally, this unit has snuck forwards under cover of night, preliminary bombardment, or by the simple expedient of looking like harmless civilians. After deployment, but prior to the start of the game, each unit of Infiltrators may make a single Move activation. This Move action does not require an activation test and you may roll a die and increase the number of inches each unit can move by the result. A unit of Infiltrators cannot use its pre-game Move action to embark or disembark from a vehicle. If both players have Infiltrators, the attacker should move all of their Infiltrators first.",
    "costText": "1 point.",
    "cost": 1
  },
  {
    "id": "inspirational-leader",
    "name": "Inspirational Leader",
    "text": "One member of this unit is a particularly inspiring leader, whether they are a well-respected NCO, evangelising priest, or an expert propagandist. This unit, plus any other friendly units within 6”, may re-roll failed Courage tests (including Rallying), once per test. This effect only applies if the Inspirational Leader’s unit is not Suppressed (therefore this rule cannot be used to Rally their own unit). This xeno rule stacks with Commander bonuses, albeit with a smaller radius of effect.",
    "costText": "2 points.",
    "cost": 2
  },
  {
    "id": "mechanoid",
    "name": "Mechanoid",
    "text": "This rule covers all manner of artificial units, whether they be AI-controlled vehicles, androids, robots, synthetics, or cyborgs that are more machine than man. Mechanoid units have the following additional rules: • Ignore the effects of Stun Weapons. • Mechanoids follow their programming unfailingly, but struggle with unexpected events outside their programming and objectives. Each unit may have an additional Free Action from the following: Attack, Move or Shoot. However, they suffer a -1 modifier to any ordered activation tests. • Mechanoids never take Courage tests, and so never become Suppressed or forced to rout. However, they become significantly less effective as they accumulate damage. Mechanoid units at half Strength Points or below lose all their Free Actions; such actions then count as ordered activations. Furthermore, a Mechanoid unit at half Strength Points or below that rolls a double on a failed activation roll suffers a critical system failure and undergoes emergency shutdown; immediately counting as destroyed.",
    "costText": "0 points.",
    "cost": 0
  },
  {
    "id": "mercenary",
    "name": "Mercenary",
    "text": "It’s cheaper to hire mercenaries than it is to maintain a standing army. Better yet, if they do anything unsavoury, you can deny issuing any such order. Especially when you actually did. The downside of fielding Mercenary units is that they’re often somewhat unreliable. Roll a die for each Mercenary unit in your Detachment before the game begins, after determining Attacker and Defender but prior to deployment. It’s not compulsory to add this xeno rule to every unit in your force that fights as mercenaries; more reliable (or boring) mercenaries can just be treated as regular units. MERCENARY TABLE Die roll Effect 1 AWOL: Perhaps your mercenaries are off raiding somewhere (hopefully enemy territory!), sleeping off the result of spending their wages last night, or have just taken their money and run. Whatever the case, they are not where they ought to be. You cannot use the unit in this battle, but they do not count as casualties for scenario victory purposes. 2 Late: Maybe they’re just unreliable, or maybe you should have paid for the truck to carry their supplies after all. You can see them in the distance, but the enemy are somewhat nearer, so you’ll have to start without them. Roll a die; the result is the earliest turn on which the unit can arrive at the battle. Once that turn arrives, they may make a Move action to come onto the table from your deployment edge (or somewhere else suitable if that’s not appropriate to the scenario). Remember to dock their pay accordingly. 3 Reluctant: They’re just not in the mood today, possibly due to hangovers. The unit suffers a -1 modifier to all Attack and Shoot ordered activations. 4 Eager: The mercenaries are well-motivated and keen to provide value for money. They gain a +1 modifier to all Attack and Shoot ordered activation rolls. 5 Bloodthirsty: Or maybe just drunk. The unit gains the Wild Charge rule. If it already has the Wild Charge rule, it now automatically passes any Wild Charge tests without needing to roll. 6 Raiders: On their contractually obligated day off, the mercenaries have been raiding enemy supply lines for a quick buck. Roll a die; the cheapest unit from the enemy’s Detachment loses that many Strength Points prior to the game beginning, either due to casualties or because soldiers had to be abstracted to guard against further raids. The enemy unit cannot be reduced to less than 1 Strength Point by this result; nor does the damage cause a Courage test.",
    "costText": "-1 point.",
    "cost": -1
  },
  {
    "id": "mono-molecular-blades",
    "name": "Mono-Molecular Blades",
    "text": "Science fiction throws up various excuses for keeping melee weapons viable in a universe of plasma cannons and orbital bombardments; one of these is by making the swords and axes themselves high- tech. This xeno rule doesn’t just cover blades that have been sharpened to an edge one molecule thick, but also those with chainsaw teeth, disruption fields, electrical pulses, neurotoxin dispensers, or diamond-hardened edges, as well as laser swords, pain gauntlets, and any other variety of melee- focused sci-fi weaponry, so long as it abides by either the laws of physics or the rule of cool. When fighting during Attacks, whether as Attacker or Defender, any 6s rolled by this unit count as two hits, rather than the usual one.",
    "costText": "2 points.",
    "cost": 2
  },
  {
    "id": "psychic",
    "name": "Psychic",
    "text": "Psychics are a part of many science fiction universes, although may not be appropriate for ‘harder’ predictions of the future. This xeno rule can also be used to represent wizards and other magic- users in more off-beat, science fantasy settings. One or more members of the unit can Manifest psychic powers on the battlefield, the potency of which depends on how many points have been spent on this xeno rule: • Delta-Class (1 point): The unit has access to one psychic power. • Gamma-Class (2 points): The unit has access to two psychic powers. • Beta-Class (3 points): The unit has access to three psychic powers. • Alpha-Class (4 points): The unit has access to three psychic powers and increases the range of all powers by 6\". In addition to actual psychic powers, a Psychic unit’s Shoot, Attack, Defence and Armour values may also represent psychic activity rather than literal weaponry, so a particularly powerful Psychic could be represented by, for example, Elite or Support Infantry without actually having any high- tech military equipment or training. Such telekinetic or pyrokinetic Attacks and Shooting do not count as being of psychic origin in game terms. A Psychic unit should select its powers from the list below prior to the scenario being chosen. This is not a fair fight! A lone OutRim Coalition trooper faces off against a ‘Crusties’ Combat Walker. The trooper might try going to ground. 15mm miniatures by Ground Zero Games. Painted by Paul Williams and Chris Ramsey, photographed for GZG by John Treadaway. Manifesting a Psychic Power Using a psychic power requires an ordered activation with a roll of the power’s Difficulty or better. If the Psychic unit is Suppressed or removed from play, any ongoing psychic effects end immediately. A unit that is at half Strength or below (5 or 2 Strength Points) has a -1 modifier to its activation test for Manifesting psychic powers. A unit targeted by a psychic power must be within range and line of sight of the Manifesting unit; any such unit of the Psychic unit’s choice may be chosen. A unit currently affected by a psychic power with an extended duration cannot be targeted by another power other than Annulment. A Psychic unit may never have more than one psychic power active at any one time. If a unit wishes to Manifest a new psychic power while an earlier one is still ongoing, the original psychic power is cancelled with immediate effect before testing to activate the new psychic power. Making Your Own Powers Feel free to create your own powers, but always check with your opponent before using them in a game. If your new power seems overpowered, experiment with increasing the power’s Difficulty or having it count as two psychic power ‘slots’ (for example, a Beta-Class Psychic who takes the Uber-Death-Killy-Blast psychic power might only be allowed a total of two powers, rather than the usual three). We recommend focusing powers on modifying the current mechanics of the rules, rather than introducing entirely new concepts. This helps to ensure that psychic powers remain just one option alongside Musclebound Soldiers Wearing Vests and Chitinous Arachnids With Big Claws, rather than a battle-dominating troop type. THE PSYCHIC POWERS TABLE Power Name Difficulty Target Duration Effect Mental 6+ Friendly unit Until the start of If the target unit fails its next Command within 18\". the player’s next ordered activation, it may activation phase, immediately re-roll the test or until used. once. The power’s effects end immediately, whether the re- roll is successful or not. Soothed Mind 6+ Friendly unit Until the start of The target unit may re-roll all within 18\". the player’s next failed Courage tests, once per activation phase. test. Summoner 6+ Any friendly Instantaneous. Place the target unit onto the unit with table anywhere within 12\" of the Special Manifesting unit, but at least 6” Insertion from any enemy units. and held in reserve. THE PSYCHIC POWERS TABLE Power Name Difficulty Target Duration Effect Psychic 7+ Friendly Instantaneous. Restore 1 lost Strength Point Healing infantry unit to a friendly infantry unit, as within 18\". long as it does not have the Mechanoid xeno rule. Machine 7+ Friendly Instantaneous. Restore 1 lost Strength Point Friend vehicle or to a friendly vehicle unit Mechanoid or infantry unit with the unit within Mechanoid xeno rule. 18\". Visions of 7+ Enemy unit Until the unit Suppresses the target unit. Terror within 18\" Rallies. May not be used on an already that is not Suppressed unit. Suppressed. Paralysis 7+ Enemy unit Until the end of Any movement or combat the within 18\". the target’s next target unit is involved in counts activation phase. as in rough terrain; this does not affect any other units. If the target unit moves into ‘real’ rough terrain, movement is reduced to ¼ of normal speed. Concealment 7+ Self or Until the end of The minds of the enemy are friendly unit the target’s next clouded, making it difficult for within 18\". activation phase. them to perceive the target unit. the target unit can only be targeted by Attacks or Shooting from within 12\" of it. Guiding Eye 7+ Self or Until the start of The target unit may re-roll all friendly unit the player’s next failed Shoot or Firefight dice within 18\". activation phase. (once per action). Guiding Hand 7+ Self or Until the start of The target unit may re-roll all friendly unit the player’s next failed Attack or Defence dice within 18\". activation phase. (once per Attack). Psychic Shield 7+ Self or Until the start of The target unit’s Armour is friendly unit the player’s next increased by 1. within 18\". activation phase. Transportation 7+ Self or any Instantaneous. Roll two dice. The target unit within unit is moved, whether by 18\". teleportation, telekinesis, or portals ripped in space-time, up to that many inches in a direction chosen by the Manifesting unit’s player. Annulment 8+ One unit Instantaneous. Cancel the effect of any currently psychic powers currently affected by a affecting the target unit psychic power with a duration other than within 18\". ‘Instantaneous’.",
    "costText": "1–4 points.",
    "tiers": [
      {
        "label": "1 power",
        "cost": 1
      },
      {
        "label": "2 powers",
        "cost": 2
      },
      {
        "label": "3 powers",
        "cost": 3
      },
      {
        "label": "4 powers",
        "cost": 4
      }
    ]
  },
  {
    "id": "psychic-hazards",
    "name": "Psychic Hazards",
    "text": "Psychic powers may be risky to use, with hazards ranging from bleeding eyes or shrivelled limbs, right up to exploding heads and full-on possession by extra-dimensional entities. A unit with the Psychic Hazards xeno rule will suffer Strength Point loss if it rolls a double on an activation test to Manifest a psychic power. If the activation test is successful, the power is still Manifested, although should the Manifesting unit be Suppressed or destroyed by the loss of Strength Points, any effects of the psychic power will end immediately. The number of Strength Points lost is equal to the number rolled on one of the activation test dice, so a double-4 would result in the loss of four Strength Points.",
    "costText": "-1 point. Psychic units only.",
    "cost": -1,
    "requiresXeno": "psychic"
  },
  {
    "id": "psychic-resistance",
    "name": "Psychic Resistance",
    "text": "Some species are psychically ‘blunt’, either because their minds are particularly unlike those of other species, so psychics struggle to manipulate them, or because they somehow radiate an anti- psychic aura that neutralises or disrupts nearby psychic fields. If this unit is successfully targeted by a psychic power, whether friendly or hostile, roll one die. On a result of 4 or more, the psychic power has no effect. The activation roll used to Manifest the power still counts as a success. This xeno rule has no effect against Attacks or Shooting by a Psychic enemy unit, even when they represent the unit’s psychic abilities; a telekinetically hurled rock is moving under the influence of physics, not brain-magic, when it hits you, while a biomancer’s electricity is still electricity, however it was first generated.",
    "costText": "1 point.",
    "cost": 1
  },
  {
    "id": "psychic-species",
    "name": "Psychic Species",
    "text": "Most exhibitors of psychic power are rare within their species, either being mutants, practitioners of esoteric rites, or artificially modified from the species baseline. However, a few species are innately psychic, Manifesting psychic powers as easily as other species breathe or move around. Units with this xeno rule gain the ability to Manifest certain psychic powers as a Free Action, depending on the number of points invested in Psychic Species: • 1 point allows psychic powers of Difficulty 6+ to be Manifested as a Free Action. • 2 points allows psychic powers of Difficulty 6+ or 7+ to be Manifested as a Free Action. • 3 points allows all psychic powers to be Manifested as a Free Action. Even if the entire Detachment is made up of members of the same species, only those with the Psychic xeno rule have any reason to take Psychic Species.",
    "costText": "1–3 points. Psychic units only.",
    "tiers": [
      {
        "label": "Tier 1",
        "cost": 1
      },
      {
        "label": "Tier 2",
        "cost": 2
      },
      {
        "label": "Tier 3",
        "cost": 3
      }
    ],
    "requiresXeno": "psychic"
  },
  {
    "id": "regeneration",
    "name": "Regeneration",
    "text": "Some creatures have incredible regenerative abilities. As an ordered activation, succeeding on a 7+, this unit can restore 1 Strength Point it has previously lost, for any reason, during the game. This cannot take the unit above its initial Strength Point total.",
    "costText": "1 point.",
    "cost": 1
  },
  {
    "id": "skimmer",
    "name": "Skimmer",
    "text": "This unit is equipped with short-range jet packs, hoverboards, anti-gravity motors, localised teleportation, or similar. When it moves, including during Retreats and Attacks, the unit can ignore rough and impassable terrain, gliding straight over it. The unit may not end its move in impassable terrain.",
    "costText": "1 point.",
    "cost": 1
  },
  {
    "id": "slow",
    "name": "Slow",
    "text": "For whatever reason, whether short legs, heavy armour and equipment, or reluctance to fight, this unit is particularly slow. Reduce its Maximum Movement value by 2\". This cannot be combined with the Mobile option available to some units.",
    "costText": "-1 point.",
    "cost": -1
  },
  {
    "id": "special-insertion",
    "name": "Special Insertion",
    "text": "This xeno rule represents troops entering battle via teleportation, tunnelling (whether through the ground or between universes), orbital drop vehicles, grav-belts, jet packs, or even old-fashioned parachutes, allowing them to deploy over key objectives or behind enemy lines. Special Insertion is also a convenient way of allowing Demonic or Undead units to be summoned to the battlefield by gibbering Psychic cultists. Special Insertion units begin the game in reserve and are not deployed with the rest of your Detachment. They deploy in one of two ways: • A Psychic unit that successfully Manifests the Summoner psychic power can place a single Special Insertion unit anywhere within 12\" of themselves, but at least 6\" away from any enemy units. Summoning units is risk-free, but the summoned unit cannot make an ordered activation during this activation phase, but can act as normal starting from your next activation phase. • A Special Insertion unit can be activated while off the table, but it can only make an ordered Move activation (even if Move is normally a Free Action for it). If successful, place the unit anywhere on the table, so long as it is not within 6” of an enemy unit. If unsuccessful, the unit can still be placed on the table, but if you do, you must roll a die and compare it to the unit’s Courage; if you roll below the unit’s Courage, it suffers the die result in Strength Point damage, which causes an immediate Courage test. You can choose not to deploy a Special Insertion unit on a failed activation test and not have it suffer any Strength Point damage; either way, as with any other ordered activation, the failure ends your activation phase. In an exception to the above requirement, if there are no other friendly units on the table (e.g. your entire Detachment has Special Insertion or you’ve just had a very bad game), the next Special Insertion unit to be activated off-table does not need to make an activation roll for its Move action. If the Special Insertion unit is a vehicle with the Transport ability, it may be deployed with a single unit of infantry as passengers, who do not need to also possess the Special Insertion rule.",
    "costText": "1 point.",
    "cost": 1
  },
  {
    "id": "stabilised-weaponry",
    "name": "Stabilised Weaponry",
    "text": "The difficulty of aiming while on the move and the desire of most soldiers to move into cover before shooting at the enemy mean that infantry have traditionally had to trade-off between mobility and firepower. In the far future, however, smart weapons, stabilised weapon harnesses, or powered armour can allow foot soldiers to fire accurately on the move. Units with Stabilised Weaponry can Move and Shoot as an ordered activation in the same way as vehicles.",
    "costText": "2 points. Infantry only.",
    "cost": 2,
    "infantryOnly": true
  },
  {
    "id": "stun-weapons",
    "name": "Stun Weapons",
    "text": "Some civilised cultures utilise less-lethal weaponry, ranging from simple electro-shock batons and chemical incapacitants, up to exotic energy weapons that allow them to remove the enemy’s ability or willingness to fight without causing lasting harm. Less civilised cultures may use the same weapons, but only because it makes their victims easier to slaughter afterwards. This xeno rule applies to both a unit’s Attack and Shoot actions. Hits from Stun Weapons are treated as normal, but do not cause Strength Point loss. Instead, any ‘casualties’ that would have been inflicted count as double for the purposes of Courage tests. Note that Attacks will need to cause enough hits that, under normal circumstances, they would cause Strength Point loss before a Courage test is required, although Shooting causes Courage tests if any hits are rolled, as normal. For example, a landing party from the Interplanetary Union fire stun pulses into a mob of Armour 3 Lesser Xenomorphs, rolling six hits. This would normally be enough to cause two Strength Points of damage, and thus inflicting a -2 penalty to the subsequent Courage test. Instead, no Strength Points are lost, but the Lesser Xenomorphs suffer a -4 penalty to their Courage test. Before any dice are rolled for a given Attack or Shoot action, a unit with Stun Weapons may choose to use lethal force if it prefers. Phasers have two settings, after all. Demonic, Mechanoid, and Undead units are immune to the effects of Stun Weapons. Copplestone Castings’ Bio-Chem Squad prepare to ‘clean up’ the area on their recovery mission. Painted and photographed by Kevin Dallimore.",
    "costText": "1 point.",
    "cost": 1
  },
  {
    "id": "teleport-jump",
    "name": "Teleport Jump",
    "text": "Some species are innately capable of translating between dimensions when they move, while other species develop technology that allows for short range teleportation, perhaps utilising colour- coded portals. When this unit takes a Move action, it can either choose to move normally, or it can teleport. If it chooses to teleport, choose the desired direction and then roll two dice; you may move the unit any number of inches up to the result. You do not have to move the full distance but may ignore all terrain effects (including impassable terrain). The unit must abide by unit cohesion and the 1\" unit spacing rule when it rematerializes, so, for example, cannot end its move split between two separate tunnels of a spaceship. If the unit cannot completely fit in an area it can reach with the Teleport Jump, then it must be placed further back along its route. If the distance rolled on the two dice is a double, the unit still moves as above, but something has gone horribly wrong during teleportation; the unit loses a number of Strength Points equal to the result of one of the dice (e.g. a double-4 will inflict four Strength Points of damage). This will cause a Courage test.",
    "costText": "1 point.",
    "cost": 1
  },
  {
    "id": "unarmed",
    "name": "Unarmed",
    "text": "Most units carry guns on the battlefield. Those that don’t tend to be monstrous creatures of one sort or another, such as the Xenomorph unit types or hordes of Militia Rabble zombies. Other units lack ranged weaponry because they’re technically non-combatants, such as medics, or are temporarily disarmed, as is the case with recently rescued prisoners. Furthermore, particularly heroic or pulpy sci-fi heroes and villains might prefer to fight with blades or have psychic powers instead of guns. Whatever the reason, the Unarmed xeno rule changes a unit’s Shoot and Shoot Value characteristics to ‘-’. Only units that normally have a ranged attack can take this xeno rule, and they can’t combine it with any other options or xeno rule that affect their Shooting abilities, unless (such as with Stun Weapons) it also affects Attacks.",
    "costText": "-1 point.",
    "cost": -1
  },
  {
    "id": "undead",
    "name": "Undead",
    "text": "This xeno rule may not be suitable for some science fiction settings, but reanimated corpses, whether due to alien viruses, cybernetic implants, psychic puppetry, or a straight-up zombie apocalypse, are still a recurring feature in the genre. Undead units have the following additional rules: • Ignore the effects of Fearsome units. • Ignore the effects of Stun Weapons. • Courage value of 0+. This means that your unit will never become Suppressed, but will still rout on a negative Courage Test result as enough of the unit take crippling injuries that they cease to be combat effective or the force reanimating them dissipates. • Due to their brittle structure, any excess hits they take during Attacks are rounded up (as opposed to down) when working out how many Strength Points are lost (for example, three hits on an Armour 2 unit will result in two Strength Points being lost rather than one). Shooting is resolved normally as bullets and shrapnel just pass harmlessly through organs that aren’t being used.",
    "costText": "0 points.",
    "cost": 0
  },
  {
    "id": "unstable",
    "name": "Unstable",
    "text": "The unit may be composed of cheap and shoddily assembled robots, powered by an explosive power core, or be pumped full of incredibly dangerous chemical enhancements, but whatever the cause, it is at real risk of suffering damage if it exerts itself too much. If this unit rolls a double on an activation roll, including for ‘out-of-sequence’ activations like Wild Charge or Firefight tests, but excluding Rally tests, the order passes or fails as normal, but the unit loses a number of Strength Points equal to the result of one of the dice (for example, a double-4 would result in losing four Strength Points). Mantic Games Veermyn Rumbler – a rather unconventional CHAPTER FIVE SCENARIOS Stand-up fights, bug hunts, and all stops in between! Xenos Rampant is a game about fighting small- scale battles between post-apocalyptic raiding forces, settlement militias, colonial expeditionary forces, special forces teams, bands of alien-worshipping cultists, and any other science fiction fighting force you can imagine. Sometimes these games will represent clashes between the entirety of the forces available to each side at the time of the battle, or your Detachments could simply be limited formations of a larger force, each playing their small part in a vast, planet-wide conflict, or even an all-out interstellar war. These scenarios can be played either as standalone skirmishes between isolated forces or as operations in a larger war without any real alteration to the rules. SETTING UP A GAME If you and your opponent want to play a particular scenario, or have come up with one of your own, have at it! Sweep And Clear is a simple one to try for your first game of Xenos Rampant, while Secret Mission is a straightforward battle with a few twists.",
    "costText": "-2 points.",
    "cost": -2
  }
];

export const SPECIAL_RULES = {
  "Back Into The Fray": {
    flavor: "Elite troops treat a fall-back as nothing more than a better run-up to the next assault.",
    rule: "On a turn this unit makes a successful Rally action, it may also take an ordered activation. That activation still needs an activation test, even for an action that would normally be a Free Action.",
  },
  "Firefight": {
    flavor: "Veterans keep their heads up and shoot back the instant they are fired on.",
    rule: "This unit may attempt a Firefight reaction against the first enemy that fires on it each turn, provided that shooter is within this unit's own Shoot Value range. The reaction needs an activation test of 7+; on a success this unit rolls to hit the shooter too, before either side removes Strength Points.",
  },
  "Ranger": {
    flavor: "At home in the wild, they fight through undergrowth as if it were open ground.",
    rule: "This unit uses its normal Attack, Defence and Armour profile when fighting in rough terrain.",
  },
  "Go To Ground": {
    flavor: "Rather than push on, they drop flat and ride out the incoming fire.",
    rule: "Instead of moving during a Move action, this unit may Go To Ground. It gains Gone To Ground status: +1 Armour against Shooting, including Fire Support, on top of any cover, and its Defence Value counts as 5+ if Attacked. The status is lost the moment the unit takes any action or becomes Suppressed.",
  },
  "Counter-Charge": {
    flavor: "Berserkers would sooner meet a charge head-on than wait to receive it.",
    rule: "When an enemy infantry unit with Maximum Movement equal to or less than this unit's has rolled a successful Attack against it, but before that enemy moves, this unit may test for a Counter-Charge: an Attack at 7+. On a success it charges half its Maximum Movement into contact and both units count as Attacking. On a failure it stands and counts as Defending. It may not Counter-Charge while Suppressed.",
  },
  "Open Order": {
    flavor: "They keep loose and pick their footing, never bunched tightly enough to be slowed.",
    rule: "This unit does not halve its movement in rough terrain.",
  },
  "Wild Charge": {
    flavor: "Blood up, they surge at the nearest enemy whether ordered to or not.",
    rule: "This unit is subject to the rules for Wild Charges.",
  },
  "Spotters": {
    flavor: "A second pair of eyes calls the fall of shot right onto the target.",
    rule: "If this unit targets an enemy within 12\" of a friendly unit that has not activated this turn, that friendly unit may forgo its own action to spot, improving this unit's Shoot Value to 3+ for that action. Unless this unit has Indirect Fire, it must still draw line of sight to the enemy.",
  },
  "Never Attacks": {
    flavor: "Gun crews are built to shoot, not to wade into a melee.",
    rule: "This unit cannot take Attack actions. If it somehow gains Wild Charge and must act in the Wild Charge phase, it makes a Shoot action at the target instead of an Attack.",
  },
  "Hard to Target": {
    flavor: "Ghosting from cover to cover, they are gone before a gun can settle on them.",
    rule: "This unit counts as Armour 2 against Shoot actions and may only be targeted by enemies within 12\".",
  },
  "Skirmish": {
    flavor: "They fight on the move, shooting as they slip from one position to the next.",
    rule: "As an ordered activation on a 7+, this unit may both Move up to half its Maximum Movement and Shoot, in either order. Its Shoot Value counts as 6+ / 12\" while Skirmishing.",
  },
  "All-Terrain": {
    flavor: "Tracks, legs or grav-plates carry it over ground that would bog others down.",
    rule: "This vehicle does not halve its movement in rough terrain.",
  },
  "Anti-Tank": {
    flavor: "Built to crack armour, its guns punch straight through a hull.",
    rule: "When Shooting at enemy vehicles, including during a Firefight, count the target's Armour as half its usual value. It cannot be combined with Armour-Piercing.",
  },
  "Demolitions": {
    flavor: "Breaching charges and cutting gear make short work of a war machine up close.",
    rule: "During Attacks, whether Attacking or Defending, count the Armour of enemy vehicles as half its usual value. It cannot be combined with High-Powered Blades.",
  },
  "High-Powered Blades": {
    flavor: "Powered edges bite through plate that would turn an ordinary blow.",
    rule: "During Attacks, whether Attacking or Defending, count the target's Armour as 1 point lower than usual. It cannot be combined with Demolitions.",
  },
  "Line-Breaker": {
    flavor: "Walls, wire and parapets are just things to drive through.",
    rule: "This unit is not slowed by linear obstacles such as barricades, wire, low walls, fences or trench parapets. Where an obstacle could plausibly be crushed, remove a matching stretch of it after the unit passes over.",
  },
  "Vehicle": {
    flavor: "A machine of war, with all the strengths and blind spots that brings.",
    rule: "This unit is a vehicle and is subject to all the vehicle rules.",
  },
  "Transport (5)": {
    flavor: "Its hold carries a squad into the fight under armour.",
    rule: "This vehicle can carry one infantry unit of up to 5 Strength Points.",
  },
};

export const COMMANDER_TABLES = {
  "aggressive": {
    "label": "Aggressive",
    "blurb": "For Detachments geared towards engaging the enemy in Attacks.",
    "traits": [
      {
        "name": "Timid",
        "rule": "The Commander prefers to let others do the fighting. The Commander's unit may not be given an Attack order, but will still make Wild Charges if applicable."
      },
      {
        "name": "Insipid",
        "rule": "The Commander inspires no one to heroism and does not offer a Courage bonus to units within 12\"."
      },
      {
        "name": "Attack, Attack, Attack!",
        "rule": "The Commander's unit gains the Wild Charge rule; if it already has Wild Charge, it automatically passes any tests for it."
      },
      {
        "name": "Extreme Disciplinarian",
        "rule": "The Commander executes underperformers. The unit gains the Brutal Leader xeno rule, for free, with a range of 12\"."
      },
      {
        "name": "Brave",
        "rule": "The Commander's unit ignores the effects of Fearsome opponents."
      },
      {
        "name": "Fix Bayonets!",
        "rule": "Each turn, one unit within 12\" of the Commander model may treat Attack as a free action."
      }
    ]
  },
  "tactical": {
    "label": "Tactical",
    "blurb": "For troops that act a little more intelligently, when and where you want.",
    "traits": [
      {
        "name": "Indecisive",
        "rule": "Friendly units do not receive the +1 modifier to ordered activations when within 12\" of the Commander."
      },
      {
        "name": "Reactive",
        "rule": "You must subtract one from your roll to determine Attacker and Defender."
      },
      {
        "name": "Commanding",
        "rule": "You may reroll a failed Move, Attack or Shoot order within 12\" of the Commander model, once per turn."
      },
      {
        "name": "Manoeuvres",
        "rule": "Each turn, one unit within 12\" of the Commander model may treat Move as a free action."
      },
      {
        "name": "Shooting Drill",
        "rule": "Each turn, one unit within 12\" of the Commander model may treat Shoot as a free action."
      },
      {
        "name": "Hold The Line!",
        "rule": "Each turn, one unit within 12\" may ignore a compulsory Wild Charge and instead take an ordered action in your ordered activation phase."
      }
    ]
  },
  "strategic": {
    "label": "Strategic",
    "blurb": "For Commanders who would rather point at arrows on maps.",
    "traits": [
      {
        "name": "Incompetent Paper Pusher",
        "rule": "A box-ticking logistician. Your Detachment is 2 points smaller than it should be (e.g. 22 points for a 24-point game)."
      },
      {
        "name": "Half-Wit",
        "rule": "After deployment, roll one die for each of your non-Commander units. On a 1, that unit never received its orders and is removed from play (not a casualty). Only one unit fails to arrive per game."
      },
      {
        "name": "Wise",
        "rule": "Add or subtract 1 from your final total (whichever you prefer) when rolling to decide Attacker and Defender."
      },
      {
        "name": "Father To His Men",
        "rule": "You may reroll a Courage test within 12\" of your Commander, once per turn."
      },
      {
        "name": "Unpredictable",
        "rule": "In games where you deploy before the other player, you may swap the positions of up to three units after they have deployed."
      },
      {
        "name": "Logistician",
        "rule": "Your Commander's grasp of logistics gives you 2 extra points to spend on your Detachment."
      }
    ]
  },
  "warlord": {
    "label": "Warlord",
    "blurb": "For Commanders who like holding, and using, a massive gun.",
    "traits": [
      {
        "name": "Runt",
        "rule": "Your Commander's unit rolls one fewer die for all Attack and Shoot actions."
      },
      {
        "name": "Craven",
        "rule": "Your Commander's unit takes -1 to all Courage tests."
      },
      {
        "name": "Elite",
        "rule": "The Commander's unit may take one of Move, Shoot or Attack as an additional free action."
      },
      {
        "name": "Strong-Willed",
        "rule": "Your Commander's unit may not be targeted by enemy psychic powers."
      },
      {
        "name": "Crack Shot",
        "rule": "When Shooting (or using the Firefight rule), your Commander's unit may reroll up to two failed hit dice, once each."
      },
      {
        "name": "Champion",
        "rule": "During Attacks (whether attacking or defending), your Commander's unit may reroll up to two failed hit dice, once each."
      }
    ]
  }
};

export const BUDGET_PRESETS = [12, 18, 24, 30, 36];

export const UNIT_BY_ID = Object.fromEntries(UNIT_TYPES.map((u) => [u.id, u]));
export const XENO_BY_ID = Object.fromEntries(XENO_RULES.map((x) => [x.id, x]));

/* National traits: an optional per-detachment rule for the Weird War setting.
   Rules are the mechanical effect from Operation Werwolf (pp. 126-129). */
export const NATIONAL_TRAITS = [
  { id: "usa", name: "USA: Fire and Manoeuvre", rule: "All American infantry units have the Skirmish rule; units that can already Skirmish do so without the usual penalty. American vehicles add +1 to their activation tests to Move and Shoot in the same action." },
  { id: "ussr", name: "USSR: Quantity Has A Quality All Of Its Own", rule: "Whenever a Soviet unit is routed or destroyed, but not if it leaves the board willingly, roll a die. If the result is equal to or greater than that unit's points cost, the Detachment gains an identical, full-strength unit as reinforcements, which may enter play during the next Soviet activation phase." },
  { id: "british", name: "British Empire: Rifle Drill", rule: "A British unit can re-roll a single missed die in any Shoot action or Firefight reaction it takes. Applies to all troops of the British Empire and Commonwealth." },
  { id: "germany", name: "Germany: Prussian Efficiency", rule: "The first time each turn that an Imperial German unit fails an ordered activation test, its player may re-roll that test once. If the re-roll succeeds it no longer counts as failed and does not end the activation phase. Only one unit may attempt this re-roll each turn." },
  { id: "third-reich", name: "The Third Reich: The Dying Days", rule: "Against a Commander from the Western Allies, German units test Courage on one die only, but improve their Defence Value by one (home turf). Against Soviet, Werwolf, or other German Commanders, or when led by a Werwolf Commander, they keep the +1 Defence, test Courage as normal, and may re-roll failed Courage tests once per test." },
  { id: "werwolf", name: "Werwolf: Cornered Wolves", rule: "Werwolf units may re-roll any failed Courage test (once per test). They may not benefit from Courage or activation bonuses from a Commander whose national trait is not Werwolf (including regular Third Reich Commanders), nor are they affected by their Commander Traits." },
  { id: "japanese", name: "Japanese: Banzai!", rule: "Japanese units suffer from Wild Charge, but only ever make Courage tests on two dice; casualties do not reduce them to one die." },
  { id: "france", name: "France: Elan", rule: "French units gain a +1 bonus to Attack activation tests and count as having +1 Courage during Attacks in which they are the Attacker." },
];
export const NATIONAL_BY_ID = Object.fromEntries(NATIONAL_TRAITS.map((n) => [n.id, n]));
