export default function AuthSkeleton() {
  return (
    <div className="bg-[#050505]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 w-full shadow-[0_8px_30px_rgb(0,0,0,0.4)] animate-pulse relative overflow-hidden">
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/[0.05] to-transparent pointer-events-none" />

      {/* Header */}
      <div className="h-8 bg-white/10 rounded-lg w-3/5 mb-3" />
      <div className="h-4 bg-white/5 rounded-lg w-2/5 mb-8" />

      {/* Social Buttons */}
      <div className="flex gap-3 mb-6">
        <div className="h-12 bg-white/10 rounded-xl flex-1 border border-white/5" />
        <div className="h-12 bg-white/10 rounded-xl flex-1 border border-white/5" />
        <div className="h-12 bg-white/10 rounded-xl flex-1 border border-white/5" />
      </div>

      {/* Divider */}
      <div className="flex items-center gap-3 mb-8">
        <div className="h-px bg-white/10 flex-1" />
        <div className="h-3 bg-white/10 rounded-md w-8" />
        <div className="h-px bg-white/10 flex-1" />
      </div>

      {/* Form Fields */}
      <div className="space-y-5 mb-8">
        <div>
          <div className="h-4 bg-white/10 rounded-md w-1/4 mb-2.5" />
          <div className="h-11 bg-white/5 border border-white/10 rounded-xl w-full" />
        </div>
        <div>
          <div className="h-4 bg-white/10 rounded-md w-1/4 mb-2.5" />
          <div className="h-11 bg-white/5 border border-white/10 rounded-xl w-full" />
        </div>
      </div>

      {/* Submit Button */}
      <div className="h-12 bg-white/20 rounded-xl w-full mb-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_1.5s_infinite]" />
      </div>

      {/* Footer */}
      <div className="flex justify-center">
        <div className="h-4 bg-white/10 rounded-md w-2/3" />
      </div>
    </div>
  );
}
