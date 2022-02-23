const useInfiniteScroll = (data, limit, page) => {
  const ending = limit * page + 1;
  return data.slice(0, ending);
};

export default useInfiniteScroll;
