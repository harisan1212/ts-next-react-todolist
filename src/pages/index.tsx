/**
 * TodoListPage
 *
 * @package pages
 */
import type { NextPage } from 'next';
import { TodoTemplate } from '../Components/templates/TodoTemplate';

/**
 * TodoListPage
 * @returns {JSX.Element}
 */
const TodoPage: NextPage = () => <TodoTemplate />;

export default TodoPage;
