import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContentSection } from "@/components/ContentSection";
import { Quiz } from "@/components/Quiz";
import { ChatBot } from "@/components/ChatBot";
import { BookOpen, GraduationCap } from "lucide-react";
import templeImg from "@/assets/vietnam-temple.jpg";
import cultureImg from "@/assets/vietnam-culture.jpg";
import heritageImg from "@/assets/vietnam-heritage.jpg";

const Index = () => {
  const [activeTab, setActiveTab] = useState("content");

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section */}
      <header className="relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-10" />
        
        {/* Background Images Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-3 h-full">
            <img src={templeImg} alt="" className="w-full h-full object-cover" />
            <img src={cultureImg} alt="" className="w-full h-full object-cover" />
            <img src={heritageImg} alt="" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative w-full max-w-[100vw]">
          <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
              <GraduationCap className="h-4 w-4" />
              Lý Luận Chính Trị
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight px-2 break-words">
              Cơ cấu xã hội - giai cấp
            </h1>
            <div className="relative inline-block max-w-full px-2">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground pb-3 break-words">
                Liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên chủ nghĩa xã hội
              </p>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
            </div>

            {/* Decorative Images */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-2xl mx-auto pt-6 sm:pt-8 pb-4 px-2">
              <div className="rounded-lg overflow-hidden shadow-lg border-2 border-primary/20 hover:border-primary/40 transition-all">
                <img src={templeImg} alt="Di sản văn hóa Việt Nam" className="w-full h-32 object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg border-2 border-secondary/20 hover:border-secondary/40 transition-all">
                <img src={cultureImg} alt="Văn hóa truyền thống" className="w-full h-32 object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg border-2 border-accent/20 hover:border-accent/40 transition-all">
                <img src={heritageImg} alt="Kiến trúc lịch sử" className="w-full h-32 object-cover" />
              </div>
            </div>

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
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full max-w-[100vw]">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto w-full">
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
      <footer className="border-t mt-12 sm:mt-16 py-6 sm:py-8 bg-muted/30 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground max-w-[100vw]">
          <p className="text-sm sm:text-base break-words">Tài liệu học tập về lý luận chính trị</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
