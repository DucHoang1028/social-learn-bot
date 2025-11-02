import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle2, XCircle, Lightbulb, Settings } from "lucide-react";
import { Input } from "@/components/ui/input";

const allQuestions = [
  {
    question: "Giai cấp nào là giai cấp lãnh đạo trong thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam?",
    options: ["Giai cấp nông dân", "Giai cấp công nhân", "Tầng lớp trí thức", "Giai cấp tư sản dân tộc"],
    correct: 1,
    hint: "Giai cấp này gắn liền với quan hệ sản xuất tiến bộ nhất và có tổ chức kỷ luật cao."
  },
  {
    question: "Liên minh giai cấp cơ bản trong xã hội Việt Nam là?",
    options: ["Liên minh công nhân - trí thức", "Liên minh công nhân - nông dân", "Liên minh nông dân - trí thức", "Liên minh các giai cấp lao động"],
    correct: 1,
    hint: "Đây là sự kết hợp giữa giai cấp lãnh đạo và lực lượng đồng minh chiến lược đông đảo nhất."
  },
  {
    question: "Đặc điểm nào sau đây KHÔNG phải của cơ cấu xã hội trong thời kỳ quá độ?",
    options: ["Tồn tại nhiều thành phần kinh tế", "Có sự phân hóa giai cấp phức tạp", "Chỉ tồn tại một giai cấp duy nhất", "Có sự biến đổi không ngừng"],
    correct: 2,
    hint: "Thời kỳ quá độ đặc trưng bởi sự đa dạng và phức tạp, không đơn giản hay thuần nhất."
  },
  {
    question: "Vai trò của tầng lớp trí thức trong thời kỳ quá độ là gì?",
    options: ["Thay thế giai cấp công nhân lãnh đạo", "Đóng góp kiến thức, kỹ năng cho sự phát triển", "Không có vai trò quan trọng", "Chỉ phục vụ giai cấp tư sản"],
    correct: 1,
    hint: "Trí thức đóng vai trò quan trọng trong việc phát triển khoa học công nghệ và văn hóa."
  },
  {
    question: "Tại sao cần có liên minh giai cấp trong thời kỳ quá độ?",
    options: ["Để tạo sự đối lập giữa các giai cấp", "Để tăng cường đấu tranh giai cấp", "Để tập hợp sức mạnh xây dựng xã hội mới", "Để duy trì xã hội giai cấp"],
    correct: 2,
    hint: "Liên minh giai cấp giúp tập trung mọi nguồn lực cho mục tiêu chung của toàn xã hội."
  },
  {
    question: "Cơ sở hình thành cơ cấu xã hội là gì?",
    options: ["Quan hệ chính trị", "Phương thức sản xuất", "Quan hệ văn hóa", "Quan hệ quốc tế"],
    correct: 1,
    hint: "Cơ cấu xã hội được quyết định bởi cách thức con người sản xuất ra của cải vật chất."
  },
  {
    question: "Giai cấp nông dân Việt Nam có đặc điểm nào sau đây?",
    options: ["Là giai cấp lãnh đạo", "Chiếm đa số dân số", "Làm việc trong công nghiệp", "Không tham gia sản xuất"],
    correct: 1,
    hint: "Việt Nam là nước nông nghiệp, nên tỷ lệ dân số làm nông nghiệp rất lớn."
  },
  {
    question: "Đảng Cộng sản Việt Nam đại diện cho giai cấp nào?",
    options: ["Giai cấp nông dân", "Giai cấp công nhân", "Tầng lớp trí thức", "Tất cả các giai cấp"],
    correct: 1,
    hint: "Đảng là đội tiên phong của giai cấp tiên tiến nhất trong xã hội."
  },
  {
    question: "Xu hướng phát triển của cơ cấu xã hội trong thời kỳ quá độ là?",
    options: ["Tăng cường phân chia giai cấp", "Xóa bỏ dần sự phân biệt giai cấp", "Duy trì hiện trạng", "Tạo ra giai cấp mới"],
    correct: 1,
    hint: "Mục tiêu của chủ nghĩa xã hội là xây dựng xã hội không còn giai cấp đối kháng."
  },
  {
    question: "Tầng lớp nào sau đây không thuộc cơ cấu xã hội chính ở Việt Nam?",
    options: ["Giai cấp công nhân", "Giai cấp nông dân", "Giai cấp phong kiến", "Tầng lớp trí thức"],
    correct: 2,
    hint: "Giai cấp này đã bị xóa bỏ sau cách mạng giải phóng dân tộc."
  },
  {
    question: "Vai trò của liên minh công - nông - trí là gì?",
    options: ["Chia rẽ xã hội", "Tập hợp sức mạnh toàn dân tộc", "Loại trừ các tầng lớp khác", "Chỉ phục vụ công nhân"],
    correct: 1,
    hint: "Ba lực lượng này cùng nhau tạo nên khối đại đoàn kết dân tộc."
  },
  {
    question: "Đặc điểm của giai cấp công nhân Việt Nam là?",
    options: ["Không có tổ chức", "Có tính tổ chức kỷ luật cao", "Làm việc riêng lẻ", "Chỉ làm việc ở nông thôn"],
    correct: 1,
    hint: "Giai cấp công nhân làm việc tập thể trong các xí nghiệp, nhà máy."
  },
  {
    question: "Tại sao giai cấp nông dân là đồng minh chiến lược của công nhân?",
    options: ["Vì họ ít người", "Vì họ giàu có", "Vì họ đông đảo và có lợi ích chung", "Vì họ không quan trọng"],
    correct: 2,
    hint: "Nông dân chiếm đa số dân số và cùng với công nhân thuộc giai cấp lao động."
  },
  {
    question: "Thành phần kinh tế nào đóng vai trò chủ đạo trong thời kỳ quá độ?",
    options: ["Kinh tế tư nhân", "Kinh tế nhà nước", "Kinh tế nước ngoài", "Kinh tế cá thể"],
    correct: 1,
    hint: "Thành phần này đại diện cho quan hệ sản xuất xã hội chủ nghĩa."
  },
  {
    question: "Vai trò của doanh nhân trong thời kỳ quá độ là?",
    options: ["Phá hoại kinh tế", "Đóng góp phát triển kinh tế đa thành phần", "Thay thế nhà nước", "Không có vai trò"],
    correct: 1,
    hint: "Doanh nhân tư nhân góp phần tạo việc làm và phát triển kinh tế."
  },
  {
    question: "Mục tiêu cuối cùng của thời kỳ quá độ về cơ cấu xã hội là?",
    options: ["Tăng cường giai cấp", "Xây dựng xã hội không còn giai cấp đối kháng", "Duy trì hiện trạng", "Tạo thêm giai cấp mới"],
    correct: 1,
    hint: "Chủ nghĩa xã hội hướng tới xã hội bình đẳng, không còn áp bức bóc lột."
  },
  {
    question: "Nguồn gốc của giai cấp công nhân là từ?",
    options: ["Giai cấp phong kiến", "Nông dân và thủ công nghiệp", "Trí thức", "Tư sản"],
    correct: 1,
    hint: "Giai cấp công nhân hình thành khi nông dân và thủ công nghiệp tham gia sản xuất công nghiệp."
  },
  {
    question: "Ý nghĩa của việc xóa bỏ sự phân biệt giai cấp là gì?",
    options: ["Làm cho xã hội nghèo nàn", "Tạo ra xã hội bình đẳng, không bóc lột", "Giảm năng suất lao động", "Loại bỏ mọi khác biệt"],
    correct: 1,
    hint: "Không còn giai cấp nghĩa là không còn sự áp bức và bóc lột giữa người với người."
  },
  {
    question: "Đặc điểm của thời kỳ quá độ về cơ cấu xã hội là?",
    options: ["Đơn giản và thuần nhất", "Phức tạp và đa dạng", "Không thay đổi", "Chỉ có một giai cấp"],
    correct: 1,
    hint: "Thời kỳ quá độ có nhiều thành phần kinh tế và nhiều giai cấp tầng lớp khác nhau."
  },
  {
    question: "Nguyên tắc xây dựng liên minh giai cấp là?",
    options: ["Đối lập và đấu tranh", "Đoàn kết dưới sự lãnh đạo của Đảng", "Chia rẽ để trị", "Loại bỏ lẫn nhau"],
    correct: 1,
    hint: "Liên minh cần có sự lãnh đạo đúng đắn và mục tiêu chung rõ ràng."
  }
];

export const Quiz = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [numQuestions, setNumQuestions] = useState(10);
  const [questions, setQuestions] = useState<typeof allQuestions>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const startQuiz = () => {
    const num = Math.min(Math.max(1, numQuestions), 20);
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5).slice(0, num);
    setQuestions(shuffled);
    setQuizStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setShowHint(false);
  };

  const handleAnswer = (answerIndex: number) => {
    if (showFeedback) return;
    setSelectedAnswer(answerIndex);
    setShowFeedback(true);
    if (answerIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
      setShowHint(false);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setShowHint(false);
    setScore(0);
    setShowResult(false);
  };

  if (!quizStarted) {
    return (
      <Card className="max-w-2xl mx-auto shadow-lg">
        <CardHeader className="bg-gradient-to-r from-primary to-secondary text-white">
          <CardTitle className="text-2xl flex items-center gap-2">
            <Settings className="h-6 w-6" />
            Cài Đặt Bài Kiểm Tra
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div className="space-y-3">
            <Label htmlFor="numQuestions" className="text-lg font-semibold">
              Số lượng câu hỏi (tối đa 20)
            </Label>
            <Input
              id="numQuestions"
              type="number"
              min="1"
              max="20"
              value={numQuestions}
              onChange={(e) => setNumQuestions(parseInt(e.target.value) || 10)}
              className="text-lg"
            />
            <p className="text-sm text-muted-foreground">
              Câu hỏi sẽ được chọn ngẫu nhiên từ {allQuestions.length} câu hỏi có sẵn
            </p>
          </div>
          <Button onClick={startQuiz} size="lg" className="w-full">
            Bắt Đầu Kiểm Tra
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (showResult) {
    const percentage = (score / questions.length) * 100;
    return (
      <Card className="max-w-2xl mx-auto shadow-lg">
        <CardHeader className="bg-gradient-to-r from-primary to-secondary text-white">
          <CardTitle className="text-2xl">Kết Quả</CardTitle>
        </CardHeader>
        <CardContent className="p-6 text-center">
          <div className="mb-6">
            <div className="text-6xl font-bold text-primary mb-2">{percentage.toFixed(0)}%</div>
            <p className="text-xl text-muted-foreground">
              Bạn đã trả lời đúng {score}/{questions.length} câu hỏi
            </p>
          </div>
          <Button onClick={resetQuiz} size="lg" className="w-full">
            Làm Lại
          </Button>
        </CardContent>
      </Card>
    );
  }

  const question = questions[currentQuestion];

  return (
    <Card className="max-w-2xl mx-auto shadow-lg">
      <CardHeader className="bg-gradient-to-r from-primary to-secondary text-white">
        <CardTitle className="text-xl">
          Câu {currentQuestion + 1} / {questions.length}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4">{question.question}</h3>

        {/* Hint Button */}
        {!showFeedback && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowHint(!showHint)}
            className="mb-4"
          >
            <Lightbulb className="h-4 w-4 mr-2" />
            {showHint ? "Ẩn Gợi Ý" : "Hiện Gợi Ý"}
          </Button>
        )}

        {showHint && !showFeedback && (
          <div className="mb-4 p-4 bg-accent/10 border-l-4 border-accent rounded">
            <p className="text-sm text-foreground">
              <strong>💡 Gợi ý:</strong> {question.hint}
            </p>
          </div>
        )}

        <RadioGroup
          value={selectedAnswer?.toString()}
          onValueChange={(val) => !showFeedback && handleAnswer(Number(val))}
        >
          <div className="space-y-3">
            {question.options.map((option, idx) => {
              const isCorrect = idx === question.correct;
              const isSelected = idx === selectedAnswer;
              const showCorrectAnswer = showFeedback && isCorrect;
              const showWrongAnswer = showFeedback && isSelected && !isCorrect;

              return (
                <div
                  key={idx}
                  className={`flex items-center space-x-2 ${showCorrectAnswer
                      ? "bg-green-50 border-green-500"
                      : showWrongAnswer
                        ? "bg-red-50 border-red-500"
                        : ""
                    } rounded-lg border-2 transition-all`}
                >
                  <RadioGroupItem
                    value={idx.toString()}
                    id={`option-${idx}`}
                    disabled={showFeedback}
                    className="ml-3"
                  />
                  <Label
                    htmlFor={`option-${idx}`}
                    className={`flex-1 cursor-pointer p-3 flex items-center gap-2 ${showFeedback ? "cursor-not-allowed" : ""
                      }`}
                  >
                    {option}
                    {showCorrectAnswer && <CheckCircle2 className="h-5 w-5 text-green-600" />}
                    {showWrongAnswer && <XCircle className="h-5 w-5 text-red-600" />}
                  </Label>
                </div>
              );
            })}
          </div>
        </RadioGroup>

        {/* Feedback */}
        {showFeedback && (
          <div
            className={`mt-4 p-4 rounded-lg ${selectedAnswer === question.correct
                ? "bg-green-50 border-l-4 border-green-500"
                : "bg-red-50 border-l-4 border-red-500"
              }`}
          >
            <p className="font-semibold">
              {selectedAnswer === question.correct ? "✅ Chính xác!" : "❌ Chưa đúng!"}
            </p>
            <p className="text-sm mt-1">
              Đáp án đúng: <strong>{question.options[question.correct]}</strong>
            </p>
          </div>
        )}

        <div className="flex gap-3 mt-6">
          <Button onClick={handleNext} disabled={!showFeedback} className="flex-1">
            {currentQuestion === questions.length - 1 ? "Hoàn Thành" : "Câu Tiếp"}
          </Button>
        </div>

        <div className="flex gap-2 mt-4 justify-center">
          {questions.map((_, idx) => (
            <div
              key={idx}
              className={`h-2 w-8 rounded-full transition-colors ${idx === currentQuestion ? "bg-primary" : idx < currentQuestion ? "bg-secondary" : "bg-muted"
                }`}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
