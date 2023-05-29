/**
 * NavigationLink
 *
 * @package components
 */
import { FC } from "react";
import Link from "next/link";
import styles from "./styles.module.css";
type Props = { title: string; linkPath: string };

/**
 * NavigationLink - component
 * @param title -　ナビゲーションのタイトル
 * @param linkPath - 遷移先のURL
 */
export const NavigationLink: FC<Props> = (props) => {
  const { title, linkPath } = props;
  return (
    <li className={styles.li}>
      <Link href={linkPath}>{title}</Link>
    </li>
  );
};
