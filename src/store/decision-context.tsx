import React from "react";

export type DecisionType = {
  decision: string;
  pros: string[];
  cons: string[];
};

export interface DecisionInterface {
  decision: DecisionType;
  addProCon: (pros: boolean, txt: string) => void;
  setDecision: (decision: string) => void;
  getResults: () => {
    pro: boolean;
    tie: boolean;
  };
  reset: () => void;
}

const DecisionContext = React.createContext<DecisionInterface>({
  decision: {
    decision: "",
    pros: [],
    cons: [],
  },
  addProCon: () => {},
  setDecision: () => {},
  getResults: () => {
    return {
      pro: false,
      tie: false,
    };
  },
  reset: () => {},
});

export default DecisionContext;
