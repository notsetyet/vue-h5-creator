import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { User, ChevronDown } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import FoodLog from "@/components/diet/FoodLog";

interface Patient {
  id: string;
  name: string;
  gender: string;
  age: number;
}

const Profile = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialTab = searchParams.get("tab") || "medical";

  const [patients] = useState<Patient[]>([
    { id: "1", name: "张三", gender: "男", age: 35 },
    { id: "2", name: "李四", gender: "女", age: 28 },
  ]);
  const [currentPatient, setCurrentPatient] = useState<Patient>(patients[0]);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="px-4 py-3 space-y-3">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-foreground">个人档案</h1>
            <Button variant="ghost" size="icon" onClick={() => navigate("/health")}>
              <span className="text-sm">返回</span>
            </Button>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>当前就诊人：{currentPatient.name}</span>
                </div>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[calc(100vw-2rem)]">
              {patients.map((patient) => (
                <DropdownMenuItem
                  key={patient.id}
                  onClick={() => setCurrentPatient(patient)}
                >
                  {patient.name} ({patient.gender}, {patient.age}岁)
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Card className="border-border">
            <CardContent className="pt-4 pb-3">
              <div className="flex gap-6 text-sm">
                <div>
                  <span className="text-muted-foreground">姓名：</span>
                  <span className="font-medium text-foreground">{currentPatient.name}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">性别：</span>
                  <span className="font-medium text-foreground">{currentPatient.gender}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">年龄：</span>
                  <span className="font-medium text-foreground">{currentPatient.age}岁</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </header>

      <main className="p-4">
        <Tabs defaultValue={initialTab} className="w-full">
          <TabsList className="w-full grid grid-cols-4">
            <TabsTrigger value="medical">就医记录</TabsTrigger>
            <TabsTrigger value="documents">就诊资料夹</TabsTrigger>
            <TabsTrigger value="history">健康史</TabsTrigger>
            <TabsTrigger value="diet">饮食记录</TabsTrigger>
          </TabsList>

          <TabsContent value="medical" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>就医记录</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground py-8">暂无就医记录</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documents" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>就诊资料夹</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground py-8">暂无就诊资料</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>健康史</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground py-8">暂无健康史记录</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="diet" className="mt-4">
            <FoodLog />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Profile;
