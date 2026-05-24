export default function AuthSkeleton() {
  return (
    <div className="bg-white border border-[var(--color-border)] rounded-3xl p-8 w-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] animate-pulse">
      {/* Header */}
      <div className="h-8 bg-[var(--color-panel)] rounded-lg w-3/5 mb-3"></div>
      <div className="h-4 bg-[var(--color-panel)] rounded-lg w-2/5 mb-8"></div>
      
      {/* Social Buttons */}
      <div className="flex gap-3 mb-6">
        <div className="h-12 bg-[var(--color-panel)] rounded-xl flex-1"></div>
        <div className="h-12 bg-[var(--color-panel)] rounded-xl flex-1"></div>
        <div className="h-12 bg-[var(--color-panel)] rounded-xl flex-1"></div>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-3 mb-8">
        <div className="h-px bg-[var(--color-border)] flex-1"></div>
        <div className="h-3 bg-[var(--color-panel)] rounded-md w-8"></div>
        <div className="h-px bg-[var(--color-border)] flex-1"></div>
      </div>

      {/* Form Fields */}
      <div className="space-y-5 mb-8">
        <div>
          <div className="h-4 bg-[var(--color-panel)] rounded-md w-1/4 mb-2.5"></div>
          <div className="h-11 bg-[var(--color-panel)] rounded-xl w-full"></div>
        </div>
        <div>
          <div className="h-4 bg-[var(--color-panel)] rounded-md w-1/4 mb-2.5"></div>
          <div className="h-11 bg-[var(--color-panel)] rounded-xl w-full"></div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="h-12 bg-[var(--color-panel)] rounded-xl w-full mb-6"></div>
      
      {/* Footer */}
      <div className="flex justify-center">
        <div className="h-4 bg-[var(--color-panel)] rounded-md w-2/3"></div>
      </div>
    </div>
  );
}
