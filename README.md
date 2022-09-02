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

## useTextInput({...props})

useTextInput takes an object of props as an argument returns an array of 3 values. The props can include any values you would typically use on an input element, such as an initial value, placeholder or length restriction. Additionally, the props object also requires a label value.  
Of the returned array, the first value is the JSX element that will be rendered to the user, the second is the current value of the input element held in state by the hook, and the third value is an object representing the input element's attributes and a record of user interaction, including a reference to the input's DOM element to allow the use of standard DOM manipuation methods.
