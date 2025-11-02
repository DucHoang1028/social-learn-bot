import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContentSection } from "@/components/ContentSection";
import { Quiz } from "@/components/Quiz";
import { ChatBot } from "@/components/ChatBot";
import { BookOpen, GraduationCap } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("content");

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-10" />
        <div className="container mx-auto px-4 py-16 relative">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
              <GraduationCap className="h-4 w-4" />
              Lý Luận Chính Trị
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Chương 5: Cơ cấu xã hội - giai cấp
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên chủ nghĩa xã hội
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="shadow-lg hover:shadow-xl transition-all"
                onClick={() => setActiveTab("quiz")}
              >
                <GraduationCap className="mr-2 h-5 w-5" />
                Bắt Đầu Học
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="content" className="text-lg">
              <BookOpen className="mr-2 h-5 w-5" />
              Nội Dung
            </TabsTrigger>
            <TabsTrigger value="quiz" className="text-lg">
              <GraduationCap className="mr-2 h-5 w-5" />
              Kiểm Tra
            </TabsTrigger>
          </TabsList>

          <TabsContent value="content" className="mt-6">
            <ContentSection />
          </TabsContent>

          <TabsContent value="quiz" className="mt-6">
            <Quiz />
          </TabsContent>
        </Tabs>
      </main>

      {/* ChatBot */}
      <ChatBot />

      {/* Footer */}
      <footer className="border-t mt-16 py-8 bg-muted/30">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>Tài liệu học tập về lý luận chính trị - Chương 5</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
