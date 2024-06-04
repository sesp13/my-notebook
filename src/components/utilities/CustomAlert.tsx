interface CustomAlertProps {
  additionalClasses?: string;
  title?: string;
  content: string;
  alertType: 'success' | 'error';
}

export const CustomAlert = (props: CustomAlertProps) => {
  const { content, alertType, title, additionalClasses } = props;

  const successClasses =
    'bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative';
  const errorClasses =
    'bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded';

  const computedClasses =
    alertType === 'success' ? successClasses : errorClasses;

  return (
    <div className={`max-w-sm mx-auto mt-10 ${additionalClasses}`}>
      <div className={computedClasses} role="alert">
        {title !== undefined ? (
          <strong className="font-bold">{title}</strong>
        ) : (
          ''
        )}
        <span className="block">{content}</span>
      </div>
    </div>
  );
};
