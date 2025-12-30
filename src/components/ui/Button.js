import Link from "next/link";
import Skeleton from "@/components/ui/Skeleton";

export default function Button({ href, text, variant = "primary", icon, className = "", isLoading = false }) {
  if (isLoading) {
    return (
      <div className={`rounded-full overflow-hidden ${className}`}>
        <Skeleton height={48} width={180} />
      </div>
    );
  }

  if (variant === "primary") {
    return (
      <Link
        href={href || "#"}
        className={`bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:opacity-90 transition-all flex items-center gap-2 ${className}`}
      >
        {text}
        {icon ? icon : (
          <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        )}
      </Link>
    );
  }

  // Secondary Variant
  return (
    <Link
      href={href || "#"}
      className={`bg-white text-gray-900 border border-gray-200 px-8 py-3 rounded-full font-semibold shadow-sm hover:bg-gray-50 transition-all flex items-center gap-2 group ${className}`}
    >
      {text}
      {icon ? icon : (
        <div className="w-6 h-6 rounded-full border border-blue-500 flex items-center justify-center">
          <svg className="w-3 h-3 text-blue-500 fill-current" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      )}
    </Link>
  );
}
