"use client";

const ResultPopUp = ({ result, onClose }) => {
  if (!result) return null;

  const {
    tone = "Result",
    result: answer = "",
    slogan = "",
    description = "",
    metaInfo = {},
  } = result;

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-6 animate-fadeIn"
        role="dialog"
        aria-modal="true"
        aria-label="Result"
        onClick={onClose}
      >
        <div
          className="relative w-full max-w-3xl overflow-y-auto px-0 sm:px-2"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="overflow-hidden rounded-3xl border-4 border-amber-200 bg-white shadow-2xl shadow-amber-200/50 ring-1 ring-amber-300/70 animate-rise">
            <div className="flex items-start justify-between border-b border-amber-100 bg-amber-50/70 px-6 py-4">
              <div className="space-y-1">
                <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-800">
                  {tone}
                </span>
                <h2 className="text-2xl font-semibold text-amber-900">Prashnavali Result</h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-amber-200 bg-white px-3 py-1 text-sm font-medium text-amber-900 transition hover:-translate-y-0.5 hover:bg-amber-100 hover:shadow"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <div className="space-y-4 px-6 py-6">
              {answer && (
                <div className="rounded-2xl border border-amber-100 bg-amber-50/60 px-4 py-3 text-lg font-semibold text-amber-900 shadow-inner">
                  {answer}
                </div>
              )}

              {slogan && (
                <div className="rounded-2xl border border-amber-50 bg-gradient-to-r from-amber-50 to-orange-50 px-4 py-3 text-base font-medium text-amber-800">
                  {slogan}
                </div>
              )}

              {description && (
                <p className="whitespace-pre-line rounded-2xl border border-amber-100 bg-white px-4 py-4 text-sm leading-relaxed text-amber-900 shadow-inner">
                  {description}
                </p>
              )}

              {metaInfo?.source && (
                <div className="flex items-center justify-between rounded-2xl border border-amber-100 bg-amber-50/70 px-4 py-2 text-xs text-amber-800">
                  <span className="font-semibold">Source</span>
                  <a
                    href={metaInfo.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="truncate text-amber-900 underline hover:text-amber-700"
                  >
                    {metaInfo.source}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes rise {
          from {
            opacity: 0;
            transform: translateY(14px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 180ms ease-out;
        }
        .animate-rise {
          animation: rise 220ms ease-out;
        }
      `}</style>
    </>
  );
};

export default ResultPopUp;
