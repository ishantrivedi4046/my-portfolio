import AnimatedLink from "@/shared-resources/animated/link/AnimatedLink";

const NotFoundPage = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center sm:mt-[15%] mt-[50%]">
        <div className="sm:text-6xl text-2xl font-medium">
          This page doesn&apos;t exist.
        </div>
        <AnimatedLink
          href="/"
          title="Back home"
          classNames="sm:mt-8 mt-3 sm:text-4xl md:text-xl text-lg text-blue-600 font-medium"
        />
      </div>
    </div>
  );
};

export default NotFoundPage;
