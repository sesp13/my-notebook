interface SampleButtonParams {
  text: string;
  buttonType?: 'button' | 'submit';
  additionalClasses?: string;
  isDisabled?: boolean;
  ariaLabel?: string;
  onClick?: () => void;
}

export const SampleButton = (params: SampleButtonParams) => {
  const {
    text,
    additionalClasses,
    buttonType,
    isDisabled,
    onClick,
    ariaLabel,
  } = params;
  const computedType = buttonType ? buttonType : 'button';
  const otherClasses = additionalClasses ? additionalClasses : '';
  const computedDisabled = isDisabled ? true : false;
  const computedAriaLabel = ariaLabel ? ariaLabel : '';

  const onSampleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      type={computedType}
      className={`rounded-md bg-main px-3 py-2 text-sm
       font-semibold text-white shadow-sm hover:bg-orange-500
       focus-visible:outline focus-visible:outline-2
       focus-visible:outline-offset-2 focus-visible:outline-orange-500
      ${otherClasses}`}
      disabled={computedDisabled}
      aria-label={computedAriaLabel}
      onClick={onSampleClick}
    >
      {text}
    </button>
  );
};
