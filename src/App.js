import "./App.css";
import { QuestionForm } from "./components/QuestionForm";
import { QuestionList } from "./components/Questions";
import { useGetQuestionsQuery } from "./store/api/examApi";

function App() {
  const { isLoading, data, refetch } = useGetQuestionsQuery();
  return (
    <div className="App">
      <QuestionList questions={data} isLoading={isLoading} refetch={refetch} />

      <hr />
      <QuestionForm refetch={refetch} />
    </div>
  );
}

export default App;
