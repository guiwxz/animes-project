import ToWatchProvider from "./toWatch/toWatchProvider";
import WatchingProvider from "./watching/watchingProvider/watchingProvider";

const composeProviders = (...providers: Array<React.JSXElementConstructor<React.PropsWithChildren<any>>>) => 
  ({ children }) =>
    providers.reduceRight(
      (childrenProvider, Provider) => 
        <Provider>
          {childrenProvider}
        </Provider>,
      children 
    );
  


export const ComposedProviders = composeProviders(
  WatchingProvider,
  ToWatchProvider,
);