import { TypeAnimation } from "react-type-animation";

interface AnimateWrittenTextProps {
  text: string;
}

function AnimateWrittenText() {
  return (
    <>
      <TypeAnimation
        sequence={['Type faster or slower by setting speed.', 1000, '']}
        speed={75}
        wrapper="h2"
        repeat={Infinity}
      />
    </>
  );
}

export default AnimateWrittenText;
