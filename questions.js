// =====================================================================
//  QUESTION BANK DATA  (this is the only file that changes when questions are added)
//  Every backslash in LaTeX is DOUBLED here (\\frac, \\pm) because this is
//  a JavaScript file. Inside math, write \\lt and \\gt instead of < and >.
// =====================================================================

const BANK_TITLE = "Maths Question Bank";

// Chapters -> subtopics. A question may only use tags listed here.
const TAXONOMY = {
  "Quadratic Equations": [
    "Nature of roots",
    "Relation between roots and coefficients",
    "Sign of roots",
    "Location of roots",
    "Common roots"
  ],
  "Straight Lines": [
    "Distance and section formula",
    "Slope and forms of a line",
    "Angle between two lines",
    "Perpendicular distance of a point from a line",
    "Family of lines"
  ],
  "Circles": [
    "Equation of a circle",
    "Line and circle (tangency, chord length)",
    "Length of tangent and power of a point",
    "Chord of contact",
    "Family of circles",
    "Common chord and orthogonality"
  ]
};

// level: 1, 2 or 3
// topics: { "Chapter": ["Subtopic", ...], ... }  -> EVERY concept the question tests
// type: "MCQ" (single correct), "MSQ" (multiple correct), "Integer", "Subjective"
const QUESTIONS = [

  // ----------------------------- QUADRATIC -----------------------------
  {
    id: "QE-001",
    level: 1,
    topics: { "Quadratic Equations": ["Nature of roots"] },
    type: "MCQ",
    question: "For what real values of $k$ does $x^2 + kx + 9 = 0$ have equal roots?",
    options: ["$k = \\pm 3$", "$k = \\pm 6$", "$k = \\pm 9$", "$k = 6$ only"],
    answer: "B",
    solution: "Equal roots $\\iff D = 0$: $k^2 - 36 = 0$, so $k = \\pm 6$."
  },
  {
    id: "QE-002",
    level: 1,
    topics: { "Quadratic Equations": ["Relation between roots and coefficients"] },
    type: "Integer",
    question: "If $\\alpha, \\beta$ are the roots of $x^2 - 5x + 3 = 0$, find $\\alpha^2 + \\beta^2$.",
    answer: "19",
    solution: "$\\alpha + \\beta = 5,\\ \\alpha\\beta = 3$. So $\\alpha^2 + \\beta^2 = (\\alpha+\\beta)^2 - 2\\alpha\\beta = 25 - 6 = 19$."
  },
  {
    id: "QE-003",
    level: 2,
    topics: { "Quadratic Equations": ["Nature of roots", "Sign of roots"] },
    type: "MCQ",
    question: "The set of all real $a$ for which $x^2 + (a-3)x + a = 0$ has two distinct positive roots is",
    options: ["$(0, 1)$", "$(-\\infty, 1)$", "$(0, 3)$", "$(9, \\infty)$"],
    answer: "A",
    solution: "Distinct real: $D = (a-3)^2 - 4a = (a-1)(a-9) \\gt 0 \\Rightarrow a \\lt 1$ or $a \\gt 9$.<br>Sum $= 3 - a \\gt 0 \\Rightarrow a \\lt 3$. Product $= a \\gt 0$.<br>Intersection: $a \\in (0,1)$."
  },
  {
    id: "QE-004",
    level: 3,
    topics: { "Quadratic Equations": ["Location of roots"] },
    type: "MCQ",
    question: "Let $a, b, c \\in \\mathbb{R}$, $a \\ne 0$. If $\\alpha$ is a root of $a^2x^2 + bx + c = 0$, $\\beta$ is a root of $a^2x^2 - bx - c = 0$ and $0 \\lt \\alpha \\lt \\beta$, then the equation $a^2x^2 + 2bx + 2c = 0$ has a root $\\gamma$ that always satisfies <i>(IIT-JEE 1989)</i>",
    options: ["$\\gamma = \\dfrac{\\alpha+\\beta}{2}$", "$\\gamma = \\alpha + \\dfrac{\\beta}{2}$", "$\\gamma = \\alpha$", "$\\alpha \\lt \\gamma \\lt \\beta$"],
    answer: "D",
    solution: "Let $f(x) = a^2x^2 + 2bx + 2c$. From the given roots, $b\\alpha + c = -a^2\\alpha^2$ and $b\\beta + c = a^2\\beta^2$.<br>$f(\\alpha) = a^2\\alpha^2 - 2a^2\\alpha^2 = -a^2\\alpha^2 \\lt 0$, $\\ f(\\beta) = a^2\\beta^2 + 2a^2\\beta^2 = 3a^2\\beta^2 \\gt 0$.<br>$f$ is continuous and changes sign on $[\\alpha, \\beta]$, so it has a root $\\gamma \\in (\\alpha, \\beta)$."
  },

  // ------------------------------ CIRCLES ------------------------------
  {
    id: "CI-001",
    level: 1,
    topics: { "Circles": ["Equation of a circle"] },
    type: "MCQ",
    question: "The centre and radius of $x^2 + y^2 - 4x + 6y - 3 = 0$ are",
    options: ["$(2,-3),\\ 4$", "$(-2,3),\\ 4$", "$(2,-3),\\ \\sqrt{10}$", "$(-2,3),\\ \\sqrt{10}$"],
    answer: "A",
    solution: "Here $g=-2,\\ f=3,\\ c=-3$. Centre $(-g,-f) = (2,-3)$, radius $\\sqrt{g^2+f^2-c} = \\sqrt{4+9+3} = 4$."
  },
  {
    id: "CI-002",
    level: 1,
    topics: { "Circles": ["Length of tangent and power of a point"] },
    type: "MCQ",
    question: "The length of the tangent from $P(5, 4)$ to the circle $x^2 + y^2 - 2x - 4y - 4 = 0$ is",
    options: ["$\\sqrt{11}$", "$11$", "$\\sqrt{21}$", "$5$"],
    answer: "A",
    solution: "Length $= \\sqrt{S_1}$ where $S_1 = 25 + 16 - 10 - 16 - 4 = 11$. So the length is $\\sqrt{11}$."
  },
  {
    id: "CI-003",
    level: 2,
    topics: { "Circles": ["Common chord and orthogonality"] },
    type: "Integer",
    question: "Find the length of the common chord of the circles $x^2 + y^2 = 25$ and $x^2 + y^2 - 12x + 11 = 0$.",
    answer: "8",
    solution: "Common chord: $S_1 - S_2 = 0 \\Rightarrow 12x - 36 = 0 \\Rightarrow x = 3$.<br>On $x^2 + y^2 = 25$: $y^2 = 16$, $y = \\pm 4$. Length $= 8$."
  },
  {
    id: "CI-004",
    level: 2,
    topics: { "Circles": ["Family of circles"] },
    type: "MCQ",
    question: "The circle through the points of intersection of $x^2 + y^2 = 9$ and $x + y = 1$, and passing through the origin, is",
    options: ["$x^2 + y^2 - 9x - 9y = 0$", "$x^2 + y^2 + 9x + 9y = 0$", "$x^2 + y^2 - 9x + 9y = 0$", "$x^2 + y^2 - x - y = 0$"],
    answer: "A",
    solution: "Family: $x^2 + y^2 - 9 + \\lambda(x + y - 1) = 0$. Through $(0,0)$: $-9 - \\lambda = 0 \\Rightarrow \\lambda = -9$.<br>Circle: $x^2 + y^2 - 9x - 9y = 0$."
  },

  // ------------------------------- MIXED -------------------------------
  {
    id: "MX-001",
    level: 2,
    topics: {
      "Circles": ["Line and circle (tangency, chord length)"],
      "Quadratic Equations": ["Nature of roots"]
    },
    type: "MCQ",
    question: "The line $y = mx$ touches the circle $(x-3)^2 + y^2 = 4$. Then $m =$",
    options: ["$\\pm \\dfrac{2}{\\sqrt5}$", "$\\pm \\dfrac{\\sqrt5}{2}$", "$\\pm \\dfrac{1}{2}$", "$\\pm \\dfrac{2}{3}$"],
    answer: "A",
    solution: "Substituting, $(1+m^2)x^2 - 6x + 5 = 0$. Tangency $\\iff$ repeated root $\\iff D = 0$: $36 - 20(1+m^2) = 0$, so $m^2 = \\dfrac45$, $m = \\pm\\dfrac{2}{\\sqrt5}$."
  },
  {
    id: "MX-002",
    level: 2,
    topics: {
      "Circles": ["Line and circle (tangency, chord length)"],
      "Straight Lines": ["Perpendicular distance of a point from a line"]
    },
    type: "Integer",
    question: "Find the length of the chord cut off by the line $3x + 4y = 15$ on the circle $x^2 + y^2 = 25$.",
    answer: "8",
    solution: "Distance of centre $(0,0)$ from the line: $d = \\dfrac{|0 + 0 - 15|}{\\sqrt{9+16}} = 3$.<br>Half-chord $= \\sqrt{r^2 - d^2} = \\sqrt{25 - 9} = 4$, so the chord has length $8$."
  }
];
