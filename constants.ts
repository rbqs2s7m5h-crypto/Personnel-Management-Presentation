
import { SlideData, SlideType } from './types';

export const MAIN_SLIDES: SlideData[] = [
  // SLIDE 1
  {
    id: '1',
    type: SlideType.TITLE,
    title: 'Leading Global Teams Effectively',
    subtitle: 'Cultural Intelligence in Practice',
    speakerNotes: 'Welcome. Today we explore how cultural intelligence (CQ) is the key to navigating the complexities of global leadership, moving beyond simple awareness to true adaptability.'
  },
  // SLIDE 2
  {
    id: '2',
    type: SlideType.CONTENT,
    title: 'Western Training Meets a Collectivist World',
    bullets: [
      "Western Ideal: Leadership assumes values of autonomy, empowerment, and authenticity.",
      "Global Reality: 70% of the world's workforce operates in collectivist and hierarchical cultures.",
      "The Trap: Applying individualist tools in collectivist contexts leads to disorientation."
    ],
    speakerNotes: 'Western managers face a trap. Their expertise is rooted in individualistic contexts—autonomy, empowerment, authenticity. Yet, according to GLOBE Leadership Studies, 70% of the world is collectivist and hierarchical.'
  },
  // SLIDE 3
  {
    id: '3',
    type: SlideType.CONTENT,
    title: 'The Solution: Cultural Intelligence',
    subtitle: 'Adaptability Over Assumption',
    bullets: [
      "Definition: The capability to function effectively across national, ethnic, and organizational cultures.",
      "The Shift: It is not about discarding Western tools, but expanding the toolbox.",
      "Core Traits: Perception, Adaptation, and Flexibility."
    ],
    speakerNotes: 'The solution isn’t to discard Western advice, but to expand the toolbox. Cultural Intelligence (CQ) allows leaders to adapt their approach based on the context—Perception, Adaptation, and Flexibility.'
  },
  // SLIDE 4
  {
    id: '4',
    type: SlideType.CONTENT,
    title: 'Autonomy Motivates Some.',
    subtitle: 'Overwhelms Others.',
    sectionTitle: 'Mistake 1: Autonomy',
    bullets: [
      "Western Assumption: Latitude and freedom drive engagement and innovation.",
      "Global Reality: Without clear hierarchy, autonomy can feel like a lack of leadership.",
      "Strategy: Adjust guidance levels. Some need a blank slate; others need a map."
    ],
    speakerNotes: 'We assume autonomy drives engagement. But for many, especially in hierarchical cultures, being told to "set your own goals" feels like the leader is not doing their job. They need clear guidance to feel supported.'
  },
  // SLIDE 5
  {
    id: '5',
    type: SlideType.CASE_STUDY,
    title: 'Individual Recognition Failed.',
    subtitle: 'Collective Recognition Worked.',
    sectionTitle: 'Case: McDonald’s India',
    bullets: [
      "The Failure: 'Employee of the Month' singled out one person, causing social friction.",
      "The Backlash: Winners were teased for acting superior and betraying the group.",
      "The Fix: 'Team of the Month' honored collective success, aligning with local values."
    ],
    speakerNotes: 'In India, McDonald’s found that "Employee of the Month" caused embarrassment and social friction. No one wanted to be singled out. Shifting to "Team of the Month" aligned with collectivist values and improved morale.'
  },
  // SLIDE 6
  {
    id: '6',
    type: SlideType.CASE_STUDY,
    title: 'Reframing Participation Across Cultures',
    sectionTitle: 'Case: Everfresh',
    bullets: [
      "The Conflict: 'Speak Up' campaign viewed as a directive to challenge authority.",
      "The Adaptation: Private, written, and group-curated feedback channels were introduced.",
      "The Result: Innovation flowed without violating hierarchical norms."
    ],
    speakerNotes: 'Everfresh realized their "Speak Up" campaign was intimidating in Asia. They reframed participation to allow for written input and collective feedback, respecting hierarchy while still gathering ideas.'
  },
  // SLIDE 7
  {
    id: '7',
    type: SlideType.CONTENT,
    title: 'Safety ≠ Debate Everywhere',
    sectionTitle: 'Mistake 2: Psychological Safety',
    bullets: [
      "Google's Model: Psychological Safety = Comfort with open debate and friction.",
      "Global Definition: Psychological Safety = Harmony, saving face, and avoiding public conflict.",
      "The Risk: Forcing open debate can actively destroy safety in many cultures."
    ],
    speakerNotes: 'In Silicon Valley, psychological safety means open debate. In many other cultures, safety means harmony and not causing loss of face. Forcing debate can actually destroy safety.'
  },
  // SLIDE 8
  {
    id: '8',
    type: SlideType.CONTENT,
    title: 'Shared Rules. Shared Expectations.',
    sectionTitle: 'Norms Enable Safety',
    bullets: [
      "Strategy: Co-create explicit Team Norms to govern behavior.",
      "Example: 'Any campaign must be tested in 3 markets within 6 weeks.'",
      "The Win: Norms balance conflicting values like Speed (Individual) vs. Thoroughness (Collective)."
    ],
    speakerNotes: 'To build true safety, co-create norms. Define expectations like "We test in 3 markets within 6 weeks" to balance speed (Western) and thoroughness (Global).'
  },
  // SLIDE 9
  {
    id: '9',
    type: SlideType.CONTENT,
    title: 'Ask: “What Are We Missing?”',
    sectionTitle: 'Speaking Up Globally',
    bullets: [
      "The Wrong Question: 'Do you have any questions?' (Invites silence; implies completion).",
      "The Right Question: 'What are we missing?' (Invites contribution; implies gaps exist).",
      "The Shift: Normalizes the act of finding errors without challenging the leader's authority."
    ],
    speakerNotes: 'Change your questions. Instead of "Are there any questions?" (Yes/No), ask "What are we missing?" This implies gaps exist and invites contribution without confrontation.'
  },
  // SLIDE 10
  {
    id: '10',
    type: SlideType.CONTENT,
    title: 'Overemphasis Creates Distance',
    sectionTitle: 'Mistake 3: Diversity',
    bullets: [
      "The Trap: Over-indexing on differences creates anxiety and rigid stereotyping.",
      "The Consequence: Reduced knowledge sharing as people fear saying the wrong thing.",
      "The Goal: Acknowledge diversity, but center the team on shared objectives."
    ],
    speakerNotes: 'Focusing too much on differences can lead to anxiety and stereotyping (e.g., "The German Engineer"). We must acknowledge diversity but center the team on shared purpose.'
  },
  // SLIDE 11
  {
    id: '11',
    type: SlideType.CONTENT,
    title: 'Shift Into Their Viewpoint',
    sectionTitle: 'Perspective-Taking',
    bullets: [
      "Empathy vs Perspective: Empathy feels; Perspective-Taking thinks.",
      "The Exercise: Describe a conflict from the opposing view in the first person.",
      "The Result: Humanizes teammates and unlocks cognitive flexibility to solve problems."
    ],
    speakerNotes: 'Move from empathy (feeling for them) to perspective-taking (thinking like them). Ask team members to describe a problem from another’s point of view to reduce negative stereotyping.'
  },
  // SLIDE 12
  {
    id: '12',
    type: SlideType.CONTENT,
    title: 'Shared Challenges Reduce Division',
    sectionTitle: 'Shared Goals Unite',
    bullets: [
      "Robbers Cave Experiment: Artificial divisions create real conflict.",
      "The Antidote: A Shared Challenge (e.g., fixing the camp water supply).",
      "Application: Unite the team against a common external goal or deadline."
    ],
    speakerNotes: 'Research shows that shared goals unite divided groups. Focus on the common enemy or the common mission to bridge cultural gaps, just like in the Robbers Cave experiment.'
  },
  // SLIDE 13
  {
    id: '13',
    type: SlideType.CONTENT,
    title: 'Vulnerability Isn’t Universal Trust-Building',
    sectionTitle: 'Mistake 4: Transparency',
    bullets: [
      "Western Myth: Vulnerability and confessing mistakes builds trust.",
      "Global Reality: In hierarchical cultures, confessing weakness erodes authority.",
      "Expectation: Leaders restore trust through action and competence, not words."
    ],
    speakerNotes: 'Western leaders are taught to be vulnerable. But in hierarchical cultures, a leader confessing weakness can erode authority and trust. They expect you to fix it, not talk about it.'
  },
  // SLIDE 14
  {
    id: '14',
    type: SlideType.CONTENT,
    title: 'Clarity Over Confession',
    sectionTitle: 'Culturally Intelligent Trust',
    bullets: [
      "Misconception: Indirect communication is dishonest or passive-aggressive.",
      "Reality: Indirect communication relies on context to maintain dignity.",
      "Goal: Achieve absolute clarity without the blunt edge."
    ],
    speakerNotes: 'Global employees value clarity above all. You can be clear about the situation without over-sharing personal doubts that might unsettle the team.'
  },
  // SLIDE 15
  {
    id: '15',
    type: SlideType.CONTENT,
    title: 'Protect Dignity. Preserve Trust.',
    sectionTitle: 'Saving Face',
    bullets: [
      "Strategy: Use a deputy or intermediary to share sensitive news.",
      "The Benefit: Allows questions to be asked without direct confrontation.",
      "The Outcome: Everyone saves face. Authority is maintained. Trust is preserved."
    ],
    speakerNotes: 'Use intermediaries or deputies to share sensitive news. This allows questions to be asked without direct confrontation, preserving dignity for everyone.'
  },
  // SLIDE 15.5 (CASE INTRO)
  {
    id: 'case-intro',
    type: SlideType.TITLE,
    title: 'Real World Cases',
    subtitle: 'Theory in Practice',
    speakerNotes: 'We’ve covered the principles. Now, let’s see how global giants like Toyota, Netflix, and Airbnb have applied—or misapplied—these concepts in the real world.'
  },
  // SLIDE 16
  {
    id: '16',
    type: SlideType.CASE_STUDY,
    title: 'Consensus vs. Individual Initiative',
    sectionTitle: 'Case: Toyota Japan vs USA',
    bullets: [
      "Conflict: US Individual Speed vs. Japanese Consensus (Ringi).",
      "Hybrid Model: Managers align individually before the official meeting.",
      "Result: Decisions are made with both speed and total buy-in."
    ],
    speakerNotes: 'Toyota bridged the gap between US individual speed and Japanese consensus (Ringi) by creating a hybrid decision-making model where alignment happens before the meeting.'
  },
  // SLIDE 17
  {
    id: '17',
    type: SlideType.CASE_STUDY,
    title: 'Radical Candor Didn’t Travel Well',
    sectionTitle: 'Case: Netflix Asia',
    bullets: [
      "Conflict: 'Radical Candor' was perceived as aggressive and rude.",
      "Adaptation: 'Nemawashi'—laying the groundwork informally.",
      "Result: Indirect feedback mechanisms created direct alignment."
    ],
    speakerNotes: 'Netflix found that "Radical Candor" was too aggressive for Asia. They adapted by using more indirect feedback and pre-meeting alignment (nemawashi).'
  },
  // SLIDE 18
  {
    id: '18',
    type: SlideType.CASE_STUDY,
    title: 'Belonging Means Something Different Everywhere',
    sectionTitle: 'Case: Airbnb China',
    bullets: [
      "Conflict: 'Belong Anywhere' (Nomadism) vs. Chinese desire for stability.",
      "Rebrand: 'Aibiying' (Welcome with Love).",
      "Result: Resonated with deep cultural values of family and hospitality."
    ],
    speakerNotes: 'Airbnb’s "Belong Anywhere" didn’t resonate as nomadism in China. They rebranded to Aibiying ("Welcome with Love") to emphasize hospitality and stability.'
  },
  // SLIDE 19
  {
    id: '19',
    type: SlideType.TITLE,
    title: 'Cultural Intelligence Integrates Everything',
    subtitle: '', // Visuals handle the concepts
    bullets: [], // No boxes
    speakerNotes: 'In conclusion, CQ is the integrator. It allows us to balance autonomy, safety, diversity, and transparency to lead truly effective global teams.'
  }
];
