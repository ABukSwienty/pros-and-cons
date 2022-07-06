import { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import DecisionContext from "../../store/decision-context";
import Title from "../Atoms/Title";
import PageChange from "../Molecules/PageChange";
import { motion, Variants } from "framer-motion";
import Button from "../Atoms/Button";
import { Icon } from "../Atoms/Icon";
import { Container } from "../Atoms/Container";
import { Col2 } from "../Atoms/Grid/Col2";
import { Col8 } from "../Atoms/Grid/Col8";
import { Grid } from "../Atoms/Grid/Grid";

const containerVariants: Variants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: {
      delay: 1,
    },
  },
};

const ulVariants: Variants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: {
      delay: 1,
      staggerChildren: 0.5,
      delayChildren: 1,
    },
  },
};

const liVariants = {
  initial: {
    opacity: 0,
    y: -30,
  },
  in: {
    opacity: 1,
    y: 10,
  },
};

const Tally = () => {
  const navigate = useNavigate();
  const firstMount = useRef(true);
  const decisionCtx = useContext(DecisionContext);
  useEffect(() => {
    if (!firstMount.current) return;
    firstMount.current = false;
    if (decisionCtx.decision.decision === "") navigate("/");
  }, [decisionCtx.decision.decision, navigate]);

  const result = decisionCtx.getResults();

  let resultTxt = "";
  if (result.pro && !result.tie)
    resultTxt = "Pssst... Looks like you should go for it.";

  if (!result.pro && !result.tie)
    resultTxt = "Pssst... Looks like you shouldn't go for it.";

  if (!result.pro && result.tie) resultTxt = "Pssst... Looks like it's a tie.";

  if (
    decisionCtx.decision.cons.length === 0 &&
    decisionCtx.decision.pros.length === 0
  )
    resultTxt = "Well... I mean... You didn't add anything did you?";

  const cons =
    decisionCtx.decision.cons.length > 0 ? (
      decisionCtx.decision.cons.map((val, i) => (
        <motion.li
          variants={liVariants}
          key={i}
          className="flex flex-row justify-start items-center h-auto w-full"
        >
          <div className="w-1/6 h-full">
            <Icon icon="thumbDown" color="neutralDark" size="sm" />
          </div>
          <div className="w-5/6">
            <Title className="text-neutral dark:text-neutral-light" size="md">
              {val}
            </Title>
          </div>
        </motion.li>
      ))
    ) : (
      <motion.li variants={liVariants}></motion.li>
    );

  const pros =
    decisionCtx.decision.pros.length > 0 ? (
      decisionCtx.decision.pros.map((val, i) => (
        <motion.li
          variants={liVariants}
          key={i}
          className="flex flex-row justify-start items-center h-auto w-full"
        >
          <div className="w-1/6 h-full">
            <Icon icon="thumbUp" color="neutralDark" size="sm" />
          </div>
          <div className="w-5/6">
            <Title className="text-neutral dark:text-neutral-light" size="md">
              {val}
            </Title>
          </div>
        </motion.li>
      ))
    ) : (
      <motion.li variants={liVariants}></motion.li>
    );

  /* const startOverHandler = () => {
    navigate("/");
    decisionCtx.reset();
  }; */

  return (
    <PageChange>
      <Grid className="h-full w-full">
        <Col8 start={true} className="px-4">
          <Container>
            <div className="h-48">
              <Title className="text-gray-500 dark:text-gray-200 leading-snug mb-4">
                <span className="font-medium text-secondary tracking-tight">
                  Well done!
                </span>{" "}
                Time to make that decision 🥁
              </Title>

              <div className="w-full h-12 flex justify-start items-center space-x-4">
                <Icon icon="arrowRight" color="neutralDark" size="sm" />
                <Title size="md" className="text-gray-500 dark:text-gray-200">
                  {resultTxt}
                </Title>
              </div>

              {decisionCtx.decision.cons.length > 0 &&
                decisionCtx.decision.pros.length > 0 && (
                  <motion.div
                    variants={containerVariants}
                    initial="initial"
                    animate="in"
                    className="grid grid-cols-2"
                  >
                    <motion.ul variants={ulVariants}>
                      <motion.li variants={liVariants} className="space-y-2">
                        <Title
                          className=" tracking-tighter text-gray-400"
                          size="md"
                        >
                          Pros
                        </Title>
                        <hr />
                      </motion.li>
                      {pros}
                    </motion.ul>
                    <motion.ul variants={ulVariants}>
                      <motion.li variants={liVariants} className="space-y-2">
                        <Title
                          className="tracking-tighter text-gray-400"
                          size="md"
                        >
                          Cons
                        </Title>
                        <hr />
                      </motion.li>
                      {cons}
                    </motion.ul>
                  </motion.div>
                )}
            </div>
          </Container>
        </Col8>
        <Col2>
          <div className="w-full h-full flex items-center"></div>
        </Col2>
      </Grid>
    </PageChange>
  );
};

export default Tally;
