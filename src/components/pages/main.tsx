import pageChangeVariants from "../framer/pageChangeVariants";
import { AnimatePresence, motion, Variant } from "framer-motion";
import { SyntheticEvent, useContext, useRef, useState } from "react";
import Button from "../Atoms/Button";
import Input from "../Atoms/Input";
import { Icon } from "../Atoms/Icon";
import Title from "../Atoms/Title";
import { random } from "../../functions/random";
import { useNavigate } from "react-router-dom";
import DecisionContext from "../../store/decision-context";
import PageChange from "../Molecules/PageChange";
import PageLayout from "../templates/PageLayout";
import { Grid } from "../Atoms/Grid/Grid";
import { Col8 } from "../Atoms/Grid/Col8";
import { Container } from "../Atoms/Container";
import { Col2 } from "../Atoms/Grid/Col2";

const randomProblems = [
  "Should I stay or should I go?",
  "Should I buy new sneakers?",
  "Should I go for a run?",
  "Should I eat pizza?",
  "Should I ask him out?",
  "Should I stay home today?",
  "Should I get a dog?",
  "Should I quit my job?",
  "Should I move to Berlin?",
];

const inputContainerVariant = {
  exit: {
    width: 0,
    padding: 0,
    x: 12,
  },
};

const Main = () => {
  const [decision, setDecision] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const decisionCtx = useContext(DecisionContext);

  const randomPlaceholder = useRef(random().elementFromArray(randomProblems));

  const [inputIsHidden, setInputIsHidden] = useState<{
    animate: boolean;
    btnIcon: "chevronRight" | "check";
    animateBtn: Variant;
  }>({
    animate: true,
    btnIcon: "chevronRight",
    animateBtn: {},
  });

  const hideInput = () => {
    if (decision === "") {
      setError(true);
      return;
    }

    decisionCtx.setDecision(decision);

    setInputIsHidden({
      animate: false,
      btnIcon: "check",
      animateBtn: {
        scale: [1.2, 1, 1.2, 1],
        color: "#0369a1",
      },
    });

    setTimeout(() => {
      navigate("/pros");
    }, 1500);
  };

  const inputHandler = (event: SyntheticEvent) => {
    const el = event.target as HTMLInputElement;
    if (error) setError(false);
    setDecision(el.value);
  };

  return (
    <PageChange>
      <Grid className="h-full w-full">
        <Col8 start={true} className="px-4">
          <Container>
            <Title className="text-gray-500 leading-snug dark:text-gray-200">
              <span className="font-medium text-secondary tracking-tight">
                Can't decide on a thing?
              </span>{" "}
              <span className="font-light tracking-normal">
                Then make a quick pros and cons list. Break it down into small,
                manageable bites 🍪
              </span>
            </Title>

            <div className="w-full pt-16 h-12 flex items-center justify-start">
              <AnimatePresence>
                {inputIsHidden.animate && (
                  <motion.div
                    className="w-full pr-8 origin-center"
                    variants={inputContainerVariant}
                    exit="exit"
                  >
                    <Input
                      id="one"
                      placeholder={randomPlaceholder.current}
                      onKeyUp={inputHandler}
                    />
                    {error && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, scale: [1, 0.95, 1] }}
                        className="absolute font-medium text-secondary text-sm"
                      >
                        Woops, you want to enter something at least...
                      </motion.p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              <Button
                onClick={hideInput}
                shape="rect"
                animate={inputIsHidden.animateBtn}
              >
                Start
                <Icon icon={inputIsHidden.btnIcon} className="ml-6" />
              </Button>
            </div>
          </Container>
        </Col8>
      </Grid>
    </PageChange>
  );
};

export default Main;
