// Immediatley Invoke Function Expressions

//Why? Global scope ke pollution se prblm hoti hai kai baar. To avoid this, we use iife.

(function chai() {
    console.log('Connected')
}) ();

( () => {
    console.log('Arrow connected')
} )  ();


// () () ======>  First one, func declaration. Second one, func execution