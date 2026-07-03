/* 40k-flavoured name pools + faction icons for the name randomizer.
   Names are a fan reference supplied by the user; icons from the bundled pack.
   Grimdark is data-backed; other genres use small hand pools (in App). */

export const NAME_GENRES = [
 {
  "id": "grimdark",
  "label": "Grimdark",
  "blurb": "The far future, and all of it is at war.",
  "groups": [
   {
    "id": "imperium",
    "label": "Imperium",
    "factions": [
     {
      "id": "imperium-adepta-sororitas",
      "name": "Adepta Sororitas",
      "tag": "Ecclesiarchy",
      "icon": "imperium/imperium-adepta-sororitas.svg",
      "pool": [
       "Order of Our Martyred Lady",
       "Order of the Ebon Chalice",
       "Order of the Bloody Rose",
       "Order of the Sacred Rose",
       "Order of the Argent Shroud",
       "Order of the Valorous Heart",
       "Order of the Black Sepulchre",
       "Order of the Bleeding Heart",
       "Order of the Blue Robe",
       "Order of the Crimson Oath",
       "Order of the Fiery Tear",
       "Order of the Glowing Chalice",
       "Order of the Thorn",
       "Order of the Broken Sepulchre",
       "Order of the Piercing Thorn",
       "Orders Hospitaller",
       "Orders Famulous"
      ]
     },
     {
      "id": "imperium-adeptus-mechanicus",
      "name": "Adeptus Mechanicus",
      "tag": "Forge Worlds",
      "icon": "imperium/imperium-adeptus-mechanicus.svg",
      "pool": [
       "Mars",
       "Ryza",
       "Graia",
       "Lucius",
       "Metalica",
       "Stygies VIII",
       "Agripinaa",
       "Triplex Phall",
       "Deimos",
       "Voss Prime",
       "Gryphonne IV",
       "Phaeton",
       "Urdesh",
       "Trebor",
       "Satizca Secundus"
      ]
     },
     {
      "id": "am-agripinaa",
      "name": "Agripinaa",
      "tag": "Astra Militarum",
      "icon": "imperium/am-agripinaa.svg",
      "pool": [
       "Agripinaa Home Guard",
       "Agripinaa 2nd Home Guard",
       "Agripinaa 65th Home Guard",
       "Agripinaa 197th Home Guard",
       "Agripinaa Armoured Rifles",
       "Agripinaa 67th Armoured Rifles"
      ]
     },
     {
      "id": "sm-blood-angels",
      "name": "Blood Angels",
      "tag": "Space Marines",
      "icon": "imperium/sm-blood-angels.svg",
      "pool": [
       "Blood Angels",
       "Absolvers",
       "Angels Encarmine",
       "Angels Erythrean",
       "Angels Excelsis",
       "Angels Glorious",
       "Angels Numinous",
       "Angels of Excelsis",
       "Angels of Light",
       "Angels of the Grail",
       "Angels Penitent",
       "Angels Resplendent",
       "Angels Sanguine",
       "Angels Vermillion",
       "Atlantian Spears",
       "Auric Paladins",
       "Blood Dragons",
       "Blood Drinkers",
       "Blood Eagles",
       "Blood Legion",
       "Blood Scythes",
       "Blood Swords",
       "Blood Templars",
       "Blood Wings",
       "Brothers of Jarad",
       "Brothers of the Red",
       "Burning Blood",
       "Carmine Blades",
       "Charnel Guard",
       "Crimson Blades",
       "Crimson Knights",
       "Crimson Legion",
       "Crimson Swords",
       "Cruor Blades",
       "Death Wardens",
       "Disciples of Blood",
       "Dragons Ardent",
       "Exsanguinators",
       "Flesh Eaters",
       "Flesh Tearers"
      ]
     },
     {
      "id": "am-cadia",
      "name": "Cadia",
      "tag": "Astra Militarum",
      "icon": "imperium/am-cadia.svg",
      "pool": [
       "Cadian Shock Troopers",
       "Cadian Mechanised Infantry",
       "Cadian 99th Mechanised Infantry",
       "Cadian 113th Mechanised Infantry",
       "Cadian 114th Mechanised Infantry",
       "444th Cadian Mechanised",
       "Cadian Armoured Regiments",
       "Cadian Heavy Tank Companies",
       "Cadian Auxiliary",
       "304th Cadian Auxiliary Rifles",
       "Kasrkin",
       "86X Kasrkin Special Operational"
      ]
     },
     {
      "id": "sm-dark-angels",
      "name": "Dark Angels",
      "tag": "Space Marines",
      "icon": "imperium/sm-dark-angels.svg",
      "pool": [
       "Dark Angels",
       "Angels of Absolution",
       "Angels of Defiance",
       "Angels of Redemption",
       "Angels of Vengeance",
       "Angels of Wrath",
       "Angels of Vigilance",
       "Bladekeepers",
       "Blades of Vengeance",
       "Bringers of Judgement",
       "Consecrators",
       "Cowled Wardens",
       "Disciples of Caliban",
       "Guardians of the Covenant",
       "Knights of Abhorrence",
       "Knights of the Crimson Order",
       "Lions Sable",
       "Penitent Blades",
       "Persecutors of Darkness",
       "Prime Absolvers",
       "Repentant Brotherhood",
       "Star Phantoms"
      ]
     },
     {
      "id": "sm-imperial-fists",
      "name": "Imperial Fists",
      "tag": "Space Marines",
      "icon": "imperium/sm-imperial-fists.svg",
      "pool": [
       "Imperial Fists",
       "Astral Knights",
       "Black Templars",
       "Brazen Annihilators",
       "Celestial Lions",
       "Crimson Fists",
       "Crusaders of Dorn",
       "Death Strike",
       "Defenders Obscurus",
       "Doom Fists",
       "Emperor's Havoc",
       "Emperor's Warbringers",
       "Excoriators",
       "Executioners",
       "Exorcists",
       "Fervid Blades",
       "Fire Lords",
       "Fists Exemplar",
       "Fists of the Damned",
       "Fists of Wrath",
       "Flames of Aries",
       "Hammers of Dorn",
       "Hospitallers",
       "Invaders",
       "Iron Champions",
       "Iron Knights",
       "Jade Paladins",
       "Knights of Dorn",
       "Night Swords",
       "Rechista Fists",
       "Red Templars",
       "Retributors",
       "Silver Guard",
       "Sons of Dorn",
       "Sons of the Phoenix",
       "Soul Drinkers",
       "Subjugators",
       "Venom Thorns",
       "White Templars"
      ]
     },
     {
      "id": "sm-iron-hands",
      "name": "Iron Hands",
      "tag": "Space Marines",
      "icon": "imperium/sm-iron-hands.svg",
      "pool": [
       "Iron Hands",
       "Brazen Claws",
       "Guardians of the Abyss",
       "Iron Fists",
       "Iron Lords",
       "Knights of Byzantium",
       "Red Talons",
       "Rust Oxen",
       "Sons of Medusa",
       "Star Dragons",
       "Steel Confessors"
      ]
     },
     {
      "id": "imperium-militarum-tempestus",
      "name": "Militarum Tempestus",
      "tag": "Scions",
      "icon": "imperium/imperium-militarum-tempestus.svg",
      "pool": [
       "3rd Alphic Jackals",
       "14th Alphic Dragons",
       "44th Alphic Centaurs",
       "55th Alphic Hydras",
       "88th Alphic Lions",
       "36th Arcadian Wolves",
       "5th Betan Tygers",
       "19th Betic Gorgons",
       "23rd Betic Centaurs",
       "34th Betic Centaurs",
       "101st Betic Dragons",
       "12th Delphic Centaurs",
       "33rd Deltic Phoenixes",
       "68th Deltic Lions",
       "86th Deltic Dragons",
       "99th Deltic Gorgonnes",
       "14th Deltic Lions",
       "394th Deltic Lions",
       "73rd Epsilic Eagles",
       "7th Epsiloid Hawks",
       "9th Iotan Gorgonnes",
       "43rd Iotan Dragons",
       "196th Iotan Gryphonnes",
       "Kappic Eagles",
       "11th Kappic Eagles",
       "12th Kappic Eagles",
       "41st Kappic Eagles",
       "50th Kappic Eagles",
       "55th Kappic Eagles",
       "41st Kappic Griffons",
       "33rd Kappic Raptors",
       "3rd Lambdan Lions",
       "82nd Lambdan Tygers",
       "88th Lambdan Pythons",
       "133rd Lambdan Lions",
       "13th Omikroni Golems",
       "196th Omicroid Hydras",
       "15th Psian Jackals",
       "34th Psian Vipers",
       "54th Psian Jakals",
       "835th Psian Pegasi",
       "62nd Rhoin Cobras",
       "91st Rhoin Cobras",
       "12th Thetoid Condors",
       "17th Thetan Dragons",
       "22nd Thetoid Gryphonnes",
       "32nd Thetoid Eagles",
       "47th Thetoid Dragons",
       "29th Zetic Tygers",
       "46th Zetic Tygers",
       "33rd Zetan Falcons",
       "Drop Force Imperator",
       "Fourth Inquisitorial Storm Trooper Regiment",
       "709th Storm Trooper Company",
       "1344th Storm Trooper Company"
      ]
     },
     {
      "id": "sm-raven-guard",
      "name": "Raven Guard",
      "tag": "Space Marines",
      "icon": "imperium/sm-raven-guard.svg",
      "pool": [
       "Raven Guard",
       "Ashen Claws",
       "Black Guard",
       "Carcharodons",
       "Dark Eagles",
       "Death Eagles",
       "Death Spectres",
       "Flame Eagles",
       "Imperial Talons",
       "Iron Ravens",
       "Knights of the Raven",
       "Necropolis Hawks",
       "Raptors",
       "Raven's Watch",
       "Revilers",
       "Rift Stalkers",
       "Shadow Haunters",
       "Storm Hawks",
       "Storm Wings"
      ]
     },
     {
      "id": "sm-space-wolves",
      "name": "Space Wolves",
      "tag": "Space Marines",
      "icon": "imperium/sm-space-wolves.svg",
      "pool": [
       "Space Wolves",
       "Wolf Brothers"
      ]
     },
     {
      "id": "am-tanith",
      "name": "Tanith",
      "tag": "Astra Militarum",
      "icon": "imperium/am-tanith.svg",
      "pool": [
       "Tanith First and Only"
      ]
     },
     {
      "id": "sm-ultramarines",
      "name": "Ultramarines",
      "tag": "Space Marines",
      "icon": "imperium/sm-ultramarines.svg",
      "pool": [
       "Ultramarines",
       "Angels of Fury",
       "Angels Revenant",
       "Aquiloan Brotherhood",
       "Aurora Chapter",
       "Avenging Sons",
       "Black Consuls",
       "Brazen Consuls",
       "Castellans of the Rift",
       "Crimson Consuls",
       "Dark Sons",
       "Doom Eagles",
       "Doom Legion",
       "Eagle Warriors",
       "Emperor's Spears",
       "Fire Angels",
       "Fire Hawks",
       "Fulminators",
       "Genesis Chapter",
       "Hawk Lords",
       "Helion Legion",
       "Heralds of Ultramar",
       "Howling Griffons",
       "Imperius Reavers",
       "Inceptors",
       "Iron Hawks",
       "Iron Hounds",
       "Iron Snakes",
       "Knights Cerulean",
       "Libators",
       "Marines Errant",
       "Marines Mordant",
       "Mentors",
       "Mortifactors",
       "Nemesis Chapter",
       "Nova Legion",
       "Novamarines",
       "Obsidian Glaives",
       "Obsidian Jaguars",
       "Patriarchs of Ulixis"
      ]
     },
     {
      "id": "sm-white-scars",
      "name": "White Scars",
      "tag": "Space Marines",
      "icon": "imperium/sm-white-scars.svg",
      "pool": [
       "White Scars",
       "Astral Bears",
       "Dark Hunters",
       "Destroyers",
       "Griffon Lords",
       "Iron Talons",
       "Jade Scorpions",
       "Jade Talons",
       "Mantis Warriors",
       "Marauders",
       "Rampagers",
       "Solar Hawks",
       "Sons of Jaghatai",
       "Storm Lords",
       "Storm Reapers",
       "Wrathhost"
      ]
     },
     {
      "id": "am-achaman",
      "name": "Achaman",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Achaman Falcatas",
       "Adamant Rifles"
      ]
     },
     {
      "id": "am-afghal",
      "name": "Afghal",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Afghali Ravagers",
       "Afghali Ravagers 1st",
       "Afghali Ravagers 3rd"
      ]
     },
     {
      "id": "am-aighe-mortis",
      "name": "Aighe Mortis",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Mortisian 52nd",
       "77th Mortisian Infantry",
       "110th Mortisian Armoured"
      ]
     },
     {
      "id": "am-antar",
      "name": "Antar",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Antari Rifles",
       "11th Antari Rifles",
       "Anvarsian Ice Rangers",
       "Aratian Grenadiers"
      ]
     },
     {
      "id": "am-arcadia",
      "name": "Arcadia",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Arcadian Infantry",
       "Arcadian 5th Infantry",
       "Arcadian 26th Infantry",
       "Arcadian 47th",
       "Arcadian 118th Infantry",
       "Arcadian Armoured",
       "Arcadian 66th Armoured",
       "Arcadian 356th Armoured",
       "Ardelean Colonials"
      ]
     },
     {
      "id": "am-argovon",
      "name": "Argovon",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Argovonian Foresters",
       "2nd Argovonian Foresters",
       "Argovonian Lineholders",
       "Argovonian Ironlancers",
       "Argovonian Firebombards"
      ]
     },
     {
      "id": "am-arkan",
      "name": "Arkan",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Arkan Confederates",
       "19th Arkan Confederates"
      ]
     },
     {
      "id": "am-armageddon",
      "name": "Armageddon",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Armageddon Command Guard",
       "Armageddon Ork Hunters",
       "Armageddon Steel Legion",
       "Steel Legion Armoured Divisions",
       "Armageddon Heavy Tank Companies"
      ]
     },
     {
      "id": "am-arnaud",
      "name": "Arnaud",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Arnaud Fast Attack",
       "55th Arnaud Fast Attack"
      ]
     },
     {
      "id": "am-asgard",
      "name": "Asgard",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Asgardian Rangers",
       "Asgardian 89th Rangers",
       "Astcarian Fourth"
      ]
     },
     {
      "id": "am-astoran",
      "name": "Astoran",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Astoran Aeronautica",
       "Astoran 13th Aeronautica"
      ]
     },
     {
      "id": "am-athonos",
      "name": "Athonos",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Athonian Tunnel Rats",
       "Athonian 18th",
       "Athonian 992nd",
       "Athonian Tank Corps",
       "18th Athonian Tank Corps"
      ]
     },
     {
      "id": "am-atraxia",
      "name": "Atraxia",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Atraxian Regiments",
       "18th Atraxian Super Heavy Tank Company"
      ]
     },
     {
      "id": "am-attila",
      "name": "Attila",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Attilan Rough Riders",
       "Attilan Rough Riders 264th \"Swift Lances\"",
       "Attilan Heavy Cavalry",
       "31st Attilan Heavy Cavalry"
      ]
     },
     {
      "id": "am-baldack",
      "name": "Baldack",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Baldackian Fusiliers",
       "23rd Baldackian Fusiliers",
       "26th Baldackian Fusiliers",
       "Bale Highlanders"
      ]
     },
     {
      "id": "am-bifrost",
      "name": "Bifrost",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Bifrost Huscarls",
       "Bifrost 121st Regiment"
      ]
     },
     {
      "id": "am-blitzen",
      "name": "Blitzen",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Blitzen Heavy Armoured",
       "Blitzen 5th Heavy Armoured"
      ]
     },
     {
      "id": "am-brimlock",
      "name": "Brimlock",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Brimlock Dragoons",
       "4th Brimlock Dragoons",
       "8th Brimlock Dragoons",
       "17th Brimlock Dragoons",
       "19th Brimlock Dragoons",
       "167th Brimlock Dragoons"
      ]
     },
     {
      "id": "am-bront",
      "name": "Bront",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Brontian Longknives",
       "5th Brontian Longknives",
       "32nd Brontian Longknives",
       "59th Brontian Longknives",
       "212th Brontian Longknives",
       "222nd Brontian Longknives",
       "Brontian 82nd Armoured",
       "Brontine Centurions"
      ]
     },
     {
      "id": "am-carnelian",
      "name": "Carnelian",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "82nd Carnelian Light Foot",
       "88th Carnelian Light Foot",
       "97th Carnelian Light Foot",
       "101st Carnelian Light Foot"
      ]
     },
     {
      "id": "am-catachan",
      "name": "Catachan",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Catachan Jungle Fighters",
       "Catharti Arraigners"
      ]
     },
     {
      "id": "am-clovis",
      "name": "Clovis",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Clovis Regiments",
       "9th Clovis \"The Indomitables\"",
       "Clovis Heavy Support",
       "11th Clovis Heavy Support"
      ]
     },
     {
      "id": "am-columnus",
      "name": "Columnus",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "5th Columnus",
       "Heavy Columnus",
       "47th Heavy Columnus"
      ]
     },
     {
      "id": "am-corscan",
      "name": "Corscan",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Corscan 3rd Artillery",
       "Corscan 9th Artillery"
      ]
     },
     {
      "id": "am-cthonia",
      "name": "Cthonia",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Cthonian Regiments",
       "Cthonian 1st Armoured Regiment",
       "Cthonian 2nd Armoured Regiment",
       "Cthonian 26th Armoured Cavalry Squadron"
      ]
     },
     {
      "id": "am-dataggan",
      "name": "Dataggan",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "901st Dataggan Dragoons",
       "905th Dataggan Dragoons"
      ]
     },
     {
      "id": "am-desoleum",
      "name": "Desoleum",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Desoleum Oathsworn 433rd",
       "Desoleum 457th"
      ]
     },
     {
      "id": "am-dniepr",
      "name": "Dniepr",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Dniepr Tank Corps",
       "Dniepr 7th Tank Corp",
       "Dniepr 9th Tank Corp"
      ]
     },
     {
      "id": "am-faeburn",
      "name": "Faeburn",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Faeburn Vanquishers",
       "Faeburn Bullgryn Auxilia"
      ]
     },
     {
      "id": "am-fenksworld",
      "name": "Fenksworld",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "17th Fenksworld Rifles",
       "12th Fenksworld Penal Regiment \"The Dregs\""
      ]
     },
     {
      "id": "am-finreht",
      "name": "Finreht",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "37th Finreht Highlanders Regiment",
       "81st Finreht Highlanders Regiment",
       "122nd Finreht Highlanders Regiment",
       "451st Finreht Highlanders Regiment"
      ]
     },
     {
      "id": "am-foronika",
      "name": "Foronika",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Foronikan Pioneers",
       "Foronikan Ironstalkers",
       "Foronikan Nomads",
       "Foronikan Offworlder Veterans"
      ]
     },
     {
      "id": "am-fortis-binary",
      "name": "Fortis Binary",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "1st Fortis Binars",
       "2nd Fortis Binars",
       "8th Fortis Binars"
      ]
     },
     {
      "id": "am-fremas",
      "name": "Fremas",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Fremas 34th",
       "Fremas 46th",
       "Fremas 99th"
      ]
     },
     {
      "id": "am-gudrun",
      "name": "Gudrun",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Gudrunite Rifles",
       "Gudrunite 50th Rifles",
       "312th Gudrunite Rifles",
       "Gudrunite 335th Rifles"
      ]
     },
     {
      "id": "am-haephos",
      "name": "Haephos",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Haephosian Phalanxari",
       "Haephosian Tritons",
       "Haephosian Klibanarii"
      ]
     },
     {
      "id": "am-hammeront",
      "name": "Hammeront",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Hammeront Armoured Siege Units",
       "Hammeront IV"
      ]
     },
     {
      "id": "am-hishrea",
      "name": "Hishrea",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Hishrean Harpoonists",
       "Hishrean Avalanchers",
       "Hishrean Powdermen"
      ]
     },
     {
      "id": "am-hyrkan",
      "name": "Hyrkan",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Hyrkan Fifth",
       "Hyrkan Sixth",
       "Hyrkan Eighth"
      ]
     },
     {
      "id": "am-jant-normanidus-prime",
      "name": "Jant Normanidus Prime",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Jantine Patricians",
       "Jantine First",
       "Jantine Third",
       "Jantine Fourth",
       "Jantine Eleventh",
       "Jantine Cataphracts"
      ]
     },
     {
      "id": "am-jouran",
      "name": "Jouran",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Jouran Dragoons",
       "23rd Jouran Dragoon Regiment",
       "29th Jouran Dragoon Regiment",
       "30th Jouran Dragoon Regiment",
       "39th Jouran Dragoon Regiment",
       "87th Jouran Dragoon Regiment",
       "103rd Jouran Dragoon Regiment",
       "112th Jouran Dragoon Regiment",
       "327th Jouran Dragoon Regiment",
       "383rd Jouran Dragoon Regiment",
       "384th Jouran Dragoons"
      ]
     },
     {
      "id": "am-jumael-iv",
      "name": "Jumael IV",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Jumael Volunteers",
       "Jumael I",
       "Jumael 14th"
      ]
     },
     {
      "id": "am-kado",
      "name": "Kado",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "11th Kado",
       "419th Khorinthian \"Korsairs\""
      ]
     },
     {
      "id": "am-kanak",
      "name": "Kanak",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Kanak Skull Takers",
       "838th Kanak Skull Takers Regiment",
       "839th Kanak Skull Takers Regiment",
       "840th Kanak Skull Takers Regiment",
       "841st Kanak Skull Takers Regiment"
      ]
     },
     {
      "id": "am-kastorel-novem",
      "name": "Kastorel-Novem",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "1st Kastorel",
       "14th Kastorel"
      ]
     },
     {
      "id": "am-kaurava",
      "name": "Kaurava",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Conservator Regiments",
       "251st Conservator Regiment",
       "252nd Conservator Regiment",
       "253rd Conservator Regiment",
       "254th Conservator Regiment"
      ]
     },
     {
      "id": "am-kellersburg",
      "name": "Kellersburg",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Kellersburg Irregulars",
       "Kellersburg 1st Irregular Regiment",
       "Kellersburg 2nd Irregular Regiment",
       "Kellersburg 6th Irregular Regiment",
       "Kellersburg 7th Irregular Regiment"
      ]
     },
     {
      "id": "am-ketzok",
      "name": "Ketzok",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Ketzok 17th Armoured",
       "Ketzok 18th",
       "Ketzok 21st",
       "Ketzok 22nd"
      ]
     },
     {
      "id": "am-kolstec",
      "name": "Kolstec",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Kolstec 15th",
       "Kolstec 22nd",
       "Kolstec 29th",
       "Kolstec 33rd",
       "Kolstec 40th",
       "Kolstec 41st",
       "Kolstec 50th",
       "Kolstec 477th Light Support"
      ]
     },
     {
      "id": "am-konig-prime",
      "name": "Konig Prime",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Konig Armoured Regiments",
       "Konig 27th Armoured",
       "Konig 9th Heavy Tank Company"
      ]
     },
     {
      "id": "am-krassia",
      "name": "Krassia",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Krassian Sixth",
       "21st Heavy Krassian"
      ]
     },
     {
      "id": "am-krieg",
      "name": "Krieg",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Death Korps of Krieg",
       "Line Korps of Krieg",
       "Krieg Mechanised Infantry",
       "Death Riders of Krieg",
       "9th Uhlans of the Death Riders",
       "Krieg Armoured Regiments",
       "Krieg Heavy Tank Companies",
       "Krieg Siege Artillery",
       "Krieg Siege Regiments"
      ]
     },
     {
      "id": "am-light-sancon",
      "name": "Light Sancon",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "8th Light Sancon",
       "9th Light Sancon",
       "11th Light Sancon"
      ]
     },
     {
      "id": "am-luggnum",
      "name": "Luggnum",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Luggnum 3rd Light Infantry \"Sewer Rats\"",
       "83rd Aethexe Cavalry"
      ]
     },
     {
      "id": "am-maccabeus-quintus",
      "name": "Maccabeus Quintus",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Maccabian Janissaries",
       "5th Maccabian \"Drusus's Own\"",
       "16th Maccabian \"Janissaries\"",
       "37th Maccabian Janissaries",
       "263rd Maccabian Janissaries",
       "Maccabian Janissaries 1322nd",
       "Maccabian 678th"
      ]
     },
     {
      "id": "am-maesmoch",
      "name": "Maesmoch",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Maesmoch Clanguard",
       "Maesmoch 770th"
      ]
     },
     {
      "id": "am-magdellan",
      "name": "Magdellan",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "6th Magdellan Armoured",
       "Magdellan 11th Tank Regiment"
      ]
     },
     {
      "id": "am-malfi",
      "name": "Malfi",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Malfian 120th",
       "Malfian 585th Infantry"
      ]
     },
     {
      "id": "am-miasma-xvi",
      "name": "Miasma XVI",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Miasman Redcowls",
       "Miasman 114th"
      ]
     },
     {
      "id": "am-minerva",
      "name": "Minerva",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Minervan Tank Legions",
       "10th Minervan Tank Legion",
       "217th Minervan Tank Legion"
      ]
     },
     {
      "id": "am-mordant-prime",
      "name": "Mordant Prime",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Mordant Acid Dogs",
       "Mordant 12th",
       "Mordant 13th",
       "Mordant 45th",
       "Mordant 67th",
       "Mordant 201st",
       "Mordant 303rd",
       "Mordant 607th",
       "Mordant 808th"
      ]
     },
     {
      "id": "am-mordian",
      "name": "Mordian",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Mordian Iron Guard",
       "Mordian Armoured",
       "Mordian Heavy Tank Companies",
       "Mordian Artillery",
       "Mordian Light Patrol"
      ]
     },
     {
      "id": "am-mortant",
      "name": "Mortant",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Mortant 7th",
       "Mortant 11th Armoured",
       "Mortant 113th Armoured Regiment"
      ]
     },
     {
      "id": "am-mortessa",
      "name": "Mortessa",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "14th Mortessan Highlanders",
       "Mortressan 42nd"
      ]
     },
     {
      "id": "am-narmenia",
      "name": "Narmenia",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Narmenian Armoured",
       "1st Narmenian Armoured",
       "2nd Narmenian Heavy",
       "Narmenian 3rd",
       "Narsine Yeomanry"
      ]
     },
     {
      "id": "am-necromunda",
      "name": "Necromunda",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Necromundan Guard",
       "Necromundan 7th Infantry Regiment \"Lucky Sevens\"",
       "8th Necromunda Regiment \"The Spiders\"",
       "9th Necromunda Regiment",
       "Necromunda Twelfth Regiment",
       "Necromundan 86th"
      ]
     },
     {
      "id": "am-ontanople",
      "name": "Ontanople",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Ontanople Pioneers",
       "Ontanople Rifles"
      ]
     },
     {
      "id": "am-orcus",
      "name": "Orcus",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Orcan Stonecrushers",
       "97th Orcan Stonecrushers",
       "289th Orcan Penal Legion"
      ]
     },
     {
      "id": "am-paladius",
      "name": "Paladius",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Paladius Freelancers",
       "Palladius Armoured",
       "Palladius 2nd Armoured",
       "Palladius 8th Armoured",
       "Palladius 46th Armoured"
      ]
     },
     {
      "id": "am-paragon",
      "name": "Paragon",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Paragonian Regiments",
       "63rd Paragonian Mechanised",
       "42nd Paragonian Armoured",
       "7th Paragonian Super Heavy Tank Company"
      ]
     },
     {
      "id": "am-pardua",
      "name": "Pardua",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Eighth Pardus Armoured",
       "34th Armoured Pardus"
      ]
     },
     {
      "id": "am-phantine",
      "name": "Phantine",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Phantine Air Corps",
       "Phantine Skyborne",
       "81st Phantine Skyborne"
      ]
     },
     {
      "id": "am-phyressia",
      "name": "Phyressia",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Phyressian Armoured",
       "Phyressian 2nd Armoured",
       "14th Phyressian Armoured",
       "Phyressian 42nd Armoured",
       "Phyressian 81st Armoured",
       "Phyressian Heavy Tank Companies",
       "Phyressian 31st Heavy Tank Company"
      ]
     },
     {
      "id": "am-phyruss",
      "name": "Phyruss",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Phyruss Regiments",
       "Phyruss 101st"
      ]
     },
     {
      "id": "am-praetoria",
      "name": "Praetoria",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Praetorian Guard",
       "Praetorian Hussars"
      ]
     },
     {
      "id": "am-remus",
      "name": "Remus",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Remus Crushers",
       "Remus Regiment"
      ]
     },
     {
      "id": "am-roane-deepers",
      "name": "Roane Deepers",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "2nd Roane Deepers",
       "5th Roane Deepers",
       "7th Roane Deepers"
      ]
     },
     {
      "id": "am-samothrace",
      "name": "Samothrace",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Samothrace 4th",
       "Samothrace 5th",
       "Samothrace 15th",
       "303rd Samothrace"
      ]
     },
     {
      "id": "am-sarpoy",
      "name": "Sarpoy",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "9th Radial Sarpoy",
       "21st Sarpoy",
       "Sarpoy 88th",
       "Sarpoy Mechanised Cavalry"
      ]
     },
     {
      "id": "am-savlar",
      "name": "Savlar",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Savlar Chem Dogs",
       "Savlar 14th Chem-Dogs",
       "Savlar 22nd",
       "35th Savlar Chem-Dogs",
       "Savlar 71st Chem Dogs Regiment"
      ]
     },
     {
      "id": "am-scintilla",
      "name": "Scintilla",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Scintillan Fusiliers",
       "17th Scintillan Fusiliers \"Spireborn\"",
       "17th Scintillan Airborne Assault Group",
       "Scintillan 73rd Light Infantry",
       "112th Scintillan",
       "Gunmetallican 35th",
       "Gunmetalican Armoured",
       "13th Gunmetalican Armoured"
      ]
     },
     {
      "id": "am-semtexia",
      "name": "Semtexia",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "1st Semtexians",
       "3rd Semtexians"
      ]
     },
     {
      "id": "am-sonasthi",
      "name": "Sonasthi",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Sonasthi Royal Guard",
       "114th, 116th, 217th",
       "Sonasthi Royal Guns"
      ]
     },
     {
      "id": "am-st-khorran",
      "name": "St. Khorran",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "St. Khorran 81st",
       "St. Khorran 88th"
      ]
     },
     {
      "id": "am-stratos",
      "name": "Stratos",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Stratosan Aircorps",
       "13th Stratosan Aircorps",
       "18th Stratosan Aircorps"
      ]
     },
     {
      "id": "am-tallarn",
      "name": "Tallarn",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Tallarn Desert Raiders",
       "Tallarn 3rd",
       "Tallarn 11th \"Dune Scorpions\"",
       "Tallarn 12th",
       "Tallarn 35th Desert Raiders",
       "67th Tallarn Desert Raiders",
       "Tallarn 89th",
       "Tallarn 217th",
       "Tallarn Molerats",
       "Tallarn Armoured",
       "Tallarn 3rd Armoured",
       "Tallarn 17th Armoured",
       "47th Tallarn Armoured",
       "Tallarn 101st Armoured",
       "Tallarn 115th Armoured",
       "Tallarn Heavy Tank Companies",
       "Tallarn 9th Heavy Tank Company"
      ]
     },
     {
      "id": "am-tanhollis",
      "name": "Tanhollis",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Tanhollis Highlanders",
       "Tanhollis 601st"
      ]
     },
     {
      "id": "am-taros",
      "name": "Taros",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Taronian 1st through 8th",
       "Eighty-First Tarradis"
      ]
     },
     {
      "id": "am-tekarn",
      "name": "Tekarn",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Tekarn Mechanised Infantry",
       "Tekarn 83rd Mechanised Infantry Regiment",
       "Tekarn Armoured",
       "Tekarn 90th Armoured",
       "Tekarn Heavy Tank Companies",
       "Tekarn 11th Heavy Tank Company"
      ]
     },
     {
      "id": "am-terra",
      "name": "Terra",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Katanda Stalwarts",
       "143rd Katanda Stalwarts",
       "Lucifer Blacks",
       "Palatine Sentinels",
       "156th Palatine Sentinels",
       "Terran Praefects",
       "5th Armored Terran Praefects",
       "Terran Redemptionists"
      ]
     },
     {
      "id": "am-teutonian",
      "name": "Teutonian",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Teutonian Armoured",
       "Teutonian 121st Armoured",
       "Teutonian Heavy Tank Companies",
       "Teutonian 19th Super Heavy Tank Company",
       "21st Teutonian Heavy Tank Company"
      ]
     },
     {
      "id": "am-thracian-primaris",
      "name": "Thracian Primaris",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Thracian Guard",
       "Thracian Fifth",
       "Thracian 81st Guard Regiment",
       "Thracian 290th Guard Regiment",
       "Thracian 428th Guard Regiment",
       "10th Thracian Armoured Regiment"
      ]
     },
     {
      "id": "am-valhalla",
      "name": "Valhalla",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Valhallan Ice Warriors",
       "Polar Guard",
       "Valhallan Armoured Regiments",
       "Valhallan Heavy Tank Companies"
      ]
     },
     {
      "id": "am-van-de-man-s-world",
      "name": "Van De'Man's World",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "3rd Redbacks Regiment",
       "4th Redbacks Regiment",
       "5th Redbacks Regiment",
       "67th Redbacks Regiment",
       "104th Redbacks Regiment"
      ]
     },
     {
      "id": "am-vardan",
      "name": "Vardan",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Vardan Rifles",
       "722nd Vardan Rifles",
       "831st Vardan Rifles",
       "902nd Vardan Rifles"
      ]
     },
     {
      "id": "am-varoli-secundus",
      "name": "Varoli Secundus",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "254th Varolian",
       "256th Varolian"
      ]
     },
     {
      "id": "am-ventrillia",
      "name": "Ventrillia",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Ventrillian Nobles",
       "Ventrillian 86th"
      ]
     },
     {
      "id": "am-vigilus",
      "name": "Vigilus",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Vigilant Guard",
       "Vigilant Creedsmen"
      ]
     },
     {
      "id": "am-vintor",
      "name": "Vintor",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "23rd Vintor",
       "Vintor 823rd"
      ]
     },
     {
      "id": "am-vitria",
      "name": "Vitria",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Vitrian Dragoons Third",
       "Vitrian Mobile",
       "2nd Vitrian Mobile",
       "Vitrian Armoured Brigade",
       "Vitrian 10th Armoured Brigade",
       "Vitrian Heavy Support",
       "161st Vitrian Heavy Support"
      ]
     },
     {
      "id": "am-volistad",
      "name": "Volistad",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Volistad Basilisk Regiment",
       "9th Volistad Basilisk Regiment"
      ]
     },
     {
      "id": "am-volpone",
      "name": "Volpone",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "Royal Volpone 1st",
       "Royal Volpone 2nd",
       "Royal Volpone 4th",
       "Royal Volpone 50th"
      ]
     },
     {
      "id": "am-vorgarn",
      "name": "Vorgarn",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "38th Vorgarn",
       "42nd Vorgarn"
      ]
     },
     {
      "id": "am-wrawbach",
      "name": "Wrawbach",
      "tag": "Astra Militarum",
      "icon": null,
      "pool": [
       "34th Wrawbach Heavy Infantry",
       "52nd Wrawbach Heavy Infantry \"Fighting Felids\""
      ]
     }
    ]
   },
   {
    "id": "xenos",
    "label": "Xenos",
    "factions": [
     {
      "id": "xenos-aeldari",
      "name": "Aeldari",
      "tag": "Xenos",
      "icon": "xenos/xenos-aeldari.svg",
      "pool": [
       "Alaitoc",
       "Biel-Tan",
       "Iyanden",
       "Saim-Hann",
       "Ulthwe",
       "Altansar",
       "Iybraesil",
       "Il-Kaithe",
       "Kaelor",
       "Lugganath",
       "Mymeara",
       "Yme-Loc",
       "Aon'tai",
       "Dire Avengers",
       "Howling Banshees",
       "Striking Scorpions",
       "Fire Dragons",
       "Swooping Hawks",
       "Warp Spiders",
       "Dark Reapers",
       "Shining Spears",
       "Shadow Spectres",
       "Crimson Hunters",
       "Eagle Pilots",
       "Slicing Orbs of Zandros",
       "Argent Crest Shrine",
       "Ascendant Strike",
       "Jade Scythe Shrine",
       "Red Wyrm Shrine",
       "Ebon Witch Shrine",
       "Obsidian Claw Shrine",
       "Ashen Sky Shrine",
       "Shade Gate Shrine"
      ]
     },
     {
      "id": "xenos-genestealer-cults",
      "name": "Genestealer Cults",
      "tag": "Xenos",
      "icon": "xenos/xenos-genestealer-cults.svg",
      "pool": [
       "Cult of the Four Armed Emperor",
       "Twisted Helix",
       "Rusted Claw",
       "Pauper Princes",
       "Bladed Cog",
       "Hivecult",
       "Cult of the All Seeing Emperor",
       "Cult of Awoken Eyes",
       "Behemoid Undercult",
       "Blessed Raised",
       "Cult of the Blessed Wormlings",
       "Bringers of Enraptured Joy",
       "The Brotherhood",
       "Brotherhood of Distant Stars",
       "Burning Wyrm",
       "Cult of the Cataclysm",
       "Cult of the Children",
       "Cult of the Chittering Verse",
       "Children of the Second Son",
       "Cult of the Chosen Sons",
       "Clade of the Sleepers",
       "Claw of the Thirsting Wyrm",
       "Cult of the Companions Koronal",
       "Congregation of the Divine Union",
       "Cytos Cartel",
       "Cult of the Devouring Earth",
       "Disciples of the Bleeding Star",
       "Cult of the Elevated Siblings",
       "Cult of the Emperor's Writhing Shadow",
       "Cult of the Endocult Fellowship",
       "Cult of the Giving Claw",
       "Glatchian Creed",
       "Guild of Ash"
      ]
     },
     {
      "id": "xenos-necrons",
      "name": "Necrons",
      "tag": "Xenos",
      "icon": "xenos/xenos-necrons.svg",
      "pool": [
       "Sautekh",
       "Szarekhan",
       "Mephrit",
       "Novokh",
       "Nihilakh",
       "Nephrekh",
       "Charnovokh",
       "Ogdobekh",
       "Thokt",
       "Maynarkh",
       "Agdagath",
       "Akannazad",
       "Altymhor",
       "Arrynmarok",
       "Atun",
       "Dyvanakh",
       "Empire of the Severed",
       "Ithakas",
       "Kardenath",
       "Ketatrix",
       "Khansu",
       "Nekthyst",
       "Neokhares",
       "Oltep",
       "Oroskh",
       "Oruscar",
       "Rytak",
       "Sarnekh",
       "Sekemtar",
       "Suhbekhar",
       "Temeryn",
       "Thanatekh",
       "Tsarakura",
       "Warriors of the Eight Tombs"
      ]
     },
     {
      "id": "xenos-t-au-empire",
      "name": "T'au Empire",
      "tag": "Xenos",
      "icon": "xenos/xenos-t-au-empire.svg",
      "pool": [
       "T'au",
       "Tau'n",
       "D'yanoi",
       "Bork'an",
       "Dal'yth",
       "Fal'shia",
       "Vior'la",
       "Sa'cea",
       "Au'taal",
       "N'dras",
       "Ke'lshan",
       "Elsy'eir",
       "Tash'var",
       "Vash'ya",
       "T'olku",
       "Ksi'm'yen",
       "Fi'rios",
       "T'ros",
       "Mu'gulath Bay",
       "Fe'saan",
       "Kor'tal",
       "Yo'Vai",
       "Farsight Enclaves",
       "Es'Tau",
       "Fal'skio",
       "Ho'sarn",
       "Ka'mais",
       "Sha'draig",
       "Shans'et",
       "Vas'talos",
       "Roksh XVI",
       "Velk'Han",
       "Pech",
       "Vespid"
      ]
     },
     {
      "id": "xenos-drukhari",
      "name": "Drukhari",
      "tag": "Xenos",
      "icon": null,
      "pool": [
       "Kabal of the Black Heart",
       "Kabal of the Flayed Skull",
       "Kabal of the Poisoned Tongue",
       "Kabal of the Obsidian Rose",
       "Kabal of the Last Hatred",
       "Kabal of the Dying Sun",
       "Kabal of the Broken Sigil",
       "Kabal of the Bladed Lotus",
       "Kabal of the Blades of Desire",
       "Kabal of the Baleful Gaze",
       "Kabal of the Fiend Ascendant",
       "Kabal of the Crimson Woe",
       "Kabal of the Shadowed Thorns",
       "Kabal of Poisoned Hopes",
       "Bloodied Claw",
       "Falling Moon",
       "The Severed",
       "Lords of Iron Thorn",
       "Cult of Strife",
       "Cult of the Cursed Blade",
       "Cult of the Red Grief",
       "Cult of the Seventh Woe",
       "Cult of the Blade Denied",
       "Cult of the Wrath Unbound",
       "Cult of the Pain Eternal",
       "Cult of Lhamaea",
       "Cult of the Withered Blade",
       "Cult of Woe",
       "Cult of Wrath",
       "The Prophets of Flesh",
       "The Dark Creed",
       "The Coven of Twelve",
       "The Black Descent",
       "The Hex",
       "The Sutured Helix",
       "The Everspiral",
       "The Ebon Sting",
       "Hand of the Archon",
       "Crimson Duellist",
       "Disciple of Yaelindra",
       "Elixicant",
       "Flayer",
       "Skysplinter Assassin"
      ]
     },
     {
      "id": "xenos-orks",
      "name": "Orks",
      "tag": "Xenos",
      "icon": null,
      "pool": [
       "Goffs",
       "Evil Sunz",
       "Deathskulls",
       "Bad Moons",
       "Blood Axes",
       "Snakebites",
       "Freebooterz",
       "Kult of Speed",
       "Beast Snaggas",
       "Sneaky Gitz",
       "Boom Boyz",
       "Pyromaniacs",
       "Big Krumpaz",
       "Trukk Boyz",
       "Feral Orks",
       "Chaos Renegade Warbands",
       "Black Slayers",
       "Blackfire Tribe",
       "Blackskulls",
       "Bonetooth",
       "Burning Death",
       "Crooked Moon",
       "Luggub's Drop Legion",
       "Morfang's Gargant Big Mob",
       "Split Grin Bad Moons",
       "White Lightning",
       "Wyrm Killa Tribe",
       "Empire of Charadon",
       "Empire of Octarius",
       "Empire of Dregruk",
       "Empire of Calverna",
       "Empire of Bork",
       "Mekboyz / Mekaniaks / Meks",
       "Painboyz / Mad Doks / Doks",
       "Weirdboyz",
       "Runtherds"
      ]
     }
    ]
   },
   {
    "id": "chaos",
    "label": "Chaos",
    "factions": [
     {
      "id": "chaos-alpha-legion",
      "name": "Alpha Legion",
      "tag": "Traitor Legion",
      "icon": "chaos/chaos-alpha-legion.svg",
      "pool": [
       "Alpha Legion",
       "Red Corsairs",
       "Sons of Malice",
       "Violators",
       "Steel Cobras",
       "Thunder Barons",
       "The Fallen",
       "Cypher"
      ]
     },
     {
      "id": "chaos-black-legion",
      "name": "Black Legion",
      "tag": "Traitor Legion",
      "icon": "chaos/chaos-black-legion.svg",
      "pool": [
       "Black Legion",
       "Red Corsairs",
       "Sons of Malice",
       "Violators",
       "Steel Cobras",
       "Thunder Barons",
       "The Fallen",
       "Cypher"
      ]
     },
     {
      "id": "chaos-death-guard",
      "name": "Death Guard",
      "tag": "Traitor Legion",
      "icon": "chaos/chaos-death-guard.svg",
      "pool": [
       "Death Guard",
       "Red Corsairs",
       "Sons of Malice",
       "Violators",
       "Steel Cobras",
       "Thunder Barons",
       "The Fallen",
       "Cypher"
      ]
     },
     {
      "id": "chaos-emperor-s-children",
      "name": "Emperor's Children",
      "tag": "Traitor Legion",
      "icon": "chaos/chaos-emperor-s-children.svg",
      "pool": [
       "Emperor's Children",
       "Red Corsairs",
       "Sons of Malice",
       "Violators",
       "Steel Cobras",
       "Thunder Barons",
       "The Fallen",
       "Cypher"
      ]
     },
     {
      "id": "chaos-iron-warriors",
      "name": "Iron Warriors",
      "tag": "Traitor Legion",
      "icon": "chaos/chaos-iron-warriors.svg",
      "pool": [
       "Iron Warriors",
       "Red Corsairs",
       "Sons of Malice",
       "Violators",
       "Steel Cobras",
       "Thunder Barons",
       "The Fallen",
       "Cypher"
      ]
     },
     {
      "id": "chaos-night-lords",
      "name": "Night Lords",
      "tag": "Traitor Legion",
      "icon": "chaos/chaos-night-lords.svg",
      "pool": [
       "Night Lords",
       "Red Corsairs",
       "Sons of Malice",
       "Violators",
       "Steel Cobras",
       "Thunder Barons",
       "The Fallen",
       "Cypher"
      ]
     },
     {
      "id": "chaos-thousand-sons",
      "name": "Thousand Sons",
      "tag": "Traitor Legion",
      "icon": "chaos/chaos-thousand-sons.svg",
      "pool": [
       "Thousand Sons",
       "Red Corsairs",
       "Sons of Malice",
       "Violators",
       "Steel Cobras",
       "Thunder Barons",
       "The Fallen",
       "Cypher"
      ]
     },
     {
      "id": "chaos-word-bearers",
      "name": "Word Bearers",
      "tag": "Traitor Legion",
      "icon": "chaos/chaos-word-bearers.svg",
      "pool": [
       "Word Bearers",
       "Red Corsairs",
       "Sons of Malice",
       "Violators",
       "Steel Cobras",
       "Thunder Barons",
       "The Fallen",
       "Cypher"
      ]
     },
     {
      "id": "chaos-world-eaters",
      "name": "World Eaters",
      "tag": "Traitor Legion",
      "icon": "chaos/chaos-world-eaters.svg",
      "pool": [
       "World Eaters",
       "Red Corsairs",
       "Sons of Malice",
       "Violators",
       "Steel Cobras",
       "Thunder Barons",
       "The Fallen",
       "Cypher"
      ]
     }
    ]
   }
  ]
 }
];

/* the other genres: smaller hand-written pools (no bundled icons) */
export const EXTRA_GENRES = [
 { id: "space-opera", label: "Space Opera", blurb: "Bright ships, bold crews, a big galaxy.", groups: [
   { id: "so-forces", label: "Factions", factions: [
     { id: "so-terran-union", name: "Terran Union", tag: "Space Opera", icon: null, pool: ["Terran 1st Marines","Sol Vanguard","Home Fleet Landing Party","Ceres Rangers","Olympus Guard","Titan Recon","Luna Wardens","Belt Volunteers"] },
     { id: "so-star-kingdom", name: "Star Kingdom", tag: "Space Opera", icon: null, pool: ["Royal Voidsmen","Crown Lancers","Queen's Own Rifles","Ducal Guard","Star Hussars","Sable Dragoons","Comet Cavalry"] },
     { id: "so-free-traders", name: "Free Traders", tag: "Space Opera", icon: null, pool: ["Drift Crew","Salvage Gang","Voidport Irregulars","Longhaul Guard","Reaver Brand","Frontier Rangers","Contract Guns"] },
   ]},
 ]},
 { id: "wwii", label: "WWII", blurb: "Weird War: history with the dial turned.", groups: [
   { id: "ww-forces", label: "Nations", factions: [
     { id: "ww-usa", name: "USA", tag: "WWII", icon: null, pool: ["1st Infantry, The Big Red One","82nd Airborne","2nd Ranger Battalion","4th Armored","101st Airborne","1st Marine Raiders"] },
     { id: "ww-ussr", name: "USSR", tag: "WWII", icon: null, pool: ["62nd Rifle Army","1st Guards Tank","13th Guards Rifle","Naval Infantry Brigade","Siberian 32nd","Shock Army Vanguard"] },
     { id: "ww-britain", name: "British Empire", tag: "WWII", icon: null, pool: ["7th Armoured, Desert Rats","1st Airborne","51st Highland","Commando No. 3","Royal Marines","Gurkha Rifles"] },
     { id: "ww-germany", name: "Germany", tag: "WWII", icon: null, pool: ["Grossdeutschland","1st Panzer","Fallschirmjager Rgt","Gebirgsjager","Sturm Company","Panzergrenadier Kampfgruppe"] },
   ]},
 ]},
 { id: "post-apoc", label: "Post-Apoc", blurb: "After the end, scavengers inherit the dust.", groups: [
   { id: "pa-forces", label: "Factions", factions: [
     { id: "pa-raiders", name: "Wasteland Raiders", tag: "Post-Apoc", icon: null, pool: ["Rust Dogs","Chrome Vultures","The Scrap Kings","Ashfall Pack","Gasoline Prophets","Bonepickers","The Feral Nine"] },
     { id: "pa-settlers", name: "Settlers", tag: "Post-Apoc", icon: null, pool: ["Vault Militia","Green Acres Guard","The Water Guild","Reservoir Rangers","Homestead Levy","Solar Commune"] },
     { id: "pa-mutants", name: "Mutants", tag: "Post-Apoc", icon: null, pool: ["Glowkin","The Twiceborn","Crawlers of Pit 12","Ferals of the Rad-Zone","The Changed","Hollow Men"] },
   ]},
 ]},
];

export const ALL_GENRES = [...NAME_GENRES, ...EXTRA_GENRES];

/* pick a random entry from a pool, biased away from an avoid value */
export function randomName(pool, avoid) {
  if (!pool || !pool.length) return "";
  if (pool.length === 1) return pool[0];
  let n = pool[Math.floor(Math.random() * pool.length)];
  if (n === avoid) n = pool[(pool.indexOf(n) + 1) % pool.length];
  return n;
}
