/** A short user story that shows the gain a customer gets from a service or solution. */
export interface Story {
  /** Gain-focused heading, e.g. "Lo que gana una clínica de 6 profesionales". */
  title: string;
  asA: string;
  want: string;
  /** The gain: what the user ends up with. */
  soThat: string;
  /** Observable outcomes ("Se cumple cuando"). */
  criteria: string[];
  points: { label: string; text: string }[];
  /** Overrides DEFAULT_STORY_NOTE. */
  note?: string;
}

export const DEFAULT_STORY_NOTE =
  "Ejemplo hipotético para ilustrar la ganancia; no corresponde a resultados de un cliente. Lo que ganarías en tu caso lo medimos contigo antes de decidir.";
