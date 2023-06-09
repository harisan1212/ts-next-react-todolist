/**
 * useTodoCreateTemplate
 *
 * @package hooks
 */

import { useState, useCallback } from "react";
import { useRouter } from "next/router";
import { NAVIGATION_PATH } from "../../../constants/navigation";
import { EventType } from "../../../interfaces/Event";

type Params = {
  addTodo: (title: string, content: string) => void;
};

type StatesType = {
  inputTitle: string;
  inputContent: string;
};

type ActionsType = {
  handleChangeTitle: EventType["onChangeInput"];
  handleChangeContent: EventType["onChangeTextArea"];
  handleCreateTodo: EventType["onSubmit"];
};

/**
 * useTodoCreateTemplate
 * @param addTodo
 */
export const useTodoCreateTemplate = ({ addTodo }: Params) => {
  const router = useRouter();
  /* local State */
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");

  /* 「title」変更処理 */
  const handleChangeTitle: EventType["onChangeInput"] = useCallback((e) => {
    setInputTitle(e.target.value);
  }, []);

  /* 「content」変更処理 */
  const handleChangeContent: EventType["onChangeTextArea"] = useCallback(
    (e) => {
      setInputContent(e.target.value);
    },
    []
  );
  /**
   * Todo追加処理
   */
  const handleCreateTodo: EventType["onSubmit"] = useCallback(
    (e) => {
      e.preventDefault();
      if (inputTitle !== "" && inputContent !== "") {
        addTodo(inputTitle, inputContent);
        router.push(NAVIGATION_PATH.TOP);
      }
    },
    [inputTitle, inputContent, addTodo, router]
  );

  const states: StatesType = {
    inputTitle,
    inputContent,
  };

  const actions: ActionsType = {
    handleChangeTitle,
    handleChangeContent,
    handleCreateTodo,
  };

  return [states, actions] as const;
};
