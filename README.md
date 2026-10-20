# Maths Question Bank

Live site: https://themaheshpatel.github.io/question-bank/

A static website (no server, no database): `index.html` + `questions.js`.

## Adding questions (the routine)
1. Send Claude your questions (PDF, photo or text).
2. Claude returns a new `questions.js` with levels and chapter/subtopic tags.
3. In this repository: Add file → Upload files → drop `questions.js` → Commit changes.
   It replaces the old file. The site updates in about 1 minute. `index.html` never needs changing.

## How students select
- Open a chapter. Nothing is ticked by default.
- Use **Select all** / **Unselect all** inside that chapter, or tick individual subtopics.
- **Unselect everything** clears all chapters.
- Level filter (1 / 2 / 3) is applied on top.

## Filter rule
A question's tags are the set of (chapter, subtopic) pairs it uses.

- **Only selected concepts (default):** shown only if *every* tag is ticked.
  - Tick only Circles → pure circle questions only.
  - Tick Quadratic + Circles → pure quadratic, pure circle, and mixed quadratic–circle.
  - Tick only Quadratic › Nature of roots → a question tagged Nature of roots + Sign of roots does **not** appear.
- **Uses any selected concept:** shown if *at least one* tag is ticked.

## Question format (in `questions.js`)
```js
{
  id: "QE-014",
  level: 2,
  topics: { "Quadratic Equations": ["Location of roots"], "Circles": ["Line and circle (tangency, chord length)"] },
  type: "MCQ",                     // MCQ, MSQ, Integer, Subjective
  question: "Text with $LaTeX$ ...",
  options: ["...", "...", "...", "..."],   // omit for Integer/Subjective
  answer: "B",
  solution: "..."
}
```
Rules:
- In `questions.js` every LaTeX backslash is doubled: `\\frac`, `\\sqrt`.
- Inside math write `\\lt` / `\\gt`, not `<` / `>`.
- Figures: `<img src="images/QE-014.png">` inside `question` or `solution`.
- Every chapter/subtopic used must exist in `TAXONOMY`; otherwise the page shows an orange "Data issues" box.

## Note
This site is public. Anyone with the link can see questions and solutions.
