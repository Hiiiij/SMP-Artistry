

export default function Logo({ small }: { small?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <img
        src="/images/logo.png"
        alt=""
        width={80}
        height={80}
        className={small ? "h-7.5 w-auto" : "h-15 w-auto"}
      />
        <img
        src="/images/logotyp.png"
        alt=""
        width={400}
        height={160}
        className={small ? "h-5 w-auto" : "h-10 w-auto"}
      />
    </div>
  );
}
