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
  "role": "The best soldiers in the galaxy: armed to the teeth, clad in the heaviest armour, and knowing no fear.",
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
  "role": "The line infantry of professional armies, best at tying the enemy up in bloody firefights while others take the objectives.",
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
  "role": "Lightly armoured and manoeuvrable; made for capturing objectives or guarding positions, not slugging it out.",
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
  "role": "Melee-hungry warriors who rarely use their guns, except fired from the hip as they close in with bayonets fixed.",
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
  "role": "Crews for the heaviest weapons, concentrating fire on the enemy's armour and weak points, but poor in close combat.",
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
  "role": "Lighter than Light Infantry; they infiltrate the lines, harry supply columns and snipe command units, then vanish.",
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
  "role": "Warriors from pre-firearms cultures, or motivated but poorly equipped fighters a cut above the Militia Rabble.",
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
  "role": "Colonists and mechanics forced to pick up a gun; disposable troops, often fielded as bullet shields.",
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
  "role": "Alien queens, massive clawed bio-constructs and other beasts, usually fielded as Single or Reduced Model Units.",
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
  "role": "Packs of fast, savage non-humanoid creatures with a kill-and-or-eat-it approach to other species.",
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
  "role": "Tanks, walkers and self-propelled guns that support the infantry; always a Single Model Unit.",
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
  "role": "Carries infantry in relative safety to where they are needed; well armoured, but very vulnerable to anti-tank fire.",
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
  "role": "Scout vehicles and civilian cars and trucks: fast but thin-skinned, though deadly once fitted with guns.",
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
    "text": "This vehicle can carry an infantry unit with up to 5 Strength Points. Cannot be combined with Transport (10) or Transport (15)."
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
  "text": {
   "flavor": "Boarding actions are characterised by sudden, heavy torrents of short-range gunfire and the use of fearsome breaching tools to cut through bulkheads and bodies alike. Portable cover, in the form of hefty boarding shields, is extremely desirable.",
   "rule": "Improves this unit's Defence Value by 1 (e.g. from 4+ to 3+) and grants +1 Armour against Shoot actions and Firefight reactions."
  },
  "costText": "2 points.",
  "cost": 2
 },
 {
  "id": "brutal-leader",
  "name": "Brutal Leader",
  "text": {
   "flavor": "One or more members of this unit keep their comrades in line through the application of carefully targeted violence. They may be fanatical priests, political officers, or wardens armed with the trigger for the Detachment's explosive collars.",
   "rule": "This unit, plus any other friendly unit within 6\", may re-roll one failed Courage test (including Rallying) per test, so long as the Brutal Leader's unit is not Suppressed (it cannot use this to Rally itself). Whenever a re-roll is used this way, the re-rolling unit loses an extra Strength Point on top of any lost to the test; this extra loss does not trigger a further Courage test."
  },
  "costText": "1 point.",
  "cost": 1
 },
 {
  "id": "cloaking-device",
  "name": "Cloaking Device",
  "text": {
   "flavor": "Although not completely hidden from sight, this unit conceals itself using powerful psychic abilities, light-refracting stealth technology, or by having a gaseous form.",
   "rule": "This unit can only be targeted by ranged attacks within 12\", and gains +1 Armour against Shoot actions and Firefight reactions. Psychic powers and Attacks work against it as normal. Recon Infantry get the same effect for free via Hard to Target."
  },
  "costText": "3 points.",
  "cost": 3
 },
 {
  "id": "combat-medic",
  "name": "Combat Medic",
  "text": {
   "flavor": "One or more members of this unit are trained in combat medicine.",
   "rule": "Whenever this unit, or a friendly unit within 6\", loses Strength Points (except from a failed Courage test or the Brutal Leader rule), roll one die, subtracting 1 if the Combat Medic's unit is at half Strength Points or below. On a 4+, reduce the Strength Points lost by one. Has no effect on Demonic, Mechanoid, or Undead units unless the Combat Medic's unit shares that xeno rule, and cannot be used while the Combat Medic's unit is Suppressed."
  },
  "costText": "2 points.",
  "cost": 2
 },
 {
  "id": "contagious",
  "name": "Contagious",
  "text": {
   "flavor": "Sometimes it's better to hack off a bitten arm than risk infection by whatever it is that's animating those things.",
   "rule": "Whenever this unit inflicts Strength Point loss on an enemy infantry unit during an Attack (Attacking or Defending), it regains one Strength Point it has lost this game."
  },
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
  "text": {
   "flavor": "Advances in science and technology, and even encounters with alien species, may not be enough to dim the religious zeal of some warriors. Sometimes the aliens themselves might be so powerful as to cause lesser beings to worship them as gods.",
   "rule": [
    "Before deployment, pick a target: any unit with the Demonic, Mechanoid, or Undead xeno rule, a particular alien species (humans included), or a rival faith or nationality visibly opposed on the table.",
    "Against that target, it may re-roll all misses during Shooting and Attacks, including Firefights and while Defending, and ignores the effects of Fearsome units of the targeted type.",
    "The point cost only applies while the opposing Detachment includes a unit of the targeted type; otherwise it costs nothing.",
    "A Detachment fielding a Crusader may not itself include units of its targeted type."
   ]
  },
  "costText": "4 points / 0 points.",
  "tiers": [
   {
    "label": "Zealots",
    "cost": 4,
    "desc": "Costs 4 points, but only while the enemy actually fields a unit of your targeted type."
   },
   {
    "label": "Worship a powerful alien",
    "cost": 0,
    "desc": "Free: use this when your targeted type is a revered alien you worship rather than a hated foe."
   }
  ]
 },
 {
  "id": "demonic",
  "name": "Demonic",
  "text": {
   "flavor": "Whilst a demon could be a creature from fire-and-brimstone Hell, it could just as easily be an entity from a parallel plane of existence, or a creature from distant realms of space where the laws of physics work differently than in our small corner of the universe.",
   "rule": [
    "Ignores the effects of Stun Weapons and of Fearsome units, and counts as Fearsome itself at no extra cost.",
    "Enemies targeting it with a psychic power take a +2 modifier to their activation roll.",
    "Strength Point loss inflicted on another Demonic unit is doubled, in both directions.",
    "Once it has lost any Strength Points, it also counts as having the Unstable xeno rule."
   ]
  },
  "costText": "0 points.",
  "cost": 0
 },
 {
  "id": "exploder",
  "name": "Exploder",
  "text": {
   "flavor": "This unit is either innately highly volatile, such as strange hydrogen-filled jellyfish or armoured guzzoline tankers, or is carrying explosives that it can detonate at will.",
   "rule": [
    "Small charge (1 point): explodes automatically on reaching 0 Strength Points, before models are removed. It does not explode if removed some other way, such as routing.",
    "Large charge (2 points): explodes only by choice, as an ordered activation on a 5+; a failed test still destroys the unit with no further effect.",
    "When it explodes, treat it as a Shoot action hitting on 3+ against every unit and building within 6\", rolling a pool of dice per target equal to the Exploder's Strength Points just before it went off.",
    "The Exploder is then removed from play as destroyed."
   ]
  },
  "costText": "1–2 points.",
  "tiers": [
   {
    "label": "Small charge",
    "cost": 1,
    "desc": "Detonates automatically on reaching 0 Strength Points, before models are removed."
   },
   {
    "label": "Large charge",
    "cost": 2,
    "desc": "Detonates only by choice, as an ordered activation on a 5+."
   }
  ]
 },
 {
  "id": "fanatical-discipline",
  "name": "Fanatical Discipline",
  "text": {
   "flavor": "This unit is courageous to the point of foolhardiness.",
   "rule": "Improves this unit's Courage score by 1, to a maximum of 3+ (for example, Courage 5+ becomes 4+)."
  },
  "costText": "2 points.",
  "cost": 2
 },
 {
  "id": "fearsome",
  "name": "Fearsome",
  "text": {
   "flavor": "In a universe of plasma bolts and clawed monstrosities, there are still some things that strike terror into the hearts of even the most hardened soldiers.",
   "rule": [
    "Courage tests caused by its Attacks, but not its Shooting, suffer an additional -1, unless it is the one Defending.",
    "Demonic, Mechanoid, and Undead units, and units that are themselves Fearsome, are unaffected."
   ]
  },
  "costText": "2 points.",
  "cost": 2
 },
 {
  "id": "fearful",
  "name": "Fearful",
  "text": {
   "flavor": "Fearful units are really not suited to the battlefield. They may be civilians impressed into the army, or a prey species with an innate need not to be near danger.",
   "rule": "Every Courage and Rally test this unit takes suffers -1; if it is Attacked by a Fearsome unit, that penalty becomes -2 instead."
  },
  "costText": "-1 point.",
  "cost": -1
 },
 {
  "id": "flying",
  "name": "Flying",
  "text": {
   "flavor": "This unit spends more time in the air than on the ground during combat, either due to possessing wings, jet packs, or bulging helium sacs.",
   "rule": [
    "Ignores all terrain when Moving or Attacking and never benefits from cover; a target it Shoots only benefits from overhead cover such as buildings or woods.",
    "May move over friendly and enemy units, but must still obey the 1\" proximity rule at the end of its move.",
    "Can draw line of sight from and to anywhere on the table (except through building roofs, forest canopies, or other overhead cover), and always sees other Flying units.",
    "All distances to or from it are measured base to base.",
    "Using Wild Charge, it may fly over friendly units that would otherwise block the charge.",
    "It can only be Attacked by other Flying units, though it can still be Shot at, and it Attacks ground units normally, which Defend as usual.",
    "When Retreating, it moves its full Maximum Movement and may cross any unit or terrain, which can carry it off the table."
   ]
  },
  "costText": "2 points.",
  "cost": 2
 },
 {
  "id": "force-field",
  "name": "Force Field",
  "text": {
   "flavor": "This unit is protected by an energy field, either psychic or technological in nature, that absorbs incoming weapons fire.",
   "rule": [
    "Class I: when it loses Strength Points to Shooting (not Attacks), roll one die per point lost; each 6 cancels one.",
    "Class II: as Class I, but each 5 or 6 cancels a lost point.",
    "Class III: as Class II, and it protects against Attacks as well as Shooting."
   ]
  },
  "costText": "1–3 points.",
  "tiers": [
   {
    "label": "Class I",
    "cost": 1,
    "desc": "Lose a Strength Point to Shooting, roll a die per point; each 6 cancels one."
   },
   {
    "label": "Class II",
    "cost": 2,
    "desc": "As Class I, but each 5 or 6 cancels a lost Strength Point."
   },
   {
    "label": "Class III",
    "cost": 3,
    "desc": "As Class II, and it protects against Attacks as well as Shooting."
   }
  ]
 },
 {
  "id": "hatred",
  "name": "Hatred",
  "text": {
   "flavor": "Some believe that the future will be a place of bonding and mutual respect between cultures. The members of this unit do not subscribe to that view.",
   "rule": [
    "Before deployment, pick a target: any unit with the Demonic, Mechanoid, or Undead xeno rule, a particular alien species (humans included), or a rival faith or nationality visibly opposed on the table.",
    "Every unit in the Detachment with Hatred must share the same target.",
    "Against that target, units with Hatred gain Wild Charge; if they already have Wild Charge, they automatically pass Wild Charge tests against it."
   ]
  },
  "costText": "1 point.",
  "cost": 1
 },
 {
  "id": "hive-mind",
  "name": "Hive Mind",
  "text": {
   "flavor": "Some alien species have an innate psychic connection, while others are dominated by powerful psychics or sentient plants and operate as little more than puppets to their overlords.",
   "rule": "While the Detachment's Commander is on the table and not Suppressed, every friendly unit with Hive Mind counts as being within 12\" of the Commander for bonuses to Courage and activation tests (and Commander traits). A unit actually within 12\" of the Commander also counts as Courage 0+. The Commander's own unit may not take this xeno rule."
  },
  "costText": "1 point.",
  "cost": 1
 },
 {
  "id": "immobile",
  "name": "Immobile",
  "text": {
   "flavor": "Artillery, fixed turret emplacements, and many plant-based aliens tend not to move much.",
   "rule": "This unit cannot take Move or Attack actions, and automatically routs if it would be forced to Retreat. It cannot board or disembark a transport, since it cannot Move. It cannot enter play after the start of Turn 1 unless it also has Special Insertion."
  },
  "costText": "-2 points.",
  "cost": -2
 },
 {
  "id": "infiltrators",
  "name": "Infiltrators",
  "text": {
   "flavor": "Instead of deploying normally, this unit has snuck forwards under cover of night, preliminary bombardment, or by the simple expedient of looking like harmless civilians.",
   "rule": "After deployment but before the game begins, each Infiltrators unit may make one Move activation with no activation test required, rolling a die to add that many inches to the move. This pre-game move cannot embark or disembark a vehicle. If both players have Infiltrators, the attacker moves theirs first."
  },
  "costText": "1 point.",
  "cost": 1
 },
 {
  "id": "inspirational-leader",
  "name": "Inspirational Leader",
  "text": {
   "flavor": "One member of this unit is a particularly inspiring leader, whether they are a well-respected NCO, evangelising priest, or an expert propagandist.",
   "rule": "This unit, plus any other friendly unit within 6\", may re-roll one failed Courage test (including Rallying) per test, so long as the Inspirational Leader's unit is not Suppressed (it cannot use this to Rally itself). Stacks with Commander bonuses, though with a smaller radius."
  },
  "costText": "2 points.",
  "cost": 2
 },
 {
  "id": "mechanoid",
  "name": "Mechanoid",
  "text": {
   "flavor": "This rule covers all manner of artificial units, whether they be AI-controlled vehicles, androids, robots, synthetics, or cyborgs that are more machine than man.",
   "rule": [
    "Ignores the effects of Stun Weapons.",
    "May take one additional Free Action (Attack, Move, or Shoot), but takes a -1 modifier on ordered activation tests.",
    "Never takes Courage tests, so never becomes Suppressed or routed.",
    "At half Strength Points or below it loses all Free Actions (they become ordered activations), and a failed activation roll that comes up a double there causes a critical shutdown, destroying the unit."
   ]
  },
  "costText": "0 points.",
  "cost": 0
 },
 {
  "id": "mercenary",
  "name": "Mercenary",
  "text": {
   "flavor": "It's cheaper to hire mercenaries than it is to maintain a standing army. Better yet, if they do anything unsavoury, you can deny issuing any such order. The downside is that they're often somewhat unreliable.",
   "table": [
    {
     "roll": 1,
     "name": "AWOL",
     "flavor": "Not where they should be.",
     "text": "You cannot use the unit this battle, but it does not count as a casualty for scenario purposes."
    },
    {
     "roll": 2,
     "name": "Late",
     "flavor": "Held up somewhere.",
     "text": "Roll a die for the earliest turn it may arrive, then it enters with a Move from your deployment edge."
    },
    {
     "roll": 3,
     "name": "Reluctant",
     "flavor": "Just not in the mood.",
     "text": "-1 to all Attack and Shoot ordered activations."
    },
    {
     "roll": 4,
     "name": "Eager",
     "flavor": "Keen to earn their pay.",
     "text": "+1 to all Attack and Shoot ordered activations."
    },
    {
     "roll": 5,
     "name": "Bloodthirsty",
     "flavor": "Out for blood.",
     "text": "Gains Wild Charge, or passes those tests automatically if it already has the rule."
    },
    {
     "roll": 6,
     "name": "Raiders",
     "flavor": "They arrived early.",
     "text": "Roll a die; the cheapest enemy unit loses that many Strength Points before the game, never below 1 and without a Courage test."
    }
   ]
  },
  "costText": "-1 point.",
  "cost": -1,
  "table": [
   {
    "roll": 1,
    "name": "AWOL",
    "text": "Not where they should be. You cannot use the unit this battle, but it does not count as a casualty for scenario victory."
   },
   {
    "roll": 2,
    "name": "Late",
    "text": "Roll a die: that is the earliest turn the unit can arrive, entering with a Move action from your deployment edge."
   },
   {
    "roll": 3,
    "name": "Reluctant",
    "text": "Just not in the mood. The unit takes a -1 modifier on all Attack and Shoot ordered activations."
   },
   {
    "roll": 4,
    "name": "Eager",
    "text": "Keen to earn their pay. The unit gains +1 on all Attack and Shoot ordered activations."
   },
   {
    "roll": 5,
    "name": "Bloodthirsty",
    "text": "The unit gains Wild Charge; if it already has Wild Charge, it now passes those tests automatically."
   },
   {
    "roll": 6,
    "name": "Raiders",
    "text": "Roll a die: the cheapest enemy unit loses that many Strength Points before the game (never below 1, no Courage test)."
   }
  ]
 },
 {
  "id": "mono-molecular-blades",
  "name": "Mono-Molecular Blades",
  "text": {
   "flavor": "Science fiction throws up various excuses for keeping melee weapons viable in a universe of plasma cannons and orbital bombardments; one of these is by making the swords and axes themselves high-tech.",
   "rule": "During Attacks, whether Attacking or Defending, any 6s this unit rolls to hit count as two hits instead of one."
  },
  "costText": "2 points.",
  "cost": 2
 },
 {
  "id": "psychic",
  "name": "Psychic",
  "text": {
   "flavor": "Psychics turn up across science fiction, and can stand in for wizards or other magic-users in more fantastical settings.",
   "rule": "One or more members of the unit can Manifest psychic powers. Delta-Class knows one power, Gamma-Class two, Beta-Class three, and Alpha-Class three plus 6\" added to every power's range. Manifesting a power is an ordered activation needing the power's Difficulty or better, at -1 if the unit is at half Strength or below. Only one power can be active at a time, and powers are chosen before the scenario is picked. This unit's Shoot, Attack, Defence, and Armour may represent raw psychic force rather than weapons, though such Attacks and Shooting still don't count as psychic in game terms."
  },
  "costText": "1–4 points.",
  "tiers": [
   {
    "label": "Delta-Class",
    "sub": "1 power",
    "powers": 1,
    "cost": 1,
    "desc": "Knows one psychic power."
   },
   {
    "label": "Gamma-Class",
    "sub": "2 powers",
    "powers": 2,
    "cost": 2,
    "desc": "Knows two psychic powers."
   },
   {
    "label": "Beta-Class",
    "sub": "3 powers",
    "powers": 3,
    "cost": 3,
    "desc": "Knows three psychic powers."
   },
   {
    "label": "Alpha-Class",
    "sub": "3 powers, +6\" range",
    "powers": 3,
    "cost": 4,
    "desc": "Knows three powers, and adds 6\" to the range of every power."
   }
  ]
 },
 {
  "id": "psychic-hazards",
  "name": "Psychic Hazards",
  "text": {
   "flavor": "Psychic powers may be risky to use, with hazards ranging from bleeding eyes or shrivelled limbs, right up to exploding heads and full-on possession by extra-dimensional entities.",
   "rule": "If this unit rolls a double on an activation test to Manifest a power, it loses Strength Points equal to the number rolled (a double-4 costs four Strength Points), even though the power still Manifests on a success. If the unit is Suppressed or destroyed by that loss, any effect of the power ends immediately."
  },
  "costText": "-1 point. Psychic units only.",
  "cost": -1,
  "requiresXeno": "psychic"
 },
 {
  "id": "psychic-resistance",
  "name": "Psychic Resistance",
  "text": {
   "flavor": "Some species are psychically 'blunt', either because their minds are particularly unlike those of other species, or because they somehow radiate an anti-psychic aura that neutralises nearby psychic fields.",
   "rule": "Whenever this unit is targeted by a psychic power, friendly or hostile, roll one die; on a 4+ the power has no effect (the activation roll to Manifest it still counts as a success). Has no effect on Attacks or Shooting by a psychic unit, even when narratively powered by psychic ability."
  },
  "costText": "1 point.",
  "cost": 1
 },
 {
  "id": "psychic-species",
  "name": "Psychic Species",
  "text": {
   "flavor": "Most exhibitors of psychic power are rare within their species, but a few species are innately psychic, Manifesting powers as easily as other species breathe or move around.",
   "rule": "1 point lets this unit Manifest Difficulty 6+ powers as a Free Action. 2 points extends that to Difficulty 6+ or 7+. 3 points lets it Manifest any power as a Free Action."
  },
  "costText": "1–3 points. Psychic units only.",
  "tiers": [
   {
    "label": "Tier 1",
    "cost": 1,
    "desc": "Manifest Difficulty 6+ powers as a Free Action."
   },
   {
    "label": "Tier 2",
    "cost": 2,
    "desc": "Manifest Difficulty 6+ or 7+ powers as a Free Action."
   },
   {
    "label": "Tier 3",
    "cost": 3,
    "desc": "Manifest any power as a Free Action."
   }
  ],
  "requiresXeno": "psychic"
 },
 {
  "id": "regeneration",
  "name": "Regeneration",
  "text": {
   "flavor": "Some creatures have incredible regenerative abilities.",
   "rule": "As an ordered activation succeeding on a 7+, this unit restores one previously lost Strength Point (from any cause), never above its starting total."
  },
  "costText": "1 point.",
  "cost": 1
 },
 {
  "id": "skimmer",
  "name": "Skimmer",
  "text": {
   "flavor": "This unit is equipped with short-range jet packs, hoverboards, anti-gravity motors, localised teleportation, or similar.",
   "rule": "When moving, including during Retreats and Attacks, this unit ignores rough and impassable terrain. It may not end its move in impassable terrain."
  },
  "costText": "1 point.",
  "cost": 1
 },
 {
  "id": "slow",
  "name": "Slow",
  "text": {
   "flavor": "For whatever reason, whether short legs, heavy armour and equipment, or reluctance to fight, this unit is particularly slow.",
   "rule": "Reduces this unit's Maximum Movement by 2\". Cannot be combined with a Mobile option."
  },
  "costText": "-1 point.",
  "cost": -1
 },
 {
  "id": "special-insertion",
  "name": "Special Insertion",
  "text": {
   "flavor": "This xeno rule represents troops entering battle via teleportation, tunnelling, orbital drop vehicles, grav-belts, jet packs, or even old-fashioned parachutes, allowing them to deploy over key objectives or behind enemy lines.",
   "rule": [
    "Begins in reserve rather than deploying with the rest of the Detachment.",
    "A Psychic unit that Manifests the Summoner power can place one Special Insertion unit within 12\" of itself and at least 6\" from any enemy, with no activation test; the summoned unit cannot act until your next activation phase.",
    "Otherwise it can be activated from off the table with an ordered Move (even if Move is normally free). On a success, place it at least 6\" from any enemy; on a failure you may still place it, but first roll a die against its Courage: rolling below Courage inflicts that many Strength Points and a Courage test.",
    "If no other friendly unit is on the table, the next Special Insertion unit activated off-table needs no activation roll for its Move.",
    "A Special Insertion transport may bring one infantry unit in as passengers, even if that unit lacks Special Insertion."
   ]
  },
  "costText": "1 point.",
  "cost": 1
 },
 {
  "id": "stabilised-weaponry",
  "name": "Stabilised Weaponry",
  "text": {
   "flavor": "The difficulty of aiming while on the move has traditionally forced infantry to trade off mobility and firepower. In the far future, smart weapons, stabilised harnesses, or powered armour can allow foot soldiers to fire accurately on the move.",
   "rule": "This unit can Move and Shoot as a single ordered activation, the same way vehicles can."
  },
  "costText": "2 points. Infantry only.",
  "cost": 2,
  "infantryOnly": true
 },
 {
  "id": "stun-weapons",
  "name": "Stun Weapons",
  "text": {
   "flavor": "Some civilised cultures utilise less-lethal weaponry, from electro-shock batons and chemical incapacitants up to exotic energy weapons that remove the enemy's ability to fight without causing lasting harm. Less civilised cultures may use the same weapons only because it makes their victims easier to slaughter afterwards.",
   "rule": [
    "Applies to this unit's Attack and Shoot actions.",
    "Hits resolve as normal but never cause Strength Point loss; instead, count would-be casualties as double for the resulting Courage test.",
    "Attacks still need enough hits to have caused a Strength Point loss before a test is triggered; Shooting triggers a test on any hit, as normal.",
    "Before rolling any given Attack or Shoot, the unit may choose to use lethal force instead.",
    "Demonic, Mechanoid, and Undead units are immune to Stun Weapons."
   ]
  },
  "costText": "1 point.",
  "cost": 1
 },
 {
  "id": "teleport-jump",
  "name": "Teleport Jump",
  "text": {
   "flavor": "Some species are innately capable of translating between dimensions when they move, while other species develop technology that allows for short range teleportation, perhaps utilising colour-coded portals.",
   "rule": [
    "As a Move action, it may teleport instead of moving normally: choose a direction, roll two dice, and move up to that many inches, ignoring all terrain including impassable terrain (or less, if preferred).",
    "It must still obey unit cohesion and the 1\" spacing rule on arrival, and cannot end split across separate areas; if it does not fully fit where it lands, place it further back along its route.",
    "If the distance rolled is a double, it still moves, but loses Strength Points equal to one of the dice (a double-4 costs four) and takes a Courage test."
   ]
  },
  "costText": "1 point.",
  "cost": 1
 },
 {
  "id": "unarmed",
  "name": "Unarmed",
  "text": {
   "flavor": "Most units carry guns on the battlefield. Those that don't tend to be monstrous creatures, non-combatants such as medics, or units that have been temporarily disarmed.",
   "rule": "Changes this unit's Shoot and Shoot Value to '-'. Only a unit that would normally have a ranged attack may take this xeno rule, and it cannot be combined with any option or xeno rule that affects Shooting, unless (as with Stun Weapons) that rule also affects Attacks."
  },
  "costText": "-1 point.",
  "cost": -1
 },
 {
  "id": "undead",
  "name": "Undead",
  "text": {
   "flavor": "Reanimated corpses, whether due to alien viruses, cybernetic implants, psychic puppetry, or a straight-up zombie apocalypse, are a recurring feature in the genre.",
   "rule": [
    "Ignores the effects of Fearsome units and of Stun Weapons.",
    "Has a Courage value of 0+, so it never becomes Suppressed, though it still routs on a negative Courage test result.",
    "Excess hits taken during Attacks round up rather than down when working out Strength Point loss (three hits against Armour 2 costs two Strength Points, not one).",
    "Shooting is resolved normally."
   ]
  },
  "costText": "0 points.",
  "cost": 0
 },
 {
  "id": "unstable",
  "name": "Unstable",
  "text": {
   "flavor": "The unit may be composed of cheap and shoddily assembled robots, powered by an explosive power core, or pumped full of incredibly dangerous chemical enhancements, but whatever the cause, it is at real risk of suffering damage if it exerts itself too much.",
   "rule": "Whenever this unit rolls a double on any activation roll, including out-of-sequence ones like Wild Charge or Firefight (but not Rally tests), the order still succeeds or fails as normal, but the unit loses Strength Points equal to the result of one of the dice (a double-4 costs four Strength Points)."
  },
  "costText": "-2 points.",
  "cost": -2
 }
];
export const SPECIAL_RULES = {
 "Back Into The Fray": "On a turn this unit makes a successful Rally action, it may also take an ordered activation. That activation still needs an activation test, even for an action that would normally be a Free Action.",
 "Firefight": "This unit may attempt a Firefight reaction against the first enemy that fires on it each turn, provided that shooter is within this unit's own Shoot Value range. The reaction needs an activation test of 7+; on a success this unit rolls to hit the shooter too, before either side removes Strength Points.",
 "Ranger": "This unit uses its normal Attack, Defence and Armour profile when fighting in rough terrain.",
 "Go To Ground": "Instead of moving during a Move action, this unit may Go To Ground. It gains Gone To Ground status: +1 Armour against Shooting, including Fire Support, on top of any cover, and its Defence Value counts as 5+ if Attacked. The status is lost the moment the unit takes any action or becomes Suppressed.",
 "Counter-Charge": "When an enemy infantry unit with Maximum Movement equal to or less than this unit's has rolled a successful Attack against it, but before that enemy moves, this unit may test for a Counter-Charge: an Attack at 7+. On a success it charges half its Maximum Movement into contact and both units count as Attacking. On a failure it stands and counts as Defending. It may not Counter-Charge while Suppressed.",
 "Open Order": "This unit does not halve its movement in rough terrain.",
 "Wild Charge": "This unit is subject to the rules for Wild Charges.",
 "Spotters": "If this unit targets an enemy within 12\" of a friendly unit that has not activated this turn, that friendly unit may forgo its own action to spot, improving this unit's Shoot Value to 3+ for that action. Unless this unit has Indirect Fire, it must still draw line of sight to the enemy.",
 "Never Attacks": "This unit cannot take Attack actions. If it somehow gains Wild Charge and must act in the Wild Charge phase, it makes a Shoot action at the target instead of an Attack.",
 "Hard to Target": "This unit counts as Armour 2 against Shoot actions and may only be targeted by enemies within 12\".",
 "Skirmish": "As an ordered activation on a 7+, this unit may both Move up to half its Maximum Movement and Shoot, in either order. Its Shoot Value counts as 6+ / 12\" while Skirmishing.",
 "All-Terrain": "This vehicle does not halve its movement in rough terrain.",
 "Anti-Tank": "When Shooting at enemy vehicles, including during a Firefight, count the target's Armour as half its usual value. It cannot be combined with Armour-Piercing.",
 "Demolitions": "During Attacks, whether Attacking or Defending, count the Armour of enemy vehicles as half its usual value. It cannot be combined with High-Powered Blades.",
 "High-Powered Blades": "During Attacks, whether Attacking or Defending, count the target's Armour as 1 point lower than usual. It cannot be combined with Demolitions.",
 "Line-Breaker": "This unit is not slowed by linear obstacles such as barricades, wire, low walls, fences or trench parapets. Where an obstacle could plausibly be crushed, remove a matching stretch of it after the unit passes over.",
 "Vehicle": "This unit is a vehicle and is subject to all the vehicle rules.",
 "Transport (5)": "This vehicle can carry one infantry unit of up to 5 Strength Points.",
 "Vehicle Movement": {
  "rule": [
   "Moves only straight forwards or backwards, based on where the model points.",
   "May make any number of turns while moving; each turn of up to 90 degrees costs 2\" of movement.",
   "Reverses at half speed: 1\" backwards costs 2\" of forward movement.",
   "Cannot cross obstacles, unless it has Line-Breaker.",
   "May fire during a Move action.",
   "When it Retreats it moves its full Maximum Movement, turning or reversing whichever is most efficient."
  ]
 },
 "Vehicle Shooting": {
  "rule": [
   "Fires only at targets it can bring its guns to bear on: turrets fire in any direction, fixed guns cover the forward 180 degrees.",
   "May Move and Shoot in one ordered Move activation. Move is its Free Action, but shooting on the move needs an ordered activation test; on a pass it Moves and, before or after, Shoots at -1 to each die (on top of any range penalty)."
  ]
 },
 "Vehicle Melee": {
  "rule": [
   "Attacks only by moving straight forwards and cannot turn during the charge, so pre-position it. Walkers are exempt.",
   "In a vehicle-versus-infantry Attack the infantry always Retreats, whatever the result.",
   "If it Attacks a building, the building Defends, hitting on 4+; ramming solid structures is unwise without a Combat Engineering Vehicle."
  ]
 },
 "Severe Damage": {
  "rule": [
   "At half its starting Strength Points or below, it halves its Maximum Movement and takes -1 to all activation rolls."
  ]
 }
};
export const COMMANDER_TABLES = {
 "aggressive": {
  "label": "Aggressive",
  "blurb": "For Detachments geared towards engaging the enemy in Attacks.",
  "traits": [
   {
    "name": "Timid",
    "rule": "The Commander's unit may not be given an Attack order, but will still make Wild Charges if applicable.",
    "flavor": "The Commander prefers to let others do the fighting."
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
    "rule": "The unit gains the Brutal Leader xeno rule, for free, with a range of 12\".",
    "flavor": "The Commander executes underperformers."
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
    "rule": "Your Detachment is 2 points smaller than it should be (e.g. 22 points for a 24-point game).",
    "flavor": "A box-ticking logistician."
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
  "blurb": "For Commanders who like holding (and using) a massive gun.",
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


export const PSYCHIC_POWERS = [
  { name: "Mental Command", difficulty: "6+", target: "Friendly unit within 18\".", duration: "Until the start of your next activation phase, or until used.", effect: "If the target fails its next ordered activation, it may immediately re-roll that test once. The power then ends, whether the re-roll passes or not." },
  { name: "Soothed Mind", difficulty: "6+", target: "Friendly unit within 18\".", duration: "Until the start of your next activation phase.", effect: "The target may re-roll failed Courage tests, once per test." },
  { name: "Summoner", difficulty: "6+", target: "A friendly unit with Special Insertion, held in reserve.", duration: "Instantaneous.", effect: "Place the target on the table within 12\" of the Manifesting unit and at least 6\" from any enemy unit." },
  { name: "Psychic Healing", difficulty: "7+", target: "Friendly infantry unit within 18\".", duration: "Instantaneous.", effect: "Restore 1 lost Strength Point to a friendly infantry unit that does not have the Mechanoid xeno rule." },
  { name: "Machine Friend", difficulty: "7+", target: "Friendly vehicle or Mechanoid unit within 18\".", duration: "Instantaneous.", effect: "Restore 1 lost Strength Point to a friendly vehicle, or to an infantry unit with the Mechanoid xeno rule." },
  { name: "Visions of Terror", difficulty: "7+", target: "Enemy unit within 18\" that is not Suppressed.", duration: "Until the unit Rallies.", effect: "Suppress the target unit. It may not be used on an already Suppressed unit." },
  { name: "Paralysis", difficulty: "7+", target: "Enemy unit within 18\".", duration: "Until the end of the target's next activation phase.", effect: "Any movement or combat the target is involved in counts as being in rough terrain. If it enters real rough terrain, its movement drops to a quarter." },
  { name: "Concealment", difficulty: "7+", target: "Self or friendly unit within 18\".", duration: "Until the end of the target's next activation phase.", effect: "The target can only be targeted by Attacks or Shooting from within 12\"." },
  { name: "Guiding Eye", difficulty: "7+", target: "Self or friendly unit within 18\".", duration: "Until the start of your next activation phase.", effect: "The target may re-roll failed Shoot or Firefight dice, once per action." },
  { name: "Guiding Hand", difficulty: "7+", target: "Self or friendly unit within 18\".", duration: "Until the start of your next activation phase.", effect: "The target may re-roll failed Attack or Defence dice, once per Attack." },
  { name: "Psychic Shield", difficulty: "7+", target: "Self or friendly unit within 18\".", duration: "Until the start of your next activation phase.", effect: "The target's Armour is increased by 1." },
  { name: "Transportation", difficulty: "7+", target: "Self or any unit within 18\".", duration: "Instantaneous.", effect: "Roll two dice. Move the target up to that many inches in a direction you choose, by teleportation, telekinesis or a rift in space-time." },
  { name: "Annulment", difficulty: "8+", target: "A unit within 18\" currently affected by a psychic power.", duration: "Instantaneous.", effect: "Cancel any psychic powers currently affecting the target whose duration is not Instantaneous." },
];
