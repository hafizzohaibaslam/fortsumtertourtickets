export const getBadgeColor = (status: string) => {
  switch (status) {
    case "completed":
      return ["bg-[#007AFF1A]", "text-[#007AFF]"];
    case "pending":
      return ["bg-[#FF3B301A]", "text-[#FF3B30]"];
    case "in-progress":
      return ["bg-[#FFCC001A]", "text-[#BA970B]"];
    default:
      return ["bg-[#007AFF1A]", "text-[#007AFF]"];
  }
};
