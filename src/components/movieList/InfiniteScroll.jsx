import { useEffect, useCallback } from "react";

/**
 * Custom hook to manage infinite scroll behavior.
 *
 * @param {boolean} hasMore - If there are more items to load.
 * @param {boolean} loading - The current loading status.
 * @param {boolean} infiniteScrollEnabled - Whether infinite scroll is enabled.
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
    if (infiniteScrollEnabled) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll, infiniteScrollEnabled]);
};

export default useInfiniteScroll;
