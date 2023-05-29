/**
 * useTodoList
 *
 * @package components
 */

import { NAVIGATION_PATH } from "../../../constants/navigation";
import { useCallback } from "react";
import { useRouter } from "next/router";

type ActionType = {
  handleMoveDetailPage: (id: number) => void;
  handleMoveEditPage: (id: number) => void;
};

/**
 * useTodoList
 */

export const useTodoList = () => {
  const router = useRouter();

  /**
   * 詳細ページに遷移する処理
   * @param {*} id
   * @type {function(*): void}
   */
  const handleMoveDetailPage = useCallback(
    (id: number) => {
      router.push(`${NAVIGATION_PATH.DETAIL}${id}`);
    },
    [router]
  );

  /**
   * 編集ページに遷移する処理
   * @param {*} id
   * @type {function(*): void}
   */
  const handleMoveEditPage = useCallback(
    (id: number) => {
      router.push(`${NAVIGATION_PATH.EDIT}${id}`);
    },
    [router]
  );

  const action: ActionType = {
    handleMoveDetailPage,
    handleMoveEditPage,
  };

  // as const - 全ての値をreadonly（読み取り専用、変更不可）にするアサーション。
  return [action] as const;
};
