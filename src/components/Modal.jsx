import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({
  children,
  ref,
  buttonCaption,
  cta,
  onCtaAction,
}) {
  const dialog = useRef(null);

  useImperativeHandle(ref, () => ({
    open: () => {
      return dialog.current.showModal();
    },
  }));

  return createPortal(
    <dialog
      ref={dialog}
      className="relative p-8 rounded-lg bg-orange-200 border-orange-700 backdrop:bg-black/90 shadow-md"
      aria-labelledby="modal-title"
      aria-modal="true"
    >
      <button
        type="button"
        className="absolute top-[7px] right-[20px] text-2xl font-semibold hover:cursor-pointer"
        onClick={() => dialog.current.close()}
        aria-label="Close"
      >
        X
      </button>
      <div role="document">{children}</div>

      <form method="dialog" className="text-right">
        <button
          className=" bg-stone-700 py-1 px-4 rounded-lg text-slate-50 hover:bg-stone-800 transition text-lg"
          onClick={
            cta
              ? (e) => {
                  e.preventDefault(); //prevents default form submission behaviour, since no action is associated with the form, we prevent its default behavior of submission when the button is clicked.
                  onCtaAction();
                }
              : undefined
          }
        >
          {buttonCaption}
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
}
