export default function Input({ label, isTextArea, ...props }) {
  const classes =
    "w-full p-1 border-2 rounded-lg border-stone-300 focus:border-stone-500 outline-none transition-all text-md bg-stone-200 focus:bg-stone-300 text-stone-600";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {isTextArea ? (
        <textarea {...props} className={classes} />
      ) : (
        <input {...props} className={classes} />
      )}
    </p>
  );
}
