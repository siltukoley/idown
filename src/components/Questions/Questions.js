// components/Questions/Questions.js

import styles from "./Questions.module.css";
import { questions } from "../../constants/questions"; // Assuming `questions` is your data source
import Accordion from "../utils/Accordion"; // Assuming you have an Accordion component

const Questions = () => {
  return (
    <div className={`${styles.QuestionWrapper} center`}>
      <div className={`${styles.QuestionsWrapperInner} center`}>
        <div className={styles.QuestionsHeading}>
          <p>Frequently Asked Questions (FAQ)</p>
        </div>
        <div className={`${styles.QuestionsList} center`}>
          {questions.map(({ question, answer }, index) => (
            <Accordion
              key={index}
              isUpper={true}
              title={question}
              content={answer}
              iconOpen="plus"
              iconClose="minus"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questions;
