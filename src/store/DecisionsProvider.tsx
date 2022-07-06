import React, { useState } from "react";

import DecisionContext, { DecisionType } from "./decision-context";

const initial = {
  decision: "",
  cons: [],
  pros: [],
};

const DecisionProvider = (props: { children: React.ReactNode }) => {
  const [decision, setStateDecision] = useState<DecisionType>(initial);

  const reset = () => {
    setStateDecision(initial);
  };

  const setDecision = (dec: string) => {
    setStateDecision({
      decision: dec,
      pros: [],
      cons: [],
    });
  };

  const getResults = () => {
    let conVal = 0;
    let proVal = 0;

    if (decision.cons.length > 0) conVal = decision.cons.length;

    if (decision.pros.length > 0) proVal = decision.pros.length;

    if (proVal === conVal) return { pro: false, tie: true };

    if (proVal > conVal) {
      return { pro: true, tie: false };
    }

    return { pro: false, tie: false };
  };

  const addProCon = (pros: boolean, txt: string) => {
    setStateDecision((prev) => {
      let newProCon: string[] = [];
      if (pros) {
        newProCon = [...prev.pros];
        newProCon.push(txt);
        return { ...prev, pros: newProCon };
      } else {
        newProCon = [...prev.cons];
        newProCon.push(txt);
        return { ...prev, cons: newProCon };
      }
    });
  };

  return (
    <DecisionContext.Provider
      value={{
        decision,
        addProCon,
        setDecision,
        getResults,
        reset,
      }}
    >
      {props.children}
    </DecisionContext.Provider>
  );
};

export default DecisionProvider;
