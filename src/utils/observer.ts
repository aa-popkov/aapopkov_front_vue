export const onIntersect = ({
  elementToWatch,
  callback,
  outCallback,
  once = true,
  options = { threshold: 1.0 }
}: {
  elementToWatch: HTMLElement | any
  callback: (target: any) => void
  outCallback: (target: any) => void
  once?: boolean
  options?: IntersectionObserverInit
}) => {
  // Initiate the observer
  const observer = new IntersectionObserver(([entry]) => {
    // If the element to watch is intersecting within the threshold
    if (entry && entry.isIntersecting) {
      // Run the callback
      callback(entry.target)

      // If the callback should only run once, unobserve the element
      if (once) {
        observer.unobserve(entry.target)
      }
    }

    // If the element is not intersecting, run the (optional) unintersecting callback
    else {
      outCallback(entry.target)
    }
  }, options)

  // Observe the element
  observer.observe(elementToWatch)

  // Returns the observer so it can be further used in the component
  return observer
}
