import { useContext, useState } from "react";
import DarkModeContext from "../../store/dark-mode-context";
import { motion } from "framer-motion";
import Button from "../Atoms/Button";
import { Icon } from "../Atoms/Icon";
import Title from "../Atoms/Title";
import DecisionContext from "../../store/decision-context";
import { createPortal } from "react-dom";
import Modal from "../Molecules/Modal";
import ModalBackrop from "../Molecules/Modalbackrop";
import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const Header = (props: { showModal: boolean }) => {
  const darkModeCtx = useContext(DarkModeContext);
  const decisionCtx = useContext(DecisionContext);
  const navigate = useNavigate();

  /* const [showModal, setShowModal] = useState(props.showModal); */

  /* const showModalHandler = () => {
    setShowModal((prev) => !prev);
  }; */

  const startOverHandler = () => {
    navigate("/");
    decisionCtx.reset();
  };

  return (
    <header className="fixed py-4 z-50">
      {/* <AnimatePresence>
        {showModal && (
          <>
            {createPortal(<Modal />, document.getElementById("overlay")!)}
            {createPortal(
              <ModalBackrop />,
              document.getElementById("backdrop")!
            )}
          </>
        )}
      </AnimatePresence> */}
      <nav className="h-12 px-8 md:px-16 w-screen text-gray-600 dark:text-gray-200 flex flex-row justify-between items-center">
        <div className="w-1/3 h-full flex-row flex tracking-tight font-medium text-sm justify-start items-center gap-3">
          <span className="text-1xl">Pros</span>
          <Icon icon="scale" className="text-primary" />
          <span className="text-1xl">Cons</span>
        </div>
        <div className="w-1/3 h-full flex justify-center items-center">
          {decisionCtx.decision.decision !== "" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <Title
                size="md"
                className="tracking-tighter text-gray-500 dark:text-neutral-light"
              >
                "{decisionCtx.decision.decision}"
              </Title>
            </motion.div>
          )}
        </div>
        <div className="w-1/3 h-full flex justify-end space-x-6 items-center select-none">
          <Button tooltip={darkModeCtx.tooltip} onClick={darkModeCtx.toggle}>
            <Icon color="neutral" icon={darkModeCtx.icon} />
          </Button>
          {/* <Button tooltip="About" onClick={showModalHandler}>
            <Icon color="neutral" icon="info" />
          </Button> */}
          <Button
            shape="square"
            onClick={startOverHandler}
            tooltip="Start over?"
          >
            <Icon icon="refresh" />
          </Button>
        </div>
      </nav>
    </header>
  );
};
