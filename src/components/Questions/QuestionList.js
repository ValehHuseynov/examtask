import React, { useEffect } from "react";
import { useDeleteQuestionMutation } from "../../store/api/examApi";

export const QuestionList = ({ questions, isLoading, refetch }) => {
  const [deleteQuestion, { isSuccess }] = useDeleteQuestionMutation();
  useEffect(() => {
    if (isSuccess) {
      refetch();
    }
  }, [isSuccess]);

  return (
    <div>
      <h4>Questions</h4>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        questions.map((question) => (
          <div key={question.id}>
            <div>
              {question.title} ---{" "}
              <button onClick={() => deleteQuestion(question.id)}>
                Delete
              </button>
              <button>Edit</button>
            </div>
            <div>
              {question.answers.map((answer) => (
                <div key={answer.variant}>
                  <label>{`${answer.variant}) ${answer.questionAnswer}`}</label>
                  <input type="radio" name="variant" value={answer.variant} />
                </div>
              ))}
            </div>
            <hr />
          </div>
        ))
      )}
    </div>
  );
};
