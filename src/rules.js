/* Quick rules reference, transcribed from Xenos Rampant (Osprey Games, 2022).
   Grouped for the at-the-table reference modal. Data, not prose. */

export const RULES_REFERENCE = [
  { cat: "Activation", title: "Activating your units", items: [
    "Rally Suppressed units.",
    "Activate Wild Charges.",
    "Order other activations.",
  ] },
  { cat: "Activation", title: "Rally Suppressed units", items: [
    "On a success, the unit recovers from being Suppressed (remove its Suppressed marker), but it cannot activate again this activation phase.",
    "On a failure, it keeps its Suppressed marker, loses one more Strength Point, Retreats, and takes no further action this activation phase.",
    "If your final score is 0 or negative, the unit loses heart completely and is routed. Remove it immediately.",
  ] },
  { cat: "Movement", title: "Maximum Movement by type", items: [
    "Lesser Xenomorphs and Soft-skin Vehicles: 12\".",
    "Greater Xenomorphs and Transport Vehicles: 10\".",
    "Elite, Light, Berserk and Primitive Infantry, and Fighting Vehicles: 8\".",
    "Heavy and Support Infantry, and Militia Rabble: 6\".",
    "Mobile option: increase Maximum Movement by 4\".",
    "Slow xeno rule: decrease Maximum Movement by 2\".",
  ] },
  { cat: "Shooting", title: "Shooting", items: [
    "Choose a target within your Shoot Value range, or anywhere in line of sight at extreme range.",
    "If you are within the target's own Shoot Value range, it may declare a Firefight reaction (if it has Firefight), succeeding on an activation test of 7+.",
    "Roll to hit. If the Firefight reaction succeeded, the target also rolls to hit before any Strength Points are lost.",
    "Reduce Strength Points as needed, counting the target's Armour as 1 higher if firing at extreme range.",
    "Any unit that suffers hits tests Courage, even if it lost no Strength Points.",
  ] },
  { cat: "Shooting", title: "Weapon ranges", items: [
    "Support Infantry: 24\".",
    "Elite, Heavy and Light Infantry, Fighting Vehicles: 18\".",
    "Berserk Infantry, Recon Infantry, Transport Vehicles: 12\" (no extreme-range Shooting).",
    "Militia Rabble, Soft-skin Vehicles: 6\" (no extreme-range Shooting).",
  ] },
  { cat: "Shooting", title: "Resolving Shooting", items: [
    "Roll 10 dice if the unit is above half its starting Strength Points.",
    "Roll 5 dice if it is at half its starting Strength Points or below.",
  ] },
  { cat: "Shooting", title: "Firefight", intro: "A Firefight is a reaction after the enemy makes its Shoot roll, but before casualties are worked out. A unit that takes a Firefight reaction, successful or not, can activate as normal on its next activation phase.", items: [
    "Suppressed units may not use Firefight.",
    "It may only be used against the first enemy unit to target the unit in a turn, so once per turn at most.",
  ] },
  { cat: "Attacks", title: "Attacking", items: [
    "Choose a target unit.",
    "The target may take a reaction if allowed (such as Counter-Charge).",
    "Move the Attacking unit into contact.",
    "Fight: the Attacker uses its Attack Value, the defender uses its Defence Value.",
    "Both sides reduce Strength Points.",
    "Units test Courage if required.",
    "If both units are still in contact, one unit will Retreat.",
  ] },
  { cat: "Attacks", title: "Resolving Attacks", items: [
    "Roll 10 dice if above half starting Strength Points, 5 dice if at half or below.",
    "Units in rough terrain fight with Attack and Defence Value 5+ and Armour 2, unless they have Ranger.",
    "Suppressed units only ever hit on a 6.",
  ] },
  { cat: "Attacks", title: "Ending Attacks", items: [
    "The unit that lost the most Strength Points this Attack must Retreat.",
    "If both lost equal (or no) Strength Points, the Attacking unit Retreats.",
    "If a unit cannot fall back the required distance, it tests for casualties.",
  ] },
  { cat: "Courage", title: "When to test Courage", items: [
    "It took at least one hit from Shooting, even if it lost no Strength Points.",
    "It lost Strength Points from an Attack or other enemy action.",
    "It is attempting to Rally off a Suppressed marker.",
    "It becomes your only unit left on the table.",
    "Its Detachment's Commander is killed or flees the table.",
    "Its Detachment has lost units worth half or more of its total points.",
  ] },
  { cat: "Courage", title: "How to test Courage", items: [
    "Roll two dice if the unit has more than half its Strength Points, one die if at half or below.",
    "Add 1 if the unit is in cover.",
    "Add 1 if your Commander is within 12\" (this includes the Commander's own unit).",
    "Subtract 1 for each Strength Point lost to the event causing the test (not when Rallying).",
    "Subtract 1 if the Detachment has lost half or more of its points (12+ in a 24-point game).",
    "Equal or beat the Courage score for no effect (a successful Rally removes the marker). Below it, you fail.",
  ] },
  { cat: "Courage", title: "Failing a Courage test", items: [
    "Final score above 0: the unit Retreats, then becomes Suppressed.",
    "Final score 0 or negative: the unit is routed. Remove it immediately.",
    "A Suppressed unit that is Suppressed again loses an extra Strength Point on top of Retreating.",
  ] },
  { cat: "Aftermath", title: "Retreating", items: [
    "Infantry move half their Maximum Movement; vehicles move their full Maximum Movement, turning or reversing as best fits.",
    "If already in cover, it need not move unless it just fought an Attack.",
    "If it can reach cover within the move, it may move into that cover and halt.",
    "Otherwise it flees directly away from the unit that caused the Retreat, or toward its own deployment zone if none did.",
    "A Retreating unit may never move within 1\" of any other unit during the Retreat.",
  ] },
  { cat: "Aftermath", title: "Suppressed units", items: [
    "Must attempt a Rally test to remove the Suppressed marker at the start of its next activation phase.",
    "May not be activated other than to Rally.",
    "Only hits on a 6 if it is Attacked.",
    "May only move as the result of a failed Courage test.",
  ] },
];

export const RULES_CATS = ["Activation", "Movement", "Shooting", "Attacks", "Courage", "Aftermath"];
