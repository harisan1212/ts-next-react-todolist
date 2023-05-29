/**
 * EditPage
 *
 * @package pages
 */

import type { NextPage } from 'next';
import { TodoEditTemplate } from '../../../Components/templates/TodoEditTemplate';

/**
 * TodoEditPage
 * @returns {JSX.Element}
 */
const TodoEditPage: NextPage = () => <TodoEditTemplate />;

export default TodoEditPage;
