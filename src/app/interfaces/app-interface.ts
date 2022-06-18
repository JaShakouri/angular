export interface ICarouselContext {
  $implicit: string,
  controller: {
    next: () => void,
    previous: () => void
  }
}
