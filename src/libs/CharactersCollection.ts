import { ISortable } from '../types/sortable.types';
import { Sorter } from './Sorter';



export class CharactersCollection implements ISortable {


  constructor(public data: string) { }

  get length(): number {
    return this.data.length
  }

  public sort(): void {
    const sorter = new Sorter(this)
    sorter.sort()
  }

  /**
   * Compares two elements
   * @param leftIndex left side of the pair
   * @param rightIndex right side of the pair
   * @returns boolean that tell us if the elements needs to be swapped
   */
  public compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
  }

  /**
   * Swap two elements in our this.data array, in place
   * @param leftIndex 
   * @param rightIndex 
   */
  public swap(leftIndex: number, rightIndex: number): void {
    const characters = this.data.split('')
    const leftHand = characters[leftIndex]

    characters[leftIndex] = characters[rightIndex]
    characters[rightIndex] = leftHand

    this.data = characters.join('')
  }


}