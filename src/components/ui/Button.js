import Link from "next/link";
import Skeleton from "@/components/ui/Skeleton";

export default function Button({ href, text, variant = "primary", icon, className = "", isLoading = false, onClick }) {
  if (isLoading) {
    return (
      <div className={`rounded-full overflow-hidden ${className}`}>
        <Skeleton height={48} width={180} />
      </div>
    );
  }

  const baseClasses = "rounded-full font-semibold transition-all flex items-center gap-2";

  const variantClasses = variant === "primary"
    ? "bg-gradient-to-r from-[#6391F4] to-[#937DC0] text-white px-8 py-3 shadow-lg hover:shadow-xl hover:opacity-90"
    : "bg-white text-black border border-gray-200 px-8 py-3 shadow-sm hover:bg-gray-50 group";

  const combinedClasses = `${variantClasses} ${baseClasses} ${className}`;

  const content = (
    <>
      {text}
      {icon ? icon : (
        variant === "primary" ? (
          <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        ) : (
          <div className="w-6 h-6 rounded-full border border-blue-500 flex items-center justify-center">
            <svg className="w-3 h-3 text-blue-500 fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        )
      )}
    </>
  );

  if (onClick) {
    return (
      <button onClick={onClick} className={combinedClasses} aria-label={text}>
        {content}
      </button>
    );
  }

  return (
    <Link href={href || "#"} className={combinedClasses} aria-label={text}>
      {content}
    </Link>
  );
}
