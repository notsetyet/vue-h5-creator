import AIChat from "@/components/diet/AIChat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="sticky top-0 z-10 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="px-4 py-3">
          <h1 className="text-xl font-bold text-foreground">饮食健康管家</h1>
          <p className="text-xs text-muted-foreground">智能助手为您提供健康建议</p>
        </div>
      </header>

      <main className="flex-1 overflow-hidden">
        <AIChat />
      </main>
    </div>
  );
};

export default Index;
