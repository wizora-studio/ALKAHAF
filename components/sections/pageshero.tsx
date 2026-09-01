import Link from "next/link";
import Image from "next/image";
import { Monitor, Video, Globe, LucideIcon } from "lucide-react";

interface PagesHeroProps {
  title: string;
  highlight?: string;
  description: string;
  badge?: {
    text: string;
    icon: LucideIcon;
  };
  imageSrc?: string;
  imageAlt?: string;
  primaryAction?: {
    text: string;
    href: string;
  };
  secondaryAction?: {
    text: string;

    href: string;
  };
  video?: React.ReactNode;
}

const PagesHero = ({
  title,
  highlight,
  description,
  badge,
  imageSrc = "/images/online-learning.png",
  imageAlt = "Hero Image",
  primaryAction,
  secondaryAction,
  video,
}: PagesHeroProps) => {
  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-br from-[#FCFBF8] via-[#FAF7F2] to-[#F5F0E6] border-b border-[#EAE3D6] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 relative z-10 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="text-[#2D1C13] space-y-6">
          {badge && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#9F7A38] text-sm font-bold animate-fade-in-up">
              <badge.icon className="w-4 h-4" />
              {badge.text}
            </div>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-[#2D1C13]">
            {title}{" "}
            {highlight && (
              <span className="text-[#C5A059] italic">{highlight}</span>
            )}
          </h1>
          <p className="text-lg text-[#5C4A3E] leading-relaxed max-w-lg font-medium">
            {description}
          </p>
          {(primaryAction || secondaryAction) && (
            <div className="flex flex-wrap gap-4 pt-4">
              {primaryAction && (
                <Link
                  href={primaryAction.href}
                  className="px-6 py-3 md:px-8 md:py-4 bg-[#C5A059] text-white font-bold rounded-full hover:bg-[#B38F46] transition-all shadow-[0_4px_14px_rgba(197,160,89,0.35)] hover:-translate-y-1 active:scale-95 text-sm md:text-base"
                >
                  {primaryAction.text}
                </Link>
              )}
              {secondaryAction && (
                <Link
                  href={secondaryAction.href}
                  className="px-6 py-3 md:px-8 md:py-4 bg-white border border-[#EAE3D6] text-[#2D1C13] font-bold rounded-full hover:bg-[#FAF7F2] transition-all shadow-sm active:scale-95 text-sm md:text-base"
                >
                  {secondaryAction.text}
                </Link>
              )}
            </div>
          )}
        </div>
        <div className="relative animate-fade-in-up delay-100">
          <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative group bg-black">
            {video ? (
              <div className="w-full h-full">{video}</div>
            ) : (
              <>
                <div className="absolute inset-0 bg-gray-800 flex items-center justify-center text-white/50">
                  {/* Fallback */}
                </div>
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </>
            )}
          </div>
          {/* Float Card - Optional or configurable? Keeping it for "Live Sessions" context which is common, 
              but maybe should be optional or prop driven. 
              For now, I'll keep it static or make it generic if 'badge' is passed? 
              Actually, the user said "same hero section...". 
              I'll leave it as is but maybe change text if needed. 
              Let's make it conditioned on being 'online' or just generic 'Quality Education'.
              For now I will hardcode it for 'online' vibe or remove it if not relevant to 'About'.
              The prompt implies reusing the component. I'll make it generic or remove specific "Live Sessions" text if it doesn't fit.
              Let's just keep it as a "Quality" indicator or hide it if no props.
              I will hide the floating card for now to be safe, or make it a prop? 
              Let's adding a prop `showFloatingCard` or similar if I want to be perfect.
              But to keep it simple and effective, I'll remove the specific "Live Sessions" card to avoid context mismatch (e.g. physical classes).
              OR I can replace it with a generic "Trusted since 2015" or similar. 
              Let's remove it for generic usage to avoid confusion.
          */}
        </div>
      </div>
    </section>
  );
};

export default PagesHero;
