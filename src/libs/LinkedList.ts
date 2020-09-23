import { ISortable } from '../types/sortable.types';
import { Sorter } from './Sorter';

interface INode {
  value: number,
  next: INode | null
}

class Node implements INode {

  public value: number;
  public next: INode | null

  constructor(value: number) {
    this.value = value;
    this.next = null
  }
}

export class LinkedList implements ISortable {

  constructor(
    public head: INode | null = null,
    public tail: INode | null = null,
    public size: number = 0
  ) { }

  get length(): number {
    return this.size
  }

  public sort() {
    const sorter = new Sorter(this)
    sorter.sort();
  }

  public add(val: number): void {

    const newValue = new Node(val)

    if (!this.size) {
      this.head = newValue;
      this.tail = newValue
      this.size++
      return;
    }

    if (this.tail) {

      this.tail.next = newValue
      this.tail = newValue
    }
    this.size++

    return
  }

  public at(index?: number | null, val?: number | null): INode | undefined {

    if (this.size === 0) {
      return undefined
    }

    let pointer = this.head;
    let i = 0;

    while (pointer) {
      if (index !== null && index === i) {
        return pointer
      }

      if (val !== null && pointer.value === val) {
        return pointer;
      }

      pointer = pointer.next
      i++
    }

    return undefined
  }

  public print() {

    if (!this.head) return;

    let pointer: INode | null = this.head;
    const output = []

    while (pointer) {

      output.push(pointer.value)

      pointer = pointer.next

    }

    return output

  }


  public swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex)
    const rightNode = this.at(rightIndex)

    if (leftNode && rightNode) {
      const leftHand = leftNode.value

      leftNode.value = rightNode.value
      rightNode.value = leftHand
    } else {
      throw new Error("Failed to find left or right node")
    }
  }
  public compare(leftIndex: number, rightIndex: number): boolean {

    if (!this.head) {
      throw new Error("List is empty!")
    }

    const n1 = this.at(leftIndex)
    const n2 = this.at(rightIndex)

    if (n1 && n2) {
      return n1.value > n2.value
    }

    return false
  }


}