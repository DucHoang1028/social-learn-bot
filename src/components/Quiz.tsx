import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle2, XCircle } from "lucide-react";

const quizData = [
  {
    question: "Giai cấp nào là giai cấp lãnh đạo trong thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam?",
    options: [
      "Giai cấp nông dân",
      "Giai cấp công nhân",
      "Tầng lớp trí thức",
      "Giai cấp tư sản dân tộc"
    ],
    correct: 1
  },
  {
    question: "Liên minh giai cấp cơ bản trong xã hội Việt Nam là?",
    options: [
      "Liên minh công nhân - trí thức",
      "Liên minh công nhân - nông dân",
      "Liên minh nông dân - trí thức",
      "Liên minh các giai cấp lao động"
    ],
    correct: 1
  },
  {
    question: "Đặc điểm nào sau đây KHÔNG phải của cơ cấu xã hội trong thời kỳ quá độ?",
    options: [
      "Tồn tại nhiều thành phần kinh tế",
      "Có sự phân hóa giai cấp phức tạp",
      "Chỉ tồn tại một giai cấp duy nhất",
      "Có sự biến đổi không ngừng"
    ],
    correct: 2
  },
  {
    question: "Vai trò của tầng lớp trí thức trong thời kỳ quá độ là gì?",
    options: [
      "Thay thế giai cấp công nhân lãnh đạo",
      "Đóng góp kiến thức, kỹ năng cho sự phát triển",
      "Không có vai trò quan trọng",
      "Chỉ phục vụ giai cấp tư sản"
    ],
    correct: 1
  },
  {
    question: "Tại sao cần có liên minh giai cấp trong thời kỳ quá độ?",
    options: [
      "Để tạo sự đối lập giữa các giai cấp",
      "Để tăng cường đấu tranh giai cấp",
      "Để tập hợp sức mạnh xây dựng xã hội mới",
      "Để duy trì xã hội giai cấp"
    ],
    correct: 2
  }
];

export const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(quizData.length).fill(null));

  const handleNext = () => {
    if (selectedAnswer !== null) {
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = selectedAnswer;
      setAnswers(newAnswers);

      if (selectedAnswer === quizData[currentQuestion].correct) {
        setScore(score + 1);
      }
    }

    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(answers[currentQuestion + 1]);
    } else {
      setShowResult(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(answers[currentQuestion - 1]);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers(Array(quizData.length).fill(null));
  };

  if (showResult) {
    const percentage = (score / quizData.length) * 100;
    return (
      <Card className="max-w-2xl mx-auto shadow-lg">
        <CardHeader className="bg-gradient-to-r from-primary to-secondary text-white">
          <CardTitle className="text-2xl">Kết Quả</CardTitle>
        </CardHeader>
        <CardContent className="p-6 text-center">
          <div className="mb-6">
            <div className="text-6xl font-bold text-primary mb-2">{percentage.toFixed(0)}%</div>
            <p className="text-xl text-muted-foreground">
              Bạn đã trả lời đúng {score}/{quizData.length} câu hỏi
            </p>
          </div>
          
          <div className="space-y-4 mb-6 text-left">
            {quizData.map((q, idx) => (
              <div key={idx} className="p-4 bg-muted rounded-lg">
                <div className="flex items-start gap-2">
                  {answers[idx] === q.correct ? (
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  ) : (
                    <XCircle className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <p className="font-medium mb-2">{q.question}</p>
                    <p className="text-sm text-muted-foreground">
                      Đáp án đúng: {q.options[q.correct]}
                    </p>
                    {answers[idx] !== q.correct && answers[idx] !== null && (
                      <p className="text-sm text-destructive">
                        Bạn đã chọn: {q.options[answers[idx]!]}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Button onClick={resetQuiz} size="lg" className="w-full">
            Làm Lại
          </Button>
        </CardContent>
      </Card>
    );
  }

  const question = quizData[currentQuestion];

  return (
    <Card className="max-w-2xl mx-auto shadow-lg">
      <CardHeader className="bg-gradient-to-r from-primary to-secondary text-white">
        <CardTitle className="text-xl">
          Câu {currentQuestion + 1} / {quizData.length}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-6">{question.question}</h3>
        
        <RadioGroup value={selectedAnswer?.toString()} onValueChange={(val) => setSelectedAnswer(Number(val))}>
          <div className="space-y-3">
            {question.options.map((option, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <RadioGroupItem value={idx.toString()} id={`option-${idx}`} />
                <Label
                  htmlFor={`option-${idx}`}
                  className="flex-1 cursor-pointer p-3 rounded-lg border border-border hover:bg-muted transition-colors"
                >
                  {option}
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>

        <div className="flex gap-3 mt-6">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="flex-1"
          >
            Câu Trước
          </Button>
          <Button
            onClick={handleNext}
            disabled={selectedAnswer === null}
            className="flex-1"
          >
            {currentQuestion === quizData.length - 1 ? "Hoàn Thành" : "Câu Tiếp"}
          </Button>
        </div>

        <div className="flex gap-2 mt-4 justify-center">
          {quizData.map((_, idx) => (
            <div
              key={idx}
              className={`h-2 w-8 rounded-full transition-colors ${
                idx === currentQuestion
                  ? "bg-primary"
                  : answers[idx] !== null
                  ? "bg-secondary"
                  : "bg-muted"
              }`}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
