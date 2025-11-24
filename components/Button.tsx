import Image from "next/image";

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
}

const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg shadow-md transition-all duration-200 ease-in-out hover:shadow-lg hover:-translate-y-0.5 active:scale-95 ${variant} ${full ? 'w-full' : 'min-w-[120px]'}`}
      type={type}
    >
      {icon && (
        <Image
          src={icon}
          alt={title}
          width={20}
          height={20}
          className="pointer-events-none"
        />
      )}
      <span className="text-base font-semibold tracking-wide whitespace-nowrap">
        {title}
      </span>
    </button>
  );
};

export default Button