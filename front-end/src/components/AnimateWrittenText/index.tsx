import { TypeAnimation } from "react-type-animation";
import { ContentText } from "./style";

interface AnimateWrittenTextProps {
  text: Array<string | number>;
}

function AnimateWrittenText({ text }: AnimateWrittenTextProps) {
  return (
    <ContentText>
      <TypeAnimation
        sequence={text}
        speed={40}
        wrapper="h2"
        repeat={Infinity}
        style={{
          color: "#fff",
          fontSize: "3rem",
        }}
      />
    </ContentText>
  );
}

export default AnimateWrittenText;
