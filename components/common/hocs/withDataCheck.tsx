import { CardInterface } from "../types/card.types";
import { EmptyBlock } from "../../EmptyBlock";

export const withDataCheck = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const titleText = "Whoops! Looks like there is no data.";

  return (props: P & { cardData?: CardInterface[] }) => {
    if (!props.cardData || props.cardData.length == 0) {
      return <EmptyBlock title={titleText} />;
    }

    return <WrappedComponent {...(props as P)} />;
  };
};
