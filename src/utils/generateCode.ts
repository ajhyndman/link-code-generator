// The community has some commonly used codes, don't return those.
const codeBlacklist = new Set([
  7101,
  7102,
  7103,
  7104,
  7105,
  7106,
  7107, // Onix with Metal Coat
  7108, // Rhydon with protector
  7109, // Feebas with Prism Scale
  7110, // Dusclops with Reaper Cloth
  7111, // Swirlix with Whipped Dream
  7112, // Spritzee with Satchel

  7201, // Deino – Larvitar
  7202, // Jangmo-o – Goomy
  7203, // Farfetch’d Galar – Ponyta Galar
  7204, // Turtonator – Drampa
  7205, // Mawile – Sableye
  7206, // Gothita – Solosis
  7207, // Rufflet – Vullaby
  7208, // Sawk – Throh
  7209, // Seedot – Lotad
  7210, // Swirlix – Spritzee
  7211, // Scarggy- Croagunk
  7212, // Solrock – Lunatone
  7213, // Passimian – Oranguru
  7214, // Basculin (Red) – Basculin (Blue)
  7215, // Darumaka Galar – Corsola Galar
  7216, // Flapple – Appletun
  7217, // Stonjourner – Eiscue
  7218, // Zacian – Zamazenta

  7301, // Grookey – Scorbunny
  7302, // Grookey – Sobble
  7303, // Scorbunny – Sobble

  4448, // Ditto – Ditto
]);

export const generateCode = (): string => {
  const value = Math.trunc(Math.random() * 10000);

  if (!codeBlacklist.has(value)) {
    const string = value.toString();
    return string.padStart(4, '0');
  }
  return generateCode();
};
