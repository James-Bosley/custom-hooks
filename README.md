# Custom Hooks

A collection of custom react hooks.

## useTimeout(callback, delay)

useTimeout is a wrapper around the built in javascript setTimeout. Use it as you would the built in version.
It returns the reference id for the timeout so it can be cleared manually if required using clearTimeout. The benefit of this hook is that it automatically cleans itself up when the component that called it is unmounted, avioding memory leaks.
This enables you to create a timeout without having to call it inside a useEffect within your components.

## useInterval(callback, delay)

useInterval is a wrapper around the built in javascript setInterval. Use it as you would the built in version.
It returns the reference id for the interval so it can be cleared manually if required using clearInterval. The benefit of this hook is that it automatically cleans itself up when the component that called it is unmounted, avioding memory leaks.
This enables you to use a function executed at intervals without having to call it inside a useEffect within your components.
