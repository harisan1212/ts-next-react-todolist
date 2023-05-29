/**
 * navigations
 *
 * @package constants
 */

/**
 * リンク先一覧
 * 遷移先定義の際に使用
 * @type {{TOP:string, DETAIL:string, EDIT:string, CREATE:string}}
 */
export const NAVIGATION_LIST = {
  TOP: `/`,
  DETAIL: `/todo/detail/:id`,
  EDIT: `/todo/edit/:id`,
  CREATE: `/todo/create`,
};

/**
 * パス一覧
 * 画面遷移時に使用
 * @type {{TOP:string, DETAIL:string, EDIT:string, CREATE:string}}
 */
export const NAVIGATION_PATH = {
  TOP: `/`,
  DETAIL: `/todo/detail/`,
  EDIT: `/todo/edit/`,
  CREATE: `/todo/create`,
};
