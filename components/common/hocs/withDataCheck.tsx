import React from "react";
import { getDisplayName } from "../utils/getDisplayName";
import { CardInterface } from "../../Card/card.types";
import { EmptyBlock } from "../../EmptyBlock";

export const withDataCheck = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const titleText = "Whoops! Looks like there is no data.";

  const WithDataCheck: React.FC<P & { cardData?: CardInterface[] }> = (
    props
  ) => {
    if (!props.cardData || props.cardData.length === 0) {
      return <EmptyBlock title={titleText} />;
    }

    return <WrappedComponent {...(props as P)} />;
  };

  WithDataCheck.displayName = `WithDataCheck(${getDisplayName(
    WrappedComponent
  )})`;

  return WithDataCheck;
};
