"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { contentData } from "~/lib/content-data";
import Link from "next/link";
interface Option {
  id: string;
  text: string;
}

interface Question {
  id: string;
  text: string;
  options: Option[];
}

interface ResultType {
  title: string;
  description: string;
  image: string;
  recommendedService: string;
  contactButtonText: string;
  contactButtonLink: string;
}

interface QuizContent {
  title: string;
  description: string;
  startButtonText: string;
  nextButtonText: string;
  prevButtonText: string;
  resultButtonText: string;
  resetButtonText: string;
  contactButtonLink: string;
  questions: Question[];
  results: {
    default: ResultType;
    consulting: ResultType;
    marketing: ResultType;
    development: ResultType;
  };
}

const Quiz = () => {
  const quizData = contentData.about.quiz as unknown as QuizContent;
  const [started, setStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  // Функция для определения результата на основе ответов
  const determineResult = (): ResultType => {
    // Простая логика для определения результата (можно расширить)
    const mainGoal = answers.main_goal;

    if (mainGoal === "optimization" || mainGoal === "growth") {
      return quizData.results.consulting;
    } else if (mainGoal === "marketing") {
      return quizData.results.marketing;
    } else if (mainGoal === "digital") {
      return quizData.results.development;
    }

    return quizData.results.default;
  };

  const handleOptionSelect = (questionId: string, optionId: string) => {
    setAnswers({
      ...answers,
      [questionId]: optionId,
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleReset = () => {
    setStarted(false);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowResult(false);
  };

  // Если квиз не запущен, показываем начальный экран
  if (!started) {
    return (
      <Card className="mx-auto flex w-full max-w-2xl flex-col items-center">
        <CardHeader className="flex w-full flex-col gap-3 text-center">
          <CardTitle className="w-full text-center">
            <h3>{quizData.title}</h3>
          </CardTitle>
          <CardDescription>
            <p>{quizData.description}</p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={() => setStarted(true)} className="max-w-md">
            {quizData.startButtonText}
          </Button>
        </CardContent>
      </Card>
    );
  }

  // Если нужно показать результат
  if (showResult) {
    const result = determineResult();

    return (
      <Card className="mx-auto max-w-2xl overflow-hidden">
        <div className="relative h-48 w-full">
          <Image
            src={result.image}
            alt={result.recommendedService}
            fill
            className="rounded-md object-cover"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-center">{result.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground text-center">
            {result.description}
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button variant="outline" onClick={handleReset}>
              {quizData.resetButtonText}
            </Button>
            <Link href={result.contactButtonLink}>
              <Button>{result.contactButtonText}</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Показываем текущий вопрос
  const currentQuestion = quizData.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quizData.questions.length - 1;
  const isAnswered =
    currentQuestion && answers[currentQuestion.id] !== undefined;

  return (
    <Card className="mx-auto flex max-w-2xl flex-col">
      <CardHeader>
        <CardTitle className="text-center break-words">
          <h3>{currentQuestion?.text}</h3>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6 space-y-4">
          {currentQuestion?.options.map((option) => (
            <Button
              key={option.id}
              variant={
                currentQuestion && answers[currentQuestion.id] === option.id
                  ? "default"
                  : "outline"
              }
              className="h-auto w-full justify-start border text-left break-words hyphens-auto whitespace-normal"
              style={{ wordWrap: "break-word", wordBreak: "break-word" }}
              onClick={() =>
                currentQuestion &&
                handleOptionSelect(currentQuestion.id, option.id)
              }
            >
              <span className="w-full break-words whitespace-normal">
                {option.text}
              </span>
            </Button>
          ))}
        </div>
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrev}
            disabled={currentQuestionIndex === 0}
          >
            {quizData.prevButtonText}
          </Button>
          <Button onClick={handleNext} disabled={!isAnswered}>
            {isLastQuestion
              ? quizData.resultButtonText
              : quizData.nextButtonText}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Quiz;
