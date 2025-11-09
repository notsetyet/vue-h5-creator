import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CustomPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-end p-8">
      <Button
        onClick={() => navigate("/")}
        className="mb-8"
        size="lg"
      >
        跳转饮食助手
      </Button>
    </div>
  );
};

export default CustomPage;
