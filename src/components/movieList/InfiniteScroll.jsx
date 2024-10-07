import { useEffect, useCallback } from "react";

/**
 * Debounce function to limit the frequency of event calls.
 *
 * @param {Function} func - Function to debounce.
 * @param {number}   delay - Delay in milliseconds.
 */
const debounce = (func, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
};

/**
 * Custom hook to manage infinite scroll behavior.
 *
 * @param {boolean}  hasMore - If there are more items to load.
 * @param {boolean}  loading - The current loading status.
 * @param {boolean}  infiniteScrollEnabled - Whether infinite scroll is enabled.
 * @param {Function} loadMore - Function to load more items.
 */
const useInfiniteScroll = (
  hasMore,
  loading,
  infiniteScrollEnabled,
  loadMore
) => {
  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
      hasMore &&
      !loading &&
      infiniteScrollEnabled
    ) {
      loadMore();
    }
  }, [hasMore, loading, infiniteScrollEnabled, loadMore]);

  useEffect(() => {
    const debouncedScroll = debounce(handleScroll, 200); // debounce for performance
    if (infiniteScrollEnabled) {
      window.addEventListener("scroll", debouncedScroll);
    }
    return () => window.removeEventListener("scroll", debouncedScroll);
  }, [handleScroll, infiniteScrollEnabled]);
};

export default useInfiniteScroll;
