import { CardInterface } from "../Card/card.types";

export const withDataCheck = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return (props: P & { cardData?: CardInterface[] }) => {
    if (!props.cardData || props.cardData.length == 0) {
      return <div>No Data Available</div>;
    }

    return <WrappedComponent {...(props as P)} />;
  };
};
