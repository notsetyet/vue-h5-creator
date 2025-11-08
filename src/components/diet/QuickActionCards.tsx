import { useState } from "react";
import { UtensilsCrossed, LineChart, BookOpen, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import FoodLog from "./FoodLog";
import NutritionAnalysis from "./NutritionAnalysis";
import RecipeRecommendations from "./RecipeRecommendations";

type ActionType = "log" | "analysis" | "recipes" | null;

const QuickActionCards = () => {
  const [selectedAction, setSelectedAction] = useState<ActionType>(null);
  const [isExpanded, setIsExpanded] = useState(true);

  const actions = [
    {
      id: "log" as const,
      title: "饮食记录",
      icon: UtensilsCrossed,
      description: "记录今日饮食",
      color: "bg-blue-500/10 text-blue-700 dark:text-blue-400",
    },
    {
      id: "analysis" as const,
      title: "营养分析",
      icon: LineChart,
      description: "查看营养报告",
      color: "bg-green-500/10 text-green-700 dark:text-green-400",
    },
    {
      id: "recipes" as const,
      title: "食谱推荐",
      icon: BookOpen,
      description: "发现健康食谱",
      color: "bg-purple-500/10 text-purple-700 dark:text-purple-400",
    },
  ];

  const handleActionClick = (actionId: ActionType) => {
    setSelectedAction(actionId);
  };

  const renderDialogContent = () => {
    switch (selectedAction) {
      case "log":
        return <FoodLog />;
      case "analysis":
        return <NutritionAnalysis />;
      case "recipes":
        return <RecipeRecommendations />;
      default:
        return null;
    }
  };

  const getDialogTitle = () => {
    const action = actions.find((a) => a.id === selectedAction);
    return action?.title || "";
  };

  return (
    <>
      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-xs font-medium text-muted-foreground">快捷功能</p>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="h-6 px-2"
          >
            {isExpanded ? (
              <ChevronUp className="h-3 w-3" />
            ) : (
              <ChevronDown className="h-3 w-3" />
            )}
          </Button>
        </div>

        {isExpanded && (
          <div className="grid grid-cols-3 gap-2">
            {actions.map((action) => (
              <button
                key={action.id}
                onClick={() => handleActionClick(action.id)}
                className={`${action.color} rounded-xl p-3 flex flex-col items-center gap-2 transition-all hover:scale-105 active:scale-95`}
              >
                <action.icon className="h-5 w-5" />
                <div className="text-center">
                  <p className="text-xs font-medium">{action.title}</p>
                  <p className="text-[10px] opacity-70">{action.description}</p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      <Dialog open={selectedAction !== null} onOpenChange={() => setSelectedAction(null)}>
        <DialogContent className="max-w-[95vw] max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{getDialogTitle()}</DialogTitle>
          </DialogHeader>
          <div className="mt-4">{renderDialogContent()}</div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default QuickActionCards;
