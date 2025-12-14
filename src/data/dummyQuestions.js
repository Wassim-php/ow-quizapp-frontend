export const dummyQuestions = [
  {
    id: 1,
    text: "What is the primary function of the A320's Flight Augmentation Computer (FAC)?",
    options: [
      { id: 1, text: "Engine FADEC control and thrust management." },
      { id: 2, text: "Rudder trim, yaw damping, and flight envelope protection." },
      { id: 3, text: "Autopilot guidance and navigation calculation." },
      { id: 4, text: "Cabin pressurization and air conditioning system management." },
    ],
    correctAnswerId: 2,
    explanation: "The FAC controls the rudder trim and yaw damping functions and also provides flight envelope protection (speed limits and alpha floor).",
  },
  {
    id: 2,
    text: "In the event of a total electrical failure (loss of AC BUS 1 and 2), which electrical bus is automatically powered?",
    options: [
      { id: 1, text: "AC ESS BUS" },
      { id: 2, text: "DC ESS BUS" },
      { id: 3, text: "HOT BAT BUS" },
      { id: 4, text: "AC STAT BUS" },
    ],
    correctAnswerId: 2,
    explanation: "In a total electrical failure (loss of AC power), the Emergency Generator will power the AC ESS BUS. If the Emergency Generator fails, the batteries are the only source, powering the DC ESS BUS.",
  },
  {
    id: 3,
    text: "According to the FCOM, what is the maximum permissible oil temperature for the CFM56 engine?",
    options: [
      { id: 1, text: "140°C" },
      { id: 2, text: "155°C" },
      { id: 3, text: "165°C" },
      { id: 4, text: "175°C" },
    ],
    correctAnswerId: 3,
    explanation: "The maximum permissible oil temperature for the CFM56 engine is 165°C for a limited time.",
  },
];