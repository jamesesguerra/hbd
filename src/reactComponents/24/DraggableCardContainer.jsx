import { cn } from "~/lib/utils";

export const DraggableCardContainer = ({
  className,
  children,
}) => {
  return (
    <div className={cn("[perspective:3000px]", className)}>{children}</div>
  );
};