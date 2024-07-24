export interface Iterable<T> {
    [Symbol.iterator]: IterableIterator<T>;
}