interface Props {
  index: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ index, title, subtitle }: Props) {
  return (
    <div className="mb-10 sm:mb-12 space-y-3">
      <div className="flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.26em] sm:tracking-[0.3em]">
        <span className="px-2 py-0.5 border border-neon text-neon">{index}</span>
        <span className="h-px flex-1 bg-border" />
        {subtitle && <span className="text-muted-foreground hidden sm:inline">{subtitle}</span>}
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-foreground leading-none">
        {title}
      </h2>
    </div>
  );
}
