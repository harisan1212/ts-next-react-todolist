/**
 * TodoCreateTemplate
 *
 * @package components
 */

import { useTodoContext } from "../../../contexts/TodoContext";
import { BaseLayout } from "../../organisms/BaseLayout";
import { InputForm } from "../../atoms/InputForm";
import { TextArea } from "../../atoms/TextArea";
import { CommonButton } from "../../atoms/CommonButton";
import { useTodoCreateTemplate } from "./useTodoCreateTemplate";
import styles from "./styles.module.css";

/**
 * TodoCreateTemplate
 * @returns {JSX.Element}
 */
export const TodoCreateTemplate = () => {
  const { addTodo } = useTodoContext();
  const [
    { inputTitle, inputContent },
    { handleChangeTitle, handleChangeContent, handleCreateTodo },
  ] = useTodoCreateTemplate({ addTodo });

  return (
    <BaseLayout title={"Create Todo"}>
      <form className={styles.container} onSubmit={handleCreateTodo}>
        <div className={styles.area}>
          <InputForm
            value={inputTitle}
            placeholder={"Title"}
            onChange={handleChangeTitle}
          />
        </div>
        <div className={styles.area}>
          <TextArea
            value={inputContent}
            placeholder={"Content"}
            onChange={handleChangeContent}
          />
        </div>
        <div className={styles.area}>
          <CommonButton type={"submit"} title={"Create Todo"} />
        </div>
      </form>
    </BaseLayout>
  );
};
