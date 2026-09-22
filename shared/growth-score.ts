/**
 * Product Growth Score — a diagnostic, not a quiz.
 *
 * The questions are deliberately uncomfortable and mostly ask whether a thing
 * is *measured*, because in almost every engagement the constraint turns out to
 * be something the team had never instrumented rather than something they knew
 * about and ignored. A scorecard that flatters the user is useless to them and
 * useless as a reason to talk.
 *
 * Each dimension routes to the case study that dealt with that exact problem,
 * so a weak score leads to evidence rather than to a sales page.
 */

export type Answer = "yes" | "partly" | "no";

export const ANSWER_POINTS: Record<Answer, number> = { yes: 2, partly: 1, no: 0 };

export const ANSWER_LABELS: Record<Answer, string> = {
  yes: "Yes",
  partly: "Partly",
  no: "No",
};

export interface Dimension {
  id: string;
  name: string;
  /** What a low score here actually means. */
  diagnosis: string;
  /** The first thing to do about it. */
  firstMove: string;
  caseStudy: string;
  service?: string;
}

export interface Question {
  id: string;
  dimension: string;
  text: string;
  /** Shown under the question so "partly" is not a dodge. */
  hint: string;
}

export const DIMENSIONS: Dimension[] = [
  {
    id: "acquisition",
    name: "Acquisition economics",
    diagnosis:
      "You are buying users without knowing which ones pay back. Blended cost per acquisition averages a channel delivering valuable users with one delivering nothing, and hides both.",
    firstMove:
      "Attribute spend and downstream revenue by channel before changing any budget. The cheapest channel is usually the one to cut.",
    caseStudy: "user-acquisition-cac-30",
    service: "product-monetisation-consultant",
  },
  {
    id: "activation",
    name: "Activation",
    diagnosis:
      "Users arrive and leave before reaching the thing the product is for. This is usually the largest and least instrumented loss in the funnel, and it sits upstream of everything else.",
    firstMove:
      "Define the single action that best predicts retention, then measure what share of new users reach it and how long it takes.",
    caseStudy: "funnel-dropoff-ux-optimization",
    service: "consumer-app-growth-consultant",
  },
  {
    id: "retention",
    name: "Retention",
    diagnosis:
      "Growth is being spent replacing users rather than accumulating them. No acquisition budget outruns a retention curve that never flattens.",
    firstMove:
      "Find whether your curve flattens at all. If it does not, stop optimising acquisition until it does.",
    caseStudy: "growth-loop-repeat-users",
    service: "consumer-app-growth-consultant",
  },
  {
    id: "monetisation",
    name: "Monetisation",
    diagnosis:
      "The product asks for money at a moment the user has no reason to say yes, or converts users whose value never covers their cost. Both look like a pricing problem and are not.",
    firstMove:
      "Measure the drop between intent to pay and payment. Recovering that leak is cheaper than any new pricing tier.",
    caseStudy: "insurance-funnel-1200-growth",
    service: "product-monetisation-consultant",
  },
  {
    id: "measurement",
    name: "Measurement",
    diagnosis:
      "Changes ship and nobody can say what they did. Without attribution the team argues from opinion, and the loudest view wins rather than the correct one.",
    firstMove:
      "Agree one metric that means success, and make every shipped change accountable to a number before it ships.",
    caseStudy: "ml-ux-growth-3x-conversion",
  },
];

export const QUESTIONS: Question[] = [
  {
    id: "cac-by-channel",
    dimension: "acquisition",
    text: "Do you know your acquisition cost per channel, not just blended?",
    hint: "Blended CAC averages your best and worst channels and tells you about neither.",
  },
  {
    id: "ltv-by-channel",
    dimension: "acquisition",
    text: "Do you know what users from each channel are worth over time?",
    hint: "Cost without value is half the ratio. The expensive channel is often the profitable one.",
  },
  {
    id: "channel-cut",
    dimension: "acquisition",
    text: "Have you cut a channel in the last six months because its users did not pay back?",
    hint: "If nothing has ever been cut, the data probably is not being acted on.",
  },
  {
    id: "activation-event",
    dimension: "activation",
    text: "Is there one action you know predicts whether a new user stays?",
    hint: "Not a guess or a north-star slogan — an action you have checked against retention data.",
  },
  {
    id: "activation-rate",
    dimension: "activation",
    text: "Do you measure what share of new users reach it, and how long they take?",
    hint: "Both halves matter. A high rate that takes three weeks is a different problem from a low one.",
  },
  {
    id: "activation-changed",
    dimension: "activation",
    text: "Has the path to that action changed in the last quarter?",
    hint: "Activation rarely improves on its own, and it is usually the cheapest lever available.",
  },
  {
    id: "retention-curve",
    dimension: "retention",
    text: "Does your retention curve flatten, rather than decline towards zero?",
    hint: "A flattening curve means a core of users who keep coming back. A declining one means you are renting growth.",
  },
  {
    id: "churn-reason",
    dimension: "retention",
    text: "Do you know why churned users left, from asking them rather than inferring?",
    hint: "Analytics show where they stopped. Only users tell you why.",
  },
  {
    id: "pricing-basis",
    dimension: "monetisation",
    text: "Is your pricing based on how users actually use the product?",
    hint: "Rather than on a competitor comparison table or a round number that felt right.",
  },
  {
    id: "payment-dropoff",
    dimension: "monetisation",
    text: "Do you know where users drop between intending to pay and paying?",
    hint: "In consumer products most lost revenue leaks in those few steps.",
  },
  {
    id: "ask-moment-tested",
    dimension: "monetisation",
    text: "Have you tested when you ask for money, not just how much?",
    hint: "Moving the ask to a moment that makes sense often beats changing the price.",
  },
  {
    id: "one-metric",
    dimension: "measurement",
    text: "Would your team give the same answer if asked what success is measured by?",
    hint: "Ask three people separately. Disagreement here explains a lot of roadmap conflict.",
  },
  {
    id: "attribution",
    dimension: "measurement",
    text: "Can you connect a revenue change to a specific product change you shipped?",
    hint: "If several things ship together and nothing is instrumented separately, you learn nothing from the outcome.",
  },
];

export interface DimensionResult {
  dimension: Dimension;
  score: number;
  answered: number;
}

export interface ScoreResult {
  overall: number;
  answeredAll: boolean;
  byDimension: DimensionResult[];
  weakest: DimensionResult | null;
}

/** Percentage of available points, so partially-answered states stay honest. */
export function scoreAnswers(answers: Record<string, Answer | undefined>): ScoreResult {
  const byDimension: DimensionResult[] = DIMENSIONS.map((dimension) => {
    const qs = QUESTIONS.filter((q) => q.dimension === dimension.id);
    const given = qs.filter((q) => answers[q.id] !== undefined);
    const points = given.reduce((sum, q) => sum + ANSWER_POINTS[answers[q.id]!], 0);
    const max = given.length * 2;
    return {
      dimension,
      score: max === 0 ? 0 : Math.round((points / max) * 100),
      answered: given.length,
    };
  });

  const answeredCount = QUESTIONS.filter((q) => answers[q.id] !== undefined).length;
  const totalPoints = QUESTIONS.reduce(
    (sum, q) => sum + (answers[q.id] ? ANSWER_POINTS[answers[q.id]!] : 0),
    0
  );
  const maxPoints = answeredCount * 2;

  const scored = byDimension.filter((d) => d.answered > 0);
  const weakest = scored.length
    ? scored.reduce((a, b) => (b.score < a.score ? b : a))
    : null;

  return {
    overall: maxPoints === 0 ? 0 : Math.round((totalPoints / maxPoints) * 100),
    answeredAll: answeredCount === QUESTIONS.length,
    byDimension,
    weakest,
  };
}

/** Plain-language band for the overall score. */
export function scoreBand(score: number): { label: string; meaning: string } {
  if (score >= 80)
    return {
      label: "Instrumented",
      meaning:
        "You know where your growth comes from and what it costs. The work here is usually compounding what already functions rather than fixing something broken.",
    };
  if (score >= 55)
    return {
      label: "Partly instrumented",
      meaning:
        "Some of the system is measured and some is run on assumption. The gaps are usually where the largest unclaimed wins sit.",
    };
  if (score >= 30)
    return {
      label: "Flying on assumption",
      meaning:
        "Enough is unmeasured that decisions are being made on opinion. This is the most common state, and the cheapest to improve.",
    };
  return {
    label: "Unmeasured",
    meaning:
      "Almost nothing here is instrumented, which means any growth is currently unrepeatable — it cannot be explained, so it cannot be done again deliberately.",
  };
}
