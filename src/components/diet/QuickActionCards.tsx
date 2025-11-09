import { useState } from "react";
import { UtensilsCrossed, LineChart, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import NutritionAnalysis from "./NutritionAnalysis";
import RecipeRecommendations from "./RecipeRecommendations";

type ActionType = "analysis" | "recipes" | null;

const QuickActionCards = () => {
  const navigate = useNavigate();
  const [selectedAction, setSelectedAction] = useState<ActionType>(null);

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

  const handleActionClick = (actionId: ActionType | "log") => {
    if (actionId === "log") {
      navigate("/profile?tab=diet");
    } else {
      setSelectedAction(actionId);
    }
  };

  const renderDialogContent = () => {
    switch (selectedAction) {
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
      <div className="px-4 py-2">
        <div className="flex gap-2 items-start">
          {actions.map((action) => (
            <button
              key={action.id}
              onClick={() => handleActionClick(action.id)}
              className={`${action.color} rounded-lg p-2 flex flex-col items-center gap-1 transition-all hover:scale-105 active:scale-95 min-w-[70px]`}
            >
              <action.icon className="h-4 w-4" />
              <p className="text-[10px] font-medium whitespace-nowrap">{action.title}</p>
            </button>
          ))}
        </div>
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
