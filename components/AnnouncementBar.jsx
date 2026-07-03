import Icon from "./Icon";

export default function AnnouncementBar() {
  return (
    <div className="bg-gold-gradient text-royal-dark text-center text-xs sm:text-sm font-semibold py-2 px-4">
      <p className="flex items-center justify-center gap-2">
        <Icon name="crown" className="w-4 h-4 shrink-0" />
        <span>Grand Opening — The Royal Paws is now open in Bathinda.</span>
      </p>
    </div>
  );
}
