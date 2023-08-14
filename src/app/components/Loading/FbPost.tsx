const FbPostLoading = () => {
  return (
    <div className="flex flex-col bg-mingor-gray-200 rounded-lg pt-4 text-white w-72 md:w-[350px]">
      <div className="flex items-center px-4 mb-3">
        <div className="relative w-[35px] h-[35px] md:w-[45px] md:h-[45px] bg-mingor-gray-100 animate-pulse rounded-full" />
        <div className="bg-mingor-gray-100 animate-pulse h-4 rounded-lg w-1/3 ml-2" />
      </div>
      <div className="px-4 mb-3">
        <div className="bg-mingor-gray-100 animate-pulse h-4 rounded-lg w-full mb-2" />
        <div className="bg-mingor-gray-100 animate-pulse h-4 rounded-lg w-full mb-2" />
        <div className="bg-mingor-gray-100 animate-pulse h-4 rounded-lg w-1/3 mb-2" />
      </div>
      <div className="relative w-full h-72 md:h-[350px] bg-mingor-gray-100 animate-pulse" />
    </div>
  );
};

export default FbPostLoading;
