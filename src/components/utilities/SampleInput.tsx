interface SampleInputProps {
  additionalClasses?: string;
}

export const SampleInput = (params: SampleInputProps) => {
  const { additionalClasses } = params;

  const otherClasses = additionalClasses ? additionalClasses : '';
  return (
    <input
      type="text"
      name="name"
      id="username"
      autoComplete="username"
      className={`block flex-1 border-0 bg-transparent py-1.5 pl-1
       text-gray-900 placeholder:text-gray-400 focus:ring-0
       sm:text-sm sm:leading-6 ${otherClasses}
       `}
      placeholder="The best name ever"
    />
  );
};
