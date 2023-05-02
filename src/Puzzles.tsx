import React from "react"
import Crossword from "@jaredreisinger/react-crossword"

export default function Puzzles() {
    const [puzzle, setPuzzle] = React.useState(null)
    const across = [
        "1. Three books #1 (documentary)",
        // "13. (blank clue)",
        // "15. (blank clue)",
        // "19. (blank clue)",
        // "28. (blank clue)",
        // "31. (blank clue)",
        // "33. (blank clue)",
        // "37. (blank clue)",
        "42. Author of Three books #2",
        // "51. (blank clue)",
        "53. Author of Three books #3",
        '7. "Road" in Italian',
        // "14. (blank clue)",
        // "52. (blank clue)",
        "54. Stanford's logo",
        // "29. (blank clue)",
        // "36. (blank clue)",
        // "17. (blank clue)",
        "39. Car repair chain",
        // "46. (blank clue)",
        // "16. (blank clue)",
        // "32. (blank clue)",
        "23. ___ Sofia",
        // "38. (blank clue)",
      ];
      const down = [
        // "1. (blank clue)",
        "2. New Year's Eve",
        // "3. (blank clue)",
        "4. \"me\" in french",
        // "5. (blank clue)",
        // "6. (blank clue)",
        "7. Social security numbers",
        // "8. (blank clue)",
        // "9. (blank clue)",
        // "10. (blank clue)",
        "11. \"God\" in Latin",
        // "12. (blank clue)",
        // "19. (blank clue)",
        // "20. (blank clue)",
        // "21. (blank clue)",
        "42. The letter 'M'",
        // "43. (blank clue)",
        "44. Yves Saint-Laurent",
        "49. Exchange-traded product(?)",
        // "50. (blank clue)",
        // "27. (blank clue)",
        "26. \"Wow, my clothes stink!\"",
        // "25. (blank clue)",
        // "29. (blank clue)",
        // "22. (blank clue)",
        // "45. (blank clue)",
        // "41. (blank clue)",
        // "48. (blank clue)",
        "47. Off-campus housing",
        // "24. (blank clue)",
        // "18. (blank clue)",
        // "34. (blank clue)",
        // "30. (blank clue)",
        // "40. (blank clue)",
        // "35. (blank clue)",
        // "38. (blank clue)"
    ]
      
      const acrossObject: { [key: number]: string } = {};
      const downObject: { [key: number]: string } = {};
      
      for (const str of across) {
        const [key, value] = str.split(". ");
        acrossObject[parseInt(key)] = value;
      }
      console.log(acrossObject);

      for (const str of down) {
        const [key, value] = str.split(". ");
        downObject[parseInt(key)] = value;
      }
    console.log(downObject);
    
    return (
        <div>
        <h1>Puzzles</h1>
        {puzzle && <Crossword data={puzzle} />}
        </div>
    )
}