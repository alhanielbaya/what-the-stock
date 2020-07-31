export default function () {
  const keywords = [
    "creepy",
    "disfigured faces",
    "scary",
    "bloody",
    "creepy dolls",
    "crying clowns",
  ];

  const randomIndex = Math.floor(Math.random() * keywords.length + 1);

  return keywords[randomIndex];
}
