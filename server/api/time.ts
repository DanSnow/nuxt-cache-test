export default defineCachedEventHandler(
  () => {
    return {
      time: Date.now(),
    }
  },
  {
    swr: true,
    maxAge: 1,
  }
)
