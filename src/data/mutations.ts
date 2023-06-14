// types
import { IMutation } from "../types/mutation";

export const Mutations: IMutation[] = [
    {
        name: "Meat shield",
        image: "images/mutations/meatShield.png",
        description: "Your size to meat ratio is off the charts and you take hits like a champ.",
        effects: [
            {
                name: "Max health",
                description: "Increases max health",
                amount: 50,
                unit: undefined,
            },
        ],
    },
    {
        name: "Buff lungs",
        image: "images/mutations/buffLungs.png",
        description: "You inhale and your cells burn bright with an enhanced energy capacity.",
        effects: [
            {
                name: "Max stamina",
                description: "Increases max stamina.",
                amount: 50,
                unit: undefined,
            },
        ],
    },
    {
        name: "Daredevil",
        image: "images/mutations/daredevil.png",
        description:
            "Powered by a perpetual flow of adrenaline as you skitter and leap through the yard, risk assessment has no place in your moment to moment thoughts. Repeated trial and error lets you take leaps of faith with confidence.",
        effects: [
            {
                name: "Daredevil",
                description: "Reduces damage taken from a fall.",
                amount: 50,
                unit: "%",
            },
        ],
    },
    {
        name: "Dissection expert",
        image: "images/mutations/dissectionExpert.png",
        description:
            "A masterful grasp of your adversaries' intricate anatomy empowers you to effortlessly harvest their rare and elusive resources.",
        effects: [
            {
                name: "Dissection expert",
                description: "Increases the drop-chance of loot from creatures.",
                amount: 10,
                unit: "%",
            },
        ],
    },
    {
        name: "Lil fist",
        image: "images/mutations/lilFist.png",
        description:
            "Your tiny limbs flail and crash upon foe after foe. With every little swing these bitty bones of yours harden and muscles tighten, increasing the damage of further blows.",
        effects: [
            {
                name: "Lil fist",
                description:
                    "Gives a 2% damage buff to unarmed attacks while attacking with fists that stacks until taking ANY form of damage or combat ends. Max 100 stacks.",
                amount: 2,
                unit: "%",
            },
            {
                name: "Lil fist mastery",
                description: "Every punch landed guarantees a 2nd hit that deals 6 damage and 5 stun",
                amount: 0,
                unit: undefined,
            },
        ],
    },
    {
        name: "Chopper",
        image: "images/mutations/chopper.png",
        description:
            "Fury and bloodlust pump through your arteries, fueling an efficient flow to hacking and chopping muscles. Axes are an extension of your angry little body, rending the armor of your enemies.",
        effects: [
            {
                name: "Chopper",
                description: "Axe attacks lower the target's Busting, Chopping and Stabbing resistances.",
                amount: 20,
                unit: "%",
            },
            {
                name: "Chopper mastery",
                description: "Attacking with an axe removes the stamina regen delay while NOT exhausted.",
                amount: 0,
                unit: undefined,
            },
        ],
    },
    {
        name: "Smasher",
        image: "images/mutations/smasher.png",
        description:
            "Heavy strokes of power flood your little limbs to bring hammers down with unmatched force and intensity. Your hammer attacks slow the attack speed of your enemies.",
        effects: [
            {
                name: "Smasher",
                description: "Slows the target's attack speed by 30% for 10 seconds.",
                amount: 0,
                unit: undefined,
            },
            {
                name: "Smasher mastery",
                description: "Hammer attacks deal 50% more stun.",
                amount: 50,
                unit: "%",
            },
        ],
    },
    {
        name: "Javelineer",
        image: "images/mutations/javelineer.png",
        description:
            "Range is your greatest ally as you reach or throw from afar. Spears deal additional damage when thrown, and you're able to counter poke enemy attacks to reflect a portion of damage back.",
        effects: [
            {
                name: "Javelineer",
                description:
                    "Spear attacks give a buff that reflects 100% of the damage delt to the player back at the attacker.",
                amount: 100,
                unit: "%",
            },
            {
                name: "Javelineer mastery",
                description: "Spear charge attacks deal 30% more damage",
                amount: 30,
                unit: "%",
            },
        ],
    },
    {
        name: "Assassin",
        image: "images/mutations/assassin.png",
        description:
            "Small blades blur in your hands as you swing with absolute precision. Daggers are your weapon of choice and cause your enemies to bleed.",
        effects: [
            {
                name: "Assassin",
                description:
                    "Dagger attacks inflict bleed to the target, a DOT effect that deals 75 damage over 5 seconds.",
                amount: 0,
                unit: undefined,
            },
            {
                name: "Assassin mastery",
                description: "Lowers enemies resist to bleed damage",
                amount: 25,
                unit: "%",
            },
        ],
    },
    {
        name: "Sharpshooter",
        image: "images/mutations/sharpshooter.png",
        description:
            "A film crawls across the surface of your eyes, allowing you to focus with deadly clarity. Running cost significantly less stamina after landing a shot with a bow or crossbow.",
        effects: [
            {
                name: "Sharpshooter",
                description: "Landing bow/crossbow attacks reduces the stamina cost of sprinting by 100% for 5 seconds",
                amount: 0,
                unit: undefined,
            },
            {
                name: "Sharpshooter mastery",
                description:
                    "Candy arrows gain special effects:\n* Mint Arrows slow the targets movement speed by 30% for 5 seconds.\n* Sour Arrows deal 10 additional stun.\n* Spicy Arrows inflict DOT burn for 50 damage over the time of 5 seconds.",
                amount: 0,
                unit: undefined,
            },
        ],
    },
    {
        name: "Barbarian",
        image: "images/mutations/barbarian.png",
        description:
            "Strong and reckless, you pride yourself in using the biggest weapons possible. Your muscular arms have no problems swinging clubs with great force and blind rage. You deal largely increased damage while raged but cannot time your blocks correctly.",
        effects: [
            {
                name: "Barbarian",
                description:
                    "Club attacks will make the player enter a Rage mode for 10 seconds. Increases club damage by 25% and removes perfect blocks.",
                amount: 0,
                unit: undefined,
            },
            {
                name: "Barbarian mastery",
                description: "Rage regenerates 1 health per second.",
                amount: 0,
                unit: undefined,
            },
        ],
    },
    {
        name: "Blademaster",
        image: "images/mutations/blademaster.png",
        description:
            "Honing the art of the blade, your keen mind knows exactly where to slices enemies to reduce their effectiveness. Sword attacks lower the damage enemies deal.",
        effects: [
            {
                name: "Blademaster",
                description: "Sword attacks lower the damage of the targets attacks.",
                amount: 0,
                unit: undefined,
            },
            {
                name: "Blademaster mastery",
                description: "Sword attacks give a buff that reduces the exhaustion time by 90%.",
                amount: 0,
                unit: undefined,
            },
        ],
    },
    {
        name: "Whittle wizard",
        image: "images/mutations/whittleWizard.png",
        description:
            "Mastering sufficiently advanced culinary technology, the apparent magic within candy staves is unlocked. Different damage types apply unique status effects to creatures. Spiciness burns, mintiness slows, and sourness stuns.\nMastery Bonus: Attacking with a staff reduces the stamina cost of additional staff attacks.\n\n",
        effects: [
            {
                name: "Whittle wizard",
                description:
                    "Mint Staff attacks reduce the movement speed of targets by 30% for 5 seconds.\nSour Staff attacks deal 6 extra stun.\nSpicy Staff burns targets for 75 damage every 5 seconds.",
                amount: 0,
                unit: undefined,
            },
            {
                name: "Whittle wizard mastery",
                description: "Staff attacks apply a buff that reduces the stamina cost of staffs by 50%.",
                amount: 0,
                unit: undefined,
            },
        ],
    },
    {
        name: "Parry master",
        image: "images/mutations/parryMaster.png",
        description: "Your impeccable timing gives you an extreme advantage when blocking attacks.",
        effects: [
            {
                name: "Parry master",
                description: "Gives perfect blocks a 100% chance to refund 15 stamina.",
                amount: 0,
                unit: undefined,
            },
        ],
    },
    {
        name: "Grass master",
        image: "images/mutations/grassMaster.png",
        description:
            "Like an insatiable lumberjack you're becoming a living lawn mower. Your intimate knowledge of chopping grass allows you to topple them with increasing ease.",
        effects: [
            {
                name: "Grass harvest speed",
                description: "Increases Chopping Efficiency.",
                amount: 100,
                unit: "%",
            },
            {
                name: "Grass master mastery",
                description: "Harvesting grass returns 15 stamina.",
                amount: 0,
                unit: undefined,
            },
        ],
    },
    {
        name: "Rock cracker",
        image: "images/mutations/rockCracker.png",
        description:
            "A path of destruction is left in your wake and it's clear that busting makes you feel good. Your little arms bring hammers down with an ever-growing efficiency.",
        effects: [
            {
                name: "Rock cracker",
                description: "Increases busting efficiency",
                amount: 100,
                unit: "%",
            },
        ],
    },
    {
        name: "Hauling Hero",
        image: "images/mutations/haulingHero.png",
        description:
            "A compelling urge to construct grand and intricate edifices has honed your back and shoulder muscles to perfection. Now, you possess the strength to bear a remarkable load of haulable treasures.",
        effects: [
            {
                name: "Hauling strength",
                description: "Increases the amount of Grass Planks and Weed Stems that can be carried at once.",
                amount: 15,
                unit: undefined,
            },
        ],
    },
    {
        name: "Coup de grass",
        image: "images/mutations/coupdeGrass.png",
        description:
            "Discovering a beacon of hope in the darkness lifts your will to survive. Bursts of inspiration flash before your eyes in the heat of battle as you land blows one can only describe as lucky.",
        effects: [
            {
                name: "Coup de grass",
                description: "Increases critical hit chance.",
                amount: 5,
                unit: "%",
            },
        ],
    },
    {
        name: "Trapper PEEP.R",
        image: "images/mutations/trapperPEEP.R.png",
        description:
            "Skills as a keen gatherer meld with your hunting prowess. Deep knowledge of the yard's creatures etched into your memory gives you a chance to perform powerful critical hits.",
        effects: [
            {
                name: "Critical hit damage",
                description: "Increases critical hit damage.",
                amount: 60,
                unit: "%",
            },
        ],
    },
    {
        name: "Rascal rogue",
        image: "images/mutations/rascalRogue.png",
        description:
            "A desire to take things that don't belong to you seeps into your fighting style. Attacks with melee weapons have a chance to steal items from your opponents.",
        effects: [
            {
                name: "Steal item",
                description:
                    "Has a chance (10%) when landing a melee hit on a creature that the player will instantly obtain an extra item from their loot-table.",
                amount: 10,
                unit: "%",
            },
        ],
    },
    {
        name: "Juicy",
        image: "images/mutations/juicy.png",
        description:
            "Like a true bookworm, you can't resist a wall of text. An encyclopedic knowledge of beverage ingredients enriches you.",
        effects: [
            {
                name: "Moist",
                description: "Reduces thirst drain rate.",
                amount: 50,
                unit: "%",
            },
        ],
    },
    {
        name: "Natural explorer",
        image: "images/mutations/naturalExplorer.png",
        description:
            "With each Landmark found you gain a better understanding of the lay of the land. Your tiny feet traverse the yard like it's the back of your hand. Powered by intuition, your tiny feet skitter through the muck and weeds ever quicker.",
        effects: [
            {
                name: "The quickness",
                description: "Increases movement speed",
                amount: 50,
                unit: "%",
            },
        ],
    },
    {
        name: "Merteen",
        image: "images/mutations/merteen.png",
        description:
            "The push and pull of thick, rich pond water coaxes your gummy little body into becoming a part of this world. Your permeable skin begins to utilize an electrochemical gradient that propels your limbs like tiny flagella and aids in respiration.",
        effects: [
            {
                name: "Swim speed",
                description: "Increases swim speed",
                amount: 15,
                unit: "%",
            },
            {
                name: "Oxygen",
                description: "Increases underwater oxygen time",
                amount: 10,
                unit: "%",
            },
        ],
    },
    {
        name: "Cardio fan",
        image: "images/mutations/cardioFan.png",
        description:
            "Exhausting your tiny body over and over again, your cells adopt a more efficient respiration process.",
        effects: [
            {
                name: "Stamina regen",
                description: "Increases stamina regen",
                amount: 30,
                unit: "%",
            },
            {
                name: "Exhaustion time",
                description: "Decreases exhaustion time",
                amount: 30,
                unit: "%",
            },
        ],
    },
    {
        name: "Reliable friend",
        image: "images/mutations/reliableFriend.png",
        description:
            "Life in the lawn is filled with narrow escapes and you've been right there for all of it. Your muscle memory, mixed with hope and determination, makes a harrowing rescue all the more probable.",
        effects: [
            {
                name: "Revive speed",
                description: "Increases revive speed",
                amount: 75,
                unit: "%",
            },
        ],
    },
    {
        name: "Fresh defense",
        image: "images/mutations/freshDefense.png",
        description:
            "A plume of mint dust envelopes you and sends a cool wave rippling through your skin. Cells activate a freshness layer to combat the sting of all that stinks and burns.",
        effects: [
            {
                name: "Gas resistance",
                description: "Increases damage from gas attacks",
                amount: 50,
                unit: "%",
            },
            {
                name: "Burn resistance",
                description: "Increases damage from burning attacks",
                amount: 50,
                unit: "%",
            },
            {
                name: "Sizzle protection",
                description: "Sizzle rate reduction",
                amount: 75,
                unit: "%",
            },
        ],
    },
    {
        name: "Spicy safety",
        image: "images/mutations/spicySafety.png",
        description:
            "Spicy sediment seeps inside your bloodstream. The fiery wall protects you from all that stabs and smashes.",
        effects: [
            {
                name: "Stabbing resistance",
                description: "Increases damage from stabbing attacks",
                amount: 50,
                unit: "%",
            },
            {
                name: "Smashing resistance",
                description: "Increases damage from smashing attacks",
                amount: 50,
                unit: "%",
            },
        ],
    },
    {
        name: "Sour sensation",
        image: "images/mutations/sourSensation.png",
        description:
            "Electrifying sour sensations have pushed your taste receptors to their limits, igniting a cascade of static shocks that fiercely strike back at your adversaries.",
        effects: [
            {
                name: "Reflect damage",
                description: "Damage taken will reflect back to your attacker.",
                amount: 25,
                unit: "%",
            },
        ],
    },
    {
        name: "Ant-nihilator",
        image: "images/mutations/ant-nihilator.png",
        description:
            "The ant has become a familiar threat, and you begin to know your enemy inside and out. Death and devastation greet all ants that face you.",
        effects: [
            {
                name: "Ant damage",
                description: "Increases damage dealt to Black Ant, Fire Ants, and Red Ants.",
                amount: 25,
                unit: "%",
            },
            {
                name: "Ant defense",
                description: "Increases damage resistance to Black Ants, Fire Ants, and Red Ants",
                amount: 10,
                unit: "%",
            },
        ],
    },
    {
        name: "Mom genes",
        image: "images/mutations/momGenes.png",
        description: "Your vocal cords stretch to form spiderling summoning motherly cries.\n",
        effects: [
            {
                name: "Mom genes",
                description: "Attacks have a 10% chance to spawn a friendly Spiderling with 25 health.",
                amount: 0,
                unit: undefined,
            },
            {
                name: "Poison damage",
                description: "Increases damage dealt with poison attacks by 50%.",
                amount: 50,
                unit: "%",
            },
        ],
    },
    {
        name: "Mithridatism",
        image: "images/mutations/mithridatism.png",
        description:
            "Your body has been ravaged by the thrilling surge of poison coursing through so many times that it has built up a permanent resistance.",
        effects: [
            {
                name: "Poison resistance",
                description: "Increases resistance to poison damage.",
                amount: 75,
                unit: "%",
            },
        ],
    },
    {
        name: "Truffle tussle",
        image: "images/mutations/truffleTussle.png",
        description: "The fungus of the haze has seeped into your tiny being fusing its power to your unarmed attacks.",
        effects: [
            {
                name: "Truffle tussle",
                description:
                    "Unarmed attacks have a 10% chance to create a fungal explosion, dealing 75 explosive damage to anything in its radius.",
                amount: 0,
                unit: undefined,
            },
        ],
    },
    {
        name: "Mantsterious stranger",
        image: "images/mutations/mantsteriousStranger.png",
        description: "You feel as though an unlikely ally is always looking out for you.\n",
        effects: [
            {
                name: "Mantsterious stranger",
                description:
                    "Has a 2% chance to spawn a friendly Mant to fight for you when attacking creatures before eventually dying.",
                amount: 0,
                unit: undefined,
            },
        ],
    },
    {
        name: "Apex predator",
        image: "images/mutations/apexPredator.png",
        description:
            "You've become the strongest creature in the backyard, and are able to bring out the hidden strength in weapons made from bosses.",
        effects: [
            {
                name: "Apex predator: Club of the mother demon",
                description:
                    "Has a 20% chance to apply Venom when attacking. The Venom deals 45 damage every 5 seconds for 15 seconds and bypasses all Poison resistances/immunities.",
                amount: 0,
                unit: undefined,
            },
            {
                name: "Apex predator: Scythe of blossoms",
                description:
                    "Has a 20% chance when attacking to increase the Scythe of Blossoms' attack speed by 25% for 10 seconds. Switching to another weapon while this effect is active gives a 75% damage loss to all weapons for the remaining time.",
                amount: 0,
                unit: undefined,
            },
            {
                name: "Apex predator: Bards bow",
                description:
                    "Has a 20% chance, when attacking, to give a buff that has a 25% chance to spawn in a friendly Wasp that will attack aggressive foes. The Wasp will immediately die after performing an attack or after 15 seconds have passed. The Wasp can only use 'Charged Sting', dealing 90 stabbing damage as well as inflicting bleed and poison debuffs that deal 60 damage across 10 seconds.",
                amount: 0,
                unit: undefined,
            },
        ],
    },
    {
        name: "Corporate kickback",
        image: "images/mutations/corporateKickback.png",
        description: "Retaliate against the weak. Converting blocked attacks to energy give attacks massive lifesteal.",
        effects: [
            {
                name: "Corporate kickback",
                description:
                    "Blocked attacks have a 5% chance to trigger an effect that will cause all melee attacks to replenish player life equal to the amount of damage they deal for 5 seconds",
                amount: 0,
                unit: undefined,
            },
        ],
    },
    {
        name: "Shocking dismissal",
        image: "images/mutations/shockingDismissal.png",
        description:
            "Fits of anger become fierce retaliation. Blocked attacks convert their energy to static electricity, occasionally unleashing a powerful blast.",
        effects: [
            {
                name: "Shocking dismissal",
                description:
                    "Blocked attacks have a 20% chance to trigger an effect that will turn the next melee attack into an electric AOE shock that deals 75 shock damage and 40 stun to any enemies nearby.",
                amount: 0,
                unit: undefined,
            },
        ],
    },
    {
        name: "Bardic inspiration",
        image: "images/mutations/bardicInspiration.png",
        description: "The twing of your bow string mimics that of a harp empowering your allies as you shoot.",
        effects: [
            {
                name: "Bardic inspiration",
                description:
                    "Gives all of your bow and crossbow attacks a ~25% chance to play a bardic melody. This melody has a chance to apply a buff to the user and all nearby players for 10 seconds:\n* Attack Aria: increases critical strike chance by 10%.\n* Critical Concerto: increases damage of all attacks by 20%.\n* Obstinate Overtune: reduces damage taken by 25%.\n* Only one of these three bard buffs may be active at a time.\n* Soothing Sonata : 25% to heal 5 health for every 2 seconds for 10 seconds. (Requires Sleek Bard's Tudor)",
                amount: 0,
                unit: undefined,
            },
        ],
    },
    {
        name: "Guard dog",
        image: "images/mutations/guardDog.png",
        description:
            "Guarding locations against mobs of angry creatures has awakened you protective instincts. Deal increased damage to creatures involved in defense events.",
        effects: [
            {
                name: "Guard dog",
                description:
                    "Extra attack damage during Factional Raids, MIX.Rs, the Spicy Coaltana Event, and the JavaMatic Event.",
                amount: 50,
                unit: "%",
            },
        ],
    },
    {
        name: "Spore lord",
        image: "images/mutations/sporeLord.png",
        description:
            "Toppling the mother of infection has granted you the domain over all things fungal. Dealing damage with explosives gives you a stacking random buff that lasts until combat ends.",
        effects: [
            {
                name: "Spore lord",
                description:
                    "Dealing any source of explosive damage to foes has various chances to apply buffs to the player that lasts until they leave combat:\n* 10% chance to give a 1% resistance to all explosive damage. Stacks exponentially if given multiple times.\n* 3% chance to give a 1% increase to movement speed. Stacks exponentially if given multiple times.\n* 3% chance to give a passive regen of 0.5 health every 3 seconds. Stacks additively if given multiple times.\n* 1% chance to give a 1% increase to explosive damage. Stacks exponentially if given multiple times.",
                amount: 0,
                unit: undefined,
            },
        ],
    },
];
