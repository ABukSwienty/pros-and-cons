import { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import DecisionContext from "../../store/decision-context";
import Button from "../Atoms/Button";
import { Container } from "../Atoms/Container";
import { Col2 } from "../Atoms/Grid/Col2";
import { Col8 } from "../Atoms/Grid/Col8";
import { Grid } from "../Atoms/Grid/Grid";
import { Icon } from "../Atoms/Icon";
import Title from "../Atoms/Title";
import { ListInput } from "../Molecules/ListInput";
import PageChange from "../Molecules/PageChange";

const ProCon = (props: { pro: boolean }) => {
  const proCon = props.pro
    ? {
        nav: "/cons",
        tooltip: "Go to cons",
        highlightTxt: "Enter your Pros.",
        txt: "State all the positive things that you can think off. Quickly now! ⌛",
        txtColor: "text-primary",
      }
    : {
        nav: "/tally",
        tooltip: "Go to tally",
        highlightTxt: "Enter your Cons.",
        txt: "Now state all the negative things that you can think off. Quickly now! ⌛",
        txtColor: "text-secondary",
      };

  const navigate = useNavigate();
  const firstMount = useRef(true);

  const decisionCtx = useContext(DecisionContext);

  const ulRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!firstMount.current) return;
    firstMount.current = false;
    if (decisionCtx.decision.decision === "") navigate("/");
  }, [decisionCtx.decision.decision, navigate]);

  const exitHandler = () => {
    navigate(proCon.nav);
  };

  const getDataHandler = async () => {
    const ul = ulRef.current as HTMLElement;
    console.log("hi", ul);
    if (!ul) return;
    const inputs = Array.from(ul.getElementsByTagName("input"));

    for (const input of inputs) {
      if (input.value !== "")
        decisionCtx.addProCon(props.pro, input.value.trim());
    }

    return true;
  };

  return (
    <PageChange>
      <Grid className="h-full w-full">
        <Col8 start={true} className="px-4">
          <Container>
            <div className="h-48">
              <Title className="text-gray-500 leading-snug dark:text-gray-200">
                <span
                  className={`font-medium tracking-tight ${proCon.txtColor}`}
                >
                  {proCon.highlightTxt}
                </span>{" "}
                <span className="font-light">{proCon.txt}</span>
              </Title>
              <div className="grid grid-cols-12 mt-8">
                <div className="col-span-10">
                  <ul ref={ulRef} className="w-full space-y-4">
                    <ListInput ghost={false} pro={props.pro} />
                  </ul>
                </div>
                <div className="col-span-2 justify-self-end">
                  <Button
                    shape="square"
                    onClick={async () => {
                      await getDataHandler();
                      exitHandler();
                    }}
                    tooltip={proCon.tooltip}
                  >
                    <Icon icon="chevronRight" />
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </Col8>
      </Grid>
    </PageChange>
  );
};

export default ProCon;
