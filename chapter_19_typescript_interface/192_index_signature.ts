// String index
//- Index signature is used to define the type of an object that has dynamic keys.
//Using this, we can access the key value pairs.

interface StringDictionary {
    [key: string]: string;
}

const dict: StringDictionary = {
    hello: "world",
    foo: "bar"
};