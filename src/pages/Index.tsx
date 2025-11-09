import AIChat from "@/components/diet/AIChat";

const Index = () => {
  return (
    <div className="h-full bg-background flex flex-col">
      <div className="border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="px-4 py-3">
          <h1 className="text-xl font-bold text-foreground">饮食健康管家</h1>
          <p className="text-xs text-muted-foreground">智能助手为您提供健康建议</p>
        </div>
      </div>

      <div className="flex-1 overflow-hidden">
        <AIChat />
      </div>
    </div>
  );
};

export default Index;
