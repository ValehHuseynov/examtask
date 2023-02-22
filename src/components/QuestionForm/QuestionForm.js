import React, { useState, useEffect } from "react";
import { useCreateQuestionMutation } from "../../store/api/examApi";
import { v4 as uuid } from "uuid";
import { initialRadioState } from "./formData";

export const QuestionForm = ({ refetch }) => {
  const [createQuestion, { isSuccess }] = useCreateQuestionMutation();

  useEffect(() => {
    if (isSuccess) {
      refetch();
      handleReset();
    }
  }, [isSuccess]);

  const [title, setTitle] = useState("");
  const [answers, setAnswers] = useState(initialRadioState);

  function handleReset() {
    setTitle("");
    setAnswers(initialRadioState);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const body = {
      id: uuid(),
      title,
      answers,
    };
    createQuestion(body);
  }

  function handleChangeRadioButton(variant) {
    setAnswers((prevState) =>
      prevState.map((item) =>
        item.variant === variant
          ? { ...item, isCorrent: true }
          : { ...item, isCorrent: false }
      )
    );
  }

  function handleChangeAnswerInput(variant, value) {
    let answerClone = [...answers];
    const findIndex = answerClone.findIndex((item) => item.variant === variant);

    if (findIndex > -1) {
      answerClone[findIndex] = {
        ...answerClone[findIndex],
        questionAnswer: value,
      };
      setAnswers(answerClone);
    }
  }

  return (
    <div className="QuestionForm">
      <div>Create question</div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="title"
            placeholder="Question Title"
            value={title || ""}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>

        {answers.map((item, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder={`Answer ${item.variant}`}
              value={item.questionAnswer}
              onChange={(event) =>
                handleChangeAnswerInput(item.variant, event.target.value)
              }
            />
            <label>Correct Anser</label>
            <input
              type="radio"
              name="isCorrent"
              checked={item.isCorrent}
              value={item.variant}
              onChange={() => handleChangeRadioButton(item.variant)}
            />
          </div>
        ))}

        <button type="submit">Create Question</button>
      </form>
    </div>
  );
};
