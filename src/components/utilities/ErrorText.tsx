interface ErrorTextParams {
  text: string;
  isShow: boolean;
  additionalClasses?: string;
}

export const ErrorText = (params: ErrorTextParams) => {
  const { text, isShow, additionalClasses } = params;
  const classesToApply = additionalClasses ? additionalClasses : '';
  return isShow ? (
    <p className={`mt-3 text-sm leading-6 text-red-600 ${classesToApply}`}>
      {text}
    </p>
  ) : (
    ''
  );
};
