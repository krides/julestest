// 1. Story Data Structure
const storyData = [
  {
    id: "start",
    passageText: "The year is 401 BC. You are Xenophon, an Athenian philosopher and adventurer, invited by your friend Proxenus to join the expedition of Cyrus the Younger. Cyrus, brother to the Persian King Artaxerxes II, is gathering a massive army of Greek mercenaries, ostensibly to campaign against mountain tribes in Pisidia. However, whispers suggest a grander, more perilous goal: to march against the King himself and claim the Persian throne. Ποῦ πορευόμεθα; Whither are we marching?",
    asciiArt: `
   .--^.--.--^.--.--^.--.
  /＿＿＿\\/＿＿＿\\/＿＿＿\\
  |＿＿＿||＿＿＿||＿＿＿|
 (Marching Army & Tents)
    `,
    choices: [
      { text: "Trust Proxenus and Cyrus's declared intentions.", nextPassageId: "pisidia_campaign", icon: "shield" },
      { text: "Question the true purpose of this vast army.", nextPassageId: "question_cyrus", icon: "eye" }
    ]
  },
  {
    id: "pisidia_campaign",
    passageText: "You express your belief in the stated goal. The march towards Pisidia is arduous but uneventful. The mountain tribes offer little resistance. Cyrus rewards his troops, but a sense of unease lingers. Is this all there is? Some veterans mutter about the King's displeasure.",
    asciiArt: `
      /\\
     /  \\
    /____\\
   /______\\
  (Pisidian Mountains)
    `,
    choices: [
      { text: "Continue to follow Cyrus without question.", nextPassageId: "march_east_blindly", icon: "arrow-right" },
      { text: "Seek out other Greek generals to discuss concerns.", nextPassageId: "council_of_generals", icon: "users" }
    ]
  },
  {
    id: "question_cyrus",
    passageText: "You discreetly voice your doubts to Proxenus and other senior commanders. Many share your apprehension. Cyrus, sensing the disquiet, finally reveals his true plan at Tarsus: the target is Artaxerxes. He offers increased pay and promises of immense wealth. Εἰς τὸ πρόσθεν! Forward!",
    asciiArt: `
      .--.
     /    \\
    |  ()  |  ()
    \\    /==()
     '--'  ()
 (Cyrus reveals coins)
    `,
    choices: [
      { text: "Pledge loyalty to Cyrus's ambitious quest.", nextPassageId: "cunaxa_approach", icon: "swords" },
      { text: "Consider the risks too great; this is treason.", nextPassageId: "desertion_attempt", icon: "run" }
    ]
  },
  {
    id: "march_east_blindly",
    passageText: "You continue your march eastwards, trusting Cyrus implicitly. The army swells, but so does the tension. The landscape changes, becoming flatter, more arid. The Euphrates river becomes your constant companion. The goal remains shrouded in Cyrus's ambition.",
    asciiArt: `
  /~~~~~~~\\
 /         \\____
 \\         /
  \\_______/
 (Euphrates River Bend)
    `,
    choices: [
        { text: "Prepare for a major confrontation.", nextPassageId: "cunaxa_approach", icon: "shield-alert"},
        { text: "Hope for a peaceful resolution (unlikely).", nextPassageId: "ending_defeat_unprepared", icon: "cross"}
    ]
  },
  {
    id: "council_of_generals",
    passageText: "You and other concerned generals, including Clearchus, confer. The consensus is that Cyrus is likely marching on Babylon. While the risks are immense, the potential rewards and the danger of turning back now are also great. A fragile unity is forged. Πάντες οἱ στρατηγοὶ καὶ οἱ λοχαγοὶ συνῆλθον. All the generals and captains assembled.",
    asciiArt: `
   o    o    o
  /|\\  /|\\  /|\\
  / \\  / \\  / \\
 (Council of Generals)
    `,
    choices: [
      { text: "Agree to proceed, demanding clarity from Cyrus.", nextPassageId: "question_cyrus", icon: "thumbs-up" },
      { text: "Argue for turning back or seeking terms with Artaxerxes.", nextPassageId: "desertion_attempt", icon: "flag-triangle-left" }
    ]
  },
  {
    id: "cunaxa_approach",
    passageText: "The army marches towards Cunaxa, near Babylon. The King's forces are spotted. Battle is imminent. A cry goes up: \"Εἰς τὰ ὅπλα!\" (To arms!). Cyrus rides along the lines, inspiring his Greek hoplites. Ἡ σφαγὴ μεγάλη ἐγένετο. The slaughter was great.",
    asciiArt: `
 >>>>>>><<<<<<<
   \\  |||||  /
    \\ ||||| /
     VVVVVVV
 (Armies Approach)
    `,
    choices: [
      { text: "Fight valiantly for Cyrus!", nextPassageId: "ending_victory_cyrus_wins_temporarily", icon: "sword" },
      { text: "Fight, but prioritize Greek survival.", nextPassageId: "ending_defeat_cyrus_falls", icon: "shield-check" }
    ]
  },
  {
    id: "desertion_attempt",
    passageText: "The thought of treason and the might of the Persian Empire are too much. You attempt to persuade a contingent of soldiers to desert and seek terms with Artaxerxes. However, Cyrus's spies are everywhere. Your plot is discovered. Ὁ θάνατος! Death!",
    asciiArt: `
  (  (o)  )
   \\  ^  /
    ||___||
    ||   ||  --> (逃)
 (Spy & Fleeing Figure)
    `,
    choices: [
        { text: "Face your fate.", nextPassageId: "ending_defeat_execution", icon: "skull"}
    ]
  },
  {
    id: "ending_victory_cyrus_wins_temporarily", //This is a temporary state
    passageText: "The Greek mercenaries fight with unmatched discipline and courage. The King's left flank is broken! A cheer erupts: \"Νικῶμεν!\" (We are victorious!). Cyrus, seeing an opportunity, charges towards Artaxerxes himself. It is a moment of potential triumph... but Cyrus is struck down in the melee. Though the Greeks 'won' their part of the battle, their leader is dead. Cyrus ἀποθνῄσκει. Cyrus is killed.",
    asciiArt: `
      \\  |  /
       \\ | /
      ---X---
       / | \\
      /  |  \\
 (Cyrus Struck Down)
    `,
    choices: [
        { text: "What now? Assess the dire situation.", nextPassageId: "post_cunaxa_chaos", icon: "help-circle"}
    ]
  },
  {
    id: "post_cunaxa_chaos",
    passageText: "With Cyrus dead, the expedition's purpose is shattered. The Greeks are victorious on their flank but isolated deep within the Persian Empire. Tissaphernes, a Persian satrap, offers negotiations, but treachery is suspected. The Ten Thousand must now find their own way home. Σπονδαί! Truce! ... Or is it?",
    asciiArt: `
      ?   /\\   ?
         |  |
     ---  --  ---
    (Chaos & Broken Standard)
      ?     ?
    `,
    choices: [
        { text: "Elect new leaders and begin the march north. Θάλαττα! Θάλαττα!", nextPassageId: "ending_anabasis_begins", icon: "compass"},
        { text: "Trust Tissaphernes's offer of safe passage.", nextPassageId: "ending_defeat_tissaphernes_treachery", icon: "handshake"}
    ]
  },
  {
    id: "ending_anabasis_begins",
    passageText: "You, Xenophon, are chosen as one of the new leaders. The great 'Ἀνάβασις' – the famous march of the Ten Thousand – begins. Through hostile lands, snow-covered mountains, and constant skirmishes, you lead your men. Finally, the cry is heard: Θάλαττα! Θάλαττα! The Sea! The Sea! You have reached Trapezus on the Black Sea. Νίκη! Victory!",
    asciiArt: `
  \\  O  /
   \\ | /
 ~~~~~~~~~~~~~
  ~ ΘΑΛΑΤΤΑ! ~
 ~~~~~~~~~~~~~
 (The Sea & Sun)
    `,
    choices: [] // True ending
  },
  {
    id: "ending_defeat_cyrus_falls",
    passageText: "Despite your best efforts to protect the Greek contingent, the death of Cyrus throws the entire army into disarray. Surrounded by the numerically superior Persian forces, and with their charismatic leader gone, the mercenaries are eventually overwhelmed. The dream of conquest dies with Cyrus. Ἡττήθημεν. We are defeated.",
    asciiArt: `
      \\ /
       X
      / \\
   <//   \\\\>
 (Broken Shield/Weapons)
    `,
    choices: [] // Ending
  },
  {
    id: "ending_defeat_execution",
    passageText: "Cyrus shows no mercy to traitors. You are executed swiftly as an example to others. Your journey with the Ten Thousand ends before it truly began. Τέλος. The End.",
    asciiArt: `
      ____
     |    |
     |RIP |
     |____|
    /      \\
   (Grave)
    `,
    choices: [] // Ending
  },
  {
    id: "ending_defeat_unprepared",
    passageText: "Your hope for a peaceful outcome was naive. Caught unprepared for the scale of Cyrus's ambition and the King's wrath, the army is decisively crushed at Cunaxa. Your lack of foresight contributed to the disaster. Πάντες ἀπώλοντο. All were lost.",
    asciiArt: `
    _______
   |       |
   | CRUSH!|
   |_______|
      \\ | /
       \\|/
      --X--
 (Crushing Defeat)
    `,
    choices: [] // Ending
  },
  {
    id: "ending_defeat_tissaphernes_treachery",
    passageText: "Trusting Tissaphernes proves to be a fatal mistake. During a parley, the Greek generals, including Proxenus and Clearchus, are treacherously seized and executed. The army is left leaderless and vulnerable. This act of betrayal galvanizes the remaining Greeks to fight their way out, but your initial trust led to this disaster. Δόλος! Treachery!",
    asciiArt: `
   🤝
     \\
      🗡️
 (Betrayal - Handshake & Dagger)
    `,
    choices: [] // Ending
  }
];

// 3. DOM Element References
const asciiArtDisplay = document.getElementById('ascii-art-display');
const storyPassageDiv = document.getElementById('story-passage');
const choicesArea = document.getElementById('choices-area');
let currentPassageP = null; // To keep track of the current paragraph for animation

// 4. renderPassage(passageId) Function
function renderPassage(passageId) {
    const passage = storyData.find(p => p.id === passageId);

    if (!passage) {
        console.error("Passage not found:", passageId);
        return;
    }

    // Update ASCII Art
    asciiArtDisplay.textContent = passage.asciiArt;

    // Animate Text
    const newPassageP = document.createElement('p');
    newPassageP.textContent = passage.passageText;

    if (currentPassageP) {
        currentPassageP.classList.remove('fade-in');
        currentPassageP.classList.add('fade-out');
        setTimeout(() => {
            storyPassageDiv.innerHTML = ''; // Clear old passage
            newPassageP.classList.add('fade-in');
            storyPassageDiv.appendChild(newPassageP);
            currentPassageP = newPassageP;
        }, 500); // Match CSS transition time
    } else {
        storyPassageDiv.innerHTML = ''; // Clear if no previous passage
        newPassageP.classList.add('fade-in');
        storyPassageDiv.appendChild(newPassageP);
        currentPassageP = newPassageP;
    }

    // Clear old choices and create new ones
    choicesArea.innerHTML = '';
    if (passage.choices && passage.choices.length > 0) {
        passage.choices.forEach(choice => {
            const button = document.createElement('button');
            button.classList.add('choice-button');

            if (choice.icon) {
                const iconElement = document.createElement('i');
                iconElement.setAttribute('data-lucide', choice.icon);
                button.appendChild(iconElement); // Prepend icon
            }
            
            const textNode = document.createTextNode(" " + choice.text); // Add space for icon
            button.appendChild(textNode);

            button.addEventListener('click', () => renderPassage(choice.nextPassageId));
            choicesArea.appendChild(button);
        });
    }

    // Render Lucide icons
    lucide.createIcons();
}

// 5. startGame() Function
function startGame() {
    renderPassage("start");
}

// 6. Initial Call
document.addEventListener('DOMContentLoaded', startGame);
// Alternatively, as script is at the end of body, startGame() can be called directly.
// Using DOMContentLoaded for robustness.
